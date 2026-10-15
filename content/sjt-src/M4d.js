// Mock 4, part 4 (sjt-388 to sjt-400). Pool mock-4: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-4";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-388", pool, letters: "BCH", format: "multiple_choice", difficulty: "moderate",
  title: "Sign for this one?", setting: "General surgery", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism", "Safety and quality"],
  competencies: ["Honesty", "Controlled drugs", "Accurate records"],
  stem:
    "You are an F2 doctor on a surgical ward. In your trust, doctors can act as the second witness for controlled drugs. Leah, a staff nurse, asks you to countersign the controlled drug register for a dose of oral morphine she gave two hours ago.\n\n" +
    "You weren't there when it was given. She says, \"It was really busy and no one was free to check it.\"",
  options: [
    // keyed
    { text: "Explain that you can't sign for a dose you didn't see.",
      brief: "Signing would make the register inaccurate.",
      detailed: "Your signature confirms you witnessed the dose being checked and given. Signing now would create a false record." },
    { text: "Suggest she tells the nurse in charge.",
      brief: "The person running the shift needs to know.",
      detailed: "The nurse in charge can decide what to do, including how to record it accurately and whether staffing needs escalating." },
    { text: "Suggest the missed check is reported as an incident.",
      brief: "Lets the trust learn from it.",
      detailed: "A controlled drug given without the required check is a reportable incident. Reporting it supports learning about the staffing pressures behind it." },
    // distractors
    { text: "Sign it, as you trust her and the stock count is correct.",
      brief: "Still a false record.",
      detailed: "A correct count doesn't mean you witnessed the dose. Your signature would be untrue." },
    { text: "Sign it with today's time, so the record looks complete.",
      brief: "Falsifies the record.",
      detailed: "This deliberately misrepresents what happened, which is dishonest." },
    { text: "Report her to the Nursing and Midwifery Council.",
      brief: "Disproportionate.",
      detailed: "A single missed check on a busy shift should be handled locally, not by the regulator." },
    { text: "Ask another doctor to sign it instead.",
      brief: "Moves the false record to someone else.",
      detailed: "No one witnessed the dose, so anyone who signs creates a false record." },
    { text: "Ask pharmacy to recount every controlled drug on the ward.",
      brief: "Disproportionate.",
      detailed: "There is no suggestion of a discrepancy. A ward-wide recount doesn't address the missed check or the request to sign." }
  ],
  explanation: {
    issue: "This tests whether you keep records honest when a colleague asks you to sign for something you didn't witness.",
    keyDetails: "You didn't see the dose given. The ward was busy. She is asking you to countersign after the event.",
    reasoning: "{k1} keeps the record honest, {k2} involves the nurse in charge, and {k3} supports learning. The distractors falsify the record ({d1}, {d2}, {d4}), or overreact ({d3}, {d5}).",
    competing: "{d4} might seem to solve the problem, but no one witnessed the dose, so any signature would be false."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, making sure the records you sign are accurate." }
  ],
  tags: ["controlled drugs", "records", "honesty", "surgery"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-389", pool, letters: "DCBA", format: "ranking", difficulty: "hard",
  title: "Which patient?", setting: "Cardiology / respiratory", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Challenging seniors", "Patient safety", "Closed-loop communication"],
  stem:
    "You are an F2 doctor on a cardiology ward at night. The medical registrar, busy in the emergency department, phones and asks you to stop the heparin infusion for the patient in bed 4 \"before his operation tomorrow\", then hangs up.\n\n" +
    "Mr Hughes in bed 4 has an NSTEMI, isn't having an operation, and has had more chest pain this evening. The registrar can be phoned back.",
  options: [
    { text: "Call the registrar back, describing Mr Hughes's symptoms.",
      brief: "Likely a mix-up, which a quick call can resolve.",
      detailed: "The instruction doesn't fit Mr Hughes, so it may be meant for another patient. Calling back with the key facts lets the registrar correct it. It ranks first." },
    { text: "Keep the infusion running and ask the consultant for advice.",
      brief: "Safe, but goes around the registrar.",
      detailed: "Not stopping the heparin protects Mr Hughes, but the registrar can be reached and is the right person to ask first. It ranks second." },
    { text: "Ask the nurse in charge what she thinks you should do.",
      brief: "Delays clarifying with the person who gave the instruction.",
      detailed: "The nurse may agree it seems wrong, but she can't change the registrar's plan. It ranks third." },
    { text: "Stop the infusion as asked, as the registrar is more senior.",
      brief: "Could cause serious harm.",
      detailed: "Stopping anticoagulation in a patient with ongoing chest pain from an NSTEMI could be dangerous, and the instruction seems to be a mix-up. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you check an instruction that doesn't fit the patient, even when a busy senior gives it.",
    keyDetails: "The instruction mentions an operation Mr Hughes isn't having. He has ongoing chest pain. The registrar can be reached.",
    reasoning: "{1} checks with the person who gave the instruction, and {2} keeps him safe but bypasses the registrar. {3} delays, and {4} could harm him.",
    competing: "Some would rank {2} first because it protects him straight away. The key puts {1} first because the registrar is available and the infusion hasn't been stopped yet."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, acting when you believe an instruction may be unsafe." }
  ],
  tags: ["seniors", "anticoagulation", "cardiology", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-390", pool, letters: "BFG", format: "multiple_choice", difficulty: "moderate",
  title: "Within reach", setting: "Out-of-hours / community", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Safety and quality", "Patients, partnership and communication"],
  competencies: ["Safeguarding", "Documentation", "Communication"],
  stem:
    "You are an F2 doctor on an out-of-hours home visit to Ms Reid, 31, who has a chest infection. Your supervising GP is available by phone.\n\n" +
    "In the living room, used needles and burnt foil are on a low table within reach of her two children, aged 2 and 4.",
  options: [
    // keyed
    { text: "Explain your concern about the children's safety to Ms Reid.",
      brief: "Being open with her is usually right.",
      detailed: "Unless it would put the children at greater risk, raising your concern with her directly is honest and may make the items safe straight away." },
    { text: "Discuss it with the safeguarding lead or an on-call senior.",
      brief: "Safeguarding decisions shouldn't be made alone.",
      detailed: "They can help decide whether to make a referral to children's social care, and how quickly." },
    { text: "Record what you saw and what you did in the notes.",
      brief: "A clear record supports any future action.",
      detailed: "Accurate notes, including what you saw and who you told, are essential in safeguarding." },
    // distractors
    { text: "Leave it, as you are there to treat Ms Reid.",
      brief: "The children's safety is your responsibility too.",
      detailed: "All doctors have a duty to act on concerns about children's safety." },
    { text: "Call the police to remove the children.",
      brief: "Disproportionate without immediate danger.",
      detailed: "The children aren't in immediate danger that needs police involvement right now." },
    { text: "Tell her this will stay confidential.",
      brief: "A promise you can't keep.",
      detailed: "You may need to share information to protect the children." },
    { text: "Ask the children about their mother's drug use.",
      brief: "Inappropriate.",
      detailed: "Questioning young children is not your role and could cause harm." },
    { text: "Ask her to put the items out of reach, and take no further action.",
      brief: "Right to make them safe, but not enough.",
      detailed: "Making the items safe now is sensible, but taking no further action leaves the wider safeguarding concern unaddressed." }
  ],
  explanation: {
    issue: "This tests whether you act on a safeguarding concern about children you notice while treating an adult.",
    keyDetails: "Used needles and foil are within reach of two young children. You are visiting their mother.",
    reasoning: "{k1} raises it openly, {k2} involves safeguarding expertise, and {k3} documents it. The distractors ignore it ({d1}, {d5}), overreact ({d2}), promise secrecy ({d3}), or question the children ({d4}).",
    competing: "{d5} may make the items safe for now, but it doesn't address the wider risk to the children."
  },
  refs: [
    { ref: "children", note: "Acting on concerns about children's safety." },
    { ref: "workingtogether", note: "Multi-agency safeguarding." }
  ],
  tags: ["safeguarding", "children", "drug use", "home visit"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-391", pool, letters: "CDABE", format: "ranking", difficulty: "moderate",
  title: "Just consent him", setting: "General medical ward", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Knowledge, skills and development", "Trust and professionalism"],
  competencies: ["Research governance", "Consent", "Honesty about limits"],
  stem:
    "You are an F2 doctor on a medical ward. The research registrar asks you to take consent from Mr Quinn, 67, for a drug trial, as the research nurse is off sick.\n\n" +
    "You haven't done Good Clinical Practice (GCP) training, and you aren't on the trial's delegation log.",
  options: [
    { text: "Explain to the registrar that you aren't trained or on the delegation log.",
      brief: "Only delegated, trained staff can take trial consent.",
      detailed: "Trial consent must be taken by people trained and authorised to do it. Explaining this is honest and protects Mr Quinn. It ranks first." },
    { text: "Tell Mr Quinn that someone from the research team will discuss it with him.",
      brief: "Keeps him informed.",
      detailed: "He may be expecting a discussion. Letting him know who will come keeps him informed. It ranks second." },
    { text: "Offer to do GCP training so you can help in future.",
      brief: "Constructive, though it doesn't solve today's problem.",
      detailed: "Training would let you support research in future. It ranks third because it doesn't help now." },
    { text: "Take consent, using the patient information sheet carefully.",
      brief: "Outside your authorisation.",
      detailed: "However carefully you do it, the consent wouldn't be valid for the trial, and he may not be properly informed." },
    { text: "Take consent, then ask the registrar to sign the form as the consenter.",
      brief: "Falsifies the trial record.",
      detailed: "This misrepresents who took consent, which is dishonest and a serious breach of research governance. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you recognise the rules on research consent and avoid working outside your authorisation.",
    keyDetails: "You aren't GCP-trained or on the delegation log. The research nurse is off sick. The registrar is asking you to help.",
    reasoning: "{1} explains why you can't, {2} keeps the patient informed, and {3} helps in future. {4} works outside your authorisation, and {5} falsifies the record.",
    competing: "{2} and {3} are close. The key puts the patient first, because he is waiting for a discussion now."
  },
  refs: [
    { ref: "consent", note: "Valid consent, including for research." },
    { ref: "gmp", note: "Domain 1, working within your competence." }
  ],
  tags: ["research", "consent", "GCP", "competence"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-392", pool, letters: "ADE", format: "multiple_choice", difficulty: "moderate",
  title: "Nobody on nights", setting: "Paediatrics", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Rota management", "Responsibility", "Teamwork"],
  stem:
    "You are an F2 doctor in paediatrics. Last month you and a colleague, Ravi, informally agreed to swap a night shift. Neither of you told the rota coordinator.\n\n" +
    "At 4pm today you realise that Ravi thinks the swap is next week. Tonight's paediatric night shift currently has no F2 doctor. You have been working since 8am.",
  options: [
    // keyed
    { text: "Tell the rota coordinator or on-call manager now.",
      brief: "They can arrange cover in time.",
      detailed: "There are four hours before the shift. Telling them now gives the best chance of finding cover." },
    { text: "Contact Ravi to clarify who is covering tonight.",
      brief: "He may still be able to work it.",
      detailed: "Clarifying quickly may resolve the gap." },
    { text: "Agree future swaps through the rota team.",
      brief: "Prevents it happening again.",
      detailed: "Informal swaps without the rota team's knowledge risk gaps like this one." },
    // distractors
    { text: "Assume the night team will manage without an F2.",
      brief: "An unfilled gap is unsafe.",
      detailed: "The wards may be unsafe without enough cover." },
    { text: "Work the night shift yourself after today's shift.",
      brief: "A 24-hour stretch is unsafe.",
      detailed: "Working through the night after a full day would leave you exhausted and unsafe." },
    { text: "Tell the consultant that Ravi has let the team down.",
      brief: "Blames him for a shared mistake.",
      detailed: "The swap was informal on both sides. Blaming him doesn't fill the gap." },
    { text: "Post in the F2 group chat asking anyone to cover it.",
      brief: "May find someone, but bypasses the rota team.",
      detailed: "The rota team needs to know who is covering, and any cover must be within safe working hours." },
    { text: "Leave it for the night registrar to sort out.",
      brief: "Passes your responsibility to someone else.",
      detailed: "The registrar may not know about the gap until it is too late." }
  ],
  explanation: {
    issue: "This tests whether you take responsibility for a rota gap you helped create, and fix it safely.",
    keyDetails: "The swap was informal. Tonight has no F2. It is 4pm. You have been working since 8am.",
    reasoning: "{k1} gets cover arranged, {k2} clarifies with Ravi, and {k3} prevents a repeat. The distractors ignore the gap ({d1}, {d5}), are unsafe ({d2}), blame ({d3}), or bypass the rota team ({d4}).",
    competing: "{d4} may find cover, but the rota team still needs to know, and anyone covering must be safe to work."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, making sure there is safe cover." }
  ],
  tags: ["rota", "shift swap", "staffing", "teamwork"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-393", pool, letters: "ACBED", format: "ranking", difficulty: "hard",
  title: "I want to stop dialysis", setting: "General medical ward", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Autonomy", "End-of-life communication", "Family conflict"],
  stem:
    "You are an F2 doctor on a medical ward. Mrs Fraser, 81, has been on haemodialysis for six years. She has capacity, and tells you she wants to stop dialysis. She understands she will die.\n\n" +
    "Her son, who is visiting, says, \"She doesn't mean it. She has to carry on.\"",
  options: [
    { text: "Ask Mrs Fraser about her reasons and what matters to her.",
      brief: "Understanding her wishes is the starting point.",
      detailed: "Her reasons may include things that can be changed, such as pain or fatigue, or may reflect a settled decision. Exploring them shows respect. It ranks first." },
    { text: "Tell her renal consultant, so a full discussion can be arranged.",
      brief: "A senior-led discussion is needed.",
      detailed: "Stopping dialysis is a major decision. Her consultant should discuss it with her, and involve palliative care if she wishes. It ranks second." },
    { text: "Offer to include her son in the discussion, if she agrees.",
      brief: "Supports her son, with her agreement.",
      detailed: "He is clearly distressed. Involving him, if she wishes, may help. It ranks third because her own wishes come first." },
    { text: "Arrange a psychiatric review, and pause the discussion until it is done.",
      brief: "Mood matters, but pausing treats her wish as a symptom.",
      detailed: "Depression should be considered as part of the assessment, and her consultant can do this. Halting the conversation until psychiatry has seen her delays her decision and treats her wish as a symptom." },
    { text: "Tell her she can't stop, as her son disagrees.",
      brief: "Overrides her decision.",
      detailed: "A patient with capacity can refuse treatment, even if her family disagrees. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond when a patient with capacity wants to stop life-sustaining treatment and her family disagrees.",
    keyDetails: "She has capacity. She understands the outcome. Her son disagrees.",
    reasoning: "{1} explores her wishes, {2} brings in her consultant, and {3} supports her son. {4} dismisses her wish, and {5} overrides it.",
    competing: "Some would put {3} above {2}. The key puts the consultant first because a decision this serious needs senior involvement."
  },
  refs: [
    { ref: "eol", note: "Patients' right to refuse treatment at the end of life." },
    { ref: "mca1", note: "The presumption of capacity." }
  ],
  tags: ["dialysis", "end of life", "capacity", "families"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-394", pool, letters: "ABE", format: "multiple_choice", difficulty: "easy",
  title: "Rude and dismissive", setting: "Emergency department", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Knowledge, skills and development", "Trust and professionalism"],
  competencies: ["Reflection", "Responding to complaints", "Openness"],
  stem:
    "You are an F2 doctor in the emergency department. The complaints team tells you that a patient's daughter has written to say you were rude and dismissive when she asked questions during a busy night shift.\n\n" +
    "You remember the conversation, and that you were rushed.",
  options: [
    // keyed
    { text: "Reflect honestly on how the conversation went.",
      brief: "Helps you learn from it.",
      detailed: "You were rushed, so it may well have come across badly. Reflecting honestly is the first step." },
    { text: "Discuss the complaint with your clinical supervisor.",
      brief: "Support and guidance.",
      detailed: "Your supervisor can help you reflect and respond appropriately." },
    { text: "Give the complaints team an honest account, with an apology.",
      brief: "Responds openly through the proper process.",
      detailed: "An honest account, with an apology for how she felt, helps resolve the complaint." },
    // distractors
    { text: "Ignore it, as you were busy.",
      brief: "Being busy doesn't remove the need to respond.",
      detailed: "The complaint needs a response, and there may be something to learn." },
    { text: "Phone the daughter yourself to explain that she misunderstood you.",
      brief: "Defensive, and bypasses the process.",
      detailed: "Contacting her directly to argue your case may make things worse." },
    { text: "Ask colleagues to write statements supporting you.",
      brief: "Defensive.",
      detailed: "This focuses on defending yourself rather than learning." },
    { text: "Put it down to her being a difficult relative.",
      brief: "Dismisses her experience.",
      detailed: "This avoids reflection and may repeat the problem." },
    { text: "Avoid her mother's family if they return.",
      brief: "Avoidance doesn't help.",
      detailed: "This doesn't resolve the complaint and may affect care." }
  ],
  explanation: {
    issue: "This tests whether you respond to a complaint about your behaviour openly, and use it to learn.",
    keyDetails: "The complaint is about your manner. You were rushed. It has come through the complaints team.",
    reasoning: "{k1} reflects, {k2} seeks support, and {k3} responds openly. The distractors ignore it ({d1}), are defensive ({d2}, {d3}), dismiss her ({d4}), or avoid her family ({d5}).",
    competing: "{d2} might seem a quick way to resolve it, but contacting her to argue your case is likely to escalate the complaint."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, responding to complaints." }
  ],
  tags: ["complaints", "reflection", "communication", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-395", pool, letters: "EDBAC", format: "ranking", difficulty: "moderate",
  title: "I feel nothing", setting: "General practice", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication", "Safety and quality"],
  competencies: ["Perinatal mental health", "Risk assessment", "Empathy"],
  stem:
    "You are an F2 doctor in general practice. Ms Carter, 29, gave birth five weeks ago and has come about contraception.\n\n" +
    "Towards the end, she says quietly, \"I feel nothing for the baby. I don't think I'm a good mother.\"",
  options: [
    { text: "Ask gently about her mood, and any thoughts of harm.",
      brief: "Assesses how she is and any risk.",
      detailed: "This could be postnatal depression or another perinatal mental illness. Asking sensitively, including about risk, is essential. It ranks first." },
    { text: "Discuss her with your GP supervisor before she leaves.",
      brief: "Makes sure she gets the right plan today.",
      detailed: "Your supervisor can help decide on treatment, follow-up or referral, such as to the perinatal mental health team. It ranks second." },
    { text: "Tell her these feelings are common and help is available.",
      brief: "Reassuring, but needs to follow an assessment.",
      detailed: "This may help her feel less ashamed. It ranks third because her mood and safety need assessing first." },
    { text: "Contact children's social care about the baby straight away.",
      brief: "Premature without an assessment.",
      detailed: "Her feelings alone aren't a safeguarding concern, and an immediate referral may damage her trust in seeking help." },
    { text: "Tell her it's the baby blues and will pass.",
      brief: "False reassurance.",
      detailed: "The baby blues usually settle within two weeks. At five weeks, this may be postnatal depression, which needs assessment. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you take a mother's disclosure about her feelings seriously and assess her mood and safety.",
    keyDetails: "She is five weeks postnatal. She feels detached from her baby. She mentions it at the end of the consultation.",
    reasoning: "{1} assesses her, {2} involves your supervisor, and {3} reassures her. {4} is premature, and {5} may miss a serious illness.",
    competing: "{2} and {3} are close. The key puts your supervisor first because she needs a plan before she leaves. {4} and {5} are also close; the key ranks {5} last because missing perinatal mental illness can have serious consequences."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, assessing patients' needs." }
  ],
  tags: ["perinatal mental health", "postnatal", "general practice", "risk"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-396", pool, letters: "CDF", format: "multiple_choice", difficulty: "moderate",
  title: "The system is down", setting: "General medical ward", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Safety and quality"],
  competencies: ["Downtime procedures", "Prioritisation", "Patient safety"],
  stem:
    "You are an F2 doctor on a medical ward in the evening. The electronic patient record and prescribing system has stopped working across the hospital. IT says it could be down for several hours.\n\n" +
    "Evening medicines are due, including insulin and antibiotics.",
  options: [
    // keyed
    { text: "Follow the trust's downtime procedure, using paper charts.",
      brief: "The trust plans for this.",
      detailed: "Downtime procedures set out how to prescribe and record safely when systems fail." },
    { text: "Make sure time-critical medicines are given on time.",
      brief: "Insulin and antibiotics can't wait.",
      detailed: "Missing or delaying time-critical medicines can cause harm. They should be prioritised." },
    { text: "Make sure paper records are entered once the system returns.",
      brief: "Keeps the record complete.",
      detailed: "Records made during downtime must be added to the electronic record later." },
    // distractors
    { text: "Wait until the system returns to give any medicines.",
      brief: "Delays essential treatment.",
      detailed: "It could be hours, and some medicines can't wait." },
    { text: "Rely on your memory of each patient's medicines.",
      brief: "Unreliable.",
      detailed: "Memory isn't safe for prescribing." },
    { text: "Take photos of patients' records on your phone in case it happens again.",
      brief: "A confidentiality risk.",
      detailed: "Storing patient information on a personal phone is a data protection risk." },
    { text: "Give each patient yesterday's doses without checking.",
      brief: "Unsafe.",
      detailed: "Doses may have changed since yesterday." },
    { text: "Leave the problem to the nurses.",
      brief: "Prescribing is your responsibility.",
      detailed: "Doctors need to prescribe on paper charts during downtime." }
  ],
  explanation: {
    issue: "This tests how you keep patients safe when a key system fails.",
    keyDetails: "The prescribing system is down for hours. Time-critical medicines are due.",
    reasoning: "{k1} follows the plan, {k2} prioritises time-critical medicines, and {k3} keeps the record complete. The distractors delay ({d1}), rely on memory ({d2}), breach confidentiality ({d3}), are unsafe ({d4}), or pass on responsibility ({d5}).",
    competing: "{d4} might seem practical, but doses may have changed and need checking."
  },
  refs: [
    { ref: "prescribing", note: "Safe prescribing, including during system failures." }
  ],
  tags: ["IT failure", "prescribing", "medical ward", "prioritisation"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-397", pool, letters: "CDEAB", format: "ranking", difficulty: "easy",
  title: "A good deal", setting: "Cardiology / respiratory", attribute: P,
  topic: "Conflicts of interest and self-prescribing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Gifts", "Conflicts of interest", "Professional boundaries"],
  stem:
    "You are an F2 doctor on a cardiology ward. Mr Doyle, 58, who owns a car dealership, is being discharged after a heart attack.\n\n" +
    "He thanks you, and offers you £3,000 off any car at his garage.",
  options: [
    { text: "Thank him warmly, and politely decline the discount.",
      brief: "A large personal benefit isn't appropriate.",
      detailed: "A discount this size could be seen to affect your judgement. Declining politely is the right response. It ranks first." },
    { text: "Check the trust's gifts and hospitality policy.",
      brief: "The policy guides what can be accepted.",
      detailed: "Checking the policy confirms what is acceptable. It ranks second because the right response is already clear." },
    { text: "Suggest he thanks the ward team with a card or a note instead.",
      brief: "A kind alternative.",
      detailed: "This lets him show his gratitude in an appropriate way. It ranks third." },
    { text: "Accept, as he has been discharged.",
      brief: "Discharge doesn't remove the conflict.",
      detailed: "He may need further care, and accepting a large benefit could still affect, or be seen to affect, your judgement." },
    { text: "Accept, and ask him to keep it between you.",
      brief: "Secretive and inappropriate.",
      detailed: "Asking for secrecy shows you know it is wrong. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you recognise a gift that could affect, or be seen to affect, your judgement.",
    keyDetails: "The discount is large. He is a patient. He is being discharged.",
    reasoning: "{1} declines politely, {2} checks the policy, and {3} offers an alternative. {4} accepts a large benefit, and {5} adds secrecy.",
    competing: "{2} and {3} are close. The key puts the policy first because it guides any decision about gifts."
  },
  refs: [
    { ref: "coi", note: "Gifts and conflicts of interest." }
  ],
  tags: ["gifts", "conflicts of interest", "boundaries", "cardiology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-398", pool, letters: "DGH", format: "multiple_choice", difficulty: "moderate",
  title: "Everyone can hear", setting: "Cardiology / respiratory", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Privacy", "Dignity", "Speaking up"],
  stem:
    "You are an F2 doctor on a cardiology ward round. In a six-bed bay at visiting time, the consultant starts telling Mr Burke, 49, loudly that his heart scan suggests damage caused by alcohol, and asks how much he drinks.\n\n" +
    "Mr Burke looks embarrassed and glances at the visitors at the next bed.",
  options: [
    // keyed
    { text: "Suggest quietly that you continue somewhere private.",
      brief: "Protects his privacy now.",
      detailed: "A quiet suggestion gives the consultant a chance to move the conversation." },
    { text: "Check afterwards how Mr Burke felt.",
      brief: "Shows care and may reveal more he wants to discuss.",
      detailed: "He may have questions he didn't feel able to ask." },
    { text: "Raise privacy on ward rounds with the team.",
      brief: "Improves practice for others.",
      detailed: "This may help the team find better ways to discuss sensitive news." },
    // distractors
    { text: "Leave it, as the consultant is leading the ward round.",
      brief: "His privacy matters.",
      detailed: "Juniors can raise concerns politely." },
    { text: "Tell the consultant off in front of the patient.",
      brief: "Unprofessional.",
      detailed: "Criticising a colleague in front of a patient undermines trust." },
    { text: "Ask the visitors at the next bed to step out of the bay.",
      brief: "Draws attention, and others can still hear.",
      detailed: "Other patients in the bay can still hear, and asking visitors to leave draws attention to him." },
    { text: "Draw the curtains around his bed.",
      brief: "Curtains aren't soundproof.",
      detailed: "This gives a false sense of privacy." },
    { text: "Report the consultant to the Caldicott guardian.",
      brief: "Disproportionate as a first step.",
      detailed: "This should be raised directly first." }
  ],
  explanation: {
    issue: "This tests whether you protect a patient's privacy and dignity when a senior discusses sensitive information in public.",
    keyDetails: "The discussion is sensitive. Visitors are nearby. Mr Burke is embarrassed.",
    reasoning: "{k1} protects his privacy now, {k2} checks on him, and {k3} improves practice. The distractors stay silent ({d1}), criticise publicly ({d2}), don't really protect his privacy ({d3}, {d4}), or escalate disproportionately ({d5}).",
    competing: "{d4} is a common reflex, but curtains don't stop others hearing."
  },
  refs: [
    { ref: "confidentiality", note: "Protecting patients' information from improper disclosure." }
  ],
  tags: ["confidentiality", "privacy", "ward round", "alcohol"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-399", pool, letters: "BDAC", format: "ranking", difficulty: "hard",
  title: "Doctors only?", setting: "Orthopaedics", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Collaboration, teamwork and leadership"],
  competencies: ["Teamwork", "Fairness", "Seeking guidance"],
  stem:
    "You organise the weekly teaching for F1 and F2 doctors in your hospital. Grace, a physician assistant on the orthopaedic wards, asks whether she can attend.\n\n" +
    "Another F2 says, \"It's doctors' teaching. She shouldn't come.\" You aren't sure what the policy is.",
  options: [
    { text: "Tell Grace you'll check with the teaching lead.",
      brief: "Fair, and finds out the policy.",
      detailed: "You don't know the policy. Checking, and telling Grace you will, is honest and respectful. It ranks first." },
    { text: "Ask your colleague what his concerns are.",
      brief: "Understanding his view helps.",
      detailed: "He may have a reason worth considering, such as the session's focus. It ranks second." },
    { text: "Let her attend this week, and check the policy afterwards.",
      brief: "Inclusive, but acts before checking.",
      detailed: "This is welcoming, but you don't know whether it fits the programme. It ranks third." },
    { text: "Tell Grace the session is full.",
      brief: "Dishonest.",
      detailed: "This is untrue, and avoids the issue rather than resolving it. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond fairly and honestly when you are unsure of the rules and colleagues disagree.",
    keyDetails: "You don't know the policy. A colleague objects. Grace has asked politely.",
    reasoning: "{1} checks the policy, {2} listens to your colleague, and {3} is inclusive but premature. {4} is dishonest.",
    competing: "Some would rank {3} above {2}, as it is welcoming. The key puts understanding your colleague's concern first, as it may affect what is appropriate."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, working collaboratively with colleagues." }
  ],
  tags: ["physician assistants", "teaching", "teamwork", "honesty"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-400", pool, letters: "CGH", format: "multiple_choice", difficulty: "moderate",
  title: "Filming the arrest", setting: "Acute medical unit", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication", "Safety and quality"],
  competencies: ["Supporting relatives", "Dignity", "Calm communication"],
  stem:
    "You are an F2 doctor on the cardiac arrest team, which the medical registrar is leading. Mr Price, 74, has arrested on the acute medical unit. His son is at the bedside.\n\n" +
    "The son is distressed and has started filming the resuscitation on his phone.",
  options: [
    // keyed
    { text: "Ask a staff member to support the son.",
      brief: "Relatives present need support.",
      detailed: "A staff member can explain what is happening and support him, whether he stays or not." },
    { text: "Ask him gently to stop filming.",
      brief: "Protects his father's dignity.",
      detailed: "Filming may compromise his father's dignity and the staff's privacy. A gentle request is likely to work." },
    { text: "Let him stay at the bedside if he wishes.",
      brief: "Relatives can be present with support.",
      detailed: "Many relatives find it helpful to be present, as long as they are supported and it doesn't affect the resuscitation." },
    // distractors
    { text: "Take his phone from him.",
      brief: "Confrontational.",
      detailed: "This may escalate the situation." },
    { text: "Call security straight away.",
      brief: "Disproportionate.",
      detailed: "He is distressed, not dangerous." },
    { text: "Pause chest compressions so that you can talk to him.",
      brief: "Compromises the resuscitation.",
      detailed: "Compressions must not be interrupted for this." },
    { text: "Order him to leave the room.",
      brief: "Harsh and may increase distress.",
      detailed: "He has a right to be supported, and may be calmer with help." },
    { text: "Ignore the filming and carry on.",
      brief: "His father's dignity matters.",
      detailed: "Filming should be addressed, gently." }
  ],
  explanation: {
    issue: "This tests how you support a distressed relative while protecting a patient's dignity during resuscitation.",
    keyDetails: "His son is distressed. He is filming. The registrar is leading the arrest.",
    reasoning: "{k1} supports him, {k2} addresses the filming gently, and {k3} respects his wish to be present. The distractors are confrontational ({d1}, {d4}), escalate ({d2}), compromise care ({d3}), or ignore it ({d5}).",
    competing: "{d4} might seem to solve the problem, but relatives can usually stay with support."
  },
  refs: [
    { ref: "eol", note: "Supporting families at the end of life." }
  ],
  tags: ["resuscitation", "relatives", "filming", "dignity"]
}
];
