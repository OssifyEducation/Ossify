// Practice batch P04, part 1 (sjt-066 to sjt-075). Written in key order; see scripts/compile-sjt-drafts.js.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-066", letters: "ABE", format: "multiple_choice", difficulty: "moderate",
  title: "Notes that say nothing", setting: "Out-of-hours / community", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Clinical assessment", "Record keeping", "Raising concerns"],
  stem:
    "You are an F2 doctor working a shift in an out-of-hours GP service. You see Maisie, 3, who has had a fever for two days. Her mother says they were seen at the same centre nine hours ago by Dr Baker, a locum GP.\n\n" +
    "Dr Baker's entry reads only: \"Viral illness. Safety-netted.\" There are no observations or examination findings recorded. Looking back, you notice that his other entries from that shift are similarly brief.",
  options: [
    { text: "Assess Maisie fully yourself and record your findings clearly.",
      brief: "She needs a complete assessment now, whatever happened earlier.",
      detailed: "You can't rely on an earlier assessment that wasn't recorded. A full history, examination and set of observations, clearly documented, means Maisie is assessed properly and the next clinician has a clear record to work from." },
    { text: "Ask Maisie's mother what was checked at the earlier visit.",
      brief: "Her account may fill some of the gaps in the record.",
      detailed: "The mother can tell you whether Maisie's temperature was taken, whether she was examined, and what advice was given. This helps you judge how things have changed, though it doesn't replace your own assessment." },
    { text: "Raise the standard of Dr Baker's notes with the clinical lead for the shift.",
      brief: "A pattern of poor records is a safety risk that the service needs to know about.",
      detailed: "Brief notes across a whole shift make it hard for other clinicians to provide safe care. The clinical lead can look into it and give feedback, which is a proportionate first step that doesn't rely on you judging his clinical practice." },
    { text: "Add the details the mother describes to Dr Baker's entry, so the record is complete.",
      brief: "You can't alter another clinician's entry; record what she tells you in your own note.",
      detailed: "Completing the record seems helpful, but adding to someone else's entry makes it look as though he recorded those findings. What the mother tells you belongs in your own, dated entry, attributed to her." },
    { text: "Tell Maisie's mother that the previous doctor doesn't appear to have examined her properly.",
      brief: "You don't know what was done, only what was written down.",
      detailed: "Being open with families matters, but you don't know that Dr Baker failed to examine Maisie; you only know he didn't record it. Suggesting otherwise could cause unnecessary distress and damage trust in the service." },
    { text: "Take the note as evidence that the earlier assessment was normal, since a diagnosis was given.",
      brief: "A diagnosis without recorded findings gives you little to rely on.",
      detailed: "It is reasonable to assume a colleague acted properly, and he may well have examined her. But with no findings recorded, you can't use the earlier visit as a baseline, and Maisie may have changed since." },
    { text: "Report Dr Baker to the GMC, as his notes are well below the expected standard.",
      brief: "Premature: the service should look at this first.",
      detailed: "Poor record keeping can become a fitness-to-practise concern, but a first concern like this is best raised locally, where it can be looked into and addressed. The GMC is for concerns that can't be managed that way." },
    { text: "Ask the other clinicians on shift whether they have noticed problems with Dr Baker's work.",
      brief: "Seeking others' views informally risks gossip rather than a proper review.",
      detailed: "It may feel like checking whether there's a real pattern, but asking around informally can damage a colleague's reputation without giving him a fair hearing. The clinical lead is the right person to look at this." }
  ],
  explanation: {
    issue: "This tests how you deal with poor record keeping by a colleague: caring for the patient in front of you and raising the issue proportionately.",
    keyDetails: "Maisie has been ill for two days and returned within nine hours. The earlier entry has no findings. The problem seems to affect all of Dr Baker's notes on that shift.",
    reasoning: "{k1} makes sure Maisie is properly assessed, {k2} gathers what information is available, and {k3} raises the pattern with the right person. The distractors either alter or misuse the record ({d1}, {d3}), jump to conclusions ({d2}, {d4}), or handle the concern informally ({d5}).",
    competing: "{d3} is the subtle distractor: assuming a colleague acted properly is usually fair, but it can't replace your own assessment when nothing was recorded."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, keeping clear, accurate records; Domain 3, acting on concerns about colleagues' practice." },
    { ref: "concerns", note: "Raising concerns locally first, in proportion to the risk." }
  ],
  tags: ["record keeping", "out-of-hours", "colleague performance", "febrile child"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-067", letters: "EABCD", format: "ranking", difficulty: "easy",
  title: "Nobody told me", setting: "Elderly care ward", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communication with relatives", "Continuity of care", "Owning mistakes"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mrs Lowe, 89, has advanced dementia and lacks capacity to make decisions about her care. On yesterday's ward round her consultant decided that she should not receive CPR and that her care should continue on the ward rather than in intensive care. The plan says \"discuss with son\", but there is no record that this happened.\n\n" +
    "Her son, Mr Lowe, has just seen the DNACPR form in her notes folder. He is upset and asks you why no one spoke to him.",
  options: [
    { text: "Apologise that he wasn't told, and explain the decision and the reasons for it.",
      brief: "He should have been involved; an apology and an honest explanation start to put that right.",
      detailed: "When a patient lacks capacity, those close to her should be consulted about a DNACPR decision unless that isn't practicable. Mr Lowe should have been spoken to. Acknowledging this, and explaining the decision in plain language, is honest and helps rebuild his trust." },
    { text: "Arrange for the consultant to meet him today to discuss the decision.",
      brief: "The consultant made the decision and should discuss it with him.",
      detailed: "Mr Lowe may have questions about the decision itself, or views about what his mother would have wanted, which the consultant needs to hear. Arranging a meeting soon shows the team takes his concerns seriously. It ranks second only because he deserves a response from you now." },
    { text: "Document your conversation with him and his concerns in the notes.",
      brief: "Records the discussion and his views for the team.",
      detailed: "A clear note of what you discussed and what he said means the consultant and the rest of the team know where things stand. It's important, but less so than responding to him directly." },
    { text: "Tell him the team may not have been able to reach him yesterday.",
      brief: "An unsupported excuse that avoids taking responsibility.",
      detailed: "This may be true, but there's no record of an attempt, so it's a guess offered as an excuse. It is likely to frustrate him and doesn't address what went wrong." },
    { text: "Explain that resuscitation decisions are made by doctors, so his agreement wasn't needed.",
      brief: "Partly true, but it ignores the team's duty to consult him and dismisses his concerns.",
      detailed: "Families can't insist on CPR, so it's true their agreement isn't required. But they should be consulted, and telling him his involvement didn't matter is likely to cause further distress and a complaint." }
  ],
  explanation: {
    issue: "This tests how you respond when a planned conversation with a family didn't happen: acknowledging the gap, explaining honestly, and putting it right.",
    keyDetails: "Mrs Lowe lacks capacity. The plan said to discuss with her son, but there is no record this happened. He found out by seeing the form.",
    reasoning: "{1} acknowledges the failure and explains the decision, {2} gives him the chance to discuss it with the decision-maker, and {3} records the conversation. {4} offers an excuse and {5} dismisses his role.",
    competing: "Some would put arranging the consultant meeting first. The key ranks your own response first because he is upset and asking you now, and you can explain the decision while the meeting is arranged."
  },
  refs: [
    { ref: "eol", note: "Consulting those close to a patient who lacks capacity about CPR decisions." },
    { ref: "respect", note: "Recording and communicating emergency care and treatment recommendations." }
  ],
  tags: ["DNACPR", "relatives", "communication", "handover"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-068", letters: "CGH", format: "multiple_choice", difficulty: "moderate",
  title: "\"I'd rather not be here\"", setting: "Psychiatry", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication", "Knowledge, skills and development"],
  competencies: ["Risk assessment", "Escalation", "Compassionate communication"],
  stem:
    "You are an F2 doctor on an adult psychiatric ward. Ms Hill, 23, is an informal inpatient with severe anorexia nervosa. Her BMI is 12.8 and her team has planned nasogastric feeding, which she agreed to yesterday.\n\n" +
    "Today she refuses the feed. She tells you, calmly, \"I'd rather die than be fed. Maybe it would be better for everyone if I did.\"",
  options: [
    { text: "Ask her gently what she means, and whether she has thought about ending her life.",
      brief: "Her words need exploring; asking directly about suicidal thoughts doesn't increase risk.",
      detailed: "She may be expressing the fear and distress that anorexia brings, or she may be having thoughts of suicide. Asking calmly and directly is the only way to find out, and gives her the chance to talk about how she feels." },
    { text: "Tell the ward's senior doctor urgently about her refusal and what she has said.",
      brief: "Her refusal and her words both need urgent senior review.",
      detailed: "Refusal of feeding at this weight is a medical emergency, and what she has said raises concern about suicide. Her consultant or the on-call senior needs to know now, so they can review her, consider her capacity and decide on the next steps, which may include the Mental Health Act." },
    { text: "Make sure her physical risk is reassessed, including observations, bloods and an ECG.",
      brief: "Severe malnutrition carries risks that need monitoring, whether or not she is fed.",
      detailed: "At a BMI of 12.8 she is at high medical risk, including from heart problems and electrolyte disturbances. Making sure her observations, bloods and ECG are checked helps the team judge how urgent the situation is, as recommended in national guidance on medical emergencies in eating disorders." },
    { text: "Accept her decision, as she is an adult and has the right to refuse treatment.",
      brief: "Severe anorexia can affect capacity to make decisions about food, and her life may be at risk.",
      detailed: "Adults can refuse treatment, which is what makes this tempting. But in severe anorexia, the illness itself can impair a person's ability to weigh up decisions about eating, and she has just spoken about dying. Her refusal needs urgent senior review, not simple acceptance." },
    { text: "Explain that she may be detained under the Mental Health Act if she keeps refusing.",
      brief: "May become relevant, but raised now it sounds like a threat rather than care.",
      detailed: "Detention may need to be considered, and patients should be told honestly about the options. But leading with it, before you've understood why she is refusing, is likely to feel coercive and damage her trust in you." },
    { text: "Agree she can skip today's feed if she eats a snack you agree together.",
      brief: "Undermines the treatment plan without the team's agreement.",
      detailed: "Negotiating feels like a compassionate compromise, but at her weight missing nutrition carries real risk, and changing the plan isn't your decision to make alone. It should be discussed with her team." },
    { text: "Phone her parents and ask them to come in to persuade her.",
      brief: "She is an adult; contacting her family needs her agreement.",
      detailed: "Families are often important in recovery, but Ms Hill is 23. Involving her parents without her consent breaches her confidentiality and may damage her trust in the team." },
    { text: "Arrange her transfer to a medical ward, where feeding can be started more easily.",
      brief: "Medical admission may be needed, but it's a decision for her senior team.",
      detailed: "Some patients with severe malnutrition do need medical admission. But arranging a transfer on your own initiative, without senior review, isn't appropriate and doesn't address her refusal." }
  ],
  explanation: {
    issue: "This tests how you respond to a patient with severe anorexia who refuses nutrition and speaks about dying: exploring what she means, recognising the medical risk, and escalating.",
    keyDetails: "Her BMI is 12.8. She agreed to feeding yesterday but refuses today. She has spoken about dying. She is an informal patient, and anorexia can affect capacity in decisions about food.",
    reasoning: "{k1} explores her distress and suicide risk, {k2} gets urgent senior review, and {k3} makes sure her physical risk is understood. The distractors either accept the refusal without review ({d1}), coerce or bargain ({d2}, {d3}), breach her confidentiality ({d4}), or act beyond your role ({d5}).",
    competing: "{d1} is the trap: respecting autonomy is usually right, but here the illness may impair her decision-making and her life is at risk, so her refusal needs senior assessment."
  },
  refs: [
    { ref: "meed", note: "Recognising and managing medical risk in severe eating disorders." },
    { ref: "ng225", note: "Assessing and responding to people who talk about ending their lives." },
    { ref: "mca1", note: "Capacity is decision-specific and can be impaired by mental illness." }
  ],
  tags: ["anorexia", "refusal", "suicide risk", "psychiatry"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-069", letters: "AEDCB", format: "ranking", difficulty: "hard",
  title: "Unsteady hands", setting: "Orthopaedics", attribute: P,
  topic: "An impaired or unwell colleague",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Speaking up", "Patient safety", "Escalation"],
  stem:
    "You are an F2 doctor assisting in orthopaedic theatre. Your registrar, Dr Shaw, is fixing a wrist fracture under general anaesthetic. The consultant is in the hospital but not in theatre. The fracture is exposed, but the operation could safely be paused.\n\n" +
    "Dr Shaw looks pale and sweaty, and his hands are shaking so much that he has struggled to place a wire twice. When you quietly ask whether he's all right, he says, \"I'm fine, let's just get this done.\"",
  options: [
    { text: "Tell him clearly that you think he should stop, for the patient's safety.",
      brief: "Patient safety comes first, and a clear statement gives him the chance to pause.",
      detailed: "Your first question was gentle, and he brushed it off. Saying clearly that you're concerned for the patient, and that you think he should stop, is the most direct way of protecting the patient, and gives him the chance to step back without losing face." },
    { text: "Ask the anaesthetist to support you in pausing the operation.",
      brief: "A senior colleague already in theatre can add weight to your concern immediately.",
      detailed: "The anaesthetist shares responsibility for the patient and is present now. Their support makes it much more likely the operation will be paused safely. It ranks second because you should first raise the concern directly with Dr Shaw." },
    { text: "Ask a member of the theatre team to call the consultant to theatre now.",
      brief: "The consultant can take over or supervise, but will take time to arrive.",
      detailed: "The consultant needs to know and may need to take over. Calling them is essential, but the patient is at risk now, which is why stopping the procedure and getting immediate support rank higher." },
    { text: "Report your concerns about Dr Shaw's health to the consultant as soon as the operation has finished.",
      brief: "Raises the concern, but only after the patient has been exposed to the risk.",
      detailed: "The consultant does need to know about Dr Shaw's health. But waiting until the operation is over leaves the patient at risk, when you could act now." },
    { text: "Continue assisting, and ask him after the operation how he is feeling.",
      brief: "Caring towards him, but it leaves the patient at risk.",
      detailed: "Concern for Dr Shaw is appropriate, and he may be unwell. But carrying on as though nothing is wrong puts the patient at risk of harm." }
  ],
  explanation: {
    issue: "This tests whether you speak up when a senior colleague appears unfit to continue a procedure, putting the patient's safety first.",
    keyDetails: "Dr Shaw's hands are shaking and he has struggled with the wire. He looks unwell. He dismissed your first, gentle question. The consultant isn't in theatre.",
    reasoning: "{1} raises the concern directly, {2} brings immediate senior support from someone already present, and {3} gets the consultant. {4} delays action until after the risk, and {5} doesn't act at all.",
    competing: "This is hard because {1}, {2} and {3} would ideally happen almost together. The key ranks them by how quickly each protects the patient: speaking to Dr Shaw is immediate, the anaesthetist is in the room, and the consultant will take time to arrive."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting when a colleague's health may put patients at risk." },
    { ref: "concerns", note: "Raising concerns promptly when patient safety is at risk." }
  ],
  tags: ["unwell colleague", "theatre", "speaking up", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-070", letters: "DFH", format: "multiple_choice", difficulty: "moderate",
  title: "Sedation you haven't been trained to give", setting: "Cardiology / respiratory", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Recognising limits of competence", "Communicating with seniors", "Patient safety"],
  stem:
    "You are an F2 doctor in cardiology. Mr Evans, 64, is booked for an elective DC cardioversion for atrial fibrillation this afternoon. The anaesthetist who usually provides sedation for the list has been called to an emergency.\n\n" +
    "The consultant asks you to give propofol sedation so the list can go ahead. You have never given propofol and haven't been trained in sedation or airway management. The consultant says, \"It's straightforward. I'll talk you through it.\"",
  options: [
    { text: "Explain to the consultant that you haven't been trained to give sedation.",
      brief: "Being honest about your limits protects the patient.",
      detailed: "It can be hard to say no to a consultant, especially when they're keen to help. But explaining clearly that you haven't been trained in sedation or airway management is essential for Mr Evans's safety, and most consultants will respect it." },
    { text: "Ask whether another anaesthetist or a sedation-trained colleague could cover.",
      brief: "Looks for a safe way for the procedure to go ahead.",
      detailed: "There may be another anaesthetist or a trained colleague available later in the afternoon. Suggesting this helps the consultant find a safe solution rather than simply saying no." },
    { text: "Offer to help with the parts of the procedure you are competent in.",
      brief: "Shows willingness and supports the team within your limits.",
      detailed: "You may be able to help with preparing Mr Evans, checking the ECG and defibrillator, or monitoring him under supervision. Offering what you can do safely is constructive and supports the team." },
    { text: "Give the sedation, as the consultant has offered to talk you through it.",
      brief: "Guidance doesn't replace training in sedation and airway management.",
      detailed: "The consultant's offer is well meant, and supervised learning is how skills are gained. But propofol sedation can cause airway compromise and low blood pressure, and managing those requires training you don't have. Being talked through it isn't a safe substitute." },
    { text: "Use midazolam instead, which you have given before for a procedure.",
      brief: "Switching drugs doesn't solve the lack of training in sedation for this procedure.",
      detailed: "Familiarity with one drug in another setting doesn't make you competent to provide sedation for cardioversion. Changing the drug yourself also departs from the planned procedure without discussion." },
    { text: "Ask the nurse on the list whether she could give the sedation instead.",
      brief: "Passes the problem on rather than solving it.",
      detailed: "Some nurses are trained in sedation, but asking without knowing her competence, or whether local policy allows it, shifts the risk rather than addressing it." },
    { text: "Cancel the procedure yourself and rebook it for a day when an anaesthetist is available.",
      brief: "The decision about the list isn't yours to make alone.",
      detailed: "Postponing may well be the outcome, but cancelling without agreement from the consultant or patient bypasses the people responsible for the list and leaves Mr Evans uninformed." },
    { text: "Agree to give the sedation, as the consultant is responsible for the decision.",
      brief: "You remain responsible for your own actions, whoever asked you.",
      detailed: "Seniors are responsible for delegating appropriately, but you remain accountable for what you do. Agreeing to do something you aren't trained to do, because you've been asked, puts the patient at risk." }
  ],
  explanation: {
    issue: "This tests whether you recognise the limits of your competence under pressure from a senior, and help find a safe alternative.",
    keyDetails: "You haven't been trained in sedation or airway management. The consultant is supportive but under pressure to keep the list going. Propofol sedation carries airway and cardiovascular risks.",
    reasoning: "{k1} is honest about your limits, {k2} looks for a safe solution, and {k3} offers what you can do. The distractors either give sedation you aren't trained in ({d1}, {d2}, {d5}), pass on the problem ({d3}), or act beyond your authority ({d4}).",
    competing: "{d1} is the most tempting option: supervised learning is valuable. But sedation needs training in managing complications, not just guidance on giving the drug."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, recognising and working within the limits of your competence." }
  ],
  tags: ["competence", "sedation", "cardioversion", "consultants"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-071", letters: "EBADC", format: "ranking", difficulty: "moderate",
  title: "Staying the night", setting: "Intensive care", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Communication with relatives", "Teamwork", "Compassion"],
  stem:
    "You are an F2 doctor in intensive care. Mr Jones, 58, is sedated and ventilated after a cardiac arrest. He is critically ill, but his condition has been stable today.\n\n" +
    "At 21:00 his wife and two adult children tell you they want to stay at his bedside overnight. The unit normally allows one visitor overnight only in exceptional circumstances, and the nurse in charge has told them that space is needed around the bed for care tonight. The family are upset and ask you to let them stay.",
  options: [
    { text: "Listen to their concerns, and explain why the unit limits overnight visitors.",
      brief: "Understanding their fear, and explaining the reasons, often eases the conflict.",
      detailed: "The family may be frightened he will die in the night without them. Listening, and explaining that the limits are about giving him safe care rather than keeping them away, shows you take their feelings seriously and may help them accept a compromise." },
    { text: "Discuss with the nurse in charge whether one of them could stay, and where the others could rest.",
      brief: "Works with the nursing team to find a compromise.",
      detailed: "The unit's policy allows flexibility in exceptional circumstances. Talking with the nurse in charge about whether one relative could stay, and whether there's a relatives' room nearby, may meet the family's needs while respecting the team's judgement." },
    { text: "Reassure them that the team will phone them straight away if his condition changes.",
      brief: "Helpful reassurance, though it doesn't address their wish to be with him.",
      detailed: "Knowing they'll be called can make leaving easier. It ranks third because it doesn't respond to their wish to stay, which may be possible in part." },
    { text: "Tell them visiting is a nursing matter, so you can't help.",
      brief: "Dismissive, and leaves them feeling unheard.",
      detailed: "The nurse in charge does manage visiting, but refusing to engage leaves a frightened family without support. You can listen and help even if the decision isn't yours." },
    { text: "Let all three stay, telling the nurse in charge it is a medical decision.",
      brief: "Overrides a colleague's judgement about safe care and undermines the team.",
      detailed: "This would please the family, but the nurse in charge has explained why space is needed. Overruling her undermines the team and could compromise his care." }
  ],
  explanation: {
    issue: "This tests how you support a distressed family while respecting the unit's need to provide safe care, working with the nursing team.",
    keyDetails: "Mr Jones is critically ill but stable. The policy allows exceptions. The nurse in charge has explained why space is needed. The family are frightened.",
    reasoning: "{1} listens and explains, {2} looks for a compromise with the nurse in charge, and {3} offers reassurance. {4} dismisses the family and {5} overrides a colleague.",
    competing: "Some would put the discussion with the nurse in charge first. The key starts with listening, because understanding what the family most need shapes the compromise you look for."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, supporting those close to patients; Domain 3, respecting colleagues' roles." }
  ],
  tags: ["relatives", "visiting", "intensive care", "teamwork"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-072", letters: "AFG", format: "multiple_choice", difficulty: "easy",
  title: "Care in the corridor", setting: "Emergency department", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Patient safety", "Raising concerns", "Using proper channels"],
  stem:
    "You are an F2 doctor in the Emergency Department. For several weeks, patients have routinely been cared for on trolleys in a corridor, where there are no call bells or oxygen points.\n\n" +
    "Tonight there are eight patients in the corridor. One, an elderly woman with pneumonia, needs oxygen, and you notice that the portable cylinder beside her is almost empty.",
  options: [
    { text: "Make sure the corridor patients are safe now, starting with the woman needing oxygen.",
      brief: "Immediate risks to patients come first.",
      detailed: "Replacing her oxygen cylinder, and checking that the other corridor patients can be observed and can call for help, deals with the immediate danger. Whatever the wider problem, the patients in front of you need to be safe tonight." },
    { text: "Report the risks through the trust's incident reporting system.",
      brief: "Formal reports create a record the trust has to act on.",
      detailed: "Incident reports show the scale and pattern of a problem, which helps managers make the case for change. Reporting tonight's oxygen problem, and the lack of call bells, is straightforward and expected." },
    { text: "Raise the concern with the ED consultant in charge.",
      brief: "The consultant can act tonight and escalate within the trust.",
      detailed: "The consultant in charge can take immediate steps, such as finding more portable oxygen, and can raise the problem with senior managers. Telling them is a key part of raising a concern properly." },
    { text: "Post about the conditions on social media to draw public attention to them.",
      brief: "Public posts can breach confidentiality and bypass routes that can fix the problem.",
      detailed: "Corridor care is a matter of public concern, and some staff feel strongly about raising awareness. But posting about it risks identifying patients, and bypasses the people who can act on the problem." },
    { text: "Accept the conditions as an unavoidable part of winter pressures.",
      brief: "Normalising an unsafe environment leaves patients at risk.",
      detailed: "Departments are under huge pressure and you may feel powerless. But accepting that patients regularly lack oxygen and call bells means the risks are never addressed." },
    { text: "Contact the Care Quality Commission as your first step.",
      brief: "The trust should have the chance to respond first.",
      detailed: "The CQC can receive concerns from staff, but raising it within the trust is usually the first step, as the trust is best placed to respond quickly." },
    { text: "Decline to see patients in the corridor until conditions improve.",
      brief: "Leaves patients without care, which makes them less safe.",
      detailed: "The conditions are unacceptable, but refusing to see patients puts them at further risk and doesn't change anything." },
    { text: "Encourage the patients in the corridor to make formal complaints to the trust about the conditions.",
      brief: "Places the responsibility for raising concerns on patients.",
      detailed: "Patients are entitled to complain, but it's the responsibility of staff to raise safety concerns. Asking unwell patients to do this shifts that responsibility onto them." }
  ],
  explanation: {
    issue: "This tests whether you protect patients from an immediate risk and raise a systemic safety concern through proper routes.",
    keyDetails: "Corridor care has become routine. There are no call bells or oxygen points, and one patient's oxygen is running out.",
    reasoning: "{k1} deals with the immediate risk, and {k2} and {k3} raise the wider concern formally and with someone who can act tonight. The distractors bypass local routes ({d1}, {d3}), accept the risk ({d2}), harm patients' care ({d4}), or shift responsibility to patients ({d5}).",
    competing: "{d3} is a legitimate route in some circumstances, but raising it within the trust first is usually expected."
  },
  refs: [
    { ref: "concerns", note: "Your duty to raise concerns about patient safety, and the usual order of routes." },
    { ref: "ftsu", note: "Freedom to Speak Up guardians as an additional route for staff." }
  ],
  tags: ["corridor care", "raising concerns", "emergency department", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-073", letters: "CEADB", format: "ranking", difficulty: "moderate",
  title: "After the stillbirth", setting: "Obstetrics & gynaecology", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Self-care", "Seeking support", "Fitness to work"],
  stem:
    "You are an F2 doctor in obstetrics. Today you were involved in the delivery of a stillborn baby at 38 weeks. You spent time with the parents afterwards, and they were devastated.\n\n" +
    "This evening at home, you can't stop thinking about it, and you feel tearful and unsettled. You are due back on the labour ward at 08:00 tomorrow.",
  options: [
    { text: "Talk to your registrar or consultant about how you are feeling.",
      brief: "Seniors understand how affecting these events are, and can offer support and advice.",
      detailed: "Senior colleagues have usually been through similar experiences and expect juniors to be affected. Talking to them helps you process what happened, and lets them support you, for example with your duties tomorrow." },
    { text: "Ask about a team debrief after the event.",
      brief: "Debriefs help the whole team reflect and support each other.",
      detailed: "Many units hold debriefs after stillbirths. They help staff understand what happened and see they aren't alone in being affected. It ranks second because it may not happen straight away." },
    { text: "Contact the trust's staff support service for confidential support.",
      brief: "Useful support, though less immediate than talking to your team.",
      detailed: "Staff support services offer confidential help, and they're valuable if your distress continues. It ranks third because your own team can offer support in the context of tomorrow's shift." },
    { text: "Phone in sick tomorrow morning so you have time to recover.",
      brief: "Avoidance at short notice, without support.",
      detailed: "Taking time off can be right if you aren't fit to work, but phoning in sick at short notice, without talking to anyone, leaves the ward short and doesn't help you process what happened." },
    { text: "Have a few drinks this evening to help you switch off before tomorrow.",
      brief: "An unhelpful way of coping, and risky before an early shift on the labour ward.",
      detailed: "Wanting to switch off is understandable, and many people turn to alcohol after a hard day. But it doesn't help you process what happened, and drinking the evening before an 08:00 labour ward shift could affect your fitness to work. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you recognise the effect of a distressing event on you and seek appropriate support, so you can work safely.",
    keyDetails: "The event was very distressing. You are affected this evening and due back on the labour ward tomorrow morning.",
    reasoning: "{1} gets immediate support from seniors, {2} uses the team's debrief, and {3} uses confidential support. {4} avoids the problem at the team's expense, and {5} is an unhelpful way of coping that could affect your work tomorrow.",
    competing: "{1}, {2} and {3} can all be done, and any of them is reasonable. The key puts your seniors first because they can support you before tomorrow's shift, while a debrief and staff support may take longer to arrange. Being tearful the same evening is a normal reaction, which is why phoning in sick without talking to anyone ranks low."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, looking after your own health and wellbeing." },
    { ref: "practitionerhealth", note: "Confidential support for doctors' mental health." }
  ],
  tags: ["wellbeing", "stillbirth", "debrief", "obstetrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-074", letters: "CDE", format: "multiple_choice", difficulty: "hard",
  title: "Consent through her daughter", setting: "General medical ward", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Consent", "Using interpreters", "Patient advocacy"],
  stem:
    "You are an F2 doctor on a general medical ward. Mrs Rahman, 67, speaks little English. She is due to have a gastroscopy tomorrow morning to investigate weight loss.\n\n" +
    "Looking at her consent form, you see from the notes that consent was taken yesterday with her 15-year-old granddaughter interpreting. When you greet Mrs Rahman, she smiles and nods, but doesn't appear to understand your questions.",
  options: [
    { text: "Arrange a professional interpreter to check her understanding before the procedure.",
      brief: "Consent needs to be confirmed in a language she understands.",
      detailed: "A professional interpreter, in person or by phone or video, allows you or the endoscopy team to check what she understands about the procedure, its risks and the alternatives, and whether she wants to go ahead." },
    { text: "Let the doctor who took consent know about your concern.",
      brief: "They need to know so the consent can be checked and the practice not repeated.",
      detailed: "Raising this with the colleague who took consent, constructively, gives them the chance to put it right and learn from it. It also makes sure the endoscopy team know consent needs to be confirmed." },
    { text: "Make sure her need for an interpreter is clearly recorded in her notes.",
      brief: "Prevents the same problem at future appointments.",
      detailed: "A clear note of her preferred language, and that a professional interpreter is needed, helps every member of the team communicate with her properly." },
    { text: "Accept the consent, as her granddaughter speaks fluent English.",
      brief: "A child shouldn't interpret for consent, and you can't be sure Mrs Rahman understood.",
      detailed: "Fluency isn't the issue. A 15-year-old may not understand medical terms, may soften information about possible cancer, and shouldn't be put in that position. Without a professional interpreter, you can't be confident the consent is valid." },
    { text: "Ask a member of the domestic staff who speaks her language to help.",
      brief: "Untrained staff may misinterpret, and it may compromise her privacy.",
      detailed: "Using a bilingual staff member can seem a practical solution, and some trusts allow trained bilingual clinical staff to interpret. But a member of domestic staff isn't trained in medical interpreting and may not keep her information confidential." },
    { text: "Cancel the gastroscopy until a family member can come in to interpret.",
      brief: "Unnecessary delay, and family members aren't the right interpreters for consent.",
      detailed: "Delay may be needed if an interpreter can't be found, but cancelling now is premature, and relying on another family member doesn't solve the problem." },
    { text: "Ask her granddaughter to interpret again, going through the form more carefully.",
      brief: "Repeats the problem of using a child to interpret for consent.",
      detailed: "Taking more time is well meant, but it doesn't address why a child shouldn't interpret, especially for information that may be sensitive." },
    { text: "Use a translation app on your phone to confirm she understands.",
      brief: "Apps can mistranslate medical information and aren't suitable for consent.",
      detailed: "Translation apps can help with simple communication, which makes this tempting. But they can mistranslate medical terms and can't check understanding, so they aren't a reliable basis for consent." }
  ],
  explanation: {
    issue: "This tests whether you recognise that consent obtained through a child interpreter may not be valid, and make sure the patient can make an informed decision.",
    keyDetails: "Her granddaughter is 15. The procedure is investigating weight loss, which may involve difficult news. Mrs Rahman doesn't appear to understand you.",
    reasoning: "{k1} makes sure her consent is properly informed, {k2} raises it with the colleague involved, and {k3} prevents a repeat. The distractors either accept consent that may be invalid ({d1}, {d4}), use unsuitable interpreters ({d2}, {d5}), or delay unnecessarily ({d3}).",
    competing: "{d2} and {d5} are the hard distractors, as both seem practical. Trained bilingual clinical staff can be appropriate in some trusts, but domestic staff and apps aren't a reliable basis for consent."
  },
  refs: [
    { ref: "consent", note: "Making sure patients have the information they need in a way they can understand, including using interpreters." }
  ],
  tags: ["consent", "interpreters", "language", "family members"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-075", letters: "BCAD", format: "ranking", difficulty: "moderate",
  title: "Countersigning a passport", setting: "General practice", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Probity", "Honest communication", "Helping patients"],
  stem:
    "You are an F2 doctor in a GP practice. Mr Novak, 40, whom you have seen twice in the last three months for his asthma, asks you to countersign his passport application. He is travelling soon and says it would really help him.\n\n" +
    "The form asks the countersignatory to confirm that they have known the applicant for at least two years.",
  options: [
    { text: "Explain that you can't countersign, as you haven't known him for two years.",
      brief: "Honest and clear, and avoids signing a false statement.",
      detailed: "The countersignatory confirms that they have known the applicant for at least two years. Signing would mean making a false declaration. Explaining kindly why you can't do it is honest and helps him understand what he needs." },
    { text: "Suggest he asks someone who meets the requirements, such as a longstanding friend.",
      brief: "Helps him find a way forward.",
      detailed: "Pointing him towards someone who has known him for the required time, such as a friend, neighbour or colleague, helps him solve the problem. It ranks second because it follows from explaining why you can't sign." },
    { text: "Offer to ask whether a GP partner who has looked after him for years could sign it.",
      brief: "Well meant, but knowing someone only as a patient may not meet the requirements.",
      detailed: "A partner may have treated him for longer, but countersignatories are expected to know the applicant personally, not just professionally. This puts a colleague in a difficult position." },
    { text: "Countersign the application, as you are a doctor and know who he is.",
      brief: "Makes a false declaration on an official document.",
      detailed: "You can confirm who he is, which makes this tempting. But signing a declaration that you have known him for two years, when you haven't, is dishonest." }
  ],
  explanation: {
    issue: "This tests whether you keep to the truth when signing official documents, even when a patient's request seems harmless.",
    keyDetails: "You have known him for three months, as a patient. The form asks you to confirm two years' acquaintance.",
    reasoning: "{1} declines honestly, {2} helps him find an appropriate countersignatory, and {3} is well meant but doesn't meet the requirements. {4} is a false declaration.",
    competing: "{3} may seem helpful, but countersignatories should know the applicant personally, and this places a colleague under pressure."
  },
  refs: [
    { ref: "passport", note: "Who can countersign a passport application, and how long they must have known the applicant." },
    { ref: "gmp", note: "Domain 4, honesty when signing documents." }
  ],
  tags: ["probity", "forms", "passport", "general practice"]
}
];
