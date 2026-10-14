// Practice batch P07, part 1 (sjt-126 to sjt-135). Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-126", letters: "BCH", format: "multiple_choice", difficulty: "moderate",
  title: "Bleeding on the postnatal ward", setting: "Obstetrics & gynaecology", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Prioritisation", "Emergency response", "Delegation"],
  stem:
    "You are an F2 doctor on the postnatal ward. You are writing the discharge prescription for a woman whose husband is waiting to take her home, and the midwife has asked you to finish it quickly.\n\n" +
    "Another midwife runs in to say that Mrs Ali, who gave birth an hour ago, is bleeding heavily and looks pale. She has pulled the emergency buzzer.",
  options: [
    // keyed
    { text: "Go to Mrs Ali straight away.",
      brief: "A postpartum haemorrhage is an emergency, and you need to be there.",
      detailed: "Heavy bleeding after birth can become life-threatening within minutes. Going straight away lets you help assess her and start treatment alongside the midwives." },
    { text: "Make sure the obstetric registrar has been called.",
      brief: "A senior obstetrician needs to lead the response.",
      detailed: "The emergency buzzer usually summons help, but checking that the registrar is on the way makes sure senior help arrives. Postpartum haemorrhage needs experienced management." },
    { text: "Tell the first midwife that the discharge prescription will have to wait.",
      brief: "Keeps your colleague informed so she can explain the delay to the family.",
      detailed: "The discharge isn't urgent. Letting the midwife know means she can explain to the woman and her husband, rather than leaving them wondering." },
    // distractors
    { text: "Finish the discharge prescription first, as it will only take two minutes.",
      brief: "Even two minutes matters in a haemorrhage.",
      detailed: "It may feel efficient to finish, but the bleeding woman needs help now, and you can return to the prescription afterwards." },
    { text: "Ask the midwife to start the haemorrhage protocol, and say you'll come once you've finished.",
      brief: "Midwives can start treatment, but a doctor is needed now.",
      detailed: "Midwives are trained to begin managing a postpartum haemorrhage, which makes this tempting. But she has called for medical help, and you should go." },
    { text: "Phone the anaesthetist yourself before going to see Mrs Ali.",
      brief: "The anaesthetist may be needed, but the emergency call usually summons them, and you should attend first.",
      detailed: "Anaesthetic support is often needed in a major haemorrhage, but the obstetric emergency team is normally summoned by the buzzer. Phoning separately delays your arrival." },
    { text: "Ask the waiting husband to be patient, explaining that there's an emergency on the ward.",
      brief: "Not your priority, and discloses information about another patient.",
      detailed: "He may need to be told there's a delay, but that isn't your job now, and mentioning an emergency on the ward isn't necessary." },
    { text: "Ask another F2 to finish the discharge prescription before you go.",
      brief: "Organising the prescription delays you reaching the emergency.",
      detailed: "Delegating is sensible later, but arranging it before you go delays your response to a life-threatening situation." }
  ],
  explanation: {
    issue: "This tests whether you recognise an emergency and prioritise it over routine work, while keeping colleagues informed.",
    keyDetails: "Mrs Ali is bleeding heavily and looks pale, an hour after birth. The emergency buzzer has been pulled. The discharge is routine.",
    reasoning: "{k1} responds to the emergency, {k2} makes sure senior help is coming, and {k3} lets your colleague manage the routine task. The distractors delay your response ({d1}, {d2}, {d3}, {d5}), or focus on the wrong person ({d4}).",
    competing: "{d2} is tempting because midwives do start haemorrhage management, but she has called for medical help."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, prioritising patients according to clinical need, and responding in emergencies." }
  ],
  tags: ["postpartum haemorrhage", "prioritisation", "emergencies", "obstetrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-127", letters: "BDEAC", format: "ranking", difficulty: "easy",
  title: "Will I play again?", setting: "Orthopaedics", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Breaking bad news", "Honesty", "Responding to emotion"],
  stem:
    "You are an F2 doctor in orthopaedics. Jamie, 24, is a professional footballer who has had surgery for a complex knee injury. This morning the consultant told him the injury may mean he can't play professionally again.\n\n" +
    "When you see him later, he is staring at the wall and asks you, \"Is that it, then? Is my career over?\"",
  options: [
    { text: "Sit down with him, and ask what he understood from the consultant.",
      brief: "Understanding what he heard helps you respond to his real worries.",
      detailed: "After devastating news, people often take in only part of what was said. Sitting with him and asking what he understood shows you care, and lets you respond honestly to what he is actually worried about." },
    { text: "Be honest that it's uncertain, and that recovery will become clearer over the coming months.",
      brief: "Honest without being falsely hopeful or crushing.",
      detailed: "The consultant said the injury may end his career, not that it will. Being honest about that uncertainty respects him. It ranks second because listening first helps you pitch it right." },
    { text: "Offer to arrange for him to talk to the consultant and physiotherapist about his rehabilitation.",
      brief: "Gives him a route to more detailed answers.",
      detailed: "The consultant and physiotherapist can give him a clearer picture. It ranks third because he needs a response from you now." },
    { text: "Reassure him that many players come back from serious knee injuries.",
      brief: "Well meant, but may give false hope.",
      detailed: "Some players do return, which makes this tempting, but you don't know his prognosis, and false hope may make the news harder later." },
    { text: "Tell him he should think about other careers now.",
      brief: "Premature and dismissive of his distress.",
      detailed: "Planning may eventually help, but saying this now, when the outcome is uncertain, is unkind and may increase his distress." }
  ],
  explanation: {
    issue: "This tests how you respond to a patient's distress after uncertain bad news: listening, being honest, and avoiding false hope or premature conclusions.",
    keyDetails: "His career may be over, but it isn't certain. He is in shock. He has asked you directly.",
    reasoning: "{1} listens, {2} is honest about uncertainty, and {3} gives him a route to more information. {4} offers false hope, and {5} is premature and dismissive.",
    competing: "Some would put honesty first. The key starts by listening, because his question may carry a range of worries you need to understand first."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, communicating honestly and supporting patients." }
  ],
  tags: ["bad news", "uncertainty", "orthopaedics", "young adults"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-128", letters: "DEG", format: "multiple_choice", difficulty: "moderate",
  title: "A pattern of prescribing errors", setting: "Elderly care ward", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Patient safety", "Supporting colleagues", "Raising concerns"],
  stem:
    "You are an F2 doctor on an elderly care ward. The ward pharmacist tells you that Dr Grey, an F1 on your team, has made five prescribing errors this week, including a tenfold dose error that was caught before it reached the patient.\n\n" +
    "The pharmacist asks you not to say that she was the one who raised it, as she works closely with Dr Grey.",
  options: [
    // keyed
    { text: "Encourage the pharmacist to report the errors through the incident reporting system.",
      brief: "Formal reporting allows patterns to be spotted and addressed.",
      detailed: "Incident reports are how a trust learns about patterns of errors. Pharmacists routinely report errors they intercept as part of their role, so reporting them needn't identify her as the person who raised the pattern with you." },
    { text: "Speak to Dr Grey supportively about her prescribing.",
      brief: "She may be struggling, and may not realise the pattern.",
      detailed: "A tenfold error suggests she may be under pressure or unsure of something. A supportive conversation, focused on helping her, may reveal the cause, and you can discuss errors you know of without naming the pharmacist." },
    { text: "Let your consultant or Dr Grey's clinical supervisor know about the pattern.",
      brief: "A pattern of serious errors needs senior support.",
      detailed: "Repeated errors, including a potentially serious one, need her supervisor's involvement so she can be supported and patients protected. This isn't a disciplinary step." },
    // distractors
    { text: "Tell the pharmacist you can't act unless she agrees to be named.",
      brief: "Patient safety concerns can be raised without naming the source.",
      detailed: "Being open is important, but you can act on the concern without naming her. Refusing to act leaves the risk in place." },
    { text: "Check all of Dr Grey's prescriptions yourself for the rest of the week.",
      brief: "Well meant, but not sustainable or a solution.",
      detailed: "This may catch errors in the short term, but you can't check every prescription, and it doesn't address why the errors are happening." },
    { text: "Tell Dr Grey that the pharmacist has been reporting her errors.",
      brief: "Breaks the pharmacist's request and may damage their working relationship.",
      detailed: "You can raise the errors without saying who told you. Naming the pharmacist goes against her request and could make it harder for her to raise concerns again." },
    { text: "Leave it to the pharmacist, as the errors were caught.",
      brief: "Errors caught this time may not be caught next time.",
      detailed: "The system worked this week, but a pattern of errors means patients are at risk." },
    { text: "Raise Dr Grey's errors at the next team meeting, so everyone can learn.",
      brief: "Group learning is useful, but naming her publicly isn't.",
      detailed: "Learning from errors as a team is valuable, but discussing an individual's errors in a meeting could humiliate her." }
  ],
  explanation: {
    issue: "This tests how you respond to a pattern of errors by a colleague, protecting patients and supporting her, while respecting the person who raised it.",
    keyDetails: "Five errors in a week, including a tenfold dose. The pharmacist doesn't want to be named. Dr Grey may be struggling.",
    reasoning: "{k1} makes sure the errors are formally recorded, {k2} supports Dr Grey, and {k3} involves her supervisor. The distractors fail to act ({d1}, {d4}), address the symptom not the cause ({d2}), betray the pharmacist ({d3}), or are public ({d5}).",
    competing: "{d2} is tempting because it protects patients in the short term, but it doesn't solve the problem."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting when a colleague's performance may put patients at risk, and supporting them." },
    { ref: "concerns", note: "Raising concerns about patient safety." }
  ],
  tags: ["prescribing errors", "colleagues", "pharmacists", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-129", letters: "ECBDA", format: "ranking", difficulty: "hard",
  title: "How much warfarin?", setting: "Cardiology / respiratory", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Safe prescribing", "Handover", "Clarifying uncertainty"],
  stem:
    "You are an F2 doctor on an evening shift in cardiology. A nurse asks you to prescribe tonight's warfarin for Mr Hunt, 75, who takes it for atrial fibrillation. Today's INR is 2.4.\n\n" +
    "The day team didn't mention it at handover. The only record is a handwritten note on the drug chart saying \"5 mg? — check\". Mr Hunt is asleep, and the day doctor has gone home but is usually reachable by phone.",
  options: [
    { text: "Check his records to find his usual warfarin dose.",
      brief: "His records should show the dose that has kept his INR in range.",
      detailed: "His anticoagulation clinic record, GP prescription list or admission medicines reconciliation should show his usual dose. With an INR of 2.4, his usual dose is probably the right one." },
    { text: "Phone the day doctor to ask about the dose.",
      brief: "They may know what was intended, though they may not answer.",
      detailed: "The day doctor may have been about to clarify the dose. It ranks second because the records are more reliable, and the doctor may not be reachable." },
    { text: "Ask the on-call pharmacist for advice.",
      brief: "A pharmacist can help, though they may need the same records.",
      detailed: "Pharmacists are expert in anticoagulation and may have access to his records. It ranks third because you can usually check the records yourself first." },
    { text: "Omit tonight's dose, and leave it for the day team to sort out.",
      brief: "One missed dose is low risk at this INR, but leaving it unresolved isn't ideal.",
      detailed: "With an INR of 2.4, missing one dose for atrial fibrillation carries little immediate risk, so this is safer than guessing. But it leaves the problem for others when you could probably resolve it." },
    { text: "Prescribe 5 mg, as noted on the chart.",
      brief: "A dose marked \"check\" hasn't been confirmed.",
      detailed: "The note itself says it needs checking. Prescribing an unconfirmed warfarin dose risks bleeding or under-treatment." }
  ],
  explanation: {
    issue: "This tests how you deal with an unclear handover of a high-risk drug, resolving the uncertainty rather than guessing or passing it on.",
    keyDetails: "Warfarin is high-risk. The only note says \"check\". His INR is in range. His records are likely to show his usual dose.",
    reasoning: "{1} finds the reliable answer, {2} asks the person who may know, and {3} gets expert help. {4} avoids harm but leaves it unresolved, and {5} prescribes an unconfirmed dose.",
    competing: "This is hard because {4} is not unsafe: one omitted dose at this INR is low risk. It ranks below the other options because you can usually resolve the question tonight, and above {5} because guessing a warfarin dose is riskier than omitting one."
  },
  refs: [
    { ref: "prescribing", note: "Making sure you have enough information to prescribe safely." }
  ],
  tags: ["warfarin", "handover", "prescribing", "anticoagulation"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-130", letters: "ADE", format: "multiple_choice", difficulty: "moderate",
  title: "Parents who disagree", setting: "Paediatrics", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Supporting families", "Shared decision-making", "Escalation"],
  stem:
    "You are an F2 doctor on a paediatric ward. Max, 4, has a severe neurodegenerative condition and is in hospital with his third chest infection this year. The consultant has discussed with his parents whether he should be ventilated again if he deteriorates.\n\n" +
    "His mother wants to focus on his comfort; his father wants everything done. Both have parental responsibility. This afternoon his father asks you to promise that Max will be ventilated if needed.",
  options: [
    // keyed
    { text: "Listen to his father's views and worries.",
      brief: "Understanding his perspective is the first step.",
      detailed: "His father may be frightened of losing his son or feel he is giving up on him. Listening carefully, without judgement, shows respect and may reveal what matters most to him." },
    { text: "Explain that you can't promise this, as it's a shared decision.",
      brief: "Honest about your role and the shared decision.",
      detailed: "Promising something you can't guarantee would be dishonest and could undermine the consultant's discussions with both parents. Explaining that the decision will be made with the consultant and both parents is honest." },
    { text: "Let the consultant know about the conversation and the parents' disagreement.",
      brief: "The consultant needs to know, and may arrange further support.",
      detailed: "The consultant may arrange another meeting, involve the palliative care team, or seek further advice if the disagreement can't be resolved." },
    // distractors
    { text: "Reassure him that Max will be ventilated if he needs it.",
      brief: "A promise you can't make.",
      detailed: "This would comfort him now, but the decision hasn't been made, and the promise could set up conflict with his wife and the team." },
    { text: "Tell him the mother's view should take priority, as she is Max's main carer.",
      brief: "Both parents have parental responsibility.",
      detailed: "Being Max's main carer doesn't give her view priority. Both parents have parental responsibility, and decisions should be made in Max's best interests." },
    { text: "Suggest that he applies to the court if he disagrees.",
      brief: "Premature; disagreements are usually resolved through discussion.",
      detailed: "Courts can resolve disagreements about children's treatment, but suggesting this to a parent at this stage is premature and could escalate the conflict." },
    { text: "Tell him that doctors make decisions about ventilation, not parents.",
      brief: "Dismisses the parents' role in decisions about their son.",
      detailed: "Doctors don't have to provide treatment they don't believe is in a child's best interests, but parents should be fully involved in these decisions. This is dismissive." },
    { text: "Suggest he talks to his wife to reach agreement before speaking to the team again.",
      brief: "Puts the burden of resolving the disagreement on the parents.",
      detailed: "Parents talking to each other may help, but it's the team's role to support them in reaching a decision, not to leave them to resolve it alone." }
  ],
  explanation: {
    issue: "This tests how you support a parent in a disagreement over end-of-life care for a child, honestly and within your role.",
    keyDetails: "Both parents have parental responsibility. The consultant is leading the discussion. Max's father wants a promise you can't give.",
    reasoning: "{k1} listens, {k2} is honest about how the decision will be made, and {k3} keeps the consultant informed. The distractors make a promise you can't keep ({d1}), take sides ({d2}), escalate prematurely ({d3}), dismiss the parents' role ({d4}), or leave them to resolve it alone ({d5}).",
    competing: "{d5} may seem helpful, but the team should support both parents to reach a decision in Max's best interests."
  },
  refs: [
    { ref: "u18", note: "Decision-making with parents, including when they disagree." },
    { ref: "eol", note: "Decisions about life-sustaining treatment, including for children." }
  ],
  tags: ["end of life", "parents", "ventilation", "paediatrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-131", letters: "CBAED", format: "ranking", difficulty: "moderate",
  title: "A handover at 23:00", setting: "Out-of-hours / community", attribute: P,
  topic: "An impaired or unwell colleague",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Patient safety", "Raising concerns", "Professional judgement"],
  stem:
    "You are an F2 doctor finishing an evening shift at an out-of-hours GP base. At 23:00 you hand over to Dr Lowe, who is working overnight.\n\n" +
    "You notice a strong smell of cannabis, his eyes are red, and he seems slow to respond. A colleague mentioned last week that she had noticed the same thing. He'll be the only doctor on overnight. The shift's clinical lead is in the building.",
  options: [
    { text: "Tell the shift's clinical lead your concern before you leave.",
      brief: "The clinical lead can assess whether he's fit to work and arrange cover.",
      detailed: "He will be the only doctor overnight, so patients may be at risk tonight. The clinical lead is responsible for the service and can make a judgement, and arrange cover if needed." },
    { text: "Speak to Dr Lowe privately about what you have noticed.",
      brief: "Gives him the chance to explain or step back.",
      detailed: "There may be an explanation, but a private conversation gives him the chance to respond, and he may decide himself that he shouldn't work. It ranks second because it doesn't, on its own, protect patients if he insists he's fine." },
    { text: "Hand over, and email the clinical lead your concerns tonight.",
      brief: "Raises the concern, but may not be read until it's too late.",
      detailed: "Writing it down creates a record, but the clinical lead may not see an email until the morning, by which time patients may have been at risk." },
    { text: "Mention your concern to the receptionist and driver on shift.",
      brief: "Spreads an unverified concern without getting it to someone who can act.",
      detailed: "They may notice problems overnight, but they aren't able to assess or act on his fitness to work, and telling them may unfairly damage his reputation." },
    { text: "Hand over as normal, as you can't be sure he has used cannabis.",
      brief: "Leaves patients at risk overnight.",
      detailed: "You can't be certain, but the signs are clear enough, and the stakes high enough, that you need to raise it. Doing nothing is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you act on a concern that a colleague may be impaired, when patients will depend on him overnight.",
    keyDetails: "He will be the only doctor overnight. The signs are clear, and a colleague has noticed the same before. You are about to leave.",
    reasoning: "{1} gets someone who can act, {2} gives him the chance to respond, and {3} raises it but too slowly. {4} spreads the concern unhelpfully, and {5} ignores the risk.",
    competing: "Some would speak to Dr Lowe first. That's reasonable; the key puts the clinical lead first because he will be alone overnight, and the decision about his fitness isn't yours or his alone."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting when a colleague may not be fit to practise." },
    { ref: "concerns", note: "Raising concerns promptly when patients may be at risk." }
  ],
  tags: ["impaired colleague", "substance use", "out-of-hours", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-132", letters: "CGH", format: "multiple_choice", difficulty: "easy",
  title: "A report you can't interpret", setting: "General practice", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Recognising limits", "Honesty", "Seeking advice"],
  stem:
    "You are an F2 doctor in a GP practice. Mrs Jones, 45, has brought a letter with her genetic test results from a private company. Her mother and sister were both diagnosed with breast cancer in their thirties.\n\n" +
    "The report describes a \"variant of uncertain significance\" in a gene, and she asks you what it means for her and her children. You aren't sure.",
  options: [
    // keyed
    { text: "Tell her honestly that you're not sure, and that you'll find out.",
      brief: "Honesty about your limits is better than guessing.",
      detailed: "Genetic reports can be complex, and getting it wrong could cause unnecessary worry or false reassurance. Being honest, and committing to find out, is the right approach." },
    { text: "Discuss the report with your GP supervisor.",
      brief: "Your supervisor can advise on the result and the next steps.",
      detailed: "Your supervisor may know what to do or how to get specialist advice. It also helps you learn." },
    { text: "Consider a referral to clinical genetics, with your supervisor.",
      brief: "Genetics specialists can interpret the result in the context of her family history.",
      detailed: "Clinical genetics teams can interpret uncertain results and assess her family history. This is likely to be needed regardless of the report." },
    // distractors
    { text: "Explain what you think a variant of uncertain significance probably means.",
      brief: "A guess may mislead her on an important question.",
      detailed: "You may have a general idea, which makes this tempting, but explaining something you're unsure of could mislead her about her risk or her children's." },
    { text: "Look it up online during the consultation and explain what you find.",
      brief: "May help you understand, but not enough to advise her on her risk.",
      detailed: "A quick search may tell you what the term means in general, but not what this result means for her, and she may need specialist interpretation." },
    { text: "Tell her that private tests aren't reliable, so she should ignore it.",
      brief: "Dismissive and potentially wrong.",
      detailed: "Some private tests have limitations, but dismissing the result entirely is wrong, and her family history may warrant assessment anyway." },
    { text: "Ask her to contact the private company for an explanation.",
      brief: "May help, but leaves her without NHS support for a family history that may need it.",
      detailed: "The company may explain the report, but her family history may need NHS assessment, and she has come to you for help." },
    { text: "Reassure her that uncertain results usually turn out to be harmless.",
      brief: "Reassurance you're not in a position to give.",
      detailed: "Many variants of uncertain significance are later reclassified as harmless, but you can't know about this one, and her family history matters." }
  ],
  explanation: {
    issue: "This tests whether you recognise the limits of your knowledge and seek help, rather than guessing on an important question.",
    keyDetails: "The result is uncertain. She has a strong family history of breast cancer. She is asking about her children too.",
    reasoning: "{k1} is honest, {k2} seeks advice, and {k3} gets specialist input. The distractors guess or reassure without knowledge ({d1}, {d2}, {d5}), dismiss the result ({d3}), or pass the problem back to her ({d4}).",
    competing: "{d5} is tempting because it's often true, but you can't apply it to her result with confidence."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, recognising and working within the limits of your competence." }
  ],
  tags: ["genetics", "competence", "general practice", "uncertainty"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-133", letters: "BDEAC", format: "ranking", difficulty: "moderate",
  title: "What did he tell you?", setting: "Psychiatry", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Confidentiality", "Supporting carers", "Communication"],
  stem:
    "You are an F2 doctor in a community mental health team. Today you assessed Mr Webb, 26, who has depression. He has capacity, has no thoughts of harming himself, and asked that his family aren't told about his assessment.\n\n" +
    "His mother, with whom he lives, phones you. She is very worried and asks you what he said in the assessment.",
  options: [
    { text: "Listen to her concerns and what she has noticed at home.",
      brief: "You can receive information from her without sharing his.",
      detailed: "Confidentiality doesn't stop you listening. What she has noticed may be important for his care, and listening shows you take her worries seriously." },
    { text: "Ask Mr Webb whether he would be willing for some information to be shared with her.",
      brief: "He may agree to some sharing, which could help them both.",
      detailed: "People sometimes change their minds, or agree to limited sharing. Asking him respects his wishes and may allow you to support his mother." },
    { text: "Explain that you can't discuss what he said without his consent.",
      brief: "Honest about the limits of what you can share.",
      detailed: "Explaining kindly why you can't share details helps her understand, without suggesting you're being unhelpful. It ranks third because listening and asking him are more constructive." },
    { text: "Give her information about support for carers.",
      brief: "Helpful, but less central than the steps above.",
      detailed: "Carers' support services can help her cope. It ranks fourth because it doesn't address her immediate question or concerns." },
    { text: "Tell her what he said, as she is his main carer.",
      brief: "Breaches his confidentiality against his clear wishes.",
      detailed: "Living with him doesn't give her a right to his information. Sharing it against his wishes, without a reason such as serious risk, breaches his confidentiality." }
  ],
  explanation: {
    issue: "This tests how you support a worried relative while respecting a patient's confidentiality.",
    keyDetails: "He has capacity and has asked that his family aren't told. His mother lives with him and is worried.",
    reasoning: "{1} listens, {2} seeks his consent, {3} explains the limits, and {4} offers support. {5} breaches his confidentiality.",
    competing: "Some would explain the limits first. The key starts by listening, because her information may be important and she needs to feel heard. Asking Mr Webb ranks above explaining the limits because, if he agrees, his mother can be properly involved."
  },
  refs: [
    { ref: "confidentiality", note: "Listening to relatives and carers while respecting a patient's confidentiality." }
  ],
  tags: ["confidentiality", "carers", "mental health", "relatives"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-134", letters: "BDF", format: "multiple_choice", difficulty: "hard",
  title: "Charts filled in at the end of the shift", setting: "Elderly care ward", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Patient safety", "Raising concerns", "Honest records"],
  stem:
    "You are an F2 doctor on an elderly care ward at 19:30. You notice two healthcare assistants completing the pressure-area care charts for several patients, filling in two-hourly turns for the whole day.\n\n" +
    "You have been on the ward most of the afternoon and didn't see some of those patients being turned. One of them, Mrs Lee, has a pressure ulcer.",
  options: [
    // keyed
    { text: "Make sure patients at high risk, including Mrs Lee, have their skin checked now.",
      brief: "If turns were missed, these patients need checking.",
      detailed: "Missed turns put frail patients at risk of new or worsening pressure damage. Checking their skin now deals with the immediate risk." },
    { text: "Raise your concern with the nurse in charge.",
      brief: "The nurse in charge can check what happened and address it.",
      detailed: "The nurse in charge is responsible for the ward tonight and can find out whether turns were missed, and make sure care is given properly." },
    { text: "Report your concern through the incident reporting system.",
      brief: "Records a possible pattern so it can be investigated.",
      detailed: "Inaccurate charts and possibly missed care are a safety concern. Reporting it allows the ward manager and trust to look into it fairly." },
    // distractors
    { text: "Speak to the healthcare assistants privately about what you saw.",
      brief: "Well meant, but the nurse in charge is better placed to address it.",
      detailed: "A direct conversation can be appropriate, and they may have a reason, such as turns done but not recorded. But possible falsification of records, affecting patient care, needs the nurse in charge." },
    { text: "Leave it, as nursing documentation is a matter for the nursing team.",
      brief: "It affects patient care, so it's your concern too.",
      detailed: "Nursing records are the nursing team's responsibility, but you have seen something that may mean patients aren't receiving care." },
    { text: "Report the healthcare assistants to the Nursing and Midwifery Council.",
      brief: "HCAs aren't NMC registrants, and local routes come first.",
      detailed: "Healthcare assistants aren't registered with the NMC, and concerns like this are first for the ward and trust to look into." },
    { text: "Correct the charts yourself to show which turns you didn't see.",
      brief: "You can't alter others' records, and you didn't see the whole day.",
      detailed: "This may seem honest, but you can't change their records, and you weren't watching every patient all afternoon." },
    { text: "Ask the patients' relatives to keep an eye on whether they are turned.",
      brief: "Shifts responsibility to families.",
      detailed: "Families may notice, but it isn't their role to monitor care, and this doesn't address the concern." }
  ],
  explanation: {
    issue: "This tests whether you act on a concern that records are being falsified and care missed, protecting patients first.",
    keyDetails: "The charts were completed retrospectively. You didn't see some turns. One patient has a pressure ulcer. There may be an innocent explanation.",
    reasoning: "{k1} protects patients now, {k2} involves the person responsible tonight, and {k3} records the concern formally. The distractors handle it informally ({d1}), ignore it or pass it to families ({d2}, {d5}), escalate inappropriately ({d3}), or alter records ({d4}).",
    competing: "{d1} is the hard distractor: speaking to them directly can be appropriate, but possible falsification of records, with patients at risk, needs the nurse in charge."
  },
  refs: [
    { ref: "concerns", note: "Raising concerns about care and records." },
    { ref: "gmp", note: "Domain 3, acting when patients may not be receiving the care they need." }
  ],
  tags: ["pressure ulcers", "records", "raising concerns", "elderly care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-135", letters: "ADCB", format: "ranking", difficulty: "moderate",
  title: "Unwell mid-shift", setting: "Out-of-hours / community", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Fitness to work", "Infection control", "Communication"],
  stem:
    "You are an F2 doctor on an evening out-of-hours GP shift. Halfway through, you start vomiting and have diarrhoea. You feel weak, and you suspect norovirus, which is going round your household.\n\n" +
    "There are three calls waiting for you, including two home visits to care homes.",
  options: [
    { text: "Tell the clinical lead now, and arrange to hand over your waiting calls.",
      brief: "You aren't fit to work, and the calls need reallocating.",
      detailed: "You are unwell and probably infectious, and home visits to care homes risk spreading norovirus to frail residents. Telling the clinical lead straight away lets them reallocate your calls." },
    { text: "Phone the most urgent waiting patient yourself, then tell the clinical lead.",
      brief: "Well meant, but delays telling the person who can reallocate everything.",
      detailed: "Making sure the most urgent patient isn't delayed is a caring instinct, and you can do it from the base without infection risk. But it delays the lead's response, and you may not be well enough." },
    { text: "Go home, and phone the clinical lead once you get there.",
      brief: "Leaving is right, but your calls are left unallocated in the meantime.",
      detailed: "You need to stop working, but leaving before telling anyone means your waiting calls sit unallocated until you phone." },
    { text: "Carry on with your shift, taking fluids and anti-diarrhoeal medication.",
      brief: "Risks spreading infection to vulnerable patients.",
      detailed: "Wanting to finish your shift is understandable, but visiting care homes while you probably have norovirus could cause an outbreak among frail residents." }
  ],
  explanation: {
    issue: "This tests whether you recognise that you aren't fit to work and manage stopping safely, protecting patients from infection and making sure their care continues.",
    keyDetails: "You are probably infectious. Two calls are to care homes. Calls are waiting.",
    reasoning: "{1} stops you working and arranges for your calls to be covered, {2} is well meant but delays the lead, and {3} leaves calls unallocated. {4} puts vulnerable patients at risk of infection.",
    competing: "Some would put going home above phoning the urgent patient. The key prefers {2} because it can be done safely by phone and doesn't leave patients unallocated, though {1} is better than both."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, not working when your health may put patients at risk." }
  ],
  tags: ["infection", "fitness to work", "out-of-hours", "care homes"]
}
];
