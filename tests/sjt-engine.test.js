// Run with: node --test tests/*.test.js
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const SJT = require("../js/sjt-engine.js");
const BANK = require("../js/sjt-questions.js");

const byId = (id) => BANK.find((q) => q.id === id);
const clone = (o) => JSON.parse(JSON.stringify(o));

// ── Question bank ────────────────────────────────────────────────────────────
test("bank: schema-valid, unique ids, practice pool only in the browser bundle", () => {
  assert.ok(BANK.length >= 5);
  assert.deepEqual(SJT.validateBank(BANK), []);
  assert.ok(BANK.every((q) => (q.pool || "practice") === "practice"), "mock questions must not ship to the browser");
});

test("bank: covers both official formats, all three attributes and a 4-option ranking item", () => {
  const formats = new Set(BANK.map((q) => q.format));
  assert.ok(formats.has("ranking") && formats.has("multiple_choice"));
  const attrs = new Set(BANK.map((q) => q.attribute));
  ["Professional integrity", "Coping with pressure", "Empathy and sensitivity"].forEach((a) => assert.ok(attrs.has(a), a));
  assert.ok(BANK.some((q) => q.format === "ranking" && q.options.length === 4));
  assert.ok(BANK.some((q) => q.format === "ranking" && q.options.length === 5));
  assert.ok(new Set(BANK.map((q) => q.setting)).size >= Math.min(BANK.length, 12), "settings should be varied");
});

test("bank: explanations avoid the banned stock phrases", () => {
  const banned = [/this highlights the importance of/i, /it is important to note that/i, /in this scenario/i,
                  /the key takeaway is/i, /ultimately, the best approach is/i, /this demonstrates the significance of/i];
  const text = JSON.stringify(BANK);
  banned.forEach((re) => assert.ok(!re.test(text), "found " + re));
});

test("validator: catches broken questions", () => {
  const q = clone(byId("sjt-001"));
  q.key.order = ["A", "A", "B", "C", "D"];
  assert.ok(SJT.validateQuestion(q).some((e) => /permutation/.test(e)));
  const m = clone(byId("sjt-002"));
  m.key.correct = ["A", "B"];
  assert.ok(SJT.validateQuestion(m).some((e) => /exactly 3/.test(e)));
  const r = clone(byId("sjt-003"));
  r.options.pop();
  r.key.order.pop();
  assert.ok(SJT.validateQuestion(r).some((e) => /instruction should state/.test(e)), "instruction must match option count");
  const s = clone(byId("sjt-004"));
  s.attribute = "Teamwork";
  assert.ok(SJT.validateQuestion(s).some((e) => /official PD attributes/.test(e)));
});

// ── Ranking scoring ──────────────────────────────────────────────────────────
test("ranking: exact key scores 20/20 (5 options) and 16/16 (4 options)", () => {
  const q5 = byId("sjt-001");
  const r = SJT.scoreResponse(q5, q5.key.order);
  assert.equal(r.marks, 20); assert.equal(r.max, 20); assert.equal(r.percent, 100);
  const q4 = byId("sjt-005");
  const r4 = SJT.scoreResponse(q4, q4.key.order);
  assert.equal(r4.marks, 16); assert.equal(r4.max, 16);
});

test("ranking: adjacent swap keeps near-miss credit (18/20)", () => {
  const q = byId("sjt-003");
  const k = q.key.order, resp = [k[0], k[1], k[3], k[2], k[4]];
  const r = SJT.scoreResponse(q, resp);
  assert.equal(r.marks, 18);
  const third = r.breakdown.find((b) => b.optionId === k[2]);
  assert.deepEqual([third.idealRank, third.givenRank, third.marks], [3, 4, 3]);
});

test("ranking: matches the published worked example pattern (DABEC vs DCEAB = 12)", () => {
  // Same arithmetic as the NES worked example, applied to a synthetic item.
  const q = clone(byId("sjt-001"));
  q.key.order = ["D", "C", "E", "A", "B"];
  assert.equal(SJT.scoreResponse(q, ["D", "A", "B", "E", "C"]).marks, 12);
});

