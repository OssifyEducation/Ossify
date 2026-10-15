// Mock 3, part 2 (sjt-313 to sjt-325). Pool mock-3: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-3";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-313", pool, letters: "ADECB", format: "ranking", difficulty: "moderate",
  title: "Who took consent?", setting: "Orthopaedics", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honest record-keeping", "Consent", "Working with seniors"],
  stem:
    "You are an F2 doctor in orthopaedics. Yesterday, with your consultant's agreement, you took consent from Mr Byrne for a carpal tunnel release, a procedure you are trained to consent for.\n\n" +
    "Today your consultant asks you to write in the notes that he took the consent himself, because \"the audit only counts consent by the operating surgeon\".",
  options: [
    { text: "Explain that you can only record who actually took consent.",
      brief: "Records must be accurate, whatever the audit measures.",
      detailed: "Writing that he took consent would be a false entry. Explaining this politely, and that the notes already show what happened, keeps the record honest. You might also point out that the audit can reflect the true picture. It ranks first." },
    { text: "Suggest your consultant confirms consent with Mr Byrne himself before surgery.",
      brief: "A genuine solution that also meets the audit's aim.",
      detailed: "If the operating surgeon confirms consent on the day, that can be documented truthfully, and it is good practice anyway. It ranks second because it is helpful but doesn't, on its own, answer the request to change the record." },
    { text: "Ask your educational supervisor for advice about the request.",
      brief: "Support in handling a difficult request from a senior.",
      detailed: "Being asked to make a false entry by a senior is difficult. Your supervisor can advise you. It ranks third because you can and should decline the request yourself first." },
    { text: "Write that consent was taken 'by the surgical team', to avoid conflict.",
      brief: "Vague wording that obscures who did what.",
      detailed: "This isn't strictly false, but it is deliberately unclear, and it seems designed to mislead the audit. It ranks fourth." },
    { text: "Record that the consultant took consent, as he has asked.",
      brief: "Falsifying a record.",
      detailed: "This is a false entry in a clinical record, which is a serious probity issue, whoever asked for it. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you keep clinical records honest when a senior asks you to falsify them.",
    keyDetails: "You took consent appropriately. The consultant wants the record changed for an audit. The patient hasn't yet had surgery.",
    reasoning: "{1} declines and explains, {2} offers an honest solution, and {3} seeks support. {4} is evasive, and {5} is false.",
    competing: "{2} could be seen as the most constructive answer. The key puts declining first because the request itself needs a clear answer."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, making sure records are honest and accurate." },
    { ref: "consent", note: "Delegating and recording consent." }
  ],
  tags: ["records", "consent", "probity", "seniors"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-314", pool, letters: "BCG", format: "multiple_choice", difficulty: "hard",
  title: "\"He hurts me\"", setting: "Paediatrics", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Child safeguarding", "Escalation", "Challenging seniors"],
  stem:
    "You are an F2 doctor in paediatrics. Amy, 6, has been admitted with a chest infection. Her mother tells you privately that Amy has become withdrawn since her new partner moved in, and that last week Amy said, \"He hurts me when Mummy's at work.\"\n\n" +
    "You tell the registrar, who says, \"It sounds like a custody dispute. It's not our business,\" and suggests you move on.",
  options: [
    // keyed
    { text: "Tell the registrar Amy's exact words, and that it needs advice.",
      brief: "The details matter, and the registrar may not have heard them clearly.",
      detailed: "A direct disclosure by a child of being hurt is a safeguarding concern. Repeating the exact words, and saying clearly that you think advice is needed, gives the registrar the chance to reconsider." },
    { text: "Discuss it with the consultant or the named safeguarding doctor.",
      brief: "A senior with safeguarding responsibility needs to know.",
      detailed: "If the registrar still disagrees, the concern shouldn't be dropped. The consultant or named doctor can advise on a referral to children's social care." },
    { text: "Record the mother's account in the notes, using her words.",
      brief: "An accurate record is essential for any safeguarding process.",
      detailed: "Writing down exactly what was said, and by whom, supports any later assessment and protects Amy." },
    // distractors
    { text: "Accept the registrar's view, as he is more experienced.",
      brief: "Leaves a child's disclosure without action.",
      detailed: "Seniority doesn't remove your own duty to act when a child may be at risk." },
    { text: "Phone the police to report the partner.",
      brief: "May be needed later, but should be coordinated.",
      detailed: "If Amy were in immediate danger, police involvement would be right. Here she is safe on the ward, and the safeguarding route can involve the police appropriately." },
    { text: "Ask Amy directly whether her mother's partner has been hurting her.",
      brief: "Leading questions can harm a child and any investigation.",
      detailed: "If a child talks to you, listen. But directly questioning her about a specific person can distress her and affect any later investigation." },
    { text: "Speak to the partner when he next visits.",
      brief: "Could increase the risk to Amy and her mother.",
      detailed: "Confronting the alleged perpetrator could put Amy and her mother at greater risk and isn't your role." },
    { text: "Wait to see whether Amy says anything about it to you herself.",
      brief: "Delays action on a disclosure already made.",
      detailed: "Amy has already made a disclosure to her mother. Waiting for her to repeat it leaves her unprotected." }
  ],
  explanation: {
    issue: "This tests whether you pursue a child-safeguarding concern when a senior dismisses it, using the right routes.",
    keyDetails: "Amy has disclosed being hurt. The registrar has dismissed it. Senior safeguarding advice is available. Amy is safe on the ward for now.",
    reasoning: "{k1} gives the registrar the facts again, {k2} escalates to the right person, and {k3} records the disclosure. The distractors drop the concern ({d1}, {d5}), act outside the safeguarding route ({d2}, {d4}), or question the child inappropriately ({d3}).",
    competing: "{d2} is understandable given what Amy said. While she is safe on the ward, the safeguarding team can coordinate police involvement in a way that protects her."
  },
  refs: [
    { ref: "children", note: "Acting on concerns about children, including when colleagues disagree." },
    { ref: "workingtogether", note: "Responding to a child's disclosure and referring to children's social care." }
  ],
  tags: ["safeguarding", "disclosure", "paediatrics", "challenging seniors"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-315", pool, letters: "DACBE", format: "ranking", difficulty: "moderate",
  title: "Another fall?", setting: "General medical ward", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Safety and quality", "Patients, partnership and communication"],
  competencies: ["Adult safeguarding", "Learning disability", "Communication"],
  stem:
    "You are an F2 doctor on a general medical ward. Ms Walsh, 34, has a learning disability and lives in a supported living placement. This is her third admission in four months with injuries. This time she has a fractured wrist and bruising on her upper arms. Staff at the placement say she falls often.\n\n" +
    "She communicates in short phrases and seems anxious when staff from the placement visit. She is due to go back there tomorrow.",
  options: [
    { text: "Raise a safeguarding concern with the hospital safeguarding team today.",
      brief: "Repeated injuries in a vulnerable adult need a safeguarding response before she goes back.",
      detailed: "Repeated injuries, a pattern of bruising that isn't typical of falls, and her anxiety around staff together raise concern about abuse. With discharge planned for tomorrow, the safeguarding team needs to be involved today. It ranks first." },
    { text: "Ask the learning disability liaison nurse to help you talk with her about her injuries.",
      brief: "Her own account matters, and she needs the right support to give it.",
      detailed: "She may be able to tell you what happened if communication is adapted to her needs. The liaison nurse can help. It ranks second because the safeguarding team needs to be involved regardless of what she is able to say." },
    { text: "Document her injuries carefully, including a body map.",
      brief: "A clear record supports any enquiry.",
      detailed: "Careful documentation of the type, size and location of injuries is important evidence. It ranks third because it supports, rather than drives, the response." },
    { text: "Phone the placement manager to ask how her injuries happened.",
      brief: "May alert people who could be responsible.",
      detailed: "Asking for information seems reasonable, but if staff are harming her, it could alert them and put her at greater risk. The safeguarding team should decide how to approach the placement." },
    { text: "Discharge her back to the placement as planned, as staff say she falls.",
      brief: "Returns her to possible harm without assessment.",
      detailed: "Accepting the explanation without question could send her back into an abusive situation. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you recognise possible abuse of a vulnerable adult and respond through safeguarding, while helping her to be heard.",
    keyDetails: "She has had repeated injuries, with bruising that isn't typical of falls. She is anxious around placement staff. Discharge is tomorrow.",
    reasoning: "{1} starts the safeguarding response, {2} supports her to give her account, and {3} records the evidence. {4} could alert those responsible, and {5} returns her to possible harm.",
    competing: "Some would talk to Ms Walsh first. The key puts the safeguarding team first because discharge is tomorrow and the concern needs a response whatever she is able to say."
  },
  refs: [
    { ref: "careact42", note: "Safeguarding enquiries for adults at risk of abuse." },
    { ref: "gmp", note: "Domain 3, protecting vulnerable people from harm." }
  ],
  tags: ["safeguarding", "learning disability", "abuse", "general medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-316", pool, letters: "CEF", format: "multiple_choice", difficulty: "moderate",
  title: "Leaked questions", setting: "Non-clinical (teaching, audit, social)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honesty", "Exam integrity", "Professionalism"],
  stem:
    "You are an F2 doctor revising for a postgraduate exam that you sit next month. In your year group's chat, a colleague posts a document that he says contains questions remembered by candidates from last week's sitting.\n\n" +
    "Candidates for this exam agree not to share its content. Several colleagues reply with thanks.",
  options: [
    // keyed
    { text: "Don't open or use the document.",
      brief: "Using leaked exam content would be dishonest.",
      detailed: "Candidates agree not to share exam content. Using it to prepare would give you an unfair advantage and break the conditions of the exam." },
    { text: "Message him privately, asking him to delete it.",
      brief: "A direct, private word gives him the chance to put it right.",
      detailed: "He may not have thought about the consequences. A private message explaining that sharing exam content breaches the exam's rules, and asking him to remove it, is fair and may stop it spreading." },
    { text: "Ask your educational supervisor whether to report it.",
      brief: "Helps you decide whether it needs to go further.",
      detailed: "Sharing exam content may need reporting to the exam body. Your supervisor can help you judge this, particularly if the document isn't removed." },
    // distractors
    { text: "Download it but only use it to check your general knowledge.",
      brief: "Still using content you shouldn't have.",
      detailed: "However you use it, you would be benefiting from material shared in breach of the exam's rules." },
    { text: "Forward it to friends sitting the exam at another trust.",
      brief: "Spreads the breach further.",
      detailed: "This makes the problem worse and involves you directly in sharing it." },
    { text: "Reply in the group chat condemning the post.",
      brief: "Publicly shaming him isn't the most effective approach.",
      detailed: "Your concern is valid, but a public rebuke may cause conflict without getting the document removed. A private word is better first." },
    { text: "Report it to the royal college that runs the exam, naming your colleague.",
      brief: "The exam body may need to know, but reporting him by name first skips simpler steps.",
      detailed: "Breaches of exam rules can be reported to the body that runs the exam, and that may become appropriate. Doing it first, naming him, without speaking to him or taking advice, is heavy-handed when he may simply delete it." },
    { text: "Leave the group chat so you aren't involved.",
      brief: "Protects you, but does nothing about the problem.",
      detailed: "Leaving avoids the issue rather than dealing with it, and others may still use the material." }
  ],
  explanation: {
    issue: "This tests honesty in assessment and how you respond when colleagues share material they shouldn't.",
    keyDetails: "The document contains questions remembered from the exam. Candidates agree not to share them. Others are already using it.",
    reasoning: "{k1} keeps your own preparation honest, {k2} addresses it with your colleague, and {k3} gets advice on reporting it. The distractors use it ({d1}), spread it ({d2}), shame him publicly ({d3}), escalate disproportionately ({d4}), or avoid it ({d5}).",
    competing: "{d3} is tempting because it is quick and principled. A private message is more likely to get the document removed without conflict."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in examinations and assessments." }
  ],
  tags: ["exams", "probity", "group chat", "honesty"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-317", pool, letters: "BCAED", format: "ranking", difficulty: "easy",
  title: "Cover again?", setting: "Cardiology / respiratory", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Trust and professionalism", "Collaboration, teamwork and leadership"],
  competencies: ["Assertiveness", "Wellbeing", "Rota management"],
  stem:
    "You are an F2 doctor on a cardiology and respiratory rotation. Over the past two months you have covered four on-call shifts for your colleague Dr Ross so that she can do paid sessions at a private clinic.\n\n" +
    "You are tired and your own work is suffering. She asks you to cover another weekend on-call next month.",
  options: [
    { text: "Tell her kindly that you can't keep covering her shifts.",
      brief: "Protects your wellbeing and is honest with her.",
      detailed: "You are tired and your work is suffering. Explaining this honestly lets her make other arrangements. It ranks first." },
    { text: "Suggest she talks to the rota coordinator about her commitments.",
      brief: "Points her to the proper route for planning her work.",
      detailed: "If she has regular outside commitments, the rota coordinator can help her plan around them properly. It ranks second because it is helpful but doesn't, on its own, answer her request." },
    { text: "Agree to this one shift, and tell her it will be the last.",
      brief: "A compromise, but it adds to your fatigue.",
      detailed: "This is kind, and setting a limit helps. But you are already tired, so taking on more work isn't ideal. It ranks third." },
    { text: "Agree to cover again, to avoid any awkwardness.",
      brief: "Continues a pattern that is harming your work.",
      detailed: "Avoiding conflict this way keeps adding to your fatigue and may affect your patients." },
    { text: "Agree to cover, then call in sick that weekend.",
      brief: "Dishonest, and leaves the rota with a gap at short notice.",
      detailed: "This avoids an awkward conversation but leaves the ward without a doctor at short notice. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you can set boundaries with a colleague to protect your wellbeing and your patients.",
    keyDetails: "You have covered repeatedly. You are tired and your work is suffering. The request is for her private work.",
    reasoning: "{1} sets a clear boundary, {2} points her to the proper route, and {3} is a reasonable compromise. {4} continues the pattern, and {5} is dishonest and leaves a gap.",
    competing: "{3} might be fine for someone who wasn't tired. Here, your fatigue is the reason to decline."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, looking after your own health so patients are not put at risk." }
  ],
  tags: ["rota", "boundaries", "wellbeing", "colleagues"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-318", pool, letters: "ABG", format: "multiple_choice", difficulty: "moderate",
  title: "Losing his bed", setting: "Out-of-hours / community", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Capacity", "Health inequalities", "Shared decision-making"],
  stem:
    "You are an F2 doctor working for the GP out-of-hours service, seeing patients at a homeless hostel. Mr Dean, 48, has a productive cough and a fever. His breathing rate is 32 a minute and his oxygen saturation is 90% on air. You think he has pneumonia and should be admitted.\n\n" +
    "He refuses to go to hospital, because the hostel gives away beds after one night's absence and he would be back on the street. He understands the risks you explain.",
  options: [
    // keyed
    { text: "Ask, with his permission, whether the hostel can hold his bed.",
      brief: "Removing the barrier may change his decision.",
      detailed: "His refusal is about a practical problem, not the treatment. Hostel staff may be able to keep his bed if they know he is in hospital. Asking, with his consent, may solve it." },
    { text: "Explore his concerns and explain the risks of staying.",
      brief: "He needs accurate information to make his decision.",
      detailed: "Understanding exactly what worries him, and making sure he knows how serious pneumonia can be, helps him make an informed choice." },
    { text: "Agree treatment and a safety-net plan, should he still decline.",
      brief: "A capacitous refusal still deserves the best care possible.",
      detailed: "If he still declines admission, starting antibiotics, arranging a review and explaining when to seek urgent help gives him the safest alternative." },
    // distractors
    { text: "Arrange admission against his wishes, as he is clearly very unwell.",
      brief: "He has capacity, so he can refuse.",
      detailed: "Being unwell doesn't remove capacity. Admitting him against his will would be unlawful." },
    { text: "Tell him he could die if he doesn't go to hospital tonight.",
      brief: "The risks should be explained, but not as a threat.",
      detailed: "He needs to understand the risks, but presenting them as a threat may feel coercive and damage trust." },
    { text: "Leave a prescription for antibiotics and leave.",
      brief: "Treatment without exploring his concerns or arranging follow-up.",
      detailed: "Antibiotics may be part of the plan, but leaving without understanding his concerns, or arranging a review, isn't enough." },
    { text: "Refer him to mental health services because of his refusal.",
      brief: "A refusal for a practical reason isn't a mental health problem.",
      detailed: "There is nothing to suggest he lacks capacity or has a mental health problem. His reason is practical and understandable." },
    { text: "Ask the hostel staff to persuade him to go.",
      brief: "Pressures him instead of solving the problem.",
      detailed: "Hostel staff may be able to help, but the aim should be to hold his bed, not to pressure him." }
  ],
  explanation: {
    issue: "This tests how you respond when a patient with capacity refuses admission for a practical, social reason.",
    keyDetails: "He has capacity. His reason is the loss of his bed. He is seriously unwell. The barrier may be solvable.",
    reasoning: "{k1} tries to remove the barrier, {k2} makes sure his decision is informed, and {k3} keeps him as safe as possible if he still declines. The distractors override him ({d1}), threaten ({d2}), treat without engaging ({d3}), question his capacity without reason ({d4}), or pressure him ({d5}).",
    competing: "{d5} could work if the hostel staff hold his bed, which is what {k1} asks them to do."
  },
  refs: [
    { ref: "mca1", note: "Assuming capacity, and respecting decisions others may consider unwise." },
    { ref: "consent", note: "Exploring the reasons for a refusal." }
  ],
  tags: ["capacity", "homelessness", "pneumonia", "out-of-hours"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-319", pool, letters: "ACBD", format: "ranking", difficulty: "hard",
  title: "The son wants the notes", setting: "Elderly care ward", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Confidentiality", "Best interests", "Communicating with relatives"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mr Kemp, 86, has advanced dementia and lacks capacity to make decisions about his care. He has no lasting power of attorney.\n\n" +
    "His son, who visits often, is unhappy with how his father fell last week. He demands to read his father's full medical notes on the ward computer \"right now\".",
  options: [
    { text: "Offer to arrange a meeting with a senior to discuss his father's care and the fall.",
      brief: "Addresses his concerns properly, sharing what he needs to know.",
      detailed: "As someone close to Mr Kemp, the son can be told about his father's care where that is in Mr Kemp's best interests. A meeting with a senior addresses his concern about the fall properly. It ranks first." },
    { text: "Explain that wider access to the records needs a formal request and authority.",
      brief: "Tells him the proper route for wider access.",
      detailed: "Access to a patient's full records by someone else needs proper authority and a formal request. Explaining this is honest and helpful, though it doesn't address his concern straight away. It ranks second." },
    { text: "Tell him you can't discuss his father with him, as he has no lasting power of attorney.",
      brief: "Wrongly shuts out a relative whose involvement matters.",
      detailed: "Not having a lasting power of attorney doesn't mean he can't be told anything. Relatives of someone who lacks capacity should usually be consulted and kept informed. It ranks third." },
    { text: "Let him read the notes on the ward computer.",
      brief: "Discloses the full record without authority.",
      detailed: "This would give him the entire record, including information unrelated to his concern, without any legal basis. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you balance confidentiality with a relative's legitimate involvement when a patient lacks capacity.",
    keyDetails: "Mr Kemp lacks capacity. His son has no lasting power of attorney but is closely involved. He has a specific concern.",
    reasoning: "{1} addresses his concern appropriately, and {2} explains the route to fuller access. {3} wrongly excludes him, and {4} discloses without authority.",
    competing: "Some would rank refusing to discuss anything as the worst. The key ranks unrestricted access last because it is a full disclosure without any legal basis."
  },
  refs: [
    { ref: "confidentiality", note: "Sharing information with those close to a patient who lacks capacity." },
    { ref: "mca4", note: "Consulting those close to the person about their best interests." }
  ],
  tags: ["confidentiality", "relatives", "dementia", "records"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-320", pool, letters: "DEH", format: "multiple_choice", difficulty: "moderate",
  title: "Hard feedback", setting: "General surgery", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Receiving feedback", "Reflection", "Communication"],
  stem:
    "You are an F2 doctor in general surgery. Your multi-source feedback has come back. Most of it is positive, but several nurses have commented that you are \"abrupt\" and that \"jobs aren't explained\".\n\n" +
    "You are surprised and upset, as you thought your relationships with the nursing team were good.",
  options: [
    // keyed
    { text: "Discuss the feedback with your educational supervisor.",
      brief: "Helps you understand it and plan improvements.",
      detailed: "Your supervisor can help you look at the feedback objectively and agree specific changes. This is the purpose of multi-source feedback." },
    { text: "Ask a nurse you trust for examples of when you seemed abrupt.",
      brief: "Specific examples make the feedback usable.",
      detailed: "General comments are hard to act on. A trusted colleague may be able to describe particular situations, which makes it easier to change." },
    { text: "Plan specific changes, such as explaining the jobs you hand over.",
      brief: "Turns feedback into action.",
      detailed: "Concrete changes, like explaining why a task is needed, address the feedback directly and can make a quick difference." },
    // distractors
    { text: "Ask the ward manager which nurses wrote the comments.",
      brief: "Undermines the anonymity of the process.",
      detailed: "Feedback is anonymous so that people can be honest. Trying to identify individuals undermines that and may damage relationships." },
    { text: "Put it down to a personality clash with a few nurses.",
      brief: "Dismisses feedback from several colleagues.",
      detailed: "Several people said similar things. Dismissing it means missing a chance to improve." },
    { text: "Ask your supervisor to remove the nurses' comments from your portfolio.",
      brief: "Feedback is for learning, not something to remove.",
      detailed: "Your portfolio should reflect honest feedback. Asking for it to be removed avoids learning from it." },
    { text: "Put in extra effort on the ward from now on.",
      brief: "Effort alone may not address the problem.",
      detailed: "The feedback is about communication, not effort. Without understanding it, working harder may not help." },
    { text: "Raise a complaint that the feedback is unfair.",
      brief: "Treats legitimate feedback as a grievance.",
      detailed: "If feedback were malicious, raising concerns would be reasonable, but similar comments from several people suggest it is genuine." }
  ],
  explanation: {
    issue: "This tests whether you respond to difficult feedback constructively, rather than defensively.",
    keyDetails: "Several nurses made similar comments. The feedback is anonymous. Most of it is positive, but the theme is consistent.",
    reasoning: "{k1} gets support, {k2} gets specific examples, and {k3} makes changes. The distractors break anonymity ({d1}), dismiss it ({d2}, {d5}), hide it ({d3}), or miss the point ({d4}).",
    competing: "{d4} feels conscientious, but the feedback is about how you communicate, which effort alone won't change."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, reflecting on feedback to improve your practice." }
  ],
  tags: ["feedback", "communication", "nursing", "reflection"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-321", pool, letters: "ECABD", format: "ranking", difficulty: "moderate",
  title: "Tears on the ward round", setting: "General medical ward", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Compassion", "Responding to distress", "Teamwork"],
  stem:
    "You are an F2 doctor on a busy general medical ward round. Mrs Price, 58, admitted with a flare of her chronic lung disease, starts crying as the consultant explains that she will need home oxygen.\n\n" +
    "The consultant says, \"I'm sure you'll get used to it,\" and moves on to the next patient. Mrs Price is still crying.",
  options: [
    { text: "Go back to Mrs Price after the ward round to see how she is.",
      brief: "She needs someone to listen to her, and you can come back soon.",
      detailed: "The news has clearly upset her. Returning soon, with time to listen, lets her talk about what home oxygen means for her. It ranks first." },
    { text: "Tell the consultant after the round that Mrs Price was very upset.",
      brief: "Helps the consultant understand the impact and follow up.",
      detailed: "The consultant may not have noticed how distressed she was. Telling them helps make sure her concerns are addressed. It ranks second." },
    { text: "Mention to her nurse that she was upset.",
      brief: "Helps in the short term, but she needs a proper conversation.",
      detailed: "A nurse checking on her shows care, but she needs someone to talk through her concerns about oxygen. It ranks third." },
    { text: "Ask the consultant to go back to her in front of the team.",
      brief: "Challenging the consultant publicly may make things more awkward for her.",
      detailed: "Your concern is right, but challenging the consultant on the ward round may embarrass everyone, including Mrs Price." },
    { text: "Carry on with the ward round, as the consultant has seen her.",
      brief: "Leaves a distressed patient without support.",
      detailed: "The consultant's response didn't address her distress. Leaving it there means no one responds to her. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you respond to a patient's distress when a senior has moved on, without undermining them.",
    keyDetails: "She is upset about the news. The consultant moved on quickly. The ward round is busy.",
    reasoning: "{1} gives her time, {2} lets the consultant know, and {3} offers short-term support. {4} risks an awkward scene, and {5} leaves her unsupported.",
    competing: "Some would put asking the nurse first, as it is immediate. The key puts your own return first because she needs a proper conversation, not just checking on."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, responding to patients' concerns with compassion." }
  ],
  tags: ["distress", "communication", "ward round", "compassion"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-322", pool, letters: "AFG", format: "multiple_choice", difficulty: "easy",
  title: "A flatmate's sore throat", setting: "Non-clinical (teaching, audit, social)", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Prescribing for others", "Boundaries", "Signposting"],
  stem:
    "You are an F2 doctor. Your flatmate has had a sore throat for three days. She says she can't get a GP appointment this week.\n\n" +
    "She asks you to write her a prescription for antibiotics, saying, \"You're a doctor, so it'll be quicker.\"",
  options: [
    // keyed
    { text: "Explain kindly that you shouldn't prescribe for her.",
      brief: "Prescribing for friends should be avoided.",
      detailed: "You aren't her doctor, you haven't assessed her properly, and you don't have her records. Prescribing for friends risks poor care and blurs boundaries." },
    { text: "Suggest she sees a pharmacist about her sore throat.",
      brief: "Pharmacists can assess sore throats and supply treatment if needed.",
      detailed: "Many pharmacies can assess sore throats and, in some cases, supply antibiotics. This is a quick, appropriate route." },
    { text: "Tell her when she should seek urgent help.",
      brief: "Useful safety advice that doesn't make you her doctor.",
      detailed: "General advice on when to seek urgent help is a reasonable thing for a friend to share and keeps her safe." },
    // distractors
    { text: "Write the prescription, as sore throats are usually minor.",
      brief: "Prescribing for a friend without assessment isn't appropriate.",
      detailed: "Even for minor conditions, prescribing for friends risks poor care, and most sore throats don't need antibiotics." },
    { text: "Give her some antibiotics left over from your own course.",
      brief: "Unsafe and inappropriate.",
      detailed: "Leftover antibiotics may be the wrong drug, dose or duration, and sharing prescribed medicines is unsafe." },
    { text: "Examine her throat and prescribe if it looks infected.",
      brief: "You'd be taking on her care informally.",
      detailed: "This makes you her doctor without proper records, consent or follow-up, which is what the guidance warns against." },
    { text: "Ask a colleague at work to prescribe for her.",
      brief: "Still prescribing outside a proper consultation.",
      detailed: "Your colleague wouldn't be her doctor either, and this just passes the problem on." },
    { text: "Tell her that antibiotics won't help a sore throat.",
      brief: "Inaccurate: sometimes they do.",
      detailed: "Most sore throats don't need antibiotics, but some do. Overstating it may stop her seeking help when she needs it." }
  ],
  explanation: {
    issue: "This tests whether you keep appropriate boundaries when a friend asks you to prescribe, while still helping her get care.",
    keyDetails: "She is a friend, not your patient. It isn't an emergency. Other routes to care exist.",
    reasoning: "{k1} declines kindly, {k2} points her to an appropriate route, and {k3} gives safety advice. The distractors prescribe inappropriately ({d1}, {d2}, {d3}, {d4}) or give inaccurate information ({d5}).",
    competing: "{d3} feels like a careful compromise, but it still makes you her doctor informally."
  },
  refs: [
    { ref: "prescribing", note: "Avoiding prescribing for yourself or those close to you." }
  ],
  tags: ["prescribing", "friends", "boundaries", "antibiotics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-323", pool, letters: "EDCBA", format: "ranking", difficulty: "moderate",
  title: "The oxytocin has run out", setting: "Obstetrics & gynaecology", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Managing shortages", "Escalation", "Patient safety"],
  stem:
    "You are an F2 doctor on a busy labour ward at night. A midwife tells you that the ward has run out of the ready-made oxytocin infusion bags that pharmacy supplies to strengthen contractions. Two women are on an oxytocin infusion, with about two hours left in their current bags. The only other oxytocin is a few ampoules in the postpartum haemorrhage emergency box.\n\n" +
    "Pharmacy is closed until the morning, but there is an on-call pharmacist.",
  options: [
    { text: "Tell the coordinator and the obstetric registrar straight away.",
      brief: "They need to plan care and decide about alternatives.",
      detailed: "The coordinator and registrar need to know at once so they can plan for the two women and anyone else who may need oxytocin. It ranks first because the clinical planning depends on them." },
    { text: "Contact the on-call pharmacist to arrange an urgent supply.",
      brief: "May solve the shortage quickly.",
      detailed: "The on-call pharmacist may be able to get stock from elsewhere in the hospital or nearby. It ranks second because the senior team should know first, though both can happen within minutes." },
    { text: "Report the shortage through the incident reporting system.",
      brief: "Helps prevent a repeat.",
      detailed: "A stock-out of a commonly used drug should be reviewed so ordering can be fixed. It ranks third because it is less urgent than solving the shortage tonight." },
    { text: "Ask the midwives to manage without oxytocin until the morning delivery.",
      brief: "May leave women without treatment they need.",
      detailed: "Some women may not need it, but making this decision without senior input, and without trying to get supply, risks harm." },
    { text: "Use the oxytocin kept in the postpartum haemorrhage emergency box.",
      brief: "Uses emergency stock and leaves the ward unprepared for haemorrhage.",
      detailed: "The emergency box exists for life-threatening bleeding. Using it for routine infusions could leave nothing for an emergency. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to a drug shortage: escalating, seeking supply and protecting emergency stock.",
    keyDetails: "Two women are on infusions, with two hours left. Pharmacy is closed but there is an on-call pharmacist. The emergency box contains stock.",
    reasoning: "{1} involves the senior team, {2} seeks supply, and {3} supports learning. {4} risks harm without senior input, and {5} endangers women who might haemorrhage.",
    competing: "{1} and {2} are close and can both happen within minutes. The key puts the senior team first because they decide how to manage the women in the meantime."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, responding to risks in the systems you work in." },
    { ref: "psirf", note: "Reporting safety incidents to support learning." }
  ],
  tags: ["drug shortage", "labour ward", "escalation", "obstetrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-324", pool, letters: "CDH", format: "multiple_choice", difficulty: "hard",
  title: "Thinking of leaving", setting: "General surgery", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Collaboration, teamwork and leadership"],
  competencies: ["Supporting colleagues", "Listening", "Signposting"],
  stem:
    "You are an F2 doctor in general surgery. Over coffee, Dr Hall, an F1 on your team, tells you she feels isolated. She doesn't know anyone in the area, rarely gets feedback, and is thinking of leaving medicine at the end of the year.\n\n" +
    "She asks you not to tell anyone. She seems low but says she isn't unwell.",
  options: [
    // keyed
    { text: "Listen to her concerns without trying to change her mind.",
      brief: "Being heard matters, and it helps her think it through.",
      detailed: "She has confided something important. Listening without judging, or pushing her to stay, shows respect and may help her reflect." },
    { text: "Encourage her to talk to her educational supervisor.",
      brief: "Her supervisor can offer support and feedback she is missing.",
      detailed: "Her supervisor can address the lack of feedback, explore support and discuss options, including whether leaving is right for her." },
    { text: "Tell her about wellbeing support available to doctors.",
      brief: "She may not know what's available.",
      detailed: "Trust wellbeing services, peer support schemes and confidential services for doctors can help with isolation and low mood. Knowing about them gives her options." },
    // distractors
    { text: "Tell her that everyone feels like this in their first year.",
      brief: "May feel dismissive of her experience.",
      detailed: "Many F1s do struggle, but saying so can minimise how she feels." },
    { text: "Tell her that leaving would waste her training.",
      brief: "Pressures her rather than supporting her.",
      detailed: "Her decision should be her own. This adds guilt to an already difficult situation." },
    { text: "Tell your consultant that she is thinking of leaving.",
      brief: "Breaks her confidence without a safety reason.",
      detailed: "She has asked you not to tell anyone, and there is no immediate risk. Sharing it without her agreement would damage her trust." },
    { text: "Invite her to join you and your friends at the weekend.",
      brief: "A kind gesture, but on its own it doesn't address the wider problem.",
      detailed: "Social contact can help isolation, and you might well offer it. But it doesn't give her access to the feedback and support she needs at work." },
    { text: "Suggest she takes sick leave to think things over.",
      brief: "She has said she isn't unwell.",
      detailed: "Sick leave is for illness. Suggesting it here may not be appropriate, and it doesn't address the cause." }
  ],
  explanation: {
    issue: "This tests how you support a colleague who is struggling, respecting her confidence while helping her find support.",
    keyDetails: "She feels isolated and lacks feedback. She is considering leaving. She has asked for confidentiality. There is no immediate risk.",
    reasoning: "{k1} listens, {k2} points her to her supervisor, and {k3} tells her about wider support. The distractors minimise ({d1}), pressure ({d2}), break confidence ({d3}), help only socially ({d4}), or misuse sick leave ({d5}).",
    competing: "{d4} is a genuinely kind option and could sit alongside the keyed actions. On its own, it doesn't address the lack of support at work."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues who have problems." },
    { ref: "practitionerhealth", note: "Confidential support for doctors." }
  ],
  tags: ["colleague support", "isolation", "career", "wellbeing"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-325", pool, letters: "DECBA", format: "ranking", difficulty: "moderate",
  title: "A new role", setting: "Acute medical unit", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Collaboration, teamwork and leadership"],
  competencies: ["Teamwork", "Resolving conflict", "Inclusion"],
  stem:
    "You are an F2 doctor on the acute medical unit. Priya, a newly qualified physician assistant, joined the team two weeks ago. Nobody has explained to the junior doctors what she can and can't do.\n\n" +
    "The two F1s have started refusing to give her jobs, saying they \"don't know what she's allowed to do\". Priya tells you she feels unwelcome.",
  options: [
    { text: "Ask the consultant to clarify Priya's role for the whole team.",
      brief: "The lack of clarity is the root of the problem.",
      detailed: "The F1s' concern about her scope is understandable, and the consultant can explain her role and supervision arrangements to everyone. It ranks first because it addresses the cause." },
    { text: "Talk with the F1s about their concerns.",
      brief: "Understanding their worries helps resolve the tension.",
      detailed: "Their reluctance may come from uncertainty rather than hostility. Talking with them can ease things while the role is clarified. It ranks second." },
    { text: "Invite Priya to join you when you take histories and review patients.",
      brief: "Helps her feel welcome in the meantime.",
      detailed: "Inviting her to tasks that clearly fit her training, such as taking histories, shows support. It ranks third because it doesn't solve the underlying problem." },
    { text: "Tell the F1s they must give Priya work.",
      brief: "Overrides their concerns without addressing them.",
      detailed: "This may cause resentment, and it doesn't address their reasonable uncertainty about her role." },
    { text: "Leave it, as the F1s aren't your responsibility.",
      brief: "Allows the problem to continue.",
      detailed: "You are part of the team, and a colleague feels excluded. Doing nothing lets the problem grow. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you help resolve tension in a team caused by an unclear new role.",
    keyDetails: "Priya's role hasn't been explained. The F1s are uncertain. Priya feels unwelcome. The consultant can clarify.",
    reasoning: "{1} fixes the cause, {2} addresses the F1s' worries, and {3} supports Priya. {4} overrides without understanding, and {5} ignores the problem.",
    competing: "{2} and {3} are close. The key puts talking to the F1s first because it eases the tension for the whole team."
  },
  refs: [
    { ref: "leadership", note: "Working with colleagues and making sure roles are understood." }
  ],
  tags: ["teamwork", "physician assistants", "conflict", "acute medicine"]
}
];
