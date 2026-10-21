-- How many questions are available for a Clinical Problem Solving selection,
-- per specialty. Mirrors get_random_questions: SBAs all count, and each EMQ set
-- contributes at most 3 stems. Used by practice.html to cap the Custom count.
create or replace function public.count_matching_questions(
  p_topics  text[] default '{}',
  p_type    text   default '',
  p_domains text[] default '{}'
)
returns table(topic text, available integer)
language sql
stable
as $$
  with base as (
    select q.topic, q.type,
           row_number() over (
             partition by q.topic, case when q.type = 'EMQ' then q.tutor_content->>'set_id' else q.question_id end
             order by q.id
           ) as set_pos
    from   questions q
    where  (coalesce(array_length(p_topics, 1), 0) = 0 or q.topic = any(p_topics))
      and  (p_type = '' or q.type = p_type)
      and  (coalesce(array_length(p_domains, 1), 0) = 0
            or exists (select 1 from unnest(p_domains) d where q.domain like (d || '%')))
  )
  select topic, count(*)::integer
  from   base
  where  type = 'SBA' or set_pos <= 3
  group  by topic;
$$;

revoke execute on function public.count_matching_questions(text[], text, text[]) from public, anon;
grant  execute on function public.count_matching_questions(text[], text, text[]) to authenticated;
