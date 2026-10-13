# Ossify SJT — item-writing style guide

Applies to every Professional Dilemmas question. Read with `docs/SJT-SPEC.md` (format and scoring evidence)
and `content/sjt-blueprint.csv` (what each question is meant to test).

## 1. The candidate and the setting
- The candidate is always **an F2 doctor**, addressed as "you". Open with role and place: "You are an F2 doctor in …".
- UK NHS settings only. Rotate through hospital specialties, general practice, community and out-of-hours care,
  and occasional non-clinical settings (teaching, audit, social events), following the blueprint.
- Use realistic UK roles: consultant, registrar, specialty doctor, F1, nurse in charge, ward manager, healthcare
  assistant, pharmacist, physician associate, practice manager, receptionist, clinical/educational supervisor,
  Freedom to Speak Up guardian.
- Names: varied and realistic for the UK population; no real people, trusts or hospitals. Use titles for patients
  ("Mr Okafor", "Ms Patel") and first names for colleagues where natural ("Ella, a recovery nurse").

## 2. The stem
- 80–170 words, usually two short paragraphs: context, then the trigger.
- Give exactly the facts needed to make the key defensible, and no clues that only the key would use.
- The difficulty must come from **competing legitimate considerations** (time, loyalty, kindness, autonomy,
  hierarchy, safety), never from missing information or awkward wording.
- No questions inside the stem. No "What should you do?" — the instruction line does that.

## 3. Options

### Ranking (key order is a full permutation)
- 5 options (about 80% of ranking items) or 4 options (about 20%).
- Each option is **one independent action**, not a sequence. Not chronological ("first…, then…").
- Spread across good / acceptable / poor, with at least one tempting-but-wrong action and no absurd ones.
- Instruction text, exactly: `Rank in order the following actions in response to this situation (1 = Most appropriate; 5 = Least appropriate).` (use 4 for four-option items).

### Multiple choice (choose 3 of 8)
- 8 options. Exactly 3 keyed; **together** they must fully resolve the situation.
- Keyed options should cover different aspects (e.g. patient, colleague, system) rather than three versions of one idea.
- At least two distractors must be plausible actions a reasonable F2 might choose.
- Instruction text, exactly: `Choose the 3 most appropriate actions to take in this situation.`

### Both formats
- Options within an item are similar in length (the longest should not be more than ~25% longer than the next).
  The build warns when the best option is clearly the longest.
- Letters are assigned so keys are spread evenly across the bank: never alphabetical; any letter may be best.
- Start each option with a verb ("Ask…", "Explain…", "Tell…"). No "Do nothing" phrasing; write the realistic version
  ("Leave it, as…").
- No absolute words that give the answer away ("always", "immediately and without exception").
- Don't label poor options with tell-tale phrases such as "without telling anyone", "say nothing" or "don't mention".
  Let the weakness be implicit in the action, as it would be in real life ("Work through the list yourself over lunch").
- Every option must be judgeable on its own: no "If [another option] fails, …" and no "X, or Y" choices inside one option.
- In choose-3 items, at least three of the five distractors should be actions a reasonable F2 might genuinely choose.
- Prefer distractors that are reasonable-but-weaker (wrong timing, wrong person, incomplete) over ones that are plainly unethical; at most one plainly unprofessional option per question.

## 4. Explanations (the Ossify standard)
For every option:
- **brief** — 1–3 sentences: the verdict and the main reason.
- **detailed** — a thorough paragraph: why it ranks where it does, the consequence of the action, how it compares
  with its neighbours in the key, and any guidance that genuinely supports the reasoning.

For every question:
- **issue** — the judgement being tested, in one or two sentences.
- **keyDetails** — the specific facts in the stem that drive the key.
- **reasoning** — why the key is ordered as it is (ranking) or why these three together (multiple choice).
- **competing** — the closest call, acknowledged honestly, and what would change the answer.

Writing rules:
- Refer to options as **[A]**, **[B]** … (the page renders these in bold). Never write bare option letters.
- Full sentences, specific to the scenario. Vary sentence length and openings across the bank.
- Banned phrases (checked by tests): "This highlights the importance of", "It is important to note that",
  "In this scenario", "The key takeaway is", "Ultimately, the best approach is", "This demonstrates the significance of".
  Also avoid "plays a crucial role", "navigate", "delve", "it's worth noting".
- Educational, not preachy. Distinguish *inappropriate* from *reasonable but less effective*.
- Straight apostrophes and quotation marks. British spelling. Times as 02:00.

## 5. References
- Only sources in `content/sjt-references.json` (all verified). The build fails on anything else.
- 1–3 references per question, chosen because they support the reasoning, with a short `note` naming the relevant
  section heading. No paragraph numbers unless checked against the current text.

## 6. Originality
- Never reproduce or paraphrase the 22 official practice-paper scenarios (listed in `docs/SJT-SPEC.md` §6) or any
  commercial bank. A blueprint premise that resembles one is rewritten before drafting.
- The build warns when two stems overlap heavily; resolve every warning before merging.

## 7. Metadata (JSON fields)
`id`, `version`, `status` (`draft-for-review` → `reviewed` → `live`), `pool` (`practice` or `mock-1`…`mock-4`),
`blueprint` (blueprint row id), `format`, `title` (3–6 words), `setting`, `attribute`, `topic`, `gmcDomains`,
`competencies`, `difficulty` (`easy` | `moderate` | `hard`), `stem`, `instruction`, `selectCount` (multiple choice),
`options[]` {`id`,`text`,`brief`,`detailed`}, `key` {`order`} or {`correct`}, `explanation`, `references[]`, `tags`.

## 8. Difficulty
- **easy** — one clearly best action; the poor options are recognisably poor.
- **moderate** — the top two or three options are all reasonable; ordering depends on a specific stem detail.
- **hard** — a genuine dilemma between two legitimate duties; the key rests on guidance or a subtle detail,
  and a thoughtful doctor might initially disagree.
Target across the bank: about 20% easy, 60% moderate, 20% hard.

## 9. Workflow per batch (about 20 questions)
1. Draft from blueprint rows; one JSON file per question in `content/sjt/`.
2. `node scripts/build-sjt.js --check` and `node --test tests/*.test.js` must pass with no warnings.
3. Blind review: an independent reviewer answers each item without seeing the key; any disagreement on the top
   option (ranking) or on two or more keyed options (multiple choice) is reworked or dropped.
4. Clinician review (Ossi + colleague). Status moves to `reviewed` only after sign-off.
