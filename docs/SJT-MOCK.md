# Professional Dilemmas mock exams

`sjt-mock.html` and `js/sjt-mock.js`. These are full papers of 50 scenarios in 95 minutes: 25 ranking and 25 choose-three, with attributes split 17/17/16.

## Why mocks live on the server
Topic Mode ships its 200 practice questions to the browser, keys included, because each answer is marked and explained straight away. A mock only works if candidates can't see the key, so the mock questions never reach the browser before the attempt is finished:

- **Storage.** Questions live in `public.sjt_items`. RLS is enabled with no policies, and all table privileges are revoked from `anon` and `authenticated`. Only the `SECURITY DEFINER` RPCs can read the table.
- **During an attempt.** The client receives only the stem, the instruction and the option texts. It never receives the title, setting, attribute, key or explanations.
- **Clock and marking.** The server owns the clock (`deadline_at`, with 30 seconds of grace for late saves). It also does the marking (`_sjt_mock_score`), which replicates `js/sjt-engine.js`:
  - Ranking: each option scores max(0, 4 − places out).
  - Choose-three: 4 marks per keyed option chosen.
  - Incomplete answers score 0.
- **After finishing.** The review payload contains the full items and a snapshot of every response, its marks and the key used.
- **Deployment and source control.** `content/`, `docs/`, `scripts/`, `tests/`, `supabase/` and `*.md` are excluded from deployment by `.vercelignore`. `tests/sjt-mock.test.js` fails if a mock id or stem appears in a served file or a migration.

The scoring is Ossify's provisional practice model, **not** the official MSRA marking algorithm, and the UI says so wherever marks appear.

## RPCs (all `authenticated` only)
| RPC | Purpose |
|---|---|
| `get_sjt_mock_overview()` | Lists the available mocks (pools with exactly 50 items), the user's completed attempts and any live attempt. Finalises an attempt whose deadline has passed. |
| `start_sjt_mock(p_mock)` | Starts a mock, or returns the live attempt if one exists (one in-progress mock per user). |
| `get_active_sjt_mock()` | Returns the live attempt with its paper and the server time, or `{status:'expired'}` after finalising it. |
| `save_sjt_mock_progress(id, answers, flags, index)` | Autosave. Answers are sanitised; partial answers are kept. |
| `submit_sjt_mock(id, answers, flags, reason)` | Finalises the attempt. Idempotent. Returns the review payload. |
| `get_sjt_mock_review(id)` | The review payload for one of the user's completed attempts. |

**Access: paid subscribers only** (`20261015_sjt_mock_paid_access.sql`). `start_sjt_mock` raises `subscription_required` unless `_has_paid_access(uid)` (active and unexpired subscription, the same rule as Head-to-Head). Resuming, saving and submitting an attempt already in progress, and reviewing completed attempts, are never blocked, so a lapsed subscription costs nobody their work. `get_sjt_mock_overview()` returns `access`, and the page shows a pricing prompt instead of Start buttons.

## Loading or updating a mock
The questions are written and reviewed exactly like practice batches, using `content/sjt-src/M*.js` with `const pool = "mock-N"`, then compiled to `content/sjt/`. To load them:

1. `node scripts/seed-sjt-mocks.js check mock-N` validates the paper: 50 items, 25 ranking, and every item passes the engine's checks.
2. `node scripts/seed-sjt-mocks.js prepare <dir outside the repo>` writes a random token and prints SQL that creates a temporary seed function. The function accepts only that token and expires after 20 minutes. Run the SQL via the Supabase SQL editor or MCP.
3. `node scripts/seed-sjt-mocks.js push <dir> mock-N` upserts the items in batches of 10 through that function.
4. `node scripts/seed-sjt-mocks.js disable` prints SQL that replaces the function with a stub that always raises and revokes it. Run it straight away, then delete the token file.

Upserting by id means a reviewed correction replaces the live item. A finished attempt keeps the marks and key it was scored with, and its review shows the current wording.

## Verification done for Mock 1 (14 Oct 2026)
- **Scoring parity.** 400 responses across all 50 items (8 per item: random, keyed, reversed, partial, duplicate and unknown-letter) were scored by `_sjt_mock_score` on the live database. All 400 matched the engine. Non-array inputs scored 0.
- **RPC flow.** Tested as the `authenticated` role inside a rolled-back transaction:
  - Direct `select` on `sjt_items` was denied.
  - The paper carried no key, title or attribute.
  - Restarting returned the same attempt.
  - Junk answers and flags were sanitised.
  - Submitting the full key scored 780/780 (100%), split 268, 260 and 252 by attribute.
  - Resubmitting was idempotent.
  - A save made after the deadline finalised the attempt with `timeout`.
- **Permissions.** `anon` is denied every mock RPC and every private helper.
- **Browser e2e.** 48 checks against an in-browser fake of the RPCs, covering:
  - start, partial and complete answers, letter keys, flags and reordering;
  - autosave and resume;
  - the finish dialog and results totals (which match the engine);
  - review of partial and unanswered items;
  - a timeout while on the page and expiry while away;
  - mobile layout without horizontal scroll.
