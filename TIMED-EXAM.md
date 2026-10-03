# Timed Exam Mode

`exam.html` — a 97-question, 75-minute MSRA Clinical Problem Solving simulation.

## Pieces
- **Database:** `supabase/migrations/20261003_timed_exam_mode.sql` (already applied to project `judtpdikbidvccclftvq`). Adds `exam_attempts` + RPCs:
  `start_timed_exam`, `get_active_timed_exam`, `save_timed_exam_progress`, `submit_timed_exam`, `get_timed_exam_review`.
  Users can read their own attempts; all writes go through the RPCs (direct INSERT/UPDATE is denied).
- **Page:** `exam.html` (intro → exam → results → review). Requires sign-in.
- **Shared Tutor renderer:** `js/ossify-tutor.js`, `css/ossify-tutor.css` (also used by `practice.html`).
- **Dashboard:** "Timed MSRA exam" card (resume / latest score / history links) + hero button.
- **Navigation:** "Timed Exam" sidebar link on every app page.

## Paper blueprint
67 SBAs + 10 EMQ themes × 3 scenarios = 97. All 12 specialties appear (6–9 items each). Questions from the user's earlier timed exams are used last. EMQ scenarios stay together. Answer options are **not** shuffled, because explanations and EMQ option lists refer to options by letter.

## Clock
Server sets `started_at` / `deadline_at`. The page computes `remaining = deadline − (Date.now() + serverOffset)` on every tick and schedules the next tick for the next whole-second boundary. One timeout handle at a time. A refresh resumes the same deadline. Saves are accepted up to 30 s after the deadline (network grace). After that the server finalises the attempt with the last saved answers.

## Tuning
Constants at the top of `_select_timed_exam_questions` (`c_total`, `c_emq_sets`, `c_emq_per_set`) and `4500` seconds in `start_timed_exam`.
