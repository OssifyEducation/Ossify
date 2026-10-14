// Practice batch P04, part 2 (sjt-076 to sjt-085). Written in key order; see scripts/compile-sjt-drafts.js.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-076", letters: "BDH", format: "multiple_choice", difficulty: "moderate",
  title: "She wants to stop", setting: "Oncology & palliative care", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Advocacy", "Shared decision-making", "Communicating with seniors"],
  stem:
    "You are an F2 doctor on an oncology ward. Mrs Clarke, 71, has metastatic ovarian cancer. On this morning's ward round her consultant recommended a further cycle of chemotherapy, and Mrs Clarke nodded along.\n\n" +
    "Later, while you are taking her blood, she tells you quietly that she is exhausted and doesn't want any more chemotherapy, but she \"didn't want to seem ungrateful\" to the consultant, who has looked after her for three years.",
  options: [
    { text: "Ask her what matters most to her now, and what is behind her decision.",
      brief: "Understanding her reasons helps everyone respect her wishes.",
      detailed: "She may be exhausted by side effects, have different priorities for the time she has, or be worried about something that could be addressed. Exploring this gently helps her think it through and means her wishes can be accurately represented." },
    { text: "Encourage her to tell the consultant, and offer to be with her.",
      brief: "Supports her to speak for herself, with you alongside.",
      detailed: "The decision is hers, and it is better coming from her. Offering to be with her, or to help her prepare what she wants to say, makes it easier for her to raise it with someone she respects and doesn't want to disappoint." },
    { text: "With her permission, tell the consultant before chemotherapy is booked.",
      brief: "Makes sure the treatment plan reflects what she has told you.",
      detailed: "If she finds it too hard to raise herself, telling the consultant, with her agreement, makes sure her wishes are known before treatment goes ahead. Most consultants would want to know." },
    { text: "Reassure her that the consultant knows best, so she should continue.",
      brief: "Overrides her views and discourages her from deciding for herself.",
      detailed: "Her consultant's experience is valuable, but treatment decisions should reflect what matters to the patient. Encouraging her to defer undermines her right to decide." },
    { text: "Cancel her chemotherapy booking, as she has told you she doesn't want it.",
      brief: "Acts on a private conversation without involving her or the consultant properly.",
      detailed: "Her wishes should be respected, but cancelling treatment yourself, without a proper discussion with her consultant, takes the decision out of the right forum and may not reflect a considered choice." },
    { text: "Keep what she said between the two of you, as she told you in confidence.",
      brief: "Information relevant to her treatment should be shared within the team, ideally with her agreement.",
      detailed: "She may have meant it privately, which makes this tempting. But keeping it to yourself means she may receive treatment she doesn't want. The right approach is to help her share it, or to share it with her agreement." },
    { text: "Refer her to the palliative care team yourself.",
      brief: "Palliative care may help, but this bypasses her consultant and her own decision.",
      detailed: "Palliative care support may well be appropriate, but referring her without discussion with the consultant, or her agreement, doesn't address the treatment decision and may confuse her care." },
    { text: "Tell her husband, so that he can help her decide.",
      brief: "Shares her confidential views without consent, and the decision is hers.",
      detailed: "Families can be a great support, but she hasn't asked for her husband to be involved. Telling him what she said in private breaches her confidentiality." }
  ],
  explanation: {
    issue: "This tests how you advocate for a patient whose wishes differ from her consultant's plan, helping her voice be heard through the right channels.",
    keyDetails: "Mrs Clarke has capacity. She doesn't want more chemotherapy but feels unable to say so. She has a long relationship with her consultant.",
    reasoning: "{k1} explores what matters to her, {k2} supports her to speak up, and {k3} makes sure her wishes are known. The distractors either override her ({d1}), act beyond your role ({d2}, {d4}), keep important information from the team ({d3}), or breach her confidentiality ({d5}).",
    competing: "{d3} looks like respect for her privacy, but information about her treatment wishes needs to reach the team, ideally with her agreement."
  },
  refs: [
    { ref: "consent", note: "Patients' right to decide about treatment, and supporting them to make decisions." },
    { ref: "eol", note: "Discussing goals of care with patients approaching the end of life." }
  ],
  tags: ["advocacy", "chemotherapy", "shared decision-making", "oncology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-077", letters: "DBAEC", format: "ranking", difficulty: "easy",
  title: "A disclosure in clinic", setting: "Obstetrics & gynaecology", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Responding to disclosure", "Safeguarding", "Confidentiality"],
  stem:
    "You are an F2 doctor in an antenatal clinic. Ms Reid, 26, is 28 weeks pregnant with her first baby. When you ask routinely about her safety at home, she becomes tearful and says her partner has pushed and slapped her several times, most recently last week.\n\n" +
    "Her partner is in the waiting room. She begs you not to tell anyone, saying it will make things worse.",
  options: [
    { text: "Listen, thank her for telling you, and ask about her immediate safety.",
      brief: "A supportive response and a check on immediate risk come first.",
      detailed: "Disclosing abuse takes courage. Responding calmly and without judgement, and asking whether she is safe to go home today, helps her feel believed and lets you judge how urgent the risk is." },
    { text: "Explain that you'd like to involve the safeguarding midwife, and why.",
      brief: "Specialist support is needed, and being open with her keeps her trust.",
      detailed: "Domestic abuse in pregnancy is a safeguarding concern, and the safeguarding midwife can help with risk assessment and support. Explaining why, and what that involves, respects her while making sure she gets help. Information can be shared without her consent if the risk is serious." },
    { text: "Give her information about local domestic abuse services, discreetly.",
      brief: "Useful, though less than a supported plan.",
      detailed: "Information about specialist services, given in a way her partner won't find, is helpful. It ranks third because she needs more than a leaflet: a risk assessment and support." },
    { text: "Promise you won't tell anyone, so that she keeps trusting you.",
      brief: "A promise you may not be able to keep.",
      detailed: "Her trust matters, but you may need to share information to protect her and her baby. Promising confidentiality you can't guarantee could damage her trust more later." },
    { text: "Speak to her partner in the waiting room about what she has told you.",
      brief: "Could put her at serious risk.",
      detailed: "Raising the abuse with her partner could make him angry and increase the danger to her. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to a disclosure of domestic abuse in pregnancy: supporting her, assessing risk, and being honest about the limits of confidentiality.",
    keyDetails: "She is pregnant and has been assaulted repeatedly. Her partner is nearby. She has asked you not to tell anyone.",
    reasoning: "{1} responds supportively and assesses immediate risk, {2} involves specialist help openly, and {3} gives her information. {4} makes a promise you can't keep, and {5} puts her at risk.",
    competing: "Some would put involving the safeguarding midwife first. The key starts with listening and immediate safety because her response to you now affects whether she accepts further help."
  },
  refs: [
    { ref: "confidentiality", note: "Disclosing information without consent to protect a person from serious harm." },
    { ref: "gmp", note: "Domain 2, protecting patients who may be vulnerable." }
  ],
  tags: ["domestic abuse", "pregnancy", "safeguarding", "confidentiality"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-078", letters: "ABC", format: "multiple_choice", difficulty: "moderate",
  title: "An offer of authorship", setting: "Non-clinical (research)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Research integrity", "Honesty", "Career development"],
  stem:
    "You are an F2 doctor. A consultant you worked with in your previous rotation emails to say her team has had a paper accepted by a journal. She offers to add you as an author \"to help with your specialty applications\".\n\n" +
    "You weren't involved in the study, the analysis or the writing. You know an extra publication would strengthen your application.",
  options: [
    { text: "Thank her, but explain you can't be an author as you didn't contribute.",
      brief: "Honest, and protects you both from a misleading author list.",
      detailed: "Authorship signals that you contributed to and can take responsibility for the work. Declining politely, and thanking her for thinking of you, keeps the record honest and maintains a good relationship." },
    { text: "Ask whether you could contribute properly to a future project.",
      brief: "Turns a kind offer into a genuine opportunity.",
      detailed: "She clearly wants to help your career. Asking to be involved in future research, where you could earn authorship, is a constructive way to accept her support honestly." },
    { text: "Check the journal's authorship criteria, so you can explain your reasons.",
      brief: "Grounds your decision in the published standards.",
      detailed: "Most journals follow recognised authorship criteria, which require a substantial contribution and approval of the final version. Knowing these makes it easier to explain your decision without seeming to criticise her." },
    { text: "Accept, as she is senior and it is her decision who is listed.",
      brief: "Being added by a senior doesn't make the authorship legitimate.",
      detailed: "Senior authors often decide the author list, which is why this is tempting. But authorship has to reflect contribution, and you would be responsible for a misleading claim if you accepted." },
    { text: "Accept, and contribute by proofreading the final version before publication.",
      brief: "A late, minor task doesn't meet the criteria for authorship.",
      detailed: "This feels like earning your place, but proofreading an accepted paper isn't the substantial contribution authorship requires. It would still misrepresent your role." },
    { text: "Accept, but leave the paper off your job applications.",
      brief: "The author list would still be inaccurate.",
      detailed: "This avoids misleading an interview panel, but the published author list would still claim a contribution you didn't make." },
    { text: "Report the consultant to the trust's research governance team.",
      brief: "Premature; declining the offer resolves the issue.",
      detailed: "Gift authorship is a recognised research integrity issue, but this is a single offer that you can decline. Reporting it without discussing it with her first is disproportionate." },
    { text: "Suggest she adds a colleague who helped with data collection instead.",
      brief: "The author list isn't yours to decide.",
      detailed: "If a colleague contributed, they may deserve credit, but it isn't your role to suggest changes to her author list. It also doesn't address the problem with the offer itself." }
  ],
  explanation: {
    issue: "This tests honesty in research when a well-meant offer would misrepresent your contribution.",
    keyDetails: "You made no contribution. The offer is kindly meant. A publication would help your application.",
    reasoning: "{k1} declines honestly, {k2} turns the offer into a real opportunity, and {k3} grounds your decision in published standards. The distractors all accept a role you didn't have ({d1}, {d2}, {d3}), or respond disproportionately or beyond your role ({d4}, {d5}).",
    competing: "{d2} is the most tempting option, as it feels like you'd be earning your place, but a minor late task doesn't meet authorship criteria."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in research and in your applications." }
  ],
  tags: ["research integrity", "authorship", "applications", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-079", letters: "ACDEB", format: "ranking", difficulty: "hard",
  title: "An unwelcome exception report", setting: "Elderly care ward", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Advocating for safe working", "Managing conflict", "Using proper channels"],
  stem:
    "You are an F2 doctor on an elderly care ward. For several weeks you have regularly stayed two hours after your shift to finish jobs, and you have submitted exception reports as your contract allows.\n\n" +
    "Your clinical supervisor calls you in and says, \"When I was a junior we just got on with it. These reports make the department look bad.\" You find this upsetting, as the late finishes are leaving you exhausted.",
  options: [
    { text: "Explain calmly that the reports are about the workload, not criticism of the team.",
      brief: "A calm explanation may change how she sees them.",
      detailed: "Your supervisor may see the reports as a complaint. Explaining that they reflect the workload, and that they help the department make the case for more staff, may help her see them differently and keeps the relationship constructive." },
    { text: "Keep submitting exception reports when you work beyond your hours.",
      brief: "Exception reports are a legitimate safety mechanism.",
      detailed: "Exception reports exist so that problems with workload and safe working are recorded and addressed. Continuing to submit them accurately is your right, and helps your colleagues too." },
    { text: "Ask the guardian of safe working hours for advice.",
      brief: "The guardian oversees exception reporting and can help if there is pressure not to report.",
      detailed: "The guardian is independent of your supervisor and is responsible for making sure exception reporting works properly. They can advise you and, if needed, address any pressure not to report. It ranks just below continuing to report because that is the essential step." },
    { text: "Stop submitting reports, to keep a good relationship with your supervisor.",
      brief: "Leaves the problem hidden and your exhaustion unaddressed.",
      detailed: "Keeping the peace may feel easier, but stopping the reports means the workload problem goes unrecorded, and your fatigue may affect patient safety." },
    { text: "Add extra time to your future reports, so the department sees how bad the problem is.",
      brief: "Falsifying reports is dishonest.",
      detailed: "Your frustration is understandable, but exaggerating your hours is dishonest and would undermine your credibility and the reporting system." }
  ],
  explanation: {
    issue: "This tests how you respond to pressure not to report unsafe working, maintaining a professional relationship while using proper mechanisms.",
    keyDetails: "You are regularly working late and are exhausted. Your reports are legitimate. Your supervisor is critical of them.",
    reasoning: "{1} addresses the misunderstanding directly, {2} keeps the system working, and {3} gets independent advice. {4} gives in to pressure, and {5} is dishonest.",
    competing: "This is hard because {1}, {2} and {3} are all appropriate. Some would put the guardian first, given the pressure; the key starts with a calm conversation because it may resolve things without escalation."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, raising concerns about working conditions that may affect patient safety." }
  ],
  tags: ["exception reporting", "workload", "supervision", "fatigue"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-080", letters: "EFG", format: "multiple_choice", difficulty: "moderate",
  title: "No insulin, thank you", setting: "Acute medical unit", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Exploring concerns", "Shared decision-making", "Respecting autonomy"],
  stem:
    "You are an F2 doctor on the acute medical unit. Mr Ahmed, 54, has type 2 diabetes and was admitted with very high blood glucose. His HbA1c is well above target despite tablets, and the medical team has recommended starting insulin.\n\n" +
    "He has refused three times, saying he wants to try harder with his diet. He works as a lorry driver.",
  options: [
    { text: "Ask him what worries him about starting insulin.",
      brief: "His concerns may be specific and addressable.",
      detailed: "People refuse insulin for many reasons: fear of injections or hypoglycaemia, stigma, or, as a lorry driver, worry about his licence. Finding out what lies behind his refusal is the first step to helping him make an informed decision." },
    { text: "Explain the risks of high blood glucose and the treatment options available.",
      brief: "An informed decision needs clear information about all the options.",
      detailed: "He should understand the risks of persistently high glucose and the treatment options, which may include other medications. This helps him weigh up his choice, whatever he decides." },
    { text: "Ask the diabetes specialist team to see him.",
      brief: "Specialists can discuss options in depth and support him after discharge.",
      detailed: "The diabetes team can explore alternatives, address specific concerns such as driving, and provide follow-up. Their involvement supports a well-informed decision." },
    { text: "Tell him that he won't be discharged until he agrees to start insulin.",
      brief: "Coercive, and not a legitimate condition of discharge.",
      detailed: "Making discharge conditional on accepting treatment pressures him unfairly and undermines his right to refuse." },
    { text: "Assess his capacity, and give insulin in his best interests if he lacks it.",
      brief: "Refusing advice isn't evidence that someone lacks capacity.",
      detailed: "Capacity should be assessed if there's reason to doubt it, but adults are presumed to have capacity, and an unwise decision doesn't mean someone lacks it. Nothing suggests he can't make this decision." },
    { text: "Ask his wife to persuade him to accept insulin.",
      brief: "Involving his family without his agreement doesn't respect his decision.",
      detailed: "Family support can help, but enlisting his wife to change his mind, without his agreement, breaches his confidentiality and puts pressure on him." },
    { text: "Agree to a trial of diet alone and discharge him without arranging follow-up.",
      brief: "Respecting his choice still requires a safe plan.",
      detailed: "His choice to try diet first can be respected, but he still needs monitoring and follow-up to make sure his glucose is controlled." },
    { text: "Reassure him that starting insulin won't affect his lorry licence.",
      brief: "Inaccurate: insulin treatment has specific implications for vocational driving.",
      detailed: "Drivers of lorries who are treated with insulin must meet specific DVLA requirements and inform the DVLA. False reassurance could lead him to make a decision based on wrong information, and could put him and others at risk." }
  ],
  explanation: {
    issue: "This tests how you respond when a patient with capacity refuses recommended treatment: exploring his reasons, informing his decision, and respecting it.",
    keyDetails: "He has refused repeatedly. He is a lorry driver, which may affect his concerns. Nothing suggests he lacks capacity.",
    reasoning: "{k1} explores his concerns, {k2} informs his decision, and {k3} brings in specialist support. The distractors either coerce him ({d1}, {d3}), question his capacity without reason ({d2}), discharge him unsafely ({d4}), or give inaccurate reassurance ({d5}).",
    competing: "{d2} is the subtle distractor: capacity should be assessed when there's doubt, but refusal alone isn't evidence of a lack of capacity."
  },
  refs: [
    { ref: "consent", note: "Respecting patients' decisions, and supporting them with information." },
    { ref: "mca1", note: "Presumption of capacity; an unwise decision doesn't mean a lack of capacity." },
    { ref: "dvla", note: "Insulin-treated drivers and vocational licensing." }
  ],
  tags: ["refusal", "diabetes", "insulin", "driving"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-081", letters: "EDACB", format: "ranking", difficulty: "moderate",
  title: "Overheard in the café", setting: "Non-clinical (social)", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Confidentiality", "Supporting colleagues", "Proportionate response"],
  stem:
    "You are an F2 doctor having lunch in the busy hospital café with Dr Lee, another F2. Dr Lee starts talking loudly about a patient on his ward, a local headteacher admitted after an overdose, using the patient's name.\n\n" +
    "You notice people at the next table looking over.",
  options: [
    { text: "Quietly remind Dr Lee that people nearby can hear.",
      brief: "Stops the breach immediately, discreetly.",
      detailed: "A quiet word stops the conversation without embarrassing him in public. He has probably not realised how loudly he is talking or how identifiable the patient is." },
    { text: "Mention it to him privately afterwards, so he is more careful in future.",
      brief: "Helps him learn, though it doesn't stop the breach now.",
      detailed: "A private conversation later helps him reflect on what happened. It ranks second because the more pressing issue is stopping the conversation now." },
    { text: "Change the subject to something unrelated.",
      brief: "May stop the conversation, but he may not realise why.",
      detailed: "Changing the subject can be a discreet way of stopping the conversation. But if he doesn't realise why, he may do the same again." },
    { text: "Report the breach to his educational supervisor straight away.",
      brief: "Disproportionate for a first lapse that you can address directly.",
      detailed: "Breaches of confidentiality are serious, and may need reporting if they continue. But for a first, unintentional lapse, speaking to him directly is more proportionate and constructive." },
    { text: "Join in the conversation, as he is a colleague discussing work.",
      brief: "Continues the breach in public.",
      detailed: "Discussing patients with colleagues can be appropriate, but not in a public place where others can hear. Joining in makes the breach worse." }
  ],
  explanation: {
    issue: "This tests how you respond to a colleague breaching confidentiality in public, proportionately and constructively.",
    keyDetails: "The patient is named and identifiable, and the information is sensitive. People nearby are listening. It seems unintentional.",
    reasoning: "{1} stops the breach immediately and discreetly, {2} helps him learn from it, and {3} may stop it but without explanation. {4} is disproportionate, and {5} makes it worse.",
    competing: "Some would rank changing the subject above the private conversation, as it acts immediately. The key prefers explaining because it prevents a repeat."
  },
  refs: [
    { ref: "confidentiality", note: "Not discussing patients where you can be overheard." }
  ],
  tags: ["confidentiality", "colleagues", "public places"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-082", letters: "DFH", format: "multiple_choice", difficulty: "easy",
  title: "\"Disorganised\"", setting: "General medical ward", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Responding to feedback", "Self-improvement", "Professional relationships"],
  stem:
    "You are an F2 doctor on a general medical ward. On the post-take ward round you present a new patient. Halfway through, your consultant interrupts and says in front of the team, \"This is disorganised. I can't follow it. Let's move on.\"\n\n" +
    "You feel embarrassed. You had been on call all night and had little time to prepare.",
  options: [
    { text: "Ask the consultant later for specific feedback on how to improve.",
      brief: "Turns criticism into something you can act on.",
      detailed: "General criticism is hard to learn from. Asking, at a calmer moment, what would have made the presentation easier to follow gives you concrete things to work on and shows you take feedback seriously." },
    { text: "Reflect on the feedback, and use a clear structure for future presentations.",
      brief: "Improvement is the best response.",
      detailed: "Even if the delivery was harsh, the feedback may be useful. Thinking about what went wrong, and using a consistent structure for presentations, will help you next time." },
    { text: "Practise presenting cases with a colleague or your registrar.",
      brief: "Practice and feedback build skill.",
      detailed: "Rehearsing with a colleague, or asking your registrar to watch you present, gives you a chance to improve in a supportive setting." },
    { text: "Explain to the consultant in front of the team that you had little time to prepare.",
      brief: "Sounds defensive and is unlikely to help in the moment.",
      detailed: "Your reason is genuine, but raising it in front of the team, during the ward round, is likely to come across as an excuse and won't help either of you." },
    { text: "Raise a formal complaint about being criticised in public.",
      brief: "Disproportionate for a single comment about a presentation.",
      detailed: "Repeated public humiliation can be a form of undermining and may need raising. But a single critical comment about your presentation is better addressed by seeking feedback." },
    { text: "Ask the registrar to present your patients for the rest of the week.",
      brief: "Avoiding the task stops you improving.",
      detailed: "This avoids further embarrassment but means you miss the chance to improve, and adds to your registrar's workload." },
    { text: "Accept that the consultant is hard to please, and carry on as before.",
      brief: "Dismisses feedback that might be useful.",
      detailed: "Some consultants are more critical than others, but writing off the feedback means missing the chance to improve." },
    { text: "Tell your colleagues that the consultant was unfair to you.",
      brief: "Doesn't help you improve and may create tension.",
      detailed: "It's natural to want sympathy, but complaining to colleagues doesn't address the feedback and may affect team relationships." }
  ],
  explanation: {
    issue: "This tests how you respond to critical feedback given publicly: constructively, without defensiveness or overreaction.",
    keyDetails: "The comment was blunt and public. You were tired after a night on call. The criticism may still be partly fair.",
    reasoning: "{k1}, {k2} and {k3} all use the feedback to improve. The distractors are defensive ({d1}), disproportionate ({d2}), avoidant ({d3}, {d4}), or unconstructive ({d5}).",
    competing: "{d2} would become appropriate if the consultant repeatedly humiliated you or others; a single comment is better addressed directly."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, reflecting on feedback and developing your practice." }
  ],
  tags: ["feedback", "presenting", "resilience", "consultants"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-083", letters: "CBEAD", format: "ranking", difficulty: "moderate",
  title: "She won't talk to me", setting: "Paediatrics", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communicating with young people", "Building rapport", "Patience"],
  stem:
    "You are an F2 doctor on a paediatric ward. Zara, 12, has been admitted with weight loss and a low heart rate, and the team suspects an eating disorder. Her parents are at the bedside.\n\n" +
    "When you try to take a history, Zara turns away, pulls the blanket over her head, and says she isn't talking to any more doctors.",
  options: [
    { text: "Introduce yourself, and tell her she doesn't have to talk right now.",
      brief: "Taking the pressure off often helps a young person engage later.",
      detailed: "Zara may be frightened, angry or overwhelmed. Explaining who you are and why you're there, and making it clear you won't force her to talk now, respects her and leaves the door open for later." },
    { text: "Ask her whether she would find it easier to talk without her parents there.",
      brief: "Young people may speak more freely on their own.",
      detailed: "Many young people find it easier to talk without their parents present, especially about eating and feelings. Offering this choice gives her some control." },
    { text: "Talk to the nursing team and her parents about what she enjoys and what helps her.",
      brief: "Useful for building rapport, though not with Zara herself.",
      detailed: "Knowing her interests and what calms her can help you engage her later. It ranks third because it doesn't involve Zara directly." },
    { text: "Take the history from her parents and leave Zara to rest.",
      brief: "Gets information, but misses the chance to engage her.",
      detailed: "Her parents can give a useful history, and you will need it. But leaving Zara out entirely misses the chance to build trust, and her own account matters." },
    { text: "Tell her she will have to stay in hospital longer if she doesn't cooperate.",
      brief: "A threat that is likely to damage trust.",
      detailed: "Using pressure may seem a way to get her talking, but it is likely to make her more resistant and damage her trust in the team." }
  ],
  explanation: {
    issue: "This tests how you engage a distressed young person who doesn't want to talk, with patience and respect.",
    keyDetails: "Zara is 12 and medically unwell. She has seen several doctors. Her parents are present.",
    reasoning: "{1} reduces pressure and builds trust, {2} gives her a choice about who is present, and {3} prepares you to engage her later. {4} leaves her out, and {5} threatens her.",
    competing: "Some would rank asking about her parents first. The key starts with introducing yourself and taking the pressure off because she has just refused to talk."
  },
  refs: [
    { ref: "u18", note: "Communicating with children and young people, and involving them in decisions." },
    { ref: "meed", note: "Medical risk in young people with eating disorders." }
  ],
  tags: ["young people", "eating disorders", "communication", "paediatrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-084", letters: "BEG", format: "multiple_choice", difficulty: "hard",
  title: "Lunch is on the house", setting: "Out-of-hours / community", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Gifts and hospitality", "Professional boundaries", "Fairness"],
  stem:
    "You are an F2 doctor working at an urgent treatment centre. Three months ago you treated Mr Price, 30, for a hand fracture, and he was very grateful.\n\n" +
    "He now works at a café near the centre, and over the past two weeks he has refused to let you pay for your lunch four times, saying, \"After what you did for me, it's the least I can do.\"",
  options: [
    { text: "Thank him, and explain that you'd like to pay for your meals.",
      brief: "Polite and clear, and keeps the relationship professional.",
      detailed: "His gratitude is genuine, and you don't need to make him feel awkward. Thanking him and explaining that you'd prefer to pay ends the arrangement kindly and avoids any suggestion of an obligation." },
    { text: "Check the trust's policy on gifts from patients, and declare them if required.",
      brief: "Repeated free meals may count as gifts that should be declared.",
      detailed: "Many trusts require staff to declare gifts above a certain value or frequency. Checking the policy, and declaring the meals if needed, shows openness." },
    { text: "Treat him the same as any other patient if he needs care from you again.",
      brief: "Fair treatment is the point of avoiding gifts.",
      detailed: "The concern about gifts is that they could affect, or appear to affect, the care you give. If he comes back to the centre, treating him exactly as you would anyone else maintains trust." },
    { text: "Accept the meals, as he is no longer your patient.",
      brief: "He may well be your patient again, and the meals are repeated.",
      detailed: "He is a former patient, which is what makes this seem acceptable. But you work nearby and may treat him again, and a regular benefit could create, or seem to create, an obligation." },
    { text: "Stop going to the café so the situation doesn't arise.",
      brief: "Avoids the issue without addressing it.",
      detailed: "This avoids the gifts, but it doesn't explain anything to him and may seem rude. A friendly conversation is more honest." },
    { text: "Tell the café manager that he has been giving you free food.",
      brief: "Could get him into trouble for a well-meant gesture.",
      detailed: "He may not be entitled to give food away, but raising this with his employer could cost him his job over a gesture of gratitude. Talking to him directly is fairer." },
    { text: "Accept the meals, but leave a generous tip each time to make up for them.",
      brief: "Doesn't address the issue and may confuse things further.",
      detailed: "This seems a fair compromise, but you would still be accepting regular gifts. It doesn't solve the problem of an ongoing benefit from a patient." },
    { text: "Accept, but tell him he won't get any special treatment at the centre.",
      brief: "Accepting while making this point is awkward and doesn't remove the appearance of influence.",
      detailed: "Being clear that his care won't be affected is honest, but continuing to accept regular gifts still creates the appearance of influence." }
  ],
  explanation: {
    issue: "This tests how you handle repeated gifts from a former patient you may treat again, keeping professional boundaries without causing offence.",
    keyDetails: "The gifts are small but repeated. He is a former patient, and you work nearby. He is grateful, not trying to gain influence.",
    reasoning: "{k1} ends the arrangement kindly, {k2} is open about it, and {k3} keeps his future care fair. The distractors accept gifts in different forms ({d1}, {d4}, {d5}), avoid the issue ({d2}), or treat him unfairly ({d3}).",
    competing: "{d4} looks like a fair compromise, which is why this item is hard: but the regular benefit, and its appearance, remain."
  },
  refs: [
    { ref: "coi", note: "Accepting gifts and hospitality from patients." },
    { ref: "boundaries", note: "Relationships with former patients." }
  ],
  tags: ["gifts", "boundaries", "former patients", "urgent care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-085", letters: "ACBD", format: "ranking", difficulty: "moderate",
  title: "The phones are down", setting: "General practice", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Responding to system failures", "Teamwork", "Patient safety"],
  stem:
    "You are an F2 doctor in a GP practice. At 08:15 on Monday morning, the practice phone lines stop working. Patients can't get through to book urgent appointments, and several have already come to reception to say they've been unable to call.\n\n" +
    "The practice manager is not in yet, and the duty GP, Dr Wells, has just started seeing patients. Your first patient is booked for 08:30.",
  options: [
    { text: "Let the practice manager and the duty GP know straight away.",
      brief: "They need to act quickly to restore the lines and make a plan.",
      detailed: "The practice manager can report the fault and set up alternative arrangements, such as a temporary number. The duty GP needs to know so urgent requests can be managed. Telling them immediately starts the response." },
    { text: "Help the reception team put up a message online and at the door about how to get help.",
      brief: "Patients need to know how to get help, including NHS 111 and 999.",
      detailed: "A message on the website and at the door, explaining the problem and directing patients to NHS 111 or 999 in an emergency, helps keep patients safe while the lines are down." },
    { text: "Offer to help the duty GP see patients who arrive with urgent problems.",
      brief: "Helpful, but less important than organising the practice's response.",
      detailed: "More patients than usual may turn up in person, and helping the duty GP with them is useful. It ranks third because organising the practice's response, and telling patients how to get help, reaches far more people." },
    { text: "Start your booked clinic, and leave the phone problem to the reception team.",
      brief: "Leaves a significant safety issue to others.",
      detailed: "Your patients are important, but patients who can't contact the practice may be at risk. Helping the team respond is part of your role." }
  ],
  explanation: {
    issue: "This tests how you respond to a system failure that affects patient access, working with the team to keep patients safe.",
    keyDetails: "The phones are down at the busiest time. The practice manager isn't in yet, and the duty GP is busy. Patients are already affected.",
    reasoning: "{1} starts the practice's response, {2} keeps patients informed and safe, and {3} helps individual patients. {4} leaves the problem to others.",
    competing: "Some would put the public message first. The key puts informing the practice manager and duty GP first because they can arrange alternatives quickly."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, responding to risks to patient safety caused by systems." }
  ],
  tags: ["system failure", "general practice", "patient access", "teamwork"]
}
];
