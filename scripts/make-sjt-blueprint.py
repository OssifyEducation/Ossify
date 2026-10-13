#!/usr/bin/env python3
"""Allocate the 400 blueprint premises to pools, formats, difficulty and writing batches.

Output: content/sjt-blueprint.csv (deterministic; re-running gives the same result).

Targets (see docs/SJT-STYLE-GUIDE.md):
  * pools: practice 200, mock-1..4 50 each; mock items never shown in practice
  * attributes: equal thirds overall; each mock 17/17/16 (rotating which attribute gets 16)
  * format per mock: 25 ranking (5 of them four-option) + 25 multiple choice; practice 100 + 100
  * difficulty per pool: 20% easy, 60% moderate, 20% hard
  * topic families and settings spread evenly across pools
"""
import csv, os, re
from collections import Counter, defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
ns = {}
exec(open(os.path.join(HERE, "sjt-blueprint-source.py")).read(), ns)
FAMILIES, P, C, E = ns["FAMILIES"], ns["P"], ns["C"], ns["E"]
ATTRS = [P, C, E]

POOLS = ["practice", "mock-1", "mock-2", "mock-3", "mock-4"]
QUOTA = {  # attribute -> pool -> count (totals: P134 C133 E133)
    P: {"practice": 67, "mock-1": 17, "mock-2": 17, "mock-3": 16, "mock-4": 17},
    C: {"practice": 66, "mock-1": 17, "mock-2": 16, "mock-3": 17, "mock-4": 17},
    E: {"practice": 67, "mock-1": 16, "mock-2": 17, "mock-3": 17, "mock-4": 16},
}

rows = []
for code, attr, name, items in FAMILIES:
    for i, (setting, premise) in enumerate(items):
        m = re.match(r"\[(sjt-\d+)\]\s*(.*)", premise)
        rows.append(dict(existing=m.group(1) if m else "", family=code, attribute=attr, topic=name,
                         setting=setting, premise=m.group(2) if m else premise, fam_idx=i))
assert len(rows) == 400, len(rows)

# 1. Pools. Existing questions stay in practice. Within each family, deal rows alternately to a mock and to
#    practice, rotating which mock comes next (offset by family), so every family spreads evenly over the mocks.
MOCKS = POOLS[1:]
for attr in ATTRS:
    quota = dict(QUOTA[attr])
    fams = sorted([f for f in FAMILIES if f[1] == attr], key=lambda f: -len(f[3]))
    for r in rows:
        if r["attribute"] == attr and r["existing"]:
            r["pool"] = "practice"; quota["practice"] -= 1
    for fi, (code, _, _, _) in enumerate(fams):
        fr = [r for r in rows if r["family"] == code and not r["existing"]]
        mock_turn = fi % 4
        for j, r in enumerate(fr):
            prefer_mock = (j % 2 == 0)
            order = []
            if prefer_mock:
                order = [MOCKS[(mock_turn + t) % 4] for t in range(4)] + ["practice"]
            else:
                order = ["practice"] + [MOCKS[(mock_turn + t) % 4] for t in range(4)]
            pool = next(p for p in order if quota[p] > 0)
            r["pool"] = pool; quota[pool] -= 1
            if pool in MOCKS:
                mock_turn = (MOCKS.index(pool) + 1) % 4
    assert all(v == 0 for v in quota.values()), (attr, quota)

# 1b. Balancing pass: swap the pools of two rows from the same family (keeps every quota) whenever that makes
#     settings and families more even across the four mocks. Deterministic hill-climb.
def objective():
    sc = 0
    for m in MOCKS:
        st = Counter(r["setting"] for r in rows if r["pool"] == m)
        fm = Counter(r["family"] for r in rows if r["pool"] == m)
        sc += sum(v * v for v in st.values()) + 3 * sum(v * v for v in fm.values())
    return sc
movable = [r for r in rows if not r["existing"]]
best = objective()
improved = True
while improved:
    improved = False
    for i, a in enumerate(movable):
        for b in movable[i + 1:]:
            if a["family"] != b["family"] or a["pool"] == b["pool"]:
                continue
            a["pool"], b["pool"] = b["pool"], a["pool"]
            sc = objective()
            if sc < best:
                best = sc; improved = True
            else:
                a["pool"], b["pool"] = b["pool"], a["pool"]

# 2. Within each pool: interleave attributes, then assign format and difficulty in repeating patterns.
EXISTING_FMT = {"sjt-001": ("ranking", 5), "sjt-002": ("multiple_choice", 8), "sjt-003": ("ranking", 5),
                "sjt-004": ("multiple_choice", 8), "sjt-005": ("ranking", 4)}
DIFF_CYCLE = ["moderate", "easy", "moderate", "hard", "moderate"]