test("ranking: fully reversed order still earns partial credit, never negative", () => {
  const q = byId("sjt-001");
  const r = SJT.scoreResponse(q, q.key.order.slice().reverse());
  // places out: 4,2,0,2,4 → 0+2+4+2+0
  assert.equal(r.marks, 8);
  assert.ok(r.breakdown.every((b) => b.marks >= 0));
});

test("ranking: incomplete or tied answers are rejected", () => {
  const q = byId("sjt-001");
  assert.throws(() => SJT.scoreResponse(q, ["A", "B", "C"]), /Rank all 5/);
  assert.throws(() => SJT.scoreResponse(q, ["A", "A", "B", "C", "D"]), /no ties/);
  assert.throws(() => SJT.scoreResponse(q, ["A", "B", "C", "D", "Z"]), /Unknown option/);
  assert.throws(() => SJT.scoreResponse(q, null), /No answer/);
});

test("ranking: custom matrix is honoured (config is swappable)", () => {
  const q = byId("sjt-001");
  const cfg = clone(SJT.DEFAULT_CONFIG);
  cfg.ranking.matrices = { 5: [[4,3,2,1,0],[3,4,3,2,1],[2,2,4,3,2],[1,2,3,4,3],[0,1,2,3,4]] };
  // The 3rd-ideal option placed 2nd: linear gives 3, this matrix gives 2.
  const k = q.key.order, resp = [k[0], k[2], k[1], k[3], k[4]];
  assert.equal(SJT.scoreResponse(q, resp).marks, 18);
  assert.equal(SJT.scoreResponse(q, resp, cfg).marks, 17);
});

// ── Multiple-choice scoring ──────────────────────────────────────────────────
test("multiple choice: 3, 2, 1, 0 keyed options → 12, 8, 4, 0", () => {
  const q = byId("sjt-002");
  const [k1, k2, k3] = q.key.correct;
  const off = q.options.map((o) => o.id).filter((x) => !q.key.correct.includes(x));
  assert.equal(SJT.scoreResponse(q, [k3, k1, k2]).marks, 12);
  assert.equal(SJT.scoreResponse(q, [k1, k2, off[0]]).marks, 8);
  const one = SJT.scoreResponse(q, [k1, off[0], off[1]]);
  assert.equal(one.marks, 4); assert.deepEqual(one.missed.sort(), [k2, k3].sort());
  assert.equal(SJT.scoreResponse(q, off.slice(0, 3)).marks, 0);
});

test("multiple choice: must select exactly three distinct options", () => {
  const q = byId("sjt-004");
  assert.throws(() => SJT.scoreResponse(q, ["A", "B"]), /exactly 3/);
  assert.throws(() => SJT.scoreResponse(q, ["A", "B", "C", "D"]), /exactly 3/);
  assert.throws(() => SJT.scoreResponse(q, ["A", "A", "B"]), /only be selected once/);
});

test("scoring does not mutate the response or question", () => {
  const q = byId("sjt-001");
  const before = JSON.stringify(q);
  const resp = ["B", "A", "C", "D", "E"];
  SJT.scoreResponse(q, resp);
  assert.deepEqual(resp, ["B", "A", "C", "D", "E"]);
  assert.equal(JSON.stringify(q), before);
});

// ── Count parsing ────────────────────────────────────────────────────────────
test("parseCount: accepts every whole number 1–100", () => {
  for (let n = 1; n <= 100; n++) assert.deepEqual(SJT.parseCount(String(n)), { ok: true, value: n });
  assert.deepEqual(SJT.parseCount(" 7 "), { ok: true, value: 7 });
});

test("parseCount: rejects empty, negative, fractional, non-numeric and out-of-range", () => {
  ["", "   ", "-3", "2.5", ".5", "abc", "1e2", "0", "101", "1000", "5a", "+5", null, undefined].forEach((v) => {
    assert.equal(SJT.parseCount(v).ok, false, JSON.stringify(v));
  });
});

