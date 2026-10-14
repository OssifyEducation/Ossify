// Practice batch P05, part 2 (sjt-096 to sjt-105). Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-096", letters: "ADH", format: "multiple_choice", difficulty: "moderate",
  title: "\"How long have I got?\"", setting: "Oncology & palliative care", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communicating uncertainty", "Honesty", "Responding to emotion"],
  stem:
    "You are an F2 doctor on an oncology ward. This morning the consultant told Mrs Walsh, 63, that her bowel cancer has spread to her liver and lungs, and that treatment will now aim to control it rather than cure it.\n\n" +
    "In the afternoon, while you are reviewing her drug chart, she asks you quietly, \"How long have I got?\"",
  options: [
    { text: "Ask her gently what she understood from this morning's conversation, and what's on her mind.",
      brief: "Understanding her question helps you answer what she really wants to know.",
      detailed: "Patients ask this question for different reasons: to plan, to prepare family, or out of fear. Finding out what she understood and what prompted the question helps you respond to her needs, and avoids giving information she isn't ready for." },
    { text: "Stay with her for a few minutes and acknowledge how hard today's news must be.",
      brief: "Acknowledging her feelings matters as much as answering the question.",
      detailed: "She has received devastating news today. Taking a few minutes to sit with her, and to acknowledge how difficult it is, shows compassion and may help her talk about what's worrying her." },
    { text: "Be honest that it's hard to predict, and offer a talk with her consultant.",
      brief: "Honest about uncertainty, and makes sure she gets a full answer.",
      detailed: "Prognosis is uncertain, and as an F2 you may not know enough about her case to give a reliable estimate. Saying so honestly, and arranging for her consultant to discuss it with her, with family present if she wishes, respects her question without misleading her." },
    { text: "Tell her that the consultant will have covered everything in this morning's conversation.",
      brief: "Dismisses her question, which shows she still has unanswered concerns.",
      detailed: "Patients often take in very little after bad news, and her question shows she still wants to know more. Referring her back to a conversation she may not have absorbed leaves her without support." },
    { text: "Tell her the average survival for her stage of cancer, from published figures.",
      brief: "Statistics may not apply to her, and may not be what she is asking.",
      detailed: "She may want facts, which makes this tempting. But average survival figures can be misleading for an individual, and giving them without knowing her case or what she wants risks distressing her." },
    { text: "Tell her you can't answer that, and that she must ask her consultant.",
      brief: "Shuts down a difficult question rather than engaging with it.",
      detailed: "Her consultant should give the detailed answer, but closing the conversation without acknowledging her question or her feelings may leave her feeling dismissed." },
    { text: "Encourage her to stay positive, as people often do better than expected.",
      brief: "Well meant, but avoids her question.",
      detailed: "Hope matters, but this deflects what she has asked and may make it harder for her to talk honestly about her fears." },
    { text: "Suggest she asks her family to find out from the consultant for her.",
      brief: "Places the burden on her family and doesn't respect her own question.",
      detailed: "Families are often involved in these conversations, but she has asked you, and the information is hers. Passing it through her family doesn't respect her wishes." }
  ],
  explanation: {
    issue: "This tests how you respond to a patient's question about prognosis when the answer is uncertain and you are not the best person to give a detailed answer.",
    keyDetails: "She heard bad news this morning. She has asked you directly. Prognosis is uncertain and is best discussed by her consultant.",
    reasoning: "{k1} explores her question, {k2} acknowledges her feelings, and {k3} is honest about uncertainty while making sure she can discuss it with her consultant. The distractors give misleading figures ({d1}), shut the question down or avoid it ({d2}, {d3}, {d5}), or pass it to her family ({d4}).",
    competing: "{d2} is the most tempting distractor, as the consultant is the right person to give a detailed answer. The difference is that the keyed answer acknowledges her question and arranges that conversation, rather than closing it down."
  },
  refs: [
    { ref: "eol", note: "Sharing information about prognosis, and responding to patients' questions." },
    { ref: "consent", note: "Giving patients the information they want, at a pace they can manage." }
  ],
  tags: ["prognosis", "breaking bad news", "uncertainty", "oncology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-097", letters: "BACDE", format: "ranking", difficulty: "easy",
  title: "Jobs left undone", setting: "General medical ward", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Patient safety", "Handover"],
  stem:
    "You are an F2 doctor on a general medical ward. For the past three weeks Dr Moss, the other F2 on the team, has regularly left jobs undone at the end of his shift, such as unrequested scans and unwritten discharge letters.\n\n" +
    "You have been finishing them after your own shift, often staying an hour late. He hasn't said anything about it, and you're starting to feel resentful.",
  options: [
    { text: "Talk to Dr Moss privately about the jobs, and ask how things are going.",
      brief: "A direct, supportive conversation may reveal the cause and solve it.",
      detailed: "He may be struggling with workload, his health, or something outside work, or may not realise the effect on you. Talking privately and without blame gives him the chance to explain, and you the chance to solve it together." },
    { text: "Agree with him that unfinished jobs are handed over clearly at the end of each shift.",
      brief: "Makes sure jobs aren't missed, whoever finishes them.",
      detailed: "A clear handover means jobs are allocated rather than silently picked up. It ranks second because it deals with the practical problem but not with why it keeps happening." },
    { text: "Raise the pattern with your clinical supervisor.",
      brief: "Appropriate if it continues, but best after speaking to him.",
      detailed: "Your supervisor may need to know, especially if it affects patient care or he is struggling. It ranks third because a direct conversation is the proportionate first step." },
    { text: "Keep finishing his jobs to avoid conflict.",
      brief: "Unsustainable, and hides a problem that may need addressing.",
      detailed: "This keeps patients safe in the short term, but you are becoming tired and resentful, and any underlying problem with Dr Moss goes unaddressed." },
    { text: "Leave his unfinished jobs for him to complete on his next shift.",
      brief: "Puts patients at risk to make a point.",
      detailed: "Your frustration is understandable, but leaving scans and discharge letters undone, with no handover, could harm patients. This is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you deal with a colleague whose unfinished work is affecting you, keeping patients safe and addressing the problem constructively.",
    keyDetails: "The pattern has lasted three weeks. You've been staying late. You don't know why it's happening.",
    reasoning: "{1} addresses it directly and supportively, {2} makes the handover safe, and {3} escalates proportionately. {4} hides the problem, and {5} puts patients at risk.",
    competing: "Some would raise it with the supervisor before speaking to Dr Moss. The key starts with a direct conversation because it is quicker, fairer, and may reveal a problem he needs help with."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues and making sure care continues safely." }
  ],
  tags: ["colleagues", "workload", "handover", "resentment"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-098", letters: "CDE", format: "multiple_choice", difficulty: "moderate",
  title: "The transfusion you didn't mention", setting: "Orthopaedics", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Handover", "Owning mistakes", "Patient safety"],
  stem:
    "You are an F2 doctor in orthopaedics. Mrs Cole, 79, had a hip hemiarthroplasty yesterday. This afternoon her haemoglobin was 71 g/L and your registrar asked you to prescribe two units of blood, which you did.\n\n" +
    "On your drive home after handing over to the evening doctor, you realise you didn't mention the transfusion, and you can't remember whether you told the nurse the blood had been prescribed.",
  options: [
    { text: "Once you've stopped safely, phone the evening doctor and hand over the transfusion.",
      brief: "Closes the gap in the handover quickly.",
      detailed: "The evening doctor needs to know so they can check the transfusion and review her if needed. Phoning once you've stopped the car safely puts it right promptly." },
    { text: "Phone the ward to make sure the nurse looking after her knows the blood is prescribed.",
      brief: "The nurse needs to know to arrange for the blood to be given.",
      detailed: "Nurses arrange collection and administration of blood. Making sure the nurse knows means the transfusion can go ahead tonight." },
    { text: "Reflect on what happened, and use a written handover checklist in future.",
      brief: "Learning from the near miss makes it less likely to happen again.",
      detailed: "Once Mrs Cole's transfusion is in hand, thinking about why it was missed, and using a structured written handover, helps prevent the same gap in future. It also makes a useful reflection for your portfolio." },
    { text: "Wait until the morning, as the prescription is on her drug chart.",
      brief: "Relies on others noticing a prescription you haven't handed over.",
      detailed: "The prescription is there, but if the nurses don't know about it, the blood may not be collected or given tonight. A quick call now prevents that." },
    { text: "Drive back to the hospital to make sure the transfusion is given.",
      brief: "Unnecessary when a phone call would do.",
      detailed: "Your conscientiousness is admirable, but you are off duty and the team on shift can take this on. A phone call is quicker and safer." },
    { text: "Send the evening doctor a message with Mrs Cole's details on a personal messaging app.",
      brief: "Quick, but risks confidentiality and may not be seen in time.",
      detailed: "Messaging apps are convenient, but sending patient details on a personal app may breach trust policy, and a message may not be read promptly. A phone call is better." },
    { text: "Email the evening doctor the details to read when they have time.",
      brief: "May not be read until it's too late.",
      detailed: "An email is a record, but a busy on-call doctor may not check email for hours. This needs a direct conversation." },
    { text: "Report yourself through the incident reporting system before doing anything else.",
      brief: "May be useful later, but the priority is the patient's care tonight.",
      detailed: "Reporting can help learning, but before doing anything else you need to make sure the transfusion happens." }
  ],
  explanation: {
    issue: "This tests how you put right a gap in your handover promptly and safely.",
    keyDetails: "Her haemoglobin is low. The prescription is written, but neither the evening doctor nor the nurse may know. You are driving home.",
    reasoning: "{k1} closes the handover gap with the doctor, {k2} makes sure the nurse knows, and {k3} learns from the near miss. The distractors are passive ({d1}), unnecessary ({d2}), unreliable ({d3}, {d4}), or put reporting ahead of the patient ({d5}).",
    competing: "{d2} shows commitment, but you don't need to return when a phone call achieves the same thing safely."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, handing over care safely and making sure information is passed on." }
  ],
  tags: ["handover", "transfusion", "errors", "orthopaedics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-099", letters: "EBADC", format: "ranking", difficulty: "hard",
  title: "The ReSPECT form", setting: "Out-of-hours / community", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Advance care planning", "Communication with families", "Clinical judgement"],
  stem:
    "You are an F2 doctor in an out-of-hours GP service. A paramedic phones you from the home of Mr Ellis, 86, who has end-stage heart failure. He is more breathless and drowsy tonight and can no longer take part in decisions.\n\n" +
    "His ReSPECT form, completed with him two months ago, records that he wants to stay at home, with care focused on comfort, and not to be admitted to hospital unless symptoms can't be managed at home. His daughter is insisting he goes to hospital.",
  options: [
    { text: "Ask the paramedic what has changed, and whether it could be treated at home.",
      brief: "The recommendations apply to his situation; a clinical picture comes first.",
      detailed: "ReSPECT recommendations are made for a likely emergency, so you need to know what is happening tonight. A reversible problem that can be treated at home, or symptoms that can't be controlled there, would change what is appropriate." },
    { text: "Speak to his daughter, explain what the form records about his wishes, and listen to her concerns.",
      brief: "She may not know about his wishes, and her fears need hearing.",
      detailed: "His daughter may be frightened or unaware of the conversations he had. Explaining what he wanted, and listening to her worries, often helps families accept a plan that respects his wishes." },
    { text: "Advise comfort care at home and arrange urgent support from the community nursing team.",
      brief: "Follows his wishes, though the conversation with his daughter should come first.",
      detailed: "If his symptoms can be managed at home, this follows the plan he made. It ranks third because acting on it before speaking to his daughter risks conflict at a distressing time." },
    { text: "Advise the paramedic to take him to hospital, as his daughter wants.",
      brief: "Goes against his recorded wishes without a clinical reason.",
      detailed: "His daughter's distress matters, and admission would be right if his symptoms can't be managed at home. But admitting him simply because she asks overrides the wishes he recorded." },
    { text: "Tell the paramedic the ReSPECT form is legally binding, so it must be followed.",
      brief: "Incorrect: ReSPECT recommendations aren't legally binding.",
      detailed: "ReSPECT forms record recommendations to guide clinicians, not legally binding instructions. Telling the paramedic otherwise is wrong and skips the clinical judgement and conversation this situation needs." }
  ],
  explanation: {
    issue: "This tests how you use an advance care plan in an emergency, balancing the patient's recorded wishes, clinical judgement, and a distressed relative.",
    keyDetails: "He lacks capacity now. His ReSPECT form records a clear preference for care at home unless symptoms can't be managed. His daughter disagrees. ReSPECT recommendations aren't legally binding.",
    reasoning: "{1} establishes the clinical picture, {2} explains his wishes to his daughter, and {3} follows the plan. {4} overrides his wishes without clinical reason, and {5} misstates the form's status.",
    competing: "This is hard because {1} and {2} would happen almost together. {5} is ranked last because it is factually wrong and ends the discussion, whereas {4} may yet turn out to be clinically necessary."
  },
  refs: [
    { ref: "respect", note: "ReSPECT recommendations guide, but don't legally bind, emergency decisions." },
    { ref: "mca4", note: "Taking account of a person's past wishes when acting in their best interests." }
  ],
  tags: ["ReSPECT", "advance care planning", "families", "out-of-hours"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-100", letters: "AFH", format: "multiple_choice", difficulty: "moderate",
  title: "Alcohol on his breath", setting: "General medical ward", attribute: P,
  topic: "An impaired or unwell colleague",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Patient safety", "Raising concerns", "Supporting colleagues"],
  stem:
    "You are an F2 doctor starting a night shift on the medical wards. At handover you notice a strong smell of alcohol on the breath of Dr Byrne, the medical registrar you'll be working with overnight. His speech seems normal, but he is unusually cheerful.\n\n" +
    "He will be the most senior doctor in the hospital overnight, apart from the consultant on call from home.",
  options: [
    { text: "Speak to Dr Byrne privately and tell him what you've noticed.",
      brief: "Gives him the chance to explain, or to step aside.",
      detailed: "There may be an explanation, but a strong smell of alcohol at the start of a night shift is a serious concern. Raising it with him privately and directly gives him the chance to respond, and may lead him to step back himself." },
    { text: "Inform the on-call consultant of your concern.",
      brief: "The consultant needs to know, as patient safety tonight depends on it.",
      detailed: "Dr Byrne will be leading the hospital's medical care overnight. Whatever he says, the consultant must decide whether he is fit to work, and arrange cover if not." },
    { text: "Make a factual note of what you observed, and when.",
      brief: "A clear record helps any later review.",
      detailed: "Writing down what you noticed, such as the smell and his behaviour, and when, without opinion, supports a fair process if the concern is looked into." },
    { text: "Ignore it, as the alcohol may be from the night before.",
      brief: "He may still be over the limit, and patients' safety is at stake.",
      detailed: "It may be left over from the previous evening, but alcohol from the night before can still impair judgement. You can't safely ignore it when he will be leading the night's care." },
    { text: "Ask the nurses to keep an eye on his decisions overnight.",
      brief: "Shares the concern informally without addressing it.",
      detailed: "This spreads your concern without dealing with it, and puts the nurses in a difficult position." },
    { text: "Raise it with him in front of the handover team.",
      brief: "Public confrontation is likely to humiliate him.",
      detailed: "The concern is serious, but raising it publicly could humiliate him and make him defensive, when a private conversation and the consultant are the right routes." },
    { text: "Report him to the GMC straight away.",
      brief: "The immediate risk needs managing tonight, locally.",
      detailed: "The GMC may become involved later, but it can't act tonight. The priority is to make sure patients are safe, which needs the consultant." },
    { text: "Offer to see his patients overnight so that he can rest in the doctors' mess.",
      brief: "Covers up the problem and leaves the hospital without a fit senior.",
      detailed: "This may feel kind, but it hides the problem, puts you beyond your competence, and leaves the hospital without a registrar overnight." }
  ],
  explanation: {
    issue: "This tests how you act when a senior colleague may be impaired by alcohol, putting patient safety first while treating him fairly.",
    keyDetails: "He will be the most senior doctor on site. There is a strong smell of alcohol and a change in his manner. The consultant is available by phone.",
    reasoning: "{k1} raises it directly with him, {k2} makes sure the consultant can act, and {k3} records the facts. The distractors ignore or minimise the risk ({d1}, {d2}), handle it inappropriately ({d3}, {d4}), or cover it up ({d5}).",
    competing: "{d5} is the most tempting option, but it hides a serious safety problem rather than solving it."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting when a colleague may not be fit to practise." },
    { ref: "concerns", note: "Raising concerns promptly when patients may be at risk." }
  ],
  tags: ["alcohol", "impaired colleague", "night shift", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-101", letters: "BAECD", format: "ranking", difficulty: "moderate",
  title: "Consent for a procedure you don't know", setting: "General surgery", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development", "Patients, partnership and communication"],
  competencies: ["Consent", "Recognising limits", "Learning"],
  stem:
    "You are an F2 doctor in general surgery. Your registrar asks you to consent Mrs Ward, 48, for a laparoscopic cholecystectomy on tomorrow's list, saying he's too busy.\n\n" +
    "You have never consented a patient for this operation and don't know its specific risks or how often they occur.",
  options: [
    { text: "Tell the registrar you don't know the risks well enough, and ask him to take consent.",
      brief: "Consent should be taken by someone who knows the procedure and its risks.",
      detailed: "GMC guidance says that if you are asked to seek consent, you must have enough knowledge of the procedure and its risks. Being honest about this protects Mrs Ward and makes sure she gets accurate information." },
    { text: "Ask the registrar whether he could supervise you taking consent, so you can learn.",
      brief: "Turns the request into a learning opportunity, with the safety of supervision.",
      detailed: "Learning to take consent under supervision is valuable. It ranks second because the registrar has said he is busy, so this may not be possible today." },
    { text: "Read about the operation and its risks, and take consent once you feel confident.",
      brief: "Learning the risks helps, but reading alone may not be enough.",
      detailed: "Reading the patient information and the risks may prepare you, and for some procedures it would be enough. But you may still be unable to answer her questions, which is why it ranks below involving your registrar." },
    { text: "Ask the ward nurse to take consent, as she knows the procedure well.",
      brief: "Passes the task on to someone who may not be trained to do it.",
      detailed: "Some nurses are trained to take consent for specific procedures, but asking a ward nurse to do this without checking whether she is trained isn't appropriate." },
    { text: "Get Mrs Ward to sign the form now, and tell her the surgeon will explain the risks tomorrow.",
      brief: "A signature without information isn't valid consent.",
      detailed: "Consent is a process of discussion, not a signature. Getting her to sign without explaining the risks doesn't meet the requirements for consent." }
  ],
  explanation: {
    issue: "This tests whether you recognise that taking consent requires knowledge of the procedure, and ask for help when you lack it.",
    keyDetails: "You don't know the operation's specific risks. Your registrar is busy. The operation is tomorrow, so there is time.",
    reasoning: "{1} is honest about your limits, {2} turns it into supervised learning, and {3} prepares you but may not be enough. {4} delegates inappropriately, and {5} doesn't produce valid consent.",
    competing: "Some would put supervision first, as it builds your skills. Both are good; the key starts with being honest because supervision may not be available today."
  },
  refs: [
    { ref: "consent", note: "Delegating consent to someone with enough knowledge of the procedure and its risks." }
  ],
  tags: ["consent", "competence", "surgery", "supervision"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-102", letters: "BEG", format: "multiple_choice", difficulty: "easy",
  title: "Calls every hour", setting: "General medical ward", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communication with relatives", "Supporting the team", "Confidentiality"],
  stem:
    "You are an F2 doctor on a general medical ward. Mr Holt, 81, was admitted two days ago with pneumonia and is improving slowly. He has capacity and is happy for his wife to be kept informed.\n\n" +
    "Mrs Holt, who can't visit because she is unwell herself, has phoned the ward almost every hour since he was admitted. The nurses say it is taking up a lot of their time, and ask you to help.",
  options: [
    { text: "Phone Mrs Holt to find out what she is worried about.",
      brief: "Understanding her worries may reduce the calls.",
      detailed: "She can't visit and may be frightened. A conversation about her worries, and an update from a doctor, may reassure her more than many short calls." },
    { text: "Agree with her a regular time each day for an update.",
      brief: "A predictable update reduces anxiety and calls.",
      detailed: "Knowing she will hear at a set time, perhaps once a day, from a named person often reassures relatives and reduces calls." },
    { text: "Ask Mr Holt whether he could phone his wife himself.",
      brief: "Hearing from him directly may reassure her most.",
      detailed: "He is improving and has capacity. Asking whether he would like to call her, perhaps using a ward phone or his own, may be the most reassuring update she could get." },
    { text: "Ask the switchboard to stop putting Mrs Holt's calls through.",
      brief: "Cuts off a worried wife who can't visit.",
      detailed: "The calls are taking time, but blocking them would leave her with no information and is likely to increase her distress." },
    { text: "Tell the nurses to let her calls go to voicemail.",
      brief: "Leaves her without information, and may worry her more.",
      detailed: "This reduces interruptions, but leaves a worried wife without updates, which may increase her calls." },
    { text: "Tell Mrs Holt that you can't give her updates, because of confidentiality.",
      brief: "Incorrect: Mr Holt has agreed she can be informed.",
      detailed: "Confidentiality matters, but Mr Holt has agreed for her to be kept informed, so this is wrong and unkind." },
    { text: "Offer to update her yourself every hour, so the nurses are free.",
      brief: "Unsustainable, and it doesn't address her anxiety.",
      detailed: "This is generous but impractical, and simply moves the problem from the nurses to you." },
    { text: "Suggest she contacts the Patient Advice and Liaison Service instead.",
      brief: "PALS isn't a source of clinical updates.",
      detailed: "PALS helps with concerns and complaints, but isn't the right place for updates on her husband's condition." }
  ],
  explanation: {
    issue: "This tests how you support an anxious relative while helping the team cope.",
    keyDetails: "Mr Holt has agreed she can be informed. She can't visit. The calls are taking up nurses' time.",
    reasoning: "{k1} understands her worries, {k2} sets up regular updates, and {k3} uses the best source of reassurance. The distractors cut her off ({d1}, {d2}), misuse confidentiality ({d3}), are unsustainable ({d4}), or misdirect her ({d5}).",
    competing: "{d4} looks helpful but moves the problem rather than solving it."
  },
  refs: [
    { ref: "confidentiality", note: "Sharing information with those close to a patient, with the patient's agreement." },
    { ref: "gmp", note: "Domain 2, supporting those close to patients." }
  ],
  tags: ["relatives", "communication", "anxiety", "nursing workload"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-103", letters: "EACDB", format: "ranking", difficulty: "moderate",
  title: "An unchecked resuscitaire", setting: "Paediatrics", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Equipment safety", "Raising concerns", "Teamwork"],
  stem:
    "You are an F2 doctor on the paediatric ward. Looking for a form in the treatment room, you notice that the daily checklist for the ward's resuscitaire, which is used for newborns needing resuscitation, hasn't been signed for seven days.\n\n" +
    "The ward has been very short of staff this week.",
  options: [
    { text: "Ask the nurse in charge to arrange for the resuscitaire to be checked now.",
      brief: "Making sure the equipment works comes first.",
      detailed: "Unchecked resuscitation equipment may not work when a baby needs it. Making sure it is checked straight away removes the immediate risk." },
    { text: "Report the missed checks through the trust's incident reporting system.",
      brief: "Records the problem so the trust can learn from it.",
      detailed: "Reporting helps the trust see whether checks are being missed more widely, especially during staff shortages. It ranks second because making the equipment safe comes first." },
    { text: "Raise it with the ward manager, so the checking process can be reviewed.",
      brief: "The process needs fixing, though this can wait until after the immediate check.",
      detailed: "The ward manager can look at why checks were missed and make sure they happen during busy periods. This is important, but less urgent than checking the equipment." },
    { text: "Mention it at the next departmental meeting.",
      brief: "Too slow for a safety risk.",
      detailed: "Discussing it more widely may help in the long run, but waiting for a meeting leaves the equipment unchecked." },
    { text: "Leave it for the nursing team, as equipment checks are their responsibility.",
      brief: "Checks may be a nursing task, but the risk needs someone to act on it now.",
      detailed: "Equipment checks are usually done by nurses, so this may seem reasonable. But you've noticed a safety risk, and leaving it means the resuscitaire may still not be checked when a baby needs it." }
  ],
  explanation: {
    issue: "This tests whether you act on a safety risk with equipment, and raise the system problem behind it.",
    keyDetails: "The resuscitaire hasn't been checked for a week. It is used in emergencies. The ward has been short-staffed.",
    reasoning: "{1} removes the immediate risk, {2} reports it, and {3} addresses the process. {4} is too slow, and {5} leaves the risk for someone else to notice.",
    competing: "Some would raise it with the ward manager before reporting. Both are appropriate; the key puts reporting first because it creates a formal record."
  },
  refs: [
    { ref: "concerns", note: "Raising concerns about equipment and systems that put patients at risk." }
  ],
  tags: ["equipment", "resuscitation", "raising concerns", "paediatrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-104", letters: "ADG", format: "multiple_choice", difficulty: "hard",
  title: "News before surgery", setting: "General practice", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Fitness to work", "Asking for help", "Self-awareness"],
  stem:
    "You are an F2 doctor in a GP practice. Five minutes before your afternoon surgery, your sister texts to say your father has been taken to hospital with a suspected stroke.\n\n" +
    "You feel shaken and can't stop thinking about it. Your first patient is already waiting, and the surgery is fully booked.",
  options: [
    { text: "Tell your GP supervisor, and that you may not be able to work this afternoon.",
      brief: "Your supervisor can help you decide and arrange cover.",
      detailed: "Being shaken by news like this is natural and may affect your concentration. Telling your supervisor means the practice can support you and arrange cover if needed." },
    { text: "Take a few minutes to phone your sister and find out more.",
      brief: "Knowing more helps you decide whether you can work.",
      detailed: "A short call may tell you how serious things are and whether you need to go. It helps you make a clear decision rather than working while preoccupied." },
    { text: "Ask reception to hold your first patients for a few minutes.",
      brief: "Buys time to make a clear decision.",
      detailed: "A short delay gives you time to find out more and speak to your supervisor, and lets reception tell patients what's happening." },
    { text: "Start your surgery as normal and phone your family at the end.",
      brief: "You may not be able to concentrate, which could affect patient care.",
      detailed: "Carrying on can feel like the professional thing to do. But if you can't stop thinking about your father, your decisions may suffer, and you may regret not finding out more." },
    { text: "Leave immediately, and phone the practice from the car.",
      brief: "Leaves the practice without warning and patients waiting.",
      detailed: "Wanting to get to your father is completely understandable. But leaving without speaking to anyone leaves patients waiting with no plan, and driving while shaken may not be safe." },
    { text: "Start your surgery, and check your phone between patients for updates from your family.",
      brief: "Divides your attention between your family and your patients.",
      detailed: "This seems a compromise, but you would be distracted throughout, and patients may notice." },
    { text: "Ask reception to cancel all of your afternoon appointments.",
      brief: "May be needed, but the practice should decide how to manage them.",
      detailed: "Some appointments may need to move, but cancelling all of them yourself, without your supervisor, may leave patients who need to be seen without care." },
    { text: "Explain to each patient that you're having a difficult day.",
      brief: "Shifts your burden onto patients.",
      detailed: "Being honest is important, but sharing your personal distress with each patient is unprofessional and doesn't solve the problem." }
  ],
  explanation: {
    issue: "This tests whether you recognise when personal distress may affect your fitness to work, and seek support so patients are safe.",
    keyDetails: "The news is serious and sudden. You are shaken. Patients are waiting.",
    reasoning: "{k1} gets support and cover, {k2} gives you the information to decide, and {k3} buys time to do so. The distractors work while distracted ({d1}, {d3}), leave without a plan ({d2}), act beyond your role ({d4}), or burden patients ({d5}).",
    competing: "{d1} is tempting because it seems professional, but working while preoccupied with a parent's stroke may put patients at risk."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, making sure your health or circumstances don't put patients at risk." }
  ],
  tags: ["fitness to work", "personal crisis", "general practice", "wellbeing"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-105", letters: "DBCA", format: "ranking", difficulty: "moderate",
  title: "Not eating", setting: "Elderly care ward", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Cultural sensitivity", "Nutrition", "Advocacy"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mr Hussain, 79, is recovering from a urinary tract infection. The nurses tell you he has eaten very little for three days.\n\n" +
    "When you ask him, he becomes upset and says he hasn't been able to find out whether the meals are halal, so he has only been eating bread and fruit.",
  options: [
    { text: "Apologise, and ask the ward team to arrange halal meals for him.",
      brief: "Hospitals can usually provide halal meals; this resolves the problem directly.",
      detailed: "Most hospitals offer halal meals, and the catering team can usually provide them quickly. Apologising that his needs weren't recognised, and arranging suitable meals, addresses both his distress and his nutrition." },
    { text: "Ask whether his family could bring in food for him.",
      brief: "Helpful while meals are arranged.",
      detailed: "Food from home can be reassuring and familiar, as long as it suits any dietary needs related to his illness. It ranks second because the hospital should provide suitable meals, and this shouldn't depend on his family." },
    { text: "Ask the dietitian to review him, as he has eaten little for three days.",
      brief: "His nutrition needs reviewing, though the cause needs fixing first.",
      detailed: "Three days of poor intake in an older patient is a concern, and a dietitian can assess him. It ranks third because arranging suitable food addresses the cause." },
    { text: "Suggest he chooses the vegetarian option, as it should be acceptable.",
      brief: "Doesn't respect his specific needs.",
      detailed: "Some people who eat halal accept vegetarian meals, but he hasn't said so. Suggesting it as a solution doesn't take his needs seriously." }
  ],
  explanation: {
    issue: "This tests whether you recognise and address a patient's cultural and religious dietary needs, and the effect on his health.",
    keyDetails: "He has eaten little for three days. Halal meals are usually available. He is upset.",
    reasoning: "{1} solves the problem directly, {2} helps in the meantime, and {3} addresses his nutrition. {4} doesn't respect his needs.",
    competing: "Some would put the dietitian review higher, given three days of poor intake. The key ranks it third because getting him suitable food addresses the underlying cause."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients with respect and meeting their needs." },
    { ref: "equality", note: "Fair treatment regardless of religion or belief." }
  ],
  tags: ["culture", "religion", "nutrition", "elderly care"]
}
];
