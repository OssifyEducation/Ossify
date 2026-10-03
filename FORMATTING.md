# Ossify Practice Page — Locked Rendering Format

This document defines the canonical rendering format for the tutor mode panel in `practice.html`. **Do not change these formats without explicit instruction from Ossi.** Each section is also guarded by `!! LOCKED FORMAT !!` comments in the source.

---

## 1. High-Yield Summary (⚡)

**Data format** (`tutor_content.high_yield_summary`):
```
•  Bullet one text. •  Bullet two text. [1]
```

**Rendering rules:**
- Split on `•\s+` to get individual bullets
- Strip trailing `[N]` reference markers from each bullet (e.g. `"...text. [1]"` → `"...text."`)
- Filter out empty strings (length ≤ 5)
- Each bullet → `<div class="hys-bullet-item">` containing:
  - `<span class="hys-dot">•</span>` (teal, bold)
  - `<span>` with the bullet text (HTML-escaped)
  - Bottom border via CSS on `.hys-bullet-item`, except the last child

**CSS classes:** `.hys-bullet-item`, `.hys-dot`

**Panel:** `.hys-panel` with header `⚡ High-yield summary` — starts **open** by default (`display:block`).

---

## 2. References (📚)

**Data format** (`tutor_content.references`):
```
BTS = British Thoracic Society. (optional preamble line)
[1]  NICE NG185 (2020). Acute coronary syndromes.
[2]  ESC Guidelines (2023). ST-elevation myocardial infarction.
```

**Rendering rules:**
- Split the raw string on `(?=\[\d+\])` to get parts
- Parts matching `^\[\d+\]\s+(.*)` → `.ref-item` row:
  - `<span class="ref-num">[N]</span>` — bold purple, fixed-width left column
  - `<span class="ref-text">text</span>` — fills remaining width
  - Bottom border except last item
- Non-matching lines (preamble) → `<div class="ref-preamble">` — italic, above numbered refs
- Newlines within a reference are collapsed to a space

**CSS classes:** `.refs-body`, `.ref-item`, `.ref-num`, `.ref-text`, `.ref-preamble`

**Panel:** `.hys-panel` with header `📚 References` — starts **collapsed** by default (`display:none`).

---

## 3. Answer Option Brief / Detailed Toggle

**Behaviour:**
- On answer reveal: **brief text** is visible by default
- User clicks **"Detailed explanation"** button → brief hides, detailed shows
- User clicks **"Hide explanation"** → detailed hides, brief returns
- Both are **never visible simultaneously**

**Implementation:** `tpToggleDetail(id, btn)` function. When toggling open, it finds `.ans-brief` via `btn.closest('.ans-block')?.querySelector('.ans-brief')` and sets `display:none`. Reverses on close.

---

## 4. Stem Annotation (Clues & Distractors)

**Trigger:** After answering in tutor/review mode only.

**Colours:**
- 🟡 Yellow (`.stem-clue`) — diagnostic clues from `tutor_content.key_clues`
- 🔵 Blue (`.stem-distractor`) — distractors from `tutor_content.key_distractors`

**Tooltip:** Global `<div id="stemTip">` at bottom of body, `position:fixed`. Positioned by JS `mousemove` handler to follow cursor and flip if near viewport edge. **Never CSS-only `position:absolute`** (gets clipped by card boundaries).

**`.stem-tip` spans** inside highlighted elements hold the tooltip text but are `display:none !important` — their text is read by JS, never rendered inline.

---

## 5. Question Navigation Dots

| State | CSS class | Colour |
|---|---|---|
| Current question | `.q-dot.active` | Bright yellow `#facc15` with amber `#f59e0b` ring |
| Correct (review mode only) | `.q-dot.answered-correct` | Green |
| Wrong (review mode only) | `.q-dot.answered-wrong` | Pink |
| Answered but hidden (exam mode) | `.q-dot.answered-skip` | Neutral grey |
| Not yet attempted | `.q-dot` | Faint purple |

Correct/wrong colours are **hidden during an active exam session** — they only appear after the user clicks "Review answers" (`reviewMode = true`).

---

## 6. Exam Mode vs Tutor Mode

| Behaviour | Exam | Tutor |
|---|---|---|
| Answer reveal on confirm | ❌ Moves to next silently | ✅ Reveals inline |
| Tutor panels shown | ❌ | ✅ |
| Last question button | "Confirm answer and reveal score" | "Confirm answer" |
| After results overlay | "Review answers" enters reviewMode | N/A |
| Nav dot colours | Hidden (neutral grey) | Correct/wrong shown |


---

## 7. Shared renderer (since Timed Exam Mode)

The Tutor Mode renderer now lives in **`js/ossify-tutor.js`** and **`css/ossify-tutor.css`**, loaded by both `practice.html` and `exam.html` (Timed Exam review). The code was moved verbatim, so every locked format above still applies — edit it there, not in the pages. Helpers: `renderEmqSetHeader`, `getStemAnnotations`, `annotateStem`, `renderAnsweredOption`, `renderTutorPanels(q, selected, tc, opts)` (opts is optional; practice.html passes none), plus the toggle functions and the stem tooltip handler.

The stem tooltip handler now looks up `#stemTip` when an event fires (previously it ran before the element existed, so tooltips never appeared). It also shows on keyboard focus.
