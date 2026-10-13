# Ossify SJT (Professional Dilemmas) — internal specification

Status: v1, 13 October 2026. Five original questions; architecture ready to expand.

Every statement below is tagged **[Official]** (taken from an NHS England / HEE source, linked),
**[Analogous]** (published by an NHS body for a *different* SJT, used only as a design reference), or
**[Ossify]** (our own decision, not an MSRA rule).

## 1. Sources consulted

| # | Source | Type |
|---|--------|------|
| S1 | [MSRA practice paper — Section 1: Professional Dilemma (PD)](https://medical.hee.nhs.uk/medical-training-recruitment/medical-specialty-training/publications/multi-specialty-recruitment-assessment-%28msra%29-practice-paper/section-1--professional-dilemma-pd) (NHS England, published 31 May 2024, updated 31 May 2025) | Official |
| S2 | [MSRA practice paper — Instructions](https://medical.hee.nhs.uk/medical-training-recruitment/medical-specialty-training/publications/multi-specialty-recruitment-assessment-%28msra%29-practice-paper/instructions) | Official |
| S3 | [What's in the MSRA — Professional dilemmas paper](https://medical.hee.nhs.uk/medical-training-recruitment/medical-specialty-training/multi-specialty-recruitment-assessment-msra/whats-in-the-msra/professional-dilemmas-paper) (last reviewed 27 July 2023) | Official |
| S4 | [Structure of the MSRA](https://medical.hee.nhs.uk/medical-training-recruitment/medical-specialty-training/multi-specialty-recruitment-assessment-msra/whats-in-the-msra/structure-of-the-msra) (last reviewed 24 Feb 2022) | Official |
| S5 | [MSRA applicant guide 2022–23](https://medical.hee.nhs.uk/binaries/content/assets/medical/trainee-recruitment/gp/msra-applicant-guide-2022-23.pdf) | Official |
| S6 | [NES Pre-registration Pharmacy SJT scoring guidance (2020)](https://nes.scot.nhs.uk/media/0zaeyean/prps-2020-scoring-guidance-for-website.pdf) | Analogous — not MSRA |
| S7 | [GMC Good medical practice (2024)](https://www.gmc-uk.org/professional-standards/the-professional-standards/good-medical-practice) and linked GMC guidance | Professional standard used in explanations |

The MSRA *Test Blueprint & Information* document, which S5 says contains "the scoring process … in full",
could not be retrieved (bot-protected). Nothing in this spec is taken from it.

## 2. What the PD paper assesses

- **[Official, S3]** Professional attributes rather than knowledge. Three target attributes:
  **Professional integrity**, **Coping with pressure**, **Empathy and sensitivity**.
- **[Official, S1]** Practice-paper rationales are framed against GMC *Good medical practice* domains.
- **[Official, S2, S3]** Candidates answer as an **F2 doctor**. Settings include hospital wards, general practice and
  out-of-hours care; the setting "has only been chosen to provide a context".
- **[Official, S3]** Options include good, acceptable and poor responses; the best response is always present;
  "completely implausible responses are not included".

## 3. Response formats (both implemented)

| Format | Official instruction | Options | Response |
|---|---|---|---|
| Ranking | "Rank in order the following actions in response to this situation (1 = Most appropriate; 5 = Least appropriate)" | **4 or 5** [S1, S2, S3] | Every option ranked once; actions are "not … chronological" [S3] |
| Multiple choice | "Choose the 3 most appropriate actions to take in this situation" | **8** (S3 says "a minimum of 8") | Exactly **3**; together they should "fully resolve the situation" [S2, S3] |

- **[Official, S3]** Roughly half the paper is each format.
- **[Not published]** The on-screen interaction (drag-and-drop, drop-downs, etc.) in the Pearson VUE test is not
  described publicly. **[Ossify]** Ranking uses a tap-to-place list (tap options in order of preference, then
  reorder with ↑/↓ buttons or Alt+↑/↓); this works with touch, mouse and keyboard and makes ties impossible.

## 4. Scoring

### Verified
- **[Official, S2]** Ranking: maximum **4 marks per response**, **20 marks per scenario**; "There are marks available for 'near misses'."
- **[Official, S3]** "The closer your response is to the pre-determined key, the more marks are awarded."
- **[Official, S2]** Multiple choice: maximum **4 marks per response**, choose 3 of 8, **12 marks per scenario**.
- **[Official, S3]** "There is no negative marking."
- **[Official, S5]** Paper scores are normalised (GP: mean 250, SD 40) and banded 1–4; there is no maximum
  achievable score. Ossify does **not** attempt to reproduce this.

### Not published (approximated)
- The exact near-miss values for each ideal-rank / candidate-rank combination.
- How 4-option ranking items are scored (S2's 20-mark maximum implies 5 options).
- Treatment of ties, incomplete rankings, or selecting other than 3 options.
- Any item weighting, standard-setting or equating.

### Ossify practice scoring model v1 (provisional, configurable — `js/sjt-engine.js` → `DEFAULT_CONFIG`)
- **Ranking:** each option earns `max(0, 4 − |candidate rank − key rank|)`, i.e. 4 for exact, 3 one place out,
  2 two places, 1 three places, 0 four places. Maximum = 4 × number of options (20 for 5 options, 16 for 4).
  This is the simplest model that satisfies everything verified (4 per response, 20 per scenario, graded near misses).
  - **[Analogous, S6]** NHS Education for Scotland publishes a near-identical matrix for its pharmacy SJT, except that
    its middle row awards 2 (not 3) for ranking the 3rd-ideal option 2nd. Our matrix is configurable so a different
    matrix can be swapped in without touching the UI.
- **Multiple choice:** 4 marks per keyed option selected, maximum 12; no negative marking.
- **Validation:** rankings must be complete with no ties; multiple choice must have exactly 3 distinct options.
  Invalid responses cannot be submitted (the UI disables Submit and the engine rejects them).
- Every score shown to users is labelled as an Ossify practice score, not an official MSRA result.

## 5. Timing and navigation
- **[Official, S4, S5]** PD paper: 95 minutes (122 / 146 with extra time); CPS: 75 minutes; total 170 minutes; optional 5-minute break.
- **[Official, S3]** 50 PD questions since 2020 (reduced from 58). → ~1 min 54 s per item.
- **[Not published]** Flagging/reviewing behaviour in the live test.
- **[Ossify]** Topic Mode is untimed; the session screen shows the official pacing (~1:54 per item) as guidance only.

## 6. The five v1 questions

| ID | Format | Setting | Attribute | What it tests |
|---|---|---|---|---|
| sjt-001 | Ranking (5) | Respiratory ward | Professional integrity | Candour after your own prescribing omission |
| sjt-002 | Multiple choice | Medical wards overnight | Coping with pressure | Prioritising a deteriorating patient and escalating workload |
| sjt-003 | Ranking (5) | General practice | Empathy and sensitivity | Keeping an older patient's voice central when a relative speaks for him |
| sjt-004 | Multiple choice | Day-surgery unit | Professional integrity | Responding to a senior colleague undermining a nurse |
| sjt-005 | Ranking (4) | Orthopaedics (after discharge) | Professional integrity | Boundaries when a patient contacts you on social media |

None of the 22 official practice scenarios (S1) is reproduced or paraphrased; topics were chosen to avoid them.

## 7. Persistence (v1)
- **[Ossify]** Questions are bundled static data (`js/sjt-questions.js`); no network needed at runtime.
- The active session (question order, answers, marks) is kept in `localStorage` (`ossify_sjt_session_v1`) so a refresh
  resumes it. A submitted answer is locked and scored once; re-submitting is impossible.
- SJT results do **not** yet feed XP, the leaderboard or Supabase. That is a deliberate next step once the
  question format and scoring model are signed off.

## 8. Tests
`node --test tests/*.test.js` — engine scoring, validation, count parsing, selection and question-bank schema.
