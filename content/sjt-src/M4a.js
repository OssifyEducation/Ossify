// Mock 4, part 1 (sjt-351 to sjt-362). Pool mock-4: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-4";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-351", pool, letters: "DEBCA", format: "ranking", difficulty: "moderate",
  title: "The wrong label", setting: "General surgery", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Trust and professionalism", "Safety and quality"],
  competencies: ["Candour", "Sample labelling", "Owning mistakes"],
  stem:
    "You are an F2 doctor in general surgery. This morning you took blood from Mr Morgan, 70, but labelled the tubes with the details of the patient in the next bed. The laboratory noticed the mismatch and rejected the samples, so no wrong results were issued.\n\n" +
    "Mr Morgan needs the bloods repeated before his operation tomorrow. He disliked having blood taken this morning.",
  options: [
    { text: "Explain the mistake to Mr Morgan, apologise and retake them.",
      brief: "He is entitled to know why he needs another blood test.",
      detailed: "He will have to go through another blood test because of your error. Explaining honestly and apologising respects him, and repeating the test promptly keeps his operation on track. It ranks first." },
    { text: "Report the labelling error through the incident reporting system.",
      brief: "Supports learning, even though no harm resulted.",
      detailed: "Labelling errors can cause serious harm, such as transfusion errors. Reporting near misses helps the ward reduce the risk. It ranks second." },
    { text: "Change your practice so you always label tubes at the bedside.",
      brief: "Prevents a repeat.",
      detailed: "Labelling at the bedside, after checking identity, is the main protection against this error. Changing your practice is important but less immediate than the actions above. It ranks third." },
    { text: "Ask the phlebotomist to repeat the bloods without explaining why.",
      brief: "Avoids telling him about your error.",
      detailed: "This gets the test done but leaves him unaware of why he needs another one. It ranks fourth." },
    { text: "Tell Mr Morgan the laboratory lost his first samples.",
      brief: "A lie to cover your mistake.",
      detailed: "This is dishonest and shifts the blame to colleagues. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you are open about a minor error that affects a patient, even when it caused no lasting harm.",
    keyDetails: "The error was yours. It was caught before harm. He needs another blood test. He disliked the first one.",
    reasoning: "{1} is honest and puts it right, {2} supports learning, and {3} prevents a repeat. {4} hides the error, and {5} lies about it.",
    competing: "{2} and {3} are close. The key ranks reporting higher because it helps the whole ward, not just you."
  },
  refs: [
    { ref: "candour", note: "Being open with patients when something goes wrong, including near misses that affect them." },
    { ref: "psirf", note: "Reporting incidents and near misses." }
  ],
  tags: ["candour", "labelling", "near miss", "surgery"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-352", pool, letters: "CEF", format: "multiple_choice", difficulty: "easy",
  title: "Two visits", setting: "Out-of-hours / community", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Safety and quality", "Knowledge, skills and development"],
  competencies: ["Prioritisation", "Recognising emergencies", "Palliative care"],
  stem:
    "You are an F2 doctor on an out-of-hours GP shift. You have two home visits waiting. Mr Patel's wife reports that 40 minutes ago his face dropped on one side and his right arm became weak.\n\n" +
    "Mr Lloyd is dying at home with cancer and is in pain. His anticipatory medicines are in the house, and the district nurses are available tonight.",
  options: [
    // keyed
    { text: "Tell Mr Patel's wife to call 999 now.",
      brief: "A suspected stroke needs an ambulance and hospital, not a GP visit.",
      detailed: "Sudden facial droop and arm weakness suggest a stroke. Time-critical treatment is only available in hospital, so an ambulance is needed at once." },
    { text: "Ask the district nurses to give Mr Lloyd his pain relief.",
      brief: "Relieves his pain quickly, using the plan already in place.",
      detailed: "His anticipatory medicines are there for this situation. The district nurses can give a dose promptly while you travel." },
    { text: "Visit Mr Lloyd to review his symptoms.",
      brief: "He needs a medical review of his pain.",
      detailed: "Even if a dose helps, his symptom plan may need adjusting. A visit lets you assess him and support his family." },
    // distractors
    { text: "Visit Mr Patel first, then Mr Lloyd.",
      brief: "A GP visit delays stroke treatment.",
      detailed: "Seeing him yourself first would delay his transfer to hospital, where time-critical treatment is available." },
    { text: "Ask Mr Lloyd's family to call 999 if his pain gets worse.",
      brief: "Risks an unwanted admission for a dying patient.",
      detailed: "His pain can be managed at home with his anticipatory medicines. Calling an ambulance may lead to an admission he doesn't want." },
    { text: "Ask Mr Patel's wife to bring him to the GP surgery in the morning.",
      brief: "A dangerous delay for a possible stroke.",
      detailed: "Waiting until morning could mean he misses treatment that might prevent lasting disability." },
    { text: "Advise Mr Lloyd's family to give him paracetamol until you arrive.",
      brief: "Unlikely to help, when stronger medicines are available.",
      detailed: "Paracetamol is unlikely to control severe cancer pain when his prescribed medicines are in the house." },
    { text: "Ask the out-of-hours base to send another doctor to Mr Patel.",
      brief: "He needs an ambulance, not another GP.",
      detailed: "A second doctor would still delay his transfer to hospital." }
  ],
  explanation: {
    issue: "This tests whether you recognise an emergency that needs hospital care, and use the resources already in place for a palliative patient.",
    keyDetails: "Mr Patel has symptoms of stroke that started 40 minutes ago. Mr Lloyd has anticipatory medicines and district nurse support.",
    reasoning: "{k1} gets Mr Patel to hospital fastest, {k2} relieves Mr Lloyd's pain quickly, and {k3} reviews him. The distractors delay stroke care ({d1}, {d3}, {d5}), risk an unwanted admission ({d2}), or under-treat his pain ({d4}).",
    competing: "{d1} may feel like doing more for Mr Patel, but a GP visit only delays the ambulance."
  },
  refs: [
    { ref: "eol", note: "Using anticipatory planning so dying patients are cared for where they wish." },
    { ref: "gmp", note: "Domain 1, prioritising according to clinical need." }
  ],
  tags: ["stroke", "palliative care", "out-of-hours", "prioritisation"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-353", pool, letters: "EDABC", format: "ranking", difficulty: "moderate",
  title: "No driving", setting: "Cardiology / respiratory", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication", "Safety and quality"],
  competencies: ["Empathy", "Driving rules", "Practical support"],
  stem:
    "You are an F2 doctor in cardiology. Mr Kane, 46, had an implantable defibrillator fitted after a cardiac arrest. Earlier today the cardiologist explained that he must not drive for some months and must tell the DVLA.\n\n" +
    "When you see him, he is distressed. He works as a delivery van driver and asks, \"How am I supposed to support my family?\"",
  options: [
    { text: "Acknowledge how hard this is, and ask how it affects his family.",
      brief: "He needs to feel heard before practical planning.",
      detailed: "He has had life-changing news. Acknowledging his distress and asking about the impact helps him feel heard and shows you what support he needs. It ranks first." },
    { text: "Check he understands that he mustn't drive and must tell the DVLA.",
      brief: "The safety message must be understood, however hard it is.",
      detailed: "He may not have taken in everything earlier. Making sure he understands the rules protects him and others. It ranks second because it comes better after acknowledging his distress." },
    { text: "Suggest he talks to his employer about other duties he could do for now.",
      brief: "Practical help with his main worry.",
      detailed: "His employer may be able to offer other work, and occupational health or a welfare adviser may help. It ranks third." },
    { text: "Tell him the rules for van drivers are often ignored.",
      brief: "Undermines a safety requirement.",
      detailed: "This encourages him to break rules that protect him and the public. It ranks fourth only because it is less direct than the last option." },
    { text: "Suggest he keeps driving until he finds other work.",
      brief: "Unsafe and unlawful.",
      detailed: "If he lost consciousness while driving, he could kill himself or others. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to a patient's distress about life-changing news, while keeping a safety message clear.",
    keyDetails: "He must not drive. He drives for a living. He has already been told the rules. He is distressed about money.",
    reasoning: "{1} responds to his distress, {2} checks the safety message, and {3} helps practically. {4} undermines the rules, and {5} actively encourages unsafe driving.",
    competing: "Some would put the safety message first. He has already been told, so the key responds to his distress first and then checks his understanding."
  },
  refs: [
    { ref: "dvla", note: "Driving rules after an implantable cardioverter defibrillator." },
    { ref: "gmp", note: "Domain 2, communicating with compassion." }
  ],
  tags: ["driving", "DVLA", "bad news", "cardiology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-354", pool, letters: "CDG", format: "multiple_choice", difficulty: "hard",
  title: "Ten times the dose", setting: "Paediatrics", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Safety and quality", "Trust and professionalism"],
  competencies: ["Patient safety", "Incident reporting", "Supporting colleagues"],
  stem:
    "You are an F2 doctor in paediatrics. Checking the chart of Jack, 2, you notice that the F1, Dr Lee, has prescribed ten times the correct dose of gentamicin. The nurse hasn't yet drawn it up.\n\n" +
    "Dr Lee is mortified. She begs you not to report it, saying she had a minor prescribing concern raised last month and is worried about her training.",
  options: [
    // keyed
    { text: "Make sure the nurse knows not to give the dose.",
      brief: "Preventing harm comes first.",
      detailed: "A tenfold overdose of gentamicin could cause serious kidney damage and deafness. Stopping it from being given is the first priority." },
    { text: "Correct the prescription with Dr Lee, and discuss the error.",
      brief: "Fixes the error and supports her learning.",
      detailed: "Working through it together corrects the dose and helps her understand what went wrong, such as a decimal error." },
    { text: "Report it as a near miss, explaining it's for learning.",
      brief: "A serious near miss should be reported.",
      detailed: "Reporting helps the ward learn, for example about checks for high-risk drugs. Explaining its purpose may ease her fear." },
    // distractors
    { text: "Agree to keep it between the two of you, as no harm was done.",
      brief: "Hides a serious near miss.",
      detailed: "No harm was done, but the ward can't learn from errors no one knows about. Concealing it isn't honest." },
    { text: "Tell the consultant instead of filing an incident report.",
      brief: "Telling a senior helps, but doesn't replace reporting.",
      detailed: "The consultant may need to know, but reporting is the system that allows learning across the ward." },
    { text: "Tell Dr Lee she isn't safe to prescribe for children.",
      brief: "Harsh and unfounded on one error.",
      detailed: "One error, however serious, doesn't mean she is unsafe. This undermines her without helping her improve." },
    { text: "Report Dr Lee to her educational supervisor as a concern.",
      brief: "Treats a learning event as a disciplinary one.",
      detailed: "Her supervisor may learn of it through the incident system, but framing it as a concern about her is disproportionate." },
    { text: "Correct the prescription yourself and move on.",
      brief: "Fixes the dose but misses the learning.",
      detailed: "She needs to know about the error to avoid repeating it." }
  ],
  explanation: {
    issue: "This tests whether you prevent harm and report a serious near miss, while treating a colleague fairly and supportively.",
    keyDetails: "The dose was ten times too high. It hasn't been given. She is frightened about her training. She asks you not to report it.",
    reasoning: "{k1} prevents harm, {k2} corrects the error with her, and {k3} reports it for learning. The distractors conceal it ({d1}, {d5}), substitute an informal route ({d2}), are harsh ({d3}), or are disproportionate ({d4}).",
    competing: "{d2} feels like a reasonable compromise, but a serious near miss should go through the reporting system so the ward can learn."
  },
  refs: [
    { ref: "psirf", note: "Reporting near misses to support learning, not blame." },
    { ref: "candour", note: "Openness about errors and near misses within teams." }
  ],
  tags: ["near miss", "prescribing error", "paediatrics", "colleagues"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-355", pool, letters: "BECDA", format: "ranking", difficulty: "moderate",
  title: "A changed plan", setting: "Intensive care", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Patients, partnership and communication", "Collaboration, teamwork and leadership"],
  competencies: ["Continuity", "Communication with families", "Teamwork"],
  stem:
    "You are an F2 doctor in intensive care. An hour ago, you and the day consultant met Mr Ward's family and agreed to continue full treatment for 48 hours and then review.\n\n" +
    "The night consultant has just reviewed Mr Ward and says treatment should be withdrawn tonight. She hasn't seen the note of the family meeting.",
  options: [
    { text: "Tell the night consultant what was agreed with the family.",
      brief: "She needs this information before making her decision.",
      detailed: "She may not know what the family were told. Sharing it lets her make her decision with the full picture. It ranks first." },
    { text: "Ask her to speak to the family before any change to the plan.",
      brief: "The family should hear about any change from a senior.",
      detailed: "If the plan changes, the family should be told by the consultant, with an explanation. It ranks second because she may change her view once she knows what was agreed." },
    { text: "Make sure the family meeting is clearly documented.",
      brief: "Helps future clinicians understand what was agreed.",
      detailed: "Clear documentation prevents the same confusion again. It ranks third." },
    { text: "Phone the family yourself to tell them the plan may change.",
      brief: "A contested change shouldn't be passed on by you.",
      detailed: "This would alarm them before any decision is made, and it isn't your role to explain a consultant's change of plan." },
    { text: "Start withdrawing treatment tonight, and let the day team update the family.",
      brief: "Breaks the agreement and their trust.",
      detailed: "Withdrawing treatment an hour after agreeing otherwise, and leaving the family to hear about it later, would be a serious breach of trust. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you make sure information about agreements with families is passed on, so that changes are made openly and fairly.",
    keyDetails: "A plan was agreed with the family an hour ago. The night consultant hasn't seen the note. She wants to change the plan.",
    reasoning: "{1} shares the agreement, {2} makes sure the family is involved, and {3} documents it. {4} alarms the family prematurely, and {5} breaks their trust.",
    competing: "{1} and {2} work together. The key puts sharing the information first because it may change her view."
  },
  refs: [
    { ref: "eol", note: "Involving families in decisions about treatment towards the end of life." },
    { ref: "gmp", note: "Domain 3, sharing information with colleagues." }
  ],
  tags: ["handover", "intensive care", "families", "continuity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-356", pool, letters: "ABF", format: "multiple_choice", difficulty: "moderate",
  title: "\"Can you help me die?\"", setting: "General practice", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["End-of-life conversations", "Exploring concerns", "Legal limits"],
  stem:
    "You are an F2 doctor in a GP practice. Mr Shaw, 60, has motor neurone disease, which is progressing. He can still speak but is losing the use of his arms.\n\n" +
    "He asks you, \"When it gets bad, can you help me end my life?\" He says he is frightened of choking and of being a burden to his wife.",
  options: [
    // keyed
    { text: "Ask more about what he fears and why.",
      brief: "His fears may be specific, and many can be addressed.",
      detailed: "Fear of choking, loss of control and being a burden are common in motor neurone disease. Exploring them helps you understand his request and what support could help." },
    { text: "Explain honestly that you can't help him end his life.",
      brief: "Honest about the limits of what a doctor can do.",
      detailed: "Assisting suicide is a criminal offence in England. Being clear and honest, while staying engaged with him, is better than avoiding the question." },
    { text: "Discuss how his future care and symptoms can be planned.",
      brief: "Shows that his fears can be addressed.",
      detailed: "Symptom control, specialist palliative care and advance care planning, including decisions about treatments he would refuse, can address many of his fears." },
    // distractors
    { text: "Change the subject, as it isn't something you can discuss.",
      brief: "Avoids a conversation he needs.",
      detailed: "You can't help him end his life, but you can and should discuss his fears." },
    { text: "Give him information about clinics abroad.",
      brief: "Could amount to encouraging or assisting.",
      detailed: "Doctors must not encourage or assist suicide. Providing this kind of information goes beyond explaining the law." },
    { text: "Tell him you disagree with assisted dying on moral grounds.",
      brief: "Your personal views shouldn't shape the conversation.",
      detailed: "You may have views, but sharing them in a way that judges him isn't appropriate." },
    { text: "Refer him urgently to psychiatry for assessment.",
      brief: "His request doesn't, on its own, suggest mental illness.",
      detailed: "Depression should be considered, but wanting control over the end of life isn't itself a sign of mental illness." },
    { text: "Tell his wife what he has asked.",
      brief: "Breaches his confidentiality.",
      detailed: "He hasn't agreed to his wife being told. Encouraging him to talk to her himself is better." }
  ],
  explanation: {
    issue: "This tests how you respond to a request for help to die: honestly, within the law, and with real engagement with the person's fears.",
    keyDetails: "He has a progressive illness. He fears choking and being a burden. You can't legally help him end his life.",
    reasoning: "{k1} explores his fears, {k2} is honest about the law, and {k3} shows how his fears can be addressed. The distractors avoid the conversation ({d1}), cross a legal line ({d2}), judge him ({d3}), pathologise his request ({d4}), or breach confidentiality ({d5}).",
    competing: "{d4} might seem cautious, and depression should be considered, but a referral as the first response may feel like dismissal."
  },
  refs: [
    { ref: "eol", note: "Responding to patients who ask about ending their lives." },
    { ref: "beliefs", note: "Not imposing your personal beliefs on patients." }
  ],
  tags: ["end of life", "motor neurone disease", "assisted dying", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-357", pool, letters: "ACBED", format: "ranking", difficulty: "easy",
  title: "Pills for nights", setting: "Obstetrics & gynaecology", attribute: P,
  topic: "An impaired or unwell colleague",
  gmcDomains: ["Trust and professionalism", "Safety and quality"],
  competencies: ["Self-prescribing", "Supporting colleagues", "Patient safety"],
  stem:
    "You are an F2 doctor in obstetrics and gynaecology. Over coffee, your fellow F2, Dr Ahmed, tells you she has been prescribing herself zopiclone to sleep during the day between night shifts.\n\n" +
    "She says it helps, and she seems well at work.",
  options: [
    { text: "Talk to her privately about the risks of self-prescribing.",
      brief: "A direct, kind conversation is the first step.",
      detailed: "Doctors should avoid prescribing for themselves, especially drugs that can cause dependence and affect alertness. A private conversation lets her think about it. It ranks first." },
    { text: "Encourage her to see her GP about her sleep.",
      brief: "Her GP can help safely.",
      detailed: "Her GP can assess her sleep problems and prescribe, if needed, with proper oversight. It ranks second." },
    { text: "Suggest she talks to her supervisor about her night shift pattern.",
      brief: "May help address the cause.",
      detailed: "Her rota may be making sleep difficult. Her supervisor may be able to help. It ranks third." },
    { text: "Suggest she uses an over-the-counter sleep aid instead.",
      brief: "Avoids self-prescribing but doesn't get her proper help.",
      detailed: "This avoids prescribing for herself but still treats herself without advice." },
    { text: "Leave it, as she seems well at work.",
      brief: "Ignores a risk to her and possibly her patients.",
      detailed: "Self-prescribing a drug that can affect alertness and cause dependence is a concern, even if she seems well. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you raise a colleague's self-prescribing supportively, guiding her to appropriate care.",
    keyDetails: "She is self-prescribing a sedative. She seems well. The cause may be her shift pattern.",
    reasoning: "{1} raises it with her, {2} points her to her GP, and {3} addresses the cause. {4} still means self-treatment, and {5} ignores the risk.",
    competing: "{2} and {3} are close. The key puts her GP first because her own health comes before the rota."
  },
  refs: [
    { ref: "prescribing", note: "Avoiding prescribing for yourself." },
    { ref: "gmp", note: "Domain 4, looking after your own health." }
  ],
  tags: ["self-prescribing", "colleague health", "night shifts", "obstetrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-358", pool, letters: "BEH", format: "multiple_choice", difficulty: "moderate",
  title: "\"The consultant is in clinic\"", setting: "General medical ward", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development", "Patients, partnership and communication"],
  competencies: ["Recognising limits", "Breaking bad news", "Seeking support"],
  stem:
    "You are an F2 doctor on a general medical ward. A biopsy has shown that Mr Tran, 59, has pancreatic cancer. The registrar asks you to tell him today because \"the consultant is in clinic\".\n\n" +
    "You have never given a diagnosis like this before and don't know what treatment options he will have.",
  options: [
    // keyed
    { text: "Tell the registrar you aren't ready to do this alone.",
      brief: "Honest about your limits.",
      detailed: "Breaking news of a serious cancer, without knowing the treatment options, is beyond your experience. Saying so honestly allows a better plan." },
    { text: "Ask if a senior can lead the conversation, with you there.",
      brief: "Lets you learn, while Mr Tran gets the information he needs.",
      detailed: "Joining a senior lets you see how it is done and support Mr Tran, while making sure his questions are answered." },
    { text: "Ask the cancer nurse specialist to join you.",
      brief: "Specialist support for him and for you.",
      detailed: "Cancer nurse specialists are experienced in these conversations and can answer many questions and offer ongoing support." },
    // distractors
    { text: "Do it alone, as the team is busy.",
      brief: "Risks a poorly handled conversation.",
      detailed: "Without the right knowledge, you may not answer his questions, which can increase his distress." },
    { text: "Tell Mr Tran his results aren't back yet.",
      brief: "Untrue.",
      detailed: "This is a lie and would damage his trust when he finds out." },
    { text: "Wait until the consultant's ward round next week to tell him.",
      brief: "An unnecessary delay to important news.",
      detailed: "He is waiting for results. A week's delay would increase his anxiety and delay his care." },
    { text: "Ask the F1 to do it, as she has done one before.",
      brief: "Passes the task to someone even less experienced.",
      detailed: "This doesn't solve the problem and isn't fair to the F1 or to Mr Tran." },
    { text: "Give Mr Tran the biopsy report to read himself.",
      brief: "Impersonal and potentially very distressing.",
      detailed: "Reading a cancer diagnosis without support could be very distressing and leaves his questions unanswered." }
  ],
  explanation: {
    issue: "This tests whether you recognise when a task is beyond your competence and find a way to get it done well.",
    keyDetails: "It is a serious new diagnosis. You haven't given one before. You don't know the treatment options. Support is available.",
    reasoning: "{k1} is honest about your limits, {k2} keeps you involved with senior support, and {k3} brings specialist help. The distractors risk a poor conversation ({d1}), lie ({d2}), delay ({d3}), pass it on ({d4}), or are impersonal ({d5}).",
    competing: "{d1} may feel like being a team player, but Mr Tran deserves a conversation with someone who can answer his questions."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, working within your competence and asking for help." }
  ],
  tags: ["competence", "bad news", "cancer", "seeking help"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-359", pool, letters: "CBAD", format: "ranking", difficulty: "hard",
  title: "Grandmother first", setting: "Paediatrics", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Confidentiality", "Communication with families", "Sensitivity"],
  stem:
    "You are an F2 doctor in paediatrics. Ollie, 6, was brought in by his grandmother with thirst and weight loss, and tests show he has type 1 diabetes. His parents are driving to the hospital and will arrive in an hour.\n\n" +
    "His grandmother asks you to tell her the results first, so she can \"break it to them gently\".",
  options: [
    { text: "Explain kindly that his parents should hear first.",
      brief: "His parents have the right to hear about their child's diagnosis first.",
      detailed: "His parents have parental responsibility, and the diagnosis is theirs to hear first. Explaining kindly respects the grandmother's good intentions. It ranks first." },
    { text: "Offer to talk to her with his parents, if they agree.",
      brief: "Includes her, with the parents' consent.",
      detailed: "She may be an important source of support. Inviting her, with their agreement, respects everyone. It ranks second because it depends on the parents' wishes." },
    { text: "Ask her to wait outside until the parents arrive.",
      brief: "Dismissive of someone who has been caring for him.",
      detailed: "This is correct about the results but excludes her unkindly. It ranks third." },
    { text: "Tell her the diagnosis now, as she brought him in.",
      brief: "Shares information without the parents' consent.",
      detailed: "Even with good intentions, she doesn't have parental responsibility. Telling her first takes away the parents' right to hear it themselves. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you handle a well-meaning relative's request for information that belongs first to a child's parents.",
    keyDetails: "His grandmother brought him in. His parents are an hour away. She wants to break the news herself.",
    reasoning: "{1} declines kindly, and {2} includes her with consent. {3} is correct but unkind, and {4} shares information without consent.",
    competing: "Some would see telling her as reasonable, as Ollie needs urgent care either way. His treatment can start now, but the diagnosis should be discussed with his parents first."
  },
  refs: [
    { ref: "u18", note: "Sharing information with those with parental responsibility." },
    { ref: "confidentiality", note: "Sharing information with family members." }
  ],
  tags: ["confidentiality", "families", "paediatrics", "diabetes"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-360", pool, letters: "EGH", format: "multiple_choice", difficulty: "moderate",
  title: "Losing the signal", setting: "Obstetrics & gynaecology", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Safety and quality"],
  competencies: ["Equipment safety", "Raising concerns", "Escalation"],
  stem:
    "You are an F2 doctor on the labour ward. The midwives tell you that one of the CTG monitors keeps losing the fetal heart signal. They reported it a week ago but were told to \"manage\".\n\n" +
    "A woman in established labour, with risk factors that need continuous monitoring, is on that monitor now.",
  options: [
    // keyed
    { text: "Ask the midwife to move the woman to a working monitor.",
      brief: "She needs reliable continuous monitoring now.",
      detailed: "Continuous monitoring is recommended for her. A faulty monitor puts her baby at risk." },
    { text: "Report the faulty monitor as an incident.",
      brief: "Creates a formal record of the problem.",
      detailed: "Informal reports have been ignored. A formal report creates a record and triggers a review." },
    { text: "Raise the problem with the labour ward consultant.",
      brief: "A senior can make sure it's fixed or replaced.",
      detailed: "The consultant can escalate it and make sure the faulty monitor is withdrawn until repaired." },
    // distractors
    { text: "Tell the midwives to manage as they were told.",
      brief: "Accepts an unsafe situation.",
      detailed: "A monitor that loses the signal can't be relied on for women who need continuous monitoring." },
    { text: "Try to repair the monitor yourself.",
      brief: "Not your role, and it may not work.",
      detailed: "Equipment repairs should be done by the right technical staff." },
    { text: "Tell the woman the monitor is unreliable.",
      brief: "May alarm her without solving the problem.",
      detailed: "She should know if her monitoring changes, but the priority is to fix it." },
    { text: "Wait to see whether the signal drops again before acting.",
      brief: "Leaves her baby's monitoring unreliable.",
      detailed: "The problem is known and recurring." },
    { text: "Post about the faulty monitor in the junior doctors' group chat.",
      brief: "Not an effective or appropriate way to raise a concern.",
      detailed: "This doesn't reach the people who can fix it." }
  ],
  explanation: {
    issue: "This tests whether you act on an equipment problem that is putting a patient at risk, and make sure it is formally addressed.",
    keyDetails: "The monitor keeps losing the signal. It has been reported informally. A woman who needs continuous monitoring is on it.",
    reasoning: "{k1} protects the woman and her baby now, {k2} creates a formal record, and {k3} gets senior action. The distractors accept the risk ({d1}, {d4}), act outside your role ({d2}), alarm her ({d3}), or use the wrong route ({d5}).",
    competing: "{d3} seems honest, and she should know about changes, but moving her to a working monitor matters more."
  },
  refs: [
    { ref: "ng229", note: "Continuous fetal monitoring for women with risk factors." },
    { ref: "concerns", note: "Raising concerns about unsafe equipment." }
  ],
  tags: ["CTG", "equipment", "labour ward", "raising concerns"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-361", pool, letters: "ADCBE", format: "ranking", difficulty: "moderate",
  title: "A back injury on nights", setting: "Intensive care", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Trust and professionalism", "Safety and quality"],
  competencies: ["Self-care", "Honesty", "Safe working"],
  stem:
    "You are an F2 doctor on a night shift in intensive care. Helping to turn a patient, you feel a sharp pain in your lower back. You can walk, but it hurts to bend or lift.\n\n" +
    "There are four hours of the shift left, and you feel you shouldn't let the team down.",
  options: [
    { text: "Tell the registrar about your injury and that you may need to stop.",
      brief: "The team needs to know so they can plan safely.",
      detailed: "If you can't bend or lift safely, the team needs to know. The registrar can decide whether cover is needed. It ranks first." },
    { text: "Get your back assessed, for example in the Emergency Department today.",
      brief: "You need to know how serious it is.",
      detailed: "A back injury may need assessment. It ranks second because the team should know first." },
    { text: "Report the injury through the staff incident reporting system.",
      brief: "Records a work-related injury.",
      detailed: "This helps the trust understand the risk and supports you if problems continue. It ranks third." },
    { text: "Take painkillers and finish the shift.",
      brief: "May hide an injury that needs attention.",
      detailed: "You may be able to work, but without telling anyone you may be unable to help in an emergency." },
    { text: "Keep helping to turn patients to finish your tasks.",
      brief: "Risks further injury to you and the patient.",
      detailed: "Lifting with an injured back could make it worse and risk dropping a patient. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you put safety before the pressure not to let your team down.",
    keyDetails: "You are injured. You can't bend or lift. Four hours remain.",
    reasoning: "{1} tells the team, {2} gets you assessed, and {3} records the injury. {4} hides the problem, and {5} risks further harm.",
    competing: "Some would get assessed first. The key tells the registrar first so the team can plan."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, recognising when your health may affect your work." }
  ],
  tags: ["injury", "wellbeing", "intensive care", "night shift"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-362", pool, letters: "CDF", format: "multiple_choice", difficulty: "easy",
  title: "Hearing God", setting: "Psychiatry", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Cultural understanding", "Diagnostic care", "Respecting beliefs"],
  stem:
    "You are an F2 doctor on an inpatient psychiatric ward. Mr Mensah, 34, was admitted with severe depression. He tells you that during prayer he sometimes hears God speaking to him, which he says is normal in his church.\n\n" +
    "In the team meeting, a colleague describes this as \"religious delusions\" and suggests starting an antipsychotic.",
  options: [
    // keyed
    { text: "Ask Mr Mensah more about his beliefs and experiences.",
      brief: "Understanding the experience helps decide whether it is part of his illness.",
      detailed: "Spiritual experiences can be part of a person's faith. Asking about them helps distinguish them from symptoms." },
    { text: "Suggest the team considers his religious background.",
      brief: "Context is essential to diagnosis.",
      detailed: "Whether an experience is normal within his faith community affects whether it should be seen as a symptom." },
    { text: "Ask, with his consent, to talk to someone from his church.",
      brief: "Helps the team understand what is usual in his community.",
      detailed: "A faith leader or family member may help the team understand his experiences in context." },
    // distractors
    { text: "Agree with your colleague and start the antipsychotic.",
      brief: "Premature without understanding the context.",
      detailed: "Starting treatment for psychosis without considering his faith could lead to misdiagnosis." },
    { text: "Tell Mr Mensah that hearing voices is a symptom of illness.",
      brief: "Dismisses his beliefs.",
      detailed: "This may damage your relationship with him and may be wrong." },
    { text: "Record that he has religious delusions.",
      brief: "Documents a conclusion that hasn't been reached.",
      detailed: "A label in his record could affect his care for years." },
    { text: "Avoid discussing religion with him.",
      brief: "Misses information that matters to his care.",
      detailed: "His faith may be important to him and to his recovery." },
    { text: "Ask the chaplain to decide whether his experiences are genuine.",
      brief: "This isn't a decision for the chaplain.",
      detailed: "The chaplain may help, but clinical judgement remains with the team." }
  ],
  explanation: {
    issue: "This tests whether you consider a patient's cultural and religious context before labelling an experience as a symptom.",
    keyDetails: "He has depression. He describes spiritual experiences as normal in his church. A colleague has labelled them delusions.",
    reasoning: "{k1} explores his experience, {k2} raises context with the team, and {k3} seeks information from his community. The distractors treat prematurely ({d1}), dismiss his beliefs ({d2}, {d4}), label him ({d3}), or hand clinical judgement to the chaplain ({d5}).",
    competing: "{d5} could be part of understanding his faith, but the diagnosis remains a clinical decision."
  },
  refs: [
    { ref: "beliefs", note: "Respecting patients' beliefs." },
    { ref: "equality", note: "Religion or belief as a protected characteristic." }
  ],
  tags: ["culture", "religion", "psychiatry", "diagnosis"]
}
];
