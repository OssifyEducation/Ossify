// Practice batch P01, part 1 (sjt-006 to sjt-015). Written in key order; see scripts/compile-sjt-drafts.js.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-006", letters: "ADF", format: "multiple_choice", difficulty: "moderate",
  title: "A scan result in the corridor", setting: "Emergency department", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Breaking bad news", "Confidentiality", "Seeking senior support"],
  stem:
    "You are an F2 doctor in the Emergency Department. Daniel, 24, came in with three weeks of worsening headaches and vomiting. His CT head has just been reported as showing a large mass with surrounding swelling, likely to be a tumour. Your registrar has referred him to the neurosurgical team, who will review him within the next couple of hours. Daniel knows he has had a scan but has not yet been told the result.\n\n" +
    "As you leave the cubicle area, his mother arrives and stops you in the corridor. She is breathless from rushing and asks, \"What have they found? Please just tell me.\"",
  options: [
    { text: "Explain to his mother that you need to speak with Daniel first, and that you will ask him whether he would like her there.",
      brief: "Daniel is an adult with capacity, so the result is his to hear first, and this response respects that without shutting his mother out.",
      detailed: "However frightened she is, his mother has no right to Daniel's information ahead of him, and telling her in a corridor would take away his chance to decide who hears what. Most patients in Daniel's position want family with them, so offering to ask him is likely to bring her into the room within minutes. Saying this warmly, and explaining why, usually defuses the immediate pressure far better than a flat refusal." },
    { text: "Ask your registrar to join you when Daniel is told the result.",
      brief: "A suspected brain tumour is a conversation that should be led or supported by someone senior, and it needs a plan.",
      detailed: "Daniel will ask questions you may not be able to answer, about surgery, prognosis or what the next hours hold, and a registrar can answer more of them and coordinate with neurosurgery. Planning it together also avoids the common failure in a busy department, where everyone assumes someone else has done it. This is not passing the task on: it makes sure the conversation happens well and soon." },
    { text: "Find a quiet room, check what Daniel already understands, and explain honestly what the scan shows and what happens next.",
      brief: "Daniel needs to hear the result honestly, in private, at a pace that suits him, and with a clear account of the next steps.",
      detailed: "Starting from what he already knows or fears lets you pitch the conversation correctly. Being honest that the scan shows a mass that is probably a tumour, while being clear about what is not yet known, respects him and avoids false reassurance that would unravel within hours. A concrete plan (who he will see next, when, and what they will do) gives him something to hold on to." },
    { text: "Tell his mother quietly that the scan has shown a growth, so she can prepare herself before seeing him.",
      brief: "Well meant, but it discloses an adult's diagnosis to a relative without his consent, before he has heard it himself.",
      detailed: "The impulse is kind, because it spares the mother a shock at the bedside. But Daniel is 24 and entitled to hear his own diagnosis first and to decide who else is told. If he later learns his mother knew before he did, it may damage his trust in the team and complicate his relationship with her at a very difficult time." },
    { text: "Tell Daniel that his scan needs a specialist to look at it, and that the neurosurgeons will explain more when they arrive.",
      brief: "Not a lie, but it holds back a result he is entitled to and will very likely ask about directly.",
      detailed: "There is sense in letting the specialist team give details about treatment, but Daniel is waiting anxiously and the key finding is already known. If he asks what the scan showed and receives a vague answer, he may later feel misled. It is better to explain the main finding now, with appropriate support, and leave the detailed treatment discussion to neurosurgery." },
    { text: "Ask the nurse looking after Daniel to tell him the result while you go and see your next patient.",
      brief: "Delegates a significant and difficult conversation to someone who did not order the scan and may not be able to answer his questions.",
      detailed: "Nurses are often skilled at difficult conversations, but this one belongs to the medical team, who know the clinical picture and the plan with neurosurgery. Handing it over because the department is busy risks the news being delivered without the information Daniel will want, and puts the nurse in an unfair position." },
    { text: "Give his mother a leaflet about brain tumours to read while she waits to see Daniel.",
      brief: "Discloses the likely diagnosis indirectly, and does so before Daniel himself knows.",
      detailed: "Handing over a leaflet amounts to telling her the diagnosis, just without saying it. It has the same confidentiality problem as telling her outright, and it leaves her to digest frightening and possibly irrelevant information on her own in a corridor." },
    { text: "Ask his mother to wait in the relatives' room until the neurosurgeons have seen Daniel, and tell Daniel nothing until then either.",
      brief: "Delays both conversations for hours and leaves two anxious people without information that is already known.",
      detailed: "Putting everything on hold until the specialists arrive feels safe, but it leaves Daniel lying in a cubicle with his anxiety and his mother cut off from him. The neurosurgical review may take longer than expected, and the core result does not depend on it. Delaying in this way also fails to respond to what Daniel himself might want." }
  ],
  explanation: {
    issue: "This tests how you handle serious news when a relative is pressing for information before the patient has heard it, and whether you can be both honest and kind under that pressure.",
    keyDetails: "Daniel is 24 and has capacity, so the information is his. He has not yet been told. The finding is serious but the full picture is uncertain until neurosurgery review. His mother is distressed and physically in front of you, which is exactly what makes a corridor disclosure tempting.",
    reasoning: "The three keyed actions together make sure Daniel hears the news first ({k1}), from the right people ({k2}), and in the right way ({k3}). His mother is not ignored: offering to ask Daniel whether he wants her there is the quickest route to her being with him. The distractors either breach his confidentiality ({d1}, {d4}), delay or blur the truth ({d2}, {d5}), or hand the task to someone who should not be carrying it ({d3}).",
    competing: "Some candidates feel {d2} is the safer choice because the specialists will know more. The core finding is already established, though, and Daniel is waiting. Telling him honestly now, with the detailed treatment discussion left to neurosurgery, is kinder than leaving him to guess."
  },
  refs: [
    { ref: "confidentiality", note: "Sharing information with those close to the patient: with consent, and respecting the patient's wishes." },
    { ref: "consent", note: "Sharing information patients want or need, honestly and at their pace." },
    { ref: "gmp", note: "Domain 2, 'Patients, partnership and communication'." }
  ],
  tags: ["breaking bad news", "confidentiality", "relatives", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-007", letters: "DAECB", format: "ranking", difficulty: "hard",
  title: "A drain that isn't there", setting: "General surgery", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Trust and professionalism", "Colleagues, culture and safety"],
  competencies: ["Accurate records", "Raising concerns with colleagues", "Patient safety"],
  stem:
    "You are an F2 doctor in general surgery. Yesterday you assisted your registrar, Mr Bhatt, with an emergency laparoscopic appendicectomy on Mrs Ellis, 52. No drain was inserted.\n\n" +
    "Reviewing Mrs Ellis on this morning's ward round, you notice that Mr Bhatt's operation note says that a drain was placed in the pelvis. The nursing chart has a column for drain output, which reads \"nil\" for the last two entries. Mrs Ellis is recovering well. Mr Bhatt is in clinic for the rest of the morning but can be reached by bleep.",
  options: [
    { text: "Bleep Mr Bhatt to point out that the operation note mentions a drain that wasn't inserted, and ask him to correct it.",
      brief: "Raises the discrepancy directly with the person who wrote the note, who can correct it properly.",
      detailed: "The most likely explanation is a template or memory slip, and Mr Bhatt is the right person to correct his own note with a dated addendum. Bleeping him is quick, respectful, and gets the record fixed at its source. It also avoids the confusion that follows when two doctors' entries contradict each other with no explanation." },
    { text: "Tell the nurse looking after Mrs Ellis that no drain was inserted, so she doesn't rely on the note or the drain chart.",
      brief: "A sensible interim safety step, though it leaves the inaccurate operation note in place.",
      detailed: "A nurse who believes there is a drain may chart 'nil' output and later worry it is blocked, or escalate when she cannot find it. Telling her directly removes that risk straight away. It ranks second because it deals with today's confusion but not the record itself, which other clinicians will read for the rest of Mrs Ellis's care." },
    { text: "Complete an incident report about the inaccurate operation note without speaking to Mr Bhatt.",
      brief: "Reporting has value, but going straight to a formal report for what is probably a simple slip is a disproportionate first step.",
      detailed: "Incident reports help organisations spot patterns, for example a theatre template that pre-fills drains. Filing one is not wrong in itself. Doing it without first giving Mr Bhatt the chance to correct a likely error, though, is heavy-handed, and it leaves the note uncorrected in the meantime. It still ranks above the options that leave the error unaddressed or make it worse." },
    { text: "Leave the note as it is, as Mr Bhatt is the senior surgeon and may know something you don't.",
      brief: "You were in theatre and saw what happened, so deferring to seniority here leaves a known inaccuracy in the record.",
      detailed: "Respecting seniority is reasonable when you are genuinely unsure, but you assisted at the operation and know no drain was placed. An uncorrected operation note can mislead the ward team and anyone who later reviews Mrs Ellis's care. Staying quiet also denies Mr Bhatt the chance to fix a mistake he would almost certainly want to know about." },
    { text: "Edit the operation note on the electronic record yourself to remove the reference to the drain.",
      brief: "Altering another clinician's entry, even to correct it, undermines the integrity of the record.",
      detailed: "This is the most damaging option, despite the good intention. Medical records must show who wrote what and when; changing a colleague's entry, rather than adding your own dated note, erases that trail and could look like tampering if the record is ever reviewed. Correct entries are made by addition, never by editing someone else's words." }
  ],
  explanation: {
    issue: "This tests what you do when you know a senior colleague's documentation is wrong, and whether you correct a record in a way that keeps patients safe and keeps the record trustworthy.",
    keyDetails: "You assisted at the operation, so you are certain no drain was placed. The error is in an operation note, which other teams rely on. Mrs Ellis is well, so there is no emergency, and Mr Bhatt is reachable, which makes speaking to him first practical.",
    reasoning: "{1} fixes the problem at its source and is quick to do. {2} protects Mrs Ellis while the note is corrected. {3} has some merit as a reporting step but skips the obvious conversation. {4} and {5} both leave the record compromised: {4} by passive acceptance, and {5}, worse, by altering a colleague's entry.",
    competing: "Some would rank {2} first because it addresses the ward risk immediately. That is reasonable, and near-miss scoring treats the two as adjacent; the key puts {1} first because the risk to Mrs Ellis is low and correcting the note also corrects the drain chart. The ordering of {4} and {5} is the harder call: one leaves a known error alone, the other changes another doctor's record. Interfering with a record is treated as the more serious breach of probity."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, 'Acting with honesty and integrity'; keeping clear, accurate records." },
    { ref: "concerns", note: "Acting on concerns about patient safety, starting locally where appropriate." }
  ],
  tags: ["documentation", "probity", "surgery", "challenging seniors"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-008", letters: "BEH", format: "multiple_choice", difficulty: "moderate",
  title: "The locum's unfinished list", setting: "General practice", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Colleagues, culture and safety", "Patients, partnership and communication"],
  competencies: ["Continuity of care", "Patient safety", "Candour"],
  stem:
    "You are an F2 doctor in a GP practice. On Monday morning the practice manager asks you to look at the task list left by a locum GP who worked on Thursday and Friday and has now left.\n\n" +
    "Most tasks are routine, but one stands out: on Thursday the locum saw Mrs Novak, 49, with a new breast lump and documented \"urgent suspected cancer referral\". No referral has been sent. Several other tasks on the list, such as blood results and repeat prescriptions, are also marked incomplete.",
  options: [
    { text: "Make sure Mrs Novak's urgent referral is sent today, checking her notes and involving your supervisor if needed.",
      brief: "This is the time-critical task on the list, and four days have already been lost.",
      detailed: "Urgent suspected cancer referrals exist to get patients seen quickly, and every extra day matters to Mrs Novak. Reviewing the consultation note confirms what was found and what was intended, and you can then send the referral yourself or with your supervisor, depending on the practice's arrangements for trainees. The point is that it leaves the building today." },
    { text: "Tell the practice manager and duty GP, so the rest of the list is reviewed and the lost referral is logged.",
      brief: "Makes sure every unfinished task gets an owner and that the practice learns how a referral was lost.",
      detailed: "You have found one serious gap; there may be others among the blood results and prescriptions. The duty GP can triage the remaining tasks, and recording a significant event lets the practice look at why a locum could leave without handing over, which is likely to happen again unless something changes. This turns a one-off rescue into a safer system." },
    { text: "Phone Mrs Novak to explain the delay, apologise, and tell her when to expect her appointment.",
      brief: "She has been waiting for a call that was never going to come, and she deserves to know why.",
      detailed: "A delay in an urgent cancer referral is exactly the kind of event patients should be told about promptly and honestly. Mrs Novak may already be worried that she has not been contacted. Explaining, apologising and giving her a timescale respects her, rebuilds trust, and means she knows to chase it if she hears nothing." },
    { text: "Email the locum to ask her to come back and complete her outstanding tasks, as they were her patients.",
      brief: "The locum is not available, and waiting for her to respond leaves an urgent referral unsent.",
      detailed: "It is reasonable to let the locum know what happened, perhaps through the agency, so she can reflect on it. But relying on her to return delays the referral and the other tasks indefinitely. The work has passed to the practice, and someone there needs to act today." },
    { text: "Leave the list for the locum agency to resolve, as the locum was working on the agency's behalf.",
      brief: "Responsibility for the practice's patients does not transfer to an agency.",
      detailed: "The agency supplies the locum but has no role in the clinical care of Mrs Novak or the other patients. Treating this as the agency's problem means no one acts on the referral or the results. The practice holds responsibility for its patients' continuing care, and you are now aware of the gap." },
    { text: "Send the referral today, and let Mrs Novak's hospital appointment letter explain the next steps to her.",
      brief: "Fixes the clinical gap but leaves her uninformed about a delay that may matter to her.",
      detailed: "Sending the referral is the most important action, which is why this option is tempting. But a few days can matter in a suspected cancer pathway, and Mrs Novak may notice the delay herself. Not telling her denies her an honest explanation and an apology, and may damage her trust if she finds out later." },
    { text: "Work through the whole list yourself over lunch, so that the duty GP and the practice aren't disrupted.",
      brief: "Conscientious, but it hides a system failure and may leave tasks outside your competence or knowledge.",
      detailed: "Clearing the list quietly may feel helpful, but some tasks, such as interpreting results for patients you don't know, may need a GP's input. It also means no one learns that a locum left without handing over, so the same thing will happen again. Good intentions don't replace telling the people responsible for the practice." },
    { text: "Report the locum to the GMC for leaving the practice without handing over her outstanding work.",
      brief: "A disproportionate response to what is, at least initially, a handover failure that needs local review.",
      detailed: "There is no suggestion yet of a pattern or of a risk that local processes cannot manage. The practice's significant event process and feedback to the agency are the proportionate routes. A regulator referral might become relevant if a review revealed serious or repeated concerns, but it is not a first step and does nothing for Mrs Novak today." }
  ],
  explanation: {
    issue: "This tests how you deal with loose ends left by someone else: getting the urgent clinical task done, making the system safe, and being honest with the patient affected.",
    keyDetails: "The urgent referral is four days late and concerns a possible cancer. The locum has gone, so the practice must act. The list contains other incomplete tasks, which means the problem is wider than one patient.",
    reasoning: "{k1} deals with the most urgent clinical risk, {k2} makes sure nothing else on the list is missed and that the practice learns from it, and {k3} is honest with the patient. Together they resolve the situation for Mrs Novak and for the practice. The distractors push responsibility elsewhere ({d1}, {d2}), skip candour ({d3}), hide the system failure ({d4}) or escalate out of proportion ({d5}).",
    competing: "{d4} appeals to conscientious candidates, and in a small practice you might well help with the list. The difference is doing it openly, with the duty GP aware and the incident recorded, rather than quietly absorbing a failure that will recur."
  },
  refs: [
    { ref: "candour", note: "Telling patients promptly when something has gone wrong with their care, and apologising." },
    { ref: "gmp", note: "Domain 3, 'Responding to safety risks'; continuity and coordination of care." }
  ],
  tags: ["handover", "general practice", "cancer referral", "significant event"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-009", letters: "BDCEA", format: "ranking", difficulty: "moderate",
  title: "Waiting for her brother", setting: "Intensive care", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Compassionate communication", "End-of-life care", "Working within your role"],
  stem:
    "You are an F2 doctor on the intensive care unit. Sophie, 29, has a catastrophic brain injury after a cardiac arrest. After several days of assessment, the consultant has agreed with her parents that continuing intensive treatment is not in her best interests, and the plan is to withdraw ventilation this afternoon. She is sedated and comfortable.\n\n" +
    "Her parents find you at the bedside. Her brother is flying back from Australia and lands tomorrow morning. They ask, tearfully, whether the withdrawal could wait until he arrives so he can say goodbye. The consultant is in a meeting for the next hour.",
  options: [
    { text: "Let the consultant know about the family's request as soon as possible, so the timing can be reconsidered with them.",
      brief: "The request is reasonable and the decision about timing belongs to the consultant, who needs to know about it now.",
      detailed: "Accommodating a family's wishes about the timing of withdrawal is often possible, particularly when the patient is stable and comfortable, as Sophie is. But it is a decision for the consultant, who will weigh it against Sophie's best interests and the unit's circumstances. Getting the message to them promptly, perhaps through the nurse in charge if the meeting cannot be interrupted, gives the request the best chance of being met." },
    { text: "Tell the parents that you will pass on their request straight away, and ask whether there is anything else that would help them in the meantime.",
      brief: "Responds to the family with compassion and honesty, without promising something that isn't yours to decide.",
      detailed: "The parents need to know they have been heard, and they may have other wishes, such as music, particular visitors or religious support, that the team can help with. Being clear that you will take their request to the consultant, rather than deciding it yourself, keeps expectations realistic. It ranks just below informing the consultant only because the request cannot be answered until the consultant hears it." },
    { text: "Ask the nurse to suggest to the family that her brother could join by video call if the withdrawal goes ahead today.",
      brief: "A thoughtful option to have in reserve, but suggesting it now pre-empts a decision that hasn't been made.",
      detailed: "Video calls have helped many families at the end of life, and it may be a useful fallback if the consultant decides the withdrawal cannot be delayed. Raised now, before the request has even been considered, it may come across as the team having already said no. It is better offered later, once the family has an answer." },
    { text: "Agree to delay the withdrawal until her brother arrives, as it seems a reasonable request.",
      brief: "Compassionate, but you would be promising something that is not your decision to make.",
      detailed: "The request may well be granted, which is why agreeing feels natural. But if the consultant decides otherwise, perhaps because of Sophie's condition or the unit's circumstances, the family would face a reversal at the worst possible time. It is kinder to be honest that you will ask on their behalf than to promise and then retract." },
    { text: "Explain that the decision has been made with the consultant and the timing cannot be changed.",
      brief: "Inaccurate and unkind: the timing may well be flexible, and the family are not told so.",
      detailed: "Treating the timing as fixed, when nobody has considered the request, closes off something that matters enormously to the family. It may leave them with lasting regret and a sense that the team did not care about them. Of the five options, it is the only one that both gives wrong information and shuts the door on their request." }
  ],
  explanation: {
    issue: "This tests how you respond compassionately to a grieving family's request at the end of life, while staying honest about what you can and cannot decide.",
    keyDetails: "Sophie is stable and comfortable, so a short delay is unlikely to cause her harm. Her brother arrives tomorrow. The decision to withdraw was made by the consultant with the family, so any change in timing is also the consultant's call. The consultant is busy but reachable within the hour.",
    reasoning: "{1} gets the request to the person who can decide it, and {2} supports the family honestly while they wait. {3} is a sensible fallback offered too early. {4} and {5} are the weakest because each makes a decision that isn't yours: {4} promises a delay that may not happen, and {5} refuses one that may well be possible.",
    competing: "The closest call is between {1} and {2}, which near-miss scoring treats as adjacent. You would do both within minutes, and the order matters less than doing both. The ordering of {4} and {5} reflects that a premature yes, though risky, comes from compassion, whereas an inaccurate no causes certain harm."
  },
  refs: [
    { ref: "eol", note: "Involving those close to the patient in decisions, including the timing of withdrawal." },
    { ref: "gmp", note: "Domain 2, 'Patients, partnership and communication'." }
  ],
  tags: ["end of life", "intensive care", "relatives", "withdrawal of treatment"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-010", letters: "CDG", format: "multiple_choice", difficulty: "easy",
  title: "A hypo on the children's ward", setting: "Paediatrics", attribute: P,
  topic: "An impaired or unwell colleague",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Patient safety", "Managing health risks"],
  stem:
    "You are an F2 doctor on a paediatric ward. Your colleague Tom, another F2, has type 1 diabetes. Halfway through a busy late shift you find him sweaty and confused at the computer; his capillary glucose is 2.6 mmol/L. You give him glucose tablets and stay with him, and 15 minutes later his glucose is 4.8 mmol/L and he seems himself again.\n\n" +
    "Tom thanks you and says he's fine to carry on: the ward is short-staffed and he has three hours of the shift left. He asks you not to make a fuss.",
  options: [
    { text: "Make sure Tom eats a longer-acting carbohydrate and rechecks his glucose before doing anything else.",
      brief: "Completes the treatment of his hypoglycaemia so it doesn't recur within the hour.",
      detailed: "Glucose tablets raise the level quickly but briefly; without something longer-acting, such as a sandwich or biscuits, the glucose may fall again. Rechecking confirms that the recovery is holding. This is basic hypoglycaemia management and is the first thing Tom needs, whatever happens next." },
    { text: "Suggest Tom stops clinical work for now, and help him let the registrar know so cover can be arranged.",
      brief: "Thinking and judgement can take time to recover after a hypo, and he is caring for children.",
      detailed: "Even when someone feels normal, concentration and judgement may lag behind the glucose reading, and a prescribing error on a paediatric ward could be serious. Stepping back from clinical work for a period is the safe choice. Telling the registrar is not about reporting Tom: it is how the ward gets cover so that his patients are looked after and he doesn't feel pressured to return too soon." },
    { text: "Later, ask Tom privately whether occupational health or his diabetes team could help him manage shifts.",
      brief: "Looks after Tom beyond tonight, recognising that long shifts can make diabetes harder to manage.",
      detailed: "A single hypo on a long shift may be a one-off, or it may reflect missed meals and erratic rotas. Occupational health can recommend adjustments such as protected breaks, and his diabetes team can review his regimen. Raising it privately and supportively, rather than in the middle of the ward, makes it more likely he will accept help." },
    { text: "Let him carry on with his patients, as his glucose is now normal and the ward badly needs him.",
      brief: "A normal reading 15 minutes after a hypo doesn't mean he is safe to make clinical decisions for children.",
      detailed: "The staffing pressure is real and it is what makes this option tempting. But returning him to clinical work immediately places patients at risk if his recovery isn't complete or his glucose falls again. A short gap, with the registrar aware, protects both the children and Tom." },
    { text: "Report Tom to the GMC, as a doctor who becomes confused at work may be a risk to patients.",
      brief: "Wholly disproportionate: this is a one-off episode of a managed condition, handled promptly.",
      detailed: "The GMC is concerned with doctors whose health poses a risk to patients that they are not managing. Tom recognised nothing at first, but he accepted treatment and has a manageable condition. A supportive local response, with occupational health involved if needed, is the right route." },
    { text: "Agree to keep the episode between the two of you, so that it doesn't count against him in his training.",
      brief: "Loyal, but it leaves the ward unaware that a doctor may not be fully fit for the next hour or so.",
      detailed: "Tom's worry about his training is understandable, and you can reassure him that a hypo on shift is a health matter, not a disciplinary one. But agreeing to secrecy means the registrar does not know to arrange cover, and patients may be affected if he isn't fully recovered." },
    { text: "Take over all of Tom's patients yourself for the rest of the shift, so that he can rest in the doctors' mess.",
      brief: "Generous, but doubling your workload unseen is unsafe, and no senior knows the ward is short.",
      detailed: "Covering for a colleague is a natural instinct. But silently taking on two doctors' patients on a busy shift raises the chance of mistakes, and if anything goes wrong no one will know why. The registrar needs to know so that the workload can be shared or covered properly." },
    { text: "Tell the ward manager that, after tonight, Tom shouldn't be working on the children's ward.",
      brief: "An overreaction that misrepresents a well-managed condition and could be discriminatory.",
      detailed: "Many doctors with type 1 diabetes work safely in every specialty. A single hypo does not mean Tom is unfit for paediatrics, and raising it in these terms with the ward manager could harm his career unfairly. Any adjustments should come through occupational health, with Tom involved." }
  ],
  explanation: {
    issue: "This tests how you respond when a colleague's health temporarily affects their fitness to work: keeping patients safe while treating the colleague with kindness and discretion.",
    keyDetails: "Tom's glucose has recovered, but only just, and he is caring for children. The ward is short, which is the pressure pushing him back to work. He asks you not to make a fuss, which tests whether you can be supportive without colluding.",
    reasoning: "{k1} completes his treatment, {k2} keeps patients safe and gets the ward support, and {k3} looks after Tom in the longer term. The distractors either put patients at risk ({d1}, {d3}, {d4}) or overreact in ways that would be unfair to him ({d2}, {d5}).",
    competing: "{d4} is the tempting one here. It comes from kindness, but hiding the gap from the registrar makes the shift less safe for everyone."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, 'Managing risks posed by your health' and 'Responding to safety risks'." },
    { ref: "concerns", note: "Acting promptly when a colleague's health may put patients at risk, starting with local support." }
  ],
  tags: ["colleague health", "diabetes", "paediatrics", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-011", letters: "ECBAD", format: "ranking", difficulty: "moderate",
  title: "Will I need an operation?", setting: "Orthopaedics", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development", "Patients, partnership and communication"],
  competencies: ["Recognising limits", "Honest communication", "Managing uncertainty"],
  stem:
    "You are an F2 doctor on an orthopaedic ward. Mrs Clarke, 71, was admitted this afternoon after a fall, with a fracture of her right shoulder. Her CT scan has been reported as showing a displaced three-part fracture of the proximal humerus. Whether to operate will be decided by the consultant at tomorrow morning's trauma meeting.\n\n" +
    "On the evening ward round, Mrs Clarke tells you she has been looking at her scan report on the patient app. She is anxious and asks, \"Does this mean I need an operation? I need to know whether to cancel my granddaughter's wedding next month.\"",
  options: [
    { text: "Explain the scan in plain terms, say the consultant will discuss treatment tomorrow, and note her questions.",
      brief: "Honest about what is known and what isn't, and makes sure her concerns reach the person who will decide.",
      detailed: "Mrs Clarke is entitled to understand her own report, and explaining it in plain terms reduces the fear that technical language often creates. Being clear that the treatment decision rests with the consultant, who will see her tomorrow, sets an honest expectation. Writing down her questions, including the wedding, makes sure they are answered rather than lost between shifts." },
    { text: "Ask the on-call registrar whether he could talk her through the likely options this evening.",
      brief: "A reasonable step if he is free, though the decision will still not be made until tomorrow.",
      detailed: "The registrar can talk about likely options with more authority than you, which might ease her anxiety tonight. It ranks second because the on-call registrar may be busy with emergencies, and even he can't give a definite answer before the trauma meeting. It is a good supplement to an honest explanation, not a substitute for one." },
    { text: "Tell her that you are not able to discuss her scan, and that she will need to wait for the consultant.",
      brief: "Avoids overstepping, but withholds information she is entitled to and leaves her anxious overnight.",
      detailed: "You are right not to predict the treatment decision, which is what makes this tempting. But refusing to discuss a report she has already read leaves her alone with frightening terminology for a whole night. You can explain what the scan shows without deciding what will be done about it." },
    { text: "Tell her that because the fracture is displaced, she will probably need an operation to fix it.",
      brief: "Gives a prediction you are not in a position to make, which may turn out to be wrong.",
      detailed: "Displaced proximal humerus fractures in older patients are often managed without surgery, depending on many factors the consultant will weigh. A confident prediction from you might lead her to cancel plans unnecessarily, or leave her feeling misled if the plan changes. It is a well-meant answer that goes beyond your competence." },
    { text: "Reassure her that operations are rarely done at her age, so she shouldn't worry about the wedding.",
      brief: "Speculative, possibly wrong, and makes an assumption about treatment based on her age.",
      detailed: "This combines the problems of the previous option with an unfounded generalisation. Age alone does not decide whether a fracture is fixed; her function, bone quality and wishes all matter. False reassurance may lead to greater distress tomorrow, and suggesting age rules out an option is a poor basis for any treatment discussion." }
  ],
  explanation: {
    issue: "This tests whether you can be honest and helpful with an anxious patient while staying within the limits of what you know and what you are entitled to decide.",
    keyDetails: "Mrs Clarke has already read her report, so withholding it achieves little. The treatment decision is genuinely undecided and belongs to the consultant tomorrow. She has a specific, practical concern (the wedding), which tells you what matters to her.",
    reasoning: "{1} is honest and makes sure her concerns are taken forward. {2} adds senior input but cannot settle the question tonight. {3} avoids overstepping but leaves her without help. {4} and {5} both predict a decision you can't make, and {5} adds an unfounded assumption about age.",
    competing: "Some would put {2} first, reasoning that a registrar's view is worth more than yours. It may be, if he is free, but he can't decide either, and an honest explanation is needed whoever gives it. The ordering of {3} and {4} turns on which harm is worse: a night of uncertainty, or a confident prediction that may prove wrong."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, 'Being competent': recognising and working within the limits of your competence." },
    { ref: "consent", note: "Sharing information in a way patients can understand, and being honest about uncertainty." }
  ],
  tags: ["limits of competence", "communication", "orthopaedics", "uncertainty"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-012", letters: "AEG", format: "multiple_choice", difficulty: "hard",
  title: "Home or a care home?", setting: "Elderly care ward", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Mental capacity", "Patient-centred decision making", "Managing family conflict"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mrs Adeyemi, 84, has mild cognitive impairment and is recovering from a hip fracture. The therapists think she would need carers four times a day to be safe at home.\n\n" +
    "Her daughter wants her to move into a care home near the daughter's house. Her son insists she goes home with carers, as she \"always said she'd never go into a home\". The two argue loudly at the bedside, and the daughter turns to you and says, \"Just tell him she can't manage at home.\" Mrs Adeyemi's capacity to decide where to live has not been formally assessed.",
  options: [
    { text: "Arrange for Mrs Adeyemi's capacity to decide where she lives to be assessed, giving her the support she needs to take part.",
      brief: "The whole decision turns on whether she can make it herself, and nobody has yet checked.",
      detailed: "Mild cognitive impairment does not mean she lacks capacity, and the law starts from a presumption that she has it. An assessment specific to this decision, with practicable steps taken to help her understand the options, settles who decides. If she has capacity, the choice is hers, even if it seems risky to others. If she doesn't, the decision must be made in her best interests, taking account of her known wishes." },
    { text: "Speak with Mrs Adeyemi on her own to find out what she wants and what matters most to her.",
      brief: "Her voice has been missing from an argument about her own future.",
      detailed: "With her children arguing over her, Mrs Adeyemi may not feel able to say what she wants. A calm conversation alone gives her the space to do so, and her views matter whatever the outcome of a capacity assessment: they are central to any best-interests decision too. It may also reveal practical concerns, about loneliness or about stairs, that change the options." },
    { text: "Suggest a meeting with Mrs Adeyemi, the team and, if she agrees, both children, to discuss the options.",
      brief: "Brings the conflict into a structured setting where the facts and her wishes can be heard.",
      detailed: "A planned meeting with the therapists and discharge coordinator lets everyone hear the same information about what support at home would look like. If Mrs Adeyemi has capacity, it supports her decision; if she lacks it, it is the natural forum for a best-interests discussion. It moves the argument away from the bedside and gives both children a fair hearing." },
    { text: "Tell the son that the therapists' assessment means his mother can't safely go home.",
      brief: "Takes sides and presents a recommendation as if it were a decision.",
      detailed: "The therapists have described what support she would need, not ruled out going home; carers four times a day is a package many people live with. Telling the son otherwise takes his sister's side and pre-empts both Mrs Adeyemi's view and a proper assessment. It is likely to escalate the conflict rather than settle it." },
    { text: "Find out whether either child holds a lasting power of attorney for health and welfare, and follow that child's view.",
      brief: "A sensible question, but an attorney's role only arises if she lacks capacity, and even then it is about her best interests.",
      detailed: "This is the hard distractor. Knowing about any lasting power of attorney is useful, and you would ask. But an attorney for health and welfare can act only if Mrs Adeyemi lacks capacity for this decision, which has not been established, and even then must act in her best interests, not on their own preferences. 'Following that child's view' skips both steps." },
    { text: "Record that the family disagree and wait for them to agree before planning discharge.",
      brief: "Leaves the decision to two people who don't decide it, and leaves Mrs Adeyemi in hospital meanwhile.",
      detailed: "Documenting the disagreement is fine, but waiting for the children to agree treats it as their decision when it is Mrs Adeyemi's, or failing that, a best-interests decision made with her at the centre. It risks a long and harmful hospital stay while nothing moves forward." },
    { text: "Ask both children to leave the ward until they can discuss the matter calmly.",
      brief: "May be needed if the argument continues, but it doesn't address the decision itself.",
      detailed: "If the argument is upsetting Mrs Adeyemi or other patients, asking the family to step away briefly is reasonable. As a response to the underlying problem, though, it does nothing: the question of where she lives and who decides remains, and excluding both children alienates people whose support she will need." },
    { text: "Go along with the daughter's view, as she lives nearby and will be most involved in her care.",
      brief: "Practical considerations matter, but they don't give the daughter the right to decide.",
      detailed: "The daughter's proximity is relevant to the practicalities of either plan, and her concern is genuine. But neither child decides where their mother lives. Siding with one because of convenience bypasses Mrs Adeyemi's own wishes and the legal framework for making the decision." }
  ],
  explanation: {
    issue: "This tests whether you can keep a patient at the centre of a decision about her own future when her family are in conflict, and whether you apply the principles of mental capacity correctly under pressure.",
    keyDetails: "The decisive fact is that her capacity for this decision has not been assessed. She has mild impairment, not established incapacity. The therapists have described a care need, not a verdict. And the daughter is asking you to settle an argument that isn't yours, or hers, to settle.",
    reasoning: "{k1} establishes who decides, {k2} brings Mrs Adeyemi's own views into the open, and {k3} provides a fair setting for the decision, whichever route it takes. The distractors all hand the decision to someone else, whether a sibling ({d1}, {d5}), an attorney without the legal basis to act ({d2}), or nobody at all ({d3}), or deal with the noise rather than the problem ({d4}).",
    competing: "{d2} is where many candidates go wrong. Checking for a lasting power of attorney is sensible, but an attorney's authority depends on her lacking capacity, and even then they must act in her best interests. If the capacity assessment found she lacked capacity and an attorney existed, the attorney's involvement would become central, but only within that framework."
  },
  refs: [
    { ref: "mca1", note: "The presumption of capacity; an unwise decision is not proof of incapacity; practicable steps to support decision making." },
    { ref: "mca4", note: "Best-interests decisions, including the person's past and present wishes." },
    { ref: "ng108", note: "Supporting people to make their own decisions and involving families appropriately." }
  ],
  tags: ["capacity", "discharge planning", "family conflict", "older people"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-013", letters: "AEDBC", format: "ranking", difficulty: "moderate",
  title: "Short-staffed at night", setting: "General medical ward", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Raising concerns", "Escalation", "Patient safety"],
  stem:
    "You are an F2 doctor working a run of nights on a general medical ward. For the past three weeks the ward has regularly had one fewer registered nurse at night than its agreed safe minimum. On two occasions this week, patients have fallen without anyone seeing; one fractured her wrist.\n\n" +
    "The nurses tell you they have raised the staffing with their matron, who said she is \"aware of the problem\". Tonight there is again one nurse short, and the remaining two nurses are visibly stretched.",
  options: [
    { text: "Contact the night site manager now about tonight's unsafe staffing, and do so on any further nights it happens.",
      brief: "Escalates the risk on the night it exists, to the person who can move staff tonight.",
      detailed: "The site manager is responsible for staffing across the hospital overnight and may be able to redeploy a nurse or bring in bank staff. Raising it in real time is the action most likely to protect patients tonight. Doing it on every affected night also builds a record that the problem is persistent, which a single conversation would not." },
    { text: "Report the falls and the staffing shortfalls through the incident reporting system, and let your consultant know about the concern.",
      brief: "Creates a formal record linking harm to staffing, and brings in a senior doctor who can push for change.",
      detailed: "Incident reports turn anecdote into evidence: two unwitnessed falls and a fracture, alongside the staffing figures, are exactly what a trust needs to see. Telling your consultant adds medical weight to a concern that has so far gone only through nursing management. It ranks second only because it doesn't change the staffing tonight." },
    { text: "Raise the concern with the trust's Freedom to Speak Up guardian.",
      brief: "A legitimate route, particularly when concerns raised through line management don't seem to be acted on.",
      detailed: "Freedom to Speak Up guardians exist for situations where staff feel concerns are not being heard. The nurses' experience with the matron suggests this may be one of them. It ranks below the first two because the direct routes, real-time escalation and incident reporting, haven't yet been tried by you, and they are likely to be quicker." },
    { text: "Report the trust's staffing problems directly to the Care Quality Commission.",
      brief: "Regulators can be approached, but going straight to one bypasses local routes you haven't yet used.",
      detailed: "Raising concerns with a regulator is appropriate when local routes have failed or are not suitable, and staff are protected when they do so. Here, though, you have not yet used the internal routes yourself. Going straight to the regulator is a significant step that may also be slower to help the patients on the ward tonight." },
    { text: "Tell the nurses that staffing is a nursing management issue and not something for the doctors to get involved in.",
      brief: "Patient safety is everyone's responsibility, and two falls and a fracture make this a medical concern too.",
      detailed: "This option abdicates responsibility. Patients have been harmed, and doctors share the duty to act when systems put patients at risk. It also leaves the nurses feeling unsupported, and makes it less likely they will raise concerns with doctors in future." }
  ],
  explanation: {
    issue: "This tests how you raise concerns about a system problem that is causing harm, using routes in a sensible order and not assuming someone else will deal with it.",
    keyDetails: "The shortfall is persistent (three weeks), has caused harm (two falls, one fracture), and is happening again tonight. The nurses have tried their line manager without result, which shows the usual route isn't working. You have not yet raised it yourself.",
    reasoning: "{1} deals with tonight's risk and {2} creates the record and senior support needed for lasting change. {3} is a good route if those don't work. {4} is legitimate in principle but premature here, and {5} wrongly treats patient safety as someone else's job.",
    competing: "{2} can reasonably be argued as the best option, since it is the step most likely to fix the problem for good. The key puts {1} first because the risk is present tonight, and only the site manager can change tonight's staffing. Near-miss scoring treats the two as adjacent, so swapping them costs little."
  },
  refs: [
    { ref: "concerns", note: "Your duty to act when patient safety is compromised, and the order of routes for raising concerns." },
    { ref: "ftsu", note: "The role of Freedom to Speak Up guardians." },
    { ref: "psirf", note: "Reporting patient safety incidents so that organisations can learn from them." }
  ],
  tags: ["raising concerns", "staffing", "falls", "night shift"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-014", letters: "BCF", format: "multiple_choice", difficulty: "moderate",
  title: "A funeral before the exam", setting: "Non-clinical (training)", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Colleagues, culture and safety", "Knowledge, skills and development"],
  competencies: ["Self-care", "Seeking support", "Planning"],
  stem:
    "You are an F2 doctor in a general medicine rotation. Your grandmother, who brought you up, died suddenly last week. Her funeral is next Thursday, when you are rostered for a long day, and your postgraduate exam is the following Monday.\n\n" +
    "You have found it hard to concentrate since she died, and your revision has stalled. The rota coordinator has already told the department that no more leave can be granted this month because of gaps in the rota.",
  options: [
    { text: "Speak to the rota coordinator and your clinical supervisor about compassionate leave for the funeral.",
      brief: "Compassionate leave is separate from annual leave, and the people who can arrange it need to know.",
      detailed: "A general message about the rota being full refers to annual leave; compassionate leave for the death of a close family member is handled differently in most trusts. Your clinical supervisor can support the request and help the department find cover. Asking openly is far better than trying to manage the gap yourself." },
    { text: "Discuss with your educational supervisor whether to sit the exam as planned or defer it.",
      brief: "A considered decision about the exam, with someone who knows the options and your circumstances.",
      detailed: "Sitting an exam in the days after a close bereavement is a real risk to your performance, and many exam bodies have processes for deferral or mitigating circumstances. Your educational supervisor can help you weigh whether to proceed and what evidence you would need. The decision is yours, but it is better made with support than alone." },
    { text: "Tell someone you trust how you are feeling, and use the support available, such as staff support services.",
      brief: "Grief that is affecting your concentration deserves attention, not just endurance.",
      detailed: "Difficulty concentrating after a sudden bereavement is normal, but it can affect your safety at work as well as your exam. Talking to a friend, a supervisor or the trust's staff support service makes it more likely that you notice if it gets worse, and that colleagues make allowances. Looking after your own health is part of practising safely." },
    { text: "Arrange an informal swap with a colleague for the day of the funeral, sorting it out between the two of you.",
      brief: "Solves the funeral but leaves the official rota wrong, which can matter for safety and pay.",
      detailed: "Informal swaps are common and colleagues are often generous. But if the rota coordinator doesn't know, the department may not know who is actually on duty, and the swap may breach working-time limits for your colleague. Using the proper route also means you aren't left owing a shift you may struggle to work." },
    { text: "Call in sick on the day of the funeral.",
      brief: "Dishonest, when there is a legitimate route for exactly this situation.",
      detailed: "Reporting sickness when you are attending a funeral is not truthful, and it denies the department notice to arrange cover. Compassionate leave exists precisely so that doctors don't have to choose between grieving and honesty." },
    { text: "Keep working your normal shifts and revise every evening, so that you don't fall behind.",
      brief: "Pushing through may feel responsible, but it ignores the effect grief is already having on you.",
      detailed: "This is the response many doctors default to, and it can work for a while. But you already find it hard to concentrate, and adding late-night revision to full shifts in the week of a funeral risks your wellbeing, your performance in the exam and potentially your safety at work." },
    { text: "Withdraw from the exam online tonight, so that you have one less thing to think about this week.",
      brief: "Deferral may be the right choice, but doing it without advice may cost you mitigation and support.",
      detailed: "Withdrawing could be a sensible decision, but doing it without advice may mean you lose your fee or a sitting unnecessarily, when the exam body might have offered a deferral for bereavement. It also leaves your supervisors unaware of what you are dealing with." },
    { text: "Ask a colleague to cover your on-call next week so that you can catch up on your revision.",
      brief: "Solves a scheduling problem but leaves your circumstances unaddressed and moves the burden onto a colleague.",
      detailed: "This avoids the conversation you need to have. Colleagues often help, but they can do so more fairly when the department knows, and you would miss the compassionate leave and supervisor support that exist for your situation." }
  ],
  explanation: {
    issue: "This tests how you cope with personal adversity that collides with work and training, and whether you use legitimate support rather than private workarounds.",
    keyDetails: "The funeral clashes with a shift, the exam is days later, and grief is already affecting your concentration. The rota message about no more leave is about annual leave and does not rule out compassionate leave.",
    reasoning: "{k1} deals with the funeral through the proper route, {k2} makes a considered decision about the exam, and {k3} looks after your wellbeing. Together they address all three pressures openly. The distractors either work around the system ({d1}, {d5}), are dishonest ({d2}), push on regardless of the toll the bereavement is taking ({d3}), or make a big decision in silence ({d4}).",
    competing: "{d3} appeals because it looks like resilience. But resilience in this paper means coping sustainably and seeking support when needed, not simply pushing harder."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, 'Managing risks posed by your health'; looking after your own wellbeing." },
    { ref: "practitionerhealth", note: "Confidential support for doctors whose health is affected, if difficulties persist." }
  ],
  tags: ["bereavement", "wellbeing", "exams", "rota"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-015", letters: "CDBA", format: "ranking", difficulty: "easy",
  title: "Declining blood", setting: "Obstetrics & gynaecology", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting autonomy", "Valid refusal", "Team communication"],
  stem:
    "You are an F2 doctor on labour ward. Mrs Mensah, 31, is a Jehovah's Witness. During her pregnancy she discussed this at length with a consultant, on her own, and completed an advance decision refusing blood transfusion, which is in her notes. An hour after delivery she has a postpartum haemorrhage; the registrar and consultant are managing it with drugs and other measures she has agreed to.\n\n" +
    "Mrs Mensah is alert and, when asked again, calmly confirms that she does not want blood even if she may die without it. A midwife says quietly to you, \"She's not thinking straight. We should just give it.\"",
  options: [
    { text: "Make sure her refusal, and the alternatives she will accept, are clearly known to everyone involved in her care.",
      brief: "Her decision is valid, and the team needs to act on it in an emergency where people may be tempted not to.",
      detailed: "An adult with capacity can refuse any treatment, including life-saving treatment, and her refusal is supported by an advance decision and repeated now. In a fast-moving haemorrhage, the risk is that someone acts on instinct. Making sure every member of the team knows her wishes, and which alternatives such as cell salvage or particular medicines she accepts, both respects her and focuses the team on what can be done." },
    { text: "Speak with Mrs Mensah, privately and gently, to confirm she understands the risks and that the decision is her own.",
      brief: "Checking that her refusal is informed and free of pressure is good practice, done sensitively.",
      detailed: "A refusal should be informed and voluntary. Asking her gently, away from family or other members of her community, whether she understands what may happen and whether this is truly her own choice is respectful, not a way of changing her mind. It ranks second because she has already discussed this privately with a consultant and recorded an advance decision, so the team's adherence to her refusal is the more pressing matter." },
    { text: "Ask her husband to try to persuade her to accept blood.",
      brief: "Recruiting a family member to change a capacitous patient's decision puts her under pressure.",
      detailed: "Her husband may share her beliefs or may not, but either way, enlisting him to persuade her uses a close relationship to apply pressure at a frightening moment. The decision is hers. Involving her husband in support is fine if she wants that, but not as a way of overriding her." },
    { text: "Agree with the midwife that blood should be given because her life is at risk.",
      brief: "Giving blood against a valid refusal would be unlawful and a profound breach of her trust.",
      detailed: "The midwife's distress is understandable, and many staff find this situation very hard. But Mrs Mensah has capacity and a valid advance decision, and she has confirmed her refusal. A belief that she is 'not thinking straight' because her choice is dangerous is not the same as a lack of capacity, and transfusing her against her will would be assault." }
  ],
  explanation: {
    issue: "This tests whether you respect a capacitous patient's refusal of life-saving treatment based on her beliefs, and support colleagues to do the same under emotional pressure.",
    keyDetails: "She has an advance decision, she is alert, and she has confirmed her refusal now. The registrar and consultant are managing the bleed within her wishes. The midwife's suggestion rests on equating a dangerous choice with impaired judgement.",
    reasoning: "{1} ensures the whole team acts on her valid refusal, and {2} sensitively confirms it is informed and voluntary. {3} and {4} both try to override her, by pressure in {3} and by force in {4}.",
    competing: "Ordering {1} and {2} is the only real judgement call; both are appropriate, and you would do both. The midwife's reaction is worth acknowledging: supporting a colleague who finds this distressing, after the emergency, is part of good teamwork."
  },
  refs: [
    { ref: "consent", note: "Respecting a patient's decision to refuse treatment, even if it may result in serious harm or death." },
    { ref: "mca1", note: "A person is not to be treated as unable to make a decision merely because it is unwise." },
    { ref: "beliefs", note: "Respecting patients' beliefs and values in decisions about their care." }
  ],
  tags: ["refusal of treatment", "religion", "obstetrics", "capacity"]
}
];
