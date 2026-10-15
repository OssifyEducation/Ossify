// Mock 3, part 4 (sjt-338 to sjt-350). Pool mock-3: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-3";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-338", pool, letters: "ADF", format: "multiple_choice", difficulty: "moderate",
  title: "Borrowing a login", setting: "Cardiology / respiratory", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism", "Safety and quality"],
  competencies: ["Information governance", "Probity", "Teamwork"],
  stem:
    "You are an F2 doctor on a respiratory ward. Your colleague Dr Okoro, another F2, has been locked out of the hospital computer system. He needs to request an urgent CT pulmonary angiogram for a patient he has just assessed.\n\n" +
    "He asks to use your login, saying, \"It'll only take a minute, and it's for the patient.\"",
  options: [
    // keyed
    { text: "Decline to share your login.",
      brief: "Requests are recorded under the logged-in user.",
      detailed: "The system records the request as yours, so you would be accountable for a clinical decision you didn't make. Sharing logins also breaches information governance rules." },
    { text: "Request the scan yourself, once you've discussed the patient.",
      brief: "Gets the urgent scan requested properly.",
      detailed: "If you understand the clinical reasoning and agree, you can make the request under your own name and take responsibility for it. This keeps the record accurate and avoids delay." },
    { text: "Suggest he contacts the IT helpdesk to unlock his account.",
      brief: "Solves the underlying problem.",
      detailed: "He will need access for the rest of his shift. Getting his account unlocked quickly fixes the problem." },
    // distractors
    { text: "Log in for him and let him make the request.",
      brief: "The request would still appear as yours.",
      detailed: "This is the same as sharing your login: the record would show you made a request you didn't make." },
    { text: "Ask a nurse to request the scan.",
      brief: "Nurses usually can't request this kind of scan.",
      detailed: "Requests for a CT pulmonary angiogram generally need a doctor, and this passes the problem to someone else." },
    { text: "Tell him to leave the request until his account has been unlocked.",
      brief: "Delays an urgent scan.",
      detailed: "A suspected pulmonary embolism needs prompt imaging. Waiting could harm the patient." },
    { text: "Share your login this once, as it's urgent.",
      brief: "Urgency doesn't justify breaching security rules.",
      detailed: "There is a safe alternative: requesting it yourself. Sharing your login is unnecessary." },
    { text: "Write a paper request with his name and your signature.",
      brief: "Mixes up who is responsible for the request.",
      detailed: "This creates confusion about who requested the scan and doesn't follow the usual process." }
  ],
  explanation: {
    issue: "This tests whether you keep to information governance rules under time pressure, while still getting the patient the care they need.",
    keyDetails: "The scan is urgent. His account is locked. Sharing logins breaches rules. You can request it yourself.",
    reasoning: "{k1} protects the integrity of the record, {k2} gets the scan requested properly, and {k3} fixes his access. The distractors share access in effect ({d1}, {d4}), pass on the problem ({d2}), delay ({d3}), or confuse responsibility ({d5}).",
    competing: "{d4} is tempting because it is urgent. But requesting it yourself is just as quick and doesn't breach the rules."
  },
  refs: [
    { ref: "confidentiality", note: "Protecting patient records and access to them." },
    { ref: "gmp", note: "Domain 4, honesty and integrity in records." }
  ],
  tags: ["information governance", "logins", "probity", "respiratory"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-339", pool, letters: "ACDB", format: "ranking", difficulty: "hard",
  title: "Weight-bearing advice", setting: "Orthopaedics", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Challenging seniors", "Patient safety", "Attention to detail"],
  stem:
    "You are an F2 doctor in orthopaedics, writing a discharge letter for Mrs Hart, 67, who had an ankle fracture fixed. The operation note, written by the consultant, says she must not bear weight on that leg for six weeks.\n\n" +
    "The registrar, who didn't do the operation, tells you to write \"full weight-bearing as tolerated\". She is going home this afternoon.",
  options: [
    { text: "Show the registrar the operation note and ask him to recheck.",
      brief: "He may not have seen it, and this resolves the discrepancy directly.",
      detailed: "The registrar may be thinking of a different patient or may not have read the note. Showing him gives him the chance to correct it. It ranks first." },
    { text: "Ask the consultant who operated to clarify the instructions.",
      brief: "The operating surgeon knows what was intended.",
      detailed: "If the discrepancy isn't resolved, the operating surgeon should decide. It ranks second because the registrar should have the chance to reconsider first." },
    { text: "Write the registrar's advice, but note the discrepancy in the letter.",
      brief: "Flags the problem, but still gives potentially unsafe advice.",
      detailed: "Recording the discrepancy is better than ignoring it, but she would go home with advice that may harm the repair. It ranks third." },
    { text: "Write the registrar's advice without mentioning the operation note.",
      brief: "Could lead to failure of the fixation.",
      detailed: "If the operation note is correct, bearing weight could damage the repair. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you challenge a senior's instruction that conflicts with the operating surgeon's documented plan.",
    keyDetails: "The operation note says non-weight-bearing. The registrar says full weight-bearing. He didn't do the operation. She is going home today.",
    reasoning: "{1} raises it with the registrar directly, and {2} involves the operating surgeon. {3} flags it but gives unsafe advice, and {4} ignores it.",
    competing: "Some would go straight to the operating surgeon. The key gives the registrar the chance to correct it first, which is quicker and respectful."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, raising concerns about care, including with seniors." }
  ],
  tags: ["discharge", "orthopaedics", "challenging seniors", "safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-340", pool, letters: "BFG", format: "multiple_choice", difficulty: "moderate",
  title: "Bruises at a barbecue", setting: "Non-clinical (teaching, audit, social)", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Safety and quality"],
  competencies: ["Child safeguarding", "Confidentiality", "Professional judgement"],
  stem:
    "You are an F2 doctor at a colleague's family barbecue. You notice that his four-year-old son has several bruises on his upper arms and the backs of his legs.\n\n" +
    "When another guest asks about them, your colleague's partner says quickly that the boy \"fell off his bike\". The pattern doesn't look like a fall to you.",
  options: [
    // keyed
    { text: "Write down what you saw and what was said, soon afterwards.",
      brief: "An accurate record supports any later assessment.",
      detailed: "Details fade quickly. Noting the location and pattern of the bruises, and the explanation given, helps if a concern is raised." },
    { text: "Ask your trust's named safeguarding doctor for advice.",
      brief: "Expert advice helps you decide what to do.",
      detailed: "Concerns about a child apply outside work too. The safeguarding lead can advise whether a referral to children's social care is needed." },
    { text: "Share the concern only with those who need to know.",
      brief: "Protects the family and the child while it is looked into.",
      detailed: "Gossip could harm the family if your concern is unfounded, or alert someone if it isn't. Sharing only with those who need to know is appropriate." },
    // distractors
    { text: "Ask your colleague about the bruises when you next see him.",
      brief: "Could alert the family and make things harder for the child.",
      detailed: "If the child is being harmed, discussing it with the family may increase the risk. The safeguarding team can advise how to approach this." },
    { text: "Leave it, as your colleague is a good doctor and a caring parent.",
      brief: "Professional standing doesn't rule out a risk to a child.",
      detailed: "Abuse occurs in all kinds of families. Your relationship with him shouldn't stop you acting on a concern." },
    { text: "Ask the boy how he got the bruises.",
      brief: "Questioning a child can distress him and affect any later enquiry.",
      detailed: "If he tells you something, listen, but actively questioning him isn't your role." },
    { text: "Mention it to other colleagues at the barbecue to see what they think.",
      brief: "Spreads a sensitive concern unnecessarily.",
      detailed: "This could damage the family's reputation and doesn't follow proper routes." },
    { text: "Phone the police that evening.",
      brief: "Premature without immediate danger.",
      detailed: "Unless the child is in immediate danger, advice from the safeguarding team is the right first step." }
  ],
  explanation: {
    issue: "This tests whether you act on a safeguarding concern outside work, even when it involves a colleague, using appropriate routes.",
    keyDetails: "The bruising pattern is concerning. The explanation doesn't fit. The family belongs to a colleague. There is no immediate danger.",
    reasoning: "{k1} records what you saw, {k2} gets expert advice, and {k3} keeps the concern confidential. The distractors alert the family ({d1}), ignore it ({d2}), question the child ({d3}), spread it ({d4}), or escalate prematurely ({d5}).",
    competing: "{d1} may feel natural with a colleague, but it could increase the risk to the child."
  },
  refs: [
    { ref: "children", note: "Acting on concerns about children you come into contact with, including outside work." },
    { ref: "workingtogether", note: "Recognising and referring concerns about children." }
  ],
  tags: ["safeguarding", "children", "colleagues", "outside work"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-341", pool, letters: "DBECA", format: "ranking", difficulty: "moderate",
  title: "Leave cancelled", setting: "Emergency department", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Negotiation", "Professionalism", "Work–life balance"],
  stem:
    "You are an F2 doctor in the Emergency Department. Six months ago your annual leave was approved for next week, when you are travelling abroad for your sister's wedding. The flights are non-refundable.\n\n" +
    "Today the rota coordinator tells you your leave is cancelled because of a gap in the rota.",
  options: [
    { text: "Explain that the leave was approved, and why it matters.",
      brief: "A calm conversation may resolve it.",
      detailed: "The coordinator may not know the leave was approved months ago or what it is for. Explaining calmly may lead them to find another solution. It ranks first." },
    { text: "Discuss it with your educational supervisor.",
      brief: "Support if the coordinator can't help.",
      detailed: "Your supervisor can support you and may be able to help resolve it with the department. It ranks second." },
    { text: "Offer to help find cover, such as swapping a shift later.",
      brief: "Constructive, though it isn't your responsibility.",
      detailed: "Offering to help shows goodwill and may solve the problem. It ranks third because filling rota gaps is the department's responsibility." },
    { text: "Cancel your plans to cover the gap.",
      brief: "A large personal cost when the leave was approved.",
      detailed: "This helps the rota but costs you a family event and money. You aren't obliged to accept it without discussion." },
    { text: "Phone in sick next week.",
      brief: "Dishonest.",
      detailed: "Reporting sickness when you aren't ill is dishonest and a probity concern. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to a late cancellation of approved leave, using honest, constructive routes.",
    keyDetails: "The leave was approved six months ago. It is for a family wedding. The cancellation is at short notice.",
    reasoning: "{1} raises it directly, {2} gets support, and {3} offers help. {4} gives up without discussion, and {5} is dishonest.",
    competing: "Some would offer to help find cover first. The key starts by explaining, because the leave was approved and the department should look for solutions first."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, acting with honesty in all professional dealings." }
  ],
  tags: ["leave", "rota", "honesty", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-342", pool, letters: "ABH", format: "multiple_choice", difficulty: "easy",
  title: "She doesn't want it", setting: "Paediatrics", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Young people's decisions", "Listening", "Teamwork"],
  stem:
    "You are an F2 doctor on a paediatric oncology ward. Leah, 15, has leukaemia and has been offered further chemotherapy after a relapse. Her parents want her to have it.\n\n" +
    "Leah tells you she doesn't want any more treatment because \"it makes me feel awful and I'm tired of being in hospital\".",
  options: [
    // keyed
    { text: "Ask Leah more about her feelings and what matters to her.",
      brief: "Her reasons need to be understood and taken seriously.",
      detailed: "Her experience of treatment, and what she wants from life, are central. Listening helps the team understand her view." },
    { text: "Check she has information she can understand.",
      brief: "Her decision should be informed.",
      detailed: "Age-appropriate information about the benefits, risks and alternatives helps her make an informed decision, and shows respect for her views." },
    { text: "Tell her consultant her views so the team can discuss them.",
      brief: "The consultant and wider team need to know.",
      detailed: "Decisions about young people refusing treatment are complex and need senior and team input, including psychological support for Leah." },
    // distractors
    { text: "Tell Leah that her parents' consent is enough for treatment to continue.",
      brief: "Dismisses her views.",
      detailed: "The law about young people's refusals is complex, but dismissing her views is wrong. They must be heard and taken seriously." },
    { text: "Tell her parents that Leah's decision is final.",
      brief: "Oversimplifies a complex situation.",
      detailed: "Her views carry great weight, but this isn't your decision, and it ignores the need for a team discussion." },
    { text: "Arrange for the hospital to apply to the court.",
      brief: "Premature, and not your decision.",
      detailed: "Court involvement is sometimes needed, but only after full discussion, and the decision is for the senior team." },
    { text: "Ask Leah's parents to persuade her.",
      brief: "Pressure doesn't help her make a decision.",
      detailed: "Family support matters, but asking them to persuade her may make her feel unheard." },
    { text: "Agree with Leah that she should stop treatment.",
      brief: "Takes sides without the team or full information.",
      detailed: "Her feelings are valid, but agreeing to stop treatment isn't your decision and may not reflect a fully informed choice." }
  ],
  explanation: {
    issue: "This tests how you respond when a young person refuses treatment her parents want, respecting her voice and involving the team.",
    keyDetails: "Leah is 15. She has relapsed. She refuses treatment. Her parents want it. The situation is legally and emotionally complex.",
    reasoning: "{k1} listens to her, {k2} makes sure she is informed, and {k3} involves the senior team. The distractors dismiss her ({d1}, {d4}), oversimplify ({d2}, {d5}), or escalate prematurely ({d3}).",
    competing: "{d2} and {d5} both seem to respect her. But the decision is complex and isn't yours, so her views need to go to the team."
  },
  refs: [
    { ref: "u18", note: "Young people's decisions about treatment, including refusal." },
    { ref: "consent", note: "Making sure decisions are informed." }
  ],
  tags: ["young people", "refusal", "oncology", "paediatrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-343", pool, letters: "CBDAE", format: "ranking", difficulty: "moderate",
  title: "\"That was confusing\"", setting: "Intensive care", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Safety and quality", "Knowledge, skills and development"],
  competencies: ["Handover", "Receiving feedback", "Communication"],
  stem:
    "You are an F2 doctor in intensive care. You have just handed over Mr Price, 60, whose kidney function is worsening, to the night nurse, Joy.\n\n" +
    "As you are leaving, Joy says your handover was confusing and she isn't sure what she should be watching for overnight.",
  options: [
    { text: "Go over Mr Price's plan with her again before you leave.",
      brief: "She needs a clear plan for tonight.",
      detailed: "If she isn't sure what to watch for, Mr Price is at risk. Clarifying the plan now, including when to call for help, matters most. It ranks first." },
    { text: "Ask her what was unclear, so you can improve.",
      brief: "Specific feedback helps your handovers.",
      detailed: "Understanding what confused her helps you hand over better in future. It ranks second because the plan for tonight comes first." },
    { text: "Use a structured format, such as SBAR, for future handovers.",
      brief: "Structure makes handovers clearer.",
      detailed: "Structured tools help make sure key information isn't missed. It ranks third because it is about the future." },
    { text: "Explain that it was busy, so she should have asked during handover.",
      brief: "Defensive, and doesn't help Mr Price.",
      detailed: "This may be partly true, but it shifts responsibility and doesn't fix the plan for tonight." },
    { text: "Tell her the plan is in the notes and leave.",
      brief: "Leaves an unclear plan for a deteriorating patient.",
      detailed: "She has told you she isn't sure. Leaving without clarifying puts Mr Price at risk. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to feedback that your handover was unclear, putting patient safety first.",
    keyDetails: "Mr Price's kidney function is worsening. Joy isn't clear what to watch for. You are about to leave.",
    reasoning: "{1} fixes tonight's plan, {2} learns from the feedback, and {3} improves future handovers. {4} is defensive, and {5} leaves the problem unresolved.",
    competing: "Some would ask what was unclear first. The key puts the plan first, because that is what keeps Mr Price safe tonight."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, handing over care clearly." }
  ],
  tags: ["handover", "feedback", "intensive care", "communication"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-344", pool, letters: "CDE", format: "multiple_choice", difficulty: "hard",
  title: "Won't look at it", setting: "General surgery", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Body image", "Psychological support", "Patient-centred care"],
  stem:
    "You are an F2 doctor in general surgery. Ms Fry, 41, had an emergency operation for a perforated bowel five days ago and now has a stoma. She refuses to look at it, cries when the nurses change the bag, and says she \"can't live like this\".\n\n" +
    "She is otherwise recovering well and is due for discharge in a few days.",
  options: [
    // keyed
    { text: "Ask her about how she is feeling and what worries her.",
      brief: "Understanding her distress is the first step.",
      detailed: "Her reaction is understandable after an emergency operation. Listening, and asking gently what she means by 'can't live like this', also helps you judge whether she is at risk." },
    { text: "Ask the stoma nurse specialist to see her.",
      brief: "Specialist support for adjusting to a stoma.",
      detailed: "Stoma nurses help patients come to terms with stomas and learn to manage them at their own pace." },
    { text: "Tell her about psychological and peer support for people with stomas.",
      brief: "Talking to others in her situation can help.",
      detailed: "Psychological support and contact with people who have adjusted to a stoma can make a big difference to body image and confidence." },
    // distractors
    { text: "Tell her she must learn to manage the stoma before she can go home.",
      brief: "Puts pressure on her rather than support.",
      detailed: "Learning stoma care matters for discharge, but presenting it as a condition may increase her distress." },
    { text: "Ask the nurses to show her the stoma anyway, to help her get used to it.",
      brief: "Forcing exposure may increase distress.",
      detailed: "Adjustment needs to happen at her pace, with support." },
    { text: "Prescribe an antidepressant.",
      brief: "Premature without assessment.",
      detailed: "She may need treatment for low mood, but this needs proper assessment first." },
    { text: "Reassure her that most people get used to their stoma.",
      brief: "May feel dismissive.",
      detailed: "Many people do adjust, but saying so now may make her feel her distress isn't being heard." },
    { text: "Arrange for the district nurses to manage her stoma at home.",
      brief: "Avoids the issue rather than addressing it.",
      detailed: "District nurses may support her at home, but this doesn't address her distress." }
  ],
  explanation: {
    issue: "This tests how you respond to a patient's distress about a change in body image after surgery.",
    keyDetails: "She had an emergency stoma. She is distressed and can't look at it. She has said she 'can't live like this'. Discharge is near.",
    reasoning: "{k1} explores her feelings and any risk, {k2} brings in specialist support, and {k3} offers psychological and peer support. The distractors pressure her ({d1}, {d2}), treat prematurely ({d3}), dismiss her ({d4}), or avoid the issue ({d5}).",
    competing: "{d4} is well meant and often true, but she needs to feel heard before she can accept reassurance."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, responding to patients' emotional needs." }
  ],
  tags: ["stoma", "body image", "distress", "surgery"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-345", pool, letters: "ECBAD", format: "ranking", difficulty: "moderate",
  title: "£500 in a card", setting: "Elderly care ward", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Gifts", "Probity", "Kindness"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mrs Gill, 84, who you looked after for three weeks, was discharged home yesterday. Today a nurse hands you a card she left for you.\n\n" +
    "Inside is £500 in cash and a note: \"For you personally. Thank you for being so kind.\"",
  options: [
    { text: "Contact Mrs Gill to thank her and explain you can't accept the money.",
      brief: "Kind, and makes sure the money is returned.",
      detailed: "A large cash gift can't be accepted, but she deserves a warm thank-you. Explaining kindly and arranging for the money to be returned respects her. It ranks first." },
    { text: "Tell the ward manager and follow the trust's gifts policy.",
      brief: "Makes sure the gift is handled transparently.",
      detailed: "The trust's policy will set out how to handle and record the gift, and the ward manager can help. It ranks second because Mrs Gill should hear from you." },
    { text: "Suggest to Mrs Gill that the money goes to the ward charity, if she wishes.",
      brief: "An alternative, if she wants to give something.",
      detailed: "She may prefer this to having it returned. It ranks third because it should be offered as a choice after you've explained you can't keep it." },
    { text: "Keep the money and declare it on the gifts register.",
      brief: "Declaring doesn't make a large cash gift acceptable.",
      detailed: "Declaring is the right process for small gifts, but £500 in cash from a vulnerable older patient shouldn't be kept." },
    { text: "Keep the money, as it was a personal gift.",
      brief: "Inappropriate and undeclared.",
      detailed: "This could be seen as exploiting a vulnerable patient's gratitude. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you handle a large cash gift from a vulnerable patient, kindly and transparently.",
    keyDetails: "The gift is £500 in cash. She is elderly. The gift is personal. She has already gone home.",
    reasoning: "{1} returns it kindly, {2} follows the policy, and {3} offers an alternative. {4} keeps an inappropriate gift, and {5} keeps it undeclared.",
    competing: "Some would tell the ward manager first. The key puts Mrs Gill first because a personal thank-you matters to her, and you can follow the policy alongside."
  },
  refs: [
    { ref: "coi", note: "Gifts from patients and the risk of appearing to influence care." }
  ],
  tags: ["gifts", "boundaries", "elderly care", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-346", pool, letters: "BFH", format: "multiple_choice", difficulty: "moderate",
  title: "Panic after a delivery", setting: "Obstetrics & gynaecology", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Collaboration, teamwork and leadership"],
  competencies: ["Supporting colleagues", "Signposting", "Confidentiality"],
  stem:
    "You are an F2 doctor on the labour ward. Grace, a midwife, tells you during a quiet moment that she has been having panic attacks since a traumatic delivery last month, in which a baby was born in poor condition.\n\n" +
    "She says she is coping at work but dreads her shifts. She asks you not to tell anyone.",
  options: [
    // keyed
    { text: "Listen, and acknowledge how hard it has been.",
      brief: "Feeling heard is important after trauma.",
      detailed: "She has chosen to tell you. Listening without judgement helps her feel less alone." },
    { text: "Encourage her to use the staff support service.",
      brief: "Specialist support can help with trauma reactions.",
      detailed: "Panic attacks after a traumatic event are common and treatable. Staff support services can help confidentially." },
    { text: "Suggest she talks to a professional midwifery advocate.",
      brief: "A source of support within midwifery.",
      detailed: "Professional midwifery advocates offer restorative supervision and support after difficult events." },
    // distractors
    { text: "Tell her to take time off work.",
      brief: "Not your decision, and she says she is coping.",
      detailed: "Time off may help some people, but she hasn't asked for it, and it isn't your decision." },
    { text: "Tell her that panic attacks are normal after a bad delivery.",
      brief: "May minimise her experience.",
      detailed: "Reactions like this are common, but saying they are 'normal' may make her feel she shouldn't seek help." },
    { text: "Tell the labour ward coordinator that she is struggling.",
      brief: "Breaks her confidence without a safety reason.",
      detailed: "She says she is coping and hasn't asked you to tell anyone. Sharing it without her agreement would damage trust." },
    { text: "Suggest she sees her GP about medication.",
      brief: "Her GP may help, but medication isn't the first step.",
      detailed: "Seeing her GP is reasonable, but suggesting medication as the answer is premature." },
    { text: "Avoid mentioning it again, so as not to upset her.",
      brief: "May leave her feeling unsupported.",
      detailed: "She opened up to you. Checking in later shows care." }
  ],
  explanation: {
    issue: "This tests how you support a colleague after a traumatic event, respecting her confidence and pointing her to the right help.",
    keyDetails: "She has panic attacks after a traumatic delivery. She is coping at work. She has asked for confidentiality.",
    reasoning: "{k1} listens, {k2} points to staff support, and {k3} suggests support within midwifery. The distractors overstep ({d1}, {d3}), minimise ({d2}), focus on medication ({d4}), or withdraw ({d5}).",
    competing: "{d4} is reasonable, as her GP can help. The problem is framing medication as the answer before support has been tried."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues." },
    { ref: "nmccode", note: "Midwives' own wellbeing and access to support." }
  ],
  tags: ["colleague support", "trauma", "midwives", "wellbeing"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-347", pool, letters: "CEBDA", format: "ranking", difficulty: "easy",
  title: "Taking credit", setting: "Paediatrics", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Collaboration, teamwork and leadership"],
  competencies: ["Assertiveness", "Teamwork", "Resolving conflict"],
  stem:
    "You are an F2 doctor in paediatrics. On the consultant ward rounds, your fellow F2, Dr Price, often presents patients you have clerked and managed as if he had done the work himself.\n\n" +
    "Your consultant has praised him several times for work you did. It has happened on most ward rounds for two weeks.",
  options: [
    { text: "Talk to Dr Price privately about what's been happening.",
      brief: "A direct, private conversation is the fairest first step.",
      detailed: "He may not realise how it comes across. Raising it privately gives him the chance to change. It ranks first." },
    { text: "Present your own patients on the ward round.",
      brief: "Makes your work visible.",
      detailed: "Agreeing who presents which patients makes your contribution clear. It ranks second because it avoids conflict but doesn't address his behaviour." },
    { text: "Mention it to your educational supervisor.",
      brief: "Support if it continues.",
      detailed: "Your supervisor can advise you, and the issue may matter for your assessments. It ranks third because a direct conversation should come first." },
    { text: "Correct him in front of the consultant on the next ward round.",
      brief: "Public confrontation may cause conflict.",
      detailed: "You may want the record straight, but doing it publicly may embarrass him and disrupt the round." },
    { text: "Do less for patients he might present.",
      brief: "Patients' care would suffer.",
      detailed: "This lets a conflict between colleagues affect patients. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you address a colleague's unfair behaviour constructively, without letting it affect patients.",
    keyDetails: "He presents your work as his own. It has happened repeatedly. The consultant has praised him for it.",
    reasoning: "{1} addresses it directly, {2} makes your work visible, and {3} gets support. {4} creates public conflict, and {5} affects patients.",
    competing: "{2} and {3} are close. The key puts presenting your own patients second because it is a practical step that doesn't require anyone else."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, working constructively with colleagues." }
  ],
  tags: ["teamwork", "conflict", "credit", "paediatrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-348", pool, letters: "AEG", format: "multiple_choice", difficulty: "moderate",
  title: "The curtain won't close", setting: "General medical ward", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Dignity", "Privacy", "Problem-solving"],
  stem:
    "You are an F2 doctor on a general medical ward round. The consultant is examining Mrs Ross, 76, who has had to lift her gown for an abdominal examination.\n\n" +
    "The curtain around her bed doesn't close properly, leaving a gap through which people in the bay and the corridor can see her. She looks uncomfortable.",
  options: [
    // keyed
    { text: "Cover Mrs Ross with a sheet as much as possible.",
      brief: "Immediate protection of her dignity.",
      detailed: "A sheet can cover her while the examination continues. It is a quick, simple way to reduce her exposure." },
    { text: "Close the gap in the curtain during the examination.",
      brief: "Practical privacy now.",
      detailed: "Standing in the gap, or holding the curtain closed, gives her privacy at once." },
    { text: "Report the broken curtain so it is fixed.",
      brief: "Prevents the same problem for other patients.",
      detailed: "A curtain that doesn't close affects every patient in that bed space. Reporting it gets it repaired." },
    // distractors
    { text: "Carry on quickly to keep the exposure brief.",
      brief: "Rushing doesn't protect her privacy.",
      detailed: "Speed doesn't address the gap, and a rushed examination may be less thorough." },
    { text: "Ask Mrs Ross to hold the curtain closed herself.",
      brief: "Unfair, and impractical during an examination.",
      detailed: "She is lying down for an abdominal examination. It isn't her job to protect her own privacy." },
    { text: "Ask people in the bay to look away.",
      brief: "Doesn't reliably protect her.",
      detailed: "This draws attention to her and doesn't stop people seeing." },
    { text: "Complain to the estates department at the end of the week.",
      brief: "Too slow.",
      detailed: "Reporting it is right, but waiting a week leaves the problem for other patients." },
    { text: "Postpone the examination until a side room is free.",
      brief: "Delays care unnecessarily.",
      detailed: "Simple measures can protect her privacy now, so there is no need to delay her examination." }
  ],
  explanation: {
    issue: "This tests whether you notice and fix a threat to a patient's dignity during a routine examination.",
    keyDetails: "The curtain doesn't close. She is exposed and uncomfortable. Simple measures are available.",
    reasoning: "{k1} covers her, {k2} closes the gap, and {k3} gets the curtain fixed. The distractors rush ({d1}), burden her ({d2}), draw attention to her ({d3}), delay the repair ({d4}), or delay her care ({d5}).",
    competing: "{d5} protects her privacy but delays her examination when simple measures would work."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, respecting patients' privacy and dignity." }
  ],
  tags: ["dignity", "privacy", "ward round", "examination"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-349", pool, letters: "BCAD", format: "ranking", difficulty: "hard",
  title: "Refusing to see him", setting: "Psychiatry", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Non-discrimination", "Patient care", "Challenging colleagues"],
  stem:
    "You are an F2 doctor on a psychiatric ward. Mr Hale, 45, who has a previous conviction for a sexual offence, has developed a high temperature and needs a physical health review.\n\n" +
    "Your F2 colleague, who is on call for the ward, says, \"I'm not seeing him after what he's done,\" and asks you to do it instead.",
  options: [
    { text: "See Mr Hale yourself so his care isn't delayed.",
      brief: "His physical health needs attention now.",
      detailed: "He has a fever and needs assessment. Making sure he is seen promptly comes first, whatever the disagreement between colleagues. It ranks first." },
    { text: "Talk with your colleague privately about her refusal.",
      brief: "Her reasons may matter, and the principle needs discussing.",
      detailed: "Doctors mustn't refuse to treat patients because of their past. But she may have a personal reason that deserves sensitivity. A private conversation addresses both. It ranks second." },
    { text: "Raise it with the consultant.",
      brief: "A senior should know, particularly if it continues.",
      detailed: "The consultant may need to address it, especially if it affects care. It ranks third because a direct conversation should come first." },
    { text: "Agree that she doesn't have to see him.",
      brief: "Endorses discrimination against a patient.",
      detailed: "This accepts her refusal without challenge and may affect his future care. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you make sure a patient gets care, and challenge a colleague's refusal to treat him because of his past.",
    keyDetails: "He needs a physical review now. Your colleague refuses because of his conviction. She may have personal reasons.",
    reasoning: "{1} makes sure he is seen, {2} addresses it with your colleague, and {3} involves a senior. {4} accepts discrimination.",
    competing: "Some would talk to your colleague first. The key puts his care first because he is unwell, and the conversation can follow."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, not refusing or delaying treatment because of a patient's background or past." },
    { ref: "beliefs", note: "Personal beliefs must not lead to unfair treatment of patients." }
  ],
  tags: ["discrimination", "psychiatry", "colleagues", "patient care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-350", pool, letters: "ABD", format: "multiple_choice", difficulty: "moderate",
  title: "Does he deserve it?", setting: "Cardiology / respiratory", attribute: P,
  topic: "Equality and fair treatment of patients",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Fair treatment", "Clinical reasoning", "Health promotion"],
  stem:
    "You are an F2 doctor in cardiology. Mr Dale, 61, has angina and has been referred for coronary angiography and possible stenting. He still smokes 20 cigarettes a day.\n\n" +
    "In the team meeting, your consultant says, \"Why should he get a stent if he won't stop smoking? He doesn't deserve it.\"",
  options: [
    // keyed
    { text: "Ask whether smoking changes the benefit of the procedure.",
      brief: "Refocuses the decision on clinical grounds.",
      detailed: "Smoking can affect the risks and benefits of treatment, which is a legitimate clinical consideration. Asking this respectfully moves the discussion from deserving to clinical judgement." },
    { text: "Offer Mr Dale support to stop smoking.",
      brief: "Helps his health whatever is decided.",
      detailed: "Stopping smoking is one of the most effective things he can do for his heart. Offering support, without making it a condition, helps him." },
    { text: "Say respectfully that care shouldn't depend on 'deserving' it.",
      brief: "Challenges an unfair judgement.",
      detailed: "Treatment decisions should be based on clinical need and benefit, not judgements about lifestyle. Saying so politely is part of professional practice." },
    // distractors
    { text: "Agree with the consultant, as smoking caused his disease.",
      brief: "Judging patients by lifestyle isn't fair.",
      detailed: "Smoking contributed, but many conditions are linked to lifestyle. Withholding care on this basis would be discriminatory." },
    { text: "Tell Mr Dale that the consultant doesn't think he deserves a stent.",
      brief: "Undermines the team and distresses him.",
      detailed: "This would cause him distress and damage his trust, before any decision has been made." },
    { text: "Report the consultant to the GMC.",
      brief: "Disproportionate for a comment in a meeting.",
      detailed: "The comment was inappropriate, but it should be addressed in discussion first." },
    { text: "Tell Mr Dale he must stop smoking before he can have the procedure.",
      brief: "Imposes a condition that hasn't been agreed.",
      detailed: "This makes his care conditional on behaviour change, which isn't a decision you can make." },
    { text: "Leave it, as the final decision is the consultant's.",
      brief: "Leaves an unfair judgement unchallenged.",
      detailed: "The consultant decides, but you can still raise a concern about the basis of the decision." }
  ],
  explanation: {
    issue: "This tests whether you challenge judgements about a patient's lifestyle while recognising legitimate clinical considerations.",
    keyDetails: "He smokes. He needs a cardiac procedure. The consultant's comment is about deserving, not clinical benefit.",
    reasoning: "{k1} refocuses on clinical benefit, {k2} supports his health, and {k3} challenges the judgement. The distractors agree ({d1}), undermine the team ({d2}), escalate disproportionately ({d3}), impose conditions ({d4}), or stay silent ({d5}).",
    competing: "{d4} might seem helpful for his health, but making treatment conditional isn't your decision."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients fairly, without judgements about lifestyle." }
  ],
  tags: ["fairness", "smoking", "cardiology", "discrimination"]
}
];
