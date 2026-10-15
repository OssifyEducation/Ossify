// Mock 4, part 2 (sjt-363 to sjt-375). Pool mock-4: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-4";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-363", pool, letters: "DEBAC", format: "ranking", difficulty: "moderate",
  title: "A certificate for a stranger", setting: "Elderly care ward", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Death certification", "Probity", "Communication with families"],
  stem:
    "You are an F2 doctor who started on an elderly care ward this week. Mrs Lane, 92, died overnight. You never saw her while she was alive.\n\n" +
    "The ward manager asks you to complete the medical certificate of cause of death, because her family want to register the death today and \"the other doctors are busy\".",
  options: [
    { text: "Explain you can't, and ask a doctor who knew her to do it.",
      brief: "The certificate must be completed by a doctor who attended her in life.",
      detailed: "Only a doctor who attended Mrs Lane during her life can complete the certificate. A colleague who looked after her can do it, and it ranks first because it solves the problem properly." },
    { text: "Contact the medical examiner's office for advice on next steps.",
      brief: "The medical examiner can advise and helps avoid delays.",
      detailed: "Medical examiners review deaths and can advise on the process. It ranks second because a colleague who knew her is the more direct solution." },
    { text: "Ask the ward manager to explain the delay to Mrs Lane's family now.",
      brief: "The family should know what is happening.",
      detailed: "Keeping the family informed reduces their distress about the delay. It ranks third because it doesn't solve the problem itself." },
    { text: "Complete the certificate after reading her notes carefully.",
      brief: "You didn't attend her, so you can't certify the cause of death.",
      detailed: "However carefully you read the notes, you aren't eligible to complete it. This would be an improper certificate. It ranks fourth." },
    { text: "Complete the certificate using the consultant's name.",
      brief: "Falsification.",
      detailed: "Signing in someone else's name is dishonest and a serious probity issue. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you keep to the rules on death certification under pressure, while helping the family.",
    keyDetails: "You never saw her alive. The family want to register today. Others are busy.",
    reasoning: "{1} declines and finds the right doctor, {2} seeks advice, and {3} keeps the family informed. {4} is improper, and {5} is fraudulent.",
    competing: "{2} and {3} are close. The key puts the medical examiner first because they may speed up the process."
  },
  refs: [
    { ref: "deathcert", note: "Who can complete the medical certificate of cause of death, and the medical examiner system." }
  ],
  tags: ["death certification", "probity", "elderly care", "families"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-364", pool, letters: "ADE", format: "multiple_choice", difficulty: "hard",
  title: "Stop the antibiotics?", setting: "Emergency department", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Challenging seniors", "Sepsis", "Escalation"],
  stem:
    "You are an F2 doctor in the Emergency Department. Mr Dixon, 72, has a temperature of 38.9°C, a heart rate of 118, a blood pressure of 94/58 and a lactate of 3.4. You started intravenous antibiotics for suspected sepsis.\n\n" +
    "The registrar reviews him briefly and says, \"It's flu. Stop the antibiotics.\" You remain concerned.",
  options: [
    // keyed
    { text: "Tell the registrar exactly why you are concerned.",
      brief: "The details may change their view.",
      detailed: "His low blood pressure and raised lactate suggest sepsis, whatever the cause. Pointing out these specific findings gives the registrar the chance to reconsider." },
    { text: "Discuss Mr Dixon with the ED consultant.",
      brief: "A senior review may be needed if you still disagree.",
      detailed: "If you remain concerned that stopping antibiotics could harm him, the consultant can review him. Escalating is appropriate when patient safety is at stake." },
    { text: "Document your findings and the discussion.",
      brief: "A clear record of what was found and decided.",
      detailed: "Recording the observations, lactate and the discussion supports continuity and accountability." },
    // distractors
    { text: "Stop the antibiotics as instructed.",
      brief: "Follows an instruction you believe is unsafe without raising it.",
      detailed: "The registrar may be right, but your specific concerns should be raised before acting." },
    { text: "Switch him to a different antibiotic as a compromise.",
      brief: "A covert workaround that resolves nothing.",
      detailed: "This neither follows the registrar's plan nor raises your concern openly. The disagreement needs discussing, not working around." },
    { text: "Tell Mr Dixon that the registrar is wrong.",
      brief: "Undermines his trust in the team.",
      detailed: "Disagreements should be resolved within the team." },
    { text: "Ask the nurse to keep giving the antibiotics as prescribed.",
      brief: "Puts the nurse in the middle of a disagreement.",
      detailed: "This passes the conflict to someone else and doesn't resolve it." },
    { text: "Send a flu swab and wait for the result.",
      brief: "Doesn't address the immediate risk.",
      detailed: "A swab may be useful, but it doesn't settle whether he needs antibiotics now." }
  ],
  explanation: {
    issue: "This tests whether you raise a well-founded concern with a senior, and escalate if needed, when a patient may be harmed.",
    keyDetails: "He has signs of sepsis, including low blood pressure and a raised lactate. The registrar's review was brief. You remain concerned.",
    reasoning: "{k1} raises the specific findings, {k2} escalates if needed, and {k3} documents. The distractors comply without question ({d1}), act covertly ({d2}, {d4}), undermine the team ({d3}), or delay ({d5}).",
    competing: "{d1} is reasonable if the registrar has considered your concerns. Here you haven't raised them yet, which is why speaking up comes first. While you escalate, it is reasonable to ask that the antibiotics aren't stopped until a senior has reviewed him."
  },
  refs: [
    { ref: "sepsis", note: "Recognising sepsis and starting antibiotics promptly." },
    { ref: "gmp", note: "Domain 3, raising concerns about care with seniors." }
  ],
  tags: ["sepsis", "challenging seniors", "emergency department", "antibiotics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-365", pool, letters: "BECAD", format: "ranking", difficulty: "moderate",
  title: "Bruises on a toddler", setting: "Emergency department", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Safety and quality", "Patients, partnership and communication"],
  competencies: ["Child safeguarding", "Documentation", "Communication"],
  stem:
    "You are an F2 doctor in the Emergency Department. Max, 2, has been brought in with a cut lip by his mother's partner, who says he fell against a table.\n\n" +
    "While examining him, you notice fingertip-shaped bruises on both upper arms and bruising behind his ears. The partner says he \"bruises easily\".",
  options: [
    { text: "Discuss Max with the ED consultant and the paediatric team.",
      brief: "These injuries need senior and specialist assessment for safeguarding.",
      detailed: "Fingertip bruising and bruising behind the ears are concerning for non-accidental injury in a toddler. Senior and paediatric involvement is needed for a child protection assessment. It ranks first." },
    { text: "Document the injuries and the explanation given, in detail.",
      brief: "Accurate records are essential evidence.",
      detailed: "Recording the exact location, size and pattern of bruising, and what was said, supports any later assessment. It ranks second." },
    { text: "Explain to the partner that Max needs further assessment before going home.",
      brief: "Honest, without accusing anyone.",
      detailed: "Being open that more assessment is needed, without accusing anyone, is honest and keeps Max in a safe place. It ranks third." },
    { text: "Ask the partner detailed questions about how each bruise happened.",
      brief: "Interrogating carers isn't your role.",
      detailed: "A history is needed, but detailed questioning about each injury is best left to the safeguarding process." },
    { text: "Glue the cut and discharge him, as he seems happy.",
      brief: "Sends a child home who may be at risk.",
      detailed: "A happy demeanour doesn't exclude abuse. Discharging him without assessment could leave him in danger. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you recognise possible non-accidental injury and take the right steps to protect a child.",
    keyDetails: "The bruising pattern is concerning. The explanation doesn't fit. He is very young.",
    reasoning: "{1} brings in senior and specialist help, {2} documents, and {3} is honest with the carer. {4} oversteps, and {5} leaves him at risk.",
    competing: "{2} and {3} are close. The key puts documentation first because it should be done while details are fresh."
  },
  refs: [
    { ref: "children", note: "Recognising and acting on signs of abuse." },
    { ref: "workingtogether", note: "Child protection assessment and referral." }
  ],
  tags: ["safeguarding", "non-accidental injury", "emergency department", "children"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-366", pool, letters: "BGH", format: "multiple_choice", difficulty: "moderate",
  title: "Sign it off for me?", setting: "Non-clinical (teaching, audit, social)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honesty", "Portfolio integrity", "Friendship"],
  stem:
    "You are an F2 doctor. Your friend Dr Ellis, another F2, has a deadline for her portfolio tonight. She asks you to sign off a supervised learning event for a procedure, saying, \"I did it last week, you just weren't there.\"\n\n" +
    "You didn't observe the procedure.",
  options: [
    // keyed
    { text: "Decline to sign off something you didn't observe.",
      brief: "Signing would be dishonest.",
      detailed: "A supervised learning event confirms that you observed the procedure. Signing it without seeing it would be a false record." },
    { text: "Suggest she asks the person who did observe her.",
      brief: "The right person can sign it honestly.",
      detailed: "If someone supervised her, they can complete the assessment honestly." },
    { text: "Offer to observe her doing the procedure soon.",
      brief: "A genuine way to help.",
      detailed: "Observing her yourself lets you sign it off honestly, even if it is after the deadline." },
    // distractors
    { text: "Sign it, as she is competent and you trust her.",
      brief: "Trust doesn't replace observation.",
      detailed: "Even if she is competent, signing without observing is dishonest." },
    { text: "Sign it, but write a brief comment so it isn't too detailed.",
      brief: "Still a false record.",
      detailed: "Keeping the comment brief doesn't change the fact that you didn't observe it." },
    { text: "Report her to her educational supervisor.",
      brief: "Disproportionate for a request you've declined.",
      detailed: "She asked, and you can decline. A report at this stage is excessive." },
    { text: "Tell other colleagues what she asked you to do.",
      brief: "Gossip that harms her reputation.",
      detailed: "This doesn't help anyone and may damage her standing." },
    { text: "Suggest she backdates a new assessment with another colleague.",
      brief: "Encourages another false record.",
      detailed: "Backdating would be dishonest too." }
  ],
  explanation: {
    issue: "This tests whether you keep training records honest when a friend asks you to help them out.",
    keyDetails: "You didn't observe the procedure. She is under deadline pressure. She is a friend.",
    reasoning: "{k1} declines honestly, {k2} points to the right person, and {k3} offers genuine help. The distractors falsify ({d1}, {d2}, {d5}), overreact ({d3}), or gossip ({d4}).",
    competing: "{d3} feels principled, but she asked and you declined, so there is nothing to report at this stage."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in training records and assessments." }
  ],
  tags: ["portfolio", "probity", "assessments", "friends"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-367", pool, letters: "CAEBD", format: "ranking", difficulty: "easy",
  title: "Extra locum shifts", setting: "Out-of-hours / community", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Trust and professionalism", "Safety and quality"],
  competencies: ["Safe working hours", "Self-care", "Honesty"],
  stem:
    "You are an F2 doctor. A locum agency offers you several well-paid out-of-hours shifts next month. Together with your normal rota, they would leave you with very little rest between shifts.\n\n" +
    "You could do with the extra money.",
  options: [
    { text: "Decline the shifts that would leave you without proper rest.",
      brief: "Protects you and your patients from fatigue.",
      detailed: "Limits on working hours and rest exist to keep doctors and patients safe, and they apply across all your work. Turning down the shifts that would breach them protects both. It ranks first." },
    { text: "Ask the agency for fewer shifts, spread over a longer period.",
      brief: "A way to earn more without becoming unsafe.",
      detailed: "Some locum work may be compatible with safe rest. Spreading it out lets you earn more without excessive fatigue. It ranks second." },
    { text: "Tell your educational supervisor about any locum work you take.",
      brief: "Keeps your employer informed.",
      detailed: "Many employers require you to declare additional work so it can be accounted for. It ranks third." },
    { text: "Accept them all, and plan to rest on your days off.",
      brief: "Still leaves you working too much with too little rest.",
      detailed: "Resting on days off doesn't make excessive hours safe." },
    { text: "Accept them, as agency work is separate from your NHS contract.",
      brief: "Wrong: limits on working time apply across all your work.",
      detailed: "Fatigue doesn't depend on who employs you, and working time limits apply across all employment. This ignores the risk entirely. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you keep your total working hours safe when tempted by extra work.",
    keyDetails: "Taking every shift would leave too little rest. Limits apply across all your work. You need the money.",
    reasoning: "{1} declines unsafe work, {2} finds a safer way to take some, and {3} keeps your employer informed. {4} still leaves too little rest, and {5} ignores the limits.",
    competing: "{1} and {2} work together. The key puts declining first because the offer as it stands is unsafe."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, making sure your health doesn't put patients at risk." }
  ],
  tags: ["locum", "working hours", "fatigue", "out-of-hours"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-368", pool, letters: "ACF", format: "multiple_choice", difficulty: "moderate",
  title: "No carers, thank you", setting: "General practice", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Autonomy", "Risk discussion", "Falls"],
  stem:
    "You are an F2 doctor in a GP practice. Mrs Webb, 88, lives alone and has fallen three times in two months. Her daughter has asked you to persuade her to accept carers.\n\n" +
    "Mrs Webb is alert and clear. She tells you she doesn't want \"strangers in my house\" and wants to stay independent.",
  options: [
    // keyed
    { text: "Ask her what independence means to her.",
      brief: "Understanding her priorities helps find acceptable support.",
      detailed: "Her objection may be to particular kinds of help. Knowing what matters to her helps you suggest options she might accept." },
    { text: "Discuss options such as a falls assessment or an alarm.",
      brief: "Reduces risk in ways she may accept.",
      detailed: "A falls service, home adaptations or a personal alarm can reduce risk while respecting her wish to stay independent." },
    { text: "Respect her decision if she still declines carers.",
      brief: "She appears to have capacity to make this decision.",
      detailed: "A capacitous person can refuse care, even if others think it unwise. Her decision should be respected, and revisited if things change." },
    // distractors
    { text: "Arrange carers anyway, as she is clearly at risk.",
      brief: "Overrides a capacitous decision.",
      detailed: "Risk alone doesn't justify imposing care on someone with capacity." },
    { text: "Ask her daughter to insist on carers.",
      brief: "Puts pressure on her rather than supporting her.",
      detailed: "Family involvement can help, but pressure may damage relationships and doesn't respect her choice." },
    { text: "Refer her for a care home placement.",
      brief: "A drastic step she hasn't asked for.",
      detailed: "She wants to stay at home. A care home isn't an option she has asked about." },
    { text: "Tell her she will end up in hospital if she refuses help at home.",
      brief: "Presents risk as a threat.",
      detailed: "She should understand the risks, but framing them as a threat may feel coercive." },
    { text: "Make a safeguarding referral for self-neglect.",
      brief: "Not justified by the facts.",
      detailed: "She is making a choice about care, not neglecting herself. Safeguarding isn't the right route." }
  ],
  explanation: {
    issue: "This tests how you respect an older person's autonomy while looking for ways to reduce risk.",
    keyDetails: "She has capacity. She has fallen repeatedly. She values independence. Her daughter is worried.",
    reasoning: "{k1} explores her priorities, {k2} offers acceptable alternatives, and {k3} respects her choice. The distractors override her ({d1}, {d3}), pressure her ({d2}, {d4}), or misuse safeguarding ({d5}).",
    competing: "{d4} is close, since she should understand the risks. Explaining them honestly is right; using them as a threat isn't."
  },
  refs: [
    { ref: "mca1", note: "Respecting decisions people with capacity make, even if unwise." },
    { ref: "consent", note: "Discussing options and respecting patients' choices." }
  ],
  tags: ["autonomy", "falls", "older people", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-369", pool, letters: "ACBD", format: "ranking", difficulty: "hard",
  title: "The police want a result", setting: "Emergency department", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Confidentiality", "Legal requests", "Seeking advice"],
  stem:
    "You are an F2 doctor in the Emergency Department. Mr Rhodes, 35, is unconscious after a car crash in which another driver was seriously injured. As part of his care, his blood alcohol level was measured and is high.\n\n" +
    "A police officer asks you for the result, saying it is needed for their investigation.",
  options: [
    { text: "Ask your consultant for advice before sharing anything.",
      brief: "Disclosure to the police is a complex, senior decision.",
      detailed: "Confidential information can sometimes be disclosed to the police in the public interest, for example when a serious crime has caused serious harm, but that decision should be made at a senior level, often with the trust's Caldicott guardian. Telling the officer you need to take advice, and then seeking it, is the right first step. It ranks first." },
    { text: "Tell the officer that the police have their own procedure for testing drivers.",
      brief: "Accurate, and points the police to the proper route.",
      detailed: "There is a legal procedure for the police to obtain a specimen from a driver who can't consent, which involves the doctor in charge of his care. Explaining that this route exists is helpful and doesn't disclose anything. It ranks second because the disclosure question itself still needs senior advice." },
    { text: "Tell the officer the result is 'consistent with drinking' without giving the figure.",
      brief: "A disclosure made informally, without any decision that it is justified.",
      detailed: "This seems cautious, but it shares confidential information without anyone having decided that disclosure is justified." },
    { text: "Give the officer the result, as it relates to a crime.",
      brief: "A full disclosure without a proper decision.",
      detailed: "Disclosure may be justified in some circumstances, but it isn't a decision for you to make on the spot. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you handle a police request for confidential information about a patient who can't consent.",
    keyDetails: "He is unconscious and can't consent. The result was taken for his care. Police have their own procedures. Someone was seriously injured, which may make a public-interest disclosure relevant.",
    reasoning: "{1} gets senior advice on a complex disclosure, and {2} points the police to their proper route. {3} discloses informally, and {4} fully, without a proper decision.",
    competing: "Some would put explaining the police procedure first. The key puts seeking advice first because whether to disclose may turn on the public interest, which needs a senior decision."
  },
  refs: [
    { ref: "confidentiality", note: "Disclosures to the police, and the public interest." }
  ],
  tags: ["confidentiality", "police", "emergency department", "road traffic"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-370", pool, letters: "DEG", format: "multiple_choice", difficulty: "moderate",
  title: "Named in a complaint", setting: "Psychiatry", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Trust and professionalism", "Knowledge, skills and development"],
  competencies: ["Responding to complaints", "Reflection", "Seeking support"],
  stem:
    "You are an F2 doctor in psychiatry. Last week a patient became very agitated, and after other measures failed, you prescribed rapid tranquillisation, as agreed with the registrar.\n\n" +
    "The patient's family has now made a formal complaint, naming you and saying the medication was unnecessary. You are upset and worried.",
  options: [
    // keyed
    { text: "Discuss the complaint with your clinical supervisor.",
      brief: "Support and advice from someone senior.",
      detailed: "Your supervisor can help you understand the process, reflect on what happened, and respond appropriately." },
    { text: "Write a factual account of what happened, when asked.",
      brief: "Helps the complaint be investigated fairly.",
      detailed: "A clear, factual account, based on your notes, helps the trust respond to the family." },
    { text: "Contact your medical defence organisation for advice.",
      brief: "Independent advice can help.",
      detailed: "Defence organisations advise doctors on complaints and can support you through the process." },
    // distractors
    { text: "Phone the family to explain your side.",
      brief: "The complaint process should handle this.",
      detailed: "Contacting the family directly may make things worse and bypasses the process." },
    { text: "Rewrite your notes of the incident to make your reasons clearer.",
      brief: "Altering records after a complaint is inappropriate.",
      detailed: "Notes shouldn't be changed after the event. Any later additions must be clearly dated and labelled." },
    { text: "Ignore it, as the registrar agreed the decision.",
      brief: "You are named, and the complaint should be responded to.",
      detailed: "The decision was shared, but you still need to engage with the process." },
    { text: "Ask the registrar to take responsibility for the decision.",
      brief: "Shifts blame instead of engaging.",
      detailed: "The registrar's involvement is relevant, but asking them to take the blame isn't constructive." },
    { text: "Post about the complaint on social media to get support.",
      brief: "Breaches confidentiality.",
      detailed: "Discussing a complaint publicly could identify the patient and family." }
  ],
  explanation: {
    issue: "This tests how you respond constructively to a complaint naming you.",
    keyDetails: "A decision was made with senior input. The family is unhappy. You are upset.",
    reasoning: "{k1} gets support, {k2} contributes to a fair investigation, and {k3} gets independent advice. The distractors bypass the process ({d1}), alter records ({d2}), disengage ({d3}), shift blame ({d4}), or breach confidentiality ({d5}).",
    competing: "{d2} might feel like strengthening your record, but altering notes after a complaint is a serious problem."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, responding honestly and constructively to complaints." }
  ],
  tags: ["complaints", "psychiatry", "rapid tranquillisation", "support"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-371", pool, letters: "EDCBA", format: "ranking", difficulty: "moderate",
  title: "The partner isn't coping", setting: "Oncology & palliative care", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Supporting carers", "Listening", "Signposting"],
  stem:
    "You are an F2 doctor on an oncology ward. Mrs Ali, 58, has advanced breast cancer. Her husband has visited every day for three weeks and looks exhausted.\n\n" +
    "In the corridor he asks quietly, \"Can I talk to you? I'm not coping.\"",
  options: [
    { text: "Find a private space and listen to him now or shortly.",
      brief: "He has asked for help, and a short conversation can make a difference.",
      detailed: "He is reaching out. Making time, even briefly, shows care and helps you understand what he needs. It ranks first." },
    { text: "Tell him about support for families, such as the palliative care team.",
      brief: "Practical support he may not know about.",
      detailed: "Palliative care teams, carers' services and charities can support relatives. It ranks second." },
    { text: "Suggest he sees his own GP if he is struggling with his health.",
      brief: "His GP can help with his own wellbeing.",
      detailed: "If he has low mood or isn't sleeping, his GP can help. It ranks third." },
    { text: "Explain that you can only discuss his wife's care.",
      brief: "Turns away someone asking for help.",
      detailed: "His wellbeing affects hers, and you can support him without breaching anything." },
    { text: "Tell Mrs Ali that her husband isn't coping.",
      brief: "Shares his private disclosure and may distress her.",
      detailed: "He confided in you. Telling his wife without his agreement breaches his trust and could upset her. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you respond with compassion to a relative's distress, and point him to support.",
    keyDetails: "He is exhausted. He has asked for help. His wife is very ill.",
    reasoning: "{1} listens, {2} offers family support, and {3} points to his GP. {4} turns him away, and {5} breaks his confidence.",
    competing: "{2} and {3} are close. The key puts family support first because it is tailored to his situation."
  },
  refs: [
    { ref: "eol", note: "Supporting those close to patients at the end of life." }
  ],
  tags: ["carers", "distress", "oncology", "families"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-372", pool, letters: "BCH", format: "multiple_choice", difficulty: "easy",
  title: "\"Just in case\"", setting: "Psychiatry", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Boundaries", "Safety planning", "Kindness"],
  stem:
    "You are an F2 doctor on a psychiatric ward. Ms Bell, 28, is due to be discharged tomorrow. Over the past week she has started telling you about her personal life.\n\n" +
    "She asks for your mobile number, \"just in case I need someone to talk to\".",
  options: [
    // keyed
    { text: "Decline kindly, explaining that you can't share it.",
      brief: "Maintains appropriate boundaries.",
      detailed: "Giving your personal number would blur the professional relationship and create expectations you can't meet." },
    { text: "Make sure she knows who to contact after discharge.",
      brief: "Gives her a safe route for support.",
      detailed: "Her community team, crisis line and GP can support her. Making sure she has these details meets her real need." },
    { text: "Mention the request to her team.",
      brief: "Her need for support should be planned for.",
      detailed: "The request may show she is worried about coping. Her team can make sure her support plan reflects this." },
    // distractors
    { text: "Give her your number, as it may help her recovery at home.",
      brief: "Crosses a professional boundary.",
      detailed: "However well meant, this creates a personal relationship that isn't appropriate." },
    { text: "Give her your work email instead.",
      brief: "Still an inappropriate personal channel.",
      detailed: "This doesn't provide safe crisis support and still blurs boundaries." },
    { text: "Agree to message her on social media.",
      brief: "Inappropriate.",
      detailed: "This crosses boundaries and isn't a safe way to support her." },
    { text: "Tell her the request is inappropriate.",
      brief: "Correct, but unkind.",
      detailed: "She may be anxious about leaving. A kind response is better." },
    { text: "Avoid her for the rest of her admission.",
      brief: "Unkind and unprofessional.",
      detailed: "She needs care until she leaves. Avoiding her would be hurtful." }
  ],
  explanation: {
    issue: "This tests whether you maintain professional boundaries kindly, while making sure a patient has proper support.",
    keyDetails: "She is anxious about discharge. She has been confiding in you. Professional support is available.",
    reasoning: "{k1} declines kindly, {k2} points her to proper support, and {k3} involves her team. The distractors cross boundaries ({d1}, {d2}, {d3}) or are unkind ({d4}, {d5}).",
    competing: "{d4} reaches the right conclusion but in a way that may hurt her."
  },
  refs: [
    { ref: "boundaries", note: "Maintaining professional boundaries with patients." }
  ],
  tags: ["boundaries", "psychiatry", "discharge", "kindness"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-373", pool, letters: "EDACB", format: "ranking", difficulty: "moderate",
  title: "List cancelled", setting: "Orthopaedics", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communication", "Managing frustration", "Patient safety"],
  stem:
    "You are an F2 doctor in orthopaedics. At 14:00 the afternoon theatre list is cancelled because an emergency case has taken the theatre. Four patients have been fasting since 07:00. One has diabetes, and the nurses have checked that his blood glucose is normal.\n\n" +
    "They are angry, and one says, \"Nobody ever tells us anything.\"",
  options: [
    { text: "Apologise, and explain why the list was cancelled and what's next.",
      brief: "Honesty and an apology help reduce their frustration.",
      detailed: "They deserve to know why their operations were cancelled and what will happen. An apology acknowledges their inconvenience. It ranks first." },
    { text: "Make sure they can eat and drink, and restart any medicines that were withheld.",
      brief: "Prolonged fasting carries risks, especially in diabetes.",
      detailed: "Patients, particularly those with diabetes, need to eat and restart medicines safely. It ranks second because it can happen straight after explaining." },
    { text: "Ask the team to rebook their operations as soon as possible.",
      brief: "Gives them a plan.",
      detailed: "Knowing when their operations will happen helps reduce anxiety. It ranks third." },
    { text: "Tell them it's the theatre team's fault.",
      brief: "Blames colleagues unfairly.",
      detailed: "The cancellation was due to an emergency. Blaming colleagues doesn't help." },
    { text: "Avoid the bay until the nurses have told them.",
      brief: "Leaves them uninformed and angry.",
      detailed: "This avoids a difficult conversation and may delay their eating and drinking. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to frustrated patients after a cancellation, combining honest communication with safety.",
    keyDetails: "The list was cancelled for an emergency. Patients have fasted for seven hours. One has diabetes.",
    reasoning: "{1} explains and apologises, {2} keeps them safe, and {3} plans ahead. {4} blames colleagues, and {5} avoids them.",
    competing: "Some would make sure they can eat first. The key explains first because it takes a minute and it is what they need to hear."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, keeping patients informed." }
  ],
  tags: ["cancellation", "communication", "orthopaedics", "fasting"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-374", pool, letters: "AEF", format: "multiple_choice", difficulty: "hard",
  title: "A sponsored trip", setting: "Orthopaedics", attribute: P,
  topic: "Conflicts of interest and self-prescribing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Conflicts of interest", "Probity", "Professional development"],
  stem:
    "You are an F2 doctor in orthopaedics, hoping to apply for surgical training. A representative from an implant company offers to pay for your travel and registration at an international conference.\n\n" +
    "The condition is that you attend a half-day workshop promoting the company's new hip implant.",
  options: [
    // keyed
    { text: "Check the trust's policy on sponsorship.",
      brief: "Trusts have rules on accepting industry funding.",
      detailed: "Most trusts have policies on sponsorship and conflicts of interest. Checking it is the first step." },
    { text: "Decline funding that depends on attending their promotion.",
      brief: "Conditional funding creates a conflict of interest.",
      detailed: "Accepting funding on condition that you attend promotion could influence, or appear to influence, your judgement about their products." },
    { text: "Ask your supervisor about study leave funding instead.",
      brief: "A legitimate way to fund the conference.",
      detailed: "Study budgets may cover some or all of the cost, without any conflict of interest." },
    // distractors
    { text: "Accept, as you don't choose implants as an F2.",
      brief: "Your future influence and perceived conflict still matter.",
      detailed: "You may influence choices later, and the arrangement could still be seen as an inducement." },
    { text: "Accept, and declare it on the trust's register.",
      brief: "Declaring helps, but the conditional nature is the problem.",
      detailed: "Declaration is good practice for acceptable sponsorship, but a condition tied to product promotion is what makes this inappropriate." },
    { text: "Accept, but skip the workshop once you're there.",
      brief: "Dishonest.",
      detailed: "This breaks the agreement and is dishonest." },
    { text: "Report the representative to the company.",
      brief: "Disproportionate.",
      detailed: "The offer may be common practice. Declining is enough." },
    { text: "Ask colleagues whether they have accepted similar offers before.",
      brief: "Others' choices don't make it appropriate.",
      detailed: "What others have done doesn't change your own obligations." }
  ],
  explanation: {
    issue: "This tests whether you recognise and avoid a conflict of interest created by conditional industry funding.",
    keyDetails: "The funding is conditional on attending product promotion. You are early in your career. Legitimate funding may be available.",
    reasoning: "{k1} checks the rules, {k2} declines the conditional funding, and {k3} looks for legitimate funding. The distractors accept it ({d1}, {d2}), are dishonest ({d3}), overreact ({d4}), or follow others ({d5}).",
    competing: "{d2} is the closest call: declaring sponsorship is good practice. The condition tied to promotion is what makes this unacceptable."
  },
  refs: [
    { ref: "coi", note: "Sponsorship and inducements from industry." }
  ],
  tags: ["conflict of interest", "sponsorship", "industry", "orthopaedics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-375", pool, letters: "DCEAB", format: "ranking", difficulty: "moderate",
  title: "\"You're overreacting\"", setting: "Obstetrics & gynaecology", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Escalation", "Teamwork", "Patient safety"],
  stem:
    "You are an F2 doctor on the postnatal ward. Mrs Jones, 31, gave birth two hours ago. Her heart rate has risen to 112, her blood pressure has fallen to 98/60, and her pad is much heavier than an hour ago.\n\n" +
    "You ask the midwife to call the obstetric registrar. She says, \"You're overreacting. Let's give it half an hour.\"",
  options: [
    { text: "Bleep the obstetric registrar yourself straight away.",
      brief: "She may be bleeding seriously, so a senior is needed now.",
      detailed: "A rising heart rate, falling blood pressure and increased bleeding after birth suggest a postpartum haemorrhage that may be getting worse. You don't need the midwife's agreement to call for help. It ranks first." },
    { text: "Explain calmly to the midwife why you're concerned.",
      brief: "Shares your reasoning and keeps the team working together.",
      detailed: "Explaining the observations may change her view, and you will need her help. It ranks second because calling for help comes first." },
    { text: "Discuss the disagreement with the midwife once Mrs Jones is stable.",
      brief: "Helps the team learn from it.",
      detailed: "A later conversation can help you both understand each other's views. It ranks third because it is not urgent." },
    { text: "Ask the labour ward coordinator to tell the midwife to call the registrar.",
      brief: "Indirect, and delays help.",
      detailed: "This may work, but it delays getting senior help when you could call yourself." },
    { text: "Wait half an hour and reassess, as the midwife suggests.",
      brief: "A dangerous delay.",
      detailed: "If she is bleeding, half an hour could be life-threatening. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you escalate a deteriorating patient despite a colleague's disagreement.",
    keyDetails: "She has signs of a postpartum haemorrhage. The midwife disagrees. You can call the registrar yourself.",
    reasoning: "{1} gets help now, {2} keeps the team together, and {3} addresses the disagreement later. {4} delays help, and {5} could be fatal.",
    competing: "Some would explain to the midwife first, to keep her on side. With these observations, calling for help can't wait, and you can explain while you wait for the registrar."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, recognising and responding to deterioration." }
  ],
  tags: ["postpartum haemorrhage", "escalation", "teamwork", "obstetrics"]
}
];
