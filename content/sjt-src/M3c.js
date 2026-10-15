// Mock 3, part 3 (sjt-326 to sjt-337). Pool mock-3: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-3";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-326", pool, letters: "CDG", format: "multiple_choice", difficulty: "moderate",
  title: "Observed in the bathroom", setting: "Psychiatry", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication", "Safety and quality"],
  competencies: ["Dignity", "Least restrictive care", "Advocacy"],
  stem:
    "You are an F2 doctor on an inpatient psychiatric ward. Ms Reid, 24, is on close observation, with a member of staff within arm's length at all times, after self-harming on the ward last week.\n\n" +
    "She tells you, distressed, that a male healthcare assistant has been observing her in the bathroom and while she showers. She says she feels humiliated and has stopped washing.",
  options: [
    // keyed
    { text: "Ask the nurse in charge for female staff to observe her.",
      brief: "A same-sex observer respects her dignity while keeping her safe.",
      detailed: "Close observation can still respect privacy. Allocating female staff for her personal care, wherever possible, keeps her safe without the humiliation she describes." },
    { text: "Talk with her about how the observation is affecting her.",
      brief: "Her experience matters and helps the team plan her care.",
      detailed: "She has stopped washing, which affects her health and dignity. Listening to her helps the team understand what would make observation more bearable." },
    { text: "Ask the team to review whether this level of observation is needed.",
      brief: "Observation should be the least restrictive level that keeps her safe.",
      detailed: "Observation levels should be reviewed regularly. If her risk has reduced, a less intrusive level may be appropriate. If not, the team can look at how it is carried out." },
    // distractors
    { text: "Tell the staff to stop observing her in the bathroom.",
      brief: "Could leave her at risk at a time when she may self-harm.",
      detailed: "Bathrooms can be high-risk places for self-harm. Stopping observation there without a risk review could be dangerous." },
    { text: "Explain that close observation is ward policy and must continue.",
      brief: "Ignores a legitimate concern about her dignity.",
      detailed: "Observation may need to continue, but how it is done matters. Dismissing her concern doesn't help." },
    { text: "Suggest the assistant stands outside the bathroom with the door ajar.",
      brief: "A possible compromise, but not your decision to make alone.",
      detailed: "This may be reasonable if her risk allows, but changing how observation works should be agreed by the team, not arranged informally." },
    { text: "Record her complaint in the notes and take no further action.",
      brief: "Documentation alone doesn't address her distress.",
      detailed: "Her concern should be recorded, but she needs something to change." },
    { text: "Advise her to make a formal complaint to the ward manager.",
      brief: "She can complain, but the problem needs addressing now.",
      detailed: "She has the right to complain, but this puts the burden on her and doesn't solve the immediate problem." }
  ],
  explanation: {
    issue: "This tests whether you protect a patient's dignity while respecting the safety reasons for her observation.",
    keyDetails: "She is on close observation after self-harm. A male member of staff observes her personal care. She is distressed and has stopped washing.",
    reasoning: "{k1} arranges female observers, {k2} listens to her, and {k3} reviews whether the level is still right. The distractors remove safety measures ({d1}), dismiss her ({d2}, {d4}), change practice informally ({d3}), or shift the burden ({d5}).",
    competing: "{d3} may well be where the team ends up, but changes to observation should be agreed by the team after a risk review."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients with dignity." },
    { ref: "equality", note: "Same-sex care and respecting patients' privacy." }
  ],
  tags: ["dignity", "observation", "psychiatry", "self-harm"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-327", pool, letters: "DCBAE", format: "ranking", difficulty: "easy",
  title: "Mocking an accent", setting: "Emergency department", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Challenging discrimination", "Respect", "Professionalism"],
  stem:
    "You are an F2 doctor in the Emergency Department. At the nurses' station, two nurses are imitating the accent of Mrs Nowak, a Polish patient they have just seen, and laughing.\n\n" +
    "Several patients in nearby cubicles, including Mrs Nowak, may be able to hear them.",
  options: [
    { text: "Ask them calmly to stop, as patients can hear them.",
      brief: "Stops the behaviour straight away without a confrontation.",
      detailed: "A calm, brief request deals with it at once. Pointing out that patients can hear gives a clear, non-accusatory reason. It ranks first." },
    { text: "Check that Mrs Nowak is all right, and apologise if she heard.",
      brief: "She may have been hurt by what she heard.",
      detailed: "If she heard, an apology on behalf of the department helps restore her trust. It ranks second because stopping the behaviour comes first." },
    { text: "Mention it to the nurse in charge after your shift.",
      brief: "Helps address the behaviour more widely.",
      detailed: "The nurse in charge can address it with the staff involved. It ranks third because it is less immediate." },
    { text: "Suggest respect for patients as a topic for the next team teaching.",
      brief: "Useful, but it does nothing about what's happening now.",
      detailed: "Teaching can help change culture over time, but it doesn't address this incident." },
    { text: "Leave it, as it's only a joke between colleagues.",
      brief: "Discriminatory behaviour that patients can hear isn't harmless.",
      detailed: "Mocking a patient's accent is disrespectful and could be discriminatory. Doing nothing allows it to continue. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you challenge discriminatory behaviour by colleagues, especially when patients may be affected.",
    keyDetails: "The nurses are mocking a patient's accent. Patients can hear. It is happening now.",
    reasoning: "{1} stops it, {2} supports the patient, and {3} addresses it further. {4} is too distant, and {5} allows it to continue.",
    competing: "{2} and {3} are close. The key puts Mrs Nowak first because she may have been directly hurt."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients fairly and with respect." },
    { ref: "equality", note: "Race and national origin as protected characteristics." }
  ],
  tags: ["discrimination", "respect", "emergency department", "colleagues"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-328", pool, letters: "EFH", format: "multiple_choice", difficulty: "moderate",
  title: "Won't go home", setting: "Orthopaedics", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Discharge planning", "Communication", "Managing conflict"],
  stem:
    "You are an F2 doctor in orthopaedics. Mr Rowe, 79, had a fractured wrist fixed four days ago and has been declared medically fit for discharge. The physiotherapists and occupational therapists say he is safe to go home, and a care package starts tomorrow.\n\n" +
    "He refuses to leave, saying he \"can't manage\" alone, and becomes angry when the nurse mentions his transport.",
  options: [
    // keyed
    { text: "Ask him what worries him about going home.",
      brief: "His specific fears may be addressable.",
      detailed: "He may be worried about meals, stairs, falling or loneliness. Understanding exactly what worries him is the first step to resolving it." },
    { text: "Ask the therapists to review whether his support is enough.",
      brief: "A second look may address his concerns.",
      detailed: "If his concerns reveal something missed, such as no one to help in the evenings, the therapists can adjust the plan." },
    { text: "Explain calmly what support is in place for him at home.",
      brief: "Clear information may reassure him.",
      detailed: "He may not know the details of his care package or the follow-up arranged. Explaining them calmly may ease his anxiety." },
    // distractors
    { text: "Call security to escort him to the transport.",
      brief: "Escalates a situation that needs listening.",
      detailed: "He is anxious, not dangerous. Involving security is disproportionate and distressing." },
    { text: "Tell him he is preventing another patient from getting a bed.",
      brief: "Puts pressure on him rather than addressing his worries.",
      detailed: "Bed pressures are real, but this makes him feel guilty without helping him feel safe." },
    { text: "Keep him in for another week to avoid conflict.",
      brief: "Unnecessary hospital stays carry their own risks.",
      detailed: "Staying longer than needed increases the risk of deconditioning and infection, and doesn't address his fears." },
    { text: "Ask his daughter to come and take him home.",
      brief: "May help, but it bypasses his concerns.",
      detailed: "Family can be part of the solution, but asking her to collect him without understanding his worries may not help." },
    { text: "Tell him the decision has been made and he has to go.",
      brief: "Dismissive, and likely to increase his distress.",
      detailed: "Discharge decisions are clinical, but delivering one this way ignores his anxiety and may escalate his anger." }
  ],
  explanation: {
    issue: "This tests how you respond to a patient who refuses discharge because of anxiety, rather than seeing it simply as obstruction.",
    keyDetails: "He has been assessed as safe. A care package is arranged. He is anxious and angry.",
    reasoning: "{k1} explores his fears, {k2} checks the plan, and {k3} explains it. The distractors escalate ({d1}), pressure him ({d2}, {d5}), avoid the issue ({d3}), or bypass him ({d4}).",
    competing: "{d4} could be part of the solution, but only once you understand what he is worried about."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, listening to patients and responding to their concerns." }
  ],
  tags: ["discharge", "anxiety", "orthopaedics", "conflict"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-329", pool, letters: "ADCB", format: "ranking", difficulty: "hard",
  title: "Fully qualified?", setting: "General practice", attribute: P,
  topic: "Honesty with patients and colleagues",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Honesty", "Transparency", "Patient choice"],
  stem:
    "You are an F2 doctor on a four-month placement in a GP practice. Reception staff book patients with you as \"the GP trainee\".\n\n" +
    "Mrs Clarke, 52, has come about a breast lump. At the start of the consultation she asks, \"Are you a fully qualified GP?\"",
  options: [
    { text: "Explain that you're a qualified doctor in foundation training.",
      brief: "An accurate answer to a direct question.",
      detailed: "You are a fully registered doctor, but not a GP or a GP trainee. Explaining your role accurately lets her decide how she wants to proceed. It ranks first." },
    { text: "Offer her the choice of seeing a GP instead.",
      brief: "Respects her choice once she knows your role.",
      detailed: "Some patients prefer to see a GP for a worrying problem. Offering this, without pressure, respects her autonomy. It ranks second because she needs an honest answer first." },
    { text: "Ask reception afterwards to describe you accurately when booking.",
      brief: "Prevents the same confusion for other patients.",
      detailed: "Booking you as a 'GP trainee' gives patients the wrong impression. Asking reception to change this helps everyone. It ranks third because it doesn't answer Mrs Clarke." },
    { text: "Tell her that you are the GP trainee and fully qualified.",
      brief: "Misleading about your training.",
      detailed: "You aren't a GP trainee, and saying so gives a false impression of your experience. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests honesty about your own role and experience when a patient asks directly.",
    keyDetails: "You are an F2, not a GP trainee. The booking description is misleading. She has a worrying symptom and has asked directly.",
    reasoning: "{1} answers honestly, {2} respects her choice, and {3} fixes the system. {4} misleads her.",
    competing: "{1} and {2} belong together. The key puts the honest explanation first because she needs it to make her choice."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, being honest about your experience and role." }
  ],
  tags: ["honesty", "role", "general practice", "transparency"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-330", pool, letters: "ACF", format: "multiple_choice", difficulty: "moderate",
  title: "\"Just anxiety\"", setting: "Psychiatry", attribute: P,
  topic: "Equality and fair treatment of patients",
  gmcDomains: ["Safety and quality", "Patients, partnership and communication"],
  competencies: ["Diagnostic overshadowing", "Physical health", "Challenging assumptions"],
  stem:
    "You are an F2 doctor on call for an inpatient psychiatric unit. Mr Booth, 55, who has generalised anxiety disorder and smokes heavily, complains of central chest pain.\n\n" +
    "The nurse who calls you says, \"He's always anxious. Can you just prescribe some lorazepam?\" His observations haven't been checked since this morning.",
  options: [
    // keyed
    { text: "Go and assess his chest pain yourself.",
      brief: "Chest pain needs medical assessment, whatever his history.",
      detailed: "He has risk factors for heart disease. Anxiety may explain the pain, but it can't be assumed. A proper history and examination are needed." },
    { text: "Ask for his observations and an ECG now.",
      brief: "Quick tests that can identify a serious cause.",
      detailed: "Observations and an ECG can be done within minutes and may show signs of a cardiac cause that needs urgent treatment." },
    { text: "Explain to the nurse why chest pain needs a full assessment.",
      brief: "Challenges an assumption that could put patients at risk.",
      detailed: "Attributing physical symptoms to a mental illness, known as diagnostic overshadowing, leads to missed diagnoses. A respectful explanation may change how future symptoms are handled." },
    // distractors
    { text: "Prescribe lorazepam as the nurse suggests.",
      brief: "Treats anxiety without ruling out a serious cause.",
      detailed: "This could mask or delay treatment of a heart attack." },
    { text: "Ask the nurse to call you back if the pain continues.",
      brief: "Delays assessment of possibly serious chest pain.",
      detailed: "Chest pain in a man with his risk factors needs prompt assessment, not a wait-and-see approach." },
    { text: "Arrange transfer to the Emergency Department without assessing him.",
      brief: "May be needed, but assess first.",
      detailed: "Transfer may become necessary, but assessing him first lets you decide how urgent it is and start treatment." },
    { text: "Ask about his anxiety symptoms to confirm it's a panic attack.",
      brief: "Starts from the assumption, rather than ruling out serious causes.",
      detailed: "Panic attacks are possible, but you need to rule out cardiac causes rather than look for evidence of anxiety." },
    { text: "Record that the pain is likely to be anxiety-related.",
      brief: "Documents an assumption without assessment.",
      detailed: "Recording a conclusion you haven't reached through assessment could mislead others." }
  ],
  explanation: {
    issue: "This tests whether you avoid letting a mental health diagnosis overshadow a possibly serious physical symptom.",
    keyDetails: "He has chest pain and cardiac risk factors. The nurse attributes it to anxiety. His observations haven't been checked.",
    reasoning: "{k1} assesses him, {k2} gets quick tests, and {k3} challenges the assumption. The distractors treat anxiety without assessment ({d1}), delay ({d2}), transfer without assessment ({d3}), look for confirmation of the assumption ({d4}), or record it ({d5}).",
    competing: "{d3} might be the right outcome, but a quick assessment and ECG first lets you judge urgency and start treatment."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients fairly, and Domain 1, assessing symptoms adequately." },
    { ref: "equality", note: "Disability, including mental illness, as a protected characteristic." }
  ],
  tags: ["diagnostic overshadowing", "chest pain", "psychiatry", "equality"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-331", pool, letters: "EDCAB", format: "ranking", difficulty: "moderate",
  title: "Three still waiting", setting: "Acute medical unit", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Handover", "Prioritisation", "Patient safety"],
  stem:
    "You are an F2 doctor on the acute medical unit. At the 17:00 handover, three of your patients are still waiting for senior review. One of them has a rising early warning score.\n\n" +
    "The night team is one doctor short, and the night registrar looks worried about the workload.",
  options: [
    { text: "Tell the registrar which patients need review, sickest first.",
      brief: "A clear, prioritised handover helps the night team focus.",
      detailed: "The registrar needs to know who is waiting, and that one patient is deteriorating. Prioritising for them makes the best use of a stretched team. It ranks first." },
    { text: "Document each patient's outstanding issue clearly in the notes.",
      brief: "Supports the night team when they see each patient.",
      detailed: "Clear notes help whoever reviews them, especially on a busy night. It ranks second because the verbal handover of the sickest patient matters more." },
    { text: "Offer to stay for a short while to help with the sickest patient.",
      brief: "A generous, occasional option, but not a solution.",
      detailed: "Staying briefly may help on a difficult night, and some doctors would choose to. It ranks third because it isn't sustainable and isn't required." },
    { text: "Leave the patients on the list, as the night team will see them.",
      brief: "Doesn't highlight the deteriorating patient.",
      detailed: "Without a clear handover, the deteriorating patient may not be prioritised. It ranks fourth." },
    { text: "Tell the patients they will now be seen in the morning.",
      brief: "May delay care that one patient needs tonight.",
      detailed: "This makes a decision that isn't yours and could mean a deteriorating patient waits. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you hand over outstanding work safely when the next team is under pressure.",
    keyDetails: "Three patients await review. One is deteriorating. The night team is short.",
    reasoning: "{1} gives a prioritised handover, {2} supports it with documentation, and {3} offers help. {4} lacks prioritisation, and {5} could delay urgent care.",
    competing: "Some would put staying to help higher. The key prefers a clear handover and documentation, which help all night, whereas staying is a short-term measure."
  },
  refs: [
    { ref: "news2", note: "Escalating patients with a rising early warning score." },
    { ref: "gmp", note: "Domain 3, handing over care safely." }
  ],
  tags: ["handover", "prioritisation", "acute medicine", "deterioration"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-332", pool, letters: "DEH", format: "multiple_choice", difficulty: "easy",
  title: "\"Did they get it all?\"", setting: "General surgery", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Breaking bad news", "Honesty", "Teamwork"],
  stem:
    "You are an F2 doctor in general surgery. Mr Shah, 63, had a laparotomy yesterday for suspected bowel cancer. The surgeons found that the cancer had spread widely and couldn't be removed.\n\n" +
    "The consultant plans to talk to him this afternoon. When you see him this morning, he asks you, \"Did they get it all?\"",
  options: [
    // keyed
    { text: "Ask what he remembers being told so far.",
      brief: "Helps you understand where he is starting from.",
      detailed: "He may have been told something in recovery, or nothing. Finding out what he knows helps you respond appropriately." },
    { text: "Tell him gently and honestly that it couldn't be removed.",
      brief: "He has asked directly, and is entitled to an honest answer.",
      detailed: "If he wants to know, an honest, gentle answer respects him. You can explain that the consultant will discuss what it means and the options this afternoon." },
    { text: "Make sure the consultant knows he has asked.",
      brief: "A fuller conversation should follow promptly.",
      detailed: "The consultant can explain the findings and what comes next. Letting them know he is asking helps them prioritise seeing him." },
    // distractors
    { text: "Tell him the consultant will explain everything this afternoon.",
      brief: "Avoids his direct question.",
      detailed: "The consultant should lead, but deflecting a direct question may leave him anxious for hours." },
    { text: "Reassure him that the operation went well.",
      brief: "Misleading.",
      detailed: "The operation may have been technically uneventful, but implying it was successful would be dishonest." },
    { text: "Tell his wife first so she can be with him when he hears.",
      brief: "He has capacity, and should hear about his own diagnosis first.",
      detailed: "He may want his wife there, which you can offer, but telling her first, without his agreement, breaches his confidentiality." },
    { text: "Give him a leaflet about bowel cancer to read.",
      brief: "Impersonal, and doesn't answer his question.",
      detailed: "Written information can help later, but it isn't a substitute for a conversation." },
    { text: "Wait until he has recovered from surgery before discussing it.",
      brief: "Delays news he has asked for.",
      detailed: "He has asked now. Delaying may increase his anxiety and damage his trust." }
  ],
  explanation: {
    issue: "This tests how you answer a direct question about bad news when a senior plans a fuller discussion later.",
    keyDetails: "He has asked directly. The cancer couldn't be removed. The consultant will see him this afternoon.",
    reasoning: "{k1} finds out what he knows, {k2} answers honestly, and {k3} makes sure the consultant follows up. The distractors deflect ({d1}, {d5}), mislead ({d2}), breach confidentiality ({d3}), or are impersonal ({d4}).",
    competing: "{d1} is tempting because the consultant should lead. But he has asked directly, and you can be honest while leaving the detail to the consultant."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, giving patients information honestly and sensitively." }
  ],
  tags: ["bad news", "cancer", "surgery", "honesty"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-333", pool, letters: "BAECD", format: "ranking", difficulty: "moderate",
  title: "The missed dose", setting: "Intensive care", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Patient safety", "Medication timing", "Raising concerns"],
  stem:
    "You are an F2 doctor in intensive care. At 08:00 you notice that Mr Gill, 70, who has septic shock, didn't receive his 06:00 dose of intravenous meropenem.\n\n" +
    "His nurse, Rob, says he was busy with another patient and will \"catch it up\" with the 10:00 drugs.",
  options: [
    { text: "Ask Rob to give the missed dose straight away.",
      brief: "Antibiotic timing matters in septic shock.",
      detailed: "In septic shock, delays to antibiotics can affect outcome. Giving the dose now, rather than waiting two more hours, is safer. It ranks first." },
    { text: "Ask the pharmacist how to adjust the timing of later doses.",
      brief: "Helps get the dosing schedule right.",
      detailed: "Giving a dose late may affect when the next one is due. The pharmacist can advise. It ranks second." },
    { text: "Report the missed dose through the incident reporting system.",
      brief: "Supports learning about workload and missed doses.",
      detailed: "Missed doses often reflect workload problems. Reporting helps the unit look at why it happened. It ranks third." },
    { text: "Report Rob to the nurse in charge without speaking to him.",
      brief: "Doesn't fix the dose, and bypasses a direct conversation.",
      detailed: "The nurse in charge may need to know, but going straight to them without talking to Rob, and without dealing with the dose, is unhelpful." },
    { text: "Accept Rob's plan to give it at 10:00.",
      brief: "Leaves a critically ill patient without antibiotics for longer.",
      detailed: "A further two-hour delay in septic shock could cause harm. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you act on a colleague's omission that affects a critically ill patient, while staying constructive.",
    keyDetails: "The patient is in septic shock. The dose is two hours late. The plan would make it four hours.",
    reasoning: "{1} gets the dose given, {2} fixes the schedule, and {3} supports learning. {4} bypasses Rob and the patient's need, and {5} accepts a harmful delay.",
    competing: "Some would report it before involving the pharmacist. The key prioritises getting his treatment right first."
  },
  refs: [
    { ref: "sepsis", note: "Timely antibiotics in sepsis." },
    { ref: "gmp", note: "Domain 3, acting when patient safety is at risk." }
  ],
  tags: ["sepsis", "medication error", "intensive care", "colleagues"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-334", pool, letters: "BCG", format: "multiple_choice", difficulty: "hard",
  title: "Comfort for their baby", setting: "Obstetrics & gynaecology", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Perinatal palliative care", "Compassion", "Non-directive support"],
  stem:
    "You are an F2 doctor on the antenatal ward. At 22 weeks, the fetal medicine team diagnosed a severe heart condition in Mr and Mrs Lowe's baby, which they explained is very likely to be life-limiting after birth. The couple have decided to continue the pregnancy.\n\n" +
    "Today, during a routine check, Mrs Lowe asks you, \"What will happen to our baby when she's born? Will she be in pain?\"",
  options: [
    // keyed
    { text: "Ask them what they have been told and what matters most to them.",
      brief: "Their understanding and hopes shape any plan.",
      detailed: "They may already have information, or have specific worries. Knowing what matters to them, such as time together, helps the team plan care that reflects their wishes." },
    { text: "Arrange for them to meet the neonatal palliative care team.",
      brief: "Specialist teams can plan comfort care with them.",
      detailed: "Perinatal palliative care teams can explain what may happen and plan for their baby's comfort, including pain relief. This is the right team to answer their questions in detail." },
    { text: "Offer support from the bereavement midwife.",
      brief: "Specialist emotional support for this situation.",
      detailed: "Bereavement midwives support families through life-limiting diagnoses, including planning and memory-making. Offering this shows care for them as parents." },
    // distractors
    { text: "Suggest they reconsider their decision to continue the pregnancy.",
      brief: "Undermines a decision they have made.",
      detailed: "They have made their decision with the fetal medicine team. Revisiting it now isn't supportive or appropriate." },
    { text: "Reassure them that their baby may well be fine after birth.",
      brief: "False hope.",
      detailed: "The prognosis has been explained as very likely life-limiting. False reassurance could make things harder." },
    { text: "Tell them there is nothing that can be done for their baby.",
      brief: "Untrue: comfort and support can be planned.",
      detailed: "Even when cure isn't possible, much can be done to keep their baby comfortable and support the family." },
    { text: "Say the fetal medicine team will answer their questions at the next appointment.",
      brief: "Defers their concern without any support now.",
      detailed: "The specialist team should give detail, but deferring entirely leaves them without any response today." },
    { text: "Explain in detail what usually happens to babies with this condition.",
      brief: "Beyond your knowledge, and may not apply to their baby.",
      detailed: "Specialists should explain this. General information from you may be inaccurate or upsetting." }
  ],
  explanation: {
    issue: "This tests how you support parents facing a life-limiting diagnosis for their baby, compassionately and within your role.",
    keyDetails: "The diagnosis is very likely life-limiting. They have decided to continue the pregnancy. They are asking about comfort and pain.",
    reasoning: "{k1} learns their understanding and wishes, {k2} brings in the teams who can plan care, and {k3} offers emotional support. The distractors are directive ({d1}), falsely reassuring ({d2}), inaccurate ({d3}), deferring ({d4}), or beyond your role ({d5}).",
    competing: "{d4} would be right if specialist help weren't available, but the planning teams can be involved now."
  },
  refs: [
    { ref: "eol", note: "Care towards the end of life, including for babies, and supporting families." }
  ],
  tags: ["perinatal palliative care", "obstetrics", "bereavement", "compassion"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-335", pool, letters: "CDEAB", format: "ranking", difficulty: "moderate",
  title: "An unexpected death", setting: "Out-of-hours / community", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development", "Patients, partnership and communication"],
  competencies: ["Verification of death", "Coroner referral", "Seeking advice"],
  stem:
    "You are an F2 doctor working for the GP out-of-hours service. You are called to verify the death of Mr Sharpe, 58, whose wife found him dead in bed this morning. He hadn't been ill, and his GP hasn't seen him for over a year.\n\n" +
    "You have verified deaths before, but never one that seemed unexpected. His wife asks when the funeral director can take him.",
  options: [
    { text: "Verify the death and call the police, as it seems unexpected.",
      brief: "Unexpected deaths are reported to the coroner, usually through the police.",
      detailed: "A sudden death in a previously well man must be reported to the coroner, and the police usually attend on the coroner's behalf. Verifying the death and calling the police follows the correct process. It ranks first." },
    { text: "Phone the senior GP on duty for advice.",
      brief: "Senior advice is helpful for an unfamiliar situation.",
      detailed: "You haven't handled an unexpected death before, and a senior can confirm the process. It ranks second because the steps are clear enough to start, and you can phone while waiting." },
    { text: "Explain to his wife what will happen next.",
      brief: "She needs compassion and an explanation.",
      detailed: "She may be shocked by police involvement. Explaining gently that this is routine after a sudden death helps her. It ranks third because the correct process must be started first." },
    { text: "Tell his wife she can call the funeral director.",
      brief: "Premature: the coroner needs to be involved first.",
      detailed: "His body shouldn't be moved until the police and coroner have decided what happens. This could cause problems for any investigation." },
    { text: "Write that he died of a heart attack so the funeral can go ahead.",
      brief: "Certifying a cause you don't know, in a death that must be reported.",
      detailed: "You didn't attend him in life, the cause is unknown, and the death must be reported to the coroner. This is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you follow the correct process for an unexpected death, seeking help where you need it, while supporting the bereaved.",
    keyDetails: "The death was sudden and unexpected. His GP hadn't seen him recently. His wife wants to move forward.",
    reasoning: "{1} follows the process, {2} seeks advice, and {3} supports his wife. {4} is premature, and {5} certifies a cause you don't know.",
    competing: "Some would phone the senior first because this is new to you. The key starts the process, because the steps are clear and the call can happen while you wait for the police."
  },
  refs: [
    { ref: "deathcert", note: "Deaths that must be notified to the coroner." }
  ],
  tags: ["death", "coroner", "out-of-hours", "competence"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-336", pool, letters: "EGH", format: "multiple_choice", difficulty: "moderate",
  title: "The third call", setting: "Out-of-hours / community", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communicating with relatives", "Advance care planning", "Managing distress"],
  stem:
    "You are an F2 doctor working for the GP out-of-hours service. Ms Morris calls for the third time tonight about her mother, Mrs Morris, 91, who lives in a care home and has a chest infection.\n\n" +
    "Mrs Morris's GP agreed a plan with her last month, recorded on a ReSPECT form, to be treated in the care home rather than in hospital. Ms Morris is upset and says her mother \"should be in hospital\". The care home reports no change in her condition.",
  options: [
    // keyed
    { text: "Listen to Ms Morris's concerns.",
      brief: "She is distressed, and understanding why helps.",
      detailed: "She may be frightened her mother is dying, or feel unheard. Listening is the first step to helping her." },
    { text: "Explain the plan her mother made, and why it was agreed.",
      brief: "She may not know her mother's wishes or the reasons.",
      detailed: "Explaining that her mother agreed to be cared for in the home, and what treatment she is receiving, may reassure her. Her mother's wishes should guide care." },
    { text: "Suggest she speaks to her mother's GP tomorrow.",
      brief: "The GP made the plan and can discuss it fully.",
      detailed: "The GP knows her mother and can review the plan with her. This gives her a route for her concerns." },
    // distractors
    { text: "Arrange admission to hospital to reassure her.",
      brief: "Overrides the patient's own agreed plan.",
      detailed: "Admitting her against her recorded wishes, when her condition hasn't changed, would not respect her choices." },
    { text: "Tell her the plan can't be changed.",
      brief: "Dismissive; plans can be reviewed.",
      detailed: "Plans can be reviewed, and her mother may be able to discuss it. This shuts down the conversation." },
    { text: "Ask the care home to stop passing her calls to the service.",
      brief: "Avoids her rather than helping.",
      detailed: "This dismisses a worried relative and may increase her distress." },
    { text: "Tell her you can't discuss her mother's care.",
      brief: "Unhelpful when you could explain the plan.",
      detailed: "You need to respect confidentiality, but explaining the agreed plan to a close relative is often appropriate, particularly if her mother would want this." },
    { text: "Visit Mrs Morris tonight so her daughter knows she's been seen.",
      brief: "A visit isn't clinically needed, as she hasn't changed.",
      detailed: "If her condition changed, a visit would be appropriate. Visiting only to reassure her daughter uses limited out-of-hours resources." }
  ],
  explanation: {
    issue: "This tests how you support a distressed relative while respecting a patient's own care plan.",
    keyDetails: "Mrs Morris agreed a plan to be treated at home. Her condition is unchanged. Her daughter is distressed.",
    reasoning: "{k1} listens, {k2} explains her mother's wishes, and {k3} gives her a route to discuss them. The distractors override the plan ({d1}), dismiss her ({d2}, {d3}, {d4}), or use resources unnecessarily ({d5}).",
    competing: "{d5} might seem kind, but it isn't clinically needed. A change in Mrs Morris's condition would justify a visit."
  },
  refs: [
    { ref: "respect", note: "Recording and following patients' recommendations for emergency care." },
    { ref: "confidentiality", note: "Sharing information with those close to a patient." }
  ],
  tags: ["relatives", "ReSPECT", "out-of-hours", "care homes"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-337", pool, letters: "BECDA", format: "ranking", difficulty: "easy",
  title: "Keeping it quiet", setting: "Orthopaedics", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Self-care", "Seeking support", "Occupational health"],
  stem:
    "You are an F2 doctor in orthopaedics. Two months ago you were diagnosed with Crohn's disease. You haven't told anyone at work.\n\n" +
    "You are struggling with fatigue and frequent toilet breaks, and you are falling behind with your work. Your consultant has commented that you seem \"distracted\".",
  options: [
    { text: "Ask your supervisor for an occupational health referral.",
      brief: "Gets you adjustments and support at work.",
      detailed: "Occupational health can recommend adjustments, such as access to toilets or changes to your rota, and your supervisor can help put them in place. You decide how much to share. It ranks first." },
    { text: "Discuss managing work with your GP or specialist.",
      brief: "Optimising your treatment may help.",
      detailed: "Your treatment may need adjusting, and they can advise on managing symptoms at work. It ranks second because it doesn't, by itself, give you support at work." },
    { text: "Confide in a colleague you trust.",
      brief: "Personal support, but not a solution.",
      detailed: "Talking to someone may help you feel less alone. It ranks third because it doesn't address the effect on your work." },
    { text: "Work extra hours to catch up.",
      brief: "Likely to worsen your fatigue.",
      detailed: "This may make your symptoms and your work worse. It ranks fourth." },
    { text: "Take medicines from the ward stock to manage your symptoms.",
      brief: "Self-prescribing from ward stock is inappropriate.",
      detailed: "Taking medicines from ward stock, and treating yourself, is unsafe and a probity issue. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you seek support for a health condition affecting your work, rather than hiding it.",
    keyDetails: "You have a chronic illness. It is affecting your work. No one knows. Support is available.",
    reasoning: "{1} gets you workplace support, {2} looks at treatment, and {3} gives personal support. {4} worsens fatigue, and {5} is unsafe.",
    competing: "Some would see their GP first. The key puts occupational health first because your work is already affected."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, looking after your own health and getting appropriate support." },
    { ref: "practitionerhealth", note: "Confidential support for doctors' health." }
  ],
  tags: ["wellbeing", "chronic illness", "occupational health", "orthopaedics"]
}
];
