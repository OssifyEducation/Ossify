// Practice batch P08, part 1 (sjt-146 to sjt-155). Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-146", letters: "BGH", format: "multiple_choice", difficulty: "moderate",
  title: "Dating a former patient", setting: "Obstetrics & gynaecology", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Professional boundaries", "Supporting colleagues", "Seeking advice"],
  stem:
    "You are an F2 doctor in obstetrics and gynaecology. Dr Kemp, another F2, tells you happily that he has started seeing Ms Hart, 29.\n\n" +
    "You realise she was admitted three weeks ago with an ectopic pregnancy, and Dr Kemp looked after her on the ward. He says they met again by chance at a party.",
  options: [
    // keyed
    { text: "Speak to him privately about your concern.",
      brief: "A friendly, private word lets him reflect before things go further.",
      detailed: "Relationships with former patients aren't always prohibited, but the GMC asks doctors to consider how recent the care was and how vulnerable the patient was. Three weeks after a pregnancy loss, both are concerns. A private conversation gives him the chance to think it through." },
    { text: "Encourage him to seek advice from his educational supervisor.",
      brief: "A senior can help him judge whether the relationship is appropriate.",
      detailed: "His supervisor can advise him on the GMC guidance and how to protect himself and Ms Hart. Seeking advice himself is far better than it coming to light another way." },
    { text: "Suggest he reads the GMC guidance on relationships with former patients.",
      brief: "The guidance sets out the factors he needs to consider.",
      detailed: "The guidance explains what to consider, such as the time since the care ended and the patient's vulnerability. Reading it helps him make an informed judgement." },
    // distractors
    { text: "Tell the consultant in charge of Ms Hart's care about the relationship straight away.",
      brief: "May be needed later, but a direct conversation with him comes first.",
      detailed: "The consultant may need to know if he doesn't reflect on it, but going straight to them, before speaking to him, may be disproportionate for a relationship that began after discharge." },
    { text: "Leave it, as she is no longer his patient.",
      brief: "Her recent care and vulnerability still matter.",
      detailed: "She is a former patient, which is why this seems acceptable. But three weeks after an ectopic pregnancy, she may still be vulnerable, and he may care for her again." },
    { text: "Report him to the GMC.",
      brief: "Disproportionate without local discussion.",
      detailed: "The GMC is for serious concerns that can't be managed locally. A relationship with a former patient may not be misconduct, and the facts need discussing first." },
    { text: "Contact Ms Hart to warn her about the relationship.",
      brief: "Intrusive and inappropriate.",
      detailed: "Her relationships are her own business, and contacting her about this would be intrusive." },
    { text: "Mention it to the other F2s, to see what they think.",
      brief: "Gossip that could harm both of them.",
      detailed: "Seeking others' views informally spreads private information and could damage his reputation and her privacy." }
  ],
  explanation: {
    issue: "This tests how you respond when a colleague starts a relationship with a recent, possibly vulnerable, former patient.",
    keyDetails: "Her admission was three weeks ago, for a pregnancy loss. He looked after her. They met again outside work.",
    reasoning: "{k1} raises the concern directly, {k2} points him to senior advice, and {k3} points him to the guidance. The distractors escalate before speaking to him ({d1}, {d3}), dismiss the concern ({d2}), intrude ({d4}), or gossip ({d5}).",
    competing: "{d1} is the tempting distractor: the consultant may need to know, but a direct conversation is the proportionate first step."
  },
  refs: [
    { ref: "boundaries", note: "Relationships with former patients: time since care, and the patient's vulnerability." }
  ],
  tags: ["boundaries", "relationships", "former patients", "colleagues"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-147", letters: "DBCAE", format: "ranking", difficulty: "easy",
  title: "Missing after the fire drill", setting: "Psychiatry", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Responding to the unexpected", "Patient safety", "Teamwork"],
  stem:
    "You are an F2 doctor on an adult psychiatric ward. During an unannounced fire drill, everyone is evacuated to the assembly point.\n\n" +
    "When the staff count patients, Mr Nash, 30, is missing. He is detained under the Mental Health Act and has recently spoken about wanting to harm himself.",
  options: [
    { text: "Tell the nurse in charge immediately.",
      brief: "The procedure, including informing the police, depends on acting fast.",
      detailed: "He is detained and at risk of self-harm, so this is urgent. The nurse in charge will start the missing patient procedure, which may include searching the building and informing the police." },
    { text: "Help to search the assembly point and nearby areas.",
      brief: "He may be close by.",
      detailed: "He may simply have gone to the wrong place. Searching nearby helps, once the nurse in charge knows." },
    { text: "Let the on-call psychiatrist know.",
      brief: "A senior needs to know about a missing detained patient.",
      detailed: "The on-call psychiatrist will need to know about his risk and may need to speak to the police. It ranks third because the nurse in charge starts the procedure." },
    { text: "Phone his family to ask whether he has gone home.",
      brief: "Delays the formal response and may cause alarm.",
      detailed: "His family may be contacted as part of the missing patient procedure, but doing it yourself, before the nurse in charge knows, delays the formal response. It ranks above waiting because it is at least an active step." },
    { text: "Wait until the drill is over, and count again.",
      brief: "Delays the response for a high-risk patient.",
      detailed: "He may turn up, but for a detained patient at risk of self-harm, waiting loses valuable time if he has left. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond quickly and through the right procedure when a detained patient at risk goes missing.",
    keyDetails: "He is detained, and at risk of self-harm. He went missing during an evacuation.",
    reasoning: "{1} starts the formal response, {2} helps find him, and {3} informs a senior. {4} acts outside the procedure, and {5} delays the response altogether.",
    competing: "Some would search first. The key starts with the nurse in charge because the procedure, including police involvement, depends on acting fast."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting promptly when patients are at risk." }
  ],
  tags: ["missing patient", "Mental Health Act", "fire drill", "psychiatry"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-148", letters: "CDF", format: "multiple_choice", difficulty: "moderate",
  title: "After the home visit", setting: "Out-of-hours / community", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Wellbeing", "Fitness to work"],
  stem:
    "You are an F2 doctor working an out-of-hours GP shift. Dr Price, another F2 on the same shift, phones you from her car. She has just been to a home visit where a baby had died unexpectedly, and stayed until the paramedics and police arrived.\n\n" +
    "She is crying and says she doesn't know how she can do her next visit.",
  options: [
    // keyed
    { text: "Listen, and let her talk about what happened.",
      brief: "She needs someone to listen first.",
      detailed: "This was a deeply distressing experience. Letting her talk, without rushing her, is the most important thing you can do right now." },
    { text: "Suggest she tells the clinical lead, so her remaining visits can be covered.",
      brief: "She may not be fit to continue, and the lead can reallocate visits.",
      detailed: "After an experience like this, she may not be able to work safely for the rest of the shift. The clinical lead can arrange cover." },
    { text: "Make sure she knows about support available after traumatic events.",
      brief: "Support beyond tonight may help her recover.",
      detailed: "Debriefs, staff support services and services such as NHS Practitioner Health can help doctors after traumatic events. Making sure she knows about them is important." },
    // distractors
    { text: "Tell her that difficult cases are part of the job.",
      brief: "Dismisses her distress.",
      detailed: "Difficult cases are part of the job, but saying so now minimises what she has been through." },
    { text: "Encourage her to carry on with her visits, as patients are waiting.",
      brief: "She may not be safe to work right now.",
      detailed: "Patients are waiting, which makes this tempting, but her distress may affect her judgement. The clinical lead can make sure they're seen." },
    { text: "Offer to take her remaining visits yourself.",
      brief: "Kind, but may not be possible with your own workload; the lead should decide.",
      detailed: "This is a generous offer, but you have your own calls, and the clinical lead is better placed to reallocate work safely." },
    { text: "Ask her for the details of the case.",
      brief: "She may want to talk, but questioning her about details isn't the right focus.",
      detailed: "Letting her talk is helpful, but asking for details may come across as curiosity, and the case is subject to investigation." },
    { text: "Suggest she writes a reflection on it when she gets home.",
      brief: "Reflection may help later, but not as her immediate support.",
      detailed: "Reflection can be valuable, but suggesting it now doesn't address her distress or whether she can continue." }
  ],
  explanation: {
    issue: "This tests how you support a colleague after a traumatic event, including whether she is fit to continue working.",
    keyDetails: "She has just seen a baby who died. She is crying and doubts she can continue. Visits are waiting.",
    reasoning: "{k1} listens, {k2} makes sure her work is covered safely, and {k3} points her to support. The distractors dismiss her ({d1}, {d5}), keep her working ({d2}), take on work the lead should allocate ({d3}), or focus on details ({d4}).",
    competing: "{d3} is the tempting option because it's generous, but the clinical lead is best placed to reallocate visits safely."
  },
  refs: [
    { ref: "practitionerhealth", note: "Confidential support for doctors after traumatic events." },
    { ref: "gmp", note: "Domain 3, supporting colleagues." }
  ],
  tags: ["trauma", "colleague wellbeing", "child death", "out-of-hours"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-149", letters: "ECDAB", format: "ranking", difficulty: "hard",
  title: "A friend at interview", setting: "Non-clinical (training)", attribute: P,
  topic: "Conflicts of interest and self-prescribing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Conflicts of interest", "Fairness", "Probity"],
  stem:
    "You are an F2 doctor. You have been asked to sit on the interview panel for a junior clinical fellow post in your department, as the trainee representative.\n\n" +
    "Looking at the shortlist the day before, you see that one of the candidates is Sam, a close friend from medical school.",
  options: [
    { text: "Tell the panel chair about the friendship before the interviews start.",
      brief: "Declaring the conflict lets the chair decide how to manage it.",
      detailed: "A close friendship is a conflict of interest. Declaring it before the interviews means the chair can decide, for example, whether you should step aside for his interview or the whole process." },
    { text: "Avoid discussing the interview with Sam until it's over.",
      brief: "Keeps the process fair and protects you both.",
      detailed: "Talking to him about the interview, even innocently, could give him an unfair advantage or look as though it did. It ranks second because declaring the conflict is the essential step." },
    { text: "Plan to score Sam as strictly as possible, to avoid any appearance of bias.",
      brief: "Overcorrecting is also unfair.",
      detailed: "Trying to compensate for bias by being harsher is still letting the friendship affect your scoring, and is unfair to him." },
    { text: "Keep the friendship to yourself, and score him as you would anyone else.",
      brief: "Objectivity is no substitute for declaring an interest.",
      detailed: "You may well be objective, but others can't know that. An undeclared conflict could undermine the process and the other candidates' trust in it." },
    { text: "Give Sam some tips about what the panel is looking for.",
      brief: "Gives him an unfair advantage.",
      detailed: "This would be unfair to other candidates and is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you recognise and declare a conflict of interest so a selection process is fair.",
    keyDetails: "Sam is a close friend. You are on the panel. The interviews are tomorrow.",
    reasoning: "{1} declares the conflict, and {2} keeps the process fair. {3} lets the friendship distort your scoring in the other direction, {4} hides the conflict, and {5} gives him an advantage.",
    competing: "This is hard because {3} looks fair-minded. But overcorrecting is still bias, and it ranks above {4} only because it doesn't conceal the conflict from yourself."
  },
  refs: [
    { ref: "coi", note: "Recognising and declaring conflicts of interest, including personal relationships." }
  ],
  tags: ["conflicts of interest", "interviews", "fairness", "friends"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-150", letters: "AEF", format: "multiple_choice", difficulty: "moderate",
  title: "Caught in the middle", setting: "General practice", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Managing conflict", "Professional neutrality", "Patient safety"],
  stem:
    "You are an F2 doctor in a GP practice. The practice nurse and one of the GP partners have fallen out over how the diabetes clinic is run, and they no longer speak to each other.\n\n" +
    "Each of them has separately complained to you about the other and asked you to back them up at the next practice meeting.",
  options: [
    // keyed
    { text: "Tell each of them politely that you won't take sides.",
      brief: "Staying neutral protects your working relationships.",
      detailed: "As a temporary member of the team, taking sides would damage your relationships and wouldn't resolve their disagreement. Saying so politely is honest." },
    { text: "Suggest they raise the disagreement with the practice manager.",
      brief: "The practice manager can help them resolve it.",
      detailed: "The practice manager is responsible for how the practice runs and can help them find a way forward." },
    { text: "Raise any effect on patient care with your GP supervisor.",
      brief: "Patient care must come first.",
      detailed: "If the conflict affects patients, for example missed communication about diabetes care, your supervisor needs to know." },
    // distractors
    { text: "Back the partner, as he is more senior.",
      brief: "Seniority doesn't make him right.",
      detailed: "Taking sides on the basis of seniority isn't fair and may damage your relationship with the nurse." },
    { text: "Back the nurse, as she runs the clinic day to day.",
      brief: "Taking sides doesn't help resolve it.",
      detailed: "She may have valid points, but taking her side would damage your relationship with the partner." },
    { text: "Arrange a meeting between the two of them yourself, to help them sort it out.",
      brief: "Well meant, but not your role.",
      detailed: "Mediating between senior colleagues isn't your role and could make things worse." },
    { text: "Avoid both of them until the dispute is over.",
      brief: "Unworkable, and may affect your work.",
      detailed: "This avoids the conflict but isn't practical, and may affect patient care." },
    { text: "Tell other staff what each of them has said.",
      brief: "Spreads the conflict.",
      detailed: "This would make things worse and damage trust." }
  ],
  explanation: {
    issue: "This tests how you stay professional when colleagues in conflict try to involve you.",
    keyDetails: "Both have asked you to take sides. You are a temporary member of the team. The dispute is about a clinic that affects patients.",
    reasoning: "{k1} stays neutral, {k2} points them to the person who can help, and {k3} protects patients. The distractors take sides ({d1}, {d2}), overstep your role ({d3}), avoid the problem ({d4}), or spread it ({d5}).",
    competing: "{d3} is the tempting option because it seems proactive, but mediation is for the practice manager."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, working constructively with colleagues." }
  ],
  tags: ["team conflict", "general practice", "neutrality"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-151", letters: "BADEC", format: "ranking", difficulty: "moderate",
  title: "Who's in the room?", setting: "Orthopaedics", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Disability awareness", "Communication", "Advocacy"],
  stem:
    "You are an F2 doctor in orthopaedics. Mr Patel, 70, who is registered blind, is recovering from a hip replacement. On the ward round, the consultant and five other staff gather around his bed and discuss his care.\n\n" +
    "No one introduces themselves. Afterwards, Mr Patel tells you he had no idea who was there or who was speaking.",
  options: [
    { text: "Apologise, and explain who was there and what was discussed.",
      brief: "Puts right what he missed straight away.",
      detailed: "He has a right to know who is caring for him and what was said. Explaining now addresses his immediate concern." },
    { text: "Suggest to the consultant that the team introduce themselves to him on ward rounds.",
      brief: "Prevents the same thing happening again.",
      detailed: "The consultant may not have realised. Raising it helps the whole team adapt. It ranks second because Mr Patel needs a response first." },
    { text: "Ask Mr Patel what would help him on ward rounds, and record it in his notes.",
      brief: "Useful for future care, though less immediate.",
      detailed: "He may have preferences, such as a light touch on the arm before someone speaks. Recording them helps all staff. It ranks third because the team's practice also needs to change." },
    { text: "Ask a nurse to tell him later who was on the ward round.",
      brief: "Passes on a problem you can address yourself.",
      detailed: "This may give him the information, but you're there now, and he raised it with you." },
    { text: "Reassure him that everyone on the ward round is part of his care team.",
      brief: "Doesn't address his concern.",
      detailed: "This may be true, but doesn't tell him who was there, and suggests his concern doesn't matter." }
  ],
  explanation: {
    issue: "This tests whether you respond to a patient's disability with respect, putting things right and helping the team adapt.",
    keyDetails: "He is registered blind. No one introduced themselves. He has told you directly.",
    reasoning: "{1} puts things right for him, {2} changes team practice, and {3} records his needs. {4} passes it on, and {5} dismisses his concern.",
    competing: "Some would raise it with the consultant first. The key responds to Mr Patel first because he has just raised it with you."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients with dignity and making reasonable adjustments." },
    { ref: "equality", note: "Reasonable adjustments for disabled people." }
  ],
  tags: ["disability", "visual impairment", "dignity", "ward rounds"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-152", letters: "BCH", format: "multiple_choice", difficulty: "easy",
  title: "A remark in the waiting room", setting: "General practice", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Challenging inappropriate behaviour", "Patient dignity", "Using proper channels"],
  stem:
    "You are an F2 doctor in a GP practice. As you call your next patient, you hear a receptionist say loudly to a colleague, about a woman who has just checked in, \"No wonder she's always here, look at the size of her.\"\n\n" +
    "Several people in the waiting room, including the woman, look up.",
  options: [
    // keyed
    { text: "Check on the patient, and apologise for the remark.",
      brief: "She may be upset, and an apology shows the practice takes it seriously.",
      detailed: "She probably heard. A private, sincere apology for the comment, without making a scene, shows her she is respected." },
    { text: "Speak to the receptionist privately about the remark.",
      brief: "A direct word may prevent it happening again.",
      detailed: "The receptionist may not have realised she would be heard, but the comment was unprofessional. A private conversation is the right first step." },
    { text: "Let the practice manager know what happened.",
      brief: "The manager is responsible for staff conduct.",
      detailed: "The practice manager may need to address it, and may want to apologise to the patient on behalf of the practice." },
    // distractors
    { text: "Leave it, as it isn't your role to manage reception staff.",
      brief: "You heard a remark that affected a patient.",
      detailed: "Managing staff isn't your role, but you can raise it. Ignoring it suggests it's acceptable." },
    { text: "Tell the receptionist in front of the waiting room that her comment was unacceptable.",
      brief: "Public criticism may embarrass everyone, including the patient.",
      detailed: "The comment was unacceptable, but challenging her publicly draws more attention to the patient and humiliates the receptionist." },
    { text: "Suggest to the patient that she makes a formal complaint.",
      brief: "She may wish to, but it puts the burden on her.",
      detailed: "She can complain if she wishes, but the practice should act regardless." },
    { text: "Report the receptionist to the GMC.",
      brief: "Receptionists aren't GMC-registered, and this is a local matter.",
      detailed: "The GMC regulates doctors, not reception staff, and this is for the practice to address." },
    { text: "Laugh it off with the receptionist later, and ask her to be more careful.",
      brief: "Makes light of a hurtful comment.",
      detailed: "Asking her to be careful is right, but laughing it off suggests the comment itself was acceptable." }
  ],
  explanation: {
    issue: "This tests how you respond to a colleague's disrespectful remark about a patient: supporting the patient and addressing it properly.",
    keyDetails: "The patient probably heard. The comment was public. You aren't the receptionist's manager.",
    reasoning: "{k1} supports the patient, {k2} addresses it directly, and {k3} involves the practice manager. The distractors ignore it or make light of it ({d1}, {d5}), handle it publicly ({d2}), shift the burden ({d3}), or escalate wrongly ({d4}).",
    competing: "{d3} may seem supportive, but the practice should act whether or not she complains."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients with dignity; Domain 3, challenging disrespectful behaviour." }
  ],
  tags: ["dignity", "weight stigma", "reception staff", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-153", letters: "ECADB", format: "ranking", difficulty: "moderate",
  title: "\"Is it because she's Black?\"", setting: "Cardiology / respiratory", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Responding to complaints", "De-escalation", "Openness"],
  stem:
    "You are an F2 doctor in cardiology. Mrs Mensah, 74, was admitted with heart failure. Her diuretics were started six hours late because of a prescribing delay.\n\n" +
    "Her son is angry. He says the delay happened because his mother is Black, and that the team doesn't care about her.",
  options: [
    { text: "Listen, take his concern seriously, and apologise for the delay.",
      brief: "Acknowledging his concern and the delay shows respect.",
      detailed: "There was a delay, and his concern about racism must be taken seriously, not dismissed. Listening, and apologising for the delay, is the right start." },
    { text: "Explain honestly why the delay happened, as far as you know.",
      brief: "Honest information helps him understand.",
      detailed: "If you know why the delay happened, explaining it honestly may help. It ranks second because he first needs to feel heard." },
    { text: "Tell him how to raise his concerns formally, and offer to involve a senior.",
      brief: "Gives him a route for his concern to be looked into.",
      detailed: "A concern about discrimination should be looked into properly. Explaining how, and offering a senior conversation, takes it seriously." },
    { text: "Tell him firmly that racism had nothing to do with it.",
      brief: "Dismisses his concern without investigation.",
      detailed: "You may believe this, but dismissing his concern outright isn't appropriate and is likely to escalate things." },
    { text: "Ask security to attend, as he is making accusations against staff.",
      brief: "He is angry, not threatening.",
      detailed: "Accusations aren't aggression. Calling security would escalate the situation and may confirm his concern that his mother isn't being treated fairly." }
  ],
  explanation: {
    issue: "This tests how you respond to an angry relative who alleges discrimination: listening, being honest, and taking the concern seriously.",
    keyDetails: "There was a real delay. He believes it was because of race. He is angry, not threatening.",
    reasoning: "{1} acknowledges his concern, {2} explains honestly, and {3} gives him a formal route. {4} dismisses his concern, and {5} escalates inappropriately.",
    competing: "Some would explain the reason first. The key starts with listening and apologising because he needs to feel heard before an explanation will help."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, responding to concerns; treating patients fairly." },
    { ref: "equality", note: "Fair treatment regardless of race." }
  ],
  tags: ["complaints", "racism", "relatives", "delays"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-154", letters: "AEG", format: "multiple_choice", difficulty: "hard",
  title: "Did the delay make a difference?", setting: "Intensive care", attribute: P,
  topic: "Honesty with patients and colleagues",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Candour", "Honesty about uncertainty", "Communication"],
  stem:
    "You are an F2 doctor in intensive care. Mr Allen, 66, was admitted from a medical ward last night with sepsis. The ward had called the critical care outreach team, who took 90 minutes to arrive because of other emergencies.\n\n" +
    "His family ask you whether the delay contributed to him becoming so unwell.",
  options: [
    // keyed
    { text: "Be honest that you don't know, and that it will be looked into.",
      brief: "Honest about uncertainty, without speculating.",
      detailed: "The delay may or may not have made a difference, and you can't know yet. Being honest about that, and that it will be reviewed, respects their question." },
    { text: "Make sure the consultant knows the family have asked.",
      brief: "The consultant can give a fuller answer and explain any review.",
      detailed: "The consultant can discuss what is known, and how the delay will be reviewed. This is a conversation for a senior." },
    { text: "Check that the delay has been reported through the incident system.",
      brief: "A delay like this should be reviewed so lessons can be learned.",
      detailed: "A 90-minute delay in a deteriorating patient should be reviewed. Checking it has been reported makes sure the family's question can be answered properly." },
    // distractors
    { text: "Reassure them that the delay made no difference.",
      brief: "You don't know this.",
      detailed: "This may be comforting, but it may not be true, and it could damage their trust if a review finds otherwise." },
    { text: "Tell them that the delay probably did make things worse.",
      brief: "Speculation that you can't support.",
      detailed: "Honesty matters, but speculating before the facts are known could cause unnecessary distress." },
    { text: "Explain that the outreach team was busy with other emergencies, so the delay was unavoidable.",
      brief: "True, but sounds like a justification rather than an answer.",
      detailed: "This is part of what happened, and may be shared, but on its own it sounds defensive and doesn't answer their question." },
    { text: "Tell them you can't comment and that they should ask the consultant.",
      brief: "Closes down the conversation unhelpfully.",
      detailed: "The consultant should lead the fuller conversation, but refusing to engage at all may make them feel something is being hidden." },
    { text: "Suggest they seek legal advice if they're concerned.",
      brief: "Premature and unhelpful.",
      detailed: "Families can seek advice, but suggesting it now implies wrongdoing and is likely to increase their distress." }
  ],
  explanation: {
    issue: "This tests how you answer honestly when a family asks whether a delay in care caused harm, without speculating or being defensive.",
    keyDetails: "There was a 90-minute delay. Its effect is unknown. The family are asking you directly.",
    reasoning: "{k1} is honest about uncertainty, {k2} makes sure a senior follows up, and {k3} makes sure the delay is reviewed. The distractors reassure or speculate ({d1}, {d2}), sound defensive ({d3}), close the conversation ({d4}), or imply wrongdoing ({d5}).",
    competing: "{d3} is the hard distractor: it's true and may be part of the explanation, but on its own it answers a different question."
  },
  refs: [
    { ref: "candour", note: "Being open with families when something may have gone wrong." },
    { ref: "psirf", note: "Reviewing patient safety incidents to learn from them." }
  ],
  tags: ["candour", "delays", "sepsis", "families"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-155", letters: "ADCB", format: "ranking", difficulty: "moderate",
  title: "A shorter explanation", setting: "Paediatrics", attribute: P,
  topic: "Equality and fair treatment of patients",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Fair treatment", "Interpreters", "Advocacy"],
  stem:
    "You are an F2 doctor on a paediatric ward. On the ward round, the consultant explains each child's plan to their parents in detail. When the team reaches Amira, 5, whose parents speak only Arabic, the consultant says a few words, smiles, and moves on.\n\n" +
    "Amira's parents look confused. No interpreter was booked. Their adult nephew, who speaks English, usually visits in the evenings.",
  options: [
    { text: "Arrange a professional interpreter to explain the plan to Amira's parents.",
      brief: "They are entitled to the same information as other parents.",
      detailed: "Amira's parents need to understand her care to be involved in decisions. A professional interpreter, in person or by phone, makes this possible." },
    { text: "Mention to the consultant afterwards that Amira's parents didn't get the plan explained.",
      brief: "Helps make sure it doesn't happen again.",
      detailed: "The consultant may not have realised the effect. Raising it respectfully helps the team book interpreters in future. It ranks second because the parents need an explanation first." },
    { text: "Ask a relative who speaks English to translate the plan for them later.",
      brief: "Family interpreters may not convey the information accurately.",
      detailed: "A relative may help with day-to-day matters, but may not translate clinical information accurately." },
    { text: "Assume the nurses will explain the plan to them later.",
      brief: "Leaves them without information.",
      detailed: "The nurses may help, but assuming this means the parents may never get a proper explanation." }
  ],
  explanation: {
    issue: "This tests whether you make sure families who don't speak English receive the same information as others.",
    keyDetails: "The parents speak only Arabic. No interpreter was booked. They look confused.",
    reasoning: "{1} provides proper interpreting, and {2} helps change team practice. {3} uses an unreliable interpreter, and {4} assumes someone else will act.",
    competing: "Some would raise it with the consultant first. The key arranges the interpreter first because the parents need to understand their daughter's care now."
  },
  refs: [
    { ref: "consent", note: "Making sure patients and parents have information in a form they can understand." },
    { ref: "equality", note: "Fair treatment regardless of race or language." }
  ],
  tags: ["interpreters", "fair treatment", "paediatrics", "parents"]
}
];
