// Mock mode guards: the mock questions must reach the browser only through
// the server, and the server's marking must match js/sjt-engine.js.
"use strict";
const test = require("node:test");
const assert = require("node:assert");
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const read = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const SJT = require("../js/sjt-engine.js");

const mockItems = fs.readdirSync(path.join(ROOT, "content/sjt"))
  .map((f) => JSON.parse(read("content/sjt/" + f)))
  .filter((q) => /^mock-/.test(q.pool || ""));

test("mock: no mock question id or text in any file the website serves", () => {
  const ignore = read(".vercelignore");
  for (const dir of ["content/", "docs/", "scripts/", "tests/", "supabase/"]) assert.ok(ignore.includes(dir), dir + " must be excluded from deployment");
  const served = fs.readdirSync(ROOT).filter((f) => /\.html$/.test(f)).concat(fs.readdirSync(path.join(ROOT, "js")).map((f) => "js/" + f));
  const blob = served.map(read).join("\n");
  for (const q of mockItems) {
    assert.ok(!blob.includes('"' + q.id + '"'), q.id + " id appears in a served file");
    assert.ok(!blob.includes(q.stem.slice(0, 60)), q.id + " stem appears in a served file");
  }
});

test("mock: migrations hold schema only, never question content", () => {
  const dir = path.join(ROOT, "supabase/migrations");
  const sql = fs.readdirSync(dir).map((f) => fs.readFileSync(path.join(dir, f), "utf8")).join("\n");
  for (const q of mockItems) {
    assert.ok(!sql.includes(q.id), q.id + " appears in a migration");
    assert.ok(!sql.includes(q.stem.slice(0, 60)), q.id + " stem appears in a migration");
  }
});

test("mock: each authored pool is a complete, balanced 50-item paper", () => {
  const pools = {};
  mockItems.forEach((q) => (pools[q.pool] = pools[q.pool] || []).push(q));
  for (const [pool, qs] of Object.entries(pools)) {
    if (qs.length < 50) continue; // a mock still being written is not seeded
    assert.strictEqual(qs.length, 50, pool);
    assert.strictEqual(qs.filter((q) => q.format === "ranking").length, 25, pool + " ranking count");
    qs.forEach((q) => assert.deepStrictEqual(SJT.validateQuestion(q), [], q.id));
    const max = qs.reduce((s, q) => s + (q.format === "ranking" ? 4 * q.options.length : 12), 0);
    assert.ok(max > 700 && max <= 800, pool + " max marks " + max);
  }
});

// A line-for-line JS port of public._sjt_mock_score (the SQL was checked
// against the engine on the live database: 400/400 responses agreed). This
// test keeps the documented rules and the engine from drifting apart.
function sqlScore(q, r) {
  if (!Array.isArray(r) || r.some((x) => typeof x !== "string")) return 0;
  const ids = q.options.map((o) => o.id);
  if (!r.every((x) => ids.includes(x)) || new Set(r).size !== r.length) return 0;
  const need = q.format === "ranking" ? ids.length : (q.selectCount || 3);
  if (r.length !== need) return 0;
  if (q.format === "ranking") return q.key.order.reduce((s, id, i) => s + Math.max(0, 4 - Math.abs(r.indexOf(id) - i)), 0);
  return 4 * r.filter((x) => q.key.correct.includes(x)).length;
}

test("mock: server scoring rules equal the engine for every permutation and choice", () => {
  const perms = (a) => a.length <= 1 ? [a] : a.flatMap((x, i) => perms(a.slice(0, i).concat(a.slice(i + 1))).map((p) => [x].concat(p)));
  const combos = (a, k) => k === 0 ? [[]] : a.flatMap((x, i) => combos(a.slice(i + 1), k - 1).map((c) => [x].concat(c)));
  const sample = mockItems.slice(0, 12);
  for (const q of sample) {
    const ids = q.options.map((o) => o.id);
    const all = q.format === "ranking" ? perms(ids) : combos(ids, 3);
    for (const r of all) assert.strictEqual(sqlScore(q, r), SJT.scoreResponse(q, r).marks, q.id + " " + r.join(""));
    for (const bad of [[], ids.slice(0, 2), [ids[0], ids[0], ids[1]], ["Z", ids[1], ids[2]], null, "A"]) {
      assert.strictEqual(sqlScore(q, bad), 0, q.id + " invalid " + JSON.stringify(bad));
      assert.ok(!SJT.validateResponse(q, bad).ok, q.id + " engine also rejects " + JSON.stringify(bad));
    }
  }
});
