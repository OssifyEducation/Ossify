// Practice batch P03, part 1 (sjt-046 to sjt-055). Written in key order; see scripts/compile-sjt-drafts.js.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-046", letters: "AEG", format: "multiple_choice", difficulty: "moderate",
  title: "Pressure sores from the care home", setting: "Elderly care ward", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Safeguarding adults", "Documentation", "Clinical care"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mrs Sutton, 86, has advanced dementia and lives in a nursing home. She has been admitted with pneumonia.\n\n" +
    "On examination you find a deep, foul-smelling pressure ulcer over her sacrum and she appears very thin. Her weight has fallen from 58 kg to 46 kg since a clinic visit five months ago. The transfer letter from the nursing home doesn't mention the ulcer or any weight loss.",
  options: [
    { text: "Document the ulcer and her weight carefully, including photographs if trust policy allows.",
      brief: "Accurate records made now are essential for her care and for any safeguarding enquiry.",
      detailed: "A clear description of the ulcer's size, depth and appearance, her current weight and the fall since her last recorded weight, and photographs where policy permits, creates an objective record. It supports her treatment and gives any later enquiry the evidence it needs without relying on memory." },
    { text: "Discuss your concerns with the hospital's safeguarding team about a possible referral.",
      brief: "A severe, unreported pressure ulcer and major weight loss may indicate neglect.",
      detailed: "Mrs Sutton can't speak up for herself, and the combination of a severe ulcer, major weight loss and a transfer letter that mentions neither raises a real concern about the care she has received. The safeguarding lead can help you decide whether a referral to the local authority is needed. The local authority then has a duty to make enquiries." },
    { text: "Make sure her pressure ulcer and nutrition are assessed and managed now.",
      brief: "Whatever the cause, she needs treatment for both problems today.",
      detailed: "The ulcer may be infected, and severe malnutrition affects healing and recovery from pneumonia. Asking the tissue viability nurse and dietitian to assess her, and starting appropriate wound care, pressure relief and nutrition support, is part of looking after her properly." },
    { text: "Phone the nursing home manager to ask what happened before deciding whether to raise any concern.",
      brief: "Their account may be useful later, but making your decision depend on it may compromise a safeguarding enquiry.",
      detailed: "It is natural to want the full picture before raising a concern, and the home's explanation will be important. But the decision about whether to make a safeguarding referral shouldn't depend on an informal call to the people whose care may be in question. The safeguarding lead can advise on how and when the home is contacted." },
    { text: "Tell Mrs Sutton's son that you think the nursing home has been neglecting her.",
      brief: "Shares a conclusion that hasn't been established, which may cause distress and complicate an enquiry.",
      detailed: "Her family should be kept informed, and they may raise concerns themselves. But telling them that neglect has occurred, before any enquiry, presents an assumption as fact. It is better to explain what you have found and that you are looking into it." },
    { text: "Raise your concerns when you start planning her discharge back to the nursing home.",
      brief: "Delays the concern for days, and other residents may also be at risk.",
      detailed: "Discharge planning is a natural point to discuss the home, but waiting until then delays any enquiry. If there is a problem with care at the home, other residents may be affected now." },
    { text: "Report the nursing home directly to the Care Quality Commission.",
      brief: "The regulator may need to know, but the local safeguarding route comes first.",
      detailed: "The CQC regulates care homes and receives information about poor care, so this isn't unreasonable in itself. But the established route for a concern about an individual is through the hospital's safeguarding team and the local authority, which can also inform the regulator if appropriate." },
    { text: "Accept that pressure ulcers and weight loss are common in frail patients with advanced dementia.",
      brief: "They are common, but the severity and the lack of any record of them still need explaining.",
      detailed: "Frail people with dementia are at high risk of both problems, and some ulcers develop despite good care. But a deep, unreported ulcer and a fifth of her body weight lost in five months shouldn't be accepted without asking whether her care was adequate." }
  ],
  explanation: {
    issue: "This tests whether you recognise possible neglect of an adult who can't speak for herself, and respond through the proper routes while treating her.",
    keyDetails: "The ulcer is severe and wasn't mentioned in the transfer letter. She has lost about a fifth of her body weight. She has advanced dementia, so she can't tell you what has happened.",
    reasoning: "{k1} creates the evidence, {k2} starts the safeguarding process with the right people, and {k3} treats her. The distractors either compromise or pre-empt the enquiry ({d1}, {d2}), delay it ({d3}), bypass the local route ({d4}), or dismiss the concern ({d5}).",
    competing: "{d1} is the most tempting distractor, since the home's account will matter. The key leaves it out because the decision to raise a safeguarding concern shouldn't hinge on an informal call to the provider."
  },
  refs: [
    { ref: "careact42", note: "The local authority's duty to make enquiries where an adult with care needs may be experiencing neglect." },
    { ref: "gmp", note: "Domain 2, protecting patients who may be vulnerable; Domain 1, keeping clear and accurate records." }
  ],
  tags: ["safeguarding adults", "neglect", "pressure ulcers", "care homes"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-047", letters: "EDACB", format: "ranking", difficulty: "easy",
  title: "Sign me in?", setting: "Non-clinical (teaching)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Probity", "Supporting students", "Teaching"],
  stem:
    "You are an F2 doctor who runs a weekly teaching session for final-year medical students on your ward. Attendance is recorded on a sheet that you sign, and the medical school uses it to check students have met their attendance requirements.\n\n" +
    "Tom, one of the students, missed yesterday's session. Today he asks you to sign the sheet for him, explaining that he had \"a family thing\" he had to deal with. He seems a little embarrassed.",
  options: [
    { text: "Decline to sign, and suggest he speaks to the medical school about the session he missed.",
      brief: "Keeps the record accurate while pointing him to the people who can authorise an absence.",
      detailed: "Signing would create a false record, however understandable his reason. The medical school will have a process for authorised absence, and genuine family problems are exactly what it exists for. Declining kindly, and explaining what he can do instead, solves his problem honestly." },
    { text: "Ask Tom whether everything is all right, and mention the student support services if he needs them.",
      brief: "His 'family thing' may be serious, and a little interest may make a difference.",
      detailed: "Students often hide significant difficulties. Asking gently whether he is okay, and making sure he knows where to get support, shows care and may help him. It ranks below declining because the attendance question still needs a clear, honest answer." },
    { text: "Offer to go over the main points of the session with him at another time.",
      brief: "A kind way to help him catch up on what he missed.",
      detailed: "This helps Tom's learning, which is the point of the session, and is a generous offer. On its own, though, it doesn't deal with his request to sign the sheet." },
    { text: "Sign the sheet, as he had a genuine reason for missing the session.",
      brief: "Sympathetic, but it records attendance that didn't happen.",
      detailed: "His reason may well be genuine, which is what makes this tempting. But the sheet records attendance, not reasons, and signing it would be dishonest. Authorised absence is for the medical school to decide." },
    { text: "Sign it, and suggest he does the same for you if you ever miss a session.",
      brief: "Creates a false record and invites further dishonesty.",
      detailed: "This combines the falsification of signing with an explicit suggestion of reciprocal dishonesty. It turns a single lapse into an arrangement, and is the least professional option." }
  ],
  explanation: {
    issue: "This tests whether you keep records honest when a sympathetic request makes falsifying them feel harmless.",
    keyDetails: "The sheet is used by the medical school to check attendance. Tom has a reason that may be genuine. He's embarrassed, which makes refusing feel unkind.",
    reasoning: "{1} keeps the record honest and directs him to the right process, {2} attends to his wellbeing, and {3} helps his learning. {4} and {5} both falsify the record, and {5} adds a suggestion of further dishonesty.",
    competing: "Some would put asking about his wellbeing first, as the kinder opening. You might well start the conversation that way, but the key ranks the honest answer to his request first because that is the decision being tested."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, 'Acting with honesty and integrity'; Domain 1, supporting the education of students." }
  ],
  tags: ["probity", "teaching", "medical students", "attendance"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-048", letters: "BDF", format: "multiple_choice", difficulty: "moderate",
  title: "An absent supervisor", setting: "Psychiatry", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Managing your training", "Advocating for yourself", "Using proper channels"],
  stem:
    "You are an F2 doctor in a psychiatry placement. Your educational supervisor has cancelled your last three meetings at short notice and doesn't reply to emails. Your annual review of competence progression (ARCP) is in eight weeks.\n\n" +
    "Your e-portfolio still needs your supervisor's mid-point review and several sign-offs, and you are worried about falling behind. Colleagues say she is very stretched with clinical work.",
  options: [
    { text: "Email your supervisor proposing specific times to meet, and explain your ARCP deadline.",
      brief: "A clear, specific request makes it easier for a busy supervisor to say yes.",
      detailed: "Open-ended requests are easy to put off. Offering particular slots and explaining that the ARCP is eight weeks away makes the need concrete and shows you are being organised. Many supervisors respond well once they understand the deadline." },
    { text: "Ask the foundation programme tutor or administrator for advice on getting the meetings you need.",
      brief: "They oversee supervision and can help if the usual route isn't working.",
      detailed: "Foundation programme tutors and administrators deal with supervision problems regularly and can contact supervisors, arrange alternatives, or make sure the ARCP panel is aware. Asking for advice is not a complaint; it is using the support built into the programme." },
    { text: "Keep working on the parts of your portfolio you can complete without your supervisor.",
      brief: "Progress on reflections and assessments by other assessors reduces the pressure later.",
      detailed: "Much of the portfolio, such as supervised learning events with other clinicians and reflective entries, doesn't depend on your educational supervisor. Completing these now means the meeting, when it happens, can focus on the sign-offs only she can give." },
    { text: "Complete your supervisor's sections of the review yourself, so that she only needs to sign them.",
      brief: "Supervisor reviews must reflect the supervisor's own judgement, not yours.",
      detailed: "It may seem helpful to a busy supervisor, and some do ask trainees to draft parts of a review. But writing her assessment of you, for her to sign without discussion, undermines its purpose and could be seen as misrepresenting your progress." },
    { text: "Wait for your supervisor to get in touch, as she knows your ARCP date.",
      brief: "Passive, when the meetings are already slipping and the deadline is fixed.",
      detailed: "Assuming she will remember is understandable, but three cancelled meetings suggest she won't without a prompt. Taking responsibility for your own training includes chasing what you need." },
    { text: "Give feedback about your supervisor in the GMC's national training survey, and wait for the deanery to act.",
      brief: "A legitimate feedback route, but too slow to help with an ARCP in eight weeks.",
      detailed: "The national training survey is a valuable way of highlighting problems with supervision, and you might well mention it there. But it runs once a year and won't produce a meeting in time for your review." },
    { text: "Ask another consultant you work with to sign off your educational supervisor's review instead.",
      brief: "Another consultant can't stand in for your educational supervisor without the programme's agreement.",
      detailed: "Other consultants can complete supervised learning events and give feedback, but the educational supervisor's review is a specific role. Substituting someone else without agreement from the programme could leave your ARCP evidence incomplete." },
    { text: "Turn up at your supervisor's clinic and insist on meeting her between patients.",
      brief: "Shows urgency, but is likely to irritate her and disrupt her patients.",
      detailed: "Your frustration is understandable, but confronting her in clinic puts her in a difficult position and is unlikely to lead to the considered review you need." }
  ],
  explanation: {
    issue: "This tests how you take responsibility for your own training when supervision isn't happening, using constructive and proper routes.",
    keyDetails: "Three meetings have been cancelled, emails aren't answered, and the ARCP is eight weeks away. Your supervisor is overstretched rather than unwilling. Much of the portfolio doesn't depend on her.",
    reasoning: "{k1} makes a clear, specific request, {k2} brings in the programme's support, and {k3} makes progress where you can. The distractors either misuse the supervisor's role ({d1}, {d4}), wait passively ({d2}, {d3}), or confront her unhelpfully ({d5}).",
    competing: "{d3} is legitimate feedback but works on the wrong timescale. Raising supervision problems in the national survey is reasonable as well as, not instead of, getting help now."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, taking responsibility for your learning and development." }
  ],
  tags: ["supervision", "ARCP", "portfolio", "training"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-049", letters: "CBADE", format: "ranking", difficulty: "hard",
  title: "Leaving before the scan", setting: "Emergency department", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Assessing capacity", "Persuasion", "Best interests"],
  stem:
    "You are an F2 doctor in the Emergency Department at 01:00. Mr Wood, 32, has been drinking heavily and fell down a flight of stairs. He has a scalp wound, vomited once on arrival, and his GCS is 14. The registrar has requested an urgent CT head.\n\n" +
    "Mr Wood pulls out his cannula, says he is \"fine\" and that he's going home, and starts walking towards the exit. He is unsteady and slurring his words. His friend, who brought him in, has left.",
  options: [
    { text: "Try to persuade him to stay, explaining the risk of bleeding inside the skull in simple terms.",
      brief: "The least restrictive first step, and many patients stay once they understand the specific risk.",
      detailed: "Talking to him calmly, in plain words, about why the scan matters may be enough to change his mind. It is the least restrictive option, and giving him this information is also the first step of any capacity assessment. If he won't listen, the decision about whether he can be kept needs senior input quickly." },
    { text: "Ask your registrar to help assess whether Mr Wood has capacity to refuse the scan.",
      brief: "Whether he can be kept depends on his capacity, and a head injury plus alcohol may impair it.",
      detailed: "If Mr Wood has capacity, he can refuse; if he doesn't, the team may act in his best interests to keep him safe, including preventing him from leaving. Intoxication and a possible brain injury can both affect capacity, so a proper, decision-specific assessment is essential, and it is a judgement best made with a senior. It ranks just after talking to him only because you can start that straight away; in practice you'd do both at once." },
    { text: "Ask security to stop him leaving while his capacity is assessed.",
      brief: "May be justified if you reasonably believe he lacks capacity, but premature as a first step.",
      detailed: "If there is reason to believe a patient lacks capacity and is at serious risk, proportionate steps to stop him leaving can be lawful while he is assessed. This option isn't wrong in itself, which is what makes the question hard. It ranks third because talking to him and assessing capacity should come first, and restraint should be the last resort." },
    { text: "Let him leave, document his refusal, and advise him to come back if he feels worse.",
      brief: "Treats him as having capacity without assessing it, despite clear reasons to doubt it.",
      detailed: "Adults with capacity can refuse investigations, and documenting a refusal and giving head injury advice are good practice. But Mr Wood is intoxicated, has a head injury and is confused enough to be slurring and unsteady. Letting him leave without assessing his capacity could mean missing a bleed that proves fatal." },
    { text: "Call the police and ask them to take him somewhere safe for the night.",
      brief: "Inappropriate: the police aren't a substitute for medical assessment of a head injury.",
      detailed: "The police may need to be involved if someone is at risk in a public place, but a patient in an emergency department with a possible brain injury needs medical assessment, not custody. This would move him away from the care he needs." }
  ],
  explanation: {
    issue: "This tests how you handle a patient who wants to leave when both intoxication and a head injury may be affecting his capacity, balancing autonomy against his safety.",
    keyDetails: "He has a head injury, has vomited, has a GCS of 14, and has been drinking. He is unsteady and slurring. A CT has been requested urgently. He is alone.",
    reasoning: "{1} tries to secure his agreement in the least restrictive way, and {2} addresses the central question of capacity with senior support. {3} may be needed but should follow assessment, {4} assumes capacity without checking, and {5} removes him from medical care altogether.",
    competing: "This is hard because the order of {1} and {2} is close: in practice you'd talk to him while calling for help. The ordering of {3} and {4} reflects that, where capacity is doubtful and the risk is serious, a proportionate step to keep him safe while he's assessed is more defensible than letting him go."
  },
  refs: [
    { ref: "mca1", note: "Assessing capacity for a specific decision; giving the person relevant information." },
    { ref: "mca4", note: "Acting in a person's best interests when they lack capacity." },
    { ref: "consent", note: "Patients' right to refuse, and assessing capacity when it's in doubt." }
  ],
  tags: ["capacity", "head injury", "intoxication", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-050", letters: "ABD", format: "multiple_choice", difficulty: "moderate",
  title: "A call from Oscar's father", setting: "Paediatrics", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Parental responsibility", "Confidentiality", "Safeguarding"],
  stem:
    "You are an F2 doctor on a children's surgical ward. Oscar, 6, had an appendicectomy yesterday and is recovering well. His mother told the nurses on admission that she and Oscar's father are separated, that he \"has no contact\" with Oscar, and that she doesn't want him told anything.\n\n" +
    "This afternoon a man phones the ward, says he is Oscar's father, and asks you how Oscar's operation went. He sounds worried and says he only found out from a friend.",
  options: [
    { text: "Explain that you can't share details until you've checked who he is and his position.",
      brief: "You can't verify a caller's identity or parental responsibility on the phone.",
      detailed: "Anyone can say they are a parent on the phone. Explaining calmly that you need to confirm his identity and whether he has parental responsibility before sharing information protects Oscar while not dismissing a worried father. It also gives you time to find out what you need to know." },
    { text: "Check whether any court orders or safeguarding concerns affect his father's involvement.",
      brief: "Separation alone doesn't remove a father's rights; a court order or safeguarding concern might.",
      detailed: "Many separated fathers have parental responsibility and the right to information about their child, even if the mother would rather they didn't. What matters is whether there is a court order restricting his involvement, or a safeguarding concern. Checking this establishes whether you can share information, and how." },
    { text: "Discuss the situation with your registrar or the safeguarding team before sharing anything.",
      brief: "Questions of parental responsibility and conflicting parental wishes benefit from senior advice.",
      detailed: "This is a common but complex situation, with legal and safeguarding dimensions. A senior or the safeguarding team can help you decide what can be shared, with whom, and how to handle the mother's wishes alongside the father's rights." },
    { text: "Tell him you can't give him any information, as Oscar's mother has asked you not to.",
      brief: "The mother's wishes alone don't override a father's parental responsibility.",
      detailed: "Respecting the mother's request feels like the cautious choice. But if the father has parental responsibility and there's no court order or safeguarding concern, he may be entitled to information about Oscar. Refusing on the mother's word alone may be wrong." },
    { text: "Give him a brief update on how the operation went, as he says he is Oscar's father and is clearly worried.",
      brief: "Shares information before confirming who he is or whether anything restricts his involvement.",
      detailed: "If he is Oscar's father with parental responsibility, he may be entitled to know. But you can't confirm that on the phone, and there may be reasons, such as a court order, why information shouldn't be shared. Giving an update now skips the checks." },
    { text: "Tell him which ward Oscar is on and the visiting times, so he can come and see him.",
      brief: "Reveals Oscar's location before you know whether that is safe.",
      detailed: "Encouraging contact may seem kind, but if there are court orders or safeguarding concerns, telling him where Oscar is could put Oscar or his mother at risk. This needs checking first." },
    { text: "Ask Oscar whether he would like his father to know how he is.",
      brief: "Places a six-year-old in the middle of his parents' conflict.",
      detailed: "Children's views matter, but asking a six-year-old to decide whether his father is told about his operation puts an unfair burden on him and doesn't address the legal question." },
    { text: "Ask Oscar's mother whether she would be willing to update his father herself.",
      brief: "Puts the decision back on her, and doesn't settle whether you can share information.",
      detailed: "Encouraging parents to communicate can sometimes help, but the mother has made her wishes clear. Asking her to call him doesn't settle whether you can share information, and may inflame the situation." }
  ],
  explanation: {
    issue: "This tests how you handle a request for information about a child from a separated parent, balancing confidentiality, parental responsibility and safeguarding.",
    keyDetails: "The caller's identity is unverified. The mother has asked that he isn't told anything, but separation alone doesn't remove a father's rights. You don't know about any court orders or safeguarding concerns.",
    reasoning: "{k1} protects Oscar while you check, {k2} establishes the facts that determine what can be shared, and {k3} brings in senior and safeguarding advice. The distractors either refuse or share without checking ({d1}, {d2}, {d3}), or push the decision onto Oscar or his mother ({d4}, {d5}).",
    competing: "{d1} feels like the safe option, but it treats the mother's wishes as decisive when the law may not. That's why checking for court orders or concerns matters more than either parent's preference."
  },
  refs: [
    { ref: "u18", note: "Parental responsibility, and sharing information with parents." },
    { ref: "confidentiality", note: "Verifying identity and the legal basis before disclosing information." }
  ],
  tags: ["parental responsibility", "confidentiality", "paediatrics", "separated parents"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-051", letters: "BECAD", format: "ranking", difficulty: "moderate",
  title: "An extension to training", setting: "Orthopaedics", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Responding to setbacks", "Seeking support", "Planning"],
  stem:
    "You are an F2 doctor in orthopaedics. You have just been told that your ARCP panel has given you an outcome requiring a three-month extension to your training, mainly because of gaps in your portfolio. Earlier in the year you had a difficult few months after a close family bereavement, which you feel the panel didn't take into account.\n\n" +
    "You feel upset and embarrassed, and you were hoping to start a clinical fellowship in August.",
  options: [
    { text: "Meet your educational supervisor to understand the panel's reasons and agree a plan for the extension.",
      brief: "Understanding exactly what's needed is the fastest route through the extension.",
      detailed: "An extension usually comes with specific requirements. Meeting your supervisor to understand them, and to plan how to meet them, gives you control over what happens next. They can also advise on whether your circumstances were properly considered." },
    { text: "Ask for information about the ARCP review process, and seek advice if you think the decision was wrong.",
      brief: "If relevant information wasn't considered, there is a formal way to raise it.",
      detailed: "ARCP outcomes can be reviewed, and if your circumstances weren't taken into account, that may be relevant. Finding out how the process works, and taking advice before deciding, is a reasonable step. It ranks below planning with your supervisor because that conversation will help you decide whether a review is worthwhile." },
    { text: "Talk to someone you trust about how you're feeling.",
      brief: "A setback like this is hard, and support helps you deal with it well.",
      detailed: "Feeling upset and embarrassed is understandable, and talking it through with a friend, family member or your trust's staff support service can help. It ranks third because it doesn't address the practical steps, though it is important alongside them." },
    { text: "Tell your colleagues that the ARCP panel treated you unfairly.",
      brief: "Venting may feel better, but it won't change the outcome and may affect how you're seen.",
      detailed: "It's natural to want to share your frustration. But telling colleagues the panel was unfair, before you've understood its reasons or used the proper routes, is unlikely to help and may be unprofessional." },
    { text: "Put in only the minimum effort during the extension, as the outcome wasn't your fault.",
      brief: "Disengaging risks a further adverse outcome, whatever the fairness of the first.",
      detailed: "If you believe the outcome was unfair, the right response is to raise it properly. Disengaging from the extension makes it more likely you'll fall short again, and affects your colleagues and patients." }
  ],
  explanation: {
    issue: "This tests how you respond to an adverse training outcome: constructively, using proper routes, and looking after yourself.",
    keyDetails: "The outcome is mainly about portfolio gaps. You believe your circumstances weren't taken into account. You're upset, and you have plans that may be affected.",
    reasoning: "{1} makes a practical plan, {2} uses the formal route if you think something was missed, and {3} looks after your wellbeing. {4} and {5} are reactions to the frustration rather than responses to the outcome.",
    competing: "Some would rank seeking a review higher, given the bereavement. The key puts the supervisor meeting first because it clarifies whether a review is justified and what the extension involves."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, reflecting on feedback and taking responsibility for your development." }
  ],
  tags: ["ARCP", "training", "setbacks", "resilience"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-052", letters: "FGH", format: "multiple_choice", difficulty: "easy",
  title: "A mother on the phone", setting: "Out-of-hours / community", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Crisis response", "Listening to carers", "Urgent escalation"],
  stem:
    "You are an F2 doctor working in an out-of-hours GP service. At 21:30 you call back Mrs Grey, whose son Ben, 19, is autistic. She is very distressed.\n\n" +
    "Ben has been increasingly agitated for two days, smashed a door tonight, and said he wants to \"end it all\". Mrs Grey has tried the local mental health crisis line three times but couldn't get through. She says Ben is now in his room with the door shut, she doesn't think she could get him into the car, and she doesn't know what to do.",
  options: [
    { text: "Ask whether anyone is in immediate danger, and advise her to call 999 if they are.",
      brief: "Immediate safety is the first question, and emergency services may be needed.",
      detailed: "Ben has spoken about ending his life and has been destructive tonight. Finding out whether he or anyone else is at immediate risk, for example whether he has access to means or is harming himself now, decides how urgent the response must be. If there is immediate danger, 999 is the right call." },
    { text: "Stay calm, listen, and find out what is happening now and what usually helps Ben.",
      brief: "A calm, listening approach helps her and gives you the information you need.",
      detailed: "Mrs Grey knows Ben well. Listening to her account, and asking what usually helps him when he is distressed, gives you a clearer picture of the risk and of how to support them both tonight. A calm voice on the phone can also help her feel less alone." },
    { text: "Contact the mental health crisis team yourself to arrange an urgent assessment for Ben.",
      brief: "Professional routes to the crisis team often work when public lines are busy.",
      detailed: "Services usually have direct professional lines, and a referral from a clinician carries weight. Arranging an urgent assessment yourself takes the burden off a distressed parent and makes sure Ben's risk is assessed by the right team tonight." },
    { text: "Advise Mrs Grey to keep trying the crisis line until she gets through.",
      brief: "Leaves a distressed parent to keep calling a line that isn't answering.",
      detailed: "The crisis line is the right service, but she has already tried three times. Telling her to keep trying puts the burden back on her, when you can contact the team directly." },
    { text: "Advise her to bring Ben to the Emergency Department straight away.",
      brief: "May be appropriate, but she may not be able to get him there safely, and the crisis team may be better placed.",
      detailed: "Emergency departments do assess people in mental health crisis, and this could be part of the plan. But Ben is shut in his room and agitated, and moving him may not be safe or possible. Arranging the right assessment, and calling 999 if there's immediate danger, is more appropriate than an instruction to travel." },
    { text: "Suggest she gives Ben a dose of any sedating medication he has at home.",
      brief: "Advising medication without assessment is unsafe.",
      detailed: "Sedating medication may have a role in Ben's care, but recommending it over the phone, without knowing what he has, his history or the risks, could cause harm." },
    { text: "Book Ben a routine appointment with his own GP for the next available slot.",
      brief: "Far too slow for someone talking about ending his life.",
      detailed: "Ben's GP should be informed and involved in his ongoing care, but a routine appointment doesn't address tonight's risk." },
    { text: "Tell her this sounds more like a behavioural problem related to his autism than a mental health crisis.",
      brief: "Dismisses a disclosure of suicidal thoughts and risks missing a serious risk.",
      detailed: "Autistic people can have distress that looks like behaviour, but they also have higher rates of mental health problems and suicide. Attributing his statements to autism without assessment is dismissive and potentially dangerous." }
  ],
  explanation: {
    issue: "This tests how you respond to a carer reporting a mental health crisis when services seem unreachable: assessing immediate risk, supporting the carer, and getting the right help.",
    keyDetails: "Ben has talked about ending his life and has been destructive tonight. His mother can't reach the crisis line. He is shut in his room, so his current state is unknown.",
    reasoning: "{k1} establishes immediate safety, {k2} supports Mrs Grey and gathers information, and {k3} arranges the specialist assessment he needs. The distractors either leave the burden with her ({d1}), give unsafe or impractical advice ({d2}, {d3}), delay ({d4}), or dismiss the risk ({d5}).",
    competing: "{d2} is reasonable in some situations, and the crisis team might advise it. The key prefers arranging assessment directly because Ben may not be safe or willing to travel."
  },
  refs: [
    { ref: "ng225", note: "Responding to people at risk of self-harm or suicide, including urgent assessment." },
    { ref: "gmp", note: "Domain 2, working with carers and responding to patients' needs." }
  ],
  tags: ["mental health crisis", "autism", "carers", "out-of-hours"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-053", letters: "DACEB", format: "ranking", difficulty: "moderate",
  title: "An invitation for a drink", setting: "General practice", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Professional boundaries", "Honest communication", "Seeking advice"],
  stem:
    "You are an F2 doctor in a GP practice. Over the past three months you have seen Mr Collins, 34, regularly for a knee injury, and you have got on well. At what is likely to be his final appointment for the knee, he thanks you and asks whether you'd like to go for a drink with him some time.\n\n" +
    "He remains registered at the practice, and you are working there for another two months.",
  options: [
    { text: "Politely decline, explaining that it wouldn't be appropriate while he is a patient at the practice.",
      brief: "Clear, kind, and maintains the professional relationship.",
      detailed: "Mr Collins remains a patient at the practice where you work, and you have been his doctor for months. A friendly but clear refusal, without embarrassing him, maintains the boundary that protects both of you. Being straightforward also avoids any misunderstanding." },
    { text: "Let your GP supervisor know about the invitation, and record it briefly in the notes.",
      brief: "Being open about boundary issues protects you and the patient.",
      detailed: "Telling your supervisor and making a factual note is standard practice when a patient makes a personal approach. It means the practice is aware if anything further happens, and shows you handled it professionally. It ranks second because the most important thing is how you respond to him in the moment." },
    { text: "Make light of the invitation and move on without giving a clear answer.",
      brief: "Avoids awkwardness but may leave him thinking the answer is 'not yet'.",
      detailed: "Laughing it off is a common response to an awkward moment. But without a clear answer, Mr Collins may misunderstand and ask again, which can be more uncomfortable for both of you later." },
    { text: "Suggest that you could meet once he has registered with a different practice.",
      brief: "Implies a relationship would be fine with a change of practice, and encourages him to act on it.",
      detailed: "Relationships with former patients aren't always prohibited, but GMC guidance asks doctors to consider factors such as the nature of the previous relationship and the patient's vulnerability. Suggesting he change practice so you can meet invites him to end a clinical relationship for personal reasons, which isn't appropriate." },
    { text: "Accept, as this is his final appointment for the knee.",
      brief: "He remains a patient at the practice where you work, so this crosses a professional boundary.",
      detailed: "The end of one episode of care doesn't end the doctor–patient relationship, especially while he remains registered where you work and you may see him again. Accepting would blur the boundary and could undermine trust in you and the practice." }
  ],
  explanation: {
    issue: "This tests how you maintain professional boundaries when a patient you've got on well with makes a personal approach.",
    keyDetails: "Mr Collins is still registered at the practice, and you are working there for two more months. You have seen him regularly. The approach is friendly and respectful, which makes declining feel awkward.",
    reasoning: "{1} maintains the boundary clearly and kindly, and {2} makes sure the approach is recorded and the practice is aware. {3} avoids the issue, {4} suggests a way round the boundary, and {5} crosses it.",
    competing: "Some would put informing the supervisor first. You would do both, but the key ranks the clear response first because it's what prevents any misunderstanding with Mr Collins."
  },
  refs: [
    { ref: "boundaries", note: "Personal relationships with current and former patients." }
  ],
  tags: ["boundaries", "relationships", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-054", letters: "BCE", format: "multiple_choice", difficulty: "hard",
  title: "Discharges during an outbreak", setting: "Elderly care ward", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Infection prevention and control", "Managing pressure", "Communication with care providers"],
  stem:
    "You are an F2 doctor on an elderly care ward. The ward has just been closed to admissions because of a norovirus outbreak; four patients in one bay have diarrhoea and vomiting.\n\n" +
    "Three of your patients were due to be discharged today: Mr Fox to his own home with his wife, Mrs Dean to a residential care home, and Mr Hale, who has been in the affected bay but has no symptoms, to his own home. The bed manager calls, asking you to complete all three discharges quickly because the hospital needs beds.",
  options: [
    { text: "Assess each patient's symptoms and exposure, and follow the outbreak policy.",
      brief: "Whether each discharge is safe depends on that patient's exposure and the policy, not on bed pressures.",
      detailed: "Outbreak policies usually allow some discharges, often to patients' own homes, provided the patient and family are informed, while restricting others. Checking each patient's symptoms and contact with the affected bay is the basis for deciding which discharges can go ahead safely." },
    { text: "Ask the infection prevention and control team how each discharge should be handled.",
      brief: "The team can advise on the specific rules for this outbreak.",
      detailed: "Infection control teams deal with outbreak discharges every winter, and they will know local policy, for example how long care homes need patients to be symptom-free and whether exposed contacts can go home. Their advice supports a safe decision for each patient." },
    { text: "Tell Mrs Dean's care home about the outbreak before arranging her transfer.",
      brief: "A care home needs to know, so it can protect its other residents.",
      detailed: "Norovirus spreads rapidly in care homes and can be very harmful to frail residents. Care homes need to be told about outbreaks so they can decide, with advice, whether and when to accept a resident back. Being open protects the home's residents and maintains trust between services." },
    { text: "Complete all three discharges today, as each patient is medically fit to leave.",
      brief: "Medical fitness alone isn't enough during an outbreak; exposure and destination matter too.",
      detailed: "The pressure for beds is real, which is what makes this tempting. But sending an exposed patient to a care home, or discharging without following the outbreak policy, risks spreading norovirus to vulnerable people outside the hospital." },
    { text: "Postpone all three discharges until the outbreak has been declared over.",
      brief: "Overcautious: some discharges are often safe and keeping patients in hospital carries its own risks.",
      detailed: "This feels safe, which is why it's a hard distractor. But keeping well patients in an outbreak ward increases their chance of infection and delays beds for others. Policies usually allow carefully considered discharges, especially to patients' own homes." },
    { text: "Arrange Mrs Dean's transfer as planned, and let the care home learn of the outbreak from her discharge summary.",
      brief: "The home needs to know before she arrives, not afterwards.",
      detailed: "The discharge summary may well mention the outbreak, but the home would find out only when she arrives, too late to decide, with advice, whether and when to accept her back. Norovirus spreads rapidly in care homes and can be very harmful to frail residents." },
    { text: "Ask the bed manager to decide which discharges should go ahead.",
      brief: "Bed managers coordinate flow, but the clinical and infection control decisions aren't theirs.",
      detailed: "The bed manager has a legitimate interest in freeing beds and can help with logistics. But whether a patient is safe to discharge during an outbreak is a clinical decision, informed by infection control advice." },
    { text: "Move the three patients to the discharge lounge, so they can leave from there.",
      brief: "Moving potentially exposed patients around the hospital could spread the outbreak.",
      detailed: "Discharge lounges help with flow, but transferring patients from an outbreak ward to a shared area risks spreading infection, and doesn't address whether each discharge is appropriate." }
  ],
  explanation: {
    issue: "This tests how you balance pressure on beds against infection control during an outbreak, making patient-by-patient decisions and communicating honestly with other services.",
    keyDetails: "The ward is closed because of norovirus. The three patients differ: one is going to a care home, one has been in the affected bay, and one is neither. The bed manager is pressing for speed.",
    reasoning: "{k1} assesses each patient, {k2} brings in expert advice, and {k3} makes sure the care home can protect its residents. The distractors either ignore the outbreak ({d1}, {d3}, {d5}), overcorrect ({d2}), or hand a clinical decision to the wrong person ({d4}).",
    competing: "{d2} is the trap here: it sounds responsible, but blanket postponement keeps patients at risk in an outbreak ward and blocks beds unnecessarily. The skill is in judging each discharge on its merits."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, 'Responding to safety risks'; working with other services in patients' interests." },
    { ref: "leadership", note: "Taking account of the wider system, including other care providers, in decisions." }
  ],
  tags: ["infection control", "norovirus", "discharge", "care homes"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-055", letters: "CBDA", format: "ranking", difficulty: "moderate",
  title: "A short-tempered registrar", setting: "Cardiology / respiratory", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Discretion", "Team wellbeing"],
  stem:
    "You are an F2 doctor in cardiology. For the past two weeks your registrar, Dr Mensah, has been short-tempered with everyone, snapping at nurses and juniors on ward rounds. Several colleagues have complained to you about it.\n\n" +
    "Today one of the nurses tells you that Dr Mensah's partner has recently left him. He has never discussed his personal life with you, but you have a good working relationship.",
  options: [
    { text: "Find a quiet moment to ask Dr Mensah how he is, and whether there's anything that would help.",
      brief: "A private, kind question opens the door without assuming anything.",
      detailed: "You don't need to mention what you've heard. Asking simply how he is, in private, gives him the chance to talk if he wants to, and you can mention the staff support available. A colleague noticing can make a real difference, and he may be more aware of his behaviour than people think." },
    { text: "Make a point of being friendly and supportive towards him on ward rounds.",
      brief: "Small kindnesses help, but don't give him a chance to talk or find support.",
      detailed: "Being friendly and patient with him at work can ease the tension and show you're on his side. It ranks second because, on its own, it doesn't give him the chance to talk or point him towards support such as occupational health." },
    { text: "Tell the consultant that Dr Mensah is struggling, without speaking to him first.",
      brief: "The consultant may need to know about the effect on the team, but going behind his back about his private life is premature.",
      detailed: "If his behaviour continues to affect the team or patient care, it may need raising with the consultant. But repeating details of his private life, without speaking to him first, risks embarrassing him and breaching his trust." },
    { text: "Keep out of his way until he seems to be feeling better.",
      brief: "Avoids friction but leaves him unsupported and the team's problem unaddressed.",
      detailed: "Avoidance is an understandable response to someone who is snapping at people. But it leaves him isolated, and doesn't help the colleagues who are affected by his behaviour." }
  ],
  explanation: {
    issue: "This tests how you support a senior colleague who appears to be struggling, with sensitivity to his privacy.",
    keyDetails: "His behaviour is affecting the team. You've heard about his personal situation second-hand. You have a good working relationship with him.",
    reasoning: "{1} offers support directly and privately, and {2} supports him more indirectly. {3} escalates prematurely and shares private information, and {4} leaves him and the team unsupported.",
    competing: "If his behaviour began to affect patient care, raising it with the consultant would become appropriate. The key reflects that, at this stage, a supportive conversation is the right first step."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues and contributing to a positive working environment." }
  ],
  tags: ["colleague wellbeing", "teamwork", "cardiology", "support"]
}
];
