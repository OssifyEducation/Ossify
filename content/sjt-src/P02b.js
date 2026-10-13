// Practice batch P02, part 2 (sjt-036 to sjt-045). Written in key order; see scripts/compile-sjt-drafts.js.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-036", letters: "CDE", format: "multiple_choice", difficulty: "moderate",
  title: "I didn't know what they were doing", setting: "Cardiology / respiratory", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Consent", "Raising concerns with colleagues", "Patient-centred communication"],
  stem:
    "You are an F2 doctor on a respiratory ward. Yesterday afternoon the registrar performed a pleural aspiration on Mr Evans, 70, while you were in clinic. There is a procedure note in the records but no consent form or documented discussion of consent.\n\n" +
    "On today's ward round, Mr Evans tells you he \"didn't really understand what they were doing\" with the needle in his back. The site is sore but looks clean, and his breathing is much better. He asks you, a little anxiously, what was done and why.",
  options: [
    { text: "Explain to Mr Evans what the procedure was and why it was done, and answer his questions.",
      brief: "He has a right to understand what was done to him, and you can explain it from the records.",
      detailed: "Whatever happened yesterday, Mr Evans is confused and anxious now. Explaining that fluid was drained from around his lung to help his breathing, why it was needed and what to look out for, addresses his immediate concern and respects him. You can be honest that you weren't there, while still giving him a clear account." },
    { text: "Speak to the registrar about Mr Evans's concerns and the lack of documented consent.",
      brief: "The registrar needs to know, and may be able to explain what was discussed.",
      detailed: "There may have been a verbal consent discussion that wasn't recorded, or Mr Evans may not have taken in what he was told while unwell. Raising it directly with the registrar, without accusation, allows them to reflect, to document what happened, and to speak to Mr Evans if needed. Missing consent documentation should also prompt them to consider whether anything else needs to be done." },
    { text: "Make sure the pain at the procedure site is assessed and managed.",
      brief: "He has a symptom that needs attention, whatever the answer about consent.",
      detailed: "A sore aspiration site is usually minor, but it should be examined and treated with appropriate analgesia. Addressing it shows Mr Evans that his concerns are being taken seriously, and helps rule out a complication." },
    { text: "Ask the registrar to complete a consent form today and date it for yesterday.",
      brief: "Backdating a consent form would create a false record.",
      detailed: "This would make the records look complete, but it would be dishonest: a consent form must reflect what was discussed and when. If consent was obtained verbally, the right step is a clearly dated retrospective note explaining that, not a backdated form." },
    { text: "Reassure Mr Evans that consent forms are often missed and that it isn't a problem.",
      brief: "Dismisses his concern and misrepresents the importance of consent.",
      detailed: "It may be true that documentation is sometimes incomplete, but Mr Evans is telling you he didn't understand a procedure performed on him. Waving it away doesn't answer his questions and suggests consent doesn't matter." },
    { text: "Report the registrar to the medical director for performing a procedure without consent.",
      brief: "Disproportionate before the facts are known, and bypasses local routes.",
      detailed: "You don't yet know whether consent was obtained verbally. Escalating straight to the medical director on the basis of missing paperwork is out of proportion, and skips the conversation with the registrar that may clarify what happened." },
    { text: "Suggest to Mr Evans that he makes a formal complaint about the way the procedure was handled.",
      brief: "Patients should know how to raise concerns, but prompting a complaint before answering his questions is premature.",
      detailed: "If Mr Evans remains unhappy after an explanation, telling him about PALS or the complaints process is appropriate. Suggesting it first, before you've explained the procedure or spoken to the registrar, may escalate things unnecessarily." },
    { text: "Write in Mr Evans's notes that the procedure was performed without his consent.",
      brief: "Records a conclusion you can't yet support; the absence of a form isn't proof that consent wasn't given.",
      detailed: "Accurate records matter, and it would be reasonable to document what Mr Evans has told you. But stating as fact that he didn't consent, before speaking to the registrar, may be wrong and would be unfair to a colleague." }
  ],
  explanation: {
    issue: "This tests how you respond when a patient may not have understood a procedure performed by a senior colleague: supporting the patient, raising it with the colleague, and keeping records accurate.",
    keyDetails: "There is no documented consent, but that doesn't prove there was none. Mr Evans is anxious and has a sore site. The procedure was clinically helpful. You weren't present.",
    reasoning: "{k1} answers the patient's questions, {k2} raises the issue with the person who can clarify it, and {k3} deals with his symptom. The distractors either falsify or prejudge the record ({d1}, {d5}), dismiss the patient ({d2}), or escalate before the facts are known ({d3}, {d4}).",
    competing: "{d5} is tempting because accurate documentation matters. The distinction is between recording what Mr Evans told you, which is appropriate, and recording a conclusion that hasn't been established."
  },
  refs: [
    { ref: "consent", note: "Making sure patients understand procedures, and recording consent discussions." },
    { ref: "concerns", note: "Raising concerns with colleagues directly where appropriate." }
  ],
  tags: ["consent", "procedures", "documentation", "colleague"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-037", letters: "DBEAC", format: "ranking", difficulty: "moderate",
  title: "No concerns", setting: "Psychiatry", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Handover", "Risk assessment", "Escalation"],
  stem:
    "You are an F2 doctor starting a night shift covering an acute psychiatric ward. At handover, the day F2 lists Mr Price, 34, admitted with depression, as \"no concerns\" before leaving.\n\n" +
    "An hour later, while reviewing the notes, you see an entry from 16:00 in which a nurse records that Mr Price disclosed suicidal thoughts with a possible plan. There is no record of a medical review since then, and his observation level hasn't changed.",
  options: [
    { text: "Review Mr Price tonight, and check his current observation level with the nurse in charge.",
      brief: "A recent disclosure of suicidal thoughts with a plan needs a medical review, and the observation level may need to change.",
      detailed: "The handover missed something important, and you are now responsible for him. Seeing him, assessing his current risk, and agreeing with the nurse in charge whether his observations should be increased is the action that keeps him safe tonight." },
    { text: "Discuss Mr Price's risk with the on-call psychiatry registrar.",
      brief: "A change in risk in an inpatient with depression warrants senior input.",
      detailed: "Decisions about observation levels and risk management after a disclosure like this benefit from a registrar's view, and may need a change in the care plan. It ranks second because your own assessment comes first and gives the registrar what they need to advise." },
    { text: "Contact the day F2 to clarify the handover and to find out whether anything else was missed.",
      brief: "Useful for completing the picture, but it doesn't make the patient safer by itself.",
      detailed: "The day F2 may know more, for example that a review did happen but wasn't documented. Contacting them, without blame, may fill gaps and helps them learn. But it is secondary to assessing and protecting the patient." },
    { text: "Document the discrepancy between the handover and the notes.",
      brief: "Worth doing, but documentation alone doesn't address the risk.",
      detailed: "Recording what you found is good practice and helps any later review. On its own, though, it leaves Mr Price unassessed overnight." },
    { text: "Rely on the handover, as the day F2 saw Mr Price today and knows him better.",
      brief: "Ignores clear information in the notes that contradicts the handover.",
      detailed: "Trusting a colleague's handover is normally reasonable. But you have read a specific, recent entry describing suicidal thoughts with a plan. Ignoring it because the handover said otherwise leaves a high-risk patient without the review he needs." }
  ],
  explanation: {
    issue: "This tests your response when a handover misses a significant risk: acting on the information you now have, rather than on what you were told.",
    keyDetails: "The disclosure was recent, included a possible plan, and hasn't been reviewed. Observation levels haven't changed. You are now responsible for him overnight.",
    reasoning: "{1} assesses and protects the patient, {2} brings in senior input, and {3} completes the picture. {4} records the problem without acting on it, and {5} ignores it.",
    competing: "Some would put the registrar call first. In practice you might call while heading to the ward. The key puts your own review first because it gives the registrar the current information they need."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, handover and continuity of care; 'Responding to safety risks'." },
    { ref: "ng225", note: "Assessing and managing risk in people who have self-harmed or are at risk of suicide." }
  ],
  tags: ["handover", "suicide risk", "psychiatry", "night shift"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-038", letters: "EFH", format: "multiple_choice", difficulty: "easy",
  title: "Should I sign it?", setting: "General medical ward", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Explaining DNACPR", "Exploring values", "Continuity with the consultant"],
  stem:
    "You are an F2 doctor on a general medical ward. Mrs Hughes, 79, has severe COPD and was admitted with an exacerbation. On this morning's ward round her consultant mentioned that \"we should think about a DNACPR form\" and said she'd come back to talk about it.\n\n" +
    "In the afternoon, Mrs Hughes asks you, looking worried, \"Should I sign this DNACPR form? Does it mean you'll stop treating me?\"",
  options: [
    { text: "Explain that DNACPR is about CPR only, and that all her other appropriate treatment would continue.",
      brief: "Corrects the most common and most frightening misunderstanding about DNACPR.",
      detailed: "Many patients believe DNACPR means they won't be treated. Explaining that it applies only to cardiopulmonary resuscitation if her heart stops, and that her COPD treatment, antibiotics and everything else would continue, often relieves a great deal of anxiety." },
    { text: "Ask what she understands about CPR and what matters most to her about her care.",
      brief: "Her understanding and values shape the conversation, and the decision.",
      detailed: "Finding out what she knows about CPR and its likely outcome in someone with severe COPD, and what she values, makes the later discussion with her consultant more meaningful. It treats her as a partner in the decision rather than someone to be informed." },
    { text: "Let her consultant know about her questions, so that the discussion can continue with her.",
      brief: "The consultant is leading this decision and needs to know Mrs Hughes is worried.",
      detailed: "A DNACPR discussion should involve the senior clinician responsible, and Mrs Hughes is clearly anxious. Passing on her questions means the consultant can come back sooner and address what matters to her." },
    { text: "Tell her that patients sign the form to show that they agree with the decision.",
      brief: "Factually wrong: patients don't sign DNACPR forms.",
      detailed: "DNACPR decisions are recorded by clinicians, who must discuss them with the patient where appropriate. Telling her she has to sign gives her false information and may make her feel the decision rests on her signature." },
    { text: "Advise her to agree to it, as her consultant has recommended it.",
      brief: "Pre-empts a discussion that hasn't happened and doesn't explore her views.",
      detailed: "The consultant has only raised the idea, and Mrs Hughes hasn't had the conversation yet. Advising her to agree, without understanding her wishes or explaining what it means, isn't shared decision-making." },
    { text: "Tell her that DNACPR is a medical decision for her consultant, so she doesn't need to worry about it.",
      brief: "Partly true, but dismissive, and patients should be involved in these discussions.",
      detailed: "The decision about whether CPR would be clinically appropriate is ultimately medical, which is what makes this tempting. But patients should usually be involved and informed, and telling her not to worry ignores her clear anxiety." },
    { text: "Suggest that her family explain it to her when they visit this evening.",
      brief: "Passes a medical explanation to people who may not understand it themselves.",
      detailed: "Families can be an important support, and Mrs Hughes might want them involved. But they aren't responsible for explaining DNACPR, and may share her misunderstandings." },
    { text: "Give her a leaflet about DNACPR and leave her to read it.",
      brief: "Leaflets help, but not in place of a conversation when she is worried.",
      detailed: "Written information is useful and can support a discussion. But handing her a leaflet and walking away, when she has asked you directly and is clearly anxious, misses the chance to reassure her." }
  ],
  explanation: {
    issue: "This tests whether you can respond to a patient's anxiety about DNACPR with accurate information and appropriate involvement of her consultant.",
    keyDetails: "Mrs Hughes thinks she must sign a form and fears DNACPR means stopping treatment. Her consultant has raised the topic and is leading the discussion.",
    reasoning: "{k1} corrects her misunderstanding, {k2} explores her views, and {k3} keeps the consultant involved. The distractors either give wrong information ({d1}), pre-empt the decision ({d2}), dismiss her ({d3}), or pass the explanation to others ({d4}, {d5}).",
    competing: "{d5} is the most reasonable distractor, since leaflets are often helpful. The difference is that she has asked you directly, and a short conversation is what she needs right now."
  },
  refs: [
    { ref: "eol", note: "Discussing CPR decisions with patients, and what DNACPR does and doesn't mean." },
    { ref: "respect", note: "Recording recommendations about emergency care, including CPR, after discussion with the patient." }
  ],
  tags: ["DNACPR", "end of life", "communication", "COPD"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-039", letters: "EDCBA", format: "ranking", difficulty: "moderate",
  title: "Codeine from the cupboard", setting: "General surgery", attribute: P,
  topic: "An impaired or unwell colleague",
  gmcDomains: ["Colleagues, culture and safety", "Trust and professionalism"],
  competencies: ["Challenging colleagues", "Medicines safety", "Supporting colleagues"],
  stem:
    "You are an F2 doctor in general surgery. Late on a busy shift, you see Jack, an F1 on your team, take two codeine tablets from the ward stock cupboard and swallow them.\n\n" +
    "When he notices you, he laughs and says, \"Splitting headache, I'll replace them tomorrow.\" He has seemed tired and short-tempered over the past few weeks, and you've noticed him looking for painkillers before.",
  options: [
    { text: "Speak to Jack privately, explain that taking ward stock isn't acceptable, and ask how he is.",
      brief: "Addresses the behaviour directly and kindly, and opens a conversation about his wellbeing.",
      detailed: "Taking medicines from ward stock is not acceptable, whatever the reason, and Jack needs to hear that. But the pattern you've noticed, tiredness, irritability and repeatedly looking for painkillers, suggests something more may be going on. A private conversation that is both clear and caring is more likely to lead to him getting help than one that is purely disciplinary." },
    { text: "Let Jack's clinical supervisor or your registrar know what you have seen.",
      brief: "A senior needs to know, especially given the pattern you've noticed.",
      detailed: "One episode might be dealt with between colleagues, but you've seen him looking for painkillers before. A senior can make sure he is supported, for example through occupational health, and that any risk to patients is managed. It ranks second because speaking to Jack first gives him the chance to explain and seek help himself." },
    { text: "Complete an incident report about the medicines taken from ward stock.",
      brief: "Appropriate in principle, but on its own it doesn't support Jack or address the pattern.",
      detailed: "Medicines going missing from stock should be recorded, and the ward may need to reconcile its stock. But an incident report alone, without speaking to Jack or a senior, may not reach the people who can help him." },
    { text: "Suggest Jack keeps his own painkillers in his bag in future, rather than using the ward's stock.",
      brief: "Treats it as a minor practical issue and ignores the warning signs.",
      detailed: "Advising him not to take ward stock is right in itself, which is why this is tempting. But it treats a possible sign of a deeper problem as a matter of convenience, and does nothing about the pattern you've observed." },
    { text: "Let it go, as codeine for a headache seems harmless enough.",
      brief: "Overlooks both the misuse of ward medicines and a pattern that may indicate a problem.",
      detailed: "A single dose of codeine is unlikely to harm Jack, but the issue isn't the dose. Taking ward stock is a probity concern, and repeated use of opioid painkillers, alongside changes in mood, may indicate a dependence that needs support. Letting it go helps no one." }
  ],
  explanation: {
    issue: "This tests your response to a colleague misusing ward medicines, where the behaviour may signal a health problem as well as a probity one.",
    keyDetails: "Jack has taken codeine from ward stock, and it isn't the first time he's looked for painkillers. He has seemed tired and irritable. He treats it lightly.",
    reasoning: "{1} challenges the behaviour and opens a supportive conversation, and {2} brings in a senior given the pattern. {3} records it but may not help Jack. {4} and {5} treat it as trivial, with {5} doing nothing at all.",
    competing: "Some would go to the supervisor first, especially given the pattern. The key starts with Jack because a private, caring conversation often makes it easier for a colleague to accept help, and you would inform a senior anyway."
  },
  refs: [
    { ref: "concerns", note: "Acting when a colleague's health or conduct may put patients at risk, with support where possible." },
    { ref: "gmp", note: "Domain 3, supporting colleagues; Domain 4, acting with honesty and integrity." },
    { ref: "practitionerhealth", note: "Confidential support for doctors with health problems, including substance misuse." }
  ],
  tags: ["colleague health", "medicines misuse", "surgery", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-040", letters: "BFH", format: "multiple_choice", difficulty: "hard",
  title: "Just follow the protocol", setting: "Emergency department", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Recognising limits", "Using protocols", "Seeking supervision"],
  stem:
    "You are an F2 doctor in the Emergency Department. Aisha, 19, has type 1 diabetes and has diabetic ketoacidosis. She is alert and her observations are stable.\n\n" +
    "Your registrar is leading a trauma call in resus and asks you to manage Aisha, saying, \"Just follow the DKA protocol, it's all there.\" You have never managed DKA before, although you have seen it done. The department is very busy.",
  options: [
    { text: "Start treatment using the trust's DKA protocol, which is written for junior doctors to follow.",
      brief: "Protocol-driven treatment of a stable patient is within an F2's competence, with supervision.",
      detailed: "DKA protocols set out fluids, insulin and monitoring step by step, precisely so that doctors who don't manage DKA often can treat it safely. Aisha is stable, so starting treatment now, carefully following the protocol, is appropriate and avoids a harmful delay." },
    { text: "Tell your registrar you haven't managed DKA before, and agree when they will review her.",
      brief: "Being open about your experience means your supervisor can plan their oversight.",
      detailed: "Your registrar may assume you've done this before. Saying clearly that you haven't, and agreeing a time for them to check on Aisha or for you to update them, makes the supervision explicit. This is how doctors safely extend their competence." },
    { text: "Ask an experienced ED nurse to work with you to set up the fluids and insulin infusion.",
      brief: "Experienced nurses often know the protocol well and can help you avoid errors.",
      detailed: "ED nurses frequently manage DKA infusions and can help you check calculations, set up the infusion correctly, and monitor glucose and ketones. Working with them is both safe and a good way to learn." },
    { text: "Wait until the registrar is free before starting any treatment.",
      brief: "Delaying treatment in DKA can cause harm, and the protocol exists to avoid exactly this.",
      detailed: "Waiting might feel safer when you are unfamiliar with a condition. But DKA worsens without treatment, and the registrar may be in resus for some time. A stable patient on a clear protocol, with supervision arranged, should not wait." },
    { text: "Decline to see Aisha, explaining that DKA is beyond your competence.",
      brief: "Overstates the limits of your competence and leaves her without a doctor.",
      detailed: "Recognising your limits is important, but treating a stable patient with a clear protocol and supervision isn't beyond an F2. Refusing leaves Aisha untreated in a busy department and doesn't reflect the support that is available." },
    { text: "Ask Aisha how her DKA has usually been managed in previous admissions.",
      brief: "Her experience may be useful, but it isn't a basis for planning treatment.",
      detailed: "Patients with recurrent DKA often know a lot about their condition, and listening to her is good practice. But her recollection isn't a substitute for the protocol or for senior oversight." },
    { text: "Ask the on-call medical registrar to take over Aisha's care, as medical teams usually manage DKA.",
      brief: "Moves responsibility elsewhere when your own registrar has asked you to manage her.",
      detailed: "In some hospitals the medical team takes over patients with DKA early, and a referral may well be appropriate in due course. But asking them to take over immediately, because you are unfamiliar with DKA, bypasses your own registrar's plan and may delay treatment." },
    { text: "Manage Aisha using the protocol, and report back to the registrar once she is stable.",
      brief: "Treats her, but leaves your registrar unaware that you haven't done this before.",
      detailed: "Following the protocol is right, which makes this option tempting. But not telling your registrar that this is your first time means they may not check on you as closely as they should. Being open about your experience is part of working safely." }
  ],
  explanation: {
    issue: "This tests the line between recognising your limits and refusing work that is within your competence with appropriate support.",
    keyDetails: "Aisha is stable. There is a clear protocol. You have seen DKA managed but never done it yourself. Your registrar is busy but present in the department.",
    reasoning: "{k1} starts treatment, {k2} makes your supervision explicit, and {k3} uses the expertise around you. The distractors either delay or refuse care ({d1}, {d2}), lean on the patient or another team instead of the plan ({d3}, {d4}), or hide your inexperience ({d5}).",
    competing: "This is hard because {d5} is almost right; the only difference from the key is telling your registrar that you haven't done this before. That difference is exactly what safe supervision depends on."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, 'Being competent': working within your competence and seeking help when you need it." }
  ],
  tags: ["limits of competence", "DKA", "emergency department", "supervision"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-041", letters: "DCBAE", format: "ranking", difficulty: "moderate",
  title: "Faulty suction", setting: "General surgery", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Raising concerns", "Patient safety", "Escalation"],
  stem:
    "You are an F2 doctor assisting in the emergency theatre. As the team prepares for a laparotomy on a patient with a suspected perforated bowel, the scrub nurse mentions that the main suction unit has been cutting out intermittently.\n\n" +
    "She says it has already been reported twice in the past fortnight, but nothing has been done. A portable suction unit is available in the recovery area. The surgeon is scrubbing and the anaesthetist is about to start.",
  options: [
    { text: "Tell the surgeon and anaesthetist about the suction now, so a backup unit can be brought in first.",
      brief: "The risk is to this patient, today, and the team needs to know before starting.",
      detailed: "Suction failing during a laparotomy for perforation, or during an airway emergency, could be dangerous. Raising it before the case starts gives the team a chance to bring in the portable unit and decide whether it is safe to proceed. It addresses the immediate risk to the patient in front of you." },
    { text: "Report the fault again through the incident system, noting that the previous reports weren't acted on.",
      brief: "Creates a further record and highlights that earlier reports have been ignored.",
      detailed: "A third report, explicitly mentioning that two earlier ones produced no action, helps make the case that the problem is systemic. It is an important step, but it doesn't make today's operation any safer, which is why it ranks second." },
    { text: "Raise the repeated failure with the theatre manager after the case.",
      brief: "Takes the problem to someone with the authority to get the equipment fixed or replaced.",
      detailed: "The theatre manager can arrange repair or replacement, and needs to know that reports haven't led to action. This is a good follow-up, though it ranks below the actions that protect the patient now and create a formal record." },
    { text: "Mention the faulty suction at the next departmental meeting.",
      brief: "Raises awareness, but slowly and informally.",
      detailed: "A departmental meeting may be weeks away, and mentioning it there doesn't guarantee action. It is better than nothing, but it is the weakest of the active responses." },
    { text: "Assume the theatre team will manage, as the fault has already been reported.",
      brief: "Leaves a known risk unaddressed during a high-risk operation.",
      detailed: "The fact that the fault has been reported twice without action is exactly why you shouldn't assume it will be handled. Saying nothing risks the suction failing at a critical moment, with no backup ready." }
  ],
  explanation: {
    issue: "This tests whether you raise an equipment safety concern in time to protect the current patient, and then make sure the system problem is addressed.",
    keyDetails: "The suction has failed intermittently and has been reported twice without action. A backup is available. The operation is about to start and is high-risk.",
    reasoning: "{1} protects today's patient, {2} records the problem formally, and {3} takes it to someone who can fix it. {4} is slow and informal, and {5} does nothing.",
    competing: "Some would rank the theatre manager above the incident report. The key prefers the formal report because it creates a record that the earlier reports were ignored; in practice you would do both."
  },
  refs: [
    { ref: "concerns", note: "Your duty to raise concerns about equipment and systems that put patients at risk." },
    { ref: "psirf", note: "Reporting patient safety incidents and near misses." }
  ],
  tags: ["equipment", "raising concerns", "theatre", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-042", letters: "ACD", format: "multiple_choice", difficulty: "easy",
  title: "Unwell before the weekend", setting: "General medical ward", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Fitness to work", "Communicating absence", "Self-care"],
  stem:
    "You are an F2 doctor rostered for a weekend of on-call shifts on the medical wards, starting at 08:00 on Saturday. You wake at 06:00 with a fever of 38.6°C, a severe sore throat and aching muscles. You feel too unwell to work safely.\n\n" +
    "You know the rota is already stretched and that there is no cover arranged for your shift.",
  options: [
    { text: "Phone the on-call manager or rota coordinator as early as possible to say you can't work.",
      brief: "Early notice gives the trust the best chance of finding cover.",
      detailed: "Telling the right person as soon as you know means a replacement can be found before the shift starts. Following the trust's sickness reporting procedure also makes sure your absence is properly recorded." },
    { text: "Let the medical registrar on call know, so they can plan for being a doctor short.",
      brief: "The registrar needs to know who will and won't be on the wards this weekend.",
      detailed: "If cover isn't found quickly, the registrar will need to prioritise work differently. A brief message to them, alongside the formal report, helps the team plan and shows you have thought about the effect of your absence." },
    { text: "Stay at home and rest until you are well enough to work safely.",
      brief: "Working while febrile and unwell risks both your patients and your colleagues.",
      detailed: "A fever and muscle aches will affect your concentration and judgement, and an infection could spread to vulnerable patients. Resting, and returning when you are well, is the responsible choice, even when the rota is stretched." },
    { text: "Go in to work, as there is no cover, and wear a mask.",
      brief: "A mask doesn't make you fit to work when you are feverish and unwell.",
      detailed: "The rota pressure is real, and this option reflects a strong sense of duty. But you have already judged that you can't work safely. Working while unwell risks errors, and exposing vulnerable patients to infection." },
    { text: "Ask a friend on the rota to cover your shift informally, without involving the rota coordinator.",
      brief: "Solves today's gap privately, but leaves the official rota wrong.",
      detailed: "A colleague might be willing to help, but informal arrangements can leave the rota inaccurate and may breach working-time rules for your friend. Absence and cover should go through the proper channels." },
    { text: "Take paracetamol and decide at 08:00 whether you feel well enough to start.",
      brief: "Masking a fever doesn't make you fit, and waiting until 08:00 leaves no time to find cover.",
      detailed: "Paracetamol may reduce your temperature and make you feel briefly better, which is why this is tempting. But it doesn't change the underlying illness, and leaving the decision until the shift starts makes it much harder for the trust to arrange cover." },
    { text: "Text a colleague and ask them to pass on that you're unwell.",
      brief: "Relies on someone else to report your absence through the right route.",
      detailed: "Your colleague might pass the message on, but it may not reach the right person in time, and it isn't a substitute for reporting your absence yourself." },
    { text: "Work the morning, then leave if you feel worse.",
      brief: "Starts a shift you've already judged you can't do safely, and may leave the wards short at short notice.",
      detailed: "This seems like a compromise, but it exposes patients to your illness, risks errors, and may create a gap later in the day that is even harder to fill." }
  ],
  explanation: {
    issue: "This tests whether you put patient safety and honest communication ahead of a sense of duty when you are too unwell to work.",
    keyDetails: "You have a fever and feel unwell, and you have already judged that you can't work safely. The rota is stretched and there is no cover. It is two hours before your shift starts.",
    reasoning: "{k1} reports your absence early through the right route, {k2} lets the clinical team plan, and {k3} looks after your health and protects patients. The distractors either have you working while unwell ({d1}, {d3}, {d5}) or handle your absence informally ({d2}, {d4}).",
    competing: "Pressure on the rota makes options like {d1} and {d5} feel responsible. In this paper, coping with pressure includes recognising when you aren't fit to work and handling it properly."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, 'Managing risks posed by your health'." }
  ],
  tags: ["sickness", "fitness to work", "rota", "self-care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-043", letters: "ACBDE", format: "ranking", difficulty: "moderate",
  title: "Burial before sunset", setting: "Intensive care", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Cultural sensitivity", "Death certification", "Working with the bereavement team"],
  stem:
    "You are an F2 doctor on the intensive care unit. It is Saturday. Mr Hussain, 74, died at 07:00 this morning from severe pneumonia. You looked after him during his admission. Before going off duty, the consultant confirmed that the cause of death is clear and that no referral to the coroner is needed.\n\n" +
    "At 08:30 his family ask whether his body can be released today, because their faith requires burial as soon as possible after death. The consultant has asked you to complete the medical certificate of cause of death.",
  options: [
    { text: "Explain to the family what must happen before his body can be released, and that you'll try to do it quickly.",
      brief: "Honest about the process, and shows the family you are taking their request seriously.",
      detailed: "The family need to understand what is involved, including the certificate, its review by the medical examiner, and registration of the death, and they need to know you are trying to help. Many register offices offer urgent arrangements for burials that can't wait. Being clear about what you can and can't control prevents false promises while respecting the importance of their request." },
    { text: "Complete the death certificate promptly, and ask the medical examiner's office whether it can be prioritised.",
      brief: "The practical steps that make same-day release possible.",
      detailed: "The certificate must be reviewed by a medical examiner before registration. Many offices have arrangements for urgent release on religious grounds. Completing your part promptly and asking for priority gives the family the best chance of meeting their timescale." },
    { text: "Ask the bereavement office to help the family with the arrangements.",
      brief: "The bereavement team knows the process and can coordinate with the family.",
      detailed: "Bereavement officers are experienced in supporting families with urgent release and can liaise with the registrar and funeral directors. Involving them is helpful, though it ranks below the actions that only you can take." },
    { text: "Tell the family that same-day release isn't usually possible because of hospital procedures.",
      brief: "May be inaccurate and closes the door before you have tried.",
      detailed: "Procedures do take time, and same-day release isn't always achievable. But many hospitals can meet urgent requests, especially when no coroner referral is needed. Telling the family it isn't possible, before trying, may be wrong and adds to their distress." },
    { text: "Leave the death certificate until the consultant who knew him best is back on duty on Monday.",
      brief: "Causes an avoidable delay of several days, when you are able to complete it.",
      detailed: "You looked after Mr Hussain and can complete the certificate, as the consultant has asked. Leaving it until Monday would make the burial the family needs impossible, for no good reason." }
  ],
  explanation: {
    issue: "This tests whether you respond sensitively and practically to a family's religious needs after a death, working within the certification process.",
    keyDetails: "The cause of death is clear and no coroner referral is needed. The family's faith requires burial as soon as possible. The consultant has asked you to complete the certificate.",
    reasoning: "{1} explains honestly and commits to helping, {2} takes the practical steps that make release possible, and {3} brings in the bereavement team. {4} gives up too early, and {5} creates an avoidable delay.",
    competing: "The ordering of {1} and {2} is close; you would do both within minutes. The key puts the conversation first because the family have asked directly and need to know what to expect."
  },
  refs: [
    { ref: "deathcert", note: "The medical examiner's role in reviewing certificates of cause of death." },
    { ref: "eol", note: "Respecting the religious and cultural needs of patients and families after death." }
  ],
  tags: ["death certification", "religion", "bereavement", "intensive care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-044", letters: "CGH", format: "multiple_choice", difficulty: "hard",
  title: "A fit note for the past fortnight", setting: "General practice", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Fit notes", "Honest certification", "Using records"],
  stem:
    "You are an F2 doctor in a GP practice. Mr Shah, 41, works in a warehouse and has had low back pain for two weeks. He has been off work since it started. He tells you his employer now needs a fit note covering the whole absence.\n\n" +
    "His records show a telephone consultation with another GP at the practice twelve days ago, which documents acute low back pain, advice to rest and take analgesia, and a plan to review if not improving. No fit note was issued then. Today you assess him and agree he is still not fit for his job.",
  options: [
    { text: "Review the record of the earlier phone consultation to see how his back pain affected him then.",
      brief: "An earlier assessment by a colleague may allow you to cover part of the earlier period.",
      detailed: "DWP guidance allows a fit note to include earlier dates when they are based on an earlier assessment, which can be a telephone consultation. Checking what the other GP documented tells you whether it supports Mr Shah being unfit for work from that date." },
    { text: "Issue a fit note from the earlier consultation, entering that consultation's date as the assessment date.",
      brief: "This is how the fit note can legitimately cover earlier dates, if the record supports it.",
      detailed: "If the earlier record supports it, you can enter that consultation's date as the date of assessment and cover the period from then. This is honest because it reflects a real assessment made by a healthcare professional at the time." },
    { text: "Explain to Mr Shah which dates you can cover and why, so that he and his employer understand.",
      brief: "Being clear about the limits avoids confusion and keeps the process transparent.",
      detailed: "There may be a few days before the earlier consultation that you can't certify, because nobody assessed him then. Explaining this clearly, and that short absences can usually be self-certified with an employer, helps Mr Shah resolve things with his employer without anyone being asked to certify what they didn't assess." },
    { text: "Decline to cover any period before today, as you didn't see him before.",
      brief: "A common misconception: fit notes can cover earlier dates when they are based on an earlier assessment.",
      detailed: "This feels like the cautious, honest option, which is why it is tempting. But DWP guidance allows earlier dates when they are supported by an earlier assessment, including one by another clinician. Refusing outright leaves Mr Shah without a legitimate fit note he may be entitled to." },
    { text: "Write the fit note from the day his absence started, as he is clearly in a lot of pain when you see him now.",
      brief: "Certifies days that nobody assessed, based only on how he is today.",
      detailed: "Mr Shah's account is credible, but his current pain doesn't establish that he was unfit on days before any clinician assessed him. Certifying those days would go beyond what you know." },
    { text: "Enter the date he stopped work as the assessment date, as that is when his symptoms began.",
      brief: "This would create a false record of an assessment that didn't happen.",
      detailed: "The assessment date must reflect when an assessment actually took place. Entering an earlier date, when no assessment happened, falsifies the fit note, however justified the absence may seem." },
    { text: "Ask Mr Shah to come back in a week, when you can judge his recovery better.",
      brief: "Delays a fit note he needs now for his employer.",
      detailed: "You have assessed him today and agree he is unfit for work, so there is no reason to delay. Asking him to return leaves him without the documentation his employer needs." },
    { text: "Tell him you need a letter from his employer before you can consider a fit note.",
      brief: "Adds an unnecessary hurdle; the fit note is based on your assessment, not the employer's request.",
      detailed: "Employers don't need to request a fit note in writing, and the decision depends on your clinical assessment. Asking for a letter delays things without improving the accuracy of the note." }
  ],
  explanation: {
    issue: "This tests honest certification when a patient needs a fit note for an absence that began before you saw him, and whether you know what the rules allow.",
    keyDetails: "There is a documented telephone consultation twelve days ago with another GP. His absence began two weeks ago, a couple of days before that call. You've assessed him today and agree he is unfit.",
    reasoning: "{k1} checks the earlier assessment, {k2} uses it legitimately, and {k3} explains the limits clearly. The distractors either refuse unnecessarily ({d1}), certify unassessed days ({d2}, {d3}), or add needless delay ({d4}, {d5}).",
    competing: "Note too that employees can usually self-certify the first seven days of sickness, so the days before the earlier consultation may not need a fit note at all. This is hard because {d1} feels like the safe, honest choice, and {d3} looks like a small adjustment. The distinction is between using a genuine earlier assessment, which is allowed, and certifying days or assessment dates that don't reflect an actual assessment, which isn't."
  },
  refs: [
    { ref: "fitnote", note: "Section 11: fit notes that include earlier dates, based on an earlier assessment." },
    { ref: "gmp", note: "Domain 4, 'Acting with honesty and integrity' in documents you sign." }
  ],
  tags: ["fit notes", "certification", "general practice", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-045", letters: "BCAD", format: "ranking", difficulty: "moderate",
  title: "A worrying trace", setting: "Obstetrics & gynaecology", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Challenging decisions", "Escalation", "Patient safety"],
  stem:
    "You are an F2 doctor on labour ward. Ms Begum, 29, is having her labour induced with an oxytocin infusion. The registrar reviewed the CTG 30 minutes ago and decided to continue the infusion.\n\n" +
    "Since then, the CTG has developed a rising baseline heart rate and repeated late decelerations, which you and the midwife both find concerning. The registrar is on the ward, assessing another woman, and has said she will come back \"shortly\".",
  options: [
    { text: "Tell the registrar clearly what the CTG now shows, and ask her to review it again straight away.",
      brief: "The trace has changed since her decision, and she needs to know now.",
      detailed: "The registrar's decision was based on the CTG 30 minutes ago. New concerning features may need prompt action, including stopping the oxytocin and assessing Ms Begum and the baby. Telling her specifically what has changed, and asking for an immediate review, is the quickest way to get the right decision from the person responsible." },
    { text: "Agree with the midwife that she reduces or stops the oxytocin while you get the registrar to review.",
      brief: "A reasonable safety step in line with national guidance on concerning CTGs, pending senior review.",
      detailed: "NICE guidance on fetal monitoring advises considering stopping or reducing oxytocin when there are concerning features on the CTG, and midwives commonly do this while awaiting review. It reduces the stress on the baby while the registrar comes. It ranks second because it changes a plan the registrar made, so she must be told immediately, which is why telling her comes first." },
    { text: "Contact the consultant on call to ask for their view on the CTG.",
      brief: "Appropriate if the registrar can't come promptly or concerns remain, but she is on the ward now.",
      detailed: "Consultants on labour ward expect to be called when there are concerns about a CTG, and this would be the right step if the registrar were delayed or if you still had concerns after her review. It ranks third because the registrar is a few metres away and can review almost immediately." },
    { text: "Accept the registrar's decision, as she has much more experience of interpreting CTGs than you.",
      brief: "Her decision was based on an earlier trace that has since changed.",
      detailed: "Deferring to experience is often reasonable. But the CTG has changed since she made her decision, and both you and the midwife are concerned. Accepting the plan without telling her about the change could put the baby at risk." }
  ],
  explanation: {
    issue: "This tests whether you act when new information changes the basis of a senior's decision, combining an immediate safety step with prompt escalation.",
    keyDetails: "The CTG has changed since the registrar's review, and both you and the midwife are concerned. The registrar is nearby. The oxytocin is still running, and it can make fetal distress worse.",
    reasoning: "{1} brings the change straight to the decision-maker, and {2} reduces the risk while she comes. {3} is the right escalation if she can't, and {4} defers to a decision based on outdated information.",
    competing: "Some would put stopping the oxytocin first, since it acts immediately. In practice the midwife may do this while you speak to the registrar, and near-miss scoring treats the two as adjacent. The key puts telling the registrar first because she is on the ward and needs to know her plan is being changed."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, speaking up when you have concerns about a decision; 'Responding to safety risks'." },
    { ref: "concerns", note: "Escalating concerns about patient safety, including to more senior colleagues." },
    { ref: "ng229", note: "Responding to concerning CTG features, including stopping or reducing oxytocin." }
  ],
  tags: ["CTG", "obstetrics", "escalation", "disagreeing with seniors"]
}
];
