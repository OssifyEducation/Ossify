#!/usr/bin/env node
/* Load the SJT mock questions (content/sjt, pool "mock-N") into Supabase.
 *
 * The mock questions carry their keys and explanations, so they must never be
 * committed to supabase/migrations or shipped to the browser. This script
 * sends them straight from content/sjt to the database through a temporary,
 * single-use RPC guarded by a random token, so nothing is written to disk
 * outside content/ and the items never pass through a migration file.
 *
 *   1. node scripts/seed-sjt-mocks.js prepare <dir>
 *        Writes a random token to <dir>/sjt-seed-token (keep <dir> outside the
 *        repo) and prints SQL that (re)creates public._sjt_seed_items(token,
 *        items). The function accepts only that token and expires after
 *        20 minutes. Run the printed SQL in the Supabase SQL editor / MCP.
 *   2. node scripts/seed-sjt-mocks.js push <dir> mock-1 [mock-2 …]
 *        Validates every item with js/sjt-engine.js, checks each pool is a
 *        complete 50-item paper, then upserts the items in small batches.
 *   3. node scripts/seed-sjt-mocks.js disable
 *        Prints SQL that replaces the seed function with a stub that always
 *        raises, and revokes it from anon. Run it as soon as the push is done.
 */
"use strict";
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const SJT = require("../js/sjt-engine.js");

const ROOT = path.join(__dirname, "..");
const SUPABASE_URL = "https://judtpdikbidvccclftvq.supabase.co";
const ANON_KEY = "sb_publishable_-lNlSUZo3vinNc6RK3bwfg_rybh6Zfj"; // public key (also in every page)
const PAPER_SIZE = 50;

function die(msg) { console.error(msg); process.exit(1); }

function loadPool(pool) {
  const dir = path.join(ROOT, "content", "sjt");
  const items = fs.readdirSync(dir).filter((f) => /^sjt-\d{3}\.json$/.test(f)).sort()
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")))
    .filter((q) => q.pool === pool);
  if (items.length !== PAPER_SIZE) die(pool + ": expected " + PAPER_SIZE + " items, found " + items.length);
  const errs = [].concat(...items.map((q) => SJT.validateQuestion(q)));
  if (errs.length) die(pool + " failed validation:\n" + errs.join("\n"));
  const nRank = items.filter((q) => q.format === "ranking").length;
  if (nRank !== PAPER_SIZE / 2) die(pool + ": expected 25 ranking items, found " + nRank);
  return items.map((q, i) => ({ id: q.id, pool, position: i + 1, format: q.format, attribute: q.attribute, question: q }));
}

function sqlPrepare(hash, expires) {
  return `create or replace function public._sjt_seed_items(p_token text, p_items jsonb)
returns integer language plpgsql volatile security definer set search_path = public as $$
declare n int;
begin
  if now() > '${expires}'::timestamptz
     or encode(sha256(convert_to(coalesce(p_token, ''), 'UTF8')), 'hex') <> '${hash}' then
    raise exception 'forbidden';
  end if;
  insert into sjt_items (id, pool, position, format, attribute, question, updated_at)
  select x->>'id', x->>'pool', (x->>'position')::int, x->>'format', x->>'attribute', x->'question', now()
    from jsonb_array_elements(p_items) x
  on conflict (id) do update set pool = excluded.pool, position = excluded.position, format = excluded.format,
    attribute = excluded.attribute, question = excluded.question, updated_at = now();
  get diagnostics n = row_count;
  return n;
end $$;
revoke all on function public._sjt_seed_items(text, jsonb) from public, authenticated;
grant execute on function public._sjt_seed_items(text, jsonb) to anon;
notify pgrst, 'reload schema';`;
}

const SQL_DISABLE = `create or replace function public._sjt_seed_items(p_token text, p_items jsonb)
returns integer language plpgsql set search_path = public as $$ begin raise exception 'disabled'; end $$;
revoke all on function public._sjt_seed_items(text, jsonb) from public, anon, authenticated;
notify pgrst, 'reload schema';`;

async function push(dir, pools) {
  const token = fs.readFileSync(path.join(dir, "sjt-seed-token"), "utf8").trim();
  for (const pool of pools) {
    const rows = loadPool(pool);
    for (let i = 0; i < rows.length; i += 10) {
      const batch = rows.slice(i, i + 10);
      const res = await fetch(SUPABASE_URL + "/rest/v1/rpc/_sjt_seed_items", {
        method: "POST",
        headers: { apikey: ANON_KEY, Authorization: "Bearer " + ANON_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ p_token: token, p_items: batch }),
      });
      const body = await res.text();
      if (!res.ok) die(pool + " batch " + (i / 10 + 1) + " failed: HTTP " + res.status + " " + body);
      console.log(pool + ": upserted " + body + " (" + batch[0].id + "–" + batch[batch.length - 1].id + ")");
    }
  }
}

const [cmd, a1, ...rest] = process.argv.slice(2);
if (cmd === "prepare") {
  if (!a1) die("usage: prepare <dir outside the repo>");
  if (path.resolve(a1).startsWith(ROOT)) die("Keep the token outside the repository.");
  const token = crypto.randomBytes(32).toString("hex");
  fs.writeFileSync(path.join(a1, "sjt-seed-token"), token, { mode: 0o600 });
  const hash = crypto.createHash("sha256").update(token).digest("hex");
  console.log(sqlPrepare(hash, new Date(Date.now() + 20 * 60 * 1000).toISOString()));
} else if (cmd === "push") {
  if (!a1 || !rest.length) die("usage: push <dir> mock-1 [mock-2 …]");
  push(a1, rest).catch((e) => die(e.stack || String(e)));
} else if (cmd === "check") {
  (a1 ? [a1, ...rest] : ["mock-1"]).forEach((p) => console.log(p + ": " + loadPool(p).length + " items OK"));
} else if (cmd === "disable") {
  console.log(SQL_DISABLE);
} else {
  die("usage: seed-sjt-mocks.js prepare <dir> | push <dir> <pool…> | check [pool…] | disable");
}
