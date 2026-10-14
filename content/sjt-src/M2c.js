// Mock 2, part 3 (sjt-276 to sjt-287). Pool mock-2: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-2";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-276", pool, letters: "BCF", format: "multiple_choice", difficulty: "moderate",
  title: "The silent bleep", setting: "Cardiology / respiratory", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Collaboration, teamwork and leadership", "Safety and quality"],
  competencies: ["Teamwork", "Patient safety", "Addressing problems with colleagues"],
  stem:
    "You are an F2 doctor on a cardiology and respiratory ward, sharing the ward cover with another F2, Tom. For the past three days Tom hasn't answered his bleep for long periods, and the nurses have started bleeping you about his patients instead.\n\n" +
    "Today you have been called five times about his patients, including once about a patient with chest pain, and your own jobs are falling behind.",
  options: [
    // keyed
    { text: "See any of Tom's patients who need a doctor urgently.",
      brief: "Patients mustn't wait because of a communication problem.",
      detailed: "A patient with chest pain needs to be seen promptly, whoever is responsible. Seeing urgent cases keeps patients safe while the underlying problem is sorted out." },
    { text: "Speak to Tom privately to find out what's going on.",
      brief: "There may be a reason, such as a faulty bleep or a problem he is struggling with.",
      detailed: "His bleep may be broken, he may be overwhelmed, or he may be unwell. A private, non-judgemental conversation is the fairest first step and may solve the problem quickly." },
    { text: "Tell your registrar that Tom's calls are coming to you.",
      brief: "A senior needs to know about a gap in ward cover.",
      detailed: "If calls are going unanswered, there is a risk to patients that a senior should know about. The registrar can check on Tom and redistribute work if needed." },
    // distractors
    { text: "Ask the nurses to keep bleeping Tom until he answers.",
      brief: "Leaves patients waiting while the problem continues.",
      detailed: "This puts the responsibility back on Tom, but patients may wait for help. It doesn't address why he isn't answering." },
    { text: "Post in the junior doctors' group chat asking whether anyone knows what's wrong with Tom.",
      brief: "Discussing a colleague's possible problems in a group is inappropriate.",
      detailed: "This may embarrass Tom and spread speculation. It doesn't solve the problem for patients." },
    { text: "Report Tom's unanswered bleeps through the incident reporting system.",
      brief: "May be right later, but not before speaking to him or a senior.",
      detailed: "If patients came to harm, an incident report would be appropriate. Going straight to it, without speaking to Tom or your registrar, skips the more direct ways of fixing the problem." },
    { text: "Tell the nurses you will only see your own patients.",
      brief: "Leaves patients without a doctor.",
      detailed: "Your workload matters, but refusing to see urgent patients puts them at risk." },
    { text: "Swap bleeps with Tom so you can see who is calling him.",
      brief: "Impractical, and it doesn't deal with the problem.",
      detailed: "This would cause confusion about who is covering whom, and it doesn't address why Tom isn't answering." }
  ],
  explanation: {
    issue: "This tests how you keep patients safe when a colleague isn't responding, and how you address the problem fairly.",
    keyDetails: "Tom hasn't answered for three days. Nurses are calling you instead. A patient with chest pain was affected. Your own work is suffering.",
    reasoning: "{k1} keeps urgent patients safe, {k2} gives Tom a fair chance to explain, and {k3} involves a senior who can fix the gap. The distractors leave patients waiting ({d1}, {d4}), gossip ({d2}), escalate too early ({d3}), or add confusion ({d5}).",
    competing: "{d3} is tempting because the problem is affecting patients. Speaking to Tom and your registrar should come first, as they can fix it today."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, working with colleagues and responding to risks to patients." }
  ],
  tags: ["teamwork", "bleep", "colleague", "cardiology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-277", pool, letters: "ABEDC", format: "ranking", difficulty: "easy",
  title: "The leaking bag", setting: "General surgery", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Dignity", "Compassion", "Teamwork"],
  stem:
    "You are an F2 doctor on a general surgical ward round. Mr Patel, 68, had a colostomy formed last week. As you reach his bay at visiting time, his stoma bag leaks onto his gown and bedsheets in front of his visitors.\n\n" +
    "He is visibly embarrassed. The nurses are busy with another patient, and the healthcare assistant says she will \"get to him in a bit\".",
  options: [
    { text: "Draw the curtains and help him until a nurse is free.",
      brief: "His dignity matters now, and you are there.",
      detailed: "Drawing the curtains gives him immediate privacy, and helping him clean up shows care. It doesn't need to wait for a nurse, and it ranks first because it deals with his distress straight away." },
    { text: "Ask the stoma nurse to review how his bag fits.",
      brief: "Prevents further leaks, which matters for his confidence.",
      detailed: "Leaks often mean the appliance doesn't fit well. A stoma nurse review can stop this happening again, which matters a great deal for his confidence. It ranks second because it doesn't help him in this moment." },
    { text: "Raise the slow response with the nurse in charge later.",
      brief: "May help with the ward's response next time.",
      detailed: "The delay may reflect staffing pressures rather than indifference, and a constructive conversation could help. It ranks third because it is less urgent than his care." },
    { text: "Ask his visitors to wait outside while the staff deal with it.",
      brief: "Gives some privacy, but leaves him waiting in a soiled bed.",
      detailed: "This partly protects his dignity, but he remains uncomfortable and embarrassed until someone is free. It is less helpful than drawing the curtains and helping him." },
    { text: "Continue the ward round, as stoma care is a nursing task.",
      brief: "Leaves him in distress when you could help.",
      detailed: "Stoma care is often led by nurses, but anyone can help in a moment like this. Walking away leaves him exposed and distressed. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you respond to a patient's loss of dignity with practical compassion, rather than seeing it as someone else's job.",
    keyDetails: "He is embarrassed, in front of visitors. Help won't arrive for a while. You are there.",
    reasoning: "{1} protects his dignity now, {2} helps prevent a repeat, and {3} addresses the ward's response. {4} helps only partly, and {5} leaves him exposed.",
    competing: "Some might put the stoma nurse referral below the conversation with the nurse in charge. The key ranks it higher because it directly affects his future care."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients with kindness and respecting their dignity." }
  ],
  tags: ["dignity", "stoma", "surgery", "compassion"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-278", pool, letters: "DEG", format: "multiple_choice", difficulty: "moderate",
  title: "In front of the family", setting: "Intensive care", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Collaboration, teamwork and leadership", "Trust and professionalism"],
  competencies: ["Responding to undermining", "Professionalism", "Seeking support"],
  stem:
    "You are an F2 doctor in intensive care. At 03:00 you phoned the on-call consultant, Dr Hale, about a patient whose blood pressure was falling, as the unit's escalation policy requires. He came in and adjusted the treatment.\n\n" +
    "On the morning ward round, in front of the patient's wife and daughter, he says loudly, \"Thanks for dragging me in for nothing last night. Try thinking next time.\"",
  options: [
    // keyed
    { text: "Stay calm, and suggest you discuss it after the ward round.",
      brief: "Keeps the ward round professional for the family's sake.",
      detailed: "Responding calmly avoids a scene in front of a worried family and shows you are willing to discuss it. It also stops the conversation turning into an argument at the bedside." },
    { text: "Speak to Dr Hale privately later about how the comment came across.",
      brief: "A private conversation gives him a chance to reflect and clarify expectations.",
      detailed: "Explaining that you followed the escalation policy, and how the comment felt in front of the family, is fair and constructive. It may also clarify when he wants to be called." },
    { text: "Discuss what happened with your clinical or educational supervisor.",
      brief: "They can support you and advise on next steps if it continues.",
      detailed: "Being criticised publicly for following policy can be undermining. Your supervisor can support you and help you decide whether it needs raising further." },
    // distractors
    { text: "Tell Dr Hale at the bedside that you followed the escalation policy.",
      brief: "Accurate, but defending yourself in front of the family may escalate things.",
      detailed: "You were right to call, but arguing the point at the bedside could unsettle the family and turn the round into a confrontation." },
    { text: "Apologise to the family for Dr Hale's comment after the round.",
      brief: "Undermines a colleague in front of patients' relatives.",
      detailed: "The family may have been unsettled, but apologising for a colleague's behaviour can damage their trust in the team caring for their relative." },
    { text: "Avoid calling Dr Hale at night in future unless it's an emergency.",
      brief: "Unsafe: deterioration should be escalated as the policy requires.",
      detailed: "Being criticised shouldn't stop you escalating appropriately. Delaying calls to avoid conflict puts patients at risk." },
    { text: "Report Dr Hale to the General Medical Council for unprofessional behaviour.",
      brief: "Disproportionate for a single comment.",
      detailed: "The comment was inappropriate, but a single incident like this should be addressed locally first." },
    { text: "Write a formal complaint to the medical director the same day.",
      brief: "Premature without first speaking to him or your supervisor.",
      detailed: "Formal routes are available if the behaviour continues. Going straight to the medical director skips simpler, more effective steps." }
  ],
  explanation: {
    issue: "This tests how you respond to being undermined by a senior in front of a family, while protecting patient care and your own professionalism.",
    keyDetails: "You followed the escalation policy. The criticism was public, in front of relatives. It is a single incident so far.",
    reasoning: "{k1} keeps the round professional, {k2} addresses it directly in private, and {k3} gets support. The distractors confront at the bedside ({d1}), undermine the team ({d2}), compromise safety ({d3}), or escalate disproportionately ({d4}, {d5}).",
    competing: "{d1} is the most tempting, because you were right. The issue is where and when you say it."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, treating colleagues fairly and with respect." },
    { ref: "leadership", note: "Contributing to a culture where staff feel able to speak up." }
  ],
  tags: ["undermining", "escalation", "intensive care", "hierarchy"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-279", pool, letters: "BACD", format: "ranking", difficulty: "hard",
  title: "Who is operating?", setting: "Orthopaedics", attribute: P,
  topic: "Honesty with patients and colleagues",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Honesty", "Consent", "Communication"],
  stem:
    "You are an F2 doctor in orthopaedics. Mr Dunn, 58, is having a knee replacement this afternoon. The theatre plan shows that the registrar will do the operation under the consultant's supervision, and a medical student will close the skin with the registrar.\n\n" +
    "As you check his paperwork, Mr Dunn says, \"Mr Ross is doing my operation himself, isn't he? He promised.\"",
  options: [
    { text: "Explain honestly who is likely to do each part, and that he can object.",
      brief: "He is entitled to accurate information about who will operate.",
      detailed: "Who performs an operation can matter to patients and can be part of what they consent to. Explaining honestly what is planned, and that he can raise concerns or decline student involvement, respects his autonomy. It ranks first because he has asked you a direct question." },
    { text: "Ask Mr Ross to speak to him about who will operate before he goes to theatre.",
      brief: "The consultant made the promise and should address it.",
      detailed: "If Mr Ross promised to operate himself, he should explain any change and agree a plan with Mr Dunn. It ranks second because Mr Dunn asked you directly, and you know the answer now." },
    { text: "Tell him that Mr Ross leads the team and is responsible for his operation.",
      brief: "True, but evasive about the question he actually asked.",
      detailed: "This is accurate, but it avoids his question and may leave him believing the consultant will operate. It is less honest than the options above." },
    { text: "Reassure him that Mr Ross will be doing the operation.",
      brief: "Untrue and undermines his consent.",
      detailed: "This is a false statement about who will operate, which could invalidate his consent. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you answer a patient's direct question honestly when the truth may be awkward for the team.",
    keyDetails: "He believes the consultant will operate. The plan is different. A student will be involved. He asked you directly.",
    reasoning: "{1} answers honestly and respects his choice, and {2} involves the consultant who made the promise. {3} is evasive, and {4} is untrue.",
    competing: "Some would put asking Mr Ross first, as the change is his to explain. The key ranks your honest answer first because Mr Dunn asked you directly and is entitled to the truth now. Mr Ross should still speak to him."
  },
  refs: [
    { ref: "consent", note: "Information patients need, including who will carry out a procedure." },
    { ref: "gmp", note: "Domain 4, being honest with patients." }
  ],
  tags: ["honesty", "consent", "surgery", "students"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-280", pool, letters: "ACF", format: "multiple_choice", difficulty: "moderate",
  title: "\"Mrs\" again", setting: "Obstetrics & gynaecology", attribute: P,
  topic: "Equality and fair treatment of patients",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Respect", "Equality", "Addressing poor practice"],
  stem:
    "You are an F2 doctor in a gynaecology clinic. Mr Evans, 34, is a trans man attending about pelvic pain. His GP letter states his name and title clearly.\n\n" +
    "In the waiting room, a receptionist calls him \"Mrs Evans\", and a nurse uses the same title as she brings him into your room. He tells you quietly that this happens every time he comes, and that he nearly didn't come today.",
  options: [
    // keyed
    { text: "Apologise to Mr Evans and use his correct name and title.",
      brief: "Acknowledges what happened and shows respect.",
      detailed: "A sincere apology recognises how distressing repeated misgendering can be, and using his correct name and title shows respect. It may help him feel able to keep attending." },
    { text: "Check his clinic record shows his correct name and title.",
      brief: "An incorrect record may be causing the repeated errors.",
      detailed: "Staff often read titles from the record. If it is wrong, correcting it, or asking the right team to, stops the problem at its source." },
    { text: "Ask the clinic manager to make sure staff use his title.",
      brief: "Prevents the same thing happening next time.",
      detailed: "This has happened at every visit, so it needs addressing beyond today. Raising it constructively with the clinic manager helps make sure staff understand and change their practice." },
    // distractors
    { text: "Explain that the gynaecology system defaults to female titles.",
      brief: "Explains the error, but treats it as acceptable.",
      detailed: "Even if the system is a factor, the explanation sounds like an excuse and doesn't fix the problem." },
    { text: "Tell him that the staff didn't mean to cause offence.",
      brief: "Minimises his experience.",
      detailed: "It may be true that no one intended offence, but saying so dismisses the impact, which is what matters to him." },
    { text: "Suggest he asks reception to update his details himself.",
      brief: "Puts the burden on him after a distressing experience.",
      detailed: "He has already been let down. It's the service's job to make sure records and practice are right." },
    { text: "Correct the nurse in front of Mr Evans as soon as she says it.",
      brief: "Well meant, but may embarrass everyone, including him.",
      detailed: "Public correction can draw more attention to him at a sensitive moment. A private word is usually more effective." },
    { text: "Refer him to a different clinic where staff may be more aware.",
      brief: "Moves him away from the right clinic instead of fixing the problem.",
      detailed: "He needs this clinic for his symptoms. Changing where he is seen avoids the problem rather than solving it." }
  ],
  explanation: {
    issue: "This tests whether you respond respectfully to a patient who has been repeatedly misgendered, and address the cause.",
    keyDetails: "It happens every visit. His details are clear in the letter. He nearly didn't attend, which puts his care at risk.",
    reasoning: "{k1} apologises and shows respect, {k2} fixes the record, and {k3} addresses staff practice. The distractors excuse ({d1}, {d2}), shift the burden ({d3}), embarrass ({d4}), or avoid the problem ({d5}).",
    competing: "{d4} feels decisive, but correcting a colleague in front of the patient can make the moment harder for him. A private word with the clinic manager is more effective."
  },
  refs: [
    { ref: "equality", note: "Gender reassignment as a protected characteristic in the provision of services." },
    { ref: "gmp", note: "Domain 2, treating patients with dignity and without discrimination." }
  ],
  tags: ["equality", "trans patients", "dignity", "gynaecology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-281", pool, letters: "EACBD", format: "ranking", difficulty: "moderate",
  title: "The arterial line", setting: "Intensive care", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Trust and professionalism", "Safety and quality"],
  competencies: ["Candour", "Incident reporting", "Owning mistakes"],
  stem:
    "You are an F2 doctor in intensive care. While helping to reposition Mrs Shah, 64, who is awake after major surgery, you accidentally pulled apart the connection on her arterial line. There was a brief bleed onto the sheets before you and the nurse reconnected it.\n\n" +
    "The bleeding stopped quickly, the line is working, and her observations are unchanged. Mrs Shah saw the blood and asks what happened.",
  options: [
    { text: "Explain to Mrs Shah what happened, and apologise.",
      brief: "She saw it happen and is entitled to an honest explanation.",
      detailed: "She has asked directly, and being open when something goes wrong is a professional duty even when no lasting harm is done. A simple explanation and apology also reassures her. It ranks first because she is worried now." },
    { text: "Tell the ICU registrar what happened.",
      brief: "A senior should know, so they can decide whether anything else is needed.",
      detailed: "The registrar can decide whether she needs a blood test or any other review, and it is part of being open with the team. It ranks second because Mrs Shah's question comes first." },
    { text: "Report it through the incident reporting system.",
      brief: "Supports learning about how lines are protected during repositioning.",
      detailed: "Accidental disconnections are a known risk, and reporting helps the unit look at how lines are secured. It is important but less immediate than speaking to Mrs Shah and the registrar." },
    { text: "Write in the notes that the line was reconnected, without describing how.",
      brief: "Incomplete and potentially misleading.",
      detailed: "The record should be accurate. Leaving out how the disconnection happened gives a misleading picture to anyone reading the notes later." },
    { text: "Tell Mrs Shah the line came loose by itself.",
      brief: "Untrue, and undermines her trust.",
      detailed: "This is a lie to cover a mistake. Even when no harm results, being dishonest with a patient is a serious breach of professional duty. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you are open about a minor error you made, even when it caused no lasting harm.",
    keyDetails: "It was your mistake. She saw it and is asking. There was no lasting harm. The line is working.",
    reasoning: "{1} is honest with her, {2} informs a senior, and {3} supports learning. {4} leaves an incomplete record, and {5} is dishonest.",
    competing: "{2} and {3} are close. The key puts telling the registrar first because a senior may want to check her, while reporting can follow later in the shift."
  },
  refs: [
    { ref: "candour", note: "Being open with patients about mistakes, including those that cause no lasting harm." },
    { ref: "psirf", note: "Reporting incidents to support learning." }
  ],
  tags: ["candour", "errors", "intensive care", "lines"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-282", pool, letters: "BGH", format: "multiple_choice", difficulty: "easy",
  title: "Two calls at once", setting: "Psychiatry", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Prioritisation", "Physical health in mental illness", "Teamwork"],
  stem:
    "You are an F2 doctor on call for an inpatient psychiatric unit. You are reviewing Ms Webb, 31, who takes clozapine and has developed a temperature of 38.6°C and a sore throat. You have taken blood, including an urgent white cell count, and are about to examine her.\n\n" +
    "A nurse tells you that Mr Lee, 45, who is detained under the Mental Health Act, is standing at the ward door demanding to leave. The ward has a procedure for managing detained patients who try to leave.",
  options: [
    // keyed
    { text: "Finish your assessment of Ms Webb.",
      brief: "Fever on clozapine can mean a dangerously low white cell count.",
      detailed: "Clozapine can cause agranulocytosis, and fever with a sore throat is a warning sign. Ms Webb needs a full assessment and a plan now, so you shouldn't leave her part-way." },
    { text: "Ask the nurse in charge to use the ward procedure for Mr Lee.",
      brief: "Nurses are trained to manage this, and he is detained, so he can't simply leave.",
      detailed: "The ward staff can manage this situation under the ward's procedure while you finish your urgent review. As he is detained, he can't lawfully leave, and the team can keep him safe." },
    { text: "See Mr Lee as soon as you have finished with Ms Webb.",
      brief: "He still needs a doctor's assessment once the urgent review is done.",
      detailed: "His distress and wish to leave may need a medical review, and possibly a medication review. Seeing him promptly afterwards makes sure he isn't overlooked." },
    // distractors
    { text: "Leave Ms Webb and go to talk Mr Lee out of leaving.",
      brief: "Leaves a possibly very unwell patient part-way through assessment.",
      detailed: "Mr Lee's situation can be managed by the nursing team for now. Ms Webb may be developing a life-threatening complication." },
    { text: "Tell the nurse to let Mr Lee leave if he insists.",
      brief: "He is detained, so letting him go could put him at risk and would be unlawful.",
      detailed: "A detained patient can't simply be allowed to leave. The ward procedure exists for exactly this situation." },
    { text: "Prescribe rapid tranquillisation for Mr Lee over the phone.",
      brief: "Medicating without seeing him isn't appropriate.",
      detailed: "Rapid tranquillisation is for patients at serious risk of harm, after other measures have failed, and requires assessment. Prescribing it remotely to stop him leaving is inappropriate." },
    { text: "Phone the police to come to the ward.",
      brief: "Premature, as the staff can manage the situation.",
      detailed: "Police may be needed if a detained patient goes missing or there is serious violence. At this stage the ward team can manage it." },
    { text: "Ask the nurse to call the medical registrar to take over Ms Webb.",
      brief: "Unnecessary handover of an assessment you are part-way through.",
      detailed: "You may need advice about her results, but handing over mid-assessment, in order to see a patient the nurses can manage, isn't a good use of the team." }
  ],
  explanation: {
    issue: "This tests how you prioritise between a possible medical emergency and a mental health situation that the nursing team can manage.",
    keyDetails: "Fever on clozapine is a red flag. Mr Lee is detained, and the ward has a procedure. Nurses are with him.",
    reasoning: "{k1} completes the urgent medical review, {k2} uses the team and its procedure for Mr Lee, and {k3} makes sure he is seen soon after. The distractors abandon Ms Webb ({d1}), act unlawfully ({d2}), medicate inappropriately ({d3}), escalate prematurely ({d4}), or hand over unnecessarily ({d5}).",
    competing: "{d5} might seem efficient, but you are already part-way through and best placed to complete the assessment."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, prioritising care according to clinical need." }
  ],
  tags: ["prioritisation", "clozapine", "psychiatry", "detained patients"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-283", pool, letters: "CEDBA", format: "ranking", difficulty: "moderate",
  title: "Like this forever?", setting: "Psychiatry", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communicating uncertainty", "Hope", "Honesty"],
  stem:
    "You are an F2 doctor on an inpatient psychiatric unit. Mr Ito, 22, was admitted three weeks ago with his first episode of psychosis. He is responding to treatment, and his voices are much quieter.\n\n" +
    "During a review, he asks you, \"Am I going to be like this forever? Will I ever be able to go back to university?\"",
  options: [
    { text: "Ask what worries him most about the future.",
      brief: "Understanding his worries helps you answer what matters to him.",
      detailed: "His question may be about university, relationships, stigma or relapse. Exploring it first lets you respond to his real concern and shows you are listening. It ranks first." },
    { text: "Explain honestly that many people recover well after a first episode, though no one can be certain for him.",
      brief: "Honest hope, without false certainty.",
      detailed: "Many people recover well from a first episode, especially with early treatment and support, although it can't be predicted for any individual. This is accurate and hopeful. It ranks second because it works best after understanding his concerns." },
    { text: "Offer to arrange a meeting with his care coordinator to talk about university.",
      brief: "Practical support with his goals.",
      detailed: "A care coordinator, often from an early intervention team, can help plan a return to study. It is helpful but ranks third because he needs a response from you now." },
    { text: "Reassure him that he will definitely recover completely.",
      brief: "Well meant, but no one can promise this.",
      detailed: "Certainty you can't justify may leave him feeling let down if he has setbacks. Honest hope is better than false certainty." },
    { text: "Tell him it is likely to be a lifelong condition, so he should adjust his plans.",
      brief: "Premature and discouraging.",
      detailed: "This isn't known after a first episode and may take away hope and motivation for recovery. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you answer a frightening question about the future honestly, while supporting hope.",
    keyDetails: "It is a first episode. He is responding to treatment. The outcome is uncertain. He has specific goals.",
    reasoning: "{1} explores his concern, {2} gives honest hope, and {3} supports his plans. {4} promises too much, and {5} takes away hope prematurely.",
    competing: "The order of {4} and {5} is debatable. The key ranks premature pessimism last because it could harm his recovery."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, honest and sensitive communication about prognosis." }
  ],
  tags: ["psychosis", "prognosis", "hope", "psychiatry"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-284", pool, letters: "ADH", format: "multiple_choice", difficulty: "hard",
  title: "Waiting for the consultant", setting: "Orthopaedics", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Raising concerns", "Patient safety", "Working with seniors"],
  stem:
    "You are an F2 doctor in orthopaedics. The daily trauma meeting is meant to start at 08:00, but Mr Nolan, one of the consultants, has arrived 30 to 45 minutes late on most of his days this month. Decisions about which patients go to theatre are made only once he arrives.\n\n" +
    "This week, two older patients with hip fractures were fasted all day and then had their operations postponed because the theatre list started too late.",
  options: [
    // keyed
    { text: "Tell Mr Nolan, respectfully, about the patients whose operations were postponed.",
      brief: "He may not know the impact on patients, and should have the chance to respond.",
      detailed: "He may not realise his lateness is affecting patients. Telling him calmly about the specific cases is fair and may be enough to change things. It is hard for a junior, but it focuses on patients, not on him." },
    { text: "Raise it with your clinical supervisor.",
      brief: "A senior can address a pattern that is affecting patient care.",
      detailed: "This is a recurring problem with consequences for patients. Your clinical supervisor can advise you and raise it at the right level." },
    { text: "Report the postponed operations through the incident reporting system.",
      brief: "Delays to hip fracture surgery are a recognised harm worth reviewing.",
      detailed: "Prolonged fasting and delays to hip fracture surgery are associated with worse outcomes. Reporting them allows the department to look at the cause, including how the meeting runs." },
    // distractors
    { text: "Accept it, as it's a consultant's decision when to arrive.",
      brief: "Ignores a pattern that is harming patients.",
      detailed: "The impact on patients makes this more than a matter of a consultant's routine." },
    { text: "Email the medical director about Mr Nolan's lateness.",
      brief: "Premature when local routes haven't been tried.",
      detailed: "Concerns can be escalated if local routes fail. Going straight to the medical director skips the consultant and your supervisor." },
    { text: "Start the meeting yourself and decide which patients go first.",
      brief: "Beyond your role and competence.",
      detailed: "Theatre decisions for trauma patients need senior judgement. Making them yourself could cause harm." },
    { text: "Tell the patients that their operations were delayed because the consultant was late.",
      brief: "Honest explanations matter, but blaming a colleague isn't helpful.",
      detailed: "Patients deserve to know why their operations were postponed, but attributing it to one person, without the full picture, damages trust in the team." },
    { text: "Ask the nurses to stop fasting patients until decisions are made.",
      brief: "Well meant, but it could delay surgery further.",
      detailed: "Fasting practice may well need reviewing, but changing it informally could mean patients aren't ready when a theatre slot appears." }
  ],
  explanation: {
    issue: "This tests whether you raise a senior's behaviour when it is harming patients, using proportionate routes.",
    keyDetails: "The lateness is a pattern. Patients have been harmed by prolonged fasting and postponed operations. Local routes haven't been tried.",
    reasoning: "{k1} raises it directly and respectfully, {k2} involves your supervisor, and {k3} records the harm so the system can be reviewed. The distractors ignore it ({d1}), escalate prematurely ({d2}), overstep your role ({d3}), blame a colleague to patients ({d4}), or change practice informally ({d5}).",
    competing: "{k1} is the hardest for a junior and some would skip it. The key includes it because a respectful, patient-focused conversation is often the quickest way to change things."
  },
  refs: [
    { ref: "concerns", note: "Raising concerns about patient safety, including about senior colleagues." },
    { ref: "psirf", note: "Reporting incidents so that systems can be reviewed." }
  ],
  tags: ["raising concerns", "hip fracture", "orthopaedics", "seniors"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-285", pool, letters: "BDEAC", format: "ranking", difficulty: "moderate",
  title: "Leaving tomorrow", setting: "Acute medical unit", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Handover", "Continuity of care", "Organisation"],
  stem:
    "You are an F2 doctor on the acute medical unit. Tomorrow you start a new rotation in a different hospital. Several of your patients are still waiting for results, including a CT scan for a possible malignancy and a set of blood cultures.\n\n" +
    "The F2 who will take over your patients starts tomorrow and doesn't know them.",
  options: [
    { text: "Write a handover of each pending result and what to do.",
      brief: "A written handover makes sure nothing is lost when you leave.",
      detailed: "Results that arrive after you have gone need a clear owner and a plan. A written list, with what each result means for the patient, gives the incoming F2 everything they need. It ranks first." },
    { text: "Tell your patients who will be looking after them from tomorrow.",
      brief: "Helps continuity and reassures patients.",
      detailed: "Patients may worry when a familiar doctor leaves. Letting them know who will take over helps them feel looked after. It ranks second because it doesn't, by itself, make sure results are acted on." },
    { text: "Chase the results that are due today before you leave.",
      brief: "Useful, but it won't capture results that come later.",
      detailed: "Acting on results that arrive today reduces the load on your successor, but the CT and cultures may come later. It ranks third." },
    { text: "Ask the ward clerk to email you the results next week.",
      brief: "Results should go to the doctor responsible, not to someone who has left.",
      detailed: "You won't be responsible for these patients, and you won't be able to act on the results from another hospital. This creates confusion about who owns them." },
    { text: "Leave the results for the team to find on the computer system.",
      brief: "Risks a significant result being missed.",
      detailed: "A new doctor who doesn't know the patients may not know to look. A possible malignancy could be missed. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you make sure pending results have a clear owner before you leave a job.",
    keyDetails: "Significant results are pending. Your successor doesn't know the patients. You are moving to another hospital.",
    reasoning: "{1} gives a clear, written handover, {2} supports the patients, and {3} deals with today's results. {4} sends results to the wrong person, and {5} risks a missed diagnosis.",
    competing: "Some would put chasing today's results second. The key ranks telling patients second because it supports their care regardless of when results arrive."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, handing over care safely when you change roles." }
  ],
  tags: ["handover", "results", "acute medicine", "continuity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-286", pool, letters: "CEG", format: "multiple_choice", difficulty: "moderate",
  title: "Would surgery help?", setting: "General surgery", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Honest communication", "Shared decision-making", "End-of-life care"],
  stem:
    "You are an F2 doctor in general surgery. Mr Bell, 71, has advanced bowel cancer that has spread to his liver, and he has been admitted with a bowel obstruction. The consultant hasn't seen him yet; the registrar has said surgery may not be appropriate.\n\n" +
    "Mr Bell asks you, \"Would an operation help? I want to know what my options are.\"",
  options: [
    // keyed
    { text: "Ask what he understands about his illness and what matters most to him.",
      brief: "His understanding and priorities will shape any decision.",
      detailed: "Knowing what he already knows, and what he values most, such as time at home or symptom control, helps you have an honest conversation and helps the team plan with him." },
    { text: "Explain that surgery may or may not be suitable, and is being considered.",
      brief: "Honest, without pre-empting the consultant.",
      detailed: "You don't yet know whether surgery is appropriate. Saying that honestly, and explaining that the team will discuss options with him, respects his question without giving false hope or premature bad news." },
    { text: "Arrange for the consultant to discuss his options with him today.",
      brief: "He needs a senior to discuss options and make a plan with him.",
      detailed: "Decisions about surgery in advanced cancer are complex and should be made with him by the consultant. Arranging this promptly respects his wish to know his options." },
    // distractors
    { text: "Tell him that surgery isn't an option because of his cancer.",
      brief: "Premature: the decision hasn't been made.",
      detailed: "The registrar's view is provisional, and the consultant hasn't seen him. Telling him surgery is off the table may be wrong." },
    { text: "Reassure him that an operation should sort the problem out.",
      brief: "False hope in an uncertain situation.",
      detailed: "Surgery may not be possible or helpful. Reassuring him could make later conversations much harder." },
    { text: "Say the consultant will answer his questions tomorrow.",
      brief: "Defers a question you can partly answer now.",
      detailed: "The consultant should lead, but avoiding his question entirely may leave him anxious overnight. You can give him an honest outline now." },
    { text: "Refer him to the palliative care team instead of discussing surgery with him.",
      brief: "Palliative care may help, but it isn't a substitute for answering his question.",
      detailed: "Palliative care involvement may well be valuable, but referring him in place of the conversation he asked for sidesteps his question." },
    { text: "Ask his family what he should be told about his options.",
      brief: "He has capacity and has asked for information himself.",
      detailed: "Families can be involved with his agreement, but he has asked directly and is entitled to information about his own care." }
  ],
  explanation: {
    issue: "This tests how you answer a patient's question about treatment honestly when the decision hasn't been made yet.",
    keyDetails: "The cancer is advanced. Surgery may not be appropriate, but no decision has been made. He wants to know his options.",
    reasoning: "{k1} learns his priorities, {k2} gives an honest answer without pre-empting the decision, and {k3} arranges the senior discussion he needs. The distractors pre-empt the decision ({d1}, {d2}), defer ({d3}), sidestep ({d4}), or bypass him ({d5}).",
    competing: "{d4} is tempting because palliative care is likely to be helpful. The problem is using it instead of answering his question, not involving the team."
  },
  refs: [
    { ref: "eol", note: "Discussing treatment options and patients' wishes towards the end of life." },
    { ref: "consent", note: "Sharing information about options, including uncertainty." }
  ],
  tags: ["end of life", "surgery", "cancer", "communication"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-287", pool, letters: "ABCED", format: "ranking", difficulty: "easy",
  title: "An unfamiliar regimen", setting: "Acute medical unit", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development", "Safety and quality"],
  competencies: ["Safe prescribing", "Recognising limits", "Seeking advice"],
  stem:
    "You are an F2 doctor on the acute medical unit. Mrs Owusu, 52, has type 1 diabetes and has been admitted with a foot infection. A senior nurse asks you to prescribe a variable-rate insulin regimen alongside her usual basal insulin, which you haven't prescribed before.\n\n" +
    "The nurse tells you the exact doses, saying, \"It's what the diabetes team always do. Just write it up.\"",
  options: [
    { text: "Ask the diabetes team for advice before prescribing.",
      brief: "The specialist team can confirm the regimen is right for her.",
      detailed: "You are responsible for anything you prescribe. Asking the diabetes team makes sure the regimen is right for this patient and helps you learn. It ranks first." },
    { text: "Check the trust's insulin guideline before prescribing.",
      brief: "A guideline gives a reliable basis for the prescription.",
      detailed: "Most trusts have guidance on variable-rate insulin. Checking it is a good way to make sure the prescription is safe, though it may not cover her particular situation as well as the specialist team can." },
    { text: "Ask your registrar to check the prescription with you.",
      brief: "A senior check adds safety, though they may not be expert in insulin.",
      detailed: "Your registrar can check your reasoning and doses. It ranks third because the diabetes team or the guideline are more reliable sources for an insulin regimen." },
    { text: "Prescribe it, and ask the ward pharmacist to check it later today.",
      brief: "A later check adds some safety, but insulin may be given first.",
      detailed: "A pharmacist's check is a real safeguard and may catch an error. But insulin could be given before the check happens, and you would still be prescribing something you don't understand. It ranks fourth." },
    { text: "Prescribe it as the nurse suggests, since she knows the regimen well.",
      brief: "Prescribing something you don't understand, on someone else's word, is unsafe.",
      detailed: "The nurse may be right, but insulin errors can be fatal, and you are responsible for the prescription. Prescribing it without checking is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you prescribe only what you understand, seeking advice rather than relying on someone else's assurance.",
    keyDetails: "It's an unfamiliar, high-risk drug regimen. The nurse is experienced but not the prescriber. Specialist advice is available.",
    reasoning: "{1} gets specialist advice, {2} uses the trust's guidance, and {3} adds a senior check. {4} relies on a check that may come too late, and {5} prescribes without any check.",
    competing: "{2} and {3} are close. The key prefers the trust's guideline to a registrar's check because the guideline is written for exactly this regimen."
  },
  refs: [
    { ref: "prescribing", note: "Prescribing only when you have adequate knowledge of the patient and the medicine." }
  ],
  tags: ["insulin", "prescribing", "competence", "acute medicine"]
}
];
