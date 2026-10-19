#!/usr/bin/env node
/* Load the SJT practice questions (content/sjt, pool "practice") into Supabase.
 *
 * The practice bank used to ship to every visitor in js/sjt-questions.js, keys and
 * explanations included. It now lives in public.sjt_practice_items and reaches the
 * browser only through get_sjt_practice_bank(), which requires a signed-in user.
 * js/sjt-questions.js is still generated (tests use it) but is no longer deployed
 * (.vercelignore).
 *
 *   1. node scripts/seed-sjt-practice.js prepare <dir>
 *        Writes a random token to <dir>/sjt-practice-token (keep <dir> outside the
 *        repo) and prints SQL that creates the table and RPC (idempotent) plus a
 *        temporary loader public._sjt_practice_seed(token, items) that accepts
 *        only that token and expires after 60 minutes. Run it in the SQL editor.
 *   2. node scripts/seed-sjt-practice.js push <dir>
 *        Validates every practice item, upserts them in batches, removes items
 *        no longer in content/, then locks the loader (revokes it from anon).
 */
"use strict";
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const SJT = require("../js/sjt-engine.js");

const ROOT = path.join(__dirname, "..");
const SUPABASE_URL = "https://judtpdikbidvccclftvq.supabase.co";
const ANON_KEY = "sb_publishable_-lNlSUZo3vinNc6RK3bwfg_rybh6Zfj"; // public key (also in every page)

function die(msg) { console.error(msg); process.exit(1); }

function loadPractice() {
  const dir = path.join(ROOT, "content", "sjt");
  const items = fs.readdirSync(dir).filter((f) => /^sjt-\d{3}\.json$/.test(f)).sort()
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")))
    .filter((q) => q.pool === "practice");
  if (!items.length) die("no practice items found");
  const errs = [].concat(SJT.validateBank(items), ...items.map((q) => SJT.validateQuestion(q)));
  if (errs.length) die("practice items failed validation:\n" + errs.join("\n"));
  return items.map((q, i) => ({ id: q.id, position: i + 1, question: q }));
}

const SQL_SCHEMA = `-- Practice questions for Professional Dilemmas: private table, signed-in read via RPC.
create table if not exists public.sjt_practice_items (
  id         text primary key check (id ~ '^sjt-[0-9]{3}$'),
  position   integer not null check (position > 0),
  question   jsonb not null,
  updated_at timestamptz not null default now()
);
alter table public.sjt_practice_items enable row level security;
revoke all on public.sjt_practice_items from anon, authenticated;

create or replace function public.get_sjt_practice_bank()
returns jsonb language plpgsql stable security definer set search_path = public as $$
begin
  if auth.uid() is null then raise exception 'not_signed_in'; end if;
  return coalesce((select jsonb_agg(question order by position) from sjt_practice_items), '[]'::jsonb);
end $$;
revoke all on function public.get_sjt_practice_bank() from public, anon;
grant execute on function public.get_sjt_practice_bank() to authenticated;`;

function sqlLoader(hash, expires) {
  return `-- Temporary loader: accepts one secret token, expires ${expires}, locks itself when loading finishes.
create or replace function public._sjt_practice_seed(p_token text, p_items jsonb, p_keep text[] default null)
returns integer language plpgsql volatile security definer set search_path = public as $$
declare n int;
begin
  if now() > '${expires}'::timestamptz
     or encode(sha256(convert_to(coalesce(p_token, ''), 'UTF8')), 'hex') <> '${hash}' then
    raise exception 'forbidden';
  end if;
  if p_keep is not null then   -- final call: drop items no longer in content/, then lock the loader
    delete from sjt_practice_items where id <> all (p_keep);
    get diagnostics n = row_count;
    execute 'revoke all on function public._sjt_practice_seed(text, jsonb, text[]) from public, anon, authenticated';
    return n;
  end if;
  insert into sjt_practice_items (id, position, question, updated_at)
  select x->>'id', (x->>'position')::int, x->'question', now() from jsonb_array_elements(p_items) x
  on conflict (id) do update set position = excluded.position, question = excluded.question, updated_at = now();
  get diagnostics n = row_count;
  return n;
end $$;
revoke all on function public._sjt_practice_seed(text, jsonb, text[]) from public, authenticated;
grant execute on function public._sjt_practice_seed(text, jsonb, text[]) to anon;
notify pgrst, 'reload schema';`;
}

async function call(token, body) {
  const res = await fetch(SUPABASE_URL + "/rest/v1/rpc/_sjt_practice_seed", {
    method: "POST",
    headers: { apikey: ANON_KEY, Authorization: "Bearer " + ANON_KEY, "Content-Type": "application/json" },
    body: JSON.stringify(Object.assign({ p_token: token }, body)),
  });
  const text = await res.text();
  if (!res.ok) die("HTTP " + res.status + " " + text);
  return text;
}

async function push(dir) {
  const token = fs.readFileSync(path.join(dir, "sjt-practice-token"), "utf8").trim();
  const rows = loadPractice();
  for (let i = 0; i < rows.length; i += 20) {
    const batch = rows.slice(i, i + 20);
    const n = await call(token, { p_items: batch });
    console.log("upserted " + n + " (" + batch[0].id + "–" + batch[batch.length - 1].id + ")");
  }
  const removed = await call(token, { p_items: [], p_keep: rows.map((r) => r.id) });
  console.log("removed " + removed + " old item(s); loader locked. " + rows.length + " practice items in the database.");
}

const [cmd, a1] = process.argv.slice(2);
if (cmd === "prepare") {
  if (!a1) die("usage: prepare <dir outside the repo>");
  if (path.resolve(a1).startsWith(ROOT)) die("Keep the token outside the repository.");
  const token = crypto.randomBytes(32).toString("hex");
  fs.writeFileSync(path.join(a1, "sjt-practice-token"), token, { mode: 0o600 });
  const hash = crypto.createHash("sha256").update(token).digest("hex");
  console.log("begin;\n" + SQL_SCHEMA + "\n\n" + sqlLoader(hash, new Date(Date.now() + 60 * 60 * 1000).toISOString()) + "\ncommit;");
} else if (cmd === "push") {
  if (!a1) die("usage: push <dir>");
  push(a1).catch((e) => die(e.stack || String(e)));
} else if (cmd === "check") {
  console.log(loadPractice().length + " practice items OK");
} else {
  die("usage: seed-sjt-practice.js prepare <dir> | push <dir> | check");
}
