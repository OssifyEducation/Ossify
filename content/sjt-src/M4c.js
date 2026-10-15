// Mock 4, part 3 (sjt-376 to sjt-387). Pool mock-4: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-4";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-376", pool, letters: "AEF", format: "multiple_choice", difficulty: "moderate",
  title: "Talking over her", setting: "Elderly care ward", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication", "Collaboration, teamwork and leadership"],
  competencies: ["Dignity", "Dementia care", "Role modelling"],
  stem:
    "You are an F2 doctor on an elderly care ward at lunchtime. Mrs Grant, 89, has advanced dementia and needs help to eat.\n\n" +
    "Two healthcare assistants are feeding her while chatting to each other about their weekend, without speaking to her or looking at her. She is turning her head away from the spoon.",
  options: [
    // keyed
    { text: "Kindly suggest they talk to her while they help her eat.",
      brief: "A gentle prompt can change their approach.",
      detailed: "People with dementia still respond to being spoken to. A kind suggestion, rather than criticism, may improve her experience straight away." },
    { text: "Sit with Mrs Grant and help her yourself for a few minutes.",
      brief: "Shows by example, and helps her now.",
      detailed: "Modelling a patient-centred approach, by talking to her and going at her pace, can be more persuasive than words." },
    { text: "Raise mealtime care with the ward manager.",
      brief: "May need wider attention, such as training.",
      detailed: "If this reflects a wider pattern, the ward manager can address it, for example through training on dementia care." },
    // distractors
    { text: "Leave it, as feeding is a nursing task.",
      brief: "Her dignity is everyone's responsibility.",
      detailed: "Ignoring it means her poor experience continues." },
    { text: "Tell them off in front of the patient.",
      brief: "Public criticism may cause resentment.",
      detailed: "This may embarrass them and doesn't model the respect you want them to show." },
    { text: "Report them to the Nursing and Midwifery Council.",
      brief: "Disproportionate.",
      detailed: "This is a practice issue to address locally, not a regulatory matter." },
    { text: "Prescribe nutritional supplement drinks so she needs less help.",
      brief: "Avoids the problem instead of fixing it.",
      detailed: "Supplements may help her nutrition, but they don't address how she is being treated." },
    { text: "Tell her family how she is being fed.",
      brief: "Doesn't fix the problem and may cause distress.",
      detailed: "This doesn't change practice and may alarm her family." }
  ],
  explanation: {
    issue: "This tests whether you act when a patient's dignity is compromised during basic care, in a constructive way.",
    keyDetails: "She has dementia and needs help to eat. Staff are ignoring her. She is turning away from the spoon.",
    reasoning: "{k1} prompts kindly, {k2} models good care, and {k3} addresses any wider issue. The distractors ignore it ({d1}), criticise publicly ({d2}), escalate disproportionately ({d3}), avoid it ({d4}), or alarm her family ({d5}).",
    competing: "{d2} addresses it directly, but publicly criticising colleagues in front of a patient isn't respectful either."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients with dignity and respect." }
  ],
  tags: ["dignity", "dementia", "mealtimes", "elderly care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-377", pool, letters: "CEBDA", format: "ranking", difficulty: "easy",
  title: "Blamed in public", setting: "Paediatrics", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Collaboration, teamwork and leadership", "Trust and professionalism"],
  competencies: ["Honesty", "Challenging blame", "Supporting colleagues"],
  stem:
    "You are an F2 doctor on a paediatric ward. A parent complained that her son's discharge was delayed by four hours. The delay was because you hadn't finished the discharge letter.\n\n" +
    "At the nurses' station, in front of other staff, the senior nurse tells Amira, a healthcare assistant, that the complaint is her fault for not \"chasing the doctors\".",
  options: [
    { text: "Tell the senior nurse that the delay was caused by your letter.",
      brief: "Honest, and protects a colleague from unfair blame.",
      detailed: "The delay was yours. Saying so corrects the record and stops Amira being blamed unfairly. It ranks first." },
    { text: "Check on Amira afterwards.",
      brief: "She has been criticised unfairly in public.",
      detailed: "Public blame can be upsetting. Checking on her shows support. It ranks second." },
    { text: "Suggest to the ward manager that complaints are discussed in private.",
      brief: "Helps prevent public blame in future.",
      detailed: "Discussing complaints privately is fairer to everyone. It ranks third." },
    { text: "Stay out of it, as it is a nursing matter.",
      brief: "Lets a colleague take the blame for your delay.",
      detailed: "The delay was your responsibility, so staying silent isn't honest." },
    { text: "Agree with the senior nurse that Amira should have chased you.",
      brief: "Shifts blame unfairly onto a junior colleague.",
      detailed: "This adds to unfair blame and avoids your own responsibility. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests honesty about your own part in a problem, and fairness to a colleague who is being blamed.",
    keyDetails: "The delay was yours. Amira is being blamed publicly. The senior nurse is senior to her.",
    reasoning: "{1} owns the delay, {2} supports Amira, and {3} improves practice. {4} stays silent, and {5} adds to the unfair blame.",
    competing: "{2} and {3} are close. The key puts supporting Amira first because she has just been hurt."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, treating colleagues fairly; Domain 4, honesty." }
  ],
  tags: ["blame", "honesty", "teamwork", "paediatrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-378", pool, letters: "ABE", format: "multiple_choice", difficulty: "moderate",
  title: "Too noisy to stay", setting: "Acute medical unit", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["De-escalation", "Problem-solving", "Capacity"],
  stem:
    "You are an F2 doctor on the acute medical unit. Mr Stone, 66, was admitted yesterday with pneumonia and is on intravenous antibiotics. He hasn't slept for two nights because of noise from a confused patient in the bay.\n\n" +
    "He tells you angrily that he is going to discharge himself tonight.",
  options: [
    // keyed
    { text: "Listen to his frustration and acknowledge it.",
      brief: "Feeling heard may calm the situation.",
      detailed: "His complaint is reasonable. Acknowledging it is the first step to finding a solution." },
    { text: "Ask whether he can move to a quieter bed.",
      brief: "Tries to solve the cause.",
      detailed: "A move, or earplugs and an eye mask, may let him sleep and stay." },
    { text: "Explain the risks of stopping his antibiotics now.",
      brief: "He needs to understand the risks to decide.",
      detailed: "Leaving early could mean his pneumonia isn't treated properly. He should understand this to make an informed choice." },
    // distractors
    { text: "Tell him he isn't allowed to leave.",
      brief: "Unlawful if he has capacity.",
      detailed: "A patient with capacity can leave, even against advice." },
    { text: "Let him go without discussion, as it's his choice.",
      brief: "It is his choice, but an informed one.",
      detailed: "He should be offered solutions and understand the risks first." },
    { text: "Tell him other patients put up with the noise.",
      brief: "Dismissive.",
      detailed: "This invalidates his concern and may make him more likely to leave." },
    { text: "Prescribe a sleeping tablet so that he agrees to stay tonight.",
      brief: "Doesn't address the cause.",
      detailed: "A sleeping tablet may not help with the noise and carries risks." },
    { text: "Call security to calm him down.",
      brief: "Disproportionate.",
      detailed: "He is frustrated, not dangerous." }
  ],
  explanation: {
    issue: "This tests how you respond to an angry patient threatening to leave, by addressing the cause and making sure his decision is informed.",
    keyDetails: "His complaint about noise is reasonable. He needs IV antibiotics. He has capacity.",
    reasoning: "{k1} acknowledges his frustration, {k2} addresses the cause, and {k3} informs his decision. The distractors detain him unlawfully ({d1}), skip the conversation ({d2}), dismiss him ({d3}), medicate ({d4}), or escalate ({d5}).",
    competing: "{d2} respects his autonomy, but he deserves the chance to have the problem fixed and to understand the risks first."
  },
  refs: [
    { ref: "consent", note: "Patients' right to refuse treatment, and making sure decisions are informed." }
  ],
  tags: ["self-discharge", "noise", "acute medicine", "de-escalation"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-379", pool, letters: "DCBA", format: "ranking", difficulty: "hard",
  title: "A drug she read about", setting: "Oncology & palliative care", attribute: P,
  topic: "Honesty with patients and colleagues",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Honesty", "Managing expectations", "Seeking expertise"],
  stem:
    "You are an F2 doctor on an oncology ward. Mrs Holt, 55, has advanced ovarian cancer. She shows you an online article about a new drug in early trials, and asks, \"Can I have this on the NHS?\"\n\n" +
    "You don't know whether it is available or whether she would be eligible for a trial.",
  options: [
    { text: "Explain you don't know, and that you'll ask her oncologist.",
      brief: "Honest, and makes sure her question is answered properly.",
      detailed: "You don't know, so saying so is honest. Committing to ask her oncologist shows you take her question seriously. It ranks first." },
    { text: "Ask the oncology team to discuss it with her at her next clinic.",
      brief: "The right people, but she may wait weeks for an answer.",
      detailed: "Her oncologist will know about trials and availability, but she may wait some time, and she needs an honest response from you first. It ranks second." },
    { text: "Tell her the drug probably isn't suitable for someone in her situation.",
      brief: "A guess presented as an answer.",
      detailed: "You don't know whether it is suitable. This may be wrong and close off an option." },
    { text: "Tell her you'll request the drug for her.",
      brief: "False hope.",
      detailed: "You can't promise access to a drug you know nothing about. This could cause great disappointment. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests honesty about the limits of your knowledge when a patient asks about a new treatment.",
    keyDetails: "The drug is in early trials. You don't know about availability or eligibility. She is hoping for options.",
    reasoning: "{1} is honest and follows up, and {2} involves the expert. {3} guesses, and {4} raises false hope.",
    competing: "Some would put {3} last, as it could close off a real option. The key ranks {4} last because a promise you can't keep is more harmful."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, being honest about the limits of your knowledge." }
  ],
  tags: ["honesty", "clinical trials", "oncology", "expectations"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-380", pool, letters: "FGH", format: "multiple_choice", difficulty: "moderate",
  title: "A decision without discussion", setting: "Elderly care ward", attribute: P,
  topic: "Equality and fair treatment of patients",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Equality", "DNACPR decisions", "Advocacy"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mr Dean, 61, has a learning disability and has been admitted with a chest infection. He is improving.\n\n" +
    "On the ward round, the registrar asks you to complete a DNACPR form \"because of his learning disability\". No one has discussed it with Mr Dean or his sister, who visits daily.",
  options: [
    // keyed
    { text: "Point out that a learning disability isn't grounds for DNACPR.",
      brief: "DNACPR decisions must be based on clinical factors, not disability.",
      detailed: "Making a resuscitation decision because of someone's learning disability is discriminatory. Raising this politely gives the registrar a chance to reconsider." },
    { text: "Involve Mr Dean and his sister in any discussion.",
      brief: "He, and those close to him, should be involved.",
      detailed: "Decisions about resuscitation should be discussed with the patient where possible, with reasonable adjustments, and with those close to him." },
    { text: "Ask the learning disability liaison nurse for support.",
      brief: "Expertise in supporting his involvement.",
      detailed: "The liaison nurse can help adapt communication and make sure his needs are understood." },
    // distractors
    { text: "Complete the form as asked.",
      brief: "Discriminatory and undiscussed.",
      detailed: "Completing the form on this basis would be wrong and could harm him." },
    { text: "Record your disagreement in the medical notes, then complete the form.",
      brief: "Still makes the discriminatory decision.",
      detailed: "Documenting your concern doesn't stop the harm." },
    { text: "Tell his sister the registrar is discriminating against him.",
      brief: "Undermines the team before the issue is raised.",
      detailed: "His sister should be involved, but raising it with the registrar first is fairer and more effective." },
    { text: "Report the registrar to the Care Quality Commission.",
      brief: "Disproportionate as a first step.",
      detailed: "This should be addressed directly and through local routes first." },
    { text: "Leave the form for the night team to decide.",
      brief: "Avoids the issue.",
      detailed: "The problem would still need addressing." }
  ],
  explanation: {
    issue: "This tests whether you challenge a discriminatory resuscitation decision and make sure the patient is involved.",
    keyDetails: "The reason given is his learning disability. He is improving. No discussion has taken place. His sister visits daily.",
    reasoning: "{k1} challenges the reasoning, {k2} involves him and his sister, and {k3} brings in specialist support. The distractors comply ({d1}, {d2}), undermine the team ({d3}), escalate disproportionately ({d4}), or avoid it ({d5}).",
    competing: "{d2} might seem a compromise, but the decision itself is the problem."
  },
  refs: [
    { ref: "eol", note: "Decisions about CPR must not be based on disability." },
    { ref: "equality", note: "Disability as a protected characteristic." }
  ],
  tags: ["learning disability", "DNACPR", "equality", "elderly care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-381", pool, letters: "BECDA", format: "ranking", difficulty: "moderate",
  title: "Can you read this for me?", setting: "Non-clinical (teaching, audit, social)", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Boundaries", "Supporting friends", "Communication"],
  stem:
    "You are an F2 doctor. Your close friend Sophie sends you a photo of her father's CT report, which mentions \"multiple liver lesions, likely metastatic\". Her family is meeting his consultant tomorrow. Her father doesn't know she has shared it with you.\n\n" +
    "She asks, \"What does this mean? Is it bad?\"",
  options: [
    { text: "Listen to her worries and support her as a friend.",
      brief: "She needs a friend right now.",
      detailed: "She is frightened. Being there for her, and listening, is the most helpful thing you can do. It ranks first." },
    { text: "Suggest she writes down questions for the meeting tomorrow.",
      brief: "Helps her get the most from the meeting.",
      detailed: "The consultant knows the full picture. Preparing questions helps her family understand what it means. It ranks second." },
    { text: "Explain what a CT scan is, without interpreting his report.",
      brief: "General information, without overstepping.",
      detailed: "Explaining general terms may reduce her confusion without giving an interpretation you can't make. It ranks third." },
    { text: "Interpret the report for her.",
      brief: "Without the full picture, you may be wrong.",
      detailed: "You don't know his history or the clinical context. Your interpretation may be wrong, and it could cause distress before the family hears it properly." },
    { text: "Tell her not to worry, it's probably nothing.",
      brief: "False reassurance.",
      detailed: "This is untrue, and could make tomorrow's meeting much harder. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you support a friend facing bad news without stepping into the role of her father's doctor.",
    keyDetails: "The report is concerning. A consultant meeting is tomorrow. You don't know the full clinical picture.",
    reasoning: "{1} supports her, {2} prepares her for the meeting, and {3} gives general information. {4} oversteps, and {5} falsely reassures.",
    competing: "{2} and {3} are close. The key puts preparing questions first because it helps her get answers from the right person."
  },
  refs: [
    { ref: "boundaries", note: "Keeping professional and personal roles separate." }
  ],
  tags: ["friends", "bad news", "boundaries", "support"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-382", pool, letters: "BCD", format: "multiple_choice", difficulty: "easy",
  title: "An out-of-date list", setting: "General surgery", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Handover", "Organisation", "Patient safety"],
  stem:
    "You are an F2 doctor starting a weekend day shift in general surgery. The registrar hands over verbally, quickly, and leaves for theatre. His first case starts in 20 minutes, and he carries his bleep.\n\n" +
    "You then discover that the written jobs list is a week out of date, and some patients on it have been discharged while new ones are missing.",
  options: [
    // keyed
    { text: "Check today's jobs with the registrar before he operates.",
      brief: "Fills the gaps while he is available.",
      detailed: "A quick check now makes sure nothing urgent is missed." },
    { text: "Update the list for the current patients.",
      brief: "Gives you, and others, an accurate list.",
      detailed: "An accurate list protects patients over the weekend." },
    { text: "Suggest the team updates the list each day.",
      brief: "Prevents it happening again.",
      detailed: "A simple routine can keep the list accurate." },
    // distractors
    { text: "Work from the old list.",
      brief: "May miss new patients.",
      detailed: "The list doesn't reflect the current patients." },
    { text: "Rely on your memory of the handover.",
      brief: "Verbal handovers are easily forgotten.",
      detailed: "Without a written record, jobs may be missed." },
    { text: "Complain to the consultant about the registrar.",
      brief: "Doesn't solve the problem now.",
      detailed: "The priority is accurate information for today." },
    { text: "Rely on the nurses to tell you which jobs need doing.",
      brief: "Useful input, but not a substitute for the team's plan.",
      detailed: "Nurses know a lot, but the medical plan should come from the team." },
    { text: "Wait until the registrar is out of theatre this afternoon.",
      brief: "Delays clarifying urgent jobs.",
      detailed: "This could be hours away." }
  ],
  explanation: {
    issue: "This tests whether you close gaps in handover promptly to keep patients safe.",
    keyDetails: "The handover was verbal only. The written list is out of date. The registrar is about to go into theatre.",
    reasoning: "{k1} clarifies now, {k2} creates an accurate list, and {k3} prevents a repeat. The distractors rely on unreliable information ({d1}, {d2}, {d4}), blame ({d3}), or delay ({d5}).",
    competing: "{d4} is useful too, but the medical plan needs to come from the team."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, safe handover of care." }
  ],
  tags: ["handover", "jobs list", "surgery", "weekend"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-383", pool, letters: "AEDCB", format: "ranking", difficulty: "moderate",
  title: "Everything, because of his faith", setting: "Acute medical unit", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting beliefs", "End-of-life communication", "Honesty"],
  stem:
    "You are an F2 doctor on the acute medical unit. Mr Okonjo, 79, has end-stage heart failure and is deteriorating. The consultant believes that CPR and intensive care would not help him.\n\n" +
    "Mr Okonjo, who has capacity, tells you that his faith means he must accept every treatment to preserve life.",
  options: [
    { text: "Ask him more about his beliefs and what matters most to him.",
      brief: "Understanding his beliefs helps the team respond respectfully.",
      detailed: "His faith is central to how he sees this decision. Exploring it shows respect and may reveal what is most important to him. It ranks first." },
    { text: "Ask the consultant to discuss his treatment options with him.",
      brief: "A senior should lead this conversation.",
      detailed: "Decisions about CPR and intensive care should be discussed by the consultant, who can explain the reasons. It ranks second." },
    { text: "Offer him a visit from the chaplain or his own faith leader.",
      brief: "Spiritual support may help him.",
      detailed: "He may find it helpful to talk with someone who shares his faith. It ranks third." },
    { text: "Tell him all treatments will be given, to reassure him.",
      brief: "A promise the team may not keep.",
      detailed: "Promising treatments the team believes wouldn't help is dishonest." },
    { text: "Tell him his beliefs shouldn't influence medical decisions.",
      brief: "Dismissive.",
      detailed: "His beliefs are important and should be respected, even if they don't determine every treatment. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respect a patient's beliefs while being honest about what treatment can offer.",
    keyDetails: "He has capacity. His faith shapes his wishes. The consultant thinks some treatments won't help.",
    reasoning: "{1} explores his beliefs, {2} brings in the consultant, and {3} offers spiritual support. {4} is dishonest, and {5} dismisses him.",
    competing: "{4} and {5} are close. The key ranks dismissal last because it disrespects him directly."
  },
  refs: [
    { ref: "eol", note: "Discussing treatment that may not be of overall benefit." },
    { ref: "beliefs", note: "Respecting patients' beliefs." }
  ],
  tags: ["faith", "end of life", "CPR", "acute medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-384", pool, letters: "ADF", format: "multiple_choice", difficulty: "hard",
  title: "Why the change?", setting: "Oncology & palliative care", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Patients, partnership and communication", "Knowledge, skills and development"],
  competencies: ["Honesty about limits", "Seeking expertise", "Communication"],
  stem:
    "You are an F2 doctor on an oncology ward. Mrs Pike, 63, asks why her chemotherapy has been changed. Her oncologist has already told her the cancer has grown. The letter mentions \"progression on first-line treatment\", but you don't fully understand the decision or the new regimen.\n\n" +
    "She is anxious and wants an answer today.",
  options: [
    // keyed
    { text: "Tell her honestly that you aren't sure of the details.",
      brief: "Honest about the limits of your knowledge.",
      detailed: "Guessing about chemotherapy decisions could mislead her. Being honest is better." },
    { text: "Ask the oncology team to explain it to her today.",
      brief: "The right people can answer her question.",
      detailed: "Her oncologist or a specialist nurse can explain the reasons properly, and she wants an answer today." },
    { text: "Read the oncology letter with her, explaining what you can.",
      brief: "Shares what is documented, within your knowledge.",
      detailed: "She may have a copy already. Going through it, and explaining the terms you understand, helps her while she waits." },
    // distractors
    { text: "Explain it based on your understanding of first-line treatment.",
      brief: "May be inaccurate.",
      detailed: "Your partial understanding may not reflect her oncologist's reasoning." },
    { text: "Tell her it's a routine change.",
      brief: "May be misleading.",
      detailed: "'Progression' suggests the cancer has grown, so calling the change routine could give a false impression." },
    { text: "Tell her to ask at her next clinic appointment.",
      brief: "Delays an answer she wants today.",
      detailed: "Her next clinic may be weeks away." },
    { text: "Tell her not to worry, as the team knows what it's doing.",
      brief: "Dismissive.",
      detailed: "This doesn't answer her question or address her anxiety." },
    { text: "Ask the pharmacist to explain the reasons for the change.",
      brief: "Can explain the drugs, but not the clinical decision.",
      detailed: "A pharmacist can explain the new regimen, but not the oncologist's reasons for changing it." }
  ],
  explanation: {
    issue: "This tests whether you recognise the limits of your knowledge and find the right person to answer a patient's question.",
    keyDetails: "The change follows progression. You don't fully understand it. She wants an answer today.",
    reasoning: "{k1} is honest, {k2} gets the right people involved, and {k3} shares what you can. The distractors guess ({d1}), mislead ({d2}), delay ({d3}), dismiss ({d4}), or ask the wrong person ({d5}).",
    competing: "{d2} might seem reassuring, but the word 'progression' means the change isn't routine."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, recognising the limits of your competence." }
  ],
  tags: ["oncology", "chemotherapy", "competence", "honesty"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-385", pool, letters: "ECABD", format: "ranking", difficulty: "moderate",
  title: "Updates for the family", setting: "General surgery", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Confidentiality", "Communication with families", "Patient choice"],
  stem:
    "You are an F2 doctor in general surgery. Mr Rowe, 70, is recovering from bowel surgery and has capacity. His three adult children phone the ward several times a day, each asking for detailed updates.\n\n" +
    "Mr Rowe hasn't said what he wants shared with them.",
  options: [
    { text: "Ask Mr Rowe what he'd like shared, and with whom.",
      brief: "His information, his choice.",
      detailed: "He has capacity, and the decision about sharing his information is his. Asking him resolves the uncertainty. It ranks first." },
    { text: "Suggest, with his agreement, that the family chooses one contact for updates.",
      brief: "Reduces calls and confusion.",
      detailed: "A single point of contact makes updates clearer for everyone. It ranks second because it depends on his wishes." },
    { text: "Tell callers he is comfortable, until you have spoken to him.",
      brief: "Gives minimal information while you check.",
      detailed: "Saying very little until you know his wishes is cautious. It ranks third." },
    { text: "Refuse to speak to the family at all.",
      brief: "Unhelpful and may cause distress.",
      detailed: "This may upset them unnecessarily before you know what he wants." },
    { text: "Give each of them full updates, as they are his children.",
      brief: "Shares information without his consent.",
      detailed: "Being his children doesn't entitle them to his information. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you make sure a capacitous patient decides what his family is told.",
    keyDetails: "He has capacity. He hasn't said what he wants shared. His family calls often.",
    reasoning: "{1} asks him, {2} simplifies communication with his agreement, and {3} is cautious in the meantime. {4} is unhelpful, and {5} breaches confidentiality.",
    competing: "{3} might be seen as a disclosure. Saying that someone is comfortable, without detail, is usually acceptable while you check."
  },
  refs: [
    { ref: "confidentiality", note: "Sharing information with relatives with the patient's agreement." }
  ],
  tags: ["confidentiality", "families", "surgery", "communication"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-386", pool, letters: "CGH", format: "multiple_choice", difficulty: "moderate",
  title: "Unchecked at night", setting: "Intensive care", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Safety and quality"],
  competencies: ["Controlled drugs", "Raising concerns", "Following policy"],
  stem:
    "You are an F2 doctor in intensive care. On several night shifts you have noticed that controlled drugs are taken from the cupboard and given without the second person check the trust's policy requires.\n\n" +
    "When you mention it, a nurse says, \"Everyone does it at night. There aren't enough of us.\"",
  options: [
    // keyed
    { text: "Raise your concern with the nurse in charge.",
      brief: "The person responsible for the shift needs to know.",
      detailed: "The nurse in charge can address it and escalate the staffing issue behind it." },
    { text: "Report it through the incident reporting system.",
      brief: "Creates a record and prompts review.",
      detailed: "A recurring breach of controlled drug checks is a safety risk that needs reviewing, including the staffing pressures." },
    { text: "Follow the checking policy yourself.",
      brief: "Sets an example and keeps your own practice safe.",
      detailed: "Following the policy, even when others don't, protects patients and you." },
    // distractors
    { text: "Leave it, as the nurses are under pressure.",
      brief: "Ignores a recurring safety risk.",
      detailed: "Staffing pressure explains it but doesn't make it safe." },
    { text: "Tell the nurses off in front of their colleagues.",
      brief: "Public criticism is unlikely to help.",
      detailed: "This may cause conflict without changing practice." },
    { text: "Report the nurses to the police.",
      brief: "Disproportionate without evidence of misuse.",
      detailed: "This is a policy breach, not evidence of theft." },
    { text: "Join in, as it saves time at night.",
      brief: "Unsafe.",
      detailed: "This adds to the risk." },
    { text: "Mention it informally to the pharmacist when you next see her.",
      brief: "May not lead to action.",
      detailed: "An informal mention may not reach those who can change practice." }
  ],
  explanation: {
    issue: "This tests whether you raise a recurring safety concern through proper routes, even when colleagues see it as normal.",
    keyDetails: "Controlled drug checks are regularly bypassed. Staffing is short at night. It is happening repeatedly.",
    reasoning: "{k1} tells the person responsible, {k2} creates a record, and {k3} keeps your own practice safe. The distractors ignore it ({d1}, {d4}), criticise publicly ({d2}), escalate disproportionately ({d3}), or are informal ({d5}).",
    competing: "{d5} could be part of the response, but it isn't a substitute for formal reporting."
  },
  refs: [
    { ref: "concerns", note: "Raising concerns about unsafe practice." },
    { ref: "psirf", note: "Reporting incidents so systems can be reviewed." }
  ],
  tags: ["controlled drugs", "raising concerns", "intensive care", "staffing"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-387", pool, letters: "BADCE", format: "ranking", difficulty: "easy",
  title: "Treated with suspicion", setting: "Acute medical unit", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Fair treatment", "Building trust", "Challenging prejudice"],
  stem:
    "You are an F2 doctor on the acute medical unit. Mr Hall, 52, a Gypsy man who lives in a caravan, was admitted with cellulitis needing intravenous antibiotics.\n\n" +
    "He tells you staff keep checking his belongings and asking whether he has \"taken anything\". He says he feels treated like a criminal and wants to leave.",
  options: [
    { text: "Apologise, and listen to his experience.",
      brief: "His trust needs rebuilding.",
      detailed: "Being treated with suspicion is upsetting and may reflect prejudice. An apology and listening may help him feel respected. It ranks first." },
    { text: "Explain why his antibiotics matter and encourage him to stay.",
      brief: "He needs to understand the risks of leaving.",
      detailed: "Cellulitis needing intravenous antibiotics can become serious. Explaining this may help him decide to stay. It ranks second." },
    { text: "Raise the staff's behaviour with the nurse in charge.",
      brief: "Addresses the cause.",
      detailed: "If he is being treated differently because of his background, it needs addressing. It ranks third because his immediate care comes first." },
    { text: "Tell him staff are just being careful.",
      brief: "Dismisses his experience.",
      detailed: "This may confirm his sense of being treated unfairly." },
    { text: "Tell him he is free to leave if he is unhappy.",
      brief: "Accepts him leaving without addressing his concerns or the risks.",
      detailed: "He has the right to leave, but this ignores the reason he wants to and the risks. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond when a patient from a minority community feels discriminated against.",
    keyDetails: "He feels treated like a criminal. He needs IV antibiotics. He wants to leave.",
    reasoning: "{1} apologises and listens, {2} explains the risks, and {3} addresses staff behaviour. {4} dismisses him, and {5} lets him leave without addressing the cause.",
    competing: "{2} and {3} are close. The key puts his treatment first because leaving could harm him."
  },
  refs: [
    { ref: "equality", note: "Race, including Gypsy and Traveller communities, as a protected characteristic." },
    { ref: "gmp", note: "Domain 2, treating patients fairly." }
  ],
  tags: ["discrimination", "Gypsy and Traveller", "equality", "acute medicine"]
}
];
