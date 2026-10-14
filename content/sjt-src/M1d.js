// Mock 1, part 4 (sjt-238 to sjt-250). Pool mock-1: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-1";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-238", pool, letters: "FGH", format: "multiple_choice", difficulty: "moderate",
  title: "Dismissed, and still happening", setting: "Oncology & palliative care", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Raising concerns", "Escalation", "Persistence"],
  stem:
    "You are an F2 doctor in oncology. A month ago you raised a concern with the day-unit manager that chemotherapy prescriptions were often reaching the pharmacy too late, delaying patients' treatment by hours.\n\n" +
    "She said it was \"just how it works\". The delays are continuing, and last week a patient's treatment was postponed to the next day.",
  options: [
    // keyed
    { text: "Raise it with your consultant or the clinical lead for the unit.",
      brief: "A senior clinician can escalate it further.",
      detailed: "If a concern isn't addressed at one level, raising it at the next is the right approach. Your consultant or the clinical lead can take it further." },
    { text: "Report the delays through the incident reporting system.",
      brief: "Formal reports show the scale of the problem.",
      detailed: "Each delay, especially the postponed treatment, should be reported. A pattern of reports is hard to ignore." },
    { text: "Consider contacting the trust's Freedom to Speak Up guardian.",
      brief: "An independent route when a concern has been dismissed.",
      detailed: "The guardian can help when concerns aren't being addressed through the usual routes." },
    // distractors
    { text: "Accept the manager's view and stop raising it.",
      brief: "Patients are still being affected.",
      detailed: "The manager's response doesn't change the risk to patients." },
    { text: "Contact the Care Quality Commission as your next step.",
      brief: "Internal routes haven't been exhausted.",
      detailed: "The CQC is an option if internal routes fail, but there are still senior and independent routes in the trust." },
    { text: "Tell patients about the delays so they can complain.",
      brief: "Puts the burden on patients.",
      detailed: "Patients can complain, but raising concerns is your responsibility." },
    { text: "Write the prescriptions earlier yourself, without raising it further.",
      brief: "Helps your patients, but not the system.",
      detailed: "This is helpful for the patients you see, but the problem affects others." },
    { text: "Post about the delays on social media.",
      brief: "Bypasses routes that can fix the problem.",
      detailed: "This could identify patients and won't fix the process." }
  ],
  explanation: {
    issue: "This tests whether you persist in raising a patient safety concern when it has been dismissed, using the right escalation routes.",
    keyDetails: "The concern was dismissed. Delays continue. A patient's treatment was postponed.",
    reasoning: "{k1} escalates to a senior, {k2} records the pattern, and {k3} uses an independent route. The distractors give up ({d1}), escalate externally too soon ({d2}, {d5}), shift the burden ({d3}), or solve only part of it ({d4}).",
    competing: "{d4} is the tempting option because it helps your patients, but the system problem remains."
  },
  refs: [
    { ref: "concerns", note: "Escalating concerns when they aren't addressed." },
    { ref: "ftsu", note: "Freedom to Speak Up guardians." }
  ],
  tags: ["raising concerns", "escalation", "oncology", "delays"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-239", pool, letters: "BADC", format: "ranking", difficulty: "hard",
  title: "A drink every night", setting: "Elderly care ward", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Self-awareness", "Seeking help", "Fitness to work"],
  stem:
    "You are an F2 doctor on an elderly care ward. Over the past two months, you've started drinking most evenings to unwind after difficult shifts, and you now need more to feel the effect.\n\n" +
    "It hasn't affected your work so far, but you're worried about it.",
  options: [
    { text: "See your GP or NHS Practitioner Health in confidence.",
      brief: "Confidential help, early, is the best route.",
      detailed: "Recognising a problem early and seeking confidential support gives you the best chance of addressing it." },
    { text: "Cut down, and look for other ways to unwind after shifts.",
      brief: "Positive, but may be hard without support.",
      detailed: "Trying to change your habits is good, but it may not be enough if your drinking is escalating." },
    { text: "Tell your educational supervisor.",
      brief: "They can support you, though confidential help may feel easier first.",
      detailed: "Your supervisor can offer support and adjustments. It ranks third because confidential services may be easier to approach first, and your work isn't yet affected." },
    { text: "Carry on, as it hasn't affected your work.",
      brief: "Escalating use is a warning sign.",
      detailed: "It may not have affected your work yet, but needing more to feel the effect is a concern." }
  ],
  explanation: {
    issue: "This tests whether you recognise a developing problem with your own health and seek help early.",
    keyDetails: "Your drinking is increasing. It hasn't yet affected your work. You're worried.",
    reasoning: "{1} gets confidential help, {2} tries to change, and {3} involves your supervisor. {4} ignores a warning sign.",
    competing: "This is hard because {3} is also appropriate. If your drinking started to affect your work, telling your supervisor would become essential."
  },
  refs: [
    { ref: "practitionerhealth", note: "Confidential support for doctors, including with alcohol." },
    { ref: "gmp", note: "Domain 1, seeking help when your health may affect your work." }
  ],
  tags: ["alcohol", "doctors' health", "wellbeing", "self-awareness"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-240", pool, letters: "ACD", format: "multiple_choice", difficulty: "moderate",
  title: "Pork-derived", setting: "Cardiology / respiratory", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting beliefs", "Shared decision-making", "Working with pharmacists"],
  stem:
    "You are an F2 doctor on a respiratory ward. Mr Khan, 65, has been prescribed daily enoxaparin injections to prevent blood clots.\n\n" +
    "When he learns that enoxaparin is derived from pork, he refuses it, saying it is against his religion.",
  options: [
    // keyed
    { text: "Thank him for telling you, and ask the pharmacist about alternatives.",
      brief: "Non-animal alternatives may exist.",
      detailed: "Synthetic alternatives, such as fondaparinux, or mechanical methods may be suitable. The pharmacist can advise." },
    { text: "Explain the risks of having no clot prevention.",
      brief: "He should understand the risk.",
      detailed: "He should know why the injections were prescribed, so he can weigh his options." },
    { text: "Record his preference in his notes.",
      brief: "Prevents other staff offering it again.",
      detailed: "A note means others will know to use alternatives." },
    // distractors
    { text: "Give the injection, as the amount of pork-derived material is very small.",
      brief: "Overrides his informed refusal.",
      detailed: "He has refused, and giving it anyway would be wrong, however small the amount." },
    { text: "Tell him he should accept it, as religious leaders generally allow it.",
      brief: "Not your place, and there may be alternatives.",
      detailed: "Some faith guidance permits this, but it's for him to decide, and alternatives may exist." },
    { text: "Stop his clot prevention altogether.",
      brief: "Leaves him at risk when alternatives may exist.",
      detailed: "Stopping without considering alternatives may put him at risk of a clot." },
    { text: "Ask his family to persuade him to accept it.",
      brief: "Pressures him.",
      detailed: "This doesn't respect his decision." },
    { text: "Tell him he can't stay in hospital without it.",
      brief: "Coercive and incorrect.",
      detailed: "His admission doesn't depend on accepting this medicine." }
  ],
  explanation: {
    issue: "This tests whether you respect a patient's religious objection to a medicine, while making sure he has safe alternatives.",
    keyDetails: "He has refused enoxaparin on religious grounds. Alternatives may exist. He is at risk of clots.",
    reasoning: "{k1} looks for alternatives, {k2} informs his choice, and {k3} records his preference. The distractors override him ({d1}), give religious advice ({d2}), leave him at risk ({d3}), or pressure him ({d4}, {d5}).",
    competing: "{d2} may be well meant, but religious interpretation is his to make."
  },
  refs: [
    { ref: "beliefs", note: "Respecting patients' beliefs about treatment." },
    { ref: "consent", note: "Respecting informed decisions." }
  ],
  tags: ["religion", "medicines", "VTE prophylaxis", "pharmacists"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-241", pool, letters: "EABDC", format: "ranking", difficulty: "moderate",
  title: "Move him now", setting: "Acute medical unit", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Patient safety", "Escalation", "Professional communication"],
  stem:
    "You are an F2 doctor on the acute medical unit. Mr Hall, 60, was admitted with breathlessness and pleuritic chest pain. His CT pulmonary angiogram, requested to look for a pulmonary embolism, has just been reported, but no one has looked at it yet.\n\n" +
    "The bed manager is pressing for beds, and the medical registrar asks you to transfer him to a general ward now.",
  options: [
    { text: "Tell the registrar the CT report is back, and ask to review it first.",
      brief: "The result may change his management.",
      detailed: "If the scan shows a pulmonary embolism, he may need treatment before moving. Reviewing it first takes moments." },
    { text: "Review the CT report yourself straight away.",
      brief: "Quick, and may settle the question.",
      detailed: "Reading the report takes a minute and may show whether anything needs doing before transfer. It ranks second because the registrar should know too." },
    { text: "Make sure the receiving ward knows the CT result and any plan.",
      brief: "Safe handover if he does move.",
      detailed: "Whatever happens, the ward team must know the result. It ranks third because reviewing it comes first." },
    { text: "Refuse to transfer him anywhere until the consultant has been in to see him.",
      brief: "Disproportionate when the report can be reviewed in minutes.",
      detailed: "Your concern is right, but a quick review solves it, and refusing outright may cause conflict." },
    { text: "Transfer him as asked, as the registrar has made the decision.",
      brief: "He may move without a significant result being acted on.",
      detailed: "The registrar may not know the report is back. Transferring him without anyone looking at it could delay treatment, and is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you raise a concern with a senior before an action that might be unsafe, without being obstructive.",
    keyDetails: "The CT report is back but unread. The registrar may not know. There is pressure on beds.",
    reasoning: "{1} informs the registrar, {2} reviews the result, and {3} makes sure the ward knows. {4} is obstructive, and {5} risks a missed result.",
    competing: "Some would read the report first. That's reasonable; the key puts telling the registrar first because the decision is theirs, and they may simply not know."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, raising concerns with seniors about patient safety." }
  ],
  tags: ["results", "transfers", "pulmonary embolism", "acute medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-242", pool, letters: "AFH", format: "multiple_choice", difficulty: "easy",
  title: "What her friend said", setting: "Intensive care", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Child safeguarding", "Documentation", "Mental health"],
  stem:
    "You are an F2 doctor in intensive care. Lily, 15, has been admitted after an overdose and is sedated.\n\n" +
    "Her friend, who came in with her family, tells you quietly that Lily had been sent threatening messages by an older man she met online, who was demanding photos.",
  options: [
    // keyed
    { text: "Tell your consultant and the safeguarding team.",
      brief: "Possible online exploitation is a serious safeguarding concern.",
      detailed: "This information suggests Lily may have been exploited. The safeguarding team can involve children's social care and the police." },
    { text: "Record what her friend told you accurately.",
      brief: "An accurate record supports the safeguarding response.",
      detailed: "Writing down exactly what was said, and by whom, helps those who need to act." },
    { text: "Make sure her mental health is assessed when she recovers.",
      brief: "She'll need specialist support.",
      detailed: "She will need a mental health assessment, and support to stay safe." },
    // distractors
    { text: "Look at Lily's phone to find the messages.",
      brief: "Not your role, and could affect a police investigation.",
      detailed: "The police and safeguarding team will decide how to handle evidence." },
    { text: "Ask her friend for Lily's social media login.",
      brief: "Inappropriate and could compromise evidence.",
      detailed: "This isn't your role." },
    { text: "Wait until Lily wakes up to ask her about it.",
      brief: "Delays action on a serious concern.",
      detailed: "She may not be able to talk for some time, and others may be at risk." },
    { text: "Tell her parents what her friend said, before telling anyone else.",
      brief: "The safeguarding team should guide this.",
      detailed: "Her parents may need to know, but the safeguarding team should advise how." },
    { text: "Contact the man yourself through social media.",
      brief: "Dangerous and could compromise an investigation.",
      detailed: "This is not your role." }
  ],
  explanation: {
    issue: "This tests how you respond to information suggesting a young person may have been exploited.",
    keyDetails: "Lily is 15. The information is second-hand. She is sedated.",
    reasoning: "{k1} involves safeguarding, {k2} records it, and {k3} plans her support. The distractors interfere with evidence ({d1}, {d2}, {d5}), delay ({d3}), or act before advice ({d4}).",
    competing: "{d4} may seem natural, but the safeguarding team should guide how parents are told."
  },
  refs: [
    { ref: "workingtogether", note: "Responding to concerns about child exploitation." },
    { ref: "u18", note: "Protecting children and young people." }
  ],
  tags: ["child safeguarding", "online exploitation", "overdose", "adolescents"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-243", pool, letters: "ADEBC", format: "ranking", difficulty: "moderate",
  title: "Results that were never collected", setting: "Non-clinical (audit)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Research integrity", "Raising concerns", "Honesty"],
  stem:
    "You are an F2 doctor. Your name is on a quality-improvement poster being presented at a regional meeting next week. The project lead, a registrar, added \"second-cycle\" results to the poster.\n\n" +
    "You know the second cycle was never carried out, because you were meant to collect the data and the project stalled.",
  options: [
    { text: "Raise it privately with the registrar before the meeting.",
      brief: "They may correct it, or explain.",
      detailed: "There may be an explanation, but if the data wasn't collected, presenting it would be dishonest. A private conversation gives them the chance to correct it." },
    { text: "Seek advice from your educational supervisor.",
      brief: "Support if the registrar doesn't correct it.",
      detailed: "Your supervisor can advise and help. It ranks second because a direct conversation comes first." },
    { text: "Ask for your name to be removed if the poster isn't corrected.",
      brief: "Protects your integrity, though doesn't stop the poster.",
      detailed: "You shouldn't be associated with false results. But this doesn't prevent the misleading poster being presented." },
    { text: "Leave it, as it's only a poster.",
      brief: "Fabricated results are serious, wherever they appear.",
      detailed: "A poster still presents results as real, and your name is on it." },
    { text: "Email the meeting organisers anonymously.",
      brief: "Bypasses local routes.",
      detailed: "This may stop the poster, but bypasses the chance to resolve it properly." }
  ],
  explanation: {
    issue: "This tests how you respond to fabricated results in a project you're named on.",
    keyDetails: "The data were never collected. Your name is on the poster. The meeting is next week.",
    reasoning: "{1} raises it directly, {2} seeks support, and {3} protects your integrity. {4} ignores fabrication, and {5} bypasses local routes.",
    competing: "The order of {4} and {5} is close. The key ranks ignoring it as worse, as the misleading poster would be presented with your name on it."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in research and audit." }
  ],
  tags: ["research integrity", "fabrication", "quality improvement", "posters"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-244", pool, letters: "BEG", format: "multiple_choice", difficulty: "hard",
  title: "\"He never wanted a ventilator\"", setting: "Intensive care", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Advance decisions", "Best interests", "Family communication"],
  stem:
    "You are an F2 doctor in intensive care. Mr Hughes, 70, has severe pneumonia and is deteriorating. He is too drowsy to take part in decisions. His GP letter says that last year he told his GP he \"wouldn't want to be on a breathing machine\".\n\n" +
    "His wife and son say he'd want \"everything done\" and ask for him to be ventilated.",
  options: [
    // keyed
    { text: "Check whether he made a written advance decision.",
      brief: "A valid, applicable advance decision is legally binding.",
      detailed: "An advance decision to refuse life-sustaining treatment must be written, signed, witnessed and state that it applies even if his life is at risk. If one exists, it must be followed." },
    { text: "Ask his family and GP about what he said, and why.",
      brief: "His past wishes are central to his best interests.",
      detailed: "If there's no valid advance decision, his previously expressed wishes are still an important part of a best-interests decision." },
    { text: "Inform the consultant urgently.",
      brief: "A decision about ventilation is needed soon.",
      detailed: "He is deteriorating. The consultant needs to make a decision, informed by his wishes and his family's views." },
    // distractors
    { text: "Ventilate him, as his family want.",
      brief: "His family can't decide for him.",
      detailed: "Their views matter, but the decision is made in his best interests, taking his wishes into account." },
    { text: "Don't ventilate him, as the GP letter records that he wouldn't want it.",
      brief: "A verbal comment isn't necessarily a valid advance decision.",
      detailed: "His comment is important, but without a valid written advance decision, it's part of a best-interests decision, not binding." },
    { text: "Apply to the Court of Protection immediately.",
      brief: "Not needed at this stage.",
      detailed: "Courts may be needed for serious disputes, but there's time for a best-interests discussion first." },
    { text: "Ask the family to decide, as they know him best.",
      brief: "They can't consent on his behalf unless they hold a health power of attorney.",
      detailed: "Unless they have a lasting power of attorney for health, they can't make the decision." },
    { text: "Wait for him to become alert enough to decide.",
      brief: "He may deteriorate before then.",
      detailed: "Waiting may not be possible." }
  ],
  explanation: {
    issue: "This tests your understanding of advance decisions and best interests when a patient's past wishes and his family's views conflict.",
    keyDetails: "He can't decide now. His GP recorded a verbal wish. His family disagree.",
    reasoning: "{k1} checks for a legally binding decision, {k2} gathers his wishes, and {k3} involves the consultant urgently. The distractors defer to the family ({d1}, {d4}), treat a verbal comment as binding ({d2}), escalate prematurely ({d3}), or delay ({d5}).",
    competing: "{d2} is the hard distractor: his wishes are very important, but a verbal comment isn't a valid advance decision to refuse life-sustaining treatment."
  },
  refs: [
    { ref: "mca4", note: "Best interests: past wishes and the views of those close to the patient." },
    { ref: "eol", note: "Advance decisions and life-sustaining treatment." }
  ],
  tags: ["advance decisions", "best interests", "ventilation", "families"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-245", pool, letters: "EADCB", format: "ranking", difficulty: "moderate",
  title: "\"Keep this between us\"", setting: "Psychiatry", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Confidentiality", "Risk assessment", "Public protection"],
  stem:
    "You are an F2 doctor on an adult psychiatric ward. Mr Burns, 35, an informal patient, tells you he plans to hurt his ex-partner when he is discharged next week, and describes how.\n\n" +
    "He then asks you to keep it confidential.",
  options: [
    { text: "Explain that you can't keep this confidential.",
      brief: "Honest about the limits of confidentiality.",
      detailed: "Confidentiality can be breached to protect others from serious harm. Being honest about this straight away is better than a false promise, and he has already described his plan." },
    { text: "Ask him more about his plan and intentions.",
      brief: "Understanding the risk helps decide what to do.",
      detailed: "Knowing how serious and settled his intention is helps the team assess the risk. It ranks second because he has already described his plan, and he should know straight away that you can't keep it confidential." },
    { text: "Inform the consultant immediately.",
      brief: "The team needs to assess and manage the risk.",
      detailed: "The consultant will decide on next steps, which may include informing the police or the ex-partner. It ranks third because understanding the risk and being honest come first." },
    { text: "Phone his ex-partner yourself to warn her.",
      brief: "May be needed, but should be decided by the team.",
      detailed: "She may need to be warned, but the team should decide how, with police involvement if needed." },
    { text: "Agree to keep it confidential.",
      brief: "Could leave someone at serious risk.",
      detailed: "This is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to a disclosure of intent to harm someone, balancing confidentiality and public protection.",
    keyDetails: "His plan is specific. He is due to be discharged. He has asked for confidentiality.",
    reasoning: "{1} is honest about confidentiality, {2} helps assess the risk, and {3} involves the consultant. {4} acts beyond your role, and {5} leaves someone at risk.",
    competing: "Some would inform the consultant first, and you should do so promptly. The key starts with honesty about confidentiality because he has asked you directly and has already described a specific plan."
  },
  refs: [
    { ref: "confidentiality", note: "Disclosing information to protect others from serious harm." }
  ],
  tags: ["confidentiality", "risk to others", "psychiatry", "public protection"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-246", pool, letters: "CDH", format: "multiple_choice", difficulty: "moderate",
  title: "\"Can I see a proper doctor?\"", setting: "Paediatrics", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Patients, partnership and communication", "Knowledge, skills and development"],
  competencies: ["Responding to criticism", "Composure", "Reflection"],
  stem:
    "You are an F2 doctor in paediatrics. You have just examined Noah, 3, who has a fever and a rash. You hesitated while explaining your findings to his mother.\n\n" +
    "She says, \"You don't seem sure. Can I see a proper doctor?\"",
  options: [
    // keyed
    { text: "Acknowledge her concern calmly, without becoming defensive.",
      brief: "Her worry is about Noah, not you.",
      detailed: "She is worried about her son. A calm response helps keep her trust." },
    { text: "Offer to ask your registrar to review Noah.",
      brief: "Senior input may reassure her and check your assessment.",
      detailed: "A fever and rash in a young child can be serious, and a senior review is reasonable. It also respects her request." },
    { text: "Reflect afterwards on how you explained your findings.",
      brief: "A chance to improve.",
      detailed: "Thinking about why you hesitated may help you communicate more clearly in future." },
    // distractors
    { text: "Explain that you are a fully qualified doctor.",
      brief: "May come across as defensive.",
      detailed: "This may be true, but it doesn't address her concern." },
    { text: "Tell her the registrar is too busy.",
      brief: "Dismisses a reasonable request.",
      detailed: "This leaves her worried and doesn't help Noah." },
    { text: "Ask her to be more respectful.",
      brief: "Likely to escalate.",
      detailed: "Her comment may hurt, but she's anxious about her child." },
    { text: "Insist on completing your assessment before anyone else sees him.",
      brief: "Prioritises your role over her concern.",
      detailed: "Completing your assessment is fine, but refusing senior input isn't." },
    { text: "Leave, and ask the nurse to find another doctor.",
      brief: "Walks away from the situation.",
      detailed: "This leaves the family without a clear plan." }
  ],
  explanation: {
    issue: "This tests how you respond professionally when a parent questions your competence.",
    keyDetails: "Noah has a fever and rash. You hesitated. His mother is worried.",
    reasoning: "{k1} stays calm, {k2} offers senior input, and {k3} reflects. The distractors are defensive ({d1}, {d3}, {d4}), dismissive ({d2}), or avoidant ({d5}).",
    competing: "{d1} is the tempting option, but it doesn't address her worry."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, reflecting on your practice; Domain 2, responding to patients' concerns." }
  ],
  tags: ["criticism", "parents", "paediatrics", "senior review"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-247", pool, letters: "DACBE", format: "ranking", difficulty: "easy",
  title: "A friend in crisis", setting: "Non-clinical (social)", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Responding to distress", "Suicide awareness", "Boundaries"],
  stem:
    "You are an F2 doctor. Over coffee, your close friend Sam, who isn't a doctor, tells you she has been thinking about ending her life. She has been struggling since losing her job.\n\n" +
    "She asks you not to tell anyone.",
  options: [
    { text: "Listen, and ask her directly whether she has made any plans and whether she is safe now.",
      brief: "Asking directly helps you understand the risk.",
      detailed: "Asking about suicide doesn't increase risk. Understanding whether she has plans helps you decide what support she needs." },
    { text: "Encourage her to speak to her GP or a crisis service today, and offer to help her contact them.",
      brief: "Professional help is important.",
      detailed: "She needs professional support. Offering to help her make contact makes it more likely to happen." },
    { text: "Explain that you can't promise secrecy if you're worried she's in danger.",
      brief: "Honest about the limits.",
      detailed: "If she were at immediate risk, you would need to get help. Being honest is better than a false promise." },
    { text: "Tell her she has so much to live for.",
      brief: "Well meant, but may make her feel unheard.",
      detailed: "This can feel dismissive to someone who is struggling." },
    { text: "Promise not to tell anyone.",
      brief: "Could leave her without help.",
      detailed: "This may feel supportive, but could prevent her getting help she needs." }
  ],
  explanation: {
    issue: "This tests how you respond to a friend's disclosure of suicidal thoughts: supporting her, assessing risk, and helping her get help.",
    keyDetails: "She is a friend, not a patient. She is struggling. She has asked for secrecy.",
    reasoning: "{1} assesses her safety, {2} gets her help, and {3} is honest. {4} is dismissive, and {5} could leave her without help.",
    competing: "The order of {4} and {5} is close. The key ranks the promise last because it could prevent her getting help."
  },
  refs: [
    { ref: "ng225", note: "Responding to people at risk of suicide." }
  ],
  tags: ["suicide risk", "friends", "mental health", "support"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-248", pool, letters: "ABG", format: "multiple_choice", difficulty: "moderate",
  title: "No cath lab tonight", setting: "Cardiology / respiratory", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Emergency care", "Escalation", "Following protocols"],
  stem:
    "You are an F2 doctor on a cardiology ward at night. Mr Wright, 62, an inpatient, develops central chest pain, and his ECG shows ST elevation.\n\n" +
    "The cardiac catheter lab is out of action because of an equipment failure.",
  options: [
    // keyed
    { text: "Call the cardiology registrar immediately.",
      brief: "A STEMI needs senior input urgently.",
      detailed: "The registrar can decide on the best treatment, such as transfer to another centre or thrombolysis." },
    { text: "Follow the local protocol for when the cath lab is unavailable.",
      brief: "Protocols set out the alternatives.",
      detailed: "Hospitals have protocols for this, usually transfer to another centre or thrombolysis." },
    { text: "Start initial treatment for acute coronary syndrome.",
      brief: "Initial treatment should begin without delay.",
      detailed: "Initial management, such as aspirin and pain relief, can start while the plan is made." },
    // distractors
    { text: "Wait for the cath lab to be repaired.",
      brief: "Delays essential treatment.",
      detailed: "Delays in treating a STEMI cause more heart muscle damage." },
    { text: "Arrange transfer to another hospital without discussing it with a senior.",
      brief: "Transfer may be right, but needs senior decision.",
      detailed: "Transfer may be the plan, but should be decided by a senior." },
    { text: "Give thrombolysis yourself, without discussing it.",
      brief: "Needs a senior decision.",
      detailed: "Thrombolysis carries risks and needs senior input." },
    { text: "Repeat the ECG in an hour to see if it changes.",
      brief: "Delays treatment.",
      detailed: "A STEMI needs treatment now." },
    { text: "Ask the nurse to give GTN and call you back.",
      brief: "Delays your own assessment.",
      detailed: "He needs a doctor now." }
  ],
  explanation: {
    issue: "This tests how you respond to an emergency when the usual system isn't available.",
    keyDetails: "He has a STEMI. The cath lab is unavailable. There are protocols.",
    reasoning: "{k1} gets senior help, {k2} follows the protocol, and {k3} starts treatment. The distractors delay ({d1}, {d4}, {d5}), or act without a senior ({d2}, {d3}).",
    competing: "{d2} is the tempting option, but the decision to transfer should be made by a senior."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, providing emergency care; Domain 3, asking for help." }
  ],
  tags: ["STEMI", "system failure", "cardiology", "emergencies"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-249", pool, letters: "CDBA", format: "ranking", difficulty: "hard",
  title: "Tension in theatre", setting: "Orthopaedics", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Teamwork", "Speaking up", "Patient safety"],
  stem:
    "You are an F2 doctor assisting in orthopaedic theatre. Before the second case, the anaesthetist and the surgeon had a heated argument about the list running late.\n\n" +
    "During the case, they aren't speaking to each other, and the theatre team is tense.",
  options: [
    { text: "Stay focused, and speak up if anything affects patient safety.",
      brief: "Patient safety comes first.",
      detailed: "Tension can lead to poor communication. Staying focused and being ready to speak up protects the patient." },
    { text: "Mention to the theatre lead afterwards that the tension affected the team.",
      brief: "Helps prevent it happening again.",
      detailed: "The theatre lead can address it. It ranks second because the patient comes first." },
    { text: "Talk to your colleagues afterwards about how they're feeling.",
      brief: "Supportive, but doesn't address the cause.",
      detailed: "This supports the team, but doesn't resolve the conflict." },
    { text: "Take the surgeon's side, as you work for him.",
      brief: "Taking sides makes things worse.",
      detailed: "This adds to the conflict." }
  ],
  explanation: {
    issue: "This tests how you keep patients safe when there is conflict in the team.",
    keyDetails: "The argument was before the case. They aren't communicating. The team is tense.",
    reasoning: "{1} keeps the patient safe, {2} addresses the conflict afterwards, and {3} supports colleagues. {4} takes sides.",
    competing: "This is hard because {2} and {3} are close. The key ranks {2} higher because it addresses the cause."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, working effectively in teams and speaking up about safety." }
  ],
  tags: ["teamwork", "conflict", "theatre", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-250", pool, letters: "CDF", format: "multiple_choice", difficulty: "moderate",
  title: "Students in the room", setting: "Paediatrics", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Dignity", "Consent for teaching", "Communication with young people"],
  stem:
    "You are an F2 doctor in paediatrics. You need to examine Jacob, 14, who has had a dull ache and a soft swelling in his scrotum for three weeks. He is otherwise well. Three medical students are with you, and his mother is present.\n\n" +
    "Jacob looks very embarrassed.",
  options: [
    // keyed
    { text: "Ask Jacob privately whether the students can stay.",
      brief: "He should decide who is present.",
      detailed: "Patients should be asked before students are present, especially for intimate examinations. Asking him privately makes it easier to say no." },
    { text: "Ask the students to wait outside if he prefers.",
      brief: "Respects his choice.",
      detailed: "The students can learn another time." },
    { text: "Keep him covered, and explain what you'll do.",
      brief: "Protects his dignity.",
      detailed: "Explaining and minimising exposure reduces embarrassment." },
    // distractors
    { text: "Tell him the students need to learn.",
      brief: "Puts pressure on him.",
      detailed: "Students do need to learn, but not at the cost of his dignity." },
    { text: "Ask his mother whether she minds the medical students staying for the examination.",
      brief: "Jacob should be asked himself.",
      detailed: "At 14, he can decide about this." },
    { text: "Examine him quickly to minimise embarrassment.",
      brief: "Doesn't address his consent.",
      detailed: "Speed doesn't replace asking him." },
    { text: "Ask one student to stay as a chaperone.",
      brief: "A student isn't a suitable chaperone.",
      detailed: "A chaperone should be a trained staff member." },
    { text: "Ask his mother to leave.",
      brief: "He may want her there.",
      detailed: "He should decide who is present." }
  ],
  explanation: {
    issue: "This tests whether you protect a young person's dignity and ask for his consent before an intimate examination with students present.",
    keyDetails: "He is 14 and embarrassed. Students are present. The examination is intimate.",
    reasoning: "{k1} asks him, {k2} respects his choice, and {k3} protects his dignity. The distractors pressure him ({d1}), bypass him ({d2}, {d5}), or fail to address consent ({d3}, {d4}).",
    competing: "{d2} may seem respectful, but he should be asked himself."
  },
  refs: [
    { ref: "chaperones", note: "Intimate examinations and chaperones." },
    { ref: "u18", note: "Involving young people in decisions." }
  ],
  tags: ["dignity", "students", "intimate examination", "adolescents"]
}
];
