// Practice batch P02, part 1 (sjt-026 to sjt-035). Written in key order; see scripts/compile-sjt-drafts.js.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-026", letters: "CFG", format: "multiple_choice", difficulty: "hard",
  title: "Tears in the mess", setting: "General medical ward", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Practical help", "Signposting"],
  stem:
    "You are an F2 doctor on a general medical ward. You walk into the doctors' mess and find Priya, another F2, crying. She tells you she has just received an email about a formal complaint from a patient's family, who say she was dismissive when their father was dying last week.\n\n" +
    "She says she did her best on a very busy night and wonders whether she is \"cut out for this\". She is due back on the ward in ten minutes to start the afternoon jobs.",
  options: [
    { text: "Sit with Priya and let her talk about what happened before offering any advice.",
      brief: "She needs to be heard first; advice offered too quickly can feel like being managed rather than supported.",
      detailed: "Receiving a complaint, especially about a patient's death, is one of the most distressing experiences in early training. Listening without rushing to fix things lets Priya say what she feels and shows you take her seriously. It also helps you judge how she is coping, which shapes everything else you do." },
    { text: "Offer to let the ward know she'll be a little late back, so she has time to compose herself.",
      brief: "A small practical step that takes the immediate pressure off without taking over.",
      detailed: "Going straight back onto a ward in tears is hard for Priya and not ideal for her patients. A short delay, explained simply to the nurse in charge or the registrar, is easy to arrange and usually welcomed. It gives her space without making any larger decision on her behalf." },
    { text: "Encourage her to talk to her educational supervisor about the complaints process and support.",
      brief: "Her supervisor can put the complaint in context and guide her through the response.",
      detailed: "Complaints follow a process, and most are resolved locally with a written response and reflection. Her supervisor can explain what will happen, help her respond, and make sure she has pastoral support. Knowing that complaints are common and survivable often eases the fear of what comes next." },
    { text: "Reassure her that complaints are common and this one will probably come to nothing.",
      brief: "Kindly meant, but you don't know that, and it may feel dismissive of how she feels right now.",
      detailed: "It is true that many complaints are resolved without formal action, which is why this is tempting. But you haven't seen the complaint, and quick reassurance can make her feel her distress isn't being taken seriously. Better to listen first and let her supervisor give an informed view." },
    { text: "Suggest she goes home for the rest of the day, and offer to cover her patients yourself.",
      brief: "Generous, but it decides for her and leaves you covering two doctors' work without anyone else knowing.",
      detailed: "If Priya feels unable to work, going home may be right, but that is for her to decide with her registrar or consultant, who can arrange proper cover. Offering to take on all her patients yourself, unseen, risks an unsafe afternoon for both of you." },
    { text: "Read the complaint with her now and help her draft a response this afternoon.",
      brief: "Responding while she is this upset, before advice from her supervisor, is premature.",
      detailed: "Complaint responses are usually coordinated through the trust's complaints team, with input from a supervisor. Drafting one now, in distress, risks a defensive or overly apologetic reply. There is plenty of time to respond properly." },
    { text: "Tell her she should contact her medical defence organisation straight away.",
      brief: "Sensible at some point, but not what she needs in the next ten minutes.",
      detailed: "Many doctors do contact their medical defence organisation about a complaint, and it can be helpful. Raising it as the first thing you say, while she is crying, frames the situation as a legal threat and may increase her fear. It can be suggested later, once she has spoken to her supervisor." },
    { text: "Mention to the consultant that Priya seems unable to cope, so that her workload can be reduced.",
      brief: "Speaks for her without her agreement, and in terms that could affect how she is seen.",
      detailed: "Senior support may well help, but describing her as unable to cope, without her knowledge, risks undermining her and breaching her trust. If you are worried about her, encourage her to talk to the consultant or her supervisor herself, or ask her whether she would like you to mention it." }
  ],
  explanation: {
    issue: "This tests how you support a distressed colleague in the moment: listening, easing immediate pressure, and pointing her to the right ongoing support, without taking over.",
    keyDetails: "Priya has just received the complaint and is upset now. She has ten minutes before returning to work. She has questioned whether she is cut out for medicine, which suggests her confidence has been hit hard. You haven't seen the complaint.",
    reasoning: "{k1} gives her the space she needs, {k2} removes the immediate time pressure, and {k3} connects her with the person best placed to guide her through the complaint. The distractors are all well-meant, which is what makes this question hard: {d1} reassures without knowledge, {d2} and {d5} take decisions out of her hands, {d3} rushes a formal response, and {d4} raises the legal angle at the wrong moment.",
    competing: "{d4} is the closest call; contacting a defence organisation is often sensible after a complaint. The key leaves it out because, in the next ten minutes, Priya needs support and practical breathing space more than legal advice."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues and contributing to a positive working environment." },
    { ref: "practitionerhealth", note: "Confidential support for doctors when distress persists." }
  ],
  tags: ["colleague wellbeing", "complaints", "support", "medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-027", letters: "EABCD", format: "ranking", difficulty: "moderate",
  title: "Dinner with a drug company", setting: "Non-clinical (teaching)", attribute: P,
  topic: "Conflicts of interest and self-prescribing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Managing conflicts of interest", "Industry sponsorship", "Organising teaching"],
  stem:
    "You are an F2 doctor and organise the weekly teaching programme for the foundation doctors in your hospital. A pharmaceutical representative contacts you offering to host next month's session at an expensive local restaurant.\n\n" +
    "Dinner and drinks would be free, and a cardiology consultant, paid by the company, would give a talk on the management of atrial fibrillation, including the company's new anticoagulant. Several of your colleagues are keen, as attendance at teaching has been poor.",
  options: [
    { text: "Check the trust's policy on industry sponsorship, and ask the postgraduate education lead before replying.",
      brief: "Establishes the rules and gets senior advice before committing the teaching programme to anything.",
      detailed: "Trusts have policies on industry involvement in education, and the postgraduate team will know how sponsored sessions can be run, if at all. Checking first means any decision you make is defensible and transparent. It also protects you from being placed in a position where a company is effectively shaping your colleagues' teaching." },
    { text: "Decline the offer and arrange an independent speaker on atrial fibrillation for the usual teaching slot.",
      brief: "Keeps the teaching independent and still covers the topic, though without checking whether any form of support would be allowed.",
      detailed: "Declining avoids the conflict of interest entirely, and an independent speaker gives balanced teaching on anticoagulation. It ranks second only because it skips the step of checking policy and seeking advice, which may have identified an acceptable way to work with the company, or simply confirmed this decision." },
    { text: "Accept the offer, but make sure everyone knows the session is sponsored and that the speaker is paid by the company.",
      brief: "Transparency helps, but a free dinner at an expensive restaurant is still hospitality that could influence prescribing.",
      detailed: "Declaring the sponsorship is better than hiding it, and colleagues can weigh the teaching accordingly. But hospitality of this kind is exactly what guidance on conflicts of interest warns against, because it can shape judgement even when people believe it won't. Transparency is necessary but not sufficient." },
    { text: "Accept the offer on behalf of the group, as the speaker is a respected consultant.",
      brief: "The speaker's reputation doesn't remove the influence of a company-funded dinner and talk.",
      detailed: "A respected consultant may well give a careful talk, which is what makes this tempting. But the session would still be funded and framed by a company promoting its own drug, at a venue chosen to attract attendance. Accepting without checking policy or declaring the sponsorship leaves you and your colleagues exposed to undue influence." },
    { text: "Accept, and agree to the representative's request to share the attendees' contact details afterwards.",
      brief: "Adds a breach of colleagues' personal information to an already problematic arrangement.",
      detailed: "Sharing colleagues' contact details with a company without their consent is a data protection problem in its own right, and it turns a teaching session into a marketing opportunity. Of the five options, it creates the most risk for the most people." }
  ],
  explanation: {
    issue: "This tests whether you recognise and manage a conflict of interest when industry offers hospitality tied to education.",
    keyDetails: "The offer combines expensive hospitality with a company-paid speaker discussing the company's own drug. You are organising teaching for others, so your decision affects your colleagues too. Low attendance makes the offer attractive, which is the pressure in the scenario.",
    reasoning: "{1} checks the rules and seeks advice, and {2} avoids the conflict while still covering the topic. {3}, {4} and {5} all accept the offer, with progressively less protection: {3} is transparent, {4} isn't, and {5} adds a breach of personal data.",
    competing: "Some would put {2} first, as it is the cleanest outcome. The key ranks checking policy first because it is the step that makes any decision sound, and it may lead to the same result. Near-miss scoring treats the two as adjacent."
  },
  refs: [
    { ref: "coi", note: "Gifts, hospitality and sponsorship, and managing conflicts of interest openly." },
    { ref: "gmp", note: "Domain 4, 'Managing conflicts of interest'." }
  ],
  tags: ["conflicts of interest", "pharmaceutical industry", "teaching", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-028", letters: "BDG", format: "multiple_choice", difficulty: "moderate",
  title: "Whose patient is he?", setting: "General surgery", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Patient safety", "Escalation", "Managing interteam conflict"],
  stem:
    "You are an F2 doctor in general surgery. Mr Ali, 58, has type 1 diabetes and came to the Emergency Department with abdominal pain and vomiting five hours ago. His blood tests suggest diabetic ketoacidosis, but he also has right upper quadrant tenderness.\n\n" +
    "The medical registrar thinks the tenderness suggests a surgical cause and that he should be admitted under surgery; your surgical registrar thinks the pain is from the DKA and that he is a medical patient. The ED doctor tells you the two registrars have been arguing on the phone. Mr Ali has had initial fluids, but his insulin infusion hasn't been started while ED waits for an admitting team, and he is getting more drowsy.",
  options: [
    { text: "Make sure Mr Ali's insulin infusion and DKA treatment start now, whichever team takes him.",
      brief: "He is deteriorating, and the dispute about ownership must not delay treatment that both teams agree he needs.",
      detailed: "Both registrars agree he has DKA; they disagree only about who should look after him. Increasing drowsiness in DKA is a warning sign, and fluid and insulin treatment shouldn't wait for an argument to be settled. Working with the ED team to start the trust protocol is the most important thing you can do." },
    { text: "Ask your registrar to agree a plan with the medical registrar, involving consultants if needed.",
      brief: "The disagreement needs resolving at the right level, quickly, rather than continuing by phone.",
      detailed: "Disputes about which team takes a patient are common and are best settled by the seniors involved, escalating to consultants if necessary. Telling your registrar that treatment has been delayed adds urgency. It also makes clear that the patient, not the argument, is the priority." },
    { text: "Make sure the notes record which team is responsible for Mr Ali until the decision is made.",
      brief: "A patient without a named team falls through the gaps; clarity protects him in the meantime.",
      detailed: "While teams argue, nobody may be reviewing results or responding to deterioration. A clear note of who is responsible for now, agreed with the ED team, means someone is accountable for his care, even if that changes later." },
    { text: "Tell the ED doctor that it is a medical problem and that the surgical team won't accept him.",
      brief: "Takes sides in the dispute and leaves a deteriorating patient no closer to being treated.",
      detailed: "This simply repeats your registrar's position and continues the stand-off. The ED doctor needs a plan for the patient, not a message about which team won't take him." },
    { text: "Accept Mr Ali under the surgical team to end the argument, even though your registrar disagrees.",
      brief: "Pragmatic, but you would be accepting a patient against your registrar's decision without resolving the clinical question.",
      detailed: "Ending the stand-off has obvious appeal, and someone does need to take responsibility. But accepting him against your registrar's view, without any agreement, may cause confusion about who is making decisions. It is better to make sure treatment starts and that the seniors settle ownership quickly." },
    { text: "Wait for the medical team to finish their assessment before seeing him yourself.",
      brief: "More waiting for a patient whose treatment is already delayed.",
      detailed: "Waiting for another team adds to the delay that is already harming him. Seeing him yourself, and making sure treatment begins, is more important than the order in which teams assess him." },
    { text: "Explain to Mr Ali that the teams are discussing who should look after him, so he understands the delay.",
      brief: "Honesty about delays is good, but this doesn't get his treatment started and may worry him.",
      detailed: "Patients deserve to know why they are waiting, and you might well explain this at some point. But telling a drowsy patient about an argument between teams does nothing for his DKA, and may reduce his confidence in his care." },
    { text: "Complete an incident report about the delay before doing anything else.",
      brief: "Reporting is appropriate later, but not before the patient's treatment is under way.",
      detailed: "A five-hour delay in starting DKA treatment because of a dispute between teams is worth reporting so that the hospital can improve how these situations are handled. But it is not the first priority while the patient is getting worse." }
  ],
  explanation: {
    issue: "This tests whether you keep the patient at the centre when teams are in conflict, getting care started and making sure the disagreement is resolved at the right level.",
    keyDetails: "Mr Ali has DKA, which both registrars accept, and is becoming more drowsy. Treatment hasn't started after five hours. The dispute is only about which team he belongs to.",
    reasoning: "{k1} deals with the immediate danger, {k2} gets the dispute resolved by people with the authority to resolve it, and {k3} makes sure someone is accountable in the meantime. The distractors either continue the dispute ({d1}), short-circuit it in a way that creates new confusion ({d2}), delay care ({d3}, {d5}), or address the patient's understanding instead of his treatment ({d4}).",
    competing: "{d2} is the strongest distractor, because someone does need to take ownership. The difference is that accepting him against your registrar's decision settles nothing clinically, whereas starting treatment and escalating does."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, 'Responding to safety risks'; working with colleagues in patients' interests." },
    { ref: "leadership", note: "Resolving disagreements between teams so that patient care isn't compromised." }
  ],
  tags: ["interteam conflict", "DKA", "surgery", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-029", letters: "ACBED", format: "ranking", difficulty: "easy",
  title: "An examination under anaesthesia", setting: "Obstetrics & gynaecology", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Consent for intimate examinations", "Speaking up", "Supporting students"],
  stem:
    "You are an F2 doctor on a gynaecology theatre list. Ms Okoro, 34, has just been anaesthetised for a laparoscopy. As the team prepares, the registrar tells a final-year medical student that this is \"a good chance to practise a bimanual examination\" before the operation starts.\n\n" +
    "You were present when Ms Okoro was consented on the ward, and you know that a student examination was not mentioned. The consent form does not refer to one either.",
  options: [
    { text: "Tell the registrar straight away, before the examination happens, that Ms Okoro hasn't consented to it.",
      brief: "This stops an intimate examination without consent, which is the priority.",
      detailed: "An intimate examination on an anaesthetised patient requires her explicit consent, given in advance, including for an examination by a student. Raising it now, calmly and factually, prevents a serious breach of her trust. Most registrars, once reminded, will stop immediately." },
    { text: "Quietly tell the student that they should not carry out the examination without her consent.",
      brief: "Protects the patient and the student, though it bypasses the person who gave the instruction.",
      detailed: "The student is in a difficult position, being asked by a senior to do something they may not realise is wrong. Telling them helps them refuse and protects them from a professional lapse. It ranks below speaking to the registrar because the registrar is the one making the decision and could ask someone else." },
    { text: "Let the consultant know about what happened after the list has finished.",
      brief: "The consultant should know, but raising it only afterwards does nothing to protect Ms Okoro today.",
      detailed: "This kind of lapse should be fed back so it doesn't happen again, and the consultant responsible for the list is the right person. On its own, though, it comes too late: by the end of the list the examination may already have happened." },
    { text: "Raise consent for examinations under anaesthesia as a general topic at the next departmental teaching session.",
      brief: "Useful education, but it doesn't deal with the patient in front of you.",
      detailed: "Teaching about consent may prevent future problems, and departments have had to address this issue nationally. But as a response to an examination about to happen today, it is indirect and too late." },
    { text: "Leave the decision to the registrar, who is supervising the student.",
      brief: "Deferring to seniority here allows an examination without consent to go ahead.",
      detailed: "The registrar is senior and responsible for the student, which is why staying quiet can feel appropriate. But you know the patient hasn't consented, and every member of the team has a duty to act. Leaving it allows a serious breach of her dignity and trust." }
  ],
  explanation: {
    issue: "This tests whether you act to protect an anaesthetised patient's dignity and right to consent, even when it means challenging a senior.",
    keyDetails: "The patient is anaesthetised and cannot object. You know she didn't consent to a student examination. The examination hasn't happened yet, so there is still time to stop it.",
    reasoning: "{1} stops it at the source, and {2} protects the patient and the student but less directly. {3} and {4} address the problem later or in general terms, and {5} lets it go ahead.",
    competing: "This is designed as one of the clearer questions in the set: the only real judgement is between {1} and {2}, and the key puts the registrar first because they are making the decision."
  },
  refs: [
    { ref: "chaperones", note: "Consent for intimate examinations, including examinations under anaesthesia and by students." },
    { ref: "consent", note: "Consent must be specific to the examination or procedure." }
  ],
  tags: ["consent", "intimate examination", "students", "theatre"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-030", letters: "CEF", format: "multiple_choice", difficulty: "hard",
  title: "We're going home", setting: "Paediatrics", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["De-escalation", "Partnership with parents", "Escalation"],
  stem:
    "You are an F2 doctor on a children's ward. Noah, 4 months, has bronchiolitis. He needs a little oxygen and is feeding poorly, so the registrar has advised that he stays overnight.\n\n" +
    "When you explain this, Noah's father becomes angry. He raises his voice, says that his son is \"fine\", that he has two other children at home and no one to look after them, and that he is taking Noah home now. Noah's mother is not here. A nurse is standing nearby.",
  options: [
    { text: "Acknowledge his frustration and explain clearly why the team wants Noah to stay tonight.",
      brief: "Shows you have heard him and gives him the clinical reasons he needs to make a decision.",
      detailed: "Anger often comes from fear and practical pressure. Acknowledging that this is hard, then explaining in plain terms that Noah needs oxygen and may tire with feeding overnight, gives his father the information he lacks. Many parents change their minds once they understand the specific risks." },
    { text: "Ask what makes staying difficult for the family, and whether anything could help.",
      brief: "The barrier may be solvable, for example childcare or the other parent taking over.",
      detailed: "His objection is practical: two other children at home. Exploring options, such as whether Noah's mother or another relative could stay, or whether the ward can help with arrangements, may remove the conflict entirely. It treats him as a partner in Noah's care rather than an obstacle." },
    { text: "Ask your registrar to come and speak to him if he still wants to take Noah home.",
      brief: "A senior should be involved if a parent wants to take a child home against advice.",
      detailed: "If he still intends to leave, a registrar can reassess Noah, discuss the risks with more authority, and decide whether any safeguarding considerations arise. It also means the conversation isn't left on the shoulders of a junior doctor facing an angry parent." },
    { text: "Tell him that if he takes Noah home, you will have to involve social services.",
      brief: "A threat at this stage is likely to escalate things and is not an accurate statement of the process.",
      detailed: "Parents taking a child home against medical advice can, in some circumstances, raise safeguarding concerns, which is why this option is tempting. But using it as a threat in the first minutes of a conversation damages trust and may provoke him to leave. Safeguarding decisions are made by seniors, based on risk, not used as leverage." },
    { text: "Agree that Noah can go home with advice to return if he gets worse, to avoid a confrontation.",
      brief: "Ends the confrontation but discharges a baby who needs oxygen, against the registrar's advice.",
      detailed: "Avoiding conflict is understandable, but Noah currently needs oxygen and the decision to keep him was made by the registrar. Agreeing to discharge on your own, under pressure, may put him at risk overnight." },
    { text: "Ask security to wait near the ward entrance in case he tries to leave with Noah.",
      brief: "Disproportionate at this point, and likely to inflame the situation.",
      detailed: "Security may be needed if anyone's safety is at risk, but nothing here suggests that yet. Calling them pre-emptively signals that you see him as a threat and is likely to escalate an encounter that could still be resolved by talking." },
    { text: "Tell him the decision has been made by the registrar and isn't open for discussion.",
      brief: "Shuts down the conversation and leaves his practical problem unaddressed.",
      detailed: "Appealing to the registrar's authority may feel firm, but it gives the father no reason to change his mind and no help with his situation. It is likely to harden his position." },
    { text: "Leave the conversation to the nurse, as he seems more angry with you than with her.",
      brief: "Steps away from your responsibility to explain the medical plan.",
      detailed: "Nurses are often skilled at defusing situations, and asking for her support is fine. But leaving the medical explanation to her entirely, because the father is angry with you, isn't fair to her and may mean he doesn't get the information he needs." }
  ],
  explanation: {
    issue: "This tests how you handle an angry parent who wants to take a child home against advice: de-escalating, solving the underlying problem where possible, and involving a senior.",
    keyDetails: "Noah needs oxygen and the registrar has advised admission. His father's objection is practical (two children at home), not a disagreement about medicine. His anger is rising, and you are on your own with a nurse nearby.",
    reasoning: "{k1} explains the reasons, {k2} tries to solve the real barrier, and {k3} brings in senior support if he still wants to leave. The distractors either escalate ({d1}, {d3}), give in ({d2}), shut him down ({d4}), or step away ({d5}).",
    competing: "{d1} is the hard one, because a parent removing a baby who needs oxygen could become a safeguarding issue. That judgement belongs to the registrar, after attempts to resolve the situation, not to an opening threat."
  },
  refs: [
    { ref: "u18", note: "Working in partnership with parents, and when a child's safety overrides parental decisions." },
    { ref: "gmp", note: "Domain 2, communicating with patients and those close to them." }
  ],
  tags: ["angry parent", "paediatrics", "de-escalation", "discharge against advice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-031", letters: "BCAED", format: "ranking", difficulty: "moderate",
  title: "Four moves in one night", setting: "Elderly care ward", attribute: P,
  topic: "Honesty with patients and colleagues",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Honest communication", "Raising concerns", "Responding to relatives"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mrs Brown, 88, has dementia and was admitted two days ago with a urinary tract infection. Overnight she was moved between wards four times because of pressure on beds, and this morning she is much more confused and has had a fall without injury.\n\n" +
    "Her daughter arrives, visibly upset, and asks you, \"Why on earth was she moved four times? Nobody told me anything.\"",
  options: [
    { text: "Explain that the moves were due to pressure on beds, apologise, and ask that she isn't moved again.",
      brief: "Truthful, apologetic, and focused on preventing more harm.",
      detailed: "Mrs Brown's daughter deserves a straight answer. Explaining that the moves were due to bed pressures, not her mother's clinical needs, acknowledging the effect on her, and apologising for both the moves and the lack of communication responds to what she has asked. Asking for her mother to stay put addresses the harm directly." },
    { text: "Raise the number of moves and their effect with the ward manager and your consultant as a concern about her care.",
      brief: "Repeated moves of a patient with dementia are a safety issue that the senior team should know about.",
      detailed: "Moving a confused older patient four times in a night increases delirium and falls, and Mrs Brown has already fallen. Raising this with the ward manager and consultant helps protect her now and highlights a pattern the hospital needs to address. It ranks second because the daughter's question needs an honest answer first." },
    { text: "Tell her how to contact the Patient Advice and Liaison Service if she would like a formal response.",
      brief: "A helpful route for a formal response, but not a substitute for answering her now.",
      detailed: "PALS can investigate and provide a formal reply, and it is right to mention it. On its own, though, it sends her elsewhere without the explanation you can give straight away." },
    { text: "Say that ward moves are decided by the bed managers, and that you can't comment on them.",
      brief: "Deflects responsibility and leaves her without an answer you are able to give.",
      detailed: "The bed managers do make these decisions, but you know why the moves happened and can explain it. Refusing to comment leaves her feeling dismissed and is likely to increase her distress." },
    { text: "Tell her the moves were for clinical reasons, to avoid getting into hospital bed pressures.",
      brief: "This is untrue, and it misleads a relative about why her mother was harmed.",
      detailed: "This may feel like protecting the hospital, but it is simply dishonest. If she later learns the truth, which is likely, she will lose trust in the team entirely. It is the only option that actively misleads her." }
  ],
  explanation: {
    issue: "This tests honesty about system failures that have affected a patient, and whether you act on the harm as well as explaining it.",
    keyDetails: "The moves were for bed pressures, not clinical reasons. Mrs Brown has dementia, is more confused and has fallen, so the moves have caused harm. Her daughter wasn't informed, which adds to her distress.",
    reasoning: "{1} answers honestly and tries to prevent further moves, and {2} raises the safety issue with the right people. {3} offers a formal route but doesn't answer her now. {4} deflects, and {5} misleads, which is worse.",
    competing: "Some would rank {2} first because it addresses the safety issue. The key puts answering the daughter first because she has asked directly, and the request for no further moves within {1} deals with the immediate risk."
  },
  refs: [
    { ref: "candour", note: "Being open with patients and those close to them when care has gone wrong, including system failures." },
    { ref: "gmp", note: "Domain 4, 'Acting with honesty and integrity'." }
  ],
  tags: ["honesty", "bed pressures", "dementia", "relatives"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-032", letters: "ADH", format: "multiple_choice", difficulty: "moderate",
  title: "A patient no one wants to see", setting: "Oncology & palliative care", attribute: P,
  topic: "Equality and fair treatment of patients",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Fair treatment", "Pain management", "Supporting the team"],
  stem:
    "You are an F2 doctor on an oncology ward. Mr Doyle, 62, has metastatic lung cancer. Over the past few days he has shouted at several nurses and called them \"useless\".\n\n" +
    "You notice that his call bell is now often left ringing for longer than others', and that his 14:00 dose of oral morphine hasn't been given; it is now 15:30. A nurse tells you, \"Nobody wants to go in there.\" When you see Mr Doyle, he is in obvious pain and says that nobody listens to him.",
  options: [
    { text: "Make sure Mr Doyle's pain is reassessed now and that his morphine is given.",
      brief: "He is in pain and has missed a dose; that comes first, whatever his behaviour.",
      detailed: "A missed dose of regular analgesia in a patient with metastatic cancer is a clinical problem in its own right, and uncontrolled pain may be part of why he is so angry. Making sure he is reassessed and treated now is the first duty to him." },
    { text: "Talk to the nurse in charge about what you've noticed and how to manage his behaviour fairly.",
      brief: "Raises the drift in his care openly and supports the staff, who are finding him difficult.",
      detailed: "The nurses are under real strain, and their feelings are understandable. But care must not be rationed because of behaviour. Discussing it with the nurse in charge allows the team to agree an approach, such as pairing staff for his care or setting clear expectations with him, while making sure his needs are met." },
    { text: "Explore with Mr Doyle what is behind his anger, such as pain, fear or feeling unheard.",
      brief: "Understanding the cause of his behaviour is often the key to changing it.",
      detailed: "Anger in patients with advanced cancer is often driven by pain, fear, loss of control or feeling ignored, and he has told you that nobody listens. Taking time to understand this can lead to practical changes, such as better pain control or a palliative care review, that improve both his experience and the staff's." },
    { text: "Ask for Mr Doyle to be moved to a side room, where he won't upset other staff or patients.",
      brief: "May reduce friction, but risks isolating him further and makes it easier to neglect him.",
      detailed: "A side room might be appropriate for some patients, but moving him so that he is out of sight is likely to increase the gaps in his care rather than reduce them." },
    { text: "Tell Mr Doyle that staff won't tolerate abusive behaviour and that his care may be affected.",
      brief: "Setting boundaries is fine, but threatening his care is not.",
      detailed: "Staff are entitled to work without abuse, and it may be appropriate to explain this to him calmly. But linking his behaviour to the quality of his care is wrong: patients' care must not be affected by how they behave, even when behaviour needs addressing." },
    { text: "Accept that staff are entitled to limit their contact with a patient who is abusing them.",
      brief: "Staff protection matters, but not at the expense of a patient's basic care.",
      detailed: "Trusts do have policies to protect staff from abuse, which is why this sounds reasonable. But those policies don't allow patients to go without pain relief or answers to their call bell. The solution is to manage the behaviour while maintaining care." },
    { text: "Write to Mr Doyle under the trust's violence and aggression policy, warning him about his behaviour.",
      brief: "A formal warning may eventually be appropriate, but not as a response to a missed dose of morphine.",
      detailed: "Formal warnings exist and are sometimes necessary. But issuing one isn't usually an F2's decision, and doing so now ignores the clinical problem in front of you and the likely reasons for his anger." },
    { text: "Report the nurses to the ward manager for neglecting Mr Doyle's care.",
      brief: "Frames the problem as individual misconduct, when it reflects a team struggling with a difficult situation.",
      detailed: "There has been a lapse in care, and it needs addressing, which is why this option is tempting. But going straight to a formal report about neglect, without discussing it with the nurse in charge, is likely to damage working relationships and misses the underlying problem." }
  ],
  explanation: {
    issue: "This tests whether you make sure a patient whose behaviour is difficult still receives fair and safe care, and how you support colleagues who are struggling with him.",
    keyDetails: "He has missed a dose of morphine and is in pain. Staff are avoiding him after being shouted at. He says nobody listens, which hints at the cause of his anger.",
    reasoning: "{k1} deals with the immediate clinical need, {k2} addresses the team's response openly and supportively, and {k3} looks for the cause of his behaviour. The distractors either isolate or threaten him ({d1}, {d2}, {d4}), accept a lower standard of care ({d3}), or escalate against colleagues out of proportion ({d5}).",
    competing: "{d3} reflects a genuine tension between staff wellbeing and patient care. Both matter, and the key is managing behaviour without rationing care, rather than choosing one over the other."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients fairly; care must not be affected by a patient's behaviour or lifestyle." },
    { ref: "eol", note: "Managing pain and symptoms for patients approaching the end of life." }
  ],
  tags: ["fair treatment", "difficult patients", "pain", "oncology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-033", letters: "CDEAB", format: "ranking", difficulty: "easy",
  title: "The wrong weight", setting: "Paediatrics", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Candour", "Medication safety", "Seeking senior advice"],
  stem:
    "You are an F2 doctor on a children's ward. Two hours ago you discharged Amira, 3, after a viral illness, and gave her parents verbal and written advice about giving paracetamol at home.\n\n" +
    "While writing your discharge summary, you realise you calculated the dose from another child's weight on the ward. The dose you advised is higher than recommended for Amira and could be harmful if given regularly over the next day or two. Her parents have a mobile number recorded in the notes.",
  options: [
    { text: "Phone Amira's parents now to correct the dose and find out how much she has had so far.",
      brief: "Stops any further incorrect doses straight away, which is the most urgent step.",
      detailed: "The risk comes from repeated doses, so the priority is to reach the family before the next one. Phoning now lets you give the correct dose, explain the error honestly, and find out exactly how much Amira has had, which you'll need to judge whether anything else is required." },
    { text: "Tell your registrar what happened and check whether any further action is needed.",
      brief: "A senior should know, and may need to advise on the doses already given.",
      detailed: "Depending on how much Amira has received, she might need assessment or a blood test, and your registrar can help decide. Telling a senior also means the error is handled openly. It ranks second because the call to the parents is the time-critical step." },
    { text: "Complete an incident report about the incorrect dose advice.",
      brief: "Important for learning, but it can wait until the child is safe.",
      detailed: "Using the wrong child's weight is a classic error, and reporting it helps the ward look at how weights are recorded and checked. It is the right thing to do once the immediate risk is dealt with." },
    { text: "Post a corrected written advice sheet to the family.",
      brief: "Corrects the information, but far too slowly to prevent harm.",
      detailed: "A written correction is useful as a follow-up, but it would arrive after the doses that matter have already been given." },
    { text: "Explain the error to the family at Amira's follow-up appointment next week.",
      brief: "Delays both the correction and the disclosure until after any harm could have occurred.",
      detailed: "Waiting a week means Amira could receive repeated doses at the wrong level in the meantime, and the family would be told about the error long after it mattered. It fails on safety and on candour." }
  ],
  explanation: {
    issue: "This tests your response to a medication error you made that could still harm a child: acting quickly to prevent harm, being honest, and involving a senior.",
    keyDetails: "The risk is from repeated doses over the next day or two, so time matters. You have the parents' number. The error is yours, and it hasn't been noticed by anyone else.",
    reasoning: "{1} prevents further harm and starts honest disclosure, {2} brings in senior advice about doses already given, and {3} supports learning. {4} and {5} are too slow, and {5} also delays telling the family.",
    competing: "Some would argue for telling the registrar first. In practice you'd do both within minutes, but phoning the family stops the next dose, which is why it comes first."
  },
  refs: [
    { ref: "candour", note: "Telling patients, or their parents, promptly when something has gone wrong." },
    { ref: "prescribing", note: "Giving patients clear and accurate information about their medicines." }
  ],
  tags: ["medication error", "candour", "paediatrics", "discharge"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-034", letters: "ABG", format: "multiple_choice", difficulty: "moderate",
  title: "Two alarms at once", setting: "Intensive care", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Prioritisation", "Escalation", "Delegation"],
  stem:
    "You are an F2 doctor on the intensive care unit at night. The ICU registrar has been called to the Emergency Department for a trauma patient, so you are the only doctor on the unit.\n\n" +
    "Within a minute, two alarms sound. Mr Chen, in bed 3, is ventilated and his oxygen saturations have suddenly fallen to 82%. Mrs Ward, in bed 7, is recovering from surgery on high-flow nasal oxygen, and her saturations have drifted down to 89% over the past hour. Experienced ICU nurses are with both patients.",
  options: [
    { text: "Call the ICU registrar or consultant on call to come back to the unit.",
      brief: "Two deteriorating patients and one F2 is beyond what you should manage alone.",
      detailed: "A sudden desaturation in a ventilated patient can be life-threatening, and you will need senior help quickly. Calling now means help is on the way while you start assessing. The registrar may need to prioritise between the unit and ED, but they can only do that if they know." },
    { text: "Go to Mr Chen first, as a sudden fall in a ventilated patient's saturations may mean a tube problem.",
      brief: "A sudden drop in a ventilated patient is the more immediately dangerous of the two.",
      detailed: "Problems such as tube displacement or blockage, a disconnected circuit, a pneumothorax or equipment failure can cause rapid deterioration and need immediate action. Mrs Ward's saturations have drifted more slowly and she is breathing for herself, so Mr Chen is the more urgent of the two." },
    { text: "Ask Mrs Ward's nurse to increase her oxygen, stay with her, and call you at once if she worsens.",
      brief: "Uses the nurse's skills to keep the second patient safe while you deal with the first.",
      detailed: "ICU nurses are highly skilled, and asking them to adjust oxygen and monitor closely is appropriate delegation. It means Mrs Ward is being actively managed and that you will hear immediately if she becomes the priority." },
    { text: "Assess the two patients in the order in which the alarms went off.",
      brief: "The order of alarms says nothing about which patient is sicker.",
      detailed: "Assessing in strict order might feel fair and systematic, but prioritisation should be based on clinical urgency. Here, the sudden fall in a ventilated patient is more dangerous than a gradual drift in a self-ventilating one." },
    { text: "Fast-bleep the anaesthetic registrar in theatre rather than your own registrar.",
      brief: "Bypasses the person responsible for the unit, who needs to know what is happening.",
      detailed: "Anaesthetists may well help in an emergency, and in some hospitals they are the next line of support. But your own registrar is responsible for the unit, and should be contacted first so they can decide how best to get help to you." },
    { text: "Review both patients' charts before going to either bedside.",
      brief: "Time spent on charts delays bedside assessment of a ventilated patient in trouble.",
      detailed: "Charts can provide useful context, but when a ventilated patient's saturations suddenly fall, the bedside is where the problem will be found and fixed." },
    { text: "Ask Mr Chen's nurse to increase his oxygen to 100%, and wait 15 minutes to see if it improves before assessing.",
      brief: "Increasing oxygen is reasonable, but waiting 15 minutes to assess a sudden desaturation is not.",
      detailed: "Increasing the inspired oxygen is often one of the first steps, which is what makes this tempting. But a sudden desaturation in a ventilated patient needs immediate assessment for a correctable cause. Waiting a quarter of an hour could be dangerous." },
    { text: "Call the critical care outreach team to come and help on the unit.",
      brief: "Outreach teams generally support wards, not the ICU itself, and your registrar is the right first call.",
      detailed: "Outreach teams are a valuable resource for deteriorating patients on wards, but they are not usually the source of medical help within the ICU. Calling them instead of your registrar may delay the right support reaching you." }
  ],
  explanation: {
    issue: "This tests prioritisation when two patients deteriorate at once and you are the only doctor present.",
    keyDetails: "Mr Chen's desaturation is sudden and he is ventilated; Mrs Ward's is gradual and she is breathing on her own. Experienced nurses are with both. The registrar is away but contactable.",
    reasoning: "{k1} gets senior help coming, {k2} deals with the more dangerous patient first, and {k3} makes sure the other patient is actively managed while you are busy. The distractors either prioritise on the wrong basis ({d1}), contact the wrong person ({d2}, {d5}), or delay bedside assessment ({d3}, {d4}).",
    competing: "{d4} contains a reasonable first step, increasing oxygen, alongside an unreasonable one, waiting to assess. The key rewards the combination that both treats and assesses promptly."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, recognising the limits of your competence; Domain 3, 'Responding to safety risks'." },
    { ref: "leadership", note: "Delegating appropriately and making sure tasks are within the competence of the person carrying them out." }
  ],
  tags: ["prioritisation", "intensive care", "escalation", "delegation"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-035", letters: "ADCB", format: "ranking", difficulty: "hard",
  title: "She's just sleeping", setting: "Out-of-hours / community", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Breaking bad news", "Compassion", "Supporting relatives"],
  stem:
    "You are an F2 doctor working with an out-of-hours GP service. At 23:00 you are sent to the home of Mrs Lewis, 84, who has advanced dementia and is on the practice's palliative care register. Her husband, 88, phoned because she was \"very drowsy\".\n\n" +
    "When you arrive, you find that Mrs Lewis has died, peacefully, some time in the last hour. Mr Lewis is sitting beside her, holding her hand. He tells you she is \"just sleeping\" and asks whether you think she'll be more awake in the morning. He lives alone with her.",
  options: [
    { text: "Sit with Mr Lewis and gently explain that his wife has died, giving him time and checking what he understands.",
      brief: "He is entitled to the truth, told with kindness and at his pace.",
      detailed: "Mr Lewis may already sense what has happened, or may genuinely not realise. Sitting down, using clear words such as 'died', and then giving him time to absorb the news is both honest and compassionate. Checking what he understands helps you judge how he is coping and whether he needs more explanation." },
    { text: "Ask whether there is a family member or neighbour you can call to come and be with him.",
      brief: "He shouldn't be alone tonight, and practical support matters once he knows.",
      detailed: "An 88-year-old who has just lost his wife, at night, needs someone with him. Offering to call a relative or neighbour makes sure he has support after you leave. It ranks second because it follows naturally once he has been told." },
    { text: "Explain that his wife has died, verify the death, and arrange for the district nurse to call in tomorrow morning.",
      brief: "Honest and efficient, but it risks leaving him alone with the news overnight.",
      detailed: "This covers the essential tasks, including telling him the truth, and a district nurse visit is helpful. But it treats the visit as a set of jobs, and doesn't check whether he has anyone with him tonight. It is the right content without enough care." },
    { text: "Avoid telling him until a relative arrives, as he may not cope with the news on his own.",
      brief: "Well meant, but it means misleading him about his wife's death for an unknown length of time.",
      detailed: "Wanting to protect him from distress is understandable. But he has asked you directly about her, and avoiding the truth means deceiving him, perhaps for hours, about the most important event in his life. It also takes away his chance to say goodbye knowing she has died." }
  ],
  explanation: {
    issue: "This tests how you break the news of a death to a bereaved spouse who believes she is asleep, balancing honesty with compassion.",
    keyDetails: "The death was expected and peaceful. Mr Lewis is elderly, lives alone with her, and has asked you a direct question. It is late at night.",
    reasoning: "{1} tells him honestly and kindly, and {2} makes sure he isn't left alone. {3} is honest but practically abandons him, and {4} deceives him to spare him distress.",
    competing: "This is a hard question because {3} and {4} each fail in a different way. The key ranks dishonesty last, because Mr Lewis has asked directly and has a right to know, but some argue that leaving him alone is the greater harm. Near-miss scoring reflects that both are poor."
  },
  refs: [
    { ref: "eol", note: "Supporting those close to the patient around the time of death." },
    { ref: "gmp", note: "Domain 2, communicating honestly and compassionately." }
  ],
  tags: ["death", "breaking bad news", "out-of-hours", "bereavement"]
}
];
