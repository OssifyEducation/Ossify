// Practice batch P06, part 1 (sjt-106 to sjt-115). Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-106", letters: "BCF", format: "multiple_choice", difficulty: "moderate",
  title: "A statement for the police", setting: "Emergency department", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honesty in documents", "Confidentiality", "Seeking advice"],
  stem:
    "You are an F2 doctor in the Emergency Department. Last night you sutured a scalp wound for Mr Dale, 41, after a fight outside a pub. The triage nurse recorded that he smelled of alcohol; you didn't assess his level of intoxication.\n\n" +
    "Today a police officer asks you for a written statement saying that Mr Dale was \"clearly intoxicated\" when he arrived. The officer says it would really help the case.",
  options: [
    { text: "Explain that you can only describe what you observed and did yourself.",
      brief: "A statement must reflect your own knowledge, not what someone wants it to say.",
      detailed: "A statement from a doctor carries weight, so it must be accurate and within your own knowledge. You can describe his wound and what you did, but you can't say he was clearly intoxicated when you didn't assess that." },
    { text: "Check whether there is consent or another legal basis for disclosure.",
      brief: "Disclosing information to the police needs consent or another lawful basis.",
      detailed: "Patients' information is confidential, even when the police ask for it. Disclosure usually needs the patient's consent, a court order, or a justification in the public interest, such as preventing or detecting serious crime. Checking this protects him and you." },
    { text: "Ask your consultant or the trust's legal team for advice before writing it.",
      brief: "Statements for the police are unfamiliar for most F2s, and advice helps you get it right.",
      detailed: "Many trusts have guidance on providing statements, and seniors or the legal team can advise on what to include and whether disclosure is appropriate. Seeking advice is sensible before writing a document that may be used in court." },
    { text: "Write the statement as asked, as the triage notes support it.",
      brief: "The statement would claim something you didn't observe.",
      detailed: "The triage note records a smell of alcohol, which isn't the same as being clearly intoxicated, and in any case you didn't make that assessment. Writing it as asked would be inaccurate." },
    { text: "Ask the triage nurse to sign your statement as well, as she saw him on arrival.",
      brief: "Each person's statement should be their own account.",
      detailed: "The nurse may be asked to give her own statement, but adding her signature to yours mixes two accounts and doesn't make your statement accurate." },
    { text: "Write that he \"appeared intoxicated\", based on the triage notes.",
      brief: "Still presents another person's observation as your own.",
      detailed: "This softens the wording, which makes it tempting, but it still reports something you didn't observe. If the information is needed, it should come from the triage nurse's own account or the records, disclosed lawfully." },
    { text: "Give the officer a copy of Mr Dale's notes, so they can draw their own conclusions.",
      brief: "Disclosing his records without a legal basis breaches confidentiality.",
      detailed: "Handing over records may seem more objective than writing a statement, but it discloses all of his confidential information, not just what is relevant, and without checking for consent or another lawful basis." },
    { text: "Refuse to have anything to do with police requests.",
      brief: "Doctors can assist the police lawfully; a blanket refusal isn't appropriate.",
      detailed: "Doctors often help the police, within the law and their duties of confidentiality. Refusing outright, rather than finding out what can properly be provided, is unhelpful." }
  ],
  explanation: {
    issue: "This tests whether you keep documents honest under pressure, and handle requests from the police within the rules on confidentiality.",
    keyDetails: "You didn't assess his intoxication. The triage note records a smell of alcohol only. The police want a particular wording. You don't know whether he has consented.",
    reasoning: "{k1} keeps your statement honest, {k2} checks the legal basis for disclosure, and {k3} gets appropriate advice. The distractors misrepresent what you observed ({d1}, {d2}, {d3}), disclose without checking ({d4}), or refuse unhelpfully ({d5}).",
    competing: "{d3} is the subtle distractor: softer wording seems honest, but it still reports someone else's observation as your own."
  },
  refs: [
    { ref: "confidentiality", note: "Disclosing information to the police: consent, legal requirements, and the public interest." },
    { ref: "gmp", note: "Domain 4, honesty in reports and statements." }
  ],
  tags: ["police", "statements", "confidentiality", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-107", letters: "ACBDE", format: "ranking", difficulty: "easy",
  title: "Before the family knows", setting: "Intensive care", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Raising concerns with seniors", "Communication with families", "End-of-life care"],
  stem:
    "You are an F2 doctor in intensive care. Mrs Wright, 77, has been ventilated for ten days after a severe stroke and lacks capacity. On this morning's ward round the consultant decided that continuing treatment isn't in her best interests and that it should be withdrawn this afternoon.\n\n" +
    "There is no record in her notes of any discussion with her family about her wishes. The consultant has gone to a meeting and asks you to start the process with the nurses at 14:00.",
  options: [
    { text: "Ask the consultant when the family will be spoken to.",
      brief: "Raises the concern with the decision-maker before anything happens.",
      detailed: "When a patient lacks capacity, those close to her should be consulted about her wishes and best interests before such a decision is carried out. The consultant may already have spoken to them, or may have overlooked it. Asking directly is the respectful and safe first step." },
    { text: "Offer to be present when the consultant speaks to the family.",
      brief: "Supports the conversation and helps you learn.",
      detailed: "Being present helps the family, supports the consultant, and is valuable experience. It ranks second because it depends on the conversation happening, which is what you first need to establish." },
    { text: "Ask the nurses whether they know of any discussion with the family.",
      brief: "May help, but only the consultant can confirm what was discussed.",
      detailed: "The nurses may have been present for a conversation that wasn't documented. It ranks third because only the consultant can confirm what was discussed, and time is short." },
    { text: "Phone the family yourself to tell them about the decision.",
      brief: "Not your conversation to have, and could cause great distress.",
      detailed: "The family do need to be involved, but a conversation about withdrawing treatment should be led by the consultant, who made the decision, not delivered by phone by a junior." },
    { text: "Start the withdrawal at 14:00 as instructed, as it is the consultant's decision.",
      brief: "Proceeds with a serious irreversible step despite a clear concern.",
      detailed: "The decision is the consultant's, but carrying it out without raising a concern that the family haven't been involved could lead to serious harm and distress. This is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you raise a concern with a senior before an irreversible decision is carried out, rather than staying silent or acting alone.",
    keyDetails: "Mrs Wright lacks capacity. The family don't appear to have been consulted. Withdrawal is planned for the afternoon. The consultant is contactable.",
    reasoning: "{1} raises the concern with the decision-maker, {2} supports the conversation, and {3} gathers information from the nurses. {4} oversteps your role, and {5} proceeds despite a clear concern.",
    competing: "Some would ask the nurses first. The key prefers contacting the consultant because only they can confirm whether the family were consulted, and time is short."
  },
  refs: [
    { ref: "mca4", note: "Consulting those close to a person who lacks capacity about their best interests." },
    { ref: "eol", note: "Involving those close to the patient in decisions about withdrawing treatment." }
  ],
  tags: ["withdrawal of treatment", "families", "intensive care", "seniors"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-108", letters: "ABH", format: "multiple_choice", difficulty: "moderate",
  title: "Children at home", setting: "Psychiatry", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Child safeguarding", "Urgent action", "Communication"],
  stem:
    "You are an F2 doctor in a psychiatric assessment unit at 23:00. Mr Ellis, 35, has schizophrenia and was brought in by police after being found confused in a park. He is calmer now.\n\n" +
    "As you are assessing him, he says his children, aged 4 and 7, are \"at home on their own\". He says their mother is \"away\", but can't say where, and gives you his home address.",
  options: [
    { text: "Contact the police to ask them to check on the children's safety now.",
      brief: "Young children alone at night need an immediate safety check.",
      detailed: "If the children are alone, they are at immediate risk. The police can attend straight away and involve children's social care. Acting promptly matters more than establishing every detail first." },
    { text: "Ask him calmly for more details about the children.",
      brief: "More information helps those responding, without delaying the call.",
      detailed: "He may be able to tell you whether a neighbour or relative is with them, or how long they have been alone. This helps the police and social care, and can be done while the call is made." },
    { text: "Inform the on-call psychiatrist, and record what he told you.",
      brief: "Seniors need to know, and the record matters for safeguarding.",
      detailed: "Your senior should be told about a serious safeguarding concern, and a clear record of what he said, when, and what you did supports the safeguarding process." },
    { text: "Ask a nurse to phone his home number to see whether anyone answers.",
      brief: "An unanswered or answered call doesn't tell you the children are safe.",
      detailed: "This might seem a quick check, but young children may not answer, and even if someone does, a phone call can't establish whether they are safe and supervised. It shouldn't replace or delay a police check." },
    { text: "Assume his statement is part of his illness until you can confirm it.",
      brief: "The cost of being wrong is too high.",
      detailed: "His statement could be affected by his illness, but if it's true, two young children are alone at night. You must act on the possibility." },
    { text: "Wait until the morning, when the children's social care offices are open and can visit.",
      brief: "Far too slow for an immediate risk.",
      detailed: "There is an out-of-hours social care service, and the police can act now. Waiting until morning could leave young children alone overnight." },
    { text: "Ask him to phone a neighbour to check on the children.",
      brief: "Relies on an unwell man and an unknown neighbour for a child's safety.",
      detailed: "A neighbour may help, but relying on him to arrange it, without any professional check, may leave the children unsafe." },
    { text: "Leave a note for the day team to follow up.",
      brief: "Delays action on an immediate risk.",
      detailed: "The day team will need to know, but leaving it until then is far too slow." }
  ],
  explanation: {
    issue: "This tests whether you act immediately on a possible risk to children, even when the information comes from an unwell parent.",
    keyDetails: "Two young children may be alone at night. Their father is unwell and in hospital. Their mother's whereabouts are unknown.",
    reasoning: "{k1} gets an immediate safety check, {k2} gathers helpful details, and {k3} informs your senior and records it. The distractors delay ({d1}, {d3}, {d5}), dismiss the risk ({d2}), or rely on an unreliable arrangement ({d4}).",
    competing: "{d2} is the trap: his statement may be affected by his illness, but you can't take that risk with young children."
  },
  refs: [
    { ref: "workingtogether", note: "Acting immediately when a child may be at risk of significant harm." },
    { ref: "children", note: "Doctors' responsibilities to protect children, including children of adult patients." }
  ],
  tags: ["child safeguarding", "parental mental illness", "psychiatry", "out-of-hours"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-109", letters: "CDABE", format: "ranking", difficulty: "hard",
  title: "A difficult reference", setting: "Non-clinical (training)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honest references", "Feedback", "Fairness"],
  stem:
    "You are an F2 doctor. Dr Lim, an F1 you supervised informally on your last rotation, asks you to write a reference for a clinical fellowship.\n\n" +
    "She was kind to patients and hardworking, but you had concerns about her prescribing: she made several errors, two of which reached patients, and the team discussed them with her at the time.",
  options: [
    { text: "Talk to her about the concerns you would need to include, before you write it.",
      brief: "Fair to her, and gives her the chance to decide whether to use you as a referee.",
      detailed: "Telling her what you would need to include is fair and open: it lets her know what to expect, and she may choose another referee. Doing this before writing means the reference won't come as a surprise." },
    { text: "Write an honest reference that includes her strengths and, factually, the prescribing concerns.",
      brief: "A reference must be honest and include information relevant to the role.",
      detailed: "References are relied on by employers to make safe decisions. An honest, balanced reference includes her strengths and the relevant concerns, stated factually, along with how she responded to feedback. It ranks second only because talking to her first is fairer." },
    { text: "Explain that you don't feel able to write a supportive reference, so she can ask someone else.",
      brief: "You can decline, though she loses a referee who knows her well.",
      detailed: "Doctors can decline to write a reference. This is honest, but it doesn't help her, and another referee may not know about the concerns. It ranks third because writing an honest reference serves both her and the employer better." },
    { text: "Write a reference that focuses only on her strengths.",
      brief: "Omitting relevant concerns makes the reference misleading.",
      detailed: "Wanting to support a junior colleague is natural. But leaving out concerns about patient safety gives a misleading picture to an employer who is relying on you." },
    { text: "Write a strongly positive reference, as she would struggle to find a post otherwise.",
      brief: "Actively misleading, and could put patients at risk.",
      detailed: "This puts her career ahead of patient safety and misleads the employer. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests honesty when writing a reference for a colleague you like but have concerns about.",
    keyDetails: "There were real prescribing concerns, two reaching patients. She has strengths. The role is clinical.",
    reasoning: "{1} is open with her first, {2} writes an honest, balanced reference, and {3} is honest but less helpful. {4} misleads by omission, and {5} misleads actively.",
    competing: "This is hard because {1}, {2} and {3} are all honest. The key prefers talking to her and then writing a balanced reference over declining, because that gives the employer the full picture and still recognises her strengths."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty when writing references and reports." }
  ],
  tags: ["references", "honesty", "prescribing errors", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-110", letters: "DGH", format: "multiple_choice", difficulty: "moderate",
  title: "Teaching time again", setting: "General practice", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Protecting training time", "Communicating with supervisors", "Using proper channels"],
  stem:
    "You are an F2 doctor in a GP practice. For the third week running, the practice manager has booked routine patients into your Wednesday afternoon, when you should be at the foundation teaching programme.\n\n" +
    "The practice is short of GPs, and she says the patients have nowhere else to go.",
  options: [
    { text: "Explain to the practice manager that this is protected teaching time.",
      brief: "A clear, polite explanation may resolve it.",
      detailed: "The practice manager may not realise that teaching is protected time. Explaining this, politely, gives her the chance to rebook future patients." },
    { text: "Discuss the pattern with your GP supervisor.",
      brief: "Your supervisor can address it with the practice and protect your training.",
      detailed: "Your GP supervisor is responsible for your training in the practice and can make sure teaching time is respected, while understanding the practice's pressures." },
    { text: "Ask your foundation programme tutor for advice.",
      brief: "The programme can support you if the practice doesn't change.",
      detailed: "Foundation programmes expect teaching time to be protected. The tutor can advise you and, if needed, raise it with the practice." },
    { text: "See the patients this week and miss teaching again.",
      brief: "Accepts a pattern that undermines your training.",
      detailed: "Missing a session for a real emergency can be appropriate, but routinely seeing routine patients means you miss required training." },
    { text: "Complete the teaching as e-learning in the evening instead.",
      brief: "Online learning doesn't replace the programme, and accepts the pattern.",
      detailed: "Some teaching is available online, which makes this tempting. But it doesn't replace attending, and doesn't address the problem." },
    { text: "Refuse to see any extra patients until the practice recruits more GPs.",
      brief: "An unhelpful, absolute response.",
      detailed: "Being clear about protected time is right, but refusing to help at all doesn't reflect the practice's genuine pressures." },
    { text: "Ask another F2 to cover your teaching session and pass on the notes.",
      brief: "Doesn't protect your training or address the booking problem.",
      detailed: "Notes from a colleague don't replace attendance, and the bookings will continue." },
    { text: "Report the practice to the GMC.",
      brief: "Disproportionate; local and programme routes come first.",
      detailed: "Persistent problems with training can be raised through the national training survey and the deanery, but a direct conversation and your supervisor come first." }
  ],
  explanation: {
    issue: "This tests how you protect your training time constructively, using the right routes, when service pressures intrude.",
    keyDetails: "This is the third week. The patients are routine. The practice is short-staffed.",
    reasoning: "{k1} raises it directly, {k2} involves your supervisor, and {k3} seeks programme advice. The distractors accept the pattern ({d1}, {d2}, {d4}), respond unhelpfully ({d3}), or escalate disproportionately ({d5}).",
    competing: "{d1} is the tempting option: helping the practice is good, but doing so every week undermines your training."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, keeping your knowledge and skills up to date." }
  ],
  tags: ["teaching", "training", "general practice", "service pressure"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-111", letters: "EBDAC", format: "ranking", difficulty: "moderate",
  title: "Declining a caesarean", setting: "Obstetrics & gynaecology", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting autonomy", "Informed decision-making", "Documentation"],
  stem:
    "You are an F2 doctor on the labour ward. Ms Okoye, 31, is in labour with her first baby. Labour has stopped progressing, and the registrar has recommended a caesarean section. The baby's heart rate is currently normal.\n\n" +
    "Ms Okoye says she doesn't want a caesarean and wants to keep trying. She seems calm and understands what the registrar has said. Her partner is upset with her decision.",
  options: [
    { text: "Make sure she understands the risks, and listen to her concerns.",
      brief: "An informed decision needs understanding, and her reasons may be addressable.",
      detailed: "She may have specific fears about surgery, recovery or future pregnancies. Making sure she understands the recommendation and the risks of continuing, and listening to her concerns, supports an informed decision." },
    { text: "Ask the consultant obstetrician to discuss the options with her.",
      brief: "A senior discussion helps make sure she has all the information.",
      detailed: "The consultant can discuss options such as continuing with close monitoring, and the points at which the risks would change. It ranks second because listening to her concerns comes first." },
    { text: "Document her decision and the discussion clearly.",
      brief: "Records the information given and her choice.",
      detailed: "A clear record of what she was told and what she decided protects her and the team. It ranks third because it follows the discussion." },
    { text: "Ask her partner to persuade her to accept the caesarean.",
      brief: "The decision is hers, and pressure from her partner isn't appropriate.",
      detailed: "Her partner's feelings are understandable, but the decision is hers. Enlisting him to persuade her puts pressure on her." },
    { text: "Tell her that the team can override her decision if the baby is at risk.",
      brief: "Incorrect: a woman with capacity can refuse a caesarean, even if her baby is at risk.",
      detailed: "This is a common misconception. A pregnant woman with capacity has the right to refuse treatment, including a caesarean, even if her decision puts the baby at risk. Telling her otherwise is wrong and coercive." }
  ],
  explanation: {
    issue: "This tests whether you respect a capacitous woman's right to refuse a recommended caesarean, while making sure her decision is informed.",
    keyDetails: "She appears to have capacity and understands the recommendation. The baby is currently well. Her partner disagrees.",
    reasoning: "{1} supports an informed decision, {2} brings in senior input, and {3} records it. {4} pressures her through her partner, and {5} misstates the law.",
    competing: "Some would put the consultant discussion first. The key starts with listening, because understanding her concerns shapes what the consultant needs to address."
  },
  refs: [
    { ref: "consent", note: "Respecting the decisions of patients with capacity, including refusal." },
    { ref: "mca1", note: "Presumption of capacity." }
  ],
  tags: ["refusal", "caesarean", "autonomy", "labour"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-112", letters: "CEF", format: "multiple_choice", difficulty: "easy",
  title: "A call from the press", setting: "Emergency department", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Confidentiality", "Dealing with the media", "Using proper channels"],
  stem:
    "You are an F2 doctor in the Emergency Department. A well-known television presenter has just been brought in after a car crash.\n\n" +
    "You answer the department phone, and the caller says she is a journalist. She asks whether the presenter is in the department and how badly hurt he is.",
  options: [
    { text: "Tell her you can't confirm or deny whether anyone is a patient.",
      brief: "Even confirming his presence would breach his confidentiality.",
      detailed: "Whether someone is in hospital is confidential information. Declining to confirm or deny, politely, protects him without giving anything away." },
    { text: "Direct her to the trust's communications team.",
      brief: "Media enquiries should go through the press office.",
      detailed: "Trusts have communications teams to handle media enquiries, with the patient's agreement. Referring her there is the proper route." },
    { text: "Let the nurse in charge know about the call.",
      brief: "The department may need to prepare for more enquiries.",
      detailed: "A call from the press suggests more may follow. The nurse in charge can alert the communications team and make sure staff are prepared." },
    { text: "Confirm he is in the department, but say you can't give details.",
      brief: "Confirming his presence is itself a breach of confidentiality.",
      detailed: "This feels like a careful compromise, but simply confirming that he is a patient discloses confidential information." },
    { text: "Tell her he is stable, so that inaccurate reports aren't published.",
      brief: "Discloses confidential information.",
      detailed: "Concern about inaccurate reporting is understandable, but you can't share information about him without his consent." },
    { text: "Ask the presenter whether he would like you to talk to the journalist.",
      brief: "Not your role, and he is injured and in the middle of assessment.",
      detailed: "His wishes do matter, and the communications team will ask him. But approaching him yourself, while he is being assessed after a crash, isn't appropriate." },
    { text: "Take her number and promise to call back with an update.",
      brief: "Implies that information will be shared.",
      detailed: "This suggests you will give her information later, which you can't do." },
    { text: "Mention to colleagues that he is in the department so they're prepared.",
      brief: "Spreads confidential information unnecessarily.",
      detailed: "Only staff involved in his care need to know he is there. Telling others unnecessarily increases the risk of a leak." }
  ],
  explanation: {
    issue: "This tests whether you protect a patient's confidentiality when the media ask about him.",
    keyDetails: "The caller is a journalist. The patient is well known. Even his presence is confidential.",
    reasoning: "{k1} protects his confidentiality, {k2} uses the proper route, and {k3} prepares the department. The distractors disclose information ({d1}, {d2}, {d5}), or act outside your role ({d3}, {d4}).",
    competing: "{d1} is the tempting option, but confirming his presence is a disclosure in itself."
  },
  refs: [
    { ref: "confidentiality", note: "Not disclosing information about patients, including whether they are patients, without consent." }
  ],
  tags: ["confidentiality", "media", "celebrities", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-113", letters: "CAEDB", format: "ranking", difficulty: "moderate",
  title: "A failed assessment", setting: "Cardiology / respiratory", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Responding to feedback", "Learning", "Resilience"],
  stem:
    "You are an F2 doctor in respiratory medicine. Your registrar observed you inserting a chest drain under supervision as a formal assessment, and judged that you weren't yet competent, mainly because of your aseptic technique.\n\n" +
    "Your fellow F2s have all passed the same assessment, and you feel embarrassed.",
  options: [
    { text: "Ask the registrar for specific feedback on what to improve.",
      brief: "Specific feedback gives you a clear plan.",
      detailed: "Understanding exactly what went wrong with your technique lets you focus on it. Asking shows you take the assessment seriously." },
    { text: "Arrange further supervised practice, including in the skills lab.",
      brief: "Practice is how you'll improve.",
      detailed: "Supervised practice, including on simulators, helps you refine your technique safely. It ranks second because you first need to know what to work on." },
    { text: "Reflect on the assessment in your portfolio.",
      brief: "Useful for learning, though less direct than practice.",
      detailed: "Reflecting helps you consolidate what you learn. It ranks third because practice and feedback make the bigger difference." },
    { text: "Ask a different registrar to repeat the assessment next week.",
      brief: "Premature: the feedback hasn't been addressed yet.",
      detailed: "Being assessed by different people is normal, but repeating the assessment before you've worked on the problem is unlikely to change the result, and could look like looking for an easier assessor." },
    { text: "Avoid chest drains for the rest of the rotation.",
      brief: "Avoidance stops you developing the skill.",
      detailed: "This avoids further embarrassment, but means you won't develop the skill or demonstrate competence, and the gap in your training remains. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to an assessment that shows you aren't yet competent: constructively, without avoidance or gaming the system.",
    keyDetails: "The concern is about aseptic technique, which matters for patient safety. Your peers have passed. You feel embarrassed.",
    reasoning: "{1} gets specific feedback, {2} improves your technique, and {3} consolidates learning. {4} repeats the assessment before addressing the feedback, and {5} avoids the skill altogether.",
    competing: "The order of {4} and {5} is close. {5} ranks last because it gives up on the skill entirely, whereas {4} at least keeps you working towards competence, if too soon."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, developing your skills and working within your competence." }
  ],
  tags: ["assessment", "feedback", "procedures", "resilience"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-114", letters: "BCF", format: "multiple_choice", difficulty: "hard",
  title: "\"It's all in his head\"", setting: "Orthopaedics", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Taking pain seriously", "Challenging stigma", "Clinical assessment"],
  stem:
    "You are an F2 doctor in orthopaedics. At evening handover, the day F2 says that Mr Kerr, 47, three days after a lumbar spine operation, \"keeps complaining of pain, but it's all in his head — he's got anxiety and he's been on painkillers for years\".\n\n" +
    "Later the nurse asks you to see him because his pain is worse and he says his left leg feels weak.",
  options: [
    { text: "Assess him yourself, including a full neurological examination of his legs.",
      brief: "New weakness after spinal surgery needs urgent assessment.",
      detailed: "New leg weakness after a spinal operation can be a sign of a serious complication, such as a haematoma compressing the nerves, which needs urgent treatment. His anxiety doesn't change that." },
    { text: "Escalate your findings to the orthopaedic registrar promptly.",
      brief: "A possible post-operative complication needs senior review.",
      detailed: "Whatever you find, new neurology after spinal surgery should be reviewed by the registrar, who can arrange urgent imaging if needed." },
    { text: "Tell the day F2, privately, that the handover comment was unhelpful.",
      brief: "Labels like this can lead to missed diagnoses.",
      detailed: "The comment may reflect frustration rather than intent, but labelling a patient's pain as \"all in his head\" can lead others to dismiss real problems. A private, constructive word helps prevent it happening again." },
    { text: "Ask the nurse to increase his opioid dose, as he is used to high doses.",
      brief: "Treats the symptom without assessment, missing a possible complication.",
      detailed: "Effective analgesia matters, and opioid tolerance may mean he needs more. But new leg weakness after spinal surgery needs assessing first." },
    { text: "Reassure Mr Kerr that his pain is probably due to anxiety.",
      brief: "Dismisses symptoms that may indicate a serious problem.",
      detailed: "Anxiety can make pain worse, but attributing new symptoms to it without assessment is unsafe and dismissive." },
    { text: "Refer him to the liaison psychiatry team for his anxiety.",
      brief: "May help later, but doesn't address the new symptoms.",
      detailed: "Liaison psychiatry can help people with anxiety and chronic pain, and might be appropriate later. But it doesn't address new leg weakness tonight." },
    { text: "Request an urgent MRI scan of his spine before examining him.",
      brief: "Imaging may well be needed, but he needs examining and a senior decision first.",
      detailed: "Urgent imaging is likely if he has new neurological signs, which makes this tempting. But requesting it without examining him, or discussing with the registrar, skips the assessment that guides what's needed and how urgently." },
    { text: "Wait to see whether his weakness improves overnight.",
      brief: "Delays assessment of a potential emergency.",
      detailed: "Some symptoms settle, but new weakness after spinal surgery can progress, and delays can lead to permanent harm." }
  ],
  explanation: {
    issue: "This tests whether you assess a patient's symptoms on their merits when a colleague's label suggests they aren't real, and address the label constructively.",
    keyDetails: "He has new leg weakness after spinal surgery. His pain is worse. He has been labelled as anxious and opioid-dependent.",
    reasoning: "{k1} assesses him properly, {k2} escalates promptly, and {k3} addresses the stigmatising label. The distractors treat or investigate without assessment ({d1}, {d4}), dismiss his symptoms ({d2}), respond to the label rather than the symptoms ({d3}), or delay ({d5}).",
    competing: "{d3} is the hard distractor: it may help later, but it treats the label rather than the new symptoms."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients fairly and without prejudice; Domain 1, assessing patients' conditions." }
  ],
  tags: ["stigma", "pain", "spinal surgery", "handover"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-115", letters: "ADCB", format: "ranking", difficulty: "moderate",
  title: "An offer of childcare", setting: "Paediatrics", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Gifts", "Professional boundaries", "Gracious refusal"],
  stem:
    "You are an F2 doctor in paediatrics. Two weeks ago you recognised meningitis in Leo, 3, and he is now recovering well. His mother, who runs a nursery, is very grateful.\n\n" +
    "On the day of discharge she offers you a free place for your own toddler at her nursery for a year, worth several thousand pounds. Leo will continue to attend your hospital's clinic.",
  options: [
    { text: "Thank her warmly, and explain that you can't accept a gift like this.",
      brief: "Kind, clear, and avoids a significant gift that could affect your judgement.",
      detailed: "Her gratitude is genuine, and you can acknowledge it. But a gift of this value, from the family of a child who will remain under your hospital's care, could affect, or be seen to affect, your judgement." },
    { text: "Suggest she sends a card or something small for the whole ward team instead.",
      brief: "Lets her show gratitude in an acceptable way.",
      detailed: "Many families want to say thank you, and a card or a small gift for the team is usually acceptable. It ranks second because it follows declining the larger offer." },
    { text: "Accept a nursery place, but pay the normal fees.",
      brief: "Avoids the gift, but creates an ongoing personal and business relationship with the family.",
      detailed: "Paying removes the gift, but your child attending her nursery creates a continuing relationship with a family whose child is under your hospital's care, which could blur boundaries." },
    { text: "Accept the free place, as she has offered it freely.",
      brief: "A valuable gift from a patient's family is inappropriate.",
      detailed: "Freely offered gifts can still create obligations, and this one is of significant value. Accepting it would be inappropriate." }
  ],
  explanation: {
    issue: "This tests whether you decline a valuable gift from a patient's family graciously, while letting them express gratitude.",
    keyDetails: "The gift is worth thousands of pounds. Leo remains under the hospital's care. The mother is sincerely grateful.",
    reasoning: "{1} declines kindly, {2} offers an acceptable alternative, and {3} avoids the gift but blurs boundaries. {4} accepts an inappropriate gift.",
    competing: "Some would see {3} as acceptable, as no gift is involved. It ranks third because a continuing personal arrangement with the family creates a different boundary problem."
  },
  refs: [
    { ref: "coi", note: "Accepting gifts from patients and those close to them." },
    { ref: "boundaries", note: "Maintaining professional boundaries with patients and their families." }
  ],
  tags: ["gifts", "boundaries", "paediatrics", "families"]
}
];
