// Mock 1, part 1 (sjt-201 to sjt-212). Pool mock-1: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-1";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-201", pool, letters: "BECAD", format: "ranking", difficulty: "moderate",
  title: "The wrong result", setting: "General practice", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Candour", "Patient safety", "Owning mistakes"],
  stem:
    "You are an F2 doctor in a GP practice. Yesterday you phoned Ms Carter, 34, and told her that her cervical screening result was normal.\n\n" +
    "Today you realise you read the result of another patient with the same surname. Ms Carter's actual result shows abnormal cells, and she needs a referral for colposcopy.",
  options: [
    { text: "Phone Ms Carter, apologise, and explain her actual result.",
      brief: "She needs the correct information promptly, with an apology.",
      detailed: "Ms Carter has been falsely reassured. Contacting her quickly, apologising, and explaining her real result and the colposcopy referral is honest and puts her care right." },
    { text: "Tell your GP supervisor what happened.",
      brief: "Your supervisor needs to know, and can support you.",
      detailed: "Your supervisor should know about an error affecting a patient's care. They can help you plan the conversation and make sure the referral is made." },
    { text: "Record it as a significant event so the practice can learn from it.",
      brief: "Helps the practice prevent similar errors.",
      detailed: "Patients with the same surname are a known risk. Recording it as a significant event helps the practice put checks in place. It ranks third because Ms Carter's care comes first." },
    { text: "Send Ms Carter a letter with her correct result.",
      brief: "She needs to hear this directly, not by letter.",
      detailed: "A letter is a record, but finding out by post that her 'normal' result was wrong would be distressing and leaves no chance to ask questions." },
    { text: "Make the colposcopy referral, and let the clinic contact her.",
      brief: "Leaves her believing her result was normal.",
      detailed: "The referral is needed, but she would receive an appointment without explanation, after being told her result was normal. This is dishonest by omission and the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you correct your own error promptly and openly when it has affected what a patient believes about her health.",
    keyDetails: "You gave her the wrong result. She needs further investigation. She currently believes everything is normal.",
    reasoning: "{1} puts things right with her, {2} involves your supervisor, and {3} helps prevent a repeat. {4} is impersonal, and {5} leaves her misinformed.",
    competing: "Some would speak to the supervisor first. That's reasonable, but the key puts Ms Carter first because she is currently misinformed about her health."
  },
  refs: [
    { ref: "candour", note: "Telling patients when something has gone wrong, apologising and putting it right." }
  ],
  tags: ["candour", "screening", "errors", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-202", pool, letters: "EFG", format: "multiple_choice", difficulty: "easy",
  title: "Mid-procedure", setting: "Emergency department", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Prioritisation", "Delegation", "Patient safety"],
  stem:
    "You are an F2 doctor in the Emergency Department. You are halfway through a lumbar puncture, with the needle in place and fluid collecting slowly.\n\n" +
    "A nurse tells you that a patient in resus has dropped his blood pressure to 78/40 and is becoming drowsy.",
  options: [
    // keyed
    { text: "Ask the nurse to call the ED registrar to resus straight away.",
      brief: "A deteriorating patient needs senior help now.",
      detailed: "You can't leave a patient mid-procedure safely, but the deteriorating patient needs a doctor now. The registrar can attend immediately." },
    { text: "Complete the lumbar puncture as quickly as safely possible.",
      brief: "Leaving a needle in place, or removing it hastily, risks harm.",
      detailed: "Abandoning the procedure would mean starting again later and could harm the patient. Completing it safely, without rushing unduly, lets you help in resus soon." },
    { text: "Go to resus as soon as you have finished.",
      brief: "Your help may still be needed.",
      detailed: "Once the procedure is complete, joining the team in resus means you can help with the sick patient." },
    // distractors
    { text: "Remove the needle immediately and go to resus.",
      brief: "Abandoning the procedure isn't necessary when others can attend.",
      detailed: "This puts the deteriorating patient first, which is the right instinct, but others can attend immediately, and abandoning the procedure exposes this patient to a repeat." },
    { text: "Ask the nurse to give a fluid bolus and call you back in ten minutes.",
      brief: "A drowsy, hypotensive patient needs a doctor now.",
      detailed: "Fluids may be needed, but a drowsy patient with low blood pressure needs immediate medical assessment, not a delayed call back." },
    { text: "Ask the patient having the lumbar puncture whether you can leave for a few minutes.",
      brief: "Not a fair question to put to a patient mid-procedure.",
      detailed: "This puts the patient in an impossible position and doesn't solve the problem of who sees the patient in resus." },
    { text: "Ask the nurse to monitor the patient in resus until you've finished.",
      brief: "Monitoring isn't enough for a deteriorating patient.",
      detailed: "The patient needs a doctor's assessment now, not just monitoring." },
    { text: "Continue the lumbar puncture at your normal pace, as you are committed to it.",
      brief: "Ignores the urgency of the other patient.",
      detailed: "Completing the procedure is right, but the other patient needs help to be arranged now." }
  ],
  explanation: {
    issue: "This tests how you respond to an emergency when you can't safely leave the patient in front of you.",
    keyDetails: "You are mid-procedure. The other patient is hypotensive and drowsy. Senior help is available.",
    reasoning: "{k1} gets a senior to the sick patient, {k2} finishes safely, and {k3} brings you to help afterwards. The distractors abandon the procedure ({d1}), delay assessment ({d2}, {d4}), burden the patient ({d3}), or ignore the urgency ({d5}).",
    competing: "{d1} is the tempting option, but others can attend immediately, so abandoning the procedure isn't necessary."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, prioritising patients and asking for help." }
  ],
  tags: ["prioritisation", "procedures", "emergency department", "delegation"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-203", pool, letters: "CADBE", format: "ranking", difficulty: "moderate",
  title: "Will he wake up?", setting: "Intensive care", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communicating uncertainty", "Supporting families", "Honesty"],
  stem:
    "You are an F2 doctor in intensive care. Daniel, 24, was admitted two days ago after a cardiac arrest at home. He is sedated and ventilated, and it isn't yet known whether he has suffered brain injury.\n\n" +
    "His parents ask you, \"Is he going to wake up?\" The consultant has told them it is too early to know.",
  options: [
    { text: "Acknowledge how hard the waiting is, and ask what they understand so far.",
      brief: "Responding to their distress and understanding comes first.",
      detailed: "They are living with terrible uncertainty. Acknowledging this, and finding out what they already know, helps you respond to what they need." },
    { text: "Explain honestly that it's too early to know, and what the team will be looking for.",
      brief: "Honest about uncertainty, with some information about the process.",
      detailed: "Explaining that the team will assess him over the coming days, and what they'll look for, gives them some sense of what to expect without false hope or premature bad news." },
    { text: "Offer to arrange for the consultant to update them again soon.",
      brief: "The consultant can give the fullest answer.",
      detailed: "Regular updates from the consultant help families through uncertainty. It ranks third because they need a response from you now." },
    { text: "Reassure them that young people often recover well.",
      brief: "Well meant, but may give false hope.",
      detailed: "Some young patients recover well, but you don't know about Daniel, and false reassurance could make bad news harder later." },
    { text: "Tell them that brain injury is likely after a cardiac arrest at home.",
      brief: "Premature, and goes beyond what is known.",
      detailed: "This may be statistically true, but it isn't known for Daniel, and saying it now could take away hope unnecessarily." }
  ],
  explanation: {
    issue: "This tests how you communicate uncertainty to a family in crisis, without false hope or premature pessimism.",
    keyDetails: "The prognosis is genuinely uncertain. The consultant has said it's too early. The family are desperate for an answer.",
    reasoning: "{1} responds to their distress, {2} is honest about uncertainty, and {3} arranges a fuller update. {4} gives false hope, and {5} is premature.",
    competing: "The order of {4} and {5} is debatable. The key ranks premature pessimism last because it goes beyond what is known and could cause unnecessary despair."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, communicating honestly and sensitively with families." }
  ],
  tags: ["uncertainty", "intensive care", "families", "cardiac arrest"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-204", pool, letters: "DEH", format: "multiple_choice", difficulty: "hard",
  title: "A risk assessment that didn't happen", setting: "Psychiatry", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Trust and professionalism", "Colleagues, culture and safety"],
  competencies: ["Honesty in records", "Patient safety", "Raising concerns"],
  stem:
    "You are an F2 doctor on an adult psychiatric ward. Yesterday evening Dr Cole, another F2, documented a full suicide risk assessment for Ms Price, 30, before she went on overnight leave.\n\n" +
    "This morning the nurses tell you Dr Cole didn't see Ms Price at all; he was called away before reaching her. Ms Price is due back at noon.",
  options: [
    // keyed
    { text: "Make sure Ms Price's risk is assessed when she returns.",
      brief: "Her actual risk is unknown, which matters most.",
      detailed: "If the assessment didn't happen, her risk wasn't assessed before leave. Making sure it's done properly when she returns protects her." },
    { text: "Speak to Dr Cole about what happened.",
      brief: "He may have an explanation, and needs the chance to give it.",
      detailed: "He may have written the note in advance and been called away, or there may be another explanation. Asking him directly is fair, and he may correct the record himself." },
    { text: "Inform the consultant about the concern.",
      brief: "A possible false entry about risk is serious.",
      detailed: "A risk assessment recorded but not done affects patient safety and raises a probity concern. The consultant needs to know, whatever the explanation." },
    // distractors
    { text: "Correct Dr Cole's entry yourself.",
      brief: "You can't alter a colleague's record.",
      detailed: "The record may be wrong, but changing someone else's entry isn't appropriate. Dr Cole should add a correction, or the consultant can decide how to handle it." },
    { text: "Phone Ms Price to ask whether she was assessed before leaving.",
      brief: "Puts her in the middle of a professional issue.",
      detailed: "This may confirm what happened, but involving her in a concern about a colleague isn't appropriate, and her leave should continue as planned unless there's a safety concern." },
    { text: "Report Dr Cole to the GMC.",
      brief: "Premature without speaking to him or the consultant.",
      detailed: "If he did falsify the record, it may need reporting, but local steps come first." },
    { text: "Leave it, as Ms Price went on leave safely.",
      brief: "Her safety on leave wasn't assessed, and the record is wrong.",
      detailed: "She may be well, but the record suggests she was assessed when she wasn't, which could affect decisions about her care." },
    { text: "Ask the nurses to document their account of what happened.",
      brief: "Their account may be needed later, but this isn't the first step.",
      detailed: "A factual record from the nurses may be helpful if there's a review, but speaking to Dr Cole and the consultant comes first." }
  ],
  explanation: {
    issue: "This tests how you respond to a colleague's possibly false record of a risk assessment, protecting the patient and treating the colleague fairly.",
    keyDetails: "The risk assessment may not have happened. Ms Price is returning from leave. Dr Cole may have an explanation.",
    reasoning: "{k1} protects Ms Price, {k2} gives Dr Cole the chance to explain, and {k3} informs the consultant. The distractors alter records ({d1}), involve the patient inappropriately ({d2}), escalate prematurely ({d3}), ignore the concern ({d4}), or put documentation first ({d5}).",
    competing: "{d5} is the hard distractor: the nurses' account may matter later, but the patient and a direct conversation come first."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in records; Domain 3, acting on concerns about colleagues." },
    { ref: "ng225", note: "Assessing risk for people who may self-harm." }
  ],
  tags: ["records", "risk assessment", "colleagues", "psychiatry"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-205", pool, letters: "ABEDC", format: "ranking", difficulty: "moderate",
  title: "Handover without the system", setting: "Obstetrics & gynaecology", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Handover", "Adapting to system failure", "Communication"],
  stem:
    "You are an F2 doctor on the labour ward. Ten minutes before the night team arrives, the electronic handover system crashes. IT says it may be down for several hours.\n\n" +
    "You have twelve patients to hand over, including two women with pre-eclampsia awaiting blood results.",
  options: [
    { text: "Write a brief list, highest-risk first, and go through it with the night team.",
      brief: "A written list plus a verbal handover keeps the handover safe.",
      detailed: "Writing down the key points, starting with the women with pre-eclampsia, and talking each one through with the night team means nothing is lost and they can ask questions." },
    { text: "Phone the lab to chase the pre-eclampsia blood results before you leave.",
      brief: "Results that may be delayed by the IT failure need following up.",
      detailed: "The IT failure may also affect how results are seen. Chasing the outstanding bloods, and passing the results on, means abnormal results aren't missed overnight. It ranks second because the handover itself comes first." },
    { text: "Let the labour ward coordinator know the system is down.",
      brief: "The coordinator may need to arrange a backup process.",
      detailed: "The coordinator may need to tell other staff and arrange backup. It ranks third because your own patients' handover comes first." },
    { text: "Stay late until the system is back up, so that you can complete the electronic handover.",
      brief: "Conscientious, but delays the handover unnecessarily.",
      detailed: "This is well meant, and you'd be on site for questions, but the night team needs the information now, and you'd be working unnecessarily long hours." },
    { text: "Ask the night team to look at the system when it's working again.",
      brief: "Leaves them without information for hours.",
      detailed: "The system may be down for hours, during which the night team won't know about your patients, including the women awaiting results. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you keep a handover safe when the usual system fails.",
    keyDetails: "The system is down for hours. Two women with pre-eclampsia have pending results. The night team arrives in ten minutes.",
    reasoning: "{1} hands over safely, in writing and in person, {2} makes sure pending results aren't lost, and {3} informs the coordinator. {4} delays the handover, and {5} leaves the night team uninformed.",
    competing: "Some would chase the results first. The key puts the handover first because the night team arrives in minutes, and they can also chase results once they know about them."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, handing over care safely." }
  ],
  tags: ["handover", "system failure", "pre-eclampsia", "labour ward"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-206", pool, letters: "ACG", format: "multiple_choice", difficulty: "moderate",
  title: "Turning off the defibrillator", setting: "Cardiology / respiratory", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["End-of-life care", "Respecting autonomy", "Multidisciplinary working"],
  stem:
    "You are an F2 doctor in cardiology. Mr Hughes, 78, has end-stage heart failure and an implantable cardioverter-defibrillator (ICD). He has been told he is likely to die in the coming weeks.\n\n" +
    "He asks you to have the ICD's shocks turned off, saying he doesn't want to be shocked when he dies. He has capacity.",
  options: [
    // keyed
    { text: "Ask him about his wishes and what worries him.",
      brief: "Understanding his reasons supports his decision.",
      detailed: "He may have seen or heard about shocks at the end of life. Exploring his wishes helps make sure his decision is informed and his concerns addressed." },
    { text: "Let the cardiology team know, so deactivation can be arranged.",
      brief: "The cardiology and device team arrange deactivation.",
      detailed: "Deactivating shocks is a recognised part of end-of-life care. The cardiology team and device technicians can discuss it with him and arrange it." },
    { text: "Ask whether he'd like his family involved in the discussion.",
      brief: "He may want their support.",
      detailed: "His family may want to understand his decision, and he may want their support. Asking him respects his choice." },
    // distractors
    { text: "Tell him that deactivating the ICD would be assisted dying.",
      brief: "Incorrect: deactivation is withdrawing a treatment, which patients can refuse.",
      detailed: "Patients with capacity can refuse continuing treatment, including ICD shocks. This isn't assisted dying." },
    { text: "Explain that the ICD must stay on, as it protects him from sudden death.",
      brief: "Overrides his informed wishes.",
      detailed: "The ICD can prevent sudden death, but he has capacity and has made an informed choice at the end of his life." },
    { text: "Ask his family whether they agree before taking it further.",
      brief: "It's his decision, not theirs.",
      detailed: "Families can be involved if he wishes, but their agreement isn't required." },
    { text: "Arrange for the device to be switched off today yourself.",
      brief: "Deactivation needs the right team and a proper discussion.",
      detailed: "This needs the cardiology team and device technicians, with a documented discussion." },
    { text: "Suggest he waits until he is closer to dying before deciding.",
      brief: "Delaying may mean he receives shocks he wanted to avoid.",
      detailed: "Waiting risks him receiving distressing shocks, and his decision is already informed." }
  ],
  explanation: {
    issue: "This tests whether you respect a capacitous patient's wish to withdraw a treatment at the end of life, and involve the right team.",
    keyDetails: "He has capacity. He is approaching the end of his life. Deactivating shocks is a recognised option.",
    reasoning: "{k1} explores his wishes, {k2} involves the team who can arrange it, and {k3} offers to involve his family. The distractors misstate the law ({d1}), override him ({d2}), require family agreement ({d3}), act beyond your role ({d4}), or delay ({d5}).",
    competing: "{d5} may seem cautious, but it risks the very shocks he wants to avoid."
  },
  refs: [
    { ref: "eol", note: "Withdrawing treatment at the end of life, in line with the patient's wishes." },
    { ref: "consent", note: "Patients with capacity can refuse treatment, including continuing treatment." }
  ],
  tags: ["end of life", "ICD", "heart failure", "autonomy"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-207", pool, letters: "EABCD", format: "ranking", difficulty: "easy",
  title: "\"I can't do this anymore\"", setting: "Elderly care ward", attribute: P,
  topic: "An impaired or unwell colleague",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Supporting colleagues", "Concern for wellbeing", "Escalation"],
  stem:
    "You are an F2 doctor on an elderly care ward. At 23:30 you see that Dr Ross, an F1 on your team, has posted on social media after a very difficult shift: \"I can't do this anymore.\"\n\n" +
    "She is due on the ward at 08:00 tomorrow.",
  options: [
    { text: "Message or phone her tonight to ask how she is.",
      brief: "A direct check-in shows you care, and helps you judge whether she's safe.",
      detailed: "Her post could mean frustration or something more serious. Contacting her directly, tonight, lets you find out how she is and offer support." },
    { text: "Let her educational supervisor know that you're concerned.",
      brief: "Someone responsible for her needs to know if you're worried.",
      detailed: "Her supervisor, or the on-call consultant if you can't reach her and are worried tonight, can help make sure she is safe and supported. It ranks second because a direct check-in comes first." },
    { text: "Talk to her when she comes in tomorrow.",
      brief: "Kind, but may be too late if she's at risk tonight.",
      detailed: "A conversation tomorrow is helpful, but you can't be sure she's safe tonight." },
    { text: "Comment publicly on her post to offer support.",
      brief: "Supportive, but public.",
      detailed: "Public comments may embarrass her and draw attention." },
    { text: "Leave it, as people often post things they don't mean.",
      brief: "Risks missing a colleague in distress.",
      detailed: "She may not mean it literally, but you can't know without checking." }
  ],
  explanation: {
    issue: "This tests whether you act on signs that a colleague may be in distress, promptly and privately.",
    keyDetails: "The post is late at night after a difficult shift. You don't know what she means. She's due in tomorrow.",
    reasoning: "{1} checks on her directly, {2} escalates if needed, and {3} follows up later. {4} is public, and {5} ignores it.",
    competing: "Some would escalate first. The key starts with contacting her because it's the quickest way to find out how she is."
  },
  refs: [
    { ref: "practitionerhealth", note: "Support for doctors in distress." },
    { ref: "gmp", note: "Domain 3, supporting colleagues." }
  ],
  tags: ["colleague wellbeing", "social media", "burnout"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-208", pool, letters: "BDF", format: "multiple_choice", difficulty: "moderate",
  title: "A repair you've only watched", setting: "Obstetrics & gynaecology", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Recognising limits", "Asking for help", "Learning"],
  stem:
    "You are an F2 doctor on the labour ward. A midwife asks you to repair a second-degree perineal tear after a normal delivery, as the registrar is in theatre.\n\n" +
    "You have watched one repair but never done one.",
  options: [
    // keyed
    { text: "Explain to the midwife that you haven't been trained to do this.",
      brief: "Honesty about your limits protects the woman.",
      detailed: "A poorly repaired tear can cause long-term problems. Being honest that you haven't been trained is essential." },
    { text: "Ask whether a midwife trained in perineal repair is available.",
      brief: "Many midwives are trained to repair second-degree tears.",
      detailed: "Experienced midwives often repair second-degree tears. One may be available sooner than the registrar." },
    { text: "Ask the registrar to supervise you doing one when they're free.",
      brief: "Supervised practice is how you develop the skill.",
      detailed: "A supervised repair, when the registrar is available, lets you learn safely. In the meantime, the woman can be made comfortable." },
    // distractors
    { text: "Do the repair, following the steps you observed.",
      brief: "Observing once isn't training.",
      detailed: "You may remember the steps, but you haven't been trained, and the consequences of a poor repair can be lasting." },
    { text: "Look up a video of the technique, then do the repair.",
      brief: "A video doesn't replace supervised training.",
      detailed: "Videos can help with learning, but not as a substitute for supervised practice." },
    { text: "Ask the woman whether she minds you doing it for the first time.",
      brief: "Her consent doesn't make it safe.",
      detailed: "Being open is good, but her agreement doesn't make it appropriate for you to do it untrained and unsupervised." },
    { text: "Tell the midwife it isn't your job.",
      brief: "Unhelpful, and doesn't solve the problem.",
      detailed: "You aren't the right person, but you should help find someone who is." },
    { text: "Ask the midwife to leave the tear until the morning.",
      brief: "Delay may increase the risk of complications.",
      detailed: "Repairs are usually done promptly, and waiting until morning may not be in the woman's interests." }
  ],
  explanation: {
    issue: "This tests whether you recognise the limits of your competence and find a safe way for the woman to receive care.",
    keyDetails: "You have only observed one repair. The registrar is busy. Trained midwives may be available.",
    reasoning: "{k1} is honest about your limits, {k2} finds a trained person, and {k3} plans supervised learning. The distractors act beyond competence ({d1}, {d2}, {d3}), are unhelpful ({d4}), or delay care ({d5}).",
    competing: "{d3} may seem respectful, but her consent doesn't make an untrained repair safe."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, working within your competence." }
  ],
  tags: ["competence", "perineal repair", "labour ward", "supervision"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-209", pool, letters: "DBCA", format: "ranking", difficulty: "hard",
  title: "Her medicines, her decision", setting: "Oncology & palliative care", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting autonomy", "Supporting carers", "Communication"],
  stem:
    "You are an F2 doctor on an oncology ward. Mrs Bell, 67, has advanced breast cancer and is going home with several medicines, including oral morphine. She has capacity and wants to manage her own medicines.\n\n" +
    "Her husband insists he should take charge of them, saying she gets muddled. Mrs Bell says she doesn't, and is upset.",
  options: [
    { text: "Ask Mrs Bell how she'd like to manage her medicines.",
      brief: "It's her decision, and she may accept some help.",
      detailed: "She has capacity, so it's her decision. Exploring what support, if any, she would accept, such as a dosette box, respects her autonomy." },
    { text: "Listen to her husband's concerns about her getting muddled.",
      brief: "His concerns may be worth exploring.",
      detailed: "He may have noticed something important, or may be anxious about caring for her. Listening helps you understand." },
    { text: "Ask the pharmacist to review her medicines and suggest ways to make them easier to manage.",
      brief: "Practical aids may address both their concerns.",
      detailed: "A pharmacist can simplify regimens and suggest aids. It ranks third because her wishes and his concerns need addressing first." },
    { text: "Agree that her husband should manage her medicines, as he is her carer.",
      brief: "Overrides her capacitous decision.",
      detailed: "Being her carer doesn't give him the right to make decisions for her." }
  ],
  explanation: {
    issue: "This tests whether you respect a capacitous patient's wishes when a relative disagrees, while taking his concerns seriously.",
    keyDetails: "She has capacity. He says she gets muddled. She is upset.",
    reasoning: "{1} respects her wishes, {2} listens to his concerns, and {3} offers practical help. {4} overrides her decision.",
    competing: "This is hard because {2} may reveal a real problem. If he describes episodes suggesting she can't manage safely, her capacity for this decision may need assessing. The key puts her wishes first because she is presumed to have capacity."
  },
  refs: [
    { ref: "mca1", note: "Presumption of capacity." },
    { ref: "consent", note: "Respecting patients' decisions." }
  ],
  tags: ["autonomy", "carers", "medicines", "oncology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-210", pool, letters: "BCF", format: "multiple_choice", difficulty: "moderate",
  title: "Ligature points still there", setting: "Psychiatry", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Raising concerns", "Patient safety", "Escalation"],
  stem:
    "You are an F2 doctor on an adult psychiatric ward. You notice that several ligature points identified in the ward's annual environmental risk assessment six months ago still haven't been removed.\n\n" +
    "The ward manager says the work has been \"on the list\" with the estates team for months.",
  options: [
    // keyed
    { text: "Ask the ward manager how the risk is managed meanwhile.",
      brief: "Interim measures protect patients now.",
      detailed: "Until the ligature points are removed, extra observation or restricting access may be needed. Asking about this focuses on patient safety now." },
    { text: "Report the delay through the incident reporting system.",
      brief: "Formal reporting highlights an unresolved safety risk.",
      detailed: "A six-month delay on a serious risk should be recorded, so senior managers can see and act on it." },
    { text: "Raise it with your consultant.",
      brief: "A senior clinician can escalate it.",
      detailed: "Your consultant can raise it with the clinical director or estates management." },
    // distractors
    { text: "Leave it, as the ward manager knows about it.",
      brief: "Knowledge isn't action, and patients are at risk.",
      detailed: "The ward manager is aware, but the risk remains six months later." },
    { text: "Contact the CQC as your first step.",
      brief: "Internal routes should be used first.",
      detailed: "The CQC can be informed if internal routes fail, but the trust should have the chance to act first." },
    { text: "Remove the ligature points yourself.",
      brief: "Not your role, and may be unsafe.",
      detailed: "Estates work needs to be done properly." },
    { text: "Tell patients about the ligature points so they can avoid them.",
      brief: "Could increase risk.",
      detailed: "Drawing patients' attention to ligature points could increase the risk." },
    { text: "Email the estates team yourself to complain.",
      brief: "Bypasses the ward's escalation route.",
      detailed: "Contacting estates directly may help, but formal reporting and senior escalation are more effective." }
  ],
  explanation: {
    issue: "This tests whether you raise a long-standing safety risk through proper routes, and focus on protecting patients in the meantime.",
    keyDetails: "The risk is serious and has been known for six months. The ward manager is aware. Patients are at risk now.",
    reasoning: "{k1} focuses on interim safety, {k2} records the delay, and {k3} escalates through a senior. The distractors ignore it ({d1}), bypass internal routes ({d2}, {d5}), act beyond your role ({d3}), or increase risk ({d4}).",
    competing: "{d5} may seem proactive, but formal reporting and senior escalation are more likely to lead to action."
  },
  refs: [
    { ref: "concerns", note: "Raising concerns about patient safety, and escalating when they aren't resolved." }
  ],
  tags: ["ligature risks", "raising concerns", "psychiatry", "estates"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-211", pool, letters: "ACDBE", format: "ranking", difficulty: "moderate",
  title: "A week later", setting: "Emergency department", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Self-care", "Seeking support", "Fitness to work"],
  stem:
    "You are an F2 doctor in the Emergency Department. A week ago you were part of the team that tried to resuscitate a three-year-old who later died.\n\n" +
    "You keep replaying it, are sleeping badly, and feel anxious when a child is brought in. You haven't told anyone.",
  options: [
    { text: "Talk to your educational supervisor about how you are feeling.",
      brief: "Your supervisor can support you and adjust your work if needed.",
      detailed: "Your reaction is understandable. Your supervisor can offer support, help you access more, and consider whether any adjustments would help." },
    { text: "Contact your GP or the trust's staff support service.",
      brief: "Professional support can help with persistent distress.",
      detailed: "Persistent symptoms a week later may benefit from professional support. It ranks second because your supervisor can also support you at work." },
    { text: "Ask whether a team debrief has been arranged.",
      brief: "Debriefs help staff process difficult events together.",
      detailed: "Others in the team may feel similarly. A debrief can help everyone. It ranks third because you need individual support too." },
    { text: "Avoid seeing children in the department for a while.",
      brief: "Avoidance may maintain the anxiety.",
      detailed: "This may feel protective, but avoidance can make anxiety worse, and isn't sustainable in ED." },
    { text: "Keep going, as these feelings usually fade.",
      brief: "They may, but persistent symptoms deserve support.",
      detailed: "Many people recover with time, but you are a week on and still struggling. Ignoring it risks your health and work." }
  ],
  explanation: {
    issue: "This tests whether you recognise the effects of a traumatic event on you and seek support.",
    keyDetails: "It's a week later and you're still affected. You haven't told anyone. It's affecting your work.",
    reasoning: "{1} gets support at work, {2} gets professional support, and {3} gets team support. {4} avoids the problem, and {5} ignores it.",
    competing: "The order of {4} and {5} is close. The key ranks ignoring it last because avoidance is at least an acknowledgement, while ignoring it leaves you unsupported."
  },
  refs: [
    { ref: "practitionerhealth", note: "Confidential support for doctors." },
    { ref: "gmp", note: "Domain 1, looking after your own health." }
  ],
  tags: ["wellbeing", "paediatric death", "trauma", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-212", pool, letters: "AEH", format: "multiple_choice", difficulty: "easy",
  title: "A female doctor, please", setting: "Paediatrics", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting beliefs", "Flexibility", "Patient safety"],
  stem:
    "You are a male F2 doctor in paediatrics. Aisha, 12, has abdominal pain and needs an abdominal examination. She is stable.\n\n" +
    "Her parents politely ask that a female doctor examines her, for religious reasons.",
  options: [
    // keyed
    { text: "Ask whether a female colleague is available.",
      brief: "A reasonable request that can often be met.",
      detailed: "Respecting the family's beliefs, where possible without delaying care, is good practice. A female doctor may be available." },
    { text: "Ask Aisha whether she has a preference too.",
      brief: "Her own views matter.",
      detailed: "At 12, Aisha's views should be sought. She may share her parents' preference, or have her own." },
    { text: "Explain any delay, and keep Aisha comfortable meanwhile.",
      brief: "Keeps them informed and Aisha cared for.",
      detailed: "If there is a delay, explaining it and making sure Aisha has pain relief and is observed keeps her safe." },
    // distractors
    { text: "Explain that you are the doctor on duty, so you need to examine her.",
      brief: "Unnecessarily inflexible when she is stable.",
      detailed: "If she were unwell and no one else were available, this might be needed, but she is stable." },
    { text: "Examine her with a female nurse present instead.",
      brief: "May not meet the family's request.",
      detailed: "A chaperone is good practice, but it doesn't meet their request for a female doctor, which may be possible." },
    { text: "Wait until a female doctor comes on shift tomorrow.",
      brief: "Unsafe delay for abdominal pain.",
      detailed: "Delaying her assessment until tomorrow could miss something serious." },
    { text: "Tell them that requests like this can't be accommodated in the NHS.",
      brief: "Incorrect and dismissive.",
      detailed: "Many requests like this can be met." },
    { text: "Ask the parents to examine her abdomen for you.",
      brief: "Not appropriate.",
      detailed: "A medical examination needs to be done by a clinician." }
  ],
  explanation: {
    issue: "This tests whether you respect a family's religious preference while making sure the child receives timely care.",
    keyDetails: "Aisha is stable. The request is reasonable. Delay must be avoided.",
    reasoning: "{k1} tries to meet the request, {k2} involves Aisha, and {k3} keeps her safe. The distractors are inflexible ({d1}, {d4}), only partly meet the request ({d2}), delay care ({d3}), or are inappropriate ({d5}).",
    competing: "{d2} is the tempting option, but a female doctor may be available, and that's what the family asked for."
  },
  refs: [
    { ref: "beliefs", note: "Respecting patients' beliefs." },
    { ref: "u18", note: "Involving children in decisions about their care." }
  ],
  tags: ["religion", "paediatrics", "examination", "preferences"]
}
];
