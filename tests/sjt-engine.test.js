// Run with: node --test tests/*.test.js
"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const SJT = require("../js/sjt-engine.js");
const BANK = require("../js/sjt-questions.js");

const byId = (id) => BANK.find((q) => q.id === id);
const clone = (o) => JSON.parse(JSON.stringify(o));

// ── Question bank ────────────────────────────────────────────────────────────
test("bank: five questions, schema-valid, unique ids", () => {
  assert.equal(BANK.length, 5);
  assert.deepEqual(SJT.validateBank(BANK), []);
});

test("bank: covers both official formats, all three attributes and a 4-option ranking item", () => {
  const formats = new Set(BANK.map((q) => q.format));
  assert.ok(formats.has("ranking") && formats.has("multiple_choice"));
  const attrs = new Set(BANK.map((q) => q.attribute));
  ["Professional integrity", "Coping with pressure", "Empathy and sensitivity"].forEach((a) => assert.ok(attrs.has(a), a));
  assert.ok(BANK.some((q) => q.format === "ranking" && q.options.length === 4));
  assert.ok(BANK.some((q) => q.format === "ranking" && q.options.length === 5));
  assert.equal(new Set(BANK.map((q) => q.setting)).size, 5, "settings should all differ");
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
  const q = byId("sjt-003"); // key A B C D E
  const r = SJT.scoreResponse(q, ["A", "B", "D", "C", "E"]);
  assert.equal(r.marks, 18);
  const c = r.breakdown.find((b) => b.optionId === "C");
  assert.deepEqual([c.idealRank, c.givenRank, c.marks], [3, 4, 3]);
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
  // C (ideal 3) placed 2nd: linear gives 3, this matrix gives 2.
  const resp = ["A", "C", "B", "D", "E"];
  assert.equal(SJT.scoreResponse(q, resp).marks, 18);
  assert.equal(SJT.scoreResponse(q, resp, cfg).marks, 17);
});

// ── Multiple-choice scoring ──────────────────────────────────────────────────
test("multiple choice: 3, 2, 1, 0 keyed options → 12, 8, 4, 0", () => {
  const q = byId("sjt-002"); // key A B C
  assert.equal(SJT.scoreResponse(q, ["C", "A", "B"]).marks, 12);
  assert.equal(SJT.scoreResponse(q, ["A", "B", "D"]).marks, 8);
  const one = SJT.scoreResponse(q, ["A", "E", "G"]);
  assert.equal(one.marks, 4); assert.deepEqual(one.missed.sort(), ["B", "C"]);
  assert.equal(SJT.scoreResponse(q, ["D", "E", "F"]).marks, 0);
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
    assert.equal(s.available, 5);
    assert.equal(s.shortfall, c === "all" ? 0 : Math.max(0, c - 5));
  });
});

test("selectQuestions: same seed → same set; custom counts 1–100 valid", () => {
  assert.deepEqual(SJT.selectQuestions(BANK, 3, 7).ids, SJT.selectQuestions(BANK, 3, 7).ids);
  for (let n = 1; n <= 100; n++) assert.equal(SJT.selectQuestions(BANK, n, n).ids.length, Math.min(n, 5));
  assert.throws(() => SJT.selectQuestions(BANK, 0, 1));
  assert.throws(() => SJT.selectQuestions(BANK, 2.5, 1));
});

test("selectQuestions: de-duplicates a bank with repeated ids", () => {
  const s = SJT.selectQuestions(BANK.concat([BANK[0]]), "all", 1);
  assert.equal(s.ids.length, 5);
});

test("sessionTotals sums marks across answered questions only", () => {
  const t = SJT.sessionTotals({ a: { marks: 18, max: 20 }, b: { marks: 8, max: 12 }, c: null });
  assert.deepEqual(t, { marks: 26, max: 32, answered: 2, percent: 81 });
});
