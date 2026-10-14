// Practice batch P09, part 2 (sjt-176 to sjt-185). Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-176", letters: "AEF", format: "multiple_choice", difficulty: "moderate",
  title: "The lights go out", setting: "Intensive care", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Colleagues, culture and safety", "Knowledge, skills and development"],
  competencies: ["Emergency response", "Patient safety", "Teamwork"],
  stem:
    "You are an F2 doctor on a night shift in intensive care. There is a power cut, and for about 20 seconds several ventilators alarm and the lights go out, before the backup generator starts.\n\n" +
    "Six patients on the unit are ventilated. The nurses are moving quickly between bed spaces.",
  options: [
    // keyed
    { text: "Check that each ventilated patient is being ventilated effectively.",
      brief: "Patients' safety comes first.",
      detailed: "Ventilators may have restarted with different settings, or not at all. Working with the nurses to check each patient's ventilation, saturations and settings, and bagging by hand if needed, deals with the immediate risk." },
    { text: "Call the ICU registrar or consultant.",
      brief: "A senior needs to know and may need to attend.",
      detailed: "A power failure affecting ventilated patients is a serious event. A senior can help assess patients and coordinate the response." },
    { text: "Report the event through the incident reporting system once patients are safe.",
      brief: "The trust needs to understand what happened.",
      detailed: "The failure and the delay before the generator started need investigating. Reporting it once patients are safe supports that." },
    // distractors
    { text: "Phone the estates team to find out what happened before checking patients.",
      brief: "Patients come before the cause.",
      detailed: "Estates need to know, and someone should contact them, but checking patients comes first." },
    { text: "Assume the ventilators are working, as the alarms have stopped.",
      brief: "Silence doesn't confirm effective ventilation.",
      detailed: "Alarms may have reset rather than resolved. You need to check each patient." },
    { text: "Leave the checks to the nurses, as they manage the ventilators.",
      brief: "This is a team emergency, and your help is needed.",
      detailed: "Nurses are skilled with ventilators, but six patients need checking quickly, and doctors should help." },
    { text: "Reset the alarms on each ventilator so the unit is quieter.",
      brief: "Alarms may be warning of a real problem.",
      detailed: "Silencing alarms without checking why they are sounding could hide a dangerous problem." },
    { text: "Start moving the most unstable patient to another unit.",
      brief: "Moving a ventilated patient is risky and not indicated.",
      detailed: "The backup power has started, so moving a patient would add risk without benefit." }
  ],
  explanation: {
    issue: "This tests how you respond to an equipment failure that may affect critically ill patients, putting their safety first.",
    keyDetails: "Ventilators alarmed and power was lost briefly. Backup power is now on. Six patients are ventilated.",
    reasoning: "{k1} checks patients, {k2} calls a senior, and {k3} reports the event. The distractors prioritise the cause ({d1}), assume safety ({d2}, {d4}), leave it to others ({d3}), or add risk ({d5}).",
    competing: "{d1} is the tempting option, as estates need to know, but patients come first."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, responding in emergencies; Domain 3, reporting safety incidents." }
  ],
  tags: ["equipment failure", "ventilators", "intensive care", "emergencies"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-177", letters: "BCAED", format: "ranking", difficulty: "easy",
  title: "Extra shifts to pay the bills", setting: "Elderly care ward", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Wellbeing", "Signposting"],
  stem:
    "You are an F2 doctor on an elderly care ward. Grace, a healthcare assistant, looks exhausted. When you ask if she's all right, she tells you she has been working extra bank shifts most days for a month to pay off debts, and is barely sleeping.\n\n" +
    "She asks you not to tell anyone.",
  options: [
    { text: "Listen, and ask how she is coping.",
      brief: "She has confided in you and needs to feel heard.",
      detailed: "Financial pressure and exhaustion are hard to talk about. Listening, without judgement, shows care and helps you understand how she is." },
    { text: "Encourage her to talk to her manager or occupational health about her hours.",
      brief: "Her hours may be affecting her health and her work.",
      detailed: "Working most days for a month while barely sleeping may affect her health and patient care. Her manager or occupational health can help, and she can choose to speak to them." },
    { text: "Tell her about the trust's financial wellbeing and staff support services.",
      brief: "Practical support can help her address the cause.",
      detailed: "Many trusts offer financial advice and hardship support. Knowing about them may help her reduce her hours. It ranks third because it's less immediate than supporting her and her health." },
    { text: "Offer to lend her some money.",
      brief: "Kind, but blurs professional boundaries.",
      detailed: "This is generous, but lending money to a colleague can create difficulties, and doesn't address her debts or exhaustion." },
    { text: "Tell her that her finances are none of your business.",
      brief: "Dismisses her distress.",
      detailed: "You asked, and she confided in you. This is dismissive, and leaves her unsupported and possibly unsafe at work." }
  ],
  explanation: {
    issue: "This tests how you support a colleague in financial difficulty whose exhaustion may affect her health and work.",
    keyDetails: "She is exhausted and barely sleeping. The cause is financial. She asked you not to tell anyone.",
    reasoning: "{1} listens, {2} encourages her to get help with her hours, and {3} offers practical support. {4} blurs boundaries, and {5} dismisses her.",
    competing: "If her exhaustion were clearly putting patients at risk, you might need to raise it even without her agreement. At this stage, encouraging her to seek help is the right approach."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues and acting when patient safety may be affected." }
  ],
  tags: ["colleague wellbeing", "fatigue", "financial stress", "healthcare assistants"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-178", letters: "ACF", format: "multiple_choice", difficulty: "moderate",
  title: "Incomplete prescriptions", setting: "Out-of-hours / community", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Patient safety", "Supporting colleagues", "Raising concerns"],
  stem:
    "You are an F2 doctor in an out-of-hours GP service. The district nurses tell you that prescriptions for end-of-life medicines written by Dr Hall, another out-of-hours doctor, are often missing doses or frequencies, so they can't give the drugs.\n\n" +
    "They are frustrated and say they have stopped asking Dr Hall to correct them because he is rude to them. Dr Hall is on shift tonight, and two of his prescriptions from this evening are incomplete.",
  options: [
    // keyed
    { text: "Make sure tonight's incomplete prescriptions are corrected.",
      brief: "Patients at the end of life may be left without symptom control.",
      detailed: "Patients may be in pain or distress tonight. Making sure their prescriptions are completed, by Dr Hall or another doctor, comes first." },
    { text: "Speak to Dr Hall privately about the nurses' concerns.",
      brief: "He may not realise the impact.",
      detailed: "He may not know how often this happens, or the effect on patients. A private, factual conversation gives him the chance to put it right." },
    { text: "Raise the pattern with the service's clinical lead.",
      brief: "A pattern affecting patients, and staff relationships, needs addressing.",
      detailed: "Repeated incomplete prescriptions, and nurses avoiding a colleague, are risks to patients. The clinical lead can address both." },
    // distractors
    { text: "Correct Dr Hall's prescriptions yourself whenever the nurses ask.",
      brief: "Helps tonight, but hides the problem.",
      detailed: "This helps patients in the short term, but doesn't address the pattern or Dr Hall's behaviour." },
    { text: "Tell the nurses to make a formal complaint about Dr Hall.",
      brief: "Leaves the problem with them.",
      detailed: "They can complain, but you have heard about a risk to patients, and can act yourself." },
    { text: "Tell the nurses it isn't your place to get involved.",
      brief: "Ignores a risk to patients.",
      detailed: "It may feel awkward, but patients at the end of life are affected." },
    { text: "Mention the nurses' concerns to the other doctors on shift.",
      brief: "Spreads the concern without addressing it.",
      detailed: "Others may have noticed, but discussing it informally doesn't fix it and may be unfair to Dr Hall." },
    { text: "Report Dr Hall to the GMC.",
      brief: "Disproportionate before local routes are tried.",
      detailed: "This may be needed if it continues, but local routes come first." }
  ],
  explanation: {
    issue: "This tests how you respond to a colleague's repeated errors and poor relationships with other professionals, protecting patients first.",
    keyDetails: "The prescriptions are for end-of-life medicines. The problem is repeated. The nurses have stopped asking him.",
    reasoning: "{k1} protects patients tonight, {k2} speaks to Dr Hall, and {k3} addresses the pattern. The distractors hide it ({d1}), pass it back ({d2}), ignore it ({d3}), spread it ({d4}), or escalate disproportionately ({d5}).",
    competing: "{d1} is the tempting option because it helps patients, but it hides a pattern that needs fixing."
  },
  refs: [
    { ref: "prescribing", note: "Writing complete and accurate prescriptions." },
    { ref: "gmp", note: "Domain 3, working with colleagues and acting on risks to patients." }
  ],
  tags: ["prescribing", "district nurses", "end of life", "team conflict"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-179", letters: "CBAED", format: "ranking", difficulty: "hard",
  title: "Can't get on the couch", setting: "General practice", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Reasonable adjustments", "Dignity", "Advocacy"],
  stem:
    "You are an F2 doctor in a GP practice, sitting in with a GP partner. Mr Owen, 50, uses a wheelchair and has come in with abdominal pain. He can't transfer onto the examination couch without help.\n\n" +
    "The GP suggests skipping the abdominal examination and \"seeing how it goes\", then asks what you think.",
  options: [
    { text: "Ask Mr Owen what would help, and look for a height-adjustable couch.",
      brief: "He knows what works for him, and equipment may be available.",
      detailed: "Mr Owen may know how he is usually examined, and the practice may have equipment that makes it possible. This is a reasonable adjustment that allows proper care." },
    { text: "Examine his abdomen as fully as possible in his wheelchair.",
      brief: "A partial examination is better than none.",
      detailed: "Some examination is possible in a wheelchair, and may identify a problem needing urgent attention. It ranks second because a full examination should be attempted first." },
    { text: "Raise with the GP afterwards the need for reasonable adjustments for disabled patients.",
      brief: "Helps make sure future patients get equal care.",
      detailed: "The GP may not have thought about the options. Raising it respectfully helps the practice improve. It ranks third because Mr Owen's care comes first." },
    { text: "Skip the examination, but arrange an ultrasound scan instead.",
      brief: "A scan doesn't replace examination.",
      detailed: "A scan may be useful, but skipping the examination means potentially important signs are missed, and the decision is based on his disability." },
    { text: "Skip the examination as the GP suggests.",
      brief: "Denies him an examination because of his disability.",
      detailed: "This means he receives a lower standard of care because he uses a wheelchair. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you make reasonable adjustments so a disabled patient receives the same standard of care.",
    keyDetails: "He has abdominal pain and needs examining. He can't transfer without help. The GP suggests skipping it.",
    reasoning: "{1} looks for adjustments, {2} examines as far as possible, and {3} improves practice. {4} substitutes a test, and {5} denies him care.",
    competing: "This is hard because {2} is reasonable and quick. The key prefers asking him and looking for equipment first because it may allow a full examination."
  },
  refs: [
    { ref: "equality", note: "Duty to make reasonable adjustments for disabled people." },
    { ref: "gmp", note: "Domain 2, treating patients fairly." }
  ],
  tags: ["disability", "reasonable adjustments", "examination", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-180", letters: "BEG", format: "multiple_choice", difficulty: "moderate",
  title: "Memes in the group chat", setting: "Non-clinical (social)", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Colleagues, culture and safety", "Trust and professionalism"],
  competencies: ["Challenging discrimination", "Social media", "Supporting colleagues"],
  stem:
    "You are an F2 doctor. Your hospital's foundation doctors have a WhatsApp group. Several members have started sharing memes mocking the accent and English of Dr Okafor, an international medical graduate who started recently. She isn't in the group.\n\n" +
    "Others are reacting with laughing emojis.",
  options: [
    // keyed
    { text: "Post in the group that the memes aren't acceptable.",
      brief: "A clear, calm challenge may stop it.",
      detailed: "Others may feel the same but not want to be first. A calm message saying the memes are unkind and unprofessional may be enough to stop it." },
    { text: "Speak privately to the person who started the memes.",
      brief: "A direct conversation may help them reflect.",
      detailed: "They may not have thought about how it would feel to Dr Okafor. A private conversation is less defensive than a public challenge." },
    { text: "Raise it with your educational supervisor.",
      brief: "Harassment of a colleague may need addressing by others.",
      detailed: "Mocking a colleague's accent is harassment related to race or nationality. If it continues, or is widespread, it needs addressing by those responsible." },
    // distractors
    { text: "Leave the group quietly.",
      brief: "Avoids it, but leaves it unchallenged.",
      detailed: "This takes you out of it, but doesn't stop the memes or support Dr Okafor." },
    { text: "Tell Dr Okafor about the memes so she can respond.",
      brief: "Could cause her distress, and places the burden on her.",
      detailed: "She may have a right to know, but telling her without support places the burden of responding on her." },
    { text: "Share screenshots on social media to expose the behaviour.",
      brief: "Escalates publicly and could harm Dr Okafor further.",
      detailed: "This may draw attention to the problem, but could spread the memes further and humiliate her." },
    { text: "Report the members to the GMC.",
      brief: "Disproportionate before local routes.",
      detailed: "The behaviour is unprofessional, but local routes should be used first." },
    { text: "Ignore it, as it's a private chat outside work.",
      brief: "Professional standards apply to how doctors treat colleagues, including online.",
      detailed: "Private chats can still breach professional standards, especially when they target a colleague." }
  ],
  explanation: {
    issue: "This tests whether you challenge discriminatory behaviour by colleagues online, proportionately and through the right routes.",
    keyDetails: "The memes target a colleague's accent and English. She isn't in the group. Others are joining in.",
    reasoning: "{k1} challenges it, {k2} addresses it directly, and {k3} escalates appropriately. The distractors avoid it ({d1}, {d5}), burden Dr Okafor ({d2}), or escalate inappropriately ({d3}, {d4}).",
    competing: "{d2} may seem honest, but telling her without support places the burden on her."
  },
  refs: [
    { ref: "socialmedia", note: "Doctors' conduct online, including in private groups." },
    { ref: "equality", note: "Harassment related to race or nationality." }
  ],
  tags: ["discrimination", "social media", "international medical graduates", "colleagues"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-181", letters: "CDEBA", format: "ranking", difficulty: "moderate",
  title: "He answers for her", setting: "Obstetrics & gynaecology", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Safeguarding", "De-escalation", "Communication"],
  stem:
    "You are an F2 doctor in an antenatal clinic. Ms Ali, 24, is 20 weeks pregnant. Her partner answers every question for her, and she avoids eye contact.\n\n" +
    "When you explain that you'd like to see her on her own for part of the appointment, he becomes angry and says, \"There's nothing she can't say in front of me.\"",
  options: [
    { text: "Explain calmly that seeing women alone is routine.",
      brief: "A calm, routine framing may de-escalate and protect her.",
      detailed: "Seeing pregnant women alone is standard practice. Explaining that it applies to everyone may reassure him and avoids suggesting suspicion." },
    { text: "Involve the midwife and find another opportunity to see her alone.",
      brief: "Another opportunity may arise without confrontation.",
      detailed: "A midwife may be able to see her alone, for example when she gives a urine sample. This avoids escalating while making sure she has a chance to speak." },
    { text: "Document your concerns and inform the safeguarding midwife.",
      brief: "His behaviour may be a sign of abuse.",
      detailed: "Controlling behaviour can be a sign of domestic abuse. Recording your concerns and informing the safeguarding midwife helps make sure they are followed up." },
    { text: "Continue the appointment with him answering.",
      brief: "Misses the chance to check her safety.",
      detailed: "This avoids conflict, but she may not be able to speak freely, and any abuse may go unnoticed." },
    { text: "Tell him you suspect he is controlling her.",
      brief: "Accusatory and could put her at risk.",
      detailed: "Confronting him could make him angry and put her at greater risk after the appointment." }
  ],
  explanation: {
    issue: "This tests how you respond when a partner prevents a woman from speaking alone, recognising possible abuse while keeping her safe.",
    keyDetails: "He answers for her and is hostile to her being seen alone. She avoids eye contact. She is pregnant.",
    reasoning: "{1} de-escalates, {2} finds another opportunity, and {3} records and escalates. {4} misses the chance to help, and {5} puts her at risk.",
    competing: "Some would put the safeguarding referral first. The key starts by trying to see her alone, which may give her the chance to speak."
  },
  refs: [
    { ref: "confidentiality", note: "Protecting people at risk of serious harm." },
    { ref: "gmp", note: "Domain 2, protecting patients who may be vulnerable." }
  ],
  tags: ["domestic abuse", "pregnancy", "safeguarding", "controlling behaviour"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-182", letters: "DFH", format: "multiple_choice", difficulty: "easy",
  title: "An ECG and a student", setting: "Cardiology / respiratory", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Prioritisation", "Emergency care", "Supporting students"],
  stem:
    "You are an F2 doctor in cardiology. You are about to sign off a medical student's assessment, which needs to be submitted today.\n\n" +
    "A nurse asks you to look at an ECG for a patient with new chest pain, saying it may show an ST-elevation myocardial infarction.",
  options: [
    // keyed
    { text: "Look at the ECG straight away.",
      brief: "A possible STEMI needs immediate review.",
      detailed: "If the ECG shows a STEMI, the patient needs urgent treatment, and every minute matters." },
    { text: "Get the cardiology registrar to see the patient with you.",
      brief: "A possible STEMI needs senior input quickly.",
      detailed: "The registrar can confirm the ECG findings and arrange urgent treatment, such as primary angioplasty." },
    { text: "Apologise to the student and agree a time to finish the assessment today.",
      brief: "Respects the student's deadline while prioritising the patient.",
      detailed: "The student's assessment matters, and agreeing a time to finish it today makes sure they aren't disadvantaged." },
    // distractors
    { text: "Finish signing off the assessment first, as it will take five minutes.",
      brief: "Delays a potential emergency.",
      detailed: "Five minutes may seem small, but in a STEMI, delays matter." },
    { text: "Ask the student to look at the ECG while you finish the assessment.",
      brief: "A student can't assess a possible STEMI.",
      detailed: "This may be a learning opportunity later, but a qualified doctor needs to assess the ECG now." },
    { text: "Ask the nurse to repeat the ECG and call you back.",
      brief: "Delays assessment of a possible STEMI.",
      detailed: "A repeat ECG may be useful, but you need to look at the first one now." },
    { text: "Sign off the assessment without reviewing it, to save time.",
      brief: "Dishonest, and unfair to the student.",
      detailed: "This would mean signing an assessment you haven't reviewed." },
    { text: "Tell the student you can't sign the assessment today.",
      brief: "Unnecessary, as you can finish it later today.",
      detailed: "The patient comes first, but you can still help the student meet the deadline." }
  ],
  explanation: {
    issue: "This tests whether you prioritise a potential emergency while still respecting a colleague's needs.",
    keyDetails: "The ECG may show a STEMI. The assessment is due today but isn't urgent in clinical terms.",
    reasoning: "{k1} looks at the ECG, {k2} brings senior help, and {k3} respects the student's deadline. The distractors delay ({d1}, {d3}), inappropriately delegate ({d2}), or are dishonest or unnecessary ({d4}, {d5}).",
    competing: "{d5} may seem honest, but you can finish the assessment later in the day."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, prioritising patients according to clinical need." }
  ],
  tags: ["prioritisation", "STEMI", "students", "cardiology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-183", letters: "ECABD", format: "ranking", difficulty: "moderate",
  title: "Will he go home?", setting: "Elderly care ward", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communicating uncertainty", "Supporting families", "Honesty"],
  stem:
    "You are an F2 doctor on a stroke ward. Mr Hughes, 82, had a large stroke four days ago and has weakness on his right side and difficulty swallowing. He lives alone, and he has said he wants to go home. He has asked the team to keep his daughter fully informed.\n\n" +
    "His daughter asks you, tearfully, whether this means he'll never be able to go home.",
  options: [
    { text: "Ask her what she understands so far, and what worries her most.",
      brief: "Understanding her worries helps you respond to what matters to her.",
      detailed: "She may be worried about his recovery, his wishes, or caring for him. Asking first helps you answer honestly and sensitively." },
    { text: "Explain honestly that it's too early to know, and that recovery will become clearer over the coming weeks.",
      brief: "Honest about uncertainty without being falsely hopeful.",
      detailed: "Recovery after stroke varies, and four days in, it's uncertain. Being honest about this, and that the team will learn more with rehabilitation, respects her question." },
    { text: "Offer a meeting with the consultant and therapists to discuss his progress and plans.",
      brief: "A team meeting can give her a fuller picture.",
      detailed: "The therapists and consultant can explain his progress and what support might be possible. It ranks third because she needs a response now." },
    { text: "Suggest she asks the consultant at the next ward round.",
      brief: "Passes the question on without engaging.",
      detailed: "The consultant can give more detail, but simply passing it on leaves her without support now." },
    { text: "Tell her he will probably need to go into a care home.",
      brief: "Premature, and likely to cause distress.",
      detailed: "This may turn out to be true, but saying so four days after a stroke, before rehabilitation, is premature and could take away hope unnecessarily." }
  ],
  explanation: {
    issue: "This tests how you communicate uncertainty after a serious stroke, honestly and with compassion.",
    keyDetails: "It is four days after the stroke. He lives alone and wants to go home. His daughter is upset.",
    reasoning: "{1} explores her concerns, {2} is honest about uncertainty, and {3} arranges a fuller discussion. {4} passes the question on, and {5} is premature and distressing.",
    competing: "Some would explain the uncertainty first. The key starts by asking about her worries, which helps you answer what matters to her."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, communicating honestly with patients and those close to them." }
  ],
  tags: ["stroke", "uncertainty", "families", "discharge"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-184", letters: "AEH", format: "multiple_choice", difficulty: "hard",
  title: "A DNACPR form without a discussion", setting: "Emergency department", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["DNACPR decisions", "Communication with families", "Escalation"],
  stem:
    "You are an F2 doctor in the Emergency Department. Mrs Evans, 79, has been sent in from her nursing home with pneumonia. She has mild dementia and is drowsy but responds to her name.\n\n" +
    "Her DNACPR form, completed by her GP a month ago, says \"discussed with patient: no; discussed with family: no\" with no reason given. Her son, who has just arrived, says he didn't know it existed.",
  options: [
    // keyed
    { text: "Discuss the form with the ED consultant, who can review the decision.",
      brief: "A senior needs to make a decision about CPR now.",
      detailed: "A DNACPR decision without any discussion, or a reason for not discussing it, needs reviewing. The consultant can make a decision based on her current condition, with her and her son involved." },
    { text: "Explain the form to her son, and ask about her wishes.",
      brief: "He should be involved, and may know her wishes.",
      detailed: "Families should usually be involved in DNACPR decisions. Explaining the form and listening to him helps the team understand her wishes." },
    { text: "Record what has been discussed, and the current decision, clearly.",
      brief: "Clear documentation makes sure the decision is understood.",
      detailed: "Recording the discussion and the decision, whatever it is, makes sure the team knows what to do if she deteriorates." },
    // distractors
    { text: "Ignore the form, as it wasn't discussed with anyone.",
      brief: "The form should be reviewed, not ignored.",
      detailed: "The lack of discussion is a concern, but the decision may still be clinically appropriate. It should be reviewed by a senior, not simply disregarded." },
    { text: "Follow the form, as it was completed by a doctor.",
      brief: "A decision made without discussion needs reviewing.",
      detailed: "The form was completed by a doctor, but the absence of any discussion, or reason why not, means it should be reviewed." },
    { text: "Tell her son the form must be followed, as it's a clinical decision.",
      brief: "Dismisses his involvement.",
      detailed: "Doctors decide whether CPR would work, but families should be consulted. This is dismissive." },
    { text: "Report the GP who completed the form to the GMC.",
      brief: "Premature; there may be an explanation.",
      detailed: "The process may have been flawed, but this should be raised locally first." },
    { text: "Ask Mrs Evans, while she's drowsy, whether she wants to be resuscitated.",
      brief: "She may not be able to engage in this conversation now.",
      detailed: "Her wishes matter, but discussing resuscitation while she is drowsy and unwell may not give a meaningful answer." }
  ],
  explanation: {
    issue: "This tests how you deal with a DNACPR decision that appears to have been made without the required discussion.",
    keyDetails: "The form records no discussion with Mrs Evans or her family. Her son didn't know about it. She is unwell.",
    reasoning: "{k1} gets a senior review, {k2} involves her son, and {k3} records the decision. The distractors ignore or follow the form uncritically ({d1}, {d2}), dismiss her son ({d3}), escalate prematurely ({d4}), or try to discuss it when she can't engage ({d5}).",
    competing: "{d1} and {d2} are both tempting. The form shouldn't be ignored or followed blindly; it needs a senior review."
  },
  refs: [
    { ref: "eol", note: "Involving patients and families in CPR decisions." },
    { ref: "respect", note: "Recording and reviewing emergency care recommendations." }
  ],
  tags: ["DNACPR", "families", "nursing homes", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-185", letters: "BACD", format: "ranking", difficulty: "moderate",
  title: "A capacity assessment you haven't done before", setting: "Elderly care ward", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Capacity assessment", "Recognising limits", "Seeking help"],
  stem:
    "You are an F2 doctor on an elderly care ward. The social worker asks you to assess whether Mrs Shaw, 84, who has early dementia, has capacity to decide to sell her house and give most of the money to a neighbour.\n\n" +
    "You have done capacity assessments for simple medical decisions, but never for a complex financial decision.",
  options: [
    { text: "Tell your consultant that you'd like support with this assessment.",
      brief: "A complex decision needs someone with appropriate experience.",
      detailed: "Capacity assessments for complex financial decisions can be difficult, and the outcome matters a lot to Mrs Shaw. Asking your consultant for support or supervision is appropriate." },
    { text: "Ask the social worker what information Mrs Shaw would need to understand for this decision.",
      brief: "Understanding the decision helps you assess her capacity for it.",
      detailed: "Capacity is decision-specific, so you need to know what she would need to understand, such as the value of the house and the consequences of giving the money away. It ranks second because senior support comes first." },
    { text: "Do the assessment yourself after reading the Mental Capacity Act Code of Practice.",
      brief: "Reading helps, but may not be enough for a complex decision.",
      detailed: "The Code of Practice is helpful, and you have done simpler assessments. But this decision is complex and may involve concerns about financial abuse, which need experience." },
    { text: "Decline, as only psychiatrists can assess capacity.",
      brief: "Incorrect: capacity can be assessed by anyone appropriately involved.",
      detailed: "Capacity can be assessed by the person who needs the decision made, if they have the right skills. Psychiatric input may help, but it isn't required." }
  ],
  explanation: {
    issue: "This tests whether you recognise when a task is beyond your experience and seek appropriate support, without wrongly refusing.",
    keyDetails: "The decision is complex and financial. There may be a risk of financial abuse. You haven't done this type of assessment before.",
    reasoning: "{1} seeks support, {2} prepares you for the assessment, and {3} relies on reading alone. {4} refuses on an incorrect basis.",
    competing: "The possibility of financial abuse, with most of the money going to a neighbour, also needs raising with the safeguarding team, whatever the outcome of the capacity assessment. Legal advice may also be needed for a decision of this size."
  },
  refs: [
    { ref: "mca1", note: "Capacity assessment for specific decisions." },
    { ref: "careact42", note: "Concerns about financial abuse of adults with care needs." }
  ],
  tags: ["capacity", "financial decisions", "competence", "safeguarding"]
}
];
