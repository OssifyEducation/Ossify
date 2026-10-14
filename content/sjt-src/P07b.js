// Practice batch P07, part 2 (sjt-136 to sjt-145). Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-136", letters: "BFG", format: "multiple_choice", difficulty: "moderate",
  title: "A form he can read", setting: "General surgery", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Consent", "Language needs", "Respecting patients"],
  stem:
    "You are an F2 doctor in general surgery. Mr Kowalski, 61, is having a planned hernia repair tomorrow. He speaks conversational English, and the registrar has explained the operation to him.\n\n" +
    "When you bring the consent form for him to sign, he says politely that he would like to read it in Polish before signing, as he wants to be sure he understands the risks.",
  options: [
    // keyed
    { text: "Arrange a professional Polish interpreter to go through the form with him.",
      brief: "Makes sure his consent is properly informed, in his own language.",
      detailed: "Conversational English doesn't always extend to medical risks. A professional interpreter, in person or by phone, can go through the form and answer his questions accurately." },
    { text: "Check whether the trust has written information about the operation in Polish.",
      brief: "Translated information helps him understand and remember the risks.",
      detailed: "Many trusts have patient information leaflets in common languages. Written information he can read in his own time supports an informed decision." },
    { text: "Reassure him that he doesn't need to sign until he understands.",
      brief: "Respects his request and makes clear he won't be rushed.",
      detailed: "The operation is planned, so there is time. Making clear that he can take time to understand before signing respects his request." },
    // distractors
    { text: "Ask his son, who speaks fluent English, to translate the form for him.",
      brief: "Family members aren't reliable interpreters for consent.",
      detailed: "This is convenient, and his son may translate well. But family members may soften or omit information, and professional interpreting is expected for consent." },
    { text: "Explain that the consent form is a formality, as the registrar has already explained the operation.",
      brief: "Consent is about understanding, not the form, and he has said he isn't sure.",
      detailed: "The discussion matters more than the form, but he has told you he wants to be sure he understands the risks. Dismissing this undermines his consent." },
    { text: "Use an online translation tool to translate the form for him.",
      brief: "Machine translation of medical risks may be inaccurate.",
      detailed: "Online tools can help with simple phrases, but they may mistranslate medical terms." },
    { text: "Ask him to sign now, and say you'll arrange a translation for him to keep.",
      brief: "Consent should come after understanding, not before.",
      detailed: "Providing a translation is helpful, but asking him to sign before he understands undermines the purpose of consent." },
    { text: "Postpone his operation until a translated consent form can be produced.",
      brief: "Probably unnecessary, as an interpreter can help today.",
      detailed: "Postponing may be needed if he can't be helped to understand in time, but an interpreter can usually help today." }
  ],
  explanation: {
    issue: "This tests whether you respond to a patient's language needs so that his consent is properly informed.",
    keyDetails: "He speaks conversational English but wants to understand the risks in Polish. The operation is planned for tomorrow.",
    reasoning: "{k1} provides professional interpreting, {k2} offers written information in his language, and {k3} reassures him he won't be rushed. The distractors use unreliable translation ({d1}, {d3}), dismiss his request ({d2}), reverse the order of consent ({d4}), or delay unnecessarily ({d5}).",
    competing: "{d1} is the tempting option because it's quick and his son is fluent, but family members aren't suitable interpreters for consent."
  },
  refs: [
    { ref: "consent", note: "Making sure patients have information in a form they can understand, including using interpreters." }
  ],
  tags: ["consent", "interpreters", "language", "surgery"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-137", letters: "ECBDA", format: "ranking", difficulty: "easy",
  title: "Before the inspection", setting: "Intensive care", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honest records", "Raising concerns", "Integrity under pressure"],
  stem:
    "You are an F2 doctor in intensive care. An inspection is due next week. The audit nurse has found that hourly observations for one patient are missing for six hours of last Tuesday's night shift, when you were the doctor covering the unit.\n\n" +
    "As you reviewed the patient that night, she asks you to fill them in from memory, saying, \"They were probably normal, and it'll look terrible if they're blank.\"",
  options: [
    { text: "Decline, explaining that you can't fill in observations you don't have a record of.",
      brief: "Records must reflect what was actually measured.",
      detailed: "Writing in values from memory, a week later, would be guesswork presented as fact. Declining, and explaining why, keeps the record honest." },
    { text: "Suggest the gap is reported as an incident, so the reason can be looked into.",
      brief: "A missing record may mean missed observations, which matters for safety.",
      detailed: "A six-hour gap may mean observations weren't done, or weren't recorded. Reporting it means the reason can be found and addressed." },
    { text: "Let the nurse in charge know about the missing records.",
      brief: "The nursing lead should know, though this follows declining.",
      detailed: "Observations are usually recorded by nurses, so the nurse in charge needs to know. It ranks third because declining and reporting it come first." },
    { text: "Fill in only the values you are confident about, marking them as retrospective.",
      brief: "Late entries can be legitimate, but not observations reconstructed from memory a week later.",
      detailed: "Retrospective entries are acceptable when clearly marked and based on genuine knowledge, such as notes made at the time. Observation values remembered a week later aren't reliable." },
    { text: "Fill in the observations as asked, as they were probably normal.",
      brief: "Falsifies the record.",
      detailed: "This would create a false record before an inspection. It is dishonest and is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you keep records honest under pressure, and treat a gap in observations as a safety issue rather than an appearance problem.",
    keyDetails: "The observations are a week old and weren't recorded. An inspection is due. The nurse wants the gap filled.",
    reasoning: "{1} keeps the record honest, {2} treats the gap as a safety issue, and {3} informs the nursing lead. {4} is a reconstruction presented as a record, and {5} is falsification.",
    competing: "{4} looks honest because it's labelled as retrospective, but values remembered a week later aren't reliable enough to record as observations."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in records; Domain 1, keeping clear and accurate records made at the time." }
  ],
  tags: ["records", "falsification", "inspection", "intensive care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-138", letters: "CEH", format: "multiple_choice", difficulty: "moderate",
  title: "No scan tonight", setting: "General surgery", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Colleagues, culture and safety", "Knowledge, skills and development"],
  competencies: ["Escalating concerns", "Clinical reasoning", "Professional communication"],
  stem:
    "You are an F2 doctor on a surgical night shift. Mrs Clark, 72, has worsening abdominal pain two days after a colonoscopy. She is tender across her abdomen, her heart rate is 112, and her lactate is 3.1.\n\n" +
    "You suspect a perforation. The registrar, who is very busy in ED, says over the phone that it's probably constipation and that a CT can wait until the morning.",
  options: [
    // keyed
    { text: "Explain your findings to the registrar again, specifically.",
      brief: "Clear, specific information may change the decision.",
      detailed: "The registrar may not have taken in her heart rate, lactate and recent colonoscopy. Repeating them clearly, using a structured format such as SBAR, gives them the full picture." },
    { text: "Ask the registrar to come and review her.",
      brief: "A senior review in person may change the decision.",
      detailed: "Her findings justify a senior assessment. Asking the registrar to see her, when they can, is a reasonable request." },
    { text: "Tell the registrar that you'd like to discuss her with the on-call consultant.",
      brief: "Open escalation is appropriate when you remain worried about a sick patient.",
      detailed: "If you're still concerned, you can escalate further. Telling the registrar first keeps it open and respectful, and is better for the team than going behind their back." },
    // distractors
    { text: "Request the CT scan yourself, without discussing it further.",
      brief: "Goes around the registrar without telling them.",
      detailed: "You may be right that she needs a scan, but requesting it without discussion undermines the registrar and may not be accepted by radiology." },
    { text: "Accept the registrar's decision, as they are more experienced.",
      brief: "Seniority doesn't remove your responsibility to act on your concerns.",
      detailed: "The registrar's judgement deserves respect, but her findings are concerning, and you should make sure they've been fully considered." },
    { text: "Tell Mrs Clark that you think the registrar is wrong.",
      brief: "Undermines the team and may frighten her.",
      detailed: "Being honest with patients matters, but telling her you disagree with your senior isn't helpful and may cause distress." },
    { text: "Arrange an erect chest X-ray yourself to gather more evidence.",
      brief: "May help, but isn't the main issue and may be falsely reassuring.",
      detailed: "An erect chest X-ray can show free air, and requesting one is within your role. But a normal X-ray doesn't rule out perforation, and it doesn't address the need for senior review." },
    { text: "Document your disagreement in the notes and review her in the morning.",
      brief: "Documents the concern without acting on it.",
      detailed: "A record is important, but it doesn't help her tonight." }
  ],
  explanation: {
    issue: "This tests how you escalate a concern about a sick patient when a busy senior disagrees, clearly and respectfully.",
    keyDetails: "She has tachycardia, a raised lactate and abdominal tenderness after a colonoscopy. The registrar is busy and hasn't seen her.",
    reasoning: "{k1} gives the registrar the full picture, {k2} asks for a review, and {k3} escalates openly. The distractors go around the registrar ({d1}), accept a decision you're worried about ({d2}, {d5}), involve the patient inappropriately ({d3}), or rely on an investigation that may mislead ({d4}).",
    competing: "{d4} is the hard distractor: an erect chest X-ray is a reasonable test, but it can be falsely reassuring and doesn't replace a senior review. Whatever the decision about imaging, you should also start appropriate treatment for possible sepsis while you escalate."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, escalating concerns about patients' safety." },
    { ref: "news2", note: "Escalating care for patients with abnormal physiology." }
  ],
  tags: ["escalation", "seniors", "perforation", "surgery"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-139", letters: "DBECA", format: "ranking", difficulty: "hard",
  title: "Old fractures on the X-ray", setting: "Orthopaedics", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Child safeguarding", "Documentation", "Communication with parents"],
  stem:
    "You are an F2 doctor in the fracture clinic. Isla, 11 months, has a clavicle fracture. Her parents say she fell from a changing table yesterday.\n\n" +
    "The radiologist's report also notes healing fractures of several ribs at the back of her chest, probably a few weeks old. Her parents haven't mentioned any earlier injury.",
  options: [
    { text: "Discuss Isla urgently with the on-call paediatric registrar and the safeguarding team.",
      brief: "Unexplained rib fractures in an infant need urgent safeguarding assessment.",
      detailed: "Posterior rib fractures in a baby are strongly associated with non-accidental injury and need urgent assessment by paediatrics and the safeguarding team, who will decide on further tests and involving children's social care." },
    { text: "Record the history her parents gave, and the X-ray findings, carefully.",
      brief: "An accurate record is vital in any safeguarding process.",
      detailed: "Writing down exactly what the parents said, when, and what the X-ray shows supports a fair assessment. It ranks second because getting the right people involved comes first." },
    { text: "Explain to her parents that the X-ray shows older injuries that need to be looked into.",
      brief: "Being open with parents is usually right, but how and when should be agreed with seniors.",
      detailed: "Parents should usually be told about safeguarding concerns, unless that would put the child at risk. The decision about what to say, and when, should be made with the paediatric and safeguarding team." },
    { text: "Ask her parents directly whether they have hurt her.",
      brief: "Accusatory, and could compromise the assessment.",
      detailed: "This may feel direct and honest, but it's accusatory before any assessment, and could put Isla at risk if they take her home." },
    { text: "Arrange fracture clinic follow-up for the clavicle, as the rib fractures are healing.",
      brief: "Misses a serious safeguarding concern.",
      detailed: "The rib fractures may be healing, but their presence in an infant, unexplained, is a major warning sign. Sending her home could put her at serious risk." }
  ],
  explanation: {
    issue: "This tests whether you recognise a serious safeguarding sign in an infant and act through the proper routes.",
    keyDetails: "Isla is 11 months old. Posterior rib fractures are highly suspicious. The parents haven't given an explanation.",
    reasoning: "{1} gets urgent specialist involvement, {2} records the facts, and {3} is open with the parents but should be agreed with seniors. {4} is accusatory, and {5} misses the concern.",
    competing: "This is hard because {2} and {3} are both appropriate. The key puts the record first because it's always needed, whereas what to tell the parents, and when, depends on the safeguarding team's advice."
  },
  refs: [
    { ref: "workingtogether", note: "Acting when a child may be at risk of significant harm." },
    { ref: "children", note: "Doctors' responsibilities to protect children." }
  ],
  tags: ["child safeguarding", "non-accidental injury", "fractures", "infants"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-140", letters: "ABD", format: "multiple_choice", difficulty: "moderate",
  title: "Just put it in my logbook", setting: "Non-clinical (training)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honest records", "Supporting colleagues", "Training"],
  stem:
    "You are an F2 doctor. Dr Hughes, another F2, is applying for core surgical training and needs more logged procedures. She asks you to confirm in her e-logbook that she performed a skin lesion excision last week.\n\n" +
    "You were there, but she observed while you did the procedure.",
  options: [
    // keyed
    { text: "Explain that you can't confirm she performed it, as she observed.",
      brief: "The logbook must reflect what she actually did.",
      detailed: "Logbooks are used to judge applicants' experience. Confirming she performed a procedure she observed would be dishonest." },
    { text: "Suggest she logs it accurately, as observed.",
      brief: "Logbooks usually record observed procedures too.",
      detailed: "Many logbooks have a category for procedures observed or assisted. Logging it accurately still shows her interest and experience." },
    { text: "Offer to help her find chances to do it under supervision.",
      brief: "Helps her build genuine experience.",
      detailed: "Supporting her to gain real experience helps her application honestly, and is a constructive response to her request." },
    // distractors
    { text: "Confirm it, as she has done similar procedures before.",
      brief: "Previous experience doesn't change what happened in this case.",
      detailed: "She may be competent, which makes this tempting, but the record would still be false." },
    { text: "Confirm it as 'assisted', as a compromise.",
      brief: "She didn't assist either.",
      detailed: "This feels like a middle ground, but she observed, so it would still be inaccurate." },
    { text: "Report her to the training programme director for asking.",
      brief: "Disproportionate for a request you can simply decline.",
      detailed: "Repeated attempts to falsify records would need reporting, but a single request is best dealt with by declining and explaining." },
    { text: "Tell other colleagues that she asked you to falsify her logbook.",
      brief: "Unprofessional and damaging.",
      detailed: "This would damage her reputation and doesn't address the issue." },
    { text: "Agree, but only this once.",
      brief: "Falsification is still falsification.",
      detailed: "A one-off doesn't make a false record acceptable." }
  ],
  explanation: {
    issue: "This tests whether you maintain honesty in training records when a colleague asks for help with her application.",
    keyDetails: "She observed the procedure. The logbook will be used for her application. You are being asked to confirm it.",
    reasoning: "{k1} keeps the record honest, {k2} suggests an accurate alternative, and {k3} supports her honestly. The distractors falsify the record ({d1}, {d2}, {d5}), or respond disproportionately or unprofessionally ({d3}, {d4}).",
    competing: "{d2} is the tempting distractor, as it seems a compromise, but it's still inaccurate."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in records and applications." }
  ],
  tags: ["logbooks", "applications", "probity", "colleagues"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-141", letters: "ADBCE", format: "ranking", difficulty: "moderate",
  title: "A research opportunity", setting: "Non-clinical (training)", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Managing your training", "Teamwork", "Honesty"],
  stem:
    "You are an F2 doctor. A professor offers you the chance to join a research project, which would strengthen your application for academic training. It involves four half-day sessions over the next month.\n\n" +
    "Three of the sessions clash with your rostered ward shifts, and your team is already short of doctors.",
  options: [
    { text: "Discuss the opportunity with your educational supervisor.",
      brief: "Your supervisor can advise, and may support study leave.",
      detailed: "Your supervisor can help you weigh the opportunity against your training needs and may support a request for study leave, which is the proper route for time out of clinical work. This is the natural first step." },
    { text: "Ask the rota coordinator whether any shifts could be swapped.",
      brief: "Proper swaps keep the ward staffed while allowing you to take part.",
      detailed: "Rota coordinators can often arrange swaps, keeping the ward staffed. It ranks second because your supervisor's support, and any study leave, come first." },
    { text: "Ask the professor whether the sessions could be scheduled differently.",
      brief: "May help, but depends on the research team's flexibility.",
      detailed: "There may be some flexibility, which would avoid the clash. It ranks third because you can't rely on it." },
    { text: "Decline the opportunity, as service commitments come first.",
      brief: "Safe, but gives up an opportunity that could probably be arranged.",
      detailed: "Putting patients first is important, but this may be a valuable opportunity that could be fitted in with planning. Declining without trying is overly cautious." },
    { text: "Call in sick on the days that clash.",
      brief: "Dishonest, and leaves the ward short.",
      detailed: "This is dishonest and puts extra pressure on an already short-staffed team. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you balance a training opportunity against service commitments, honestly and through proper routes.",
    keyDetails: "The opportunity is valuable. Three sessions clash with shifts. The team is short-staffed.",
    reasoning: "{1} gets advice and support for study leave, {2} looks for proper swaps, and {3} explores flexibility. {4} gives up too readily, and {5} is dishonest.",
    competing: "Some would go straight to the rota coordinator, as swaps are the practical fix. The key starts with your supervisor because study leave for research is agreed through them, and their support makes any rota change easier."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, managing your development; Domain 4, honesty with employers." }
  ],
  tags: ["research", "rotas", "study leave", "training"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-142", letters: "ACH", format: "multiple_choice", difficulty: "easy",
  title: "No amputation", setting: "General surgery", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting autonomy", "Exploring concerns", "Informed decisions"],
  stem:
    "You are an F2 doctor on a vascular surgery ward. Mr Ross, 68, has a gangrenous foot from peripheral arterial disease and diabetes. The consultant has recommended a below-knee amputation, without which the infection is likely to spread and could be fatal.\n\n" +
    "Mr Ross says firmly that he won't have his leg amputated. He seems alert and understands what he has been told.",
  options: [
    // keyed
    { text: "Ask him about his reasons and what worries him most.",
      brief: "Understanding his reasons may reveal concerns that can be addressed.",
      detailed: "He may fear losing independence, pain, or how others will see him. Exploring this shows respect and may reveal information or support that would help him decide." },
    { text: "Make sure he understands the likely consequences of refusing, and any alternatives.",
      brief: "An informed refusal needs a clear understanding of the risks.",
      detailed: "He should understand that the infection may spread and could be fatal, and what other options, including palliative care, might be available. This supports an informed decision, whatever he chooses." },
    { text: "Let the consultant know, so they can discuss it with him further.",
      brief: "A decision this serious needs senior involvement.",
      detailed: "The consultant may want to discuss it again, offer alternatives, or involve other specialists. Keeping them informed is essential." },
    // distractors
    { text: "Ask his family to persuade him to change his mind.",
      brief: "Pressure from family isn't appropriate, and involves them without his consent.",
      detailed: "Families can support patients, but enlisting them to change his mind puts pressure on him and may breach his confidentiality." },
    { text: "Arrange the amputation in his best interests, as refusing could be fatal.",
      brief: "A patient with capacity can refuse life-saving treatment.",
      detailed: "Best-interests decisions apply only to people who lack capacity. He appears to have capacity, so his refusal must be respected." },
    { text: "Accept his decision and document it, without further discussion.",
      brief: "Respects autonomy, but misses the chance to make sure his decision is informed.",
      detailed: "His decision must be respected, but a decision this serious deserves a careful conversation to make sure he understands and to address his concerns." },
    { text: "Ask the psychiatry team to assess him, as refusing life-saving treatment suggests he lacks capacity.",
      brief: "An unwise decision isn't evidence of a lack of capacity.",
      detailed: "Capacity should be assessed if there's doubt, but refusing treatment, even life-saving treatment, doesn't on its own mean someone lacks capacity." },
    { text: "Tell him he will die a painful death if he doesn't agree.",
      brief: "Coercive, and may not be accurate.",
      detailed: "He should understand the risks, but framing them this way is frightening and coercive, and palliative care can manage pain." }
  ],
  explanation: {
    issue: "This tests how you respond when a patient with capacity refuses life-saving treatment: exploring his reasons and making sure his decision is informed.",
    keyDetails: "He appears to have capacity. The consequences of refusing could be fatal. His reasons are unknown.",
    reasoning: "{k1} explores his reasons, {k2} makes sure his decision is informed, and {k3} involves the consultant. The distractors pressure or coerce him ({d1}, {d5}), override his decision ({d2}), close the discussion too early ({d3}), or question his capacity without reason ({d4}).",
    competing: "{d3} looks like respect for autonomy, but a decision this serious deserves a fuller conversation first."
  },
  refs: [
    { ref: "consent", note: "Respecting the decisions of patients with capacity, including refusal of life-saving treatment." },
    { ref: "mca1", note: "An unwise decision doesn't mean a lack of capacity." }
  ],
  tags: ["refusal", "capacity", "amputation", "surgery"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-143", letters: "CBDEA", format: "ranking", difficulty: "moderate",
  title: "The patient in the next bed", setting: "Intensive care", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Confidentiality", "Courtesy", "Communication"],
  stem:
    "You are an F2 doctor in intensive care. Mrs Moore is visiting her husband. As you finish speaking with her, she points to the next bed and says, \"That's Tom Fielding — he's a family friend. How is he doing? His wife hasn't been answering her phone.\"\n\n" +
    "Mr Fielding is seriously ill.",
  options: [
    { text: "Politely explain that you can't discuss other patients.",
      brief: "Kind and clear, and protects his confidentiality.",
      detailed: "Mrs Moore's concern is genuine, but Mr Fielding's information is confidential. Explaining this politely, without confirming anything about his condition, is the right response." },
    { text: "Suggest she keeps trying his wife, who can decide what to share.",
      brief: "Points her to the person who can share information.",
      detailed: "Mr Fielding's wife can decide what to share with friends. Suggesting this helps Mrs Moore without breaching confidentiality." },
    { text: "Offer to let his nurse know that a friend asked after him.",
      brief: "A kind gesture that passes on her concern without disclosing anything.",
      detailed: "His family may appreciate knowing friends are asking. Passing this on, without sharing anything with Mrs Moore, is harmless and kind. It ranks third because it's less important than protecting his confidentiality." },
    { text: "Tell her he is being well looked after, without giving details.",
      brief: "Still discusses his care with someone not entitled to it.",
      detailed: "This seems harmless and kind, but it still discusses his care with someone who isn't entitled to information about him, and may give a misleading impression of how he is." },
    { text: "Tell her how he is, as she is a family friend.",
      brief: "Breaches his confidentiality.",
      detailed: "Being a friend doesn't entitle her to his information. This is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you protect a patient's confidentiality when someone close to him asks, kindly and clearly.",
    keyDetails: "Mrs Moore is a friend, not family. Mr Fielding is seriously ill. His wife can decide what to share.",
    reasoning: "{1} protects his confidentiality, {2} points her to his wife, and {3} passes on her concern. {4} and {5} both disclose information, with {5} disclosing more.",
    competing: "Some would see {4} as harmless, but any information about his condition is confidential."
  },
  refs: [
    { ref: "confidentiality", note: "Not sharing information about patients with friends without consent." }
  ],
  tags: ["confidentiality", "visitors", "intensive care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-144", letters: "EFG", format: "multiple_choice", difficulty: "hard",
  title: "Running over time", setting: "General practice", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Responding to feedback", "Consultation skills", "Time management"],
  stem:
    "You are an F2 doctor in a GP practice. Your GP trainer tells you that your consultations regularly run 10 minutes over, that patients are waiting too long, and that you need to improve.\n\n" +
    "You feel your thoroughness is important for patient safety, and you're worried about missing something.",
  options: [
    // keyed
    { text: "Ask your trainer to observe some of your consultations.",
      brief: "Specific observation shows where you can be more efficient.",
      detailed: "Watching your consultations, with patients' consent, can show where time goes, such as long histories or unstructured endings. This gives you specific things to work on." },
    { text: "Work on techniques such as agenda-setting and focused history-taking.",
      brief: "Better structure saves time without losing safety.",
      detailed: "Consultation skills such as agreeing the agenda early and focusing the history help you work efficiently while staying thorough. These skills improve with practice." },
    { text: "Ask your trainer whether longer appointments would be appropriate for now.",
      brief: "Many practices give F2s longer slots while they develop.",
      detailed: "It's common for F2s to have longer appointments while they gain experience. Asking about this is reasonable, alongside working on your skills." },
    // distractors
    { text: "Keep consulting exactly as you are, as patient safety matters more than waiting times.",
      brief: "Safety matters, but so do patients kept waiting.",
      detailed: "Your concern for safety is right, but long waits affect other patients and colleagues, and the feedback suggests you can improve." },
    { text: "Cut consultations to ten minutes, whatever the patient's problem.",
      brief: "Rigid limits risk missing important problems.",
      detailed: "This would meet targets, but cutting consultations short regardless of complexity could affect safety." },
    { text: "Ask reception to book you only simple problems.",
      brief: "Avoids the problem and limits your learning.",
      detailed: "This may reduce overruns, but limits your experience and doesn't address the underlying issue." },
    { text: "Stop safety-netting, as it takes time.",
      brief: "Safety-netting is an essential part of a consultation.",
      detailed: "Safety-netting can be done efficiently, but stopping it would put patients at risk." },
    { text: "Work through your lunch breaks to catch up.",
      brief: "Doesn't address the cause, and isn't sustainable.",
      detailed: "This may help you catch up, but it doesn't address why you're running late, and will tire you." }
  ],
  explanation: {
    issue: "This tests how you respond to feedback about your efficiency, improving your skills without compromising safety.",
    keyDetails: "The feedback is specific. You value thoroughness. Patients are waiting too long.",
    reasoning: "{k1} identifies where time goes, {k2} improves your skills, and {k3} looks for reasonable adjustment while you develop. The distractors ignore the feedback ({d1}), compromise safety ({d2}, {d4}), avoid the issue ({d3}), or are unsustainable ({d5}).",
    competing: "{d1} is the hard distractor: your concern for safety is valid, but efficiency can be improved without losing it."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, reflecting on feedback and developing your practice." }
  ],
  tags: ["feedback", "consultation skills", "general practice", "time management"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-145", letters: "BDAC", format: "ranking", difficulty: "moderate",
  title: "\"There's no point\"", setting: "Elderly care ward", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Recognising depression", "Risk assessment", "Compassion"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mrs Bell, 81, is recovering from a fall. Her husband of 55 years died two months ago.\n\n" +
    "The nurses say she has eaten very little for several days. When you ask her about it, she says quietly, \"There's no point any more.\"",
  options: [
    { text: "Sit with her, and gently ask how she has been feeling.",
      brief: "Her words may reflect grief, depression, or suicidal thoughts, and need exploring.",
      detailed: "Older people who have been recently bereaved are at higher risk of depression and suicide. Asking gently and directly about how she feels, including about suicidal thoughts, is the only way to know, and doesn't increase risk." },
    { text: "Discuss her with your senior, and consider a referral to the liaison psychiatry team.",
      brief: "She may need specialist assessment.",
      detailed: "Her low mood and poor intake may need specialist assessment and support. It ranks second because talking to her first helps you understand what she needs." },
    { text: "Ask the dietitian to review her intake.",
      brief: "Her nutrition matters, but the cause needs addressing.",
      detailed: "Poor intake in an older person is a concern, and a dietitian can help. It ranks third because her mood is the likely cause." },
    { text: "Encourage her to eat, explaining that she needs to keep her strength up.",
      brief: "Well meant, but misses what she is telling you.",
      detailed: "This is a natural response, but it doesn't address what lies behind \"there's no point\"." }
  ],
  explanation: {
    issue: "This tests whether you recognise possible depression and suicide risk in a bereaved older patient, and respond with care.",
    keyDetails: "She was recently widowed. She has stopped eating. She says there's no point.",
    reasoning: "{1} explores her feelings and risk, {2} gets specialist help, and {3} addresses her nutrition. {4} misses what she is telling you.",
    competing: "Some would refer to the dietitian earlier, given her poor intake, but addressing the cause comes first."
  },
  refs: [
    { ref: "ng225", note: "Asking about suicidal thoughts and responding to people at risk." }
  ],
  tags: ["bereavement", "depression", "older people", "suicide risk"]
}
];
