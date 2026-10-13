#!/usr/bin/env node
// Compile authoring drafts (content/sjt-src/*.js) into lettered question files (content/sjt/sjt-NNN.json).
//
// Drafts are written in KEY ORDER so the writer never thinks about letters:
//   ranking:          options listed best → worst; refer to them as {1} … {5}
//   multiple_choice:  the 3 keyed options first, then the 5 distractors; refer to them as {k1}{k2}{k3} and {d1}…{d5}
// `letters` fixes the published lettering:
//   ranking: the key order as letters, e.g. "DAECB" (option 1 becomes D, option 2 becomes A, …)
//   multiple_choice: the three keyed letters, e.g. "ADF" (distractors take the remaining letters in order)
// References are keys into content/sjt-references.json: ["consent", {"ref": "gmp", "note": "…"}].
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "content", "sjt-src");
const OUT = path.join(ROOT, "content", "sjt");
const LIB = JSON.parse(fs.readFileSync(path.join(ROOT, "content", "sjt-references.json"), "utf8"));
const LETTERS = "ABCDEFGH".split("");

function compile(d) {
  const n = d.options.length;
  let tokenToLetter = {}, key;
  if (d.format === "ranking") {
    if (!(n === 4 || n === 5)) throw new Error(d.id + ": ranking needs 4 or 5 options");
    const order = d.letters.split("");
    if (order.length !== n || new Set(order).size !== n || order.some((L) => LETTERS.indexOf(L) >= n)) throw new Error(d.id + ": bad letters " + d.letters);
    order.forEach((L, i) => (tokenToLetter[String(i + 1)] = L));
    key = { order };
  } else {
    if (n !== 8) throw new Error(d.id + ": multiple choice needs 8 options");
    const keyed = d.letters.split("");
    if (keyed.length !== 3 || new Set(keyed).size !== 3) throw new Error(d.id + ": bad letters " + d.letters);
    const rest = LETTERS.filter((L) => !keyed.includes(L));
    keyed.forEach((L, i) => (tokenToLetter["k" + (i + 1)] = L));
    rest.forEach((L, i) => (tokenToLetter["d" + (i + 1)] = L));
    key = { correct: keyed.slice().sort() };
  }
  const tokens = Object.keys(tokenToLetter);
  const sub = (t, where) => String(t).replace(/\{(\w+)\}/g, (m, tok) => {
    if (!tokenToLetter[tok]) throw new Error(`${d.id}: unknown placeholder ${m} in ${where}`);
    return "[" + tokenToLetter[tok] + "]";
  });
  const options = d.options.map((o, i) => ({
    id: tokenToLetter[tokens[i]],
    text: o.text,
    brief: sub(o.brief, "option " + (i + 1) + " brief"),
    detailed: sub(o.detailed, "option " + (i + 1) + " detailed"),
  })).sort((a, b) => a.id.localeCompare(b.id));
  const explanation = {};
  Object.keys(d.explanation).forEach((k) => (explanation[k] = sub(d.explanation[k], "explanation." + k)));
  const references = d.refs.map((r) => {
    const k = typeof r === "string" ? r : r.ref;
    const src = LIB[k];
    if (!src) throw new Error(`${d.id}: unknown reference key ${k}`);
    const out = { title: src.title, publisher: src.publisher, year: src.year, url: src.url };
    if (typeof r === "object" && r.note) out.note = r.note;
    return out;
  });
  const instruction = d.format === "ranking"
    ? `Rank in order the following actions in response to this situation (1 = Most appropriate; ${n} = Least appropriate).`
    : "Choose the 3 most appropriate actions to take in this situation.";
  const q = {
    id: d.id, version: 1, status: "draft-for-review", pool: d.pool || "practice", blueprint: d.id, format: d.format,
    title: d.title, setting: d.setting, attribute: d.attribute, topic: d.topic, gmcDomains: d.gmcDomains,
    competencies: d.competencies, difficulty: d.difficulty, stem: d.stem, instruction,
  };
  if (d.format === "multiple_choice") q.selectCount = 3;
  Object.assign(q, { options, key, explanation, references, tags: d.tags || [] });
  return q;
}

const files = fs.readdirSync(SRC).filter((f) => f.endsWith(".js")).sort();
let n = 0;
for (const f of files) {
  const drafts = require(path.join(SRC, f));
  for (const d of drafts) {
    const q = compile(d);
    fs.writeFileSync(path.join(OUT, q.id + ".json"), JSON.stringify(q, null, 2) + "\n");
    n++;
  }
}
console.log(`compiled ${n} drafts from ${files.length} file(s)`);
