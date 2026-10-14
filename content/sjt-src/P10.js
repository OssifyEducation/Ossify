// Practice batch P10 (sjt-186 to sjt-200): the final 15 practice items. Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-186", letters: "BCG", format: "multiple_choice", difficulty: "moderate",
  title: "\"I can't take him home\"", setting: "Orthopaedics", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Supporting carers", "Discharge planning", "Multidisciplinary working"],
  stem:
    "You are an F2 doctor in orthopaedics. Mr Barnes, 84, is medically fit for discharge four days after a hip replacement. He has mild dementia, and his wife, 81, is his only carer.\n\n" +
    "When you tell her he can go home tomorrow, she starts crying. She says she is exhausted, hasn't slept properly in months, and doesn't think she can cope with him at home.",
  options: [
    // keyed
    { text: "Sit with her, and listen to what has been happening at home.",
      brief: "She needs to be heard, and her account matters for planning.",
      detailed: "She may have been struggling for a long time. Listening without rushing shows care, and tells the team what support Mr Barnes and she will need." },
    { text: "Ask the discharge team to arrange a care and carer's assessment.",
      brief: "Both of them may need support at home.",
      detailed: "Mr Barnes may need care at home, and his wife is entitled to an assessment of her own needs as a carer. The discharge team and social services can arrange both." },
    { text: "Let the team know that the discharge plan needs reviewing.",
      brief: "A discharge that relies on an exhausted carer isn't safe.",
      detailed: "Discharging him tomorrow without support may lead to a crisis at home and readmission. The team needs to know so the plan can be adjusted." },
    // distractors
    { text: "Explain that he's medically fit, so he needs to go home tomorrow.",
      brief: "Medical fitness isn't the only factor in a safe discharge.",
      detailed: "Pressure on beds is real, but sending him home to a carer who says she can't cope isn't a safe discharge." },
    { text: "Suggest that other family members take turns to help.",
      brief: "May help, but doesn't address her immediate distress or proper support.",
      detailed: "Family may be able to help, but this puts the onus on her to organise care, without a proper assessment." },
    { text: "Arrange a care home placement for Mr Barnes yourself.",
      brief: "Not your decision, and may not be what either of them wants.",
      detailed: "A care home may eventually be considered, but this needs assessment and discussion with both of them." },
    { text: "Promise her that a care package will be in place before he goes home.",
      brief: "A promise you can't guarantee.",
      detailed: "Care packages depend on assessments and availability. Promising one may set up disappointment." },
    { text: "Give her information about local carers' support groups.",
      brief: "Helpful information, but the discharge plan still needs reviewing.",
      detailed: "Support groups can help in the longer term, but on their own they don't make tomorrow's discharge safe." }
  ],
  explanation: {
    issue: "This tests whether you respond to a carer's distress and make sure a discharge is safe for both the patient and his carer.",
    keyDetails: "He is medically fit. She is his only carer and says she can't cope. He has dementia.",
    reasoning: "{k1} listens, {k2} gets them both assessed, and {k3} makes sure the plan is reviewed. The distractors push the discharge ({d1}, {d5}), shift the burden ({d2}), act beyond your role ({d3}), or make a promise you can't keep ({d4}).",
    competing: "{d5} is the tempting option because the information is useful, but it doesn't make tomorrow's discharge safe."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, supporting patients and those close to them." }
  ],
  tags: ["carers", "discharge", "dementia", "orthopaedics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-187", letters: "ABECD", format: "ranking", difficulty: "easy",
  title: "Prayer and physiotherapy", setting: "Orthopaedics", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting beliefs", "Flexible care", "Communication"],
  stem:
    "You are an F2 doctor in orthopaedics. Mr Rahman, 66, is recovering from a knee replacement. He prays at set times each day.\n\n" +
    "The physiotherapist tells you he has twice declined physiotherapy because it was booked during his prayer times, and she is worried his recovery will be delayed.",
  options: [
    { text: "Ask whether sessions can be planned around his prayers.",
      brief: "A small change may solve the problem.",
      detailed: "Most physiotherapy sessions can be moved by an hour or so. Knowing his prayer times allows the team to plan sessions he can attend." },
    { text: "Explain to him why physiotherapy is important for his recovery.",
      brief: "Useful, though it doesn't solve the clash.",
      detailed: "He may not realise how important early physiotherapy is, and knowing this may help him work with the team. It ranks second because the clash itself still needs resolving." },
    { text: "Ask the ward team to record his prayer times in his care plan.",
      brief: "Helps all staff plan around his prayers.",
      detailed: "Recording his prayer times means other staff, not just physiotherapy, can plan around them. It ranks third because rescheduling and explaining the importance of physiotherapy matter more to his recovery now." },
    { text: "Tell him the physiotherapy schedule can't be changed.",
      brief: "Inflexible, and may delay his recovery.",
      detailed: "This is likely to mean he misses more sessions." },
    { text: "Suggest he pauses his prayers until he is discharged.",
      brief: "Disrespects his beliefs.",
      detailed: "This dismisses something important to him and is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you accommodate a patient's religious practice while supporting his recovery.",
    keyDetails: "He prays at set times. Physiotherapy clashed twice. His recovery may be delayed.",
    reasoning: "{1} solves the clash, {2} helps him understand why physiotherapy matters, and {3} helps all staff plan around his prayers. {4} is inflexible, and {5} disrespects his beliefs.",
    competing: "Some would explain the importance of physiotherapy first. The key prioritises rescheduling because it addresses the cause."
  },
  refs: [
    { ref: "beliefs", note: "Respecting patients' beliefs and practices." },
    { ref: "equality", note: "Fair treatment regardless of religion or belief." }
  ],
  tags: ["religion", "physiotherapy", "orthopaedics", "flexibility"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-188", letters: "CDE", format: "multiple_choice", difficulty: "moderate",
  title: "Discharged too soon?", setting: "General medical ward", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Escalating concerns", "Patient safety", "Professional communication"],
  stem:
    "You are an F2 doctor on a general medical ward. Your consultant reviewed Mr Ford, 71, yesterday, and planned to discharge him today after treatment for pneumonia.\n\n" +
    "This morning his heart rate is 105, he has a new temperature of 38.1°C, and his CRP has risen. The consultant is in clinic and has asked you to complete the discharge.",
  options: [
    // keyed
    { text: "Phone the consultant and explain the new findings.",
      brief: "The consultant made the plan without these findings.",
      detailed: "The consultant decided yesterday, before he became tachycardic and febrile. Explaining the new findings gives them the chance to change the plan." },
    { text: "Ask the nurse in charge to hold the discharge until he's reviewed.",
      brief: "A short delay is safer than discharging a deteriorating patient.",
      detailed: "If the consultant agrees, a short delay allows a review and repeat tests, which is safer than sending him home." },
    { text: "Review him yourself, and repeat his observations.",
      brief: "Your own assessment informs the discussion.",
      detailed: "Examining him and repeating his observations gives you a clear picture to discuss with the consultant." },
    // distractors
    { text: "Complete the discharge, as the consultant has made the decision.",
      brief: "The decision was made before these findings.",
      detailed: "The consultant's plan deserves respect, but it was made without knowing about this morning's changes." },
    { text: "Cancel the discharge yourself without discussing it.",
      brief: "Not your decision alone, and leaves the consultant uninformed.",
      detailed: "Your concern is right, but the consultant should know and be involved in the decision." },
    { text: "Tell Mr Ford that you disagree with the consultant's plan.",
      brief: "Undermines the consultant and may worry him.",
      detailed: "He should be told if the plan changes, but not that you disagree with your consultant." },
    { text: "Ask another consultant to review him instead.",
      brief: "Bypasses his own consultant, who is contactable.",
      detailed: "A second opinion may be useful in some situations, but his consultant is available by phone." },
    { text: "Complete the discharge, but ask his GP to see him tomorrow.",
      brief: "Shifts a risk you can deal with today.",
      detailed: "GP follow-up is useful, but he may be getting worse now, and this needs addressing in hospital." }
  ],
  explanation: {
    issue: "This tests whether you escalate new concerns about a patient's safety to a senior, rather than following an outdated plan.",
    keyDetails: "His heart rate, temperature and CRP have changed since the consultant's review. The consultant is contactable.",
    reasoning: "{k1} informs the consultant, {k2} suggests a safe alternative, and {k3} gives you a clear assessment. The distractors follow the outdated plan ({d1}, {d5}), act alone ({d2}, {d4}), or undermine the consultant ({d3}).",
    competing: "{d5} is the tempting option because it includes follow-up, but the concern needs addressing before he leaves."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, escalating concerns about patient safety." },
    { ref: "news2", note: "Responding to deteriorating observations." }
  ],
  tags: ["discharge", "escalation", "deterioration", "seniors"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-189", letters: "DCAEB", format: "ranking", difficulty: "hard",
  title: "\"I'm afraid of him\"", setting: "Cardiology / respiratory", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Responding to disclosure", "Safeguarding", "Personal safety"],
  stem:
    "You are an F2 doctor in cardiology. Mrs Wood, the wife of your patient Mr Wood, stops you in the corridor. She is shaking and says quietly that she is afraid of her husband, who has hit her several times, and that she dreads him coming home.\n\n" +
    "Mr Wood is in a bay nearby. They have no children.",
  options: [
    { text: "Take her somewhere private, and ask if she is safe now.",
      brief: "Privacy and immediate safety come first.",
      detailed: "She may be at risk, and she has taken a risk in telling you. Moving somewhere private, listening, and asking about her immediate safety is the right first step." },
    { text: "Give her information about domestic abuse support services.",
      brief: "Specialist services can help her plan for her safety.",
      detailed: "Domestic abuse services can provide advice, support and safety planning. Giving her information discreetly helps her access them." },
    { text: "Contact the hospital safeguarding team for advice.",
      brief: "They can advise on next steps and her safety.",
      detailed: "The safeguarding team can advise on what to do, including referral to specialist services, and whether information needs to be shared. It ranks third because supporting her and giving her options comes first." },
    { text: "Record what she has told you in Mr Wood's medical notes.",
      brief: "A record is needed, but not in his notes, where he might see it.",
      detailed: "Recording disclosures matters, but writing them in his notes could put her at risk if he sees them, and it records information about someone who isn't the patient. Advice on where to record it should come from the safeguarding team." },
    { text: "Raise what she has told you with Mr Wood.",
      brief: "Could put her at serious risk.",
      detailed: "Confronting him could make him angry and increase the danger to her. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to a disclosure of domestic abuse from a patient's relative, keeping her safe and getting specialist help.",
    keyDetails: "She is afraid and has been hit. He is nearby. She is not your patient, but she has disclosed to you.",
    reasoning: "{1} keeps her safe and listens, {2} gives her options, and {3} gets specialist advice. {4} could put her at risk, and {5} could put her in danger.",
    competing: "This is hard because {3} might be the first action for some. The key starts with her immediate safety and support because she has taken a risk in telling you."
  },
  refs: [
    { ref: "confidentiality", note: "Sharing information to protect people from serious harm." },
    { ref: "gmp", note: "Domain 2, responding to people who may be vulnerable." }
  ],
  tags: ["domestic abuse", "relatives", "safeguarding", "disclosure"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-190", letters: "AFG", format: "multiple_choice", difficulty: "moderate",
  title: "Going home tomorrow, regardless", setting: "Orthopaedics", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting autonomy", "Risk communication", "Safe discharge"],
  stem:
    "You are an F2 doctor in orthopaedics. Mr Webb, 45, had an ankle fracture fixed yesterday. The team advise him to stay another day for physiotherapy and pain control.\n\n" +
    "He says he is going home today, as his dog is alone and his neighbour can't look after it any longer. He seems to understand the risks.",
  options: [
    // keyed
    { text: "Ask about his situation, and whether anything could make it easier to stay.",
      brief: "His reason may have a practical solution.",
      detailed: "His worry about his dog is understandable. There may be a solution, such as a friend or a pet care service. Exploring this respects him and may allow him to stay." },
    { text: "Make sure he understands the risks of leaving now.",
      brief: "An informed decision needs clear information.",
      detailed: "He should know about the risks, such as falls, poor pain control and wound problems, so his decision is informed." },
    { text: "Arrange a safe discharge, with medication and follow-up.",
      brief: "Respecting his decision includes making it as safe as possible.",
      detailed: "If he goes, he needs crutches, painkillers, wound care advice, follow-up and clear advice on when to seek help. This reduces the risks of leaving early." },
    // distractors
    { text: "Tell him he can't leave until the team agrees.",
      brief: "A patient with capacity can choose to leave.",
      detailed: "He has capacity, so he can leave. Telling him otherwise is wrong." },
    { text: "Ask security to stop him leaving.",
      brief: "Unlawful for a patient with capacity.",
      detailed: "Preventing a capacitous patient from leaving would be unlawful." },
    { text: "Ask him to sign a form saying he is leaving against medical advice.",
      brief: "A form doesn't replace a safe discharge plan.",
      detailed: "Documenting his decision is good practice, but he still needs medication, advice and follow-up." },
    { text: "Phone his family to persuade him to stay.",
      brief: "Involves others without his consent.",
      detailed: "Family may be able to help, but contacting them to change his mind, without his consent, isn't appropriate." },
    { text: "Tell him the consultant will be unhappy if he leaves.",
      brief: "Pressure rather than information.",
      detailed: "This puts pressure on him without helping him make an informed decision." }
  ],
  explanation: {
    issue: "This tests whether you respect a capacitous patient's decision to leave, while making it as safe as possible.",
    keyDetails: "He has capacity and understands the risks. His reason is practical. Leaving early has risks.",
    reasoning: "{k1} explores his reason, {k2} makes sure he's informed, and {k3} makes his discharge safe. The distractors override his choice ({d1}, {d2}), neglect his safety ({d3}), or pressure him ({d4}, {d5}).",
    competing: "{d3} is the tempting option because documenting is good practice, but he still needs a safe plan."
  },
  refs: [
    { ref: "consent", note: "Respecting the decisions of patients with capacity." }
  ],
  tags: ["autonomy", "discharge", "against advice", "orthopaedics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-191", letters: "CEBAD", format: "ranking", difficulty: "moderate",
  title: "\"Nobody listens to me\"", setting: "Psychiatry", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Listening", "Challenging stigma", "Responding to concerns"],
  stem:
    "You are an F2 doctor on an adult psychiatric ward. Ms Carr, 28, has a diagnosis of emotionally unstable personality disorder. She tells you angrily that staff never listen to her because of her diagnosis.\n\n" +
    "She says she told the nurses two days ago that she had pain when passing urine, and nothing has been done.",
  options: [
    { text: "Listen, and acknowledge how frustrating this must be.",
      brief: "She needs to feel heard.",
      detailed: "People with this diagnosis often experience stigma in healthcare. Listening and acknowledging her frustration shows respect and may help rebuild trust." },
    { text: "Assess her urinary symptoms today.",
      brief: "Her physical symptoms need addressing.",
      detailed: "She may have a urinary tract infection, which should have been assessed. Doing so now shows her concern is taken seriously. It ranks second because she first needs to be heard." },
    { text: "Tell her how she can raise her concerns formally, if she wishes.",
      brief: "Gives her a route to have her experience looked into.",
      detailed: "Her experience may reflect a wider problem. Explaining how to raise concerns, such as through PALS, respects her right to do so." },
    { text: "Explain that staff are very busy, so things sometimes take time.",
      brief: "Sounds like an excuse.",
      detailed: "This may be true, but it dismisses her concern and doesn't address the delay." },
    { text: "Suggest her diagnosis may make her feel that people aren't listening.",
      brief: "Dismisses her concern by attributing it to her diagnosis.",
      detailed: "This is exactly the kind of response she is describing, and is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you take a patient's concerns seriously and address diagnostic overshadowing.",
    keyDetails: "She has a diagnosis that is often stigmatised. Her physical symptoms have been ignored for two days. She is angry.",
    reasoning: "{1} listens, {2} addresses her symptoms, and {3} gives her a route to raise concerns. {4} excuses the delay, and {5} dismisses her because of her diagnosis.",
    competing: "Some would assess her symptoms first, and the two would happen almost together. The key starts with listening because her complaint is that she isn't heard; acknowledging that takes moments and makes the assessment more likely to go well."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients fairly and without prejudice." },
    { ref: "equality", note: "Fair treatment of people with mental illness." }
  ],
  tags: ["stigma", "personality disorder", "physical health", "psychiatry"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-192", letters: "BDH", format: "multiple_choice", difficulty: "easy",
  title: "Shaken at reception", setting: "General practice", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Incident reporting", "Workplace safety"],
  stem:
    "You are an F2 doctor in a GP practice. A patient has just shouted at Kerry, a receptionist, threatening to \"wait for her after work\" because he couldn't get an appointment today. He has now left.\n\n" +
    "Kerry is shaking and in tears.",
  options: [
    // keyed
    { text: "Check that Kerry is all right, and give her somewhere quiet to sit.",
      brief: "She needs support now.",
      detailed: "She has been threatened and is clearly shaken. Making sure she is all right, and giving her a moment away from the desk, is the first priority." },
    { text: "Make sure the practice manager knows about the incident.",
      brief: "The practice manager needs to act on threats to staff.",
      detailed: "The practice manager can decide on next steps, such as warning the patient or contacting the police, and make sure Kerry gets home safely." },
    { text: "Make sure the incident is recorded.",
      brief: "A record supports any action the practice takes.",
      detailed: "Recording the incident, factually, supports decisions about the patient and protects staff." },
    // distractors
    { text: "Encourage Kerry to get back to work, as the waiting room is busy.",
      brief: "She needs a moment first.",
      detailed: "The practice is busy, but she has been threatened and needs support." },
    { text: "Phone the patient yourself to tell him his behaviour was unacceptable.",
      brief: "Not your role, and may escalate.",
      detailed: "The practice manager should decide how to respond." },
    { text: "Remove the patient from the practice list.",
      brief: "Not your decision, and there is a process.",
      detailed: "Practices can remove patients after threats or violence, but this follows a specific process, and the decision rests with the practice, not with you." },
    { text: "Tell Kerry that patients often say things they don't mean.",
      brief: "Minimises a threat.",
      detailed: "This may be meant kindly, but it minimises a frightening experience." },
    { text: "Phone the police yourself to report the threat.",
      brief: "May be needed, but the practice should coordinate.",
      detailed: "Threats can be reported to the police, but the practice manager and Kerry should be involved." }
  ],
  explanation: {
    issue: "This tests how you support a colleague after a threat, and make sure the practice responds.",
    keyDetails: "The threat was specific. Kerry is shaken. The patient has left.",
    reasoning: "{k1} supports Kerry, {k2} involves the practice manager, and {k3} records it. The distractors rush her ({d1}), act beyond your role ({d2}, {d3}, {d5}), or minimise it ({d4}).",
    competing: "{d5} is the tempting option, as police may need to be involved, but the practice should coordinate this with Kerry."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues and a safe working environment." }
  ],
  tags: ["aggression", "colleague wellbeing", "reception staff", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-193", letters: "DEACB", format: "ranking", difficulty: "moderate",
  title: "No one asked her", setting: "Acute medical unit", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Dignity", "Respect", "Communication"],
  stem:
    "You are an F2 doctor on the acute medical unit. Ms Lane, 34, is a trans woman admitted with pneumonia. She has been placed in a male bay, and her notes use her previous name.\n\n" +
    "She tells you she is upset that nobody asked her about any of this.",
  options: [
    { text: "Apologise, use her chosen name, and ask her what would help.",
      brief: "Respect starts with asking her.",
      detailed: "She should have been asked. Apologising, using her chosen name and pronouns, and asking what would help her feel safe and respected is the right first step. Her records can also be updated to show the name she uses." },
    { text: "Ask the nurse in charge whether a side room is available.",
      brief: "A side room may protect her privacy and dignity.",
      detailed: "A side room may be the simplest way to protect her privacy, whatever the bay arrangements. It ranks second because she first needs to be asked what would help." },
    { text: "Check the trust's current policy on accommodating trans patients.",
      brief: "Policies in this area set out what the ward should do.",
      detailed: "Guidance on single-sex accommodation for trans patients has been under review, and trusts have policies. Checking the current policy helps the team respond appropriately. It ranks third because her immediate concerns come first." },
    { text: "Explain that bay allocation is based on hospital records and can't be changed.",
      brief: "Dismisses her concerns without exploring the options.",
      detailed: "There may be constraints, but this closes the conversation without exploring what can be done." },
    { text: "Ask the other patients in the bay whether they mind her being there.",
      brief: "Breaches her privacy and dignity.",
      detailed: "This discloses her personal information and treats her as a problem. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you respond with respect to a patient whose dignity hasn't been considered, involving her in decisions.",
    keyDetails: "She wasn't asked about her accommodation. Her notes use her previous name. She is upset.",
    reasoning: "{1} apologises and asks her, {2} looks for a practical option, and {3} checks the policy. {4} dismisses her, and {5} breaches her privacy.",
    competing: "Some would check the policy first. The key starts with her, because whatever the policy says, she should be asked and treated with respect."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients with dignity and respect." },
    { ref: "confidentiality", note: "Protecting patients' personal information." }
  ],
  tags: ["dignity", "trans patients", "privacy", "acute medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-194", letters: "DEH", format: "multiple_choice", difficulty: "hard",
  title: "\"Send a doctor now\"", setting: "Out-of-hours / community", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["De-escalation", "Clinical reasoning", "Safety-netting"],
  stem:
    "You are an F2 doctor in an out-of-hours GP service. You call back Mrs Hart, whose daughter, 8, has a temperature of 38°C and a sore throat. The child is eating, drinking and playing.\n\n" +
    "When you explain that a home visit isn't needed, and offer an appointment at the base, Mrs Hart becomes abusive, swearing at you and demanding that a doctor visits.",
  options: [
    // keyed
    { text: "Stay calm, and acknowledge that she is worried about her daughter.",
      brief: "Acknowledging her worry may de-escalate.",
      detailed: "Her anger may come from worry. Acknowledging it, calmly, may help her listen." },
    { text: "Ask a few more questions to check that your assessment is right.",
      brief: "Her strength of feeling is a reason to double-check.",
      detailed: "Parents often notice things that are hard to describe. Checking again, for example about breathing, rash or drowsiness, makes sure you haven't missed anything." },
    { text: "Explain the options and when to call back or call 999.",
      brief: "Clear safety-netting protects her daughter.",
      detailed: "Offering the base appointment again, and explaining which signs mean she should call back or call 999, keeps her daughter safe whatever she decides." },
    // distractors
    { text: "Arrange the visit to end the call.",
      brief: "Uses a limited resource to avoid conflict.",
      detailed: "This would end the confrontation, but visits are limited and may be needed for sicker patients." },
    { text: "End the call immediately because of her abuse.",
      brief: "Leaves a child's care unresolved.",
      detailed: "You don't have to tolerate abuse, and services allow calls to be ended after a warning. But ending it immediately, without safety-netting, leaves her daughter's care unresolved." },
    { text: "Tell her she will be reported to the police for her abuse.",
      brief: "Escalates the situation.",
      detailed: "Abuse can sometimes be reported, but threatening it now is likely to make things worse." },
    { text: "Tell her to take her daughter to the Emergency Department instead.",
      brief: "Not clinically needed, and adds pressure on ED.",
      detailed: "The base appointment is more appropriate for her daughter's symptoms." },
    { text: "Pass the call to another doctor.",
      brief: "May be needed later, but doesn't help now.",
      detailed: "Another clinician may help if the conversation breaks down, but trying to resolve it yourself first is better." }
  ],
  explanation: {
    issue: "This tests how you handle an abusive caller while keeping a child safe and using resources fairly.",
    keyDetails: "The child seems well. The mother is worried and angry. A base appointment is available.",
    reasoning: "{k1} de-escalates, {k2} double-checks, and {k3} safety-nets. The distractors give in ({d1}), end the call unsafely ({d2}), escalate ({d3}), misdirect ({d4}), or pass it on ({d5}).",
    competing: "{d2} is the hard distractor: you can end an abusive call, but not before her daughter's care is safe."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, communicating with patients and families; Domain 1, providing safe care." }
  ],
  tags: ["aggression", "out-of-hours", "children", "safety-netting"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-195", letters: "ACDB", format: "ranking", difficulty: "moderate",
  title: "A letter from next door", setting: "Non-clinical (social)", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Boundaries", "Confidentiality", "Helpfulness"],
  stem:
    "You are an F2 doctor. Your elderly neighbour, Mrs Price, knocks on your door with her husband's hospital discharge letter. He has just come home after a heart attack at another hospital.\n\n" +
    "She is worried and asks you to explain what it means. Her husband is resting at home and doesn't know she has come to you.",
  options: [
    { text: "Offer to explain medical terms, with her husband present and agreeing.",
      brief: "A kind, limited help, with his consent.",
      detailed: "Explaining general terms, with his agreement, can reassure them both. You should avoid giving advice about his treatment, which is for his own doctors, and point them to his GP for that." },
    { text: "Suggest they contact his GP or the hospital team, who know his care.",
      brief: "They can give accurate, personalised advice.",
      detailed: "His GP and the hospital team know his history and plan, and can answer questions about his treatment accurately. It ranks second only because a little help with the wording, with his agreement, is kinder now." },
    { text: "Tell her politely that you can't help, as you weren't involved in his care.",
      brief: "Honest, but unhelpful to a worried neighbour.",
      detailed: "This is true, but she is worried, and you could at least point her in the right direction." },
    { text: "Read the letter and explain his treatment to her.",
      brief: "Shares his information without his consent, and advises on care you weren't involved in.",
      detailed: "Her husband hasn't agreed, and you weren't involved in his care, so you may give inaccurate advice. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you help a worried neighbour while respecting confidentiality and boundaries.",
    keyDetails: "The letter is about her husband, who isn't there. You weren't involved in his care. She is worried.",
    reasoning: "{1} offers limited help with his consent, {2} directs them to the people who know his care, and {3} is honest but unhelpful. {4} breaches his confidentiality and oversteps your role.",
    competing: "Some would direct them to his GP first, as his doctors can give accurate advice. The key puts the limited, consented help first because it respects his confidentiality and helps a worried neighbour now, while still pointing them to his doctors for anything about his treatment."
  },
  refs: [
    { ref: "confidentiality", note: "Sharing information only with the patient's consent." }
  ],
  tags: ["boundaries", "neighbours", "confidentiality", "informal advice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-196", letters: "BCG", format: "multiple_choice", difficulty: "moderate",
  title: "A colleague's secret", setting: "Psychiatry", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Responding to disclosure", "Encouraging help-seeking"],
  stem:
    "You are an F2 doctor in psychiatry. Dr Mills, another F2 and a friend, tells you that she has been self-harming for the past few months because of stress. She asks you to keep it between the two of you.\n\n" +
    "She says she is managing at work, and there have been no concerns about her clinical work.",
  options: [
    // keyed
    { text: "Listen without judgement, and thank her for telling you.",
      brief: "She has trusted you with something difficult.",
      detailed: "Telling someone takes courage. A calm, non-judgemental response helps her feel safe to talk." },
    { text: "Ask gently whether she has had thoughts of ending her life.",
      brief: "Her safety needs understanding.",
      detailed: "People who self-harm may also have suicidal thoughts. Asking directly and calmly doesn't increase risk, and helps you understand how urgent support is." },
    { text: "Encourage her to see her GP or a doctors' health service.",
      brief: "Specialist help can support her recovery.",
      detailed: "Her GP or NHS Practitioner Health can offer confidential support. Encouraging her, and offering to help her make contact, supports her to get help." },
    // distractors
    { text: "Promise you won't tell anyone.",
      brief: "A promise you may not be able to keep.",
      detailed: "Respecting her confidence matters, but if you became worried about her immediate safety, you might need to involve others." },
    { text: "Tell her educational supervisor straight away, so that she gets support.",
      brief: "May not be necessary, and could damage her trust.",
      detailed: "Her supervisor may need to know in some circumstances, but going to them immediately, against her wishes, could stop her seeking help." },
    { text: "Tell her she should stop working until she is better.",
      brief: "Not your decision.",
      detailed: "Whether she is fit to work is for her, with her GP and occupational health, to consider." },
    { text: "Suggest she speaks to occupational health.",
      brief: "May help, but her own GP or a confidential service may feel safer first.",
      detailed: "Occupational health can be supportive, but she may prefer to start with her GP or a confidential service." },
    { text: "Avoid raising the subject again unless she does.",
      brief: "Leaves her unsupported.",
      detailed: "Respecting her privacy matters, but checking in with her shows you care." }
  ],
  explanation: {
    issue: "This tests how you support a colleague who discloses self-harm, encouraging her to get help while being honest about confidentiality.",
    keyDetails: "She is a friend and colleague. She has asked you to keep it secret. She says she is managing.",
    reasoning: "{k1} listens, {k2} understands her safety, and {k3} encourages help. The distractors make a promise you can't keep ({d1}), escalate prematurely ({d2}), overstep your role ({d3}), or leave her unsupported ({d5}).",
    competing: "{d4} is the tempting option, as occupational health can help, but a confidential service may feel safer for her first."
  },
  refs: [
    { ref: "practitionerhealth", note: "Confidential mental health support for doctors." },
    { ref: "gmp", note: "Domain 3, supporting colleagues." }
  ],
  tags: ["colleague wellbeing", "mental health", "self-harm", "support"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-197", letters: "EABDC", format: "ranking", difficulty: "easy",
  title: "\"This is your fault\"", setting: "Oncology & palliative care", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Responding to complaints", "Composure", "Honesty"],
  stem:
    "You are an F2 doctor on an oncology ward. Mrs Grant's CT scan, needed to plan her chemotherapy, has been delayed by a week because of a booking error.\n\n" +
    "Her husband is angry and, raising his voice, tells you it's your fault, although you only joined the team two days ago.",
  options: [
    { text: "Listen, acknowledge his frustration, and apologise for the delay.",
      brief: "An apology for the delay isn't an admission of personal blame.",
      detailed: "He is worried about his wife. Listening and apologising for the delay, on behalf of the team, acknowledges that something went wrong." },
    { text: "Find out what caused the delay, and when the scan can happen.",
      brief: "Practical information may reassure him.",
      detailed: "Finding out what happened and getting a new date addresses his main concern." },
    { text: "Explain how to make a complaint, if he wishes.",
      brief: "Gives him a route for his concerns.",
      detailed: "He may want the delay looked into. Explaining how is helpful. It ranks third because addressing the delay comes first." },
    { text: "Explain that you only joined the team two days ago.",
      brief: "True, but defensive.",
      detailed: "This may be true, but focusing on yourself doesn't help him." },
    { text: "Tell him you'll call security if he continues to raise his voice.",
      brief: "Escalates the situation.",
      detailed: "He is angry, but not threatening. This is likely to make things worse." }
  ],
  explanation: {
    issue: "This tests how you respond to an angry relative who blames you personally, focusing on his concerns rather than defending yourself.",
    keyDetails: "The delay was a booking error. You weren't involved. He is worried about his wife.",
    reasoning: "{1} acknowledges and apologises, {2} addresses the delay, and {3} gives a route to complain. {4} is defensive, and {5} escalates.",
    competing: "Some would find out about the delay first. The key starts with listening and apologising, which helps him feel heard."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, responding to complaints." }
  ],
  tags: ["complaints", "relatives", "delays", "oncology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-198", letters: "AFH", format: "multiple_choice", difficulty: "moderate",
  title: "Not seen for a week", setting: "Non-clinical (training)", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Concern for colleagues", "Escalation", "Welfare"],
  stem:
    "You are an F2 doctor. Your friend Dr Kemp, another F2, hasn't been at work for a week. She isn't on leave, and she hasn't replied to your messages or calls.\n\n" +
    "A fortnight ago she told you she was struggling after her relationship ended. She lives alone.",
  options: [
    // keyed
    { text: "Tell her educational supervisor that you're worried.",
      brief: "They need to know, and can contact her or her next of kin.",
      detailed: "Her supervisor or the programme office will want to know, and may have contact details for her next of kin." },
    { text: "Try to reach her through a mutual friend or a family member.",
      brief: "Someone else may have heard from her.",
      detailed: "A friend or family member may know where she is, or be able to check on her." },
    { text: "Consider asking the police to check on her welfare.",
      brief: "Her silence, recent distress and living alone are concerning.",
      detailed: "If you can't reach her and are worried for her safety, the police can carry out a welfare check. Her recent distress and absence make this reasonable." },
    // distractors
    { text: "Wait a few more days, as she may just need space.",
      brief: "Her absence and silence are out of character and concerning.",
      detailed: "She may need space, but a week's absence without explanation, after telling you she was struggling, is a cause for concern." },
    { text: "Post in the foundation doctors' group chat asking if anyone has seen her.",
      brief: "Shares her absence widely.",
      detailed: "Others may have heard from her, but posting publicly spreads her private situation." },
    { text: "Go to her flat and ask the landlord to let you in.",
      brief: "Not your role, and may not be safe or lawful.",
      detailed: "This may seem caring, but entering her home isn't your role. A welfare check by the police is safer." },
    { text: "Report her absence as unprofessional to the rota coordinator.",
      brief: "Treats a welfare concern as a disciplinary issue.",
      detailed: "The rota coordinator may need to know, but framing it as unprofessional overlooks your concern for her." },
    { text: "Keep messaging her until she replies.",
      brief: "Doesn't escalate a growing concern.",
      detailed: "Messaging shows care, but if she isn't replying, others need to know." }
  ],
  explanation: {
    issue: "This tests whether you act on a concern for a colleague's welfare, escalating appropriately.",
    keyDetails: "She has been absent for a week, isn't answering, recently disclosed distress, and lives alone.",
    reasoning: "{k1} informs those responsible, {k2} uses her network, and {k3} considers a welfare check. The distractors delay ({d1}, {d5}), spread her situation ({d2}), overstep ({d3}), or misframe it ({d4}).",
    competing: "{d1} is the tempting option because she may want space, but her circumstances make it too risky to wait."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues." },
    { ref: "practitionerhealth", note: "Support for doctors' mental health." }
  ],
  tags: ["colleague welfare", "absence", "mental health", "escalation"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-199", letters: "BCEAD", format: "ranking", difficulty: "hard",
  title: "\"Increase it, or I'll complain\"", setting: "Psychiatry", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication", "Knowledge, skills and development"],
  competencies: ["Safe prescribing", "De-escalation", "Respecting the right to complain"],
  stem:
    "You are an F2 doctor on an adult psychiatric ward. Mr Rees, 50, is being treated for anxiety, and the team plans to reduce his diazepam gradually.\n\n" +
    "He demands that you increase his dose today, and says that if you don't, he will make a formal complaint about you.",
  options: [
    { text: "Ask him what is making him feel he needs more.",
      brief: "There may be a specific reason, such as withdrawal or a new worry.",
      detailed: "He may be experiencing withdrawal symptoms or increased anxiety that need addressing. Exploring this shows you take him seriously." },
    { text: "Explain calmly why the dose won't be increased today.",
      brief: "Honest, and respects his right to complain.",
      detailed: "The plan is in his interests, and changing it under pressure wouldn't be right. Acknowledging his right to complain shows respect, and may reduce the tension." },
    { text: "Discuss his concerns with the consultant.",
      brief: "The consultant may need to review the plan.",
      detailed: "His symptoms may justify reviewing the plan. It ranks third because exploring and explaining come first." },
    { text: "Tell him a complaint won't change anything, and end the conversation.",
      brief: "Dismissive and likely to escalate.",
      detailed: "This dismisses his concerns and his right to complain." },
    { text: "Increase the dose slightly as a compromise.",
      brief: "Changes treatment under pressure, against the plan.",
      detailed: "This would avoid conflict, but changing a benzodiazepine plan under pressure, without review, isn't safe or appropriate. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you keep to a safe prescribing plan under pressure, while respecting the patient's concerns and right to complain.",
    keyDetails: "The plan is a gradual reduction. He is threatening a complaint. He may have symptoms needing review.",
    reasoning: "{1} explores his concerns, {2} explains honestly, and {3} involves the consultant. {4} is dismissive, and {5} prescribes under pressure.",
    competing: "This is hard because {4} and {5} are both poor. {5} ranks last because unsafe prescribing could harm him, while {4} is unprofessional but doesn't change his treatment."
  },
  refs: [
    { ref: "prescribing", note: "Prescribing safely, including controlled drugs." },
    { ref: "gmp", note: "Domain 2, responding to patients' concerns and complaints." }
  ],
  tags: ["benzodiazepines", "complaints", "prescribing", "psychiatry"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-200", letters: "ABC", format: "multiple_choice", difficulty: "moderate",
  title: "Settling in", setting: "Orthopaedics", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Inclusion", "Constructive feedback"],
  stem:
    "You are an F2 doctor in orthopaedics. Dr Mensah has just joined the team after qualifying and working abroad. She is unfamiliar with the hospital's systems and NHS processes, and has been criticised several times by nurses for incomplete discharge paperwork.\n\n" +
    "She has a clinical supervisor in the team. She tells you she feels out of her depth and is thinking of leaving.",
  options: [
    // keyed
    { text: "Offer to show her how the discharge system works.",
      brief: "Practical help from a peer can make a big difference.",
      detailed: "Many of her difficulties may be due to unfamiliar systems. Showing her how things work is practical and supportive." },
    { text: "Tell her about the trust's support for doctors new to the NHS.",
      brief: "Specialist support can help her adapt.",
      detailed: "Many trusts offer induction and support programmes for doctors new to the NHS. Knowing about them may help her settle." },
    { text: "Encourage her to talk to her clinical supervisor.",
      brief: "Her supervisor can support her and address unfair criticism.",
      detailed: "Her supervisor can help with her learning and, if criticism is being delivered unhelpfully, raise it with the team." },
    // distractors
    { text: "Reassure her that everyone finds a new hospital difficult at first, and that it gets easier.",
      brief: "Well meant, but doesn't help her practically.",
      detailed: "This is true, but on its own doesn't help with the problems she's facing." },
    { text: "Tell the nurses to stop criticising her.",
      brief: "Some feedback may be valid, and this may cause conflict.",
      detailed: "The way feedback is given may need addressing, but some of it may be valid, and confronting the nurses may make things harder for her." },
    { text: "Suggest she works harder to keep up.",
      brief: "Unhelpful and dismissive.",
      detailed: "She is struggling with unfamiliar systems, not effort." },
    { text: "Complete her discharge paperwork for her.",
      brief: "Helps in the short term, but doesn't help her learn.",
      detailed: "This may relieve pressure, but she needs to learn the system herself." },
    { text: "Agree that she might be better off leaving.",
      brief: "Unsupportive.",
      detailed: "This doesn't help her and may reinforce her feeling that she doesn't belong." }
  ],
  explanation: {
    issue: "This tests how you support a colleague adjusting to a new healthcare system.",
    keyDetails: "She is new to the NHS. The criticism relates to systems. She is thinking of leaving.",
    reasoning: "{k1} offers practical help, {k2} points to specialist support, and {k3} involves her supervisor. The distractors reassure without helping ({d1}), confront others ({d2}), dismiss her ({d3}, {d5}), or do her work for her ({d4}).",
    competing: "{d4} is the tempting option, but she needs to learn the system to succeed."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues and contributing to a positive culture." }
  ],
  tags: ["international medical graduates", "colleague support", "induction", "orthopaedics"]
}
];