for pool in POOLS:
    pr = [r for r in rows if r["pool"] == pool]
    fam_order = [f[0] for f in FAMILIES]
    # interleave families so P, C and E alternate: P1, C1, E1, P2, C2, E2, ...
    pf = [f for f in fam_order if f[0] == "P"]; cf = [f for f in fam_order if f[0] == "C"]; ef = [f for f in fam_order if f[0] == "E"]
    cycle = []
    for i in range(max(len(pf), len(cf), len(ef))):
        for lst in (pf, cf, ef):
            if i < len(lst): cycle.append(lst[i])
    queues = {f: [r for r in pr if r["family"] == f] for f in cycle}
    inter = []
    block = 20 if pool == "practice" else 50
    while any(queues.values()):
        for f in cycle:
            if queues[f]:
                # take the row whose setting is least used in the current block, so settings rotate
                start = (len(inter) // block) * block
                used = Counter(x["setting"] for x in inter[start:])
                j = min(range(len(queues[f])), key=lambda k: (used[queues[f][k]["setting"]], k))
                inter.append(queues[f].pop(j))
    # formats: alternate ranking / multiple choice; every 5th ranking item has 4 options
    rank_n = 0
    for i, r in enumerate(inter):
        if r["existing"]:
            fmt, opts = EXISTING_FMT[r["existing"]]
        else:
            fmt = "ranking" if i % 2 == 0 else "multiple_choice"
            opts = 8
            if fmt == "ranking":
                rank_n += 1
                opts = 4 if rank_n % 5 == 0 else 5
        r["format"], r["options"] = fmt, opts
        r["difficulty"] = "moderate" if r["existing"] else DIFF_CYCLE[i % 5]
        r["pool_pos"] = i
    # rebalance practice formats around the 5 existing items so totals are exactly 100/100 with 20 four-option
    if pool == "practice":
        new = [r for r in inter if not r["existing"]]
        for i, r in enumerate(new):
            r["format"] = "ranking" if i < 97 else "multiple_choice"
        # spread formats evenly instead of a block: alternate, giving ranking the extra slot
        ranks = 97
        for i, r in enumerate(new):
            want_rank = round((i + 1) * ranks / len(new)) > round(i * ranks / len(new))
            r["format"] = "ranking" if want_rank else "multiple_choice"
        rn = 0
        for r in new:
            if r["format"] == "ranking":
                rn += 1
                r["options"] = 4 if rn % 5 == 0 and rn <= 95 else 5
            else:
                r["options"] = 8

# 3. IDs and writing batches. Practice first (batches of 20, interleaved), then mocks in order.
next_id = 6
for pool in POOLS:
    pr = sorted([r for r in rows if r["pool"] == pool], key=lambda r: r["pool_pos"])
    pos = 0
    for r in pr:
        if r["existing"]:
            r["id"] = r["existing"]
            r["batch"] = "P00 (written)"
            r["status"] = "draft-for-review"
            continue
        r["id"] = "sjt-%03d" % next_id
        next_id += 1
        r["batch"] = ("P%02d" % (pos // 20 + 1)) if pool == "practice" else ("M%d-%d" % (int(pool[-1]), pos // 25 + 1))
        r["status"] = "planned"
        pos += 1

# 4. Checks
def counts(pool, field):
    return Counter(r[field] for r in rows if r["pool"] == pool)
for pool in POOLS:
    fmt = counts(pool, "format")
    four = sum(1 for r in rows if r["pool"] == pool and r["format"] == "ranking" and r["options"] == 4)
    print(f"{pool:9s} n={sum(fmt.values()):3d} ranking={fmt['ranking']:3d} (4-opt {four:2d}) mc={fmt['multiple_choice']:3d}",
          "attrs", dict(counts(pool, "attribute")), "diff", dict(counts(pool, "difficulty")))
fam_spread = defaultdict(Counter)
for r in rows:
    fam_spread[r["family"]][r["pool"]] += 1
uneven = [f for f, c in fam_spread.items() if max(c[p] for p in POOLS[1:]) - min(c[p] for p in POOLS[1:]) > 1]
print("families uneven across mocks (spread > 1):", uneven or "none")

# Status comes from the written question files where they exist.
import json
for r in rows:
    f = os.path.join(ROOT, "content", "sjt", r["id"] + ".json")
    if os.path.exists(f):
        r["status"] = json.load(open(f)).get("status", "draft-for-review")
        if r["batch"].startswith("P00"):
            pass
    else:
        r["status"] = "planned"

out = os.path.join(ROOT, "content", "sjt-blueprint.csv")
FIELDS = ["id", "pool", "batch", "status", "attribute", "family", "topic", "setting", "format", "options", "difficulty", "premise"]
with open(out, "w", newline="") as f:
    w = csv.DictWriter(f, fieldnames=FIELDS, extrasaction="ignore")
    w.writeheader()
    for r in sorted(rows, key=lambda r: r["id"]):
        w.writerow(r)
print("wrote", os.path.relpath(out, ROOT), len(rows), "rows")
