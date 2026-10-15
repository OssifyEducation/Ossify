// Practice batch P06, part 2 (sjt-116 to sjt-125). Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-116", letters: "EGH", format: "multiple_choice", difficulty: "moderate",
  title: "Broken down on the way", setting: "Out-of-hours / community", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Responding to the unexpected", "Communication", "Personal safety"],
  stem:
    "You are an F2 doctor working with an out-of-hours GP service at 21:00. You are being driven to an urgent home visit to Mrs Fenn, 88, who has a high temperature and is more confused than usual. Her daughter is with her.\n\n" +
    "On a dark country road, the service car breaks down. The driver says the breakdown service will take at least an hour.",
  // keyed
  options: [
    { text: "Tell the control centre straight away, so the visit can be reassigned.",
      brief: "Another clinician may be able to reach Mrs Fenn sooner.",
      detailed: "Control can see which clinicians and cars are available, and reassign the visit so Mrs Fenn isn't left waiting. Telling them immediately gives them the most time to act." },
    { text: "Phone Mrs Fenn's daughter to ask how she is now, and give advice.",
      brief: "Her condition may have changed, and the family may need to call 999.",
      detailed: "A call lets you reassess the urgency, explain the delay, give safety advice, and tell her daughter to call 999 if her mother deteriorates or shows signs such as difficulty breathing. It keeps you involved in her care." },
    { text: "Make sure you and the driver are safe while you wait.",
      brief: "Your own safety on a dark road matters too.",
      detailed: "Breakdowns on dark roads can be dangerous. Following the driver's and breakdown service's advice, such as using hazard lights and waiting somewhere safe, protects you both." },
    // distractors
    { text: "Order a taxi to take you to the visit, and tell the control centre afterwards.",
      brief: "Getting there is well meant, but control should know first and may have a faster option.",
      detailed: "Wanting to reach her quickly is right, but acting without telling control means they can't coordinate, and a taxi may take longer than a reassigned clinician." },
    { text: "Wait for the breakdown service, then continue to the visit.",
      brief: "An hour's delay could be dangerous for an unwell, confused patient.",
      detailed: "She may have sepsis, and waiting an hour or more without telling anyone or checking on her could put her at risk." },
    { text: "Ask Mrs Fenn's daughter to drive out and collect you.",
      brief: "Takes her away from her unwell mother.",
      detailed: "This would get you there, but it leaves Mrs Fenn alone and places an unfair burden on her daughter." },
    { text: "Walk to the visit, as the address is a few miles away.",
      brief: "Slow and unsafe on a dark country road.",
      detailed: "Walking would take longer than other options and puts you at risk." },
    { text: "Advise the daughter to call NHS 111 again.",
      brief: "Sends her back into the system rather than managing the problem.",
      detailed: "The case has already been triaged as needing a visit. Asking her to call 111 again adds delay rather than solving the problem." }
  ],
  explanation: {
    issue: "This tests how you respond when an unexpected problem delays urgent care, keeping the patient safe and the service informed.",
    keyDetails: "Mrs Fenn may be seriously unwell. The delay is at least an hour. You are on a dark road.",
    reasoning: "{k1} lets the service respond, {k2} keeps track of Mrs Fenn's condition, and {k3} keeps you safe. The distractors act without coordinating ({d1}), delay ({d2}, {d5}), burden the family ({d3}), or are unsafe ({d4}).",
    competing: "{d1} is the tempting option because it shows initiative, but the control centre can usually find a quicker and safer solution."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, providing care in emergencies; Domain 3, working with colleagues to keep patients safe." },
    { ref: "sepsis", note: "Recognising possible sepsis in an older person with fever and confusion." }
  ],
  tags: ["out-of-hours", "home visits", "unexpected events", "sepsis"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-117", letters: "DABEC", format: "ranking", difficulty: "easy",
  title: "A disclosure from a colleague", setting: "Acute medical unit", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Responding to disclosure", "Speaking up"],
  stem:
    "You are an F2 doctor on the acute medical unit. Priya, a physician assistant, tells you in confidence that one of the consultants has repeatedly made sexual comments to her and touched her in a way that made her uncomfortable.\n\n" +
    "She is upset, says she's worried about her job, and isn't sure what to do.",
  options: [
    { text: "Listen, tell her you believe her, and ask what support she would like.",
      brief: "Being believed and listened to is the most important first response.",
      detailed: "People who experience sexual harassment often fear they won't be believed. Listening, taking her seriously and asking what she wants respects her and helps her decide what to do next." },
    { text: "Tell her about the ways she can raise it, such as the Freedom to Speak Up guardian or HR.",
      brief: "Knowing the routes helps her make an informed choice.",
      detailed: "There are confidential routes for raising concerns about sexual harassment, and knowing them may make it easier for her to act. It ranks second because she first needs to feel heard." },
    { text: "Offer to go with her if she decides to report it.",
      brief: "Practical support can make reporting less daunting.",
      detailed: "Having someone alongside can help her feel less alone. It ranks third because it follows her decision about what to do." },
    { text: "Report the consultant yourself straight away, without discussing it with her.",
      brief: "May be necessary in some circumstances, but she should be involved first.",
      detailed: "Sexual harassment is serious, and doctors are expected to act on it. But reporting without talking to her takes away her control at a vulnerable time. You may need to act if others are at risk, but you should discuss it with her first." },
    { text: "Suggest she avoids working with him and tries to put it behind her.",
      brief: "Leaves the behaviour unchallenged and her unsupported.",
      detailed: "This may feel like protecting her, but it puts the burden on her and lets the behaviour continue, possibly towards others." }
  ],
  explanation: {
    issue: "This tests how you respond to a colleague's disclosure of sexual harassment: supporting her, respecting her choices, and making sure the behaviour can be addressed.",
    keyDetails: "The behaviour is repeated and involves a senior colleague. She is worried about her job. She has told you in confidence.",
    reasoning: "{1} listens and supports, {2} gives her options, and {3} offers practical support. {4} takes away her control, and {5} leaves the behaviour unaddressed.",
    competing: "Some would argue that acting yourself is required by GMC guidance. You may need to, especially if others are at risk, but the key reflects that involving her first is the right approach."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting on sexual harassment and supporting colleagues who experience it." },
    { ref: "ftsu", note: "Freedom to Speak Up as a confidential route for raising concerns." }
  ],
  tags: ["sexual harassment", "colleagues", "speaking up", "support"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-118", letters: "ADF", format: "multiple_choice", difficulty: "moderate",
  title: "A study he owns shares in", setting: "General medical ward", attribute: P,
  topic: "Conflicts of interest and self-prescribing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Conflicts of interest", "Research integrity", "Informed consent"],
  stem:
    "You are an F2 doctor on a general medical ward. Your consultant, Dr Fisher, asks you to help recruit patients to a clinical study of a new device for monitoring heart rhythms.\n\n" +
    "A colleague mentions that Dr Fisher owns shares in the company that makes the device. When you look at the patient information sheet, there is no mention of this.",
  options: [
    { text: "Ask Dr Fisher whether his interest has been declared.",
      brief: "A direct question may resolve your concern.",
      detailed: "His interest may already have been declared and managed, but it doesn't appear on the information sheet. Asking him directly and respectfully is a fair first step." },
    { text: "Make sure patients you approach understand that taking part is voluntary.",
      brief: "Patients must not feel pressured, whatever the conflict.",
      detailed: "Patients may feel obliged to agree when their own doctors ask. Making clear that saying no won't affect their care helps protect them." },
    { text: "Seek advice from the trust's research and development office.",
      brief: "They can check whether the conflict has been properly managed.",
      detailed: "The research office oversees studies in the trust and can confirm whether conflicts have been declared and whether patients should be told about them." },
    // distractors
    { text: "Recruit patients as asked, as the study has been given ethics committee approval.",
      brief: "Ethics approval doesn't mean every conflict has been disclosed.",
      detailed: "Ethics approval is important, but if the committee wasn't told about his interest, approval doesn't address it." },
    { text: "Tell patients that Dr Fisher will profit from the device.",
      brief: "Undermines a colleague before the facts are known.",
      detailed: "Patients may need to know about conflicts, but telling them this, before you know whether it has been declared, could be unfair and damaging." },
    { text: "Refuse to have anything to do with the study.",
      brief: "May be needed later, but doesn't address the concern.",
      detailed: "You aren't obliged to take part in research, but simply refusing doesn't make sure patients are protected if the conflict hasn't been managed." },
    { text: "Recruit only patients you think would benefit from the device.",
      brief: "Selection should follow the study criteria, not your judgement.",
      detailed: "This seems protective, but selecting patients outside the study criteria affects the research and doesn't address the conflict." },
    { text: "Report Dr Fisher to the GMC.",
      brief: "Premature, as the facts aren't known.",
      detailed: "If an undeclared conflict was found, it might need reporting, but you first need to establish the facts locally." }
  ],
  explanation: {
    issue: "This tests how you respond to a possible undeclared conflict of interest in research, protecting patients without assuming wrongdoing.",
    keyDetails: "The information sheet doesn't mention his shares. You don't know whether the interest has been declared. Patients may feel obliged to take part.",
    reasoning: "{k1} raises it directly, {k2} protects patients from pressure, and {k3} gets independent advice. The distractors either ignore the concern ({d1}, {d4}), assume wrongdoing ({d2}, {d5}), or step back without protecting patients ({d3}).",
    competing: "{d1} is the tempting option, but ethics approval only covers what the committee was told."
  },
  refs: [
    { ref: "coi", note: "Declaring and managing financial interests, including in research." },
    { ref: "consent", note: "Making sure patients' decisions to take part are voluntary and informed." }
  ],
  tags: ["research", "conflicts of interest", "consent", "consultants"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-119", letters: "BEDCA", format: "ranking", difficulty: "hard",
  title: "Hostility on the ward", setting: "Psychiatry", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Teamwork", "Patient safety", "Escalation"],
  stem:
    "You are an F2 doctor on an adult psychiatric ward. For a week, a staff nurse and a healthcare assistant have been openly hostile to each other, arguing in front of patients and refusing to pass on information.\n\n" +
    "This morning, a patient's observations weren't done on time because each thought the other was responsible.",
  options: [
    { text: "Make sure the patient's observations are done now.",
      brief: "The immediate risk to the patient needs addressing.",
      detailed: "Checking the patient is safe, and making sure it is clear who is responsible for her observations today, deals with the immediate risk, which comes first." },
    { text: "Raise the conflict, and the missed observations, with the ward manager.",
      brief: "The ward manager can address the conflict and the risk to patients.",
      detailed: "The conflict is now affecting patient care. The ward manager is responsible for the nursing team and is best placed to deal with it, and needs to know about the missed observations. It ranks second only because the patient's safety needs checking first." },
    { text: "Speak to each of them separately to try to understand the problem.",
      brief: "Well meant, but mediating a nursing conflict isn't your role.",
      detailed: "Listening can help, and you may hear useful things. But you aren't their manager, and trying to resolve it yourself may complicate things. It ranks third because it doesn't involve the people who can act." },
    { text: "Stay out of it, as it's a matter for the nursing team.",
      brief: "Ignores a problem that's now affecting patients.",
      detailed: "Staff conflicts are usually for their managers, but when patient care is affected, you have a responsibility to raise it." },
    { text: "Tell them in front of the team that their behaviour is unprofessional.",
      brief: "Public criticism is likely to make things worse.",
      detailed: "Their behaviour may be unprofessional, but a public reprimand from a junior doctor is likely to escalate the conflict." }
  ],
  explanation: {
    issue: "This tests how you respond to conflict between colleagues once it starts to affect patient care.",
    keyDetails: "The conflict is happening in front of patients. Observations were missed. You aren't their manager.",
    reasoning: "{1} deals with the immediate risk, {2} brings in the person who can resolve the conflict, and {3} is well meant but outside your role. {4} ignores it, and {5} escalates it.",
    competing: "This is hard because {1} and {2} would happen close together. The key puts the patient first; the ward manager needs to know today so it doesn't happen again. Speaking to each colleague yourself is well meant but is the ward manager's role."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting when team problems affect patient safety." }
  ],
  tags: ["team conflict", "nursing", "patient safety", "psychiatry"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-120", letters: "AGH", format: "multiple_choice", difficulty: "moderate",
  title: "Photos for teaching", setting: "Intensive care", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Consent for recordings", "Confidentiality", "Supporting students"],
  stem:
    "You are an F2 doctor in intensive care. You notice a final-year medical student taking photographs on her personal phone of an unusual skin rash on Mr Tait, 52, who is sedated and ventilated.\n\n" +
    "When you ask, she says they are \"just for teaching\" and that she won't show his face.",
  options: [
    { text: "Ask her to stop, and to delete the photos while you watch.",
      brief: "Photos taken without consent, on a personal device, shouldn't be kept.",
      detailed: "Mr Tait can't consent, and personal phones aren't secure. Stopping her and making sure the photos are deleted, including from any cloud backup, protects his privacy." },
    { text: "Explain why consent and secure devices are needed for clinical photos.",
      brief: "Helps her understand, so she doesn't repeat it.",
      detailed: "She may not know the rules. Explaining that recordings need consent, or another proper basis, and must be made on approved devices, is a learning opportunity." },
    { text: "Let the consultant know, so they can discuss it with her supervisor.",
      brief: "The student's supervisors should know, and the trust may need to act.",
      detailed: "A breach involving a patient's images should be known to the consultant, who can involve her clinical supervisor and decide whether it needs reporting." },
    // distractors
    { text: "Let her keep the photos, as his face isn't shown.",
      brief: "Images can still be identifiable, and consent is still needed.",
      detailed: "Leaving out the face reduces the risk of identification, but doesn't remove it, and consent is still needed." },
    { text: "Ask her to send the photos to you, so you can store them securely.",
      brief: "Moves the problem to your phone.",
      detailed: "This doesn't address the lack of consent, and your personal phone is no more appropriate." },
    { text: "Report her to the medical school straight away.",
      brief: "Disproportionate before speaking to her and her supervisor.",
      detailed: "The medical school may need to be involved, but a conversation and involving her supervisor come first." },
    { text: "Tell Mr Tait's family what happened.",
      brief: "May be needed later, but not before the team has decided how to handle it.",
      detailed: "Being open with families matters, but decisions about telling them should be made by the consultant." },
    { text: "Leave it, as she is a student and is learning.",
      brief: "Leaves a patient's privacy unprotected.",
      detailed: "She is learning, which is why she should be told, not ignored." }
  ],
  explanation: {
    issue: "This tests how you protect a patient who can't consent from inappropriate recording, while supporting a student's learning.",
    keyDetails: "The patient is sedated and can't consent. The photos are on a personal phone. The student's intentions seem good.",
    reasoning: "{k1} protects his privacy now, {k2} helps her learn, and {k3} involves the consultant. The distractors leave the photos in place ({d1}, {d2}, {d5}), or act disproportionately or outside your role ({d3}, {d4}).",
    competing: "{d1} is the tempting option, but images without a face can still identify a patient, and consent is still required."
  },
  refs: [
    { ref: "confidentiality", note: "Protecting patients' information, including images." },
    { ref: "consent", note: "Consent for recordings, and patients who lack capacity." }
  ],
  tags: ["photographs", "consent", "students", "intensive care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-121", letters: "DABCE", format: "ranking", difficulty: "moderate",
  title: "Always the evening jobs", setting: "General medical ward", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Challenging unfair treatment", "Professional communication", "Seeking advice"],
  stem:
    "You are an F2 doctor on a general medical ward, and you are Black. For the past month your registrar has given you nearly all the late jobs at the end of the day, while your white F2 colleague usually leaves on time.\n\n" +
    "You are working late most days, and you have started to wonder whether race is a factor.",
  options: [
    { text: "Raise the uneven allocation with the registrar, calmly and factually.",
      brief: "A factual conversation may resolve it, or show whether it's deliberate.",
      detailed: "The registrar may not have noticed the pattern. Raising it calmly, with examples, gives them the chance to explain or change it, without making an accusation you can't yet support." },
    { text: "Keep a factual record of how jobs are allocated.",
      brief: "A record helps you see whether the pattern is real and supports any later concern.",
      detailed: "Notes of dates and tasks help you and others judge whether the allocation is unfair. It ranks second because it doesn't change anything on its own." },
    { text: "Seek advice from your educational supervisor.",
      brief: "Your supervisor can advise and support you.",
      detailed: "Your supervisor can help you think it through and, if needed, raise it. It ranks third because a direct conversation is the proportionate first step." },
    { text: "Ask your F2 colleague to take on some of your evening jobs informally.",
      brief: "Shares the work, but leaves the allocation problem unaddressed.",
      detailed: "This may ease your workload, but it puts the burden on your colleague and doesn't deal with the cause." },
    { text: "Accuse the registrar of racism in front of the team.",
      brief: "A public accusation, before the facts are clear, is likely to escalate things.",
      detailed: "Racial discrimination is serious and must be addressed, but a public accusation without evidence is unlikely to resolve it and could harm you." }
  ],
  explanation: {
    issue: "This tests how you respond to possibly discriminatory treatment: constructively, factually, and through proper routes.",
    keyDetails: "The pattern has lasted a month. You don't know the reason. You are working late most days.",
    reasoning: "{1} addresses it directly, {2} builds a factual picture, and {3} seeks support. {4} avoids the problem, and {5} escalates it inappropriately.",
    competing: "Some would seek advice before speaking to the registrar, especially if they feel unsafe raising it. That's reasonable; the key starts with a calm conversation as the proportionate first step."
  },
  refs: [
    { ref: "equality", note: "Protection from discrimination, including race, at work." },
    { ref: "gmp", note: "Domain 3, challenging discrimination and supporting a fair working environment." }
  ],
  tags: ["discrimination", "race", "workload", "registrars"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-122", letters: "CDE", format: "multiple_choice", difficulty: "easy",
  title: "No more oxycodone?", setting: "General practice", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication", "Knowledge, skills and development"],
  competencies: ["Safe prescribing", "Managing conflict", "Shared decision-making"],
  stem:
    "You are an F2 doctor in a GP practice. Mr Dyer, 39, has just registered with the practice. His previous GP prescribed high-dose oxycodone for back pain for two years, and he asks for a repeat prescription.\n\n" +
    "When you explain that you aren't comfortable continuing it without a review, he becomes angry, saying he'll be in agony and that you're treating him like an addict.",
  options: [
    { text: "Acknowledge his frustration, and explain your reasons calmly.",
      brief: "Being heard reduces anger, and he deserves an explanation.",
      detailed: "He is worried about being left in pain. Acknowledging that, and explaining that you want to make sure his treatment is safe, rather than suggesting he is misusing it, may help him engage." },
    { text: "Offer a review of his pain, and a plan that doesn't leave him without medication.",
      brief: "A safe plan avoids abrupt withdrawal and addresses his pain.",
      detailed: "Stopping high-dose opioids suddenly can cause withdrawal and pain. A review, and a plan that may include a bridging prescription and gradual changes, is safer than a refusal." },
    { text: "Request his records from his previous practice.",
      brief: "His history helps you make a safe decision.",
      detailed: "His records will show the reasons for the prescription, previous reviews and any concerns, which help you plan his care." },
    // distractors
    { text: "Issue the repeat prescription to avoid a confrontation.",
      brief: "Prescribing to avoid conflict isn't safe practice.",
      detailed: "This would calm things down, but you'd be prescribing a high-risk drug without the review you think is needed." },
    { text: "Tell him he'll need to go back to his previous GP for this medication.",
      brief: "He is now your practice's patient.",
      detailed: "He has registered with your practice, so his care is now your responsibility." },
    { text: "Ask reception to call security if he doesn't calm down.",
      brief: "Escalates a situation that can usually be de-escalated.",
      detailed: "Security may be needed if he becomes threatening, but he is angry rather than dangerous." },
    { text: "Tell him that long-term opioid use usually indicates addiction.",
      brief: "Inaccurate and stigmatising.",
      detailed: "Long-term opioid use can lead to dependence, but this statement is stigmatising and likely to make things worse." },
    { text: "Give him one more month's supply and ask him to book a review when he's ready.",
      brief: "Defers the review without a plan.",
      detailed: "A bridging prescription may be part of a plan, but without a booked review it simply postpones the problem." }
  ],
  explanation: {
    issue: "This tests how you manage a patient's anger about a prescribing decision, balancing safety with compassion.",
    keyDetails: "He has been on high-dose oxycodone for two years. He is new to the practice. He is worried about pain and feels judged.",
    reasoning: "{k1} de-escalates and explains, {k2} offers a safe plan, and {k3} gathers his history. The distractors prescribe or defer without review ({d1}, {d5}), refuse responsibility ({d2}), escalate ({d3}), or stigmatise ({d4}).",
    competing: "{d5} is the tempting option: some bridging may be appropriate, but only as part of a planned review."
  },
  refs: [
    { ref: "prescribing", note: "Reviewing and prescribing controlled drugs safely, including when taking over a patient's care." }
  ],
  tags: ["opioids", "prescribing", "angry patients", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-123", letters: "ACBDE", format: "ranking", difficulty: "moderate",
  title: "Would another hospital have found it?", setting: "Paediatrics", attribute: P,
  topic: "Honesty with patients and colleagues",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Honesty", "Responding to concerns", "Communication"],
  stem:
    "You are an F2 doctor in paediatrics. Ellie, 6, has just been diagnosed with leukaemia. Her parents say she was seen twice in your hospital's Emergency Department over the past month with tiredness and bruising, and sent home.\n\n" +
    "They ask you whether she would have been diagnosed sooner at another hospital.",
  options: [
    { text: "Say honestly that you don't know, and offer a talk with the consultant.",
      brief: "Honest about what you know, and makes sure they get a proper answer.",
      detailed: "You can't know whether the earlier visits were managed appropriately. Acknowledging their question, being honest that you don't know, and arranging for the consultant to discuss it with them is respectful and honest." },
    { text: "Raise their concern with the consultant, so the earlier visits can be reviewed.",
      brief: "If something was missed, the team needs to know.",
      detailed: "Their question may highlight a missed opportunity. Raising it means the earlier visits can be reviewed properly, and the family can be told the outcome." },
    { text: "Tell them how they can raise their concerns formally, if they wish.",
      brief: "Useful information, though they first need a response from the team.",
      detailed: "Knowing about the complaints process or PALS may help them. It ranks third because a conversation with the consultant should come first." },
    { text: "Reassure them that the diagnosis wouldn't have been made any sooner.",
      brief: "False reassurance on a question you can't answer.",
      detailed: "You may want to ease their guilt or worry, but you don't know this, and it may not be true." },
    { text: "Tell them that the other hospital has a better paediatric emergency service.",
      brief: "Speculative criticism that helps no one.",
      detailed: "This invites them to think their daughter's care was inadequate, without evidence, and undermines the team." }
  ],
  explanation: {
    issue: "This tests how you respond honestly to a family's concern that a diagnosis was delayed.",
    keyDetails: "Ellie was seen twice before diagnosis. You don't know whether anything was missed. The parents are asking you directly.",
    reasoning: "{1} is honest and arranges a proper discussion, {2} makes sure the concern is reviewed, and {3} gives them information. {4} offers false reassurance, and {5} speculates.",
    competing: "Some would raise it with the consultant before responding. You would do both; the key puts responding to the parents first because they are asking you now."
  },
  refs: [
    { ref: "candour", note: "Being open with families when something may have gone wrong." },
    { ref: "gmp", note: "Domain 4, honesty with patients and those close to them." }
  ],
  tags: ["candour", "delayed diagnosis", "paediatrics", "families"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-124", letters: "ABF", format: "multiple_choice", difficulty: "hard",
  title: "Discharged to nowhere", setting: "General medical ward", attribute: P,
  topic: "Equality and fair treatment of patients",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Safe discharge", "Advocacy", "Fair treatment"],
  stem:
    "You are an F2 doctor on a general medical ward at 21:30. Mr Rowe, 58, has been treated for cellulitis and is medically fit for discharge. He is homeless.\n\n" +
    "The bed manager asks you to discharge him now, as the bed is needed. Mr Rowe says he has nowhere to go tonight, and it is raining.",
  options: [
    { text: "Ask the nurse in charge and bed manager whether he can stay tonight.",
      brief: "A night-time discharge with nowhere to go is unsafe.",
      detailed: "Discharging him into the rain at night, with nowhere to go, risks his health and recovery. Raising this with the nurse in charge and bed manager may allow a safer morning discharge, or another solution." },
    { text: "With his consent, refer him to the local housing authority.",
      brief: "Hospitals have a duty to refer people who are homeless, with their consent.",
      detailed: "Hospitals providing inpatient care in England must refer people who are homeless or at risk of homelessness to a local housing authority, with their consent. This starts the process of finding him accommodation." },
    { text: "Make sure he has his medication and a clear plan for follow-up.",
      brief: "Completing his treatment safely matters, whatever the discharge time.",
      detailed: "He may need to finish antibiotics and have the infection checked. Making sure he has what he needs, and knows where to go if it worsens, reduces the risk of readmission." },
    // distractors
    { text: "Discharge him now with a list of local night shelters and their phone numbers.",
      brief: "Information alone may not secure him a bed tonight.",
      detailed: "This seems practical, but shelters may be full at this time, and it doesn't address whether a night-time discharge is safe." },
    { text: "Discharge him now, as he is medically fit and the bed is needed.",
      brief: "Medical fitness isn't the only consideration for a safe discharge.",
      detailed: "Pressure on beds is real, but a safe discharge considers where the patient is going, not just whether he is medically fit." },
    { text: "Suggest he waits in the Emergency Department until the morning.",
      brief: "Moves the problem to an already busy department.",
      detailed: "This may seem kind, but the ED isn't a place to stay, and it doesn't solve his housing problem." },
    { text: "Give him money for a hostel from your own pocket.",
      brief: "Kind, but blurs professional boundaries and doesn't address the system.",
      detailed: "The impulse is generous, but giving money personally isn't appropriate and doesn't address his housing needs." },
    { text: "Ask security to escort him off the ward if he refuses to leave.",
      brief: "Escalates unnecessarily and treats him unfairly.",
      detailed: "He hasn't been aggressive. Involving security would be heavy-handed and unfair." }
  ],
  explanation: {
    issue: "This tests whether you advocate for a safe, fair discharge for a homeless patient when there is pressure on beds.",
    keyDetails: "He is medically fit but has nowhere to go. It is late and raining. Hospitals have a duty to refer homeless patients to the housing authority, with consent.",
    reasoning: "{k1} raises the safety of discharging him tonight, {k2} uses the duty to refer, and {k3} makes sure his treatment continues. The distractors discharge him unsafely ({d1}, {d2}), move the problem ({d3}), blur boundaries ({d4}), or escalate unfairly ({d5}).",
    competing: "{d1} is the hard distractor: information about shelters is useful, but on its own it doesn't make a night-time discharge safe."
  },
  refs: [
    { ref: "dutytorefer", note: "Hospitals' duty to refer people who are homeless to the local housing authority, with consent." },
    { ref: "gmp", note: "Domain 2, treating patients fairly and advocating for their needs." }
  ],
  tags: ["homelessness", "discharge", "advocacy", "bed pressures"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-125", letters: "CDBA", format: "ranking", difficulty: "moderate",
  title: "A missed scaphoid fracture", setting: "Emergency department", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Candour", "Patient safety", "Owning mistakes"],
  stem:
    "You are an F2 doctor in the Emergency Department. Yesterday you saw Ms Price, 24, who had fallen onto her outstretched hand. You looked at her X-ray, thought it was normal, and discharged her with advice.\n\n" +
    "Today the radiologist's report says there is a scaphoid fracture.",
  options: [
    { text: "Contact Ms Price, apologise, and arrange for her to come back.",
      brief: "She needs to know and to be treated promptly; an apology is part of being open.",
      detailed: "A missed scaphoid fracture needs immobilisation and follow-up to reduce the risk of complications. Contacting her promptly, explaining what happened and apologising is honest and puts her care right." },
    { text: "Let the ED consultant know what happened.",
      brief: "Your senior should know, and departments have processes for this.",
      detailed: "Many EDs have a process for acting on radiology reports and recalling patients. Involving your consultant makes sure it's handled properly. It ranks second because the most important thing is that Ms Price is treated." },
    { text: "Report it through the incident reporting system.",
      brief: "Supports learning, though less urgent than her treatment.",
      detailed: "Reporting helps the department learn. It ranks third because putting things right for her comes first." },
    { text: "Wait to see whether she comes back to the department with persistent wrist pain.",
      brief: "Leaves her untreated and unaware of the fracture.",
      detailed: "She may not return, and delays in treating scaphoid fractures can lead to lasting problems." }
  ],
  explanation: {
    issue: "This tests whether you act promptly and openly when you discover your own error.",
    keyDetails: "The fracture was missed. She needs treatment. You saw her yourself.",
    reasoning: "{1} is open and puts her care right, {2} involves your senior and the department's process, and {3} supports learning. {4} leaves her untreated.",
    competing: "Some would discuss it with the consultant first, especially if the department has a recall process. Either is reasonable; the key puts contacting her first because her treatment is time-sensitive."
  },
  refs: [
    { ref: "candour", note: "Telling patients when something has gone wrong, apologising, and putting it right." }
  ],
  tags: ["candour", "missed fracture", "emergency department", "errors"]
}
];
