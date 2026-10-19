-- Close anonymous access to the question bank.
--
-- Before: the policy "Public can read questions" (anon, using true) let anyone with the
-- public website key read every question, answer and explanation without signing in.
-- After: only signed-in users can read questions (existing policy "Anyone logged in can
-- read questions"), and nobody can write to the table from the website.
--
-- The website was changed first (practice.html now calls get_random_questions as the
-- signed-in user), so nothing on the site depends on anonymous access.

drop policy if exists "Public can read questions" on public.questions;

revoke all on public.questions from anon;
revoke insert, update, delete, truncate, references, trigger on public.questions from authenticated;

-- get_random_questions runs with the caller's rights; it no longer serves anonymous callers.
revoke execute on function public.get_random_questions(text, text, text, integer) from public, anon;
grant  execute on function public.get_random_questions(text, text, text, integer) to authenticated;
