/* Ossify SJT (Professional Dilemmas) question bank — v1, five original questions.
 * Content only: no scoring or presentation logic lives here (see js/sjt-engine.js).
 * Schema is validated by OssifySJT.validateQuestion() and tests/sjt-engine.test.js.
 */
(function (root) {
  "use strict";

  var GMP = {
    title: "Good medical practice",
    publisher: "General Medical Council",
    year: 2024,
    url: "https://www.gmc-uk.org/professional-standards/the-professional-standards/good-medical-practice"
  };

  var QUESTIONS = [
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "sjt-001",
      version: 1,
      status: "draft-for-review",
      format: "ranking",
      title: "A missed antiepileptic",
      setting: "Respiratory ward",
      attribute: "Professional integrity",
      gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
      competencies: ["Openness and candour", "Patient safety", "Seeking senior advice"],
      difficulty: "moderate",
      stem:
        "You are an F2 doctor on a respiratory ward. Mr Okafor, 46, was admitted yesterday evening with community-acquired pneumonia, and you clerked him. He has epilepsy, well controlled on levetiracetam twice daily.\n\n" +
        "Reviewing his drug chart on the morning ward round, you realise you did not prescribe his levetiracetam when you clerked him. He has missed last night's and this morning's doses. He has not had a seizure and is sitting up chatting to his wife. The nurse looking after him has not noticed the omission.",
      instruction: "Rank in order the following actions in response to this situation (1 = Most appropriate; 5 = Least appropriate).",
      options: [
        {
          id: "A",
          text: "Prescribe the levetiracetam now and ask your registrar whether any additional dose is needed to cover the missed doses.",
          brief: "Deals with the ongoing clinical risk first and brings in senior judgement on the one decision you should not make alone.",
          detailed: "Every hour without levetiracetam lowers Mr Okafor's seizure threshold, and he is already unwell with pneumonia, which can provoke seizures on its own. Restarting the drug is the single action that protects him, and whether to give an extra dose to catch up is a pharmacological judgement worth checking with your registrar (and, if needed, the ward pharmacist) rather than guessing. It also means a senior now knows about the error, which makes everything else easier to do properly."
        },
        {
          id: "B",
          text: "Explain to Mr Okafor that his levetiracetam was missed, apologise and tell him what is being done about it.",
          brief: "Prompt, honest disclosure is expected when an error could still cause harm, and here it plainly could.",
          detailed: "The GMC's candour guidance asks you to speak to the patient as soon as possible after you realise something has gone wrong, and to explain what happened and what is being done. The same guidance accepts that patients may not need to know about an incident that has not caused and will not cause harm. That exception does not fit here: two missed doses of an antiepileptic leave a real risk over the next day or so, and Mr Okafor needs to know so that he and his wife can recognise warning signs and report them. It ranks just below A only because restarting the drug cannot wait for the conversation; in practice you would do both within minutes."
        },
        {
          id: "C",
          text: "Complete an incident report describing the omission.",
          brief: "The right thing to do, but it protects future patients rather than this one, so it sits below the actions that help Mr Okafor directly.",
          detailed: "Missed critical medicines at the point of admission are a recurring safety problem, and reporting them is how a ward or trust spots patterns, such as the clerking template not prompting medicines reconciliation. Filing a report is not an admission of incompetence and should not be avoided out of embarrassment. On its own, though, it does nothing for Mr Okafor's seizure risk or his right to know, which is why it ranks third."
        },
        {
          id: "D",
          text: "Ask the nurse to give a dose now from ward stock, and prescribe it retrospectively once the ward round has finished.",
          brief: "Gets the drug into the patient quickly, but asks a colleague to administer without a prescription and leaves the error undisclosed and unreviewed.",
          detailed: "This is the pressured shortcut: it feels efficient on a busy ward round and does reduce the seizure risk. But it asks the nurse to give a medicine outside the prescribing process, which exposes her professionally and creates a misleading record. It also skips the senior check on dosing in A and the disclosure in B. Because it at least addresses the clinical risk and is not designed to hide anything, it ranks above E."
        },
        {
          id: "E",
          text: "Prescribe the levetiracetam now and say nothing to Mr Okafor or the team, as he has come to no harm.",
          brief: "A deliberate decision to conceal your own error, resting on the false premise that the risk has passed.",
          detailed: "Prescribing the drug is correct, which is what makes this option tempting. The problem is the choice to stay silent. 'No harm' is not established: the risk from the missed doses persists, and no one with seniority has reviewed whether he needs extra cover. Concealment also removes the chance for the team to learn from the omission. Choosing silence to protect yourself is a breach of the honesty expected of every doctor, which is why this ranks last even though it reaches the same prescription as A."
        }
      ],
      key: { order: ["A", "B", "C", "D", "E"] },
      explanation: {
        issue: "The judgement here is how to respond to your own mistake: fixing the clinical risk, being honest with the patient, and making sure the error is reviewed, in an order that keeps Mr Okafor safe.",
        keyDetails: "Three details carry the scenario. The drug is an antiepileptic, so the omission carries a risk that persists after the missed doses. The error is yours and nobody else has noticed, so whether anyone finds out depends entirely on you. And he is well at the moment, which is exactly what makes keeping quiet tempting.",
        reasoning: "A comes first because it removes the danger and gets senior input on the catch-up dose. B follows immediately: the candour duty applies because harm remains possible, and Mr Okafor needs the information to keep himself safe. C is important for the system but does not help him today. D and E both restart the drug, so the difference between them lies in honesty: D is a procedural shortcut that sidelines a colleague, while E is a choice to conceal.",
        competing: "It is reasonable to ask whether telling Mr Okafor will alarm him unnecessarily; the GMC itself says patients may not need to know about genuine no-harm incidents. The answer turns on whether harm is still possible, and with an antiepileptic it is. If you are unsure in a similar case, discuss disclosure with a senior rather than deciding to stay silent."
      },
      references: [
        { title: "Openness and honesty when things go wrong: the professional duty of candour", publisher: "General Medical Council and Nursing and Midwifery Council", year: 2022, url: "https://www.gmc-uk.org/professional-standards/the-professional-standards/candour---openness-and-honesty-when-things-go-wrong", note: "Speaking to patients as soon as possible; near misses and no-harm incidents; reporting errors." },
        { title: GMP.title, publisher: GMP.publisher, year: GMP.year, url: GMP.url, note: "Domain 2, 'Being open if things go wrong'; Domain 3, 'Responding to safety risks'." }
      ],
      tags: ["candour", "medication error", "prescribing", "epilepsy"]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "sjt-002",
      version: 1,
      status: "draft-for-review",
      format: "multiple_choice",
      title: "Three bleeps at 2 am",
      setting: "Medical wards, night shift",
      attribute: "Coping with pressure",
      gmcDomains: ["Colleagues, culture and safety", "Knowledge, skills and development"],
      competencies: ["Prioritisation", "Escalation", "Managing workload"],
      difficulty: "moderate",
      stem:
        "You are the F2 doctor covering four medical wards overnight. At 02:00 you are on Ward 7 rewriting a drug chart that has run out of space. Within ten minutes you are bleeped three times.\n\n" +
        "A nurse on Ward 9 tells you that Mrs Hale, 81, admitted two days ago with a urinary tract infection, now has a NEWS2 score of 7 with a blood pressure of 84/50. A nurse on Ward 5 asks you to verify the death of a patient who died peacefully on an end-of-life care plan an hour ago. Meanwhile, the nurse on Ward 7 tells you that a patient's son has just arrived and wants to speak to a doctor about his father's CT scan, which has not yet been reported.\n\n" +
        "The medical registrar is busy in the Emergency Department. There is a hospital-at-night coordinator on duty.",
      instruction: "Choose the 3 most appropriate actions to take in this situation.",
      selectCount: 3,
      options: [
        {
          id: "A",
          text: "Go to review Mrs Hale straight away, asking the Ward 9 nurse to start oxygen if her saturations are low, repeat her observations and prepare for cannulation and blood cultures.",
          brief: "A NEWS2 of 7 with hypotension in an older patient with a known infection is possible septic shock, and the clock starts now.",
          detailed: "Of the four tasks, only this one carries a risk of death in the next hour. A NEWS2 score of 7 or more triggers an emergency response under the Royal College of Physicians' framework, and the combination of hypotension and a source of infection makes sepsis the working diagnosis. Giving the nurse clear instructions as you set off means time is not lost while you walk across the hospital."
        },
        {
          id: "B",
          text: "Phone the medical registrar to tell them about Mrs Hale and that you may need them to come and help.",
          brief: "A NEWS2 of 7 calls for senior involvement, and the registrar can only plan around you if they know.",
          detailed: "The registrar being in the Emergency Department is a reason to call early, not a reason to hold off. They may need to triage between several sick patients, and a heads-up now lets them decide when to come or whether to send critical care outreach. Calling does not mean you cannot cope; at this score, escalation is part of the expected response."
        },
        {
          id: "C",
          text: "Contact the hospital-at-night coordinator to explain your workload and ask for help prioritising or reallocating the other tasks.",
          brief: "This is what the coordinator is there for, and it stops the death verification and the anxious relative being forgotten while you are with Mrs Hale.",
          detailed: "Coping with pressure in the MSRA rarely means doing everything yourself. The coordinator can see the whole hospital's workload, may be able to send another doctor or a senior nurse to verify the death, and can let Ward 7 know when you are likely to be free. It is the action that makes sure the tasks you are not doing are still handled, which is what makes this combination of three answers complete."
        },
        {
          id: "D",
          text: "Finish rewriting the drug chart before leaving Ward 7, as it will only take a few more minutes.",
          brief: "Completing the task in hand feels efficient, but a few minutes matter more to a hypotensive patient than to a chart.",
          detailed: "This is the commonest trap in prioritisation questions. Nothing on the drug chart is time-critical at 2 am. Mrs Hale's blood pressure is. If the chart is needed for morning medicines, you or the coordinator can make sure it gets done later."
        },
        {
          id: "E",
          text: "Verify the death on Ward 5 first, as the family are likely to be waiting at the bedside.",
          brief: "A kind instinct, but verifying an expected death is not urgent and must not come before a deteriorating patient.",
          detailed: "Families value timely verification and it should not be left until morning. It is, however, an expected death on an end-of-life care plan, so a delay of an hour or two does not change anything clinically. If the delay is likely to be long, the coordinator can arrange for someone else to verify, or for the nurses to explain the delay to the family."
        },
        {
          id: "F",
          text: "Ask the Ward 7 nurse to tell the son that no doctor is available tonight and that he should phone in the morning.",
          brief: "It dismisses a worried relative and is not even accurate; a short conversation can usually happen later in the shift.",
          detailed: "The son cannot be given a scan result that does not yet exist, but he can be told that, and he can be offered a time to talk. Turning him away outright damages trust and often produces a more difficult conversation, or a complaint, later. A better approach is to ask the nurse to explain that you have been called to an emergency and will come when you can."
        },
        {
          id: "G",
          text: "Speak briefly to the son before you leave Ward 7, explaining that his father's scan has not yet been reported.",
          brief: "It sounds quick, but a worried relative rarely takes two minutes, and Mrs Hale needs you now.",
          detailed: "There is nothing wrong with the content of this conversation, and in a quieter moment it would be the right thing to do. The issue is timing: even a short conversation delays the review of a patient who may be in septic shock, and relatives understandably have follow-up questions. Asking the nurse to explain that you will return is kinder in the long run."
        },
        {
          id: "H",
          text: "Ask the Ward 9 nurse to give a fluid bolus and recheck the blood pressure in an hour, while you finish the tasks on Ward 7.",
          brief: "Remote management of a NEWS2 of 7 leaves an unwell patient without medical assessment for an hour or more.",
          detailed: "A fluid bolus may well be part of the right treatment, which is what makes this option plausible. But prescribing over the phone without seeing her, and then waiting an hour to recheck, misses the diagnostic work-up, the source control and the escalation that a score of 7 demands. It also commits you to the lowest-priority tasks while the highest-priority one waits."
        }
      ],
      key: { correct: ["A", "B", "C"] },
      explanation: {
        issue: "This is a prioritisation question under time pressure: which patient needs you first, and how do you make sure everything else still gets done when you cannot do it yourself?",
        keyDetails: "The figures that matter are the NEWS2 of 7 and the blood pressure of 84/50 in an older patient with a known infection. Equally important are the two resources the stem tells you about: a registrar who is busy but reachable, and a hospital-at-night coordinator.",
        reasoning: "A, B and C together resolve the whole situation. You go to the sickest patient with interim instructions already given (A), you escalate her early to someone more senior (B), and you hand the coordination of the rest of your list to the person whose job that is (C). Each of the other options either puts a less urgent task ahead of Mrs Hale (D, E, G) or manages her deterioration at a distance (H). F is the only one that is unprofessional in itself rather than mistimed.",
        competing: "E and G both reflect real compassion, and choosing them does not suggest poor values. The marks go to recognising that compassion for the family is best served by arranging for someone to see them, not by delaying care for the patient who is deteriorating."
      },
      references: [
        { title: "National Early Warning Score (NEWS) 2", publisher: "Royal College of Physicians", year: 2017, url: "https://www.rcp.ac.uk/improving-care/resources/national-early-warning-score-news-2/", note: "An aggregate score of 7 or more prompts an emergency response." },
        { title: GMP.title, publisher: GMP.publisher, year: GMP.year, url: GMP.url, note: "Domain 3, 'Responding to safety risks'; Domain 1, 'Being competent'." }
      ],
      tags: ["prioritisation", "night shift", "sepsis", "escalation"]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "sjt-003",
      version: 1,
      status: "draft-for-review",
      format: "ranking",
      title: "\"Just talk to me\"",
      setting: "General practice",
      attribute: "Empathy and sensitivity",
      gmcDomains: ["Patients, partnership and communication"],
      competencies: ["Patient-centred communication", "Respecting autonomy", "Working with relatives"],
      difficulty: "moderate",
      stem:
        "You are an F2 doctor in a GP surgery. Mr Thompson, 79, has come for a review of his blood pressure medication. His daughter drove him to the appointment and has come into the room with him.\n\n" +
        "Each time you ask Mr Thompson a question, his daughter answers for him. When you ask about side effects, she says, \"He gets muddled, it's easier if you just talk to me.\" There is no record of cognitive impairment in his notes. Mr Thompson looks at you, sighs, and says quietly that the new tablet makes him \"a bit dizzy when I get up in the morning\".",
      instruction: "Rank in order the following actions in response to this situation (1 = Most appropriate; 5 = Least appropriate).",
      options: [
        {
          id: "A",
          text: "Carry on directing your questions to Mr Thompson, thanking his daughter for her help and inviting her to add anything he may have missed.",
          brief: "Keeps the consultation with the patient while treating the daughter as an ally rather than an obstacle.",
          detailed: "Nothing in the notes suggests Mr Thompson lacks capacity, and he has just answered a question perfectly clearly. Under the Mental Capacity Act you start from a presumption of capacity, so the consultation should be with him. Doing this warmly, by acknowledging the daughter's support and giving her a defined role, avoids embarrassing either of them and usually changes the dynamic without anyone having to say so."
        },
        {
          id: "B",
          text: "Ask Mr Thompson whether he would like to speak with you on his own for part of the appointment.",
          brief: "A routine and respectful offer that gives him space to raise things he may not say in front of his daughter.",
          detailed: "Offering some time alone is good practice with older patients who attend with family, and it can surface concerns about mood, independence or the family relationship itself. It ranks below A because it is a step further: doing it immediately, before you have tried simply re-centring the conversation, can feel pointed to the daughter. If Mr Thompson keeps deferring to her, or seems uneasy, this becomes the right next move."
        },
        {
          id: "C",
          text: "Tell the daughter that her father has the right to answer for himself and ask her to let him speak.",
          brief: "The principle is right but the delivery is likely to humiliate the daughter and make the rest of the appointment harder.",
          detailed: "Mr Thompson does have that right, and if gentler approaches fail, a clear statement may be needed. As an opening move, though, it puts the daughter on the defensive in front of her father, and she is probably the person who helps him with his tablets every day. Losing her cooperation makes any change to his medication harder to put into practice. It still keeps the focus on the patient, which is why it ranks above D and E."
        },
        {
          id: "D",
          text: "Reassure Mr Thompson that dizziness is common when starting blood pressure tablets and usually settles with time.",
          brief: "You are talking to him, but you are closing down the one symptom he has volunteered, and it may matter.",
          detailed: "Dizziness on standing in a 79-year-old who has recently started an antihypertensive suggests postural hypotension, and that brings a real risk of falls. It deserves a focused history and a lying and standing blood pressure, not reassurance. The option is tempting because it is kind in tone and does involve the patient directly, but it treats his contribution as something to soothe rather than something to act on."
        },
        {
          id: "E",
          text: "Address your questions to the daughter, as she seems to know his medication routine well.",
          brief: "Excludes a patient who has shown he can speak for himself, on the strength of an unsupported claim that he is muddled.",
          detailed: "It is the path of least resistance and, in the short term, may even produce a tidier medication history. But it accepts the daughter's view of her father's cognition without assessment, and it overrides his autonomy in a decision about his own treatment. It also means his report of dizziness is likely to be lost. Of all the options, this one moves furthest from treating him as the person you are there to see."
        }
      ],
      key: { order: ["A", "B", "C", "D", "E"] },
      explanation: {
        issue: "The issue is how to keep an older patient at the centre of his own consultation when a well-meaning relative is speaking over him, without alienating the relative.",
        keyDetails: "Mr Thompson has no recorded cognitive impairment and has just described a specific, plausible side effect in his own words. The daughter is clearly involved in his care. Both facts matter: the first tells you whose consultation this is, and the second tells you why you want to keep her on side.",
        reasoning: "A is the best response because it achieves the goal, putting the patient back at the centre, at no cost to the relationship. B is a sensible escalation of the same aim. C is right in principle but likely to backfire. D and E are the weakest because each, in a different way, lets his own account fall away: D by dismissing his symptom and E by not listening to him at all.",
        competing: "The ordering of C and D is the closest call. C risks the relationship but keeps the patient's voice in the room; D keeps the relationship but discards what he said. Near-miss scoring means swapping them still earns most of the available marks, and the explanation above is the reason the key puts C first. If you had genuine concerns about his cognition, the right step would be to assess it, not to defer to the daughter."
      },
      references: [
        { title: "Mental Capacity Act 2005, section 1 (the principles)", publisher: "UK Parliament (legislation.gov.uk)", year: 2005, url: "https://www.legislation.gov.uk/ukpga/2005/9/section/1", note: "A person must be assumed to have capacity unless it is established that they lack it." },
        { title: "Decision making and consent", publisher: "General Medical Council", year: 2020, url: "https://www.gmc-uk.org/professional-standards/the-professional-standards/decision-making-and-consent" },
        { title: GMP.title, publisher: GMP.publisher, year: GMP.year, url: GMP.url, note: "Domain 2, 'Patients, partnership and communication'." }
      ],
      tags: ["communication", "autonomy", "older people", "relatives", "general practice"]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "sjt-004",
      version: 1,
      status: "draft-for-review",
      format: "multiple_choice",
      title: "Comments in recovery",
      setting: "Day-surgery unit",
      attribute: "Professional integrity",
      gmcDomains: ["Colleagues, culture and safety"],
      competencies: ["Challenging unprofessional behaviour", "Supporting colleagues", "Using appropriate channels"],
      difficulty: "moderate",
      stem:
        "You are an F2 doctor in general surgery. For the past three weeks, on the Tuesday day-case list, you have heard Mr Reid, a specialty doctor in your team, make sarcastic remarks to Ella, a newly qualified recovery nurse, about how \"slow\" she is. Today he did so in front of two patients who were waiting to go home.\n\n" +
        "Later, you find Ella in the staff room. She looks upset. Mr Reid is generally well regarded and has been supportive of you during your placement.",
      instruction: "Choose the 3 most appropriate actions to take in this situation.",
      selectCount: 3,
      options: [
        {
          id: "A",
          text: "Ask Ella how she is and listen to how she feels about what has been happening.",
          brief: "She is visibly upset, and checking on her is both kind and the first step in finding out what she wants to happen.",
          detailed: "Ella is newly qualified and is unlikely to feel able to challenge a doctor herself. A private, supportive conversation acknowledges what you have seen, tells her she is not imagining it, and lets you understand whether this has been happening beyond the Tuesday list. It also means anything you do next takes her wishes into account rather than acting over her head."
        },
        {
          id: "B",
          text: "Speak to Mr Reid privately, explaining what you have observed and how his comments are coming across.",
          brief: "A calm, private conversation is often the most effective and proportionate first challenge, even with a senior colleague.",
          detailed: "Many people who behave like this have not recognised the effect on others, particularly in front of patients. Raising it one to one, by describing specific behaviour rather than labelling him, gives Mr Reid the chance to change without loss of face. It takes some courage as an F2, and his support for you makes it harder, not less necessary. If the conversation feels unsafe or does not help, the next step is C."
        },
        {
          id: "C",
          text: "Let the consultant who leads the day-case list know about the pattern you have observed.",
          brief: "The behaviour is repeated and has now happened in front of patients, so the senior responsible for the team should be aware.",
          detailed: "A single throwaway remark might be dealt with informally, but three weeks of repeated comments, now witnessed by patients, is a pattern that the clinical lead needs to know about. Telling the consultant uses the normal line of accountability, protects Ella if it continues, and does not depend on you alone being able to change Mr Reid's behaviour. Together with A and B, it fully addresses the situation."
        },
        {
          id: "D",
          text: "Tell Mr Reid in front of the recovery team that his comments are unacceptable.",
          brief: "Right sentiment, wrong setting: a public confrontation is likely to escalate things and may make life harder for Ella.",
          detailed: "Challenging the behaviour is correct, but doing it publicly turns a professional concern into a confrontation. It invites a defensive reaction, embarrasses Ella further by making her the centre of a dispute, and risks a scene in a clinical area where patients are recovering. The same message delivered privately (B) is far more likely to work."
        },
        {
          id: "E",
          text: "Suggest to Ella that she tries to work a little faster so that Mr Reid has less reason to comment.",
          brief: "Places the responsibility on the person being belittled rather than on the behaviour.",
          detailed: "This may be meant as practical advice, but it implies that Mr Reid's remarks are a fair response to her pace. Nothing in the stem suggests Ella's work is unsafe, and even if it were, sarcasm in front of patients is not an acceptable way to address it. Advice like this tends to make people less likely to report poor behaviour in future."
        },
        {
          id: "F",
          text: "Leave it, as Mr Reid has been supportive to you and Ella has not asked for help.",
          brief: "Personal loyalty is not a reason to ignore repeated undermining of a colleague, and Ella's silence is unsurprising.",
          detailed: "Junior staff rarely ask for help with the behaviour of senior doctors, so her not asking tells you little. The GMC expects doctors to treat colleagues with kindness, courtesy and respect, and to help create a working environment where poor behaviour is challenged. Mr Reid's kindness towards you is real, and the question is testing whether you let it override that expectation."
        },
        {
          id: "G",
          text: "Post in the junior doctors' group chat to ask whether anyone else has noticed Mr Reid's behaviour.",
          brief: "An informal, written and widely shared discussion of a named colleague is unprofessional and unfair to him.",
          detailed: "Wanting to know whether others have seen the same thing is understandable, but a group chat is not a confidential or fair place to raise it. Messages can be forwarded, they cannot be withdrawn, and they give Mr Reid no chance to respond. If corroboration matters, the consultant (C) is the person to gather it."
        },
        {
          id: "H",
          text: "Email the medical director with a description of Mr Reid's behaviour.",
          brief: "A serious formal step that skips the local, proportionate routes and the people best placed to act.",
          detailed: "The medical director may eventually need to know if the behaviour persists or is part of a wider problem, so this is not a wrong instinct in principle. As a first response, though, it bypasses the clinical lead, gives neither Mr Reid nor his consultant the chance to put things right, and may not be what Ella wants. Proportionate escalation starts locally."
        }
      ],
      key: { correct: ["A", "B", "C"] },
      explanation: {
        issue: "The question is whether, and how, you challenge repeated undermining behaviour by a senior colleague towards someone more junior, when that colleague has been good to you.",
        keyDetails: "Three details tip the balance towards acting: the behaviour is repeated over three weeks, it has now happened in front of patients, and Ella is newly qualified. Mr Reid's support for you is the pressure the scenario introduces, and it is not a reason to stay silent.",
        reasoning: "The three keyed answers each cover a different side of the problem: support for the person affected (A), a direct and proportionate challenge to the person responsible (B), and making sure the senior accountable for the team knows (C). The distractors fail in recognisable ways. D challenges in the wrong setting, E blames the target, F ignores the issue, G gossips, and H escalates out of proportion.",
        competing: "Some candidates feel an F2 should not challenge a specialty doctor directly and would replace B with something else. The GMC's expectations of how colleagues treat each other apply regardless of grade, and a private, factual conversation is the least confrontational way to meet them. If you did not feel safe doing it, going straight to the consultant would be reasonable, and the scenario allows for that."
      },
      references: [
        { title: GMP.title, publisher: GMP.publisher, year: GMP.year, url: GMP.url, note: "Domain 3, 'Treating colleagues with kindness, courtesy and respect' and 'Contributing to a positive working and training environment'." }
      ],
      tags: ["teamwork", "respect", "undermining", "raising concerns"]
    },

    // ─────────────────────────────────────────────────────────────────────────
    {
      id: "sjt-005",
      version: 1,
      status: "draft-for-review",
      format: "ranking",
      title: "A message on Instagram",
      setting: "Orthopaedic ward (after discharge)",
      attribute: "Professional integrity",
      gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
      competencies: ["Professional boundaries", "Social media", "Patient safety"],
      difficulty: "moderate",
      stem:
        "You are an F2 doctor on an orthopaedic ward. Four days ago you discharged Ms Patel, 34, after a three-week admission for an open ankle fracture that needed surgical fixation. You got on well during her stay and often chatted when you had a spare moment.\n\n" +
        "This evening, at home, you receive a follow request from her personal Instagram account, followed by a direct message: \"Hope you don't mind me getting in touch! My wound has gone a bit red around the stitches. Do you think that's normal?\"",
      instruction: "Rank in order the following actions in response to this situation (1 = Most appropriate; 4 = Least appropriate).",
      options: [
        {
          id: "A",
          text: "Reply briefly and politely, explaining that you cannot give medical advice through social media and that she should contact the ward or her GP today about her wound. Do not accept the follow request.",
          brief: "Keeps the boundary and makes sure a possible wound infection after an open fracture is looked at today.",
          detailed: "Redness around the wound after fixation of an open fracture may be an early sign of infection, which can be serious, so you cannot simply let the message go. The GMC's social media guidance asks doctors who are contacted by patients this way to direct them to an appropriate healthcare setting. A short, friendly reply does that without engaging in a clinical conversation or a personal one."
        },
        {
          id: "B",
          text: "Do not reply on Instagram, and ask the nurse in charge of the ward to phone Ms Patel about her wound using the contact details in her notes.",
          brief: "Uses an official channel to act on the clinical concern, though it is slower and less direct than A.",
          detailed: "This keeps your private account entirely separate from your work, and makes sure someone qualified follows up the wound through proper channels. It ranks below A because it routes the message through a busy ward in the evening, adds delay, and leaves Ms Patel without any reply, so she may not realise she needs to act. It is still a responsible response, and much better than C or D."
        },
        {
          id: "C",
          text: "Ignore both the follow request and the message.",
          brief: "Protects the boundary but leaves a potentially important clinical concern unanswered.",
          detailed: "Not engaging with a patient on a personal account is reasonable in itself, and some doctors would see this as the safest choice. The difficulty is that she has told you about a symptom that could indicate infection in an open fracture. If she takes your silence as reassurance, the delay could matter. Maintaining a boundary does not require you to ignore a safety concern you have been made aware of."
        },
        {
          id: "D",
          text: "Accept the follow request and reply with advice about her wound, as you know her case well.",
          brief: "Blurs the professional relationship and gives clinical advice about a wound you cannot see.",
          detailed: "Knowing her case well is precisely what makes this tempting, and the intention is to help. But accepting the request turns a professional relationship into a personal online one, and advising on a wound by message, without examination, notes or follow-up, risks false reassurance. Of the four options it is the only one that both crosses the boundary and creates a clinical risk."
        }
      ],
      key: { order: ["A", "B", "C", "D"] },
      explanation: {
        issue: "This tests professional boundaries when a former patient contacts you through a personal channel, and whether you can keep that boundary without losing sight of a clinical concern she has raised.",
        keyDetails: "The two details that drive the ranking are the channel (her personal Instagram, out of hours) and the content (redness around the wound of a recently fixed open fracture). A response has to deal with both.",
        reasoning: "A handles both problems at once: it keeps the relationship professional and gets her to appropriate care today. B also keeps the boundary and acts on the concern, but more slowly and less transparently. C keeps the boundary but drops the clinical concern, and D does the reverse while creating a new boundary problem, which is why it comes last.",
        competing: "Some doctors argue that any reply on a personal account blurs the boundary, which would place B above A. The GMC's guidance supports a brief redirecting reply, and in this case speed matters because of the infection risk. That said, A and B are adjacent in the key, so near-miss scoring treats this as a close call."
      },
      references: [
        { title: "Using social media as a medical professional", publisher: "General Medical Council", year: 2024, url: "https://www.gmc-uk.org/professional-standards/the-professional-standards/using-social-media-as-a-medical-professional/using-social-media-as-a-medical-professional", note: "Direct patients who contact you through social media to an appropriate healthcare setting." },
        { title: GMP.title, publisher: GMP.publisher, year: GMP.year, url: GMP.url, note: "Domain 4, 'Maintaining professional boundaries'." }
      ],
      tags: ["boundaries", "social media", "wound infection", "orthopaedics"]
    }
  ];

  if (typeof module === "object" && module.exports) module.exports = QUESTIONS;
  else root.OSSIFY_SJT_QUESTIONS = QUESTIONS;
})(typeof self !== "undefined" ? self : this);