// ── Selection ────────────────────────────────────────────────────────────────
test("selectQuestions: presets and 'all' never duplicate and never exceed the bank", () => {
  SJT.COUNT_PRESETS.concat(["all"]).forEach((c) => {
    const s = SJT.selectQuestions(BANK, c, 42);
    assert.equal(new Set(s.ids).size, s.ids.length, "duplicates for " + c);
    assert.equal(s.ids.length, c === "all" ? BANK.length : Math.min(c, BANK.length));
    assert.equal(s.available, BANK.length);
    assert.equal(s.shortfall, c === "all" ? 0 : Math.max(0, c - BANK.length));
  });
});

test("selectQuestions: same seed → same set; custom counts 1–100 valid", () => {
  assert.deepEqual(SJT.selectQuestions(BANK, 3, 7).ids, SJT.selectQuestions(BANK, 3, 7).ids);
  for (let n = 1; n <= 100; n++) assert.equal(SJT.selectQuestions(BANK, n, n).ids.length, Math.min(n, BANK.length));
  assert.throws(() => SJT.selectQuestions(BANK, 0, 1));
  assert.throws(() => SJT.selectQuestions(BANK, 2.5, 1));
});

test("selectQuestions: de-duplicates a bank with repeated ids", () => {
  const s = SJT.selectQuestions(BANK.concat([BANK[0]]), "all", 1);
  assert.equal(s.ids.length, BANK.length);
});

test("sessionTotals sums marks across answered questions only", () => {
  const t = SJT.sessionTotals({ a: { marks: 18, max: 20 }, b: { marks: 8, max: 12 }, c: null });
  assert.deepEqual(t, { marks: 26, max: 32, answered: 2, percent: 81 });
});

// ── Authoring rules ──────────────────────────────────────────────────────────
test("authoring: [X] references must point at real options; bare letters rejected", () => {
  const q = clone(byId("sjt-001"));
  q.explanation.reasoning = "Option [Z] is best.";
  assert.ok(SJT.validateQuestion(q).some((e) => /\[Z\], which is not an option/.test(e)));
  q.explanation.reasoning = "C comes first, then E.";
  assert.ok(SJT.validateQuestion(q).some((e) => /bare option letter/.test(e)));
  q.explanation.reasoning = "A short reply to [C] is fine.";
  assert.deepEqual(SJT.validateQuestion(q), []);
});

test("authoring: pool must be practice or mock-1..4", () => {
  const q = clone(byId("sjt-001"));
  q.pool = "mock-5";
  assert.ok(SJT.validateQuestion(q).some((e) => /pool must be/.test(e)));
  q.pool = "mock-2";
  assert.deepEqual(SJT.validateQuestion(q), []);
});

test("bank report: no answer-position or length cues in the live bank", () => {
  const r = SJT.bankReport(BANK);
  assert.deepEqual(r.warnings, []);
  BANK.filter((q) => q.format === "ranking").forEach((q) =>
    assert.notEqual(q.key.order.join(""), q.options.map((o) => o.id).join(""), q.id + " key is alphabetical"));
});

test("bank report: flags alphabetical keys, length cues and near-duplicate stems", () => {
  const a = clone(byId("sjt-001"));
  a.key.order = a.options.map((o) => o.id);
  const b = clone(byId("sjt-003")); b.id = "sjt-903";
  const c = clone(byId("sjt-003")); c.id = "sjt-904";
  const w = SJT.bankReport([a, b, c]).warnings.join("\n");
  assert.match(w, /key order is alphabetical/);
  assert.match(w, /sjt-903 and sjt-904 have similar stems/);
});

test("bank: every question cites only approved references and has full option explanations", () => {
  const LIB = require("../content/sjt-references.json");
  const urls = new Set(Object.keys(LIB).filter((k) => k[0] !== "_").map((k) => LIB[k].url));
  BANK.forEach((q) => {
    q.references.forEach((r) => assert.ok(urls.has(r.url), q.id + " cites " + r.url));
    q.options.forEach((o) => assert.ok(o.detailed.length > o.brief.length, q.id + " option " + o.id + " detailed should expand on brief"));
  });
});
