#!/usr/bin/env node
// Suggest balanced answer letters for a blueprint batch, given the letters already used in content/sjt.
// Usage: node scripts/suggest-letters.js P02
"use strict";
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");
const batch = process.argv[2];
if (!batch) { console.error("usage: suggest-letters.js <batch>"); process.exit(1); }

const csv = fs.readFileSync(path.join(ROOT, "content", "sjt-blueprint.csv"), "utf8").trim().split("\n");
const head = csv[0].split(",");
const parse = (line) => { const out = []; let cur = "", q = false; for (const ch of line) { if (ch === '"') q = !q; else if (ch === "," && !q) { out.push(cur); cur = ""; } else cur += ch; } out.push(cur); return out; };
const rows = csv.slice(1).map((l) => Object.fromEntries(parse(l).map((v, i) => [head[i], v])));

const bank = fs.readdirSync(path.join(ROOT, "content", "sjt")).map((f) => JSON.parse(fs.readFileSync(path.join(ROOT, "content", "sjt", f), "utf8")));
const first = {}, keyed = {};
"ABCDEFGH".split("").forEach((L) => { first[L] = 0; keyed[L] = 0; });
bank.forEach((q) => { if (q.format === "ranking") first[q.key.order[0]]++; else q.key.correct.forEach((L) => keyed[L]++); });

let seed = batch.split("").reduce((a, c) => a * 31 + c.charCodeAt(0), 7) >>> 0;
const rand = () => ((seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296);
const shuffle = (a) => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

const out = {};
rows.filter((r) => r.batch === batch).forEach((r) => {
  const n = +r.options;
  const letters = "ABCDEFGH".slice(0, n).split("");
  if (r.format === "ranking") {
    const min = Math.min(...letters.map((L) => first[L]));
    const top = shuffle(letters.filter((L) => first[L] === min))[0];
    let rest;
    do { rest = shuffle(letters.filter((L) => L !== top)); } while ([top, ...rest].join("") === letters.join(""));
    out[r.id] = [top, ...rest].join("");
    first[top]++;
  } else {
    const pick = shuffle(letters.slice()).sort((a, b) => keyed[a] - keyed[b]).slice(0, 3).sort();
    pick.forEach((L) => keyed[L]++);
    out[r.id] = pick.join("");
  }
});
console.log(JSON.stringify(out, null, 1));
console.error("after batch — ranked first:", JSON.stringify(first), "keyed:", JSON.stringify(keyed));
