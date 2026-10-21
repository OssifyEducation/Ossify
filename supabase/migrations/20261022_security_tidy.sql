-- Security and speed tidy-up (from the Supabase security and performance checkers).
-- Nothing here changes what users see. It:
--   1. pins the search path on 15 functions so they can't be tricked into using look-alike tables
--   2. stops signed-out visitors calling three internal functions
--   3. adds the 12 missing indexes on linked columns (faster lookups as the site grows)
--   4. rewrites 14 row-security rules so the sign-in check runs once per query, not once per row,
--      and removes a duplicate profiles rule (same check as "Users can view own profile")

-- 1. Fixed search path
alter function public.update_updated_at_column()                                   set search_path = public;
alter function public.is_admin()                                                   set search_path = public;
alter function public._hys_ref_entries(text)                                       set search_path = public;
alter function public._hys_ref_entries_raw(text)                                   set search_path = public;
alter function public._wk_tuesday_on_or_after(date)                                set search_path = public;
alter function public._wk_first_close(timestamp with time zone)                    set search_path = public;
alter function public._wk_next_open(timestamp with time zone)                      set search_path = public;
alter function public._wk_close_for(timestamp with time zone)                      set search_path = public;
alter function public.award_badge(uuid, text)                                      set search_path = public;
alter function public.get_topic_progress()                                         set search_path = public;
alter function public._sanitize_exam_flags(integer[], jsonb)                       set search_path = public;
alter function public._timed_exam_summary(public.exam_attempts)                    set search_path = public;
alter function public._xp_for_answer(boolean)                                      set search_path = public;
alter function public.get_random_questions(text, text, text, integer)              set search_path = public;
alter function public.count_matching_questions(text[], text, text[])               set search_path = public;

-- 2. Signed-out visitors can no longer call these
revoke execute on function public.get_topic_progress() from public, anon;
grant  execute on function public.get_topic_progress() to authenticated, service_role;
revoke execute on function public.is_admin()           from public, anon;
grant  execute on function public.is_admin()           to authenticated, service_role;
-- handle_new_user only runs automatically when someone signs up; nobody needs to call it directly
revoke execute on function public.handle_new_user()    from public, anon, authenticated;

-- 3. Missing indexes
create index if not exists duels_challenger_id_idx              on public.duels (challenger_id);
create index if not exists duels_opponent_id_idx                on public.duels (opponent_id);
create index if not exists duels_winner_id_idx                  on public.duels (winner_id);
create index if not exists flagged_questions_question_id_idx    on public.flagged_questions (question_id);
create index if not exists saved_summaries_question_id_idx      on public.saved_summaries (question_id);
create index if not exists sjt_practice_answers_item_id_idx     on public.sjt_practice_answers (item_id);
create index if not exists stripe_payments_user_id_idx          on public.stripe_payments (user_id);
create index if not exists user_badges_badge_key_idx            on public.user_badges (badge_key);
create index if not exists user_card_progress_card_id_idx       on public.user_card_progress (card_id);
create index if not exists user_progress_question_id_idx        on public.user_progress (question_id);
create index if not exists weekly_challenges_winner_id_idx      on public.weekly_challenges (winner_id);
create index if not exists weekly_questions_bank_question_id_idx on public.weekly_questions (bank_question_id);

-- 4. Row-security rules: same meaning, checked once per query
drop policy if exists "Authenticated can read profiles" on public.profiles;
alter policy "Users can view own profile"   on public.profiles          using ((select auth.uid()) = id);
alter policy "Users can update own profile" on public.profiles          using ((select auth.uid()) = id);
alter policy "Users can view own progress"  on public.user_progress     using ((select auth.uid()) = user_id);
alter policy "Authenticated can read badges" on public.badges           using ((select auth.role()) = 'authenticated');
alter policy "Users can read own badges"    on public.user_badges       using ((select auth.uid()) = user_id);
alter policy "Authenticated can read weekly challenges" on public.weekly_challenges using ((select auth.role()) = 'authenticated');
alter policy "Users can read all weekly entries" on public.weekly_entries using ((select auth.role()) = 'authenticated');
alter policy "Users can read own duels"     on public.duels             using (((select auth.uid()) = challenger_id) or ((select auth.uid()) = opponent_id));
alter policy "Anyone logged in can read questions" on public.questions  using ((select auth.uid()) is not null);
alter policy ump_own_rows on public.user_module_progress using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
alter policy ucp_own_rows on public.user_card_progress   using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
alter policy "Users can view own exam attempts" on public.exam_attempts using ((select auth.uid()) = user_id);
alter policy "Users can read own xp events" on public.xp_events         using ((select auth.uid()) = user_id);
alter policy "Users can view own SJT mock attempts" on public.sjt_mock_attempts using ((select auth.uid()) = user_id);
