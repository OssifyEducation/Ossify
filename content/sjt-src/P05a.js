// Practice batch P05, part 1 (sjt-086 to sjt-095). Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-086", letters: "ACF", format: "multiple_choice", difficulty: "moderate",
  title: "After the death", setting: "Intensive care", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Candour", "Wellbeing"],
  stem:
    "You are an F2 doctor in intensive care. Last week a patient died after Dr Novak, another F2, gave a tenfold overdose of an intravenous drug. The error contributed to the patient's death and is being investigated.\n\n" +
    "Dr Novak has come back to work. Today you find her alone in the staff room, and she tells you she hasn't slept properly since, keeps replaying it, and wonders whether she should give up medicine.",
  options: [
    { text: "Sit with her and let her talk about how she is feeling.",
      brief: "Being listened to is often what someone needs first.",
      detailed: "Doctors involved in serious errors often feel isolated and ashamed. Giving her time to talk, without rushing to reassure or advise, shows support and helps you understand how she is coping." },
    { text: "Encourage her to talk to her educational supervisor about how she is coping.",
      brief: "Her supervisor can support her through the investigation and her return to work.",
      detailed: "Her educational supervisor can make sure she has the right support, adjust her work if needed, and help her through the investigation. Encouraging her to speak to them makes sure she isn't facing this alone." },
    { text: "Make sure she knows about confidential support services for doctors.",
      brief: "Specialist support can help with the emotional effects of a serious error.",
      detailed: "Persistent poor sleep and thoughts of leaving medicine suggest she may benefit from more support than colleagues can give. Services such as occupational health or NHS Practitioner Health offer confidential help." },
    { text: "Reassure her that the death wasn't her fault.",
      brief: "Well meant, but you don't know the findings, and it may not feel credible to her.",
      detailed: "Wanting to relieve her guilt is natural, and systems often contribute to errors. But the investigation hasn't concluded, and blanket reassurance may sound hollow. Listening and acknowledging how hard this is will usually help more." },
    { text: "Advise her to say as little as possible to the investigation until she has legal advice.",
      brief: "Doctors must be open and honest with investigations.",
      detailed: "She may well want advice from her medical defence organisation, which is sensible. But advising her to hold back from the investigation conflicts with her duty to be open and honest, and could harm her." },
    { text: "Suggest she takes sick leave until the investigation has finished.",
      brief: "Time off may help, but it's a decision for her with occupational health, not a blanket solution.",
      detailed: "She may need time off, and this shouldn't be ruled out. But suggesting she stays away until the investigation ends could leave her isolated for weeks. Occupational health and her supervisor are better placed to advise." },
    { text: "Tell the rest of the team that she is struggling, so they can go easy on her.",
      brief: "Shares her private distress without her agreement.",
      detailed: "The intention is kind, but her feelings are hers to share. Telling the team without her agreement may embarrass her and damage her trust in you." },
    { text: "Tell her that everyone makes mistakes and she should try to put it behind her.",
      brief: "Minimises a very serious event and her distress.",
      detailed: "Errors are common in medicine, which is why this is tempting. But this one contributed to a death, and she needs to process it, not set it aside." }
  ],
  explanation: {
    issue: "This tests how you support a colleague affected by a serious error, while respecting the investigation and her privacy.",
    keyDetails: "The error contributed to a death and is being investigated. She is sleeping poorly and thinking of leaving medicine. She has confided in you privately.",
    reasoning: "{k1} listens, {k2} connects her with her supervisor, and {k3} points her to specialist support. The distractors reassure without basis or minimise the event ({d1}, {d5}), undermine her duty of openness ({d2}), isolate her ({d3}), or share her distress without consent ({d4}).",
    competing: "{d1} is the most tempting option. It may turn out that system failures contributed, but reassurance before the investigation concludes may not help her."
  },
  refs: [
    { ref: "candour", note: "Being open and honest with investigations when things go wrong." },
    { ref: "practitionerhealth", note: "Confidential support for doctors' mental health." }
  ],
  tags: ["second victim", "colleague wellbeing", "medication error", "intensive care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-087", letters: "DEACB", format: "ranking", difficulty: "easy",
  title: "Extra shifts on rest days", setting: "Cardiology / respiratory", attribute: P,
  topic: "Conflicts of interest and self-prescribing",
  gmcDomains: ["Trust and professionalism", "Colleagues, culture and safety"],
  competencies: ["Safe working hours", "Honesty with employers", "Fitness to practise"],
  stem:
    "You are an F2 doctor in cardiology. A locum agency offers you well-paid twelve-hour shifts at another hospital on your next two rest days, which come straight after a week of long day shifts.\n\n" +
    "Taking them would put you well over the 72-hour limit in a seven-day period set by your contract, and your contract requires you to tell your employer about any other work. You could do with the money.",
  options: [
    { text: "Decline the shifts, as they would take you over the safe working limit.",
      brief: "Working limits exist to protect patients and you.",
      detailed: "The 72-hour limit is there because fatigue causes errors. Working twelve-hour shifts straight after a week of long days would leave you, and your patients, at risk. Declining is the safe choice, however useful the money." },
    { text: "Look for locum shifts that fit within your limits, and tell your employer about them.",
      brief: "Allows you to earn extra safely and openly.",
      detailed: "Additional work is allowed when it fits within the limits and is declared. Looking for shifts that do fit is a reasonable way of meeting your financial needs. It ranks second because the decision about these particular shifts comes first." },
    { text: "Accept just one of the two shifts, to reduce the impact.",
      brief: "Still breaches the limit, though by less.",
      detailed: "This feels like a compromise, but if one shift still takes you over the limit, you would still be working while fatigued, and against your contract." },
    { text: "Accept both shifts, and tell your employer about them afterwards.",
      brief: "Breaches the limit, even though you'd be open about it.",
      detailed: "Being open is better than hiding the work, but declaring it afterwards doesn't make it safe. You would still be working beyond the limit." },
    { text: "Accept both shifts, and don't tell your employer, as they are at another hospital.",
      brief: "Unsafe and dishonest.",
      detailed: "Working at another hospital doesn't change the effect on your fatigue, and not declaring it breaches your contract. This is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you put patient safety and honesty with your employer ahead of financial gain.",
    keyDetails: "The shifts would breach the 72-hour limit and follow a week of long days. Your contract requires you to declare other work. You need the money.",
    reasoning: "{1} protects patients and you, and {2} finds a safe, open alternative. {3}, {4} and {5} all breach the limit, with {5} adding dishonesty.",
    competing: "The order of {3} and {4} reflects the size of the breach: one shift is less unsafe than two, even though both are wrong."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, making sure your health and fatigue don't put patients at risk; Domain 4, honesty with employers." }
  ],
  tags: ["locums", "working hours", "fatigue", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-088", letters: "CEG", format: "multiple_choice", difficulty: "moderate",
  title: "To mobilise or not", setting: "Elderly care ward", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Multidisciplinary working", "Resolving disagreement", "Clinical assessment"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mrs Grant, 84, was admitted three days ago after a fall. The physiotherapist wants to start walking her today to prevent deconditioning. The nurse looking after her says Mrs Grant was dizzy this morning and refuses to let her get up.\n\n" +
    "The two of them come to you in the corridor, both frustrated, and ask you to decide. Your consultant is in clinic until this afternoon.",
  options: [
    { text: "Listen to both of their concerns before giving a view.",
      brief: "Each has a valid concern, and hearing both helps you understand the risk.",
      detailed: "Both colleagues want what's best for Mrs Grant: the physiotherapist is worried about deconditioning, the nurse about another fall. Listening to both, without taking sides, lowers the tension and gives you the information you need." },
    { text: "Review Mrs Grant yourself, including a lying and standing blood pressure.",
      brief: "An assessment can establish whether her dizziness makes walking unsafe today.",
      detailed: "Her dizziness may have a cause, such as postural hypotension or a medication effect, which affects whether it's safe to mobilise. Assessing her gives the team a clinical basis for their decision." },
    { text: "Agree a plan with both of them and record it in her notes.",
      brief: "A shared, documented plan ends the disagreement and guides the rest of the team.",
      detailed: "Once you've heard both views and assessed her, agreeing a plan together, such as sitting her out first or walking with two staff later, and documenting it, means everyone knows what to do." },
    { text: "Support the nurse's decision, as she has been with Mrs Grant all morning.",
      brief: "Taking sides before assessing her doesn't resolve the clinical question.",
      detailed: "The nurse knows how Mrs Grant has been today, which matters. But siding with her without assessing the dizziness may leave Mrs Grant in bed unnecessarily." },
    { text: "Support the physiotherapist, as mobilisation is her area of expertise.",
      brief: "Expertise in mobilisation doesn't settle whether the dizziness makes it unsafe.",
      detailed: "The physiotherapist is the expert on mobilising patients, but the nurse has raised a clinical concern that needs assessing first." },
    { text: "Ask them to sort out the disagreement between themselves.",
      brief: "Leaves the conflict and the clinical question unresolved.",
      detailed: "Colleagues can often resolve disagreements themselves, but they have come to you because they can't. Sending them away doesn't help Mrs Grant." },
    { text: "Keep Mrs Grant in bed until the consultant reviews her this afternoon.",
      brief: "Delays a decision you can help make now, and bed rest has risks.",
      detailed: "Involving the consultant may be useful, but leaving her in bed all day risks deconditioning, and you can assess her now." },
    { text: "Report the disagreement to the ward manager as a conflict between staff.",
      brief: "Disproportionate for a clinical difference of opinion.",
      detailed: "Ward managers can help with team conflict, but this is a reasonable clinical disagreement that can be resolved by assessment and discussion." }
  ],
  explanation: {
    issue: "This tests how you resolve a disagreement between colleagues by focusing on the patient and making a shared, documented decision.",
    keyDetails: "Both concerns are clinically valid. Mrs Grant was dizzy this morning. The consultant isn't available until the afternoon.",
    reasoning: "{k1} hears both views, {k2} assesses the clinical question, and {k3} agrees and records a plan. The distractors take sides without assessment ({d1}, {d2}), avoid the issue ({d3}, {d4}), or escalate disproportionately ({d5}).",
    competing: "{d4} sounds cautious, but bed rest in older patients carries real risks, and you can assess her now."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, working collaboratively with colleagues and respecting their skills." }
  ],
  tags: ["multidisciplinary team", "falls", "conflict", "elderly care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-089", letters: "BEACD", format: "ranking", difficulty: "hard",
  title: "No one free to chaperone", setting: "Emergency department", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Chaperones", "Dignity", "Explaining examinations"],
  stem:
    "You are a male F2 doctor in the Emergency Department. Mr Bello, 70, has passed black stools and you need to do a rectal examination. He is stable, and his blood results will take an hour.\n\n" +
    "The department is very busy and the nurses say no one is free to chaperone for at least 30 minutes. Mr Bello's wife is with him. He seems embarrassed about the examination.",
  options: [
    { text: "Explain the examination, and ask whether he would like a chaperone.",
      brief: "He should understand the examination and be offered a chaperone, whatever your gender or his.",
      detailed: "GMC guidance says you should explain what an intimate examination involves and why, and offer a chaperone, whether or not you and the patient are the same gender. Asking him, and respecting his answer, gives him control at an embarrassing moment." },
    { text: "Ask a healthcare assistant who is free to act as chaperone.",
      brief: "A trained staff member can be a suitable chaperone.",
      detailed: "A chaperone doesn't have to be a registered nurse; a healthcare assistant familiar with the examination can be suitable. It ranks second because you should first explain and ask what Mr Bello wants." },
    { text: "Wait 30 minutes until a nurse is free, and do the examination then.",
      brief: "Reasonable when he's stable, though a suitable chaperone may be available sooner.",
      detailed: "Delaying an intimate examination until a chaperone is available is acceptable when the delay won't harm the patient, and he is stable. It ranks third because you haven't yet asked him, and someone else may be available sooner." },
    { text: "Ask his wife, who is already at his bedside, to act as the chaperone.",
      brief: "A relative isn't an impartial chaperone, though he may want her present as well.",
      detailed: "GMC guidance says a relative or friend isn't an impartial observer and wouldn't usually be a suitable chaperone, but you should agree to a reasonable request to have them present as well. Using her instead of a chaperone, without asking him, doesn't meet the guidance." },
    { text: "Do the examination now without offering a chaperone, as you are both men.",
      brief: "A chaperone should be offered regardless of gender.",
      detailed: "It's a common misconception that chaperones are only needed when doctor and patient are of different genders. Going ahead without offering one ignores GMC guidance and Mr Bello's evident embarrassment." }
  ],
  explanation: {
    issue: "This tests how you protect a patient's dignity during an intimate examination when a chaperone isn't easily available.",
    keyDetails: "He is stable, so a short delay is safe. He is embarrassed. His wife is present but isn't an impartial observer. You and he are both men.",
    reasoning: "{1} explains and offers him a choice, {2} finds a suitable chaperone, and {3} delays safely. {4} uses an unsuitable chaperone, and {5} ignores the guidance altogether.",
    competing: "This is hard because {2} and {3} are both acceptable. The key prefers finding a suitable chaperone sooner, provided Mr Bello agrees, because it avoids an unnecessary delay. If he declines a chaperone, you can record that and proceed."
  },
  refs: [
    { ref: "chaperones", note: "Offering a chaperone for intimate examinations, and who can act as one." }
  ],
  tags: ["chaperones", "intimate examination", "dignity", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-090", letters: "BDH", format: "multiple_choice", difficulty: "moderate",
  title: "\"Just a midwife\"", setting: "Obstetrics & gynaecology", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Speaking up", "Patient safety"],
  stem:
    "You are an F2 doctor on the labour ward. Sarah, an experienced midwife, tells you that one of the registrars, Dr Hale, regularly dismisses her concerns about women in labour and has called her \"just a midwife\" in front of patients.\n\n" +
    "She says she now hesitates to call him, and is currently worried about a woman in room 4 whose labour isn't progressing.",
  options: [
    { text: "Make sure her current concern about the woman in room 4 is reviewed by a senior now.",
      brief: "A clinical concern needs acting on, whatever the background.",
      detailed: "Her reluctance to call Dr Hale means a woman's care may be delayed. Making sure the concern reaches a senior now, by calling Dr Hale with her or another senior if needed, comes first." },
    { text: "Listen to her account and take it seriously.",
      brief: "She has raised a concern that affects her and patient safety.",
      detailed: "Being dismissed and belittled is undermining, and here it is making a midwife hesitant to escalate concerns. Listening carefully, and acknowledging that this isn't acceptable, supports her and helps you understand what has happened." },
    { text: "Encourage her to raise it with the labour ward lead or a speaking-up guardian.",
      brief: "Patterns of undermining need addressing by those who can act.",
      detailed: "The labour ward lead or the Freedom to Speak Up guardian can look into a pattern of behaviour and act on it. Encouraging her to use these routes, and offering your support, helps make sure it is addressed." },
    { text: "Tell her that Dr Hale is like that with everyone, so she shouldn't take it personally.",
      brief: "Minimises behaviour that affects patient safety.",
      detailed: "This may be true, but it normalises undermining and leaves her, and future patients, exposed to the same problem." },
    { text: "Suggest she brings her concerns to you instead of Dr Hale in future.",
      brief: "Bypasses the problem and puts concerns through someone less senior.",
      detailed: "This may feel supportive, but as an F2 you may not be the right person to manage obstetric concerns, and it avoids addressing Dr Hale's behaviour." },
    { text: "Challenge Dr Hale about his behaviour in front of the labour ward team.",
      brief: "Public confrontation is likely to escalate rather than resolve it.",
      detailed: "His behaviour needs challenging, but doing so publicly is likely to make him defensive and could make things worse for Sarah." },
    { text: "Advise her to report Dr Hale to the GMC.",
      brief: "Premature: local routes should be used first.",
      detailed: "Persistent undermining can become a fitness-to-practise concern, but the trust's processes are the right starting point." },
    { text: "Tell her you can't act on something you haven't witnessed yourself.",
      brief: "Dismisses a colleague's concern and a safety risk.",
      detailed: "You may not have seen it, but her account is enough to warrant support and action, especially as it is affecting how she escalates concerns." }
  ],
  explanation: {
    issue: "This tests how you respond to a colleague being undermined, recognising its effect on patient safety.",
    keyDetails: "The undermining is repeated and public. It is making Sarah hesitate to escalate. She has a current concern about a woman in labour.",
    reasoning: "{k1} deals with the immediate clinical risk, {k2} supports Sarah, and {k3} directs the concern to people who can act on it. The distractors minimise it ({d1}, {d5}), work around it ({d2}), or respond disproportionately ({d3}, {d4}).",
    competing: "{d2} feels supportive but leaves the underlying behaviour unaddressed and routes obstetric concerns through a junior."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting when colleagues are undermined, and its effect on patient safety." },
    { ref: "ftsu", note: "Freedom to Speak Up as a route for raising concerns." }
  ],
  tags: ["undermining", "midwives", "labour ward", "speaking up"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-091", letters: "ABECD", format: "ranking", difficulty: "moderate",
  title: "Postponed again", setting: "General surgery", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["De-escalation", "Honest communication", "Personal safety"],
  stem:
    "You are an F2 doctor in general surgery. Mr Shah, 58, has been nil by mouth since midnight for a hernia repair, which has just been postponed for the second time because emergency cases took priority.\n\n" +
    "When you tell him, he shouts and swears at you, saying the hospital is \"a joke\" and that he has lost two days' pay. He isn't physically threatening, but other patients in the bay are watching.",
  options: [
    { text: "Stay calm, acknowledge his frustration, and explain why it was postponed.",
      brief: "Acknowledging his frustration often de-escalates anger.",
      detailed: "His anger is understandable: he has been fasting and has lost income. Staying calm, acknowledging that this is frustrating, and explaining honestly why emergencies took priority, often lowers the temperature." },
    { text: "Ask the nurse in charge to join you in the conversation.",
      brief: "Support helps you manage the situation safely.",
      detailed: "A second person can help de-escalate, and the nurse in charge may be able to help with practical issues such as food and rebooking. It ranks second because your own calm response comes first." },
    { text: "Find out when his operation can be rescheduled, and let him know.",
      brief: "Useful information, though it doesn't address his anger now.",
      detailed: "A new date may reassure him. It ranks third because it takes time, and he needs a response now." },
    { text: "Leave the bay and ask the nurses to speak to him once he has calmed down.",
      brief: "Avoids the conversation and leaves him without an explanation.",
      detailed: "You don't have to tolerate abuse, and leaving would be right if he became threatening. But he isn't, and walking away without explaining is likely to make him angrier." },
    { text: "Promise him that he will be first on the list tomorrow.",
      brief: "A promise you can't guarantee, which may make things worse later.",
      detailed: "This would calm him down now, which makes it tempting. But emergencies could delay him again, and a broken promise would damage his trust further." }
  ],
  explanation: {
    issue: "This tests how you handle an angry patient whose frustration is understandable, de-escalating without making promises you can't keep.",
    keyDetails: "He has been fasting and has lost pay. He is verbally abusive but not physically threatening. Other patients are watching.",
    reasoning: "{1} de-escalates, {2} brings support, and {3} provides useful information. {4} avoids him and {5} makes a promise you can't keep.",
    competing: "{4} would become appropriate if he were threatening. Here, a calm conversation is more likely to help."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, communicating honestly with patients; Domain 3, your own safety." }
  ],
  tags: ["angry patients", "cancellations", "de-escalation", "surgery"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-092", letters: "AEF", format: "multiple_choice", difficulty: "easy",
  title: "\"Medical reasons\"", setting: "General surgery", attribute: P,
  topic: "Honesty with patients and colleagues",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Honesty", "Challenging seniors", "Patient communication"],
  stem:
    "You are an F2 doctor in general surgery. Mr Ford, 66, was due to have a bowel operation today. Theatre overran and the list was stopped, so his operation was cancelled.\n\n" +
    "You hear your registrar tell Mr Ford that his operation has been cancelled \"for medical reasons\". Afterwards Mr Ford asks you, worried, what is wrong with him.",
  options: [
    { text: "Tell Mr Ford that, as far as you know, it was cancelled because theatre ran out of time.",
      brief: "He is worried, and he deserves an honest answer.",
      detailed: "Mr Ford now thinks something is medically wrong. Telling him honestly that the operation was cancelled because the list ran out of time relieves an unnecessary worry and is the truthful answer to his question." },
    { text: "Speak to the registrar privately about what Mr Ford was told.",
      brief: "Raising it directly gives him the chance to correct it.",
      detailed: "The registrar may not have realised how Mr Ford would interpret \"medical reasons\". Raising it privately and respectfully gives him the chance to put it right and to think about how he explains cancellations in future." },
    { text: "Make sure Mr Ford is given a new date as soon as possible.",
      brief: "Reduces the impact of the cancellation on him.",
      detailed: "A cancelled bowel operation is stressful, and knowing when it will happen helps. Making sure he is rebooked promptly is part of looking after him." },
    { text: "Tell Mr Ford that you'll ask the registrar to explain, without giving him an answer.",
      brief: "Leaves him worried, when you know the answer.",
      detailed: "It can feel awkward to contradict a senior, but leaving a worried patient without an answer, when you know it, isn't fair to him." },
    { text: "Tell Mr Ford that the registrar wasn't being honest with him.",
      brief: "Criticises a colleague in front of a patient.",
      detailed: "He does need the truth, but framing it as your registrar lying undermines trust in the team. You can be honest about the reason without commenting on your colleague." },
    { text: "Leave it, as the outcome for Mr Ford is the same.",
      brief: "The outcome may be the same, but he now believes he has a medical problem.",
      detailed: "His operation is cancelled either way, but he is worried there is something wrong with him. Leaving that misunderstanding in place is unkind and dishonest." },
    { text: "Report the registrar to the consultant before speaking to him yourself.",
      brief: "Escalating before a direct conversation is disproportionate.",
      detailed: "This may need raising more widely if it is a pattern, but a private conversation with the registrar is the proportionate first step." },
    { text: "Record in the notes that the operation was cancelled for medical reasons.",
      brief: "Creates an inaccurate record.",
      detailed: "This would keep the notes consistent with what he was told, but the notes must reflect what actually happened." }
  ],
  explanation: {
    issue: "This tests whether you correct a misleading explanation given to a patient, honestly and without undermining your colleague.",
    keyDetails: "The real reason was that theatre ran out of time. Mr Ford is now worried something is wrong with him. He has asked you directly.",
    reasoning: "{k1} answers him honestly, {k2} raises it with the registrar, and {k3} limits the impact of the cancellation. The distractors leave him misinformed ({d1}, {d3}, {d5}), criticise the registrar to him ({d2}), or escalate disproportionately ({d4}).",
    competing: "{d1} seems respectful of the registrar, but it leaves a worried patient without an answer you can give him."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty with patients; Domain 3, raising concerns with colleagues." }
  ],
  tags: ["honesty", "cancellations", "seniors", "surgery"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-093", letters: "CDAEB", format: "ranking", difficulty: "moderate",
  title: "\"Drug-seeking\"", setting: "Emergency department", attribute: P,
  topic: "Equality and fair treatment of patients",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Non-discrimination", "Pain assessment", "Challenging labels"],
  stem:
    "You are an F2 doctor in the Emergency Department. Mr Price, 34, has a history of heroin use and is on a methadone programme. He came in four hours ago with severe abdominal pain.\n\n" +
    "His notes say \"likely drug-seeking\" and he has been given paracetamol only. His pain score hasn't been reassessed. He is now curled up on the trolley and says the pain is getting worse.",
  options: [
    { text: "Assess his pain and abdomen yourself, as you would for any patient.",
      brief: "His symptoms need assessing on their merits.",
      detailed: "People who use drugs get serious illnesses too, and his worsening pain could be pancreatitis, perforation or another emergency. Assessing him properly, and treating his pain appropriately, is fair and safe care." },
    { text: "Speak to the nurse in charge about reassessing his pain regularly.",
      brief: "Makes sure his pain is monitored from now on.",
      detailed: "Regular pain assessment is part of good emergency care. Making sure the nursing team reassesses him helps prevent further delay in treating him." },
    { text: "Check his methadone dose with his pharmacy, to plan his analgesia.",
      brief: "Useful for safe prescribing, though less urgent than assessing him.",
      detailed: "Knowing his methadone dose helps you plan effective and safe pain relief. It ranks third because assessing his abdomen comes first." },
    { text: "Give him a further dose of paracetamol and reassess later.",
      brief: "Continues to under-treat severe pain without assessment.",
      detailed: "Caution with opioids is understandable, but repeating inadequate analgesia without assessing him risks missing a serious diagnosis and leaves him in pain." },
    { text: "Accept the note in the records, and ask him to wait for the surgical team.",
      brief: "Relies on a label rather than assessment.",
      detailed: "The surgical team may well need to see him, but accepting the label without question risks missing a serious condition and treats him unfairly." }
  ],
  explanation: {
    issue: "This tests whether you assess a patient fairly when a label in his notes may be leading to under-treatment.",
    keyDetails: "He has worsening severe abdominal pain. He has only had paracetamol, and his pain hasn't been reassessed. A label in his notes may be influencing his care.",
    reasoning: "{1} assesses him fairly, {2} makes sure his pain is monitored, and {3} supports safe prescribing. {4} under-treats him, and {5} relies on the label.",
    competing: "Some would rank checking his methadone dose second, as it affects prescribing. The key puts regular reassessment first because his pain has been ignored for four hours."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients fairly and without prejudice." },
    { ref: "equality", note: "Fair treatment of all patients." }
  ],
  tags: ["stigma", "pain", "substance use", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-094", letters: "BCG", format: "multiple_choice", difficulty: "hard",
  title: "The placenta that wasn't sent", setting: "Obstetrics & gynaecology", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Owning mistakes", "Honesty", "Putting things right"],
  stem:
    "You are an F2 doctor in obstetrics. Yesterday you were asked to send the placenta from a preterm delivery for histology, to help find the cause of the early birth. You forgot to complete the request.\n\n" +
    "Today the midwife asks you whether it was sent. You realise it wasn't. The unit usually keeps placentas refrigerated for a few days after delivery.",
  options: [
    { text: "Tell the midwife honestly that you forgot to send it.",
      brief: "Being honest straight away lets the team put it right.",
      detailed: "Admitting the mistake now means the team can act, and is the honest response to a direct question. It is uncomfortable, but much easier than an error discovered later." },
    { text: "Check whether the placenta is still stored and can be sent now.",
      brief: "It may not be too late.",
      detailed: "Placentas are usually kept for a period after delivery. Finding out whether it can still be sent may mean the investigation isn't lost at all." },
    { text: "Tell your seniors, so they can decide what to tell the parents.",
      brief: "Seniors need to know, and the parents may need to be informed.",
      detailed: "The histology was meant to help explain the early birth, which matters to the parents. Your seniors can decide, with you, what to tell them, and how to make sure the results still reach them." },
    { text: "Tell the midwife it was sent and may have been lost in the lab.",
      brief: "A lie that could delay putting things right.",
      detailed: "This avoids embarrassment, but it is dishonest and could waste time searching for something that was never sent." },
    { text: "Send it now, and date the request form for yesterday.",
      brief: "Falsifies the record.",
      detailed: "Sending it now is right, but backdating the form misrepresents what happened and is dishonest." },
    { text: "Tell the midwife that sending samples is usually the midwives' responsibility.",
      brief: "Deflects blame for a task you were asked to do.",
      detailed: "Responsibilities for samples vary between units, but you were asked to do this, and blaming someone else is unprofessional." },
    { text: "Report the error through the incident reporting system, and leave the follow-up to the governance team.",
      brief: "Reporting is appropriate, but leaving the follow-up to others doesn't put things right for this family.",
      detailed: "Reporting the error supports learning, and you should do it. But handing the follow-up to others means the placenta may not be sent in time, and your seniors may not hear about it in time to decide what to tell the parents." },
    { text: "Wait for the results deadline, as the placenta may be sent by someone else.",
      brief: "Leaves the error unaddressed.",
      detailed: "Hoping someone else has done it, when you know it hasn't been done, isn't a responsible way of handling your own mistake." }
  ],
  explanation: {
    issue: "This tests whether you own a mistake promptly and honestly, and act to put it right.",
    keyDetails: "You were asked to send the placenta. It may still be possible to send it. The results matter to the parents.",
    reasoning: "{k1} is honest, {k2} tries to put it right, and {k3} involves your seniors in deciding what the parents need to know. The distractors are dishonest ({d1}, {d2}), deflect blame ({d3}), or are less urgent or passive ({d4}, {d5}).",
    competing: "{d4} is the hard distractor: reporting the error is appropriate and you should do it, but the three keyed options make the bigger difference to the family now."
  },
  refs: [
    { ref: "candour", note: "Being open and honest when things go wrong, including with colleagues and patients." },
    { ref: "gmp", note: "Domain 4, honesty, and keeping accurate records." }
  ],
  tags: ["errors", "candour", "histology", "obstetrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-095", letters: "DBCA", format: "ranking", difficulty: "moderate",
  title: "Running late", setting: "General practice", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Prioritisation", "Triage", "Time management"],
  stem:
    "You are an F2 doctor in a GP practice. Your morning surgery is running 40 minutes late, and the waiting room is full.\n\n" +
    "Reception messages you that the mother of a two-year-old has phoned asking for a call back today. The message just says \"worried about son\", and the receptionist didn't ask any more. The practice's duty doctor handles urgent same-day requests, but has a long list today.",
  options: [
    { text: "Call the mother back briefly before your next patient.",
      brief: "A short call tells you how urgent it is, and young children can deteriorate quickly.",
      detailed: "\"Worried about son\" could be anything from a rash to a very unwell child, and only a clinician can judge which. A brief call lets you assess urgency directly and then deal with it, bring the child in, or arrange a later call. It makes you a little later, but it is the safest option." },
    { text: "Ask the duty doctor to call her back.",
      brief: "Appropriate for urgent requests, though it adds to a busy colleague's list without knowing the urgency.",
      detailed: "The duty doctor exists for urgent same-day requests, so this is reasonable. It ranks second because the duty doctor is also busy, and a brief call from you would establish whether it's urgent at all." },
    { text: "Ask reception to call her back and find out more about her son's symptoms.",
      brief: "Reception can gather details, but judging urgency needs a clinician.",
      detailed: "Receptionists can collect useful information, and some practices use trained care navigators. But deciding how urgent a young child's symptoms are is a clinical judgement, so relying on this may delay the right response." },
    { text: "Tell reception you'll call her at the end of surgery.",
      brief: "Could leave an unwell child waiting for over an hour.",
      detailed: "Calling after surgery is fine for routine queries, but you don't yet know whether this is routine, and a young child can deteriorate quickly." }
  ],
  explanation: {
    issue: "This tests how you prioritise an unclear request about a young child when you're already behind.",
    keyDetails: "The message is vague, and reception didn't ask more. The child is two. You are 40 minutes behind, and the duty doctor is busy.",
    reasoning: "{1} assesses urgency quickly and directly, {2} uses the practice's urgent system, and {3} gathers information but without clinical judgement. {4} could delay care for an unwell child.",
    competing: "Some would ask the duty doctor first, as that is their role. The key prefers a brief call yourself because it takes a few minutes and avoids adding to a busy colleague's list before you know whether it's urgent."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, prioritising patients according to clinical need." }
  ],
  tags: ["prioritisation", "general practice", "children", "time pressure"]
}
];
