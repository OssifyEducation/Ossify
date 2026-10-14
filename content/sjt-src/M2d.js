// Mock 2, part 4 (sjt-288 to sjt-300). Pool mock-2: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-2";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-288", pool, letters: "BDF", format: "multiple_choice", difficulty: "moderate",
  title: "Thirteen hours in", setting: "Cardiology / respiratory", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Safety and quality", "Trust and professionalism"],
  competencies: ["Recognising fatigue", "Safe prescribing", "Self-care"],
  stem:
    "You are an F2 doctor on a respiratory ward, 13 hours into a busy shift, and you haven't had a break. Checking a drug chart, you realise that an hour ago you prescribed a treatment dose of enoxaparin for Mr Ward based on the wrong weight, so the dose is too high.\n\n" +
    "The first dose isn't due for two hours. You have an hour left on shift and several jobs still to do.",
  options: [
    // keyed
    { text: "Correct the prescription now.",
      brief: "The error must be fixed before the dose is due.",
      detailed: "An anticoagulant overdose can cause serious bleeding. Correcting the prescription, using his correct weight, removes the risk before any harm is done." },
    { text: "Take a short break before carrying on.",
      brief: "Fatigue caused this error and could cause another.",
      detailed: "Thirteen hours without a break impairs concentration. A short break, even 15 minutes, reduces the chance of further mistakes in your last hour." },
    { text: "Recheck the other prescriptions you wrote in the last few hours.",
      brief: "If tiredness caused one error, there may be others.",
      detailed: "Errors caused by fatigue rarely occur alone. Checking your recent prescriptions is a quick way to catch any others before they reach patients." },
    // distractors
    { text: "Fill in an incident report before correcting the prescription.",
      brief: "Reporting a near miss is good practice, but correcting it comes first.",
      detailed: "A near-miss report can help the ward learn, and you could complete one later. It shouldn't come before making the prescription safe." },
    { text: "Keep working, as there's only an hour left.",
      brief: "Ignores the warning sign that you are too tired to work safely.",
      detailed: "The error shows fatigue is affecting your work. Pushing on for the last hour increases the risk of another mistake." },
    { text: "Ask the pharmacist to check every prescription you write until the end of the shift.",
      brief: "Passes your responsibility to a colleague.",
      detailed: "Pharmacists check prescriptions, but asking them to double-check all your work shifts the burden rather than addressing your fatigue." },
    { text: "Go home early and leave your remaining jobs for the night team.",
      brief: "Leaves unfinished work without a handover.",
      detailed: "Going home may sometimes be right if you are unsafe, but leaving jobs without a proper handover creates a different risk." },
    { text: "Have a strong coffee and carry on.",
      brief: "Doesn't address the cause of the error.",
      detailed: "Caffeine may help briefly, but it doesn't replace rest and doesn't check for other errors." }
  ],
  explanation: {
    issue: "This tests whether you correct an error promptly and recognise that fatigue is making you unsafe.",
    keyDetails: "The error was caught before the dose. You haven't had a break in 13 hours. You have an hour left.",
    reasoning: "{k1} removes the immediate risk, {k2} addresses the cause, and {k3} checks for other errors. The distractors put the order wrong ({d1}), ignore fatigue ({d2}, {d5}), pass on responsibility ({d3}), or leave without handover ({d4}).",
    competing: "{d1} is tempting, because near misses should be reported. It belongs later, once the prescription is safe."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, recognising when your health or fatigue may affect patient safety." },
    { ref: "prescribing", note: "Responsibility for the prescriptions you write." }
  ],
  tags: ["fatigue", "prescribing error", "near miss", "respiratory"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-289", pool, letters: "DBCA", format: "ranking", difficulty: "hard",
  title: "Not a male doctor", setting: "Out-of-hours / community", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting beliefs", "Patient safety", "Negotiation"],
  stem:
    "You are a male F2 doctor working for the GP out-of-hours service. You visit Mrs Begum, 79, at home. She has had abdominal pain and vomiting since the afternoon. She speaks English and is alert.\n\n" +
    "Her son and daughter-in-law tell you that the family won't accept a male doctor examining her abdomen. The out-of-hours service has a female GP on duty tonight, but she is on visits across the county.",
  options: [
    { text: "Ask Mrs Begum whether she'd accept you examining her, with a relative present.",
      brief: "She has capacity, and it's her decision.",
      detailed: "The family's view matters, but Mrs Begum is alert and can decide for herself. Asking her directly, and offering a female relative as a chaperone, respects her beliefs and her autonomy. It ranks first." },
    { text: "Phone the out-of-hours base to ask how soon the female GP could visit.",
      brief: "Respects the request, but may delay her assessment.",
      detailed: "If Mrs Begum would prefer a female doctor, finding out how soon one can come is reasonable. It ranks second because it may mean a long wait for a patient who could be seriously unwell." },
    { text: "Tell the family you will examine her now, as she needs assessing.",
      brief: "Overrides their concerns without asking the patient.",
      detailed: "She does need assessing, but examining her without asking her, against the family's stated wishes, ignores both her autonomy and their beliefs." },
    { text: "Leave without examining her, and advise the family to call back if she gets worse.",
      brief: "Leaves a possibly unwell patient unassessed.",
      detailed: "Abdominal pain and vomiting in an older patient can have serious causes. Leaving without assessment puts her at risk. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you balance a family's beliefs about gender with a patient's need for assessment, while keeping the patient at the centre.",
    keyDetails: "She is alert and has capacity. The family object to a male doctor. A female GP is on duty but far away. Her symptoms could be serious.",
    reasoning: "{1} asks the patient herself, with a chaperone. {2} respects the request but risks delay. {3} overrides everyone, and {4} leaves her unassessed.",
    competing: "Some would phone the base first, to respect the family's wishes. The key asks Mrs Begum first, because the decision is hers and she may well agree."
  },
  refs: [
    { ref: "beliefs", note: "Respecting patients' beliefs about who examines them." },
    { ref: "chaperones", note: "Offering a chaperone and respecting patients' preferences in intimate examinations." }
  ],
  tags: ["culture", "chaperones", "out-of-hours", "gender"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-290", pool, letters: "DEG", format: "multiple_choice", difficulty: "moderate",
  title: "His younger brother", setting: "Acute medical unit", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Safety and quality", "Patients, partnership and communication"],
  competencies: ["Child safeguarding", "Confidentiality", "Listening"],
  stem:
    "You are an F2 doctor on the acute medical unit. Mr Price, 19, is being treated for asthma. While you are taking his history, he tells you that his brother, 14, is being made to carry drugs to other towns by older men, who threatened their family when his brother tried to stop.\n\n" +
    "He asks you not to tell anyone, because he is scared of what the men might do.",
  options: [
    // keyed
    { text: "Thank him, and explain you must share it to protect his brother.",
      brief: "Honest about the limits of confidentiality, while acknowledging his courage.",
      detailed: "A child at risk of exploitation must be protected, so you can't keep this confidential. Explaining why, and thanking him, keeps his trust as far as possible and lets him know what will happen." },
    { text: "Discuss it with the hospital's safeguarding children team today.",
      brief: "Child exploitation needs urgent specialist safeguarding action.",
      detailed: "The safeguarding team can make a referral to children's social care and advise on involving the police, taking into account the threats to the family." },
    { text: "Record what he told you, in his words, in the notes.",
      brief: "Accurate records support the safeguarding process.",
      detailed: "A clear record of what was said, and when, helps the safeguarding team and any later enquiry." },
    // distractors
    { text: "Promise to keep it between the two of you.",
      brief: "You can't keep this promise when a child is at risk.",
      detailed: "A promise of confidentiality would have to be broken, which would damage his trust further." },
    { text: "Phone the police yourself straight away.",
      brief: "Police may need to be involved, but the safeguarding team should coordinate it.",
      detailed: "If someone were in immediate danger, calling the police would be right. Here, the safeguarding team can coordinate a safer response that considers the threats to the family." },
    { text: "Ask Mr Price to persuade his parents to go to the police.",
      brief: "Puts the responsibility on him and doesn't protect his brother.",
      detailed: "Encouraging the family may help, but it leaves a professional duty to a frightened young man." },
    { text: "Contact his brother's school and ask them to keep a close eye on him.",
      brief: "An informal approach outside the safeguarding process.",
      detailed: "Schools are part of safeguarding, but contacting one directly, without the safeguarding team, risks an uncoordinated response." },
    { text: "Leave it, as his brother isn't your patient.",
      brief: "Safeguarding duties apply to any child you learn may be at risk.",
      detailed: "Every doctor has a duty to act on concerns about a child, whether or not the child is their patient." }
  ],
  explanation: {
    issue: "This tests whether you act on a disclosure of child exploitation, while being honest about confidentiality and sensitive to the risks to the family.",
    keyDetails: "A 14-year-old is being exploited. There have been threats. The disclosure came from his brother, who is frightened.",
    reasoning: "{k1} is honest with Mr Price, {k2} brings in the safeguarding team, and {k3} records the disclosure. The distractors make a promise you can't keep ({d1}), act alone ({d2}, {d4}), pass on responsibility ({d3}), or do nothing ({d5}).",
    competing: "{d2} is tempting because a crime is involved. The safeguarding team can involve the police in a way that takes account of the threats, and they should coordinate it."
  },
  refs: [
    { ref: "children", note: "Acting on concerns about any child, including one who isn't your patient." },
    { ref: "workingtogether", note: "Child exploitation and multi-agency safeguarding." },
    { ref: "confidentiality", note: "Disclosing information to protect others from serious harm." }
  ],
  tags: ["safeguarding", "child exploitation", "county lines", "confidentiality"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-291", pool, letters: "EABCD", format: "ranking", difficulty: "moderate",
  title: "Teaching cancelled again", setting: "Obstetrics & gynaecology", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Advocating for training", "Using formal processes", "Balancing service"],
  stem:
    "You are an F2 doctor in obstetrics and gynaecology. Your protected teaching session has been cancelled for the third time this month, because the labour ward is short of doctors.\n\n" +
    "You are worried you are falling behind on your learning, and you know other trainees on the rota feel the same.",
  options: [
    { text: "Submit an exception report for the missed teaching.",
      brief: "This is the formal way to record missed educational opportunities.",
      detailed: "Exception reports can be made for missed education as well as extra hours. They go to your educational supervisor and help the trust see the pattern. It ranks first because it is the route designed for this problem." },
    { text: "Ask the rota coordinator whether teaching can be protected on the rota.",
      brief: "A practical step towards fixing the cause.",
      detailed: "Rota changes may make protected teaching possible. It ranks second because a single request is less likely to change things than a formal report that shows the pattern." },
    { text: "Use quieter moments on shift for self-directed learning.",
      brief: "Helpful for you, but doesn't address the problem.",
      detailed: "Making the most of quiet moments is sensible, but it doesn't replace protected teaching or help other trainees. It ranks third." },
    { text: "Accept it, as service needs come first.",
      brief: "Leaves a recurring problem unaddressed.",
      detailed: "Occasional cancellations are inevitable, but a repeated pattern affects training and should be raised. Accepting it means nothing changes." },
    { text: "Leave the labour ward to attend teaching at another hospital next week.",
      brief: "Leaves the ward short, which puts patients at risk.",
      detailed: "Your learning matters, but leaving a short-staffed labour ward to attend teaching elsewhere puts patients at risk. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you use proper routes to protect your training, without putting patients at risk.",
    keyDetails: "Teaching has been cancelled three times this month. Others are affected. The labour ward is short.",
    reasoning: "{1} uses the formal route, {2} tackles the rota, and {3} makes the best of the situation. {4} lets the problem continue, and {5} risks patient safety.",
    competing: "Some would talk to their educational supervisor first. An exception report reaches the supervisor anyway, and it also records the pattern formally."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, keeping your knowledge and skills up to date." }
  ],
  tags: ["training", "exception reporting", "rota", "obstetrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-292", pool, letters: "ABH", format: "multiple_choice", difficulty: "easy",
  title: "Trying to leave", setting: "Elderly care ward", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication", "Safety and quality"],
  competencies: ["Capacity assessment", "Delirium", "Least restrictive care"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mr Cole, 84, was admitted yesterday with a urinary tract infection. This evening he keeps walking towards the ward exit, saying he needs to \"get home to feed the dog\".\n\n" +
    "He seems muddled, and the nurses are struggling to keep him on the ward. His capacity to decide whether to stay in hospital hasn't been assessed.",
  options: [
    // keyed
    { text: "Assess his capacity to decide whether to stay in hospital.",
      brief: "This decides how the team can lawfully act.",
      detailed: "If he has capacity, he can choose to leave, even unwisely. If he lacks it, the team can act in his best interests in the least restrictive way. The assessment comes first." },
    { text: "Talk with him calmly about his worries, including the dog.",
      brief: "Addressing his concern may settle him without restriction.",
      detailed: "His worry about the dog may be real. Finding out, and reassuring him that it is being dealt with, may settle him more effectively than any restriction." },
    { text: "Look for causes of his confusion, such as pain or retention.",
      brief: "Delirium has treatable causes that may be making him worse.",
      detailed: "His confusion may be worsening because of infection, pain, constipation or urinary retention. Treating these may improve both his confusion and his wish to leave." },
    // distractors
    { text: "Let him leave, as he isn't detained.",
      brief: "Unsafe without first assessing his capacity.",
      detailed: "If he lacks capacity, letting him walk out at night with an infection could put him at serious risk." },
    { text: "Ask security to stand at the ward exit.",
      brief: "A restrictive measure without assessment.",
      detailed: "Restricting his movement without assessing capacity, and without considering less restrictive options, may be unlawful and can increase distress." },
    { text: "Prescribe a sedative so he settles for the night.",
      brief: "Sedation can worsen delirium and isn't first-line.",
      detailed: "Sedating him without assessment may make him more confused and increase his risk of falls." },
    { text: "Ask his daughter to stay with him overnight.",
      brief: "Family can help, but it isn't a substitute for assessment.",
      detailed: "A familiar face can be very calming and is worth discussing. But it doesn't replace assessing his capacity and the cause of his confusion." },
    { text: "Use section 5(2) of the Mental Health Act to keep him on the ward.",
      brief: "The Mental Capacity Act is the appropriate framework here.",
      detailed: "His confusion is likely due to a physical illness. The Mental Capacity Act, rather than the Mental Health Act, is usually the right framework." }
  ],
  explanation: {
    issue: "This tests how you respond to a confused patient trying to leave, starting with capacity and the least restrictive approach.",
    keyDetails: "He is muddled and has an infection. His capacity hasn't been assessed. He has a specific worry.",
    reasoning: "{k1} establishes the legal basis for action, {k2} addresses his concern, and {k3} treats the cause. The distractors ignore the risk ({d1}), restrict him without assessment ({d2}, {d5}), sedate ({d3}), or rely on family instead of assessment ({d4}).",
    competing: "{d4} is the closest call, as family can help greatly. It is a useful addition, but not a substitute for the keyed actions."
  },
  refs: [
    { ref: "mca1", note: "Assessing capacity and using the least restrictive option." },
    { ref: "delirium", note: "Identifying and treating causes of delirium." }
  ],
  tags: ["capacity", "delirium", "elderly care", "least restrictive"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-293", pool, letters: "BDCAE", format: "ranking", difficulty: "moderate",
  title: "Not in my notes", setting: "General practice", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Patients, partnership and communication", "Safety and quality"],
  competencies: ["Confidentiality", "Record-keeping", "Exploring concerns"],
  stem:
    "You are an F2 doctor in a GP practice. Mr Novak, 38, was recently diagnosed with HIV at a sexual health clinic, which has written to the practice. He has started antiretroviral treatment.\n\n" +
    "At an appointment about something else, he asks you not to record his HIV diagnosis in his GP notes, because he is worried that \"anyone could see it\".",
  options: [
    { text: "Ask what worries him about the diagnosis being in his notes.",
      brief: "Understanding his concern lets you address it.",
      detailed: "He may be worried about particular people, such as a relative working at the practice, or about stigma in general. Exploring his worry first helps you give the right reassurance. It ranks first." },
    { text: "Explain why it needs recording, including avoiding dangerous drug interactions.",
      brief: "Other clinicians need to know to treat him safely.",
      detailed: "Antiretroviral drugs interact with many common medicines. A doctor unaware of his treatment could prescribe something harmful. Explaining this honestly helps him understand why the record matters." },
    { text: "Explain how access to his record is controlled, and any options for limiting it.",
      brief: "Addresses his worry while keeping his record complete.",
      detailed: "Records are confidential, staff access is monitored, and there may be ways to restrict how sensitive information is shared. This addresses his concern directly. It ranks third because it is most useful once he understands why the information should be recorded." },
    { text: "Record the diagnosis without discussing his concerns.",
      brief: "Safe for his care, but dismissive of his worry.",
      detailed: "Recording it protects his safety, but ignoring his concern may damage his trust and make him less likely to share information in future." },
    { text: "Agree not to record the diagnosis.",
      brief: "Leaves his record incomplete and puts him at risk.",
      detailed: "Without the diagnosis and treatment in his record, he could be prescribed medicines that interact dangerously. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you handle a patient's request to keep important information out of his record, balancing his concerns with his safety.",
    keyDetails: "He is on antiretroviral treatment. He is worried about who might see his record. The information matters for safe prescribing.",
    reasoning: "{1} explores his worry, {2} explains why recording matters, and {3} addresses access. {4} is safe but dismissive, and {5} puts him at risk.",
    competing: "{2} and {3} could reasonably be swapped. The key explains the reason first, because his choice to share is better informed once he understands it."
  },
  refs: [
    { ref: "confidentiality", note: "Protecting patient information and explaining how it is used." },
    { ref: "gmp", note: "Domain 2, keeping clear and accurate records." }
  ],
  tags: ["confidentiality", "HIV", "records", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-294", pool, letters: "CDF", format: "multiple_choice", difficulty: "hard",
  title: "\"What's the point?\"", setting: "Cardiology / respiratory", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication", "Safety and quality"],
  competencies: ["Suicide risk assessment", "Compassion", "Escalation"],
  stem:
    "You are an F2 doctor in a heart failure clinic. Mr Stone, 67, has worsening heart failure. During a routine review of his medicines, he says, \"Sometimes I think it would be easier if I just didn't wake up. I've thought about taking all my tablets at once.\"\n\n" +
    "He says his wife died last year and he lives alone. He has a large supply of medicines at home.",
  options: [
    // keyed
    { text: "Ask him directly about his thoughts of suicide and any plans.",
      brief: "Asking directly is how you assess his risk, and it doesn't increase it.",
      detailed: "He has mentioned a method and has access to it. Asking clearly about intent, plans and what stops him is essential to judge how urgent the situation is." },
    { text: "Ask how his illness and his wife's death are affecting him.",
      brief: "Shows you are listening and helps you understand his distress.",
      detailed: "Giving him space to talk about his grief and his illness shows compassion and helps you understand his situation. Many people feel relieved to be asked." },
    { text: "Agree an urgent mental health plan with a senior colleague.",
      brief: "His risk needs a same-day plan, agreed with someone senior.",
      detailed: "He is older, lives alone, is bereaved and has a chronic illness, a method and access to it. A senior should help you decide the urgency, which may mean a same-day referral to the crisis or liaison team." },
    // distractors
    { text: "Reassure him that it's normal to feel low with heart failure.",
      brief: "Low mood is common, but this minimises what he has disclosed.",
      detailed: "Depression is common in heart failure, but describing suicidal thoughts as normal could leave a serious risk unassessed." },
    { text: "Write to his GP to suggest a mental health assessment.",
      brief: "Too slow for someone with a stated method and access to it.",
      detailed: "A letter to his GP might be appropriate for low-risk low mood. With a stated method and a supply of medicines, he needs an assessment today." },
    { text: "Start an antidepressant today.",
      brief: "Premature without a full assessment.",
      detailed: "He may well benefit from treatment, but starting an antidepressant doesn't address immediate risk and needs proper assessment first." },
    { text: "Phone his daughter to tell her what he said.",
      brief: "Family may help, but only with his agreement, unless the risk is immediate.",
      detailed: "Involving family can be protective, and it may be justified without consent if the risk is very high. As a first step, without discussing it with him, it breaches his confidentiality." },
    { text: "Adjust his heart failure medicines and see him in the next clinic.",
      brief: "Continues the routine plan and ignores what he said.",
      detailed: "His medicines may need adjusting, but carrying on with the routine review ignores a disclosure of suicidal thoughts." }
  ],
  explanation: {
    issue: "This tests whether you recognise and respond to suicide risk disclosed unexpectedly during a routine review.",
    keyDetails: "He has thoughts of suicide and a method. He has access to a large supply of medicines. He is bereaved, older and lives alone.",
    reasoning: "{k1} assesses his risk directly, {k2} responds with compassion, and {k3} gets senior input and urgent support. The distractors minimise ({d1}), act too slowly ({d2}), treat prematurely ({d3}), breach confidentiality as a first step ({d4}), or ignore the disclosure ({d5}).",
    competing: "{d2} would be reasonable for low mood without suicidal plans. What makes it wrong here is the stated method and his easy access to it."
  },
  refs: [
    { ref: "ng225", note: "Assessing people who have thoughts of self-harm or suicide." },
    { ref: "confidentiality", note: "Disclosing information when someone is at risk of serious harm." }
  ],
  tags: ["suicide", "risk assessment", "heart failure", "bereavement"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-295", pool, letters: "ADEBC", format: "ranking", difficulty: "moderate",
  title: "A friend on the ward", setting: "General medical ward", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Boundaries", "Confidentiality", "Objectivity"],
  stem:
    "You are an F2 doctor on a general medical ward. Hannah, a close friend from university, has been admitted under your consultant with abdominal pain. You haven't been involved in her care.\n\n" +
    "She messages you: \"I had a CT scan this morning and no one has told me the results. Could you have a look and let me know?\"",
  options: [
    { text: "Ask one of her own doctors to see her and give her the results.",
      brief: "Keeps her care with the team responsible, while helping her get an answer.",
      detailed: "She is entitled to her results, but they should come from the doctors looking after her, who can explain them and plan next steps. Asking them to see her helps her get an answer soon. It ranks first." },
    { text: "Tell your consultant that you know Hannah well.",
      brief: "Lets the team decide how to manage your involvement.",
      detailed: "Being close to a patient can affect objectivity and confidentiality. Telling your consultant allows the team to plan sensibly, for example by keeping you away from her care. It ranks second." },
    { text: "Visit her as a friend after work, without discussing her medical care.",
      brief: "Supportive, while keeping professional and personal roles separate.",
      detailed: "There is nothing wrong with visiting a friend in hospital, provided you are clear that you're there as a friend. It ranks third because it doesn't help her get her results." },
    { text: "Look at the results and explain them to her yourself.",
      brief: "Blurs the line between friend and doctor.",
      detailed: "You may have access as part of the team, but you aren't involved in her care, and explaining results outside a clinical consultation, perhaps with serious news, isn't appropriate." },
    { text: "Look at the results, and tell her only if they are normal.",
      brief: "Selective disclosure is misleading.",
      detailed: "If you said nothing about abnormal results, your silence would itself tell her something. It is also an inappropriate use of access to a friend's records. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you keep professional boundaries when a friend is a patient in your team.",
    keyDetails: "She is a close friend. You aren't involved in her care. She is anxious for her results.",
    reasoning: "{1} helps her through the proper route, {2} tells your consultant about the relationship, and {3} supports her as a friend. {4} blurs boundaries, and {5} is also misleading.",
    competing: "{1} and {2} work together. The key puts helping her get her results first, as she is waiting now; telling your consultant can follow."
  },
  refs: [
    { ref: "boundaries", note: "Personal relationships and treating those close to you." },
    { ref: "confidentiality", note: "Accessing records only when involved in a patient's care." }
  ],
  tags: ["boundaries", "friends", "confidentiality", "general medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-296", pool, letters: "ACF", format: "multiple_choice", difficulty: "moderate",
  title: "The chemotherapy is late", setting: "Oncology & palliative care", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Patients, partnership and communication", "Collaboration, teamwork and leadership"],
  competencies: ["Communication", "Managing delays", "Teamwork"],
  stem:
    "You are an F2 doctor on an oncology day unit. A problem at the pharmacy production unit means that this morning's chemotherapy hasn't arrived. Six patients have had cannulas inserted and are waiting, and some have travelled a long way.\n\n" +
    "The nurse in charge asks you to help manage the situation.",
  options: [
    // keyed
    { text: "Find out from pharmacy how long the delay is likely to be.",
      brief: "Accurate information is the basis for every decision.",
      detailed: "Without knowing how long the delay is, you can't advise patients or plan. A quick call to pharmacy lets you give honest information." },
    { text: "Tell the patients about the delay, and when you'll update them.",
      brief: "Patients cope better with delays when they are kept informed.",
      detailed: "Waiting without information is stressful, especially for patients having chemotherapy. An honest explanation and a time for the next update help them plan." },
    { text: "Plan with the nurse in charge for patients who can't wait.",
      brief: "Some patients may need rebooking or other arrangements.",
      detailed: "Some patients may have transport or other commitments. Agreeing with the nurse in charge how to handle this, such as rebooking or removing cannulas, keeps care organised." },
    // distractors
    { text: "Tell the patients that pharmacy is at fault.",
      brief: "Blaming another department doesn't help and damages trust.",
      detailed: "Patients need to know there is a delay, not who is to blame. Criticising colleagues in front of patients undermines confidence in the service." },
    { text: "Send all the patients home and rebook them.",
      brief: "May be unnecessary if the delay is short.",
      detailed: "Rebooking everyone without knowing the length of the delay may cause more disruption than waiting." },
    { text: "Ask the patients to wait without explanation until the drugs arrive.",
      brief: "Leaves patients anxious and unable to plan.",
      detailed: "Not telling patients about the delay is discourteous and can cause distress." },
    { text: "Give the pre-medication now so they're ready when the drugs arrive.",
      brief: "Pre-medication timing matters, and the delay is unknown.",
      detailed: "Pre-medication is timed in relation to chemotherapy. Giving it now, without knowing when the drugs will arrive, could reduce its effect." },
    { text: "Phone the pharmacy manager to complain about the service.",
      brief: "Complaining doesn't help the patients now.",
      detailed: "The failure may need reviewing later, but a complaint now doesn't solve the problem." }
  ],
  explanation: {
    issue: "This tests how you manage an unexpected service failure: getting information, keeping patients informed and planning with the team.",
    keyDetails: "The delay length is unknown. Patients are waiting with cannulas in. Some have travelled far. The nurse in charge has asked for help.",
    reasoning: "{k1} gets the facts, {k2} keeps patients informed, and {k3} plans for those who can't wait. The distractors blame ({d1}, {d5}), act without information ({d2}, {d4}), or leave patients uninformed ({d3}).",
    competing: "{d2} might be right if the delay turns out to be long, but it should follow finding out, not replace it."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, keeping patients informed about their care." }
  ],
  tags: ["delays", "chemotherapy", "communication", "oncology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-297", pool, letters: "CBEAD", format: "ranking", difficulty: "easy",
  title: "Still at work", setting: "Paediatrics", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Collaboration, teamwork and leadership"],
  competencies: ["Supporting colleagues", "Compassion", "Respecting privacy"],
  stem:
    "You are an F2 doctor in paediatrics. Your colleague Dr Lin, another F2, tells you quietly that her baby has just been diagnosed with a serious heart condition and will need surgery.\n\n" +
    "She is still working her shift, and you notice she seems distracted and tearful.",
  options: [
    { text: "Ask her privately how she is and what would help.",
      brief: "A personal, private check-in comes first.",
      detailed: "She has confided in you. Asking gently how she is coping, and what would help, shows support and lets her say what she needs. It ranks first." },
    { text: "Offer to take on some of her tasks today.",
      brief: "Practical help with the workload.",
      detailed: "Reducing her workload may help her get through the shift, or give her time for calls about her baby. It ranks second because it works best once you know what she wants." },
    { text: "Suggest she speaks to her supervisor about support or leave.",
      brief: "Points her to formal support she may need.",
      detailed: "Her supervisor can arrange leave or adjustments. Suggesting it helps her access formal support, although it is less immediate than personal and practical help." },
    { text: "Avoid mentioning it, so as not to upset her.",
      brief: "Well meant, but may leave her feeling unsupported.",
      detailed: "Some people prefer not to talk, but saying nothing after she confided in you could feel like indifference." },
    { text: "Tell the rota coordinator that she needs time off.",
      brief: "Shares her private news and makes a decision that is hers.",
      detailed: "This discloses her personal information without permission and takes a decision that belongs to her. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you support a colleague in distress, while respecting her privacy and choices.",
    keyDetails: "She confided in you. She is still working. She seems distracted. Her news is private.",
    reasoning: "{1} offers personal support, {2} offers practical help, and {3} points to formal support. {4} risks seeming indifferent, and {5} breaches her privacy.",
    competing: "Some would suggest speaking to her supervisor sooner. The key puts personal support first because she has confided in you."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues who have problems." }
  ],
  tags: ["colleague support", "privacy", "paediatrics", "wellbeing"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-298", pool, letters: "BEH", format: "multiple_choice", difficulty: "moderate",
  title: "She won't give it", setting: "Emergency department", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Collaboration, teamwork and leadership", "Safety and quality"],
  competencies: ["Teamwork", "Safe prescribing", "Responding to challenge"],
  stem:
    "You are an F2 doctor in the Emergency Department. You prescribed intravenous gentamicin for a patient with suspected urosepsis. A nurse, Kate, tells you she won't give it because she thinks the dose is too high for the patient's kidney function.\n\n" +
    "You are busy and feel confident you used the trust's gentamicin calculator.",
  options: [
    // keyed
    { text: "Listen to Kate's concern.",
      brief: "She may have noticed something you missed.",
      detailed: "Nurses checking prescriptions is an important safety barrier. Her concern about kidney function is specific and deserves attention, even if you are busy." },
    { text: "Recheck the dose with her, using his latest results.",
      brief: "A joint check resolves the disagreement safely.",
      detailed: "Rechecking together shows whether you used the right weight and creatinine. If you were right, she will be reassured; if not, the error is caught." },
    { text: "Ask the ED pharmacist to check the dose.",
      brief: "An independent expert can settle a dosing question.",
      detailed: "A pharmacist can give an independent, expert view on gentamicin dosing, which settles any remaining doubt so the patient gets the right dose promptly." },
    // distractors
    { text: "Tell Kate to give the dose, as you are the prescriber.",
      brief: "Overrides a legitimate safety challenge.",
      detailed: "Being the prescriber doesn't make the dose right. Insisting without checking undermines a safety barrier and could harm the patient." },
    { text: "Give the gentamicin yourself.",
      brief: "Bypasses the safety concern without resolving it.",
      detailed: "This avoids the disagreement but leaves the possible error unaddressed." },
    { text: "Ask another nurse to give the dose instead.",
      brief: "Goes around the challenge rather than checking it.",
      detailed: "This avoids Kate's concern rather than resolving it, and may put another nurse in a difficult position." },
    { text: "Report Kate to the nurse in charge for refusing to give a drug.",
      brief: "She was right to raise her concern.",
      detailed: "A nurse who questions a dose is doing her job. Reporting her would discourage the challenge that keeps patients safe." },
    { text: "Change to a different antibiotic to avoid the disagreement.",
      brief: "Changes treatment for the wrong reason.",
      detailed: "The choice of antibiotic should depend on the patient's needs, not on avoiding a conversation." }
  ],
  explanation: {
    issue: "This tests how you respond when a colleague challenges your prescription, keeping the focus on patient safety.",
    keyDetails: "The concern is specific and relevant. Gentamicin dosing depends on kidney function. You are busy, but the patient needs treatment promptly.",
    reasoning: "{k1} listens, {k2} checks the dose together, and {k3} brings in an independent expert if needed. The distractors override ({d1}), bypass the concern ({d2}, {d3}), penalise the challenge ({d4}), or change treatment for the wrong reason ({d5}).",
    competing: "{d2} might seem efficient when you are busy, but it skips the check that would show whether the dose is safe."
  },
  refs: [
    { ref: "prescribing", note: "Responding to queries about prescriptions." },
    { ref: "nmccode", note: "Nurses' responsibility to question prescriptions they believe are unsafe." }
  ],
  tags: ["prescribing", "teamwork", "emergency department", "gentamicin"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-299", pool, letters: "DBCA", format: "ranking", difficulty: "hard",
  title: "Laughter in the staff room", setting: "Non-clinical (teaching, audit, social)", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Respect for patients", "Challenging colleagues", "Professionalism"],
  stem:
    "You are an F2 doctor on a lunch break in the hospital staff room. A registrar and a consultant from your team are laughing about the appearance of a patient with severe facial burns whom you all saw on the ward round.\n\n" +
    "A few other staff are in the room, and the door to the corridor is open.",
  options: [
    { text: "Say calmly that the comments don't seem fair to him.",
      brief: "A brief, calm challenge in the moment shows respect for the patient.",
      detailed: "Comments like these are disrespectful, and could be overheard through the open door. A calm, brief remark addresses it at once without being confrontational. It ranks first, although it is hard to do with seniors." },
    { text: "Speak to the registrar privately later about the comments.",
      brief: "Less confrontational, but delays addressing it.",
      detailed: "A private conversation may feel easier and can still be effective. It ranks second because it doesn't stop the comments now, when they could be overheard." },
    { text: "Raise it with your educational supervisor.",
      brief: "Gets support, though it doesn't address the moment directly.",
      detailed: "Your supervisor can help you decide what to do about seniors' behaviour. It ranks third because it doesn't challenge the comments or address them with the people involved." },
    { text: "Laugh along, so as not to stand out in front of seniors.",
      brief: "Joining in endorses disrespectful behaviour.",
      detailed: "Laughing along adds to the disrespect and makes it harder to challenge later. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you challenge disrespectful comments about a patient, even when they come from seniors.",
    keyDetails: "The comments are about a patient's appearance. The speakers are senior to you. Others could overhear.",
    reasoning: "{1} challenges calmly in the moment, {2} addresses it privately, and {3} seeks support. {4} endorses the behaviour.",
    competing: "Some would prefer a private word with the registrar, as it is easier with seniors. The key favours a calm comment now because the remarks could be overheard by others."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients with dignity, including when they aren't present." }
  ],
  tags: ["dignity", "professionalism", "seniors", "staff behaviour"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-300", pool, letters: "ABG", format: "multiple_choice", difficulty: "moderate",
  title: "Would it have made a difference?", setting: "General medical ward", attribute: P,
  topic: "Honesty with patients and colleagues",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Honesty", "Candour", "Communicating uncertainty"],
  stem:
    "You are an F2 doctor on a general medical ward. Mr Dixon, 66, waited seven weeks for a CT scan that was meant to happen within two weeks. The scan has now shown lung cancer that has spread to his adrenal gland.\n\n" +
    "He asks you, \"Would it have been caught earlier if I'd had the scan on time? Would that have made a difference?\"",
  options: [
    // keyed
    { text: "Tell him honestly that you don't know, and it's a fair question.",
      brief: "Honest about uncertainty, without dismissing his concern.",
      detailed: "It isn't known whether the delay changed his outcome. Saying so honestly, and acknowledging that his question is reasonable, respects him and his right to answers." },
    { text: "Apologise that his scan was delayed.",
      brief: "An apology for the delay is right, whatever its effect.",
      detailed: "The delay was a failure of the service. Apologising doesn't admit legal liability, and it acknowledges that he was let down." },
    { text: "Explain the delay will be reviewed, and how to raise concerns.",
      brief: "He should know his question will be taken seriously.",
      detailed: "A delay like this should be reviewed through the trust's processes. Telling him it will be looked into, and how to raise concerns, shows openness." },
    // distractors
    { text: "Reassure him that the delay is unlikely to have made a difference.",
      brief: "You don't know that, so this may be false reassurance.",
      detailed: "This might be true, but you can't know it. Saying it may later prove misleading." },
    { text: "Tell him the radiology department is responsible for the delay.",
      brief: "Blaming a department isn't helpful.",
      detailed: "He deserves an explanation, but attributing blame without the facts doesn't help him and undermines the team." },
    { text: "Say you can't comment on the delay.",
      brief: "Evasive, and leaves him without an answer.",
      detailed: "You may not know the full picture, but refusing to discuss it can feel like a cover-up." },
    { text: "Suggest he contacts a solicitor.",
      brief: "Unhelpful and premature at this stage.",
      detailed: "He is entitled to seek legal advice, but suggesting it now, before the delay has been reviewed, doesn't help him with his question." },
    { text: "Ask the consultant to answer his questions at the next ward round.",
      brief: "Senior involvement helps, but he has asked you now.",
      detailed: "The consultant should discuss his diagnosis and the delay, but deferring entirely leaves him without any answer today." }
  ],
  explanation: {
    issue: "This tests whether you respond honestly and openly when a patient asks if a delay in his care affected his outcome.",
    keyDetails: "The delay was clear and significant. Its effect is unknown. He has asked you directly.",
    reasoning: "{k1} is honest about the uncertainty, {k2} apologises for the delay, and {k3} explains how it will be reviewed. The distractors give false reassurance ({d1}), blame ({d2}), evade ({d3}, {d5}), or jump to litigation ({d4}).",
    competing: "{d5} is reasonable to add, as the consultant should discuss it. But it doesn't replace an honest answer now."
  },
  refs: [
    { ref: "candour", note: "Apologising and being open when something has gone wrong." },
    { ref: "gmp", note: "Domain 4, being honest with patients." }
  ],
  tags: ["candour", "delays", "cancer", "honesty"]
}
];
