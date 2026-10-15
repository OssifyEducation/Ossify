// Mock 3, part 1 (sjt-301 to sjt-312). Pool mock-3: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-3";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-301", pool, letters: "BEACD", format: "ranking", difficulty: "moderate",
  title: "Not quite clear", setting: "Oncology & palliative care", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Candour", "Checking results", "Owning mistakes"],
  stem:
    "You are an F2 doctor in an oncology clinic. Yesterday you phoned Mr Grey, 61, who had bowel cancer treated last year, and told him his follow-up CT scan was \"clear\". You had read only the conclusion, which said there was no evidence of recurrence.\n\n" +
    "Today you read the full report. It also describes an 8 mm indeterminate liver lesion and recommends an MRI. Your consultant has already seen the report and requested the MRI.",
  options: [
    { text: "Phone Mr Grey today, apologise, and explain the full report.",
      brief: "He has been given incomplete information and should hear the correction from you promptly.",
      detailed: "Mr Grey believes his scan was entirely clear, and he will soon receive an MRI appointment he doesn't expect. Phoning him today, apologising and explaining what the lesion might mean and what happens next is honest and stops him finding out by letter. The plan is already in place, so you can tell him exactly what will happen. It ranks first." },
    { text: "Tell your consultant what you told Mr Grey yesterday.",
      brief: "Your consultant needs to know what the patient has been told.",
      detailed: "The consultant has seen the report, but doesn't know Mr Grey was told his scan was clear. That matters for how the team talks to him, and your consultant can support you. It ranks second because correcting what Mr Grey believes comes first." },
    { text: "Reflect on the error and change how you check reports before giving results.",
      brief: "Learning from it helps protect future patients.",
      detailed: "Reading only a report's conclusion is a recognised pitfall. Changing your practice, and perhaps recording it as a reflection, protects future patients. It ranks third because it does nothing for Mr Grey today." },
    { text: "Wait for the MRI result before telling him, so he isn't worried unnecessarily.",
      brief: "Delays a correction he is entitled to, and he'll receive an unexpected appointment.",
      detailed: "The lesion may well be benign, but he has been told something incomplete and will be sent for an MRI without explanation. Waiting puts your comfort ahead of his right to accurate information." },
    { text: "Leave it, as the lesion is probably benign and the MRI is booked.",
      brief: "Leaves him misinformed about his own health.",
      detailed: "Whatever the lesion turns out to be, he has been told his scan was clear when it wasn't. Leaving him with that belief is dishonest by omission. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you correct incomplete information you gave a patient, promptly and openly, even when the finding may turn out to be harmless.",
    keyDetails: "You told him the scan was clear. The full report shows an indeterminate lesion. An MRI has been requested. He doesn't know.",
    reasoning: "{1} corrects what he believes, {2} tells the consultant what was said, and {3} prevents a repeat. {4} delays the correction, and {5} never makes it.",
    competing: "Some would speak to the consultant before phoning. That's reasonable, but the consultant has already made the plan, so you have everything you need to tell Mr Grey now."
  },
  refs: [
    { ref: "candour", note: "Telling patients promptly when something has gone wrong, including incomplete information." },
    { ref: "gmp", note: "Domain 4, being honest with patients." }
  ],
  tags: ["candour", "results", "oncology", "errors"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-302", pool, letters: "DGH", format: "multiple_choice", difficulty: "easy",
  title: "Discharges and a daughter", setting: "Elderly care ward", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Patients, partnership and communication", "Knowledge, skills and development"],
  competencies: ["Prioritisation", "Time management", "Communication with relatives"],
  stem:
    "You are an F2 doctor on an elderly care ward. Four patients are going home this morning, and their hospital transport arrives at 11:00. Their discharge letters and medicines still need completing. It is 09:30.\n\n" +
    "A nurse tells you that Mrs Harris's daughter is waiting at the nurses' station. She wants to talk about the DNACPR decision the consultant made for her mother yesterday.",
  options: [
    // keyed
    { text: "Speak briefly to the daughter and agree a time to meet today.",
      brief: "She knows she'll be seen, and you can give her proper time.",
      detailed: "A brief introduction and a definite time shows her she is taken seriously. A DNACPR conversation needs time and privacy, which you can give her properly once the discharges are done." },
    { text: "Finish the discharge paperwork in order of transport times.",
      brief: "Patients will miss their transport if the paperwork isn't ready.",
      detailed: "If the letters and medicines aren't ready by 11:00, patients may lose their transport and stay in hospital longer. Working through them in order is an efficient use of the next 90 minutes." },
    { text: "Ask the nurse in charge to book a quiet room for later.",
      brief: "A private space matters for a sensitive discussion.",
      detailed: "A conversation about resuscitation shouldn't happen at the nurses' station. Booking a room now makes sure one is available when you are ready." },
    // distractors
    { text: "Talk to the daughter now and finish the discharges afterwards.",
      brief: "Risks patients missing their transport.",
      detailed: "Her concerns matter, but a full conversation now could take 30 minutes or more, and four patients may miss their transport home." },
    { text: "Explain the DNACPR decision quickly at the nurses' station.",
      brief: "Too rushed and too public for a sensitive conversation.",
      detailed: "A brief explanation in a busy area isn't the right setting, and she is likely to have questions that need time." },
    { text: "Ask the F1 to talk to the daughter about the decision.",
      brief: "Passes a sensitive conversation to someone less experienced.",
      detailed: "The F1 may not know the reasoning or feel confident discussing resuscitation. It isn't a fair delegation." },
    { text: "Ask the nurse to tell the daughter you're too busy today.",
      brief: "Dismissive, and delays a conversation she needs.",
      detailed: "She has come in specifically and is entitled to a discussion. Turning her away without a time to meet is dismissive." },
    { text: "Ask the nurses to complete the discharge letters for you.",
      brief: "Discharge letters and prescriptions are a medical responsibility.",
      detailed: "Nurses may help with parts of the discharge process, but the letters and medicines need a doctor to complete them." }
  ],
  explanation: {
    issue: "This tests how you balance time-critical tasks with a sensitive conversation, making sure both are done properly.",
    keyDetails: "Transport is at 11:00. The DNACPR discussion is important but not time-critical within the next 90 minutes. A private space is needed.",
    reasoning: "{k1} acknowledges the daughter and sets a time, {k2} meets the transport deadline, and {k3} prepares a suitable setting. The distractors risk the discharges ({d1}), rush the conversation ({d2}), delegate it unfairly ({d3}, {d5}), or dismiss her ({d4}).",
    competing: "{d1} feels kind, but a full conversation can wait an hour and a half, whereas the transport can't."
  },
  refs: [
    { ref: "eol", note: "Discussing CPR decisions with those close to the patient." },
    { ref: "gmp", note: "Domain 1, managing your workload and prioritising." }
  ],
  tags: ["prioritisation", "discharge", "DNACPR", "relatives"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-303", pool, letters: "ADBCE", format: "ranking", difficulty: "moderate",
  title: "No heartbeat", setting: "Obstetrics & gynaecology", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Breaking bad news", "Compassion", "Privacy"],
  stem:
    "You are an F2 doctor in obstetrics and gynaecology, covering the antenatal scan unit. Ms Kowalski, 31, and her partner have come for her 12-week scan, bringing their two-year-old son. The sonographer, with a second sonographer confirming, has found no fetal heartbeat; the pregnancy stopped developing at about nine weeks.\n\n" +
    "The couple can see from the sonographer's face that something is wrong. Their son is restless and starting to cry. You have been asked to talk to them.",
  options: [
    { text: "Offer a private room, with a nurse to look after their son.",
      brief: "A private, uninterrupted setting lets them hear and absorb the news.",
      detailed: "Bad news is easier to take in without distractions. Offering practical help with their son, and a private room, lets both parents focus. It ranks first because it sets up everything that follows." },
    { text: "Explain clearly and gently that the baby has died.",
      brief: "Clear, compassionate language avoids confusion.",
      detailed: "Euphemisms can leave people unsure what has happened. Gentle but clear words, followed by time and silence, help them understand. It ranks second only because it works best in the right setting." },
    { text: "Give them written information about the options for managing a miscarriage.",
      brief: "Useful, but secondary to the conversation itself.",
      detailed: "They will need information about expectant, medical and surgical management, and written material helps. It ranks third because it should follow, not replace, a compassionate explanation." },
    { text: "Ask them to come back tomorrow without their son to discuss the scan.",
      brief: "Leaves them knowing something is wrong, without an explanation.",
      detailed: "They have already sensed that something is wrong. Sending them home without an explanation would leave them anxious overnight." },
    { text: "Explain the findings in the waiting area so their son stays settled.",
      brief: "Too public for devastating news.",
      detailed: "Delivering this news in a public waiting area denies them privacy at a very painful moment. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you prepare for and deliver devastating news with compassion, including attending to practical barriers.",
    keyDetails: "The pregnancy has ended. They suspect something is wrong. Their toddler is with them and upset.",
    reasoning: "{1} creates the right setting, {2} gives the news clearly, and {3} provides information to follow. {4} leaves them in limbo, and {5} denies them privacy.",
    competing: "Some would put the explanation first, because they already suspect bad news. The key puts the setting first because a few minutes to arrange it lets both parents take in what you say."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, communicating sensitively and giving patients time." }
  ],
  tags: ["miscarriage", "bad news", "obstetrics", "privacy"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-304", pool, letters: "CEF", format: "multiple_choice", difficulty: "hard",
  title: "A filed result", setting: "General practice", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Patient safety", "Raising concerns", "Results handling"],
  stem:
    "You are an F2 doctor in a GP practice. While seeing Mr Ahmed, 68, about a cough, you notice a PSA result of 14 from two months ago. One of the partners, Dr Reid, filed it as \"no action\". There is no referral and no record that Mr Ahmed was told.\n\n" +
    "Mr Ahmed doesn't mention the test. Dr Reid is on leave until next week.",
  options: [
    // keyed
    { text: "Discuss the result with your GP supervisor today.",
      brief: "A senior needs to review this promptly.",
      detailed: "A raised PSA that hasn't been acted on may need an urgent referral. Your supervisor can review it with you, decide what to tell Mr Ahmed and act on it today, rather than waiting for Dr Reid." },
    { text: "Make sure Mr Ahmed is told and offered further assessment.",
      brief: "He is entitled to know, and may need investigation.",
      detailed: "He hasn't been told about a result that may need further investigation. With your supervisor's advice, making sure he is informed and offered assessment, possibly while he is with you, puts his care right." },
    { text: "Record it as a significant event so results handling can be reviewed.",
      brief: "An abnormal result filed without action is a system risk.",
      detailed: "A result like this being filed without action suggests a risk in how results are handled. A significant event review looks at the process, not just the individual, and helps protect other patients." },
    // distractors
    { text: "Wait until Dr Reid is back next week to ask why she filed it.",
      brief: "Dr Reid should hear about it, but a week's delay adds to the risk.",
      detailed: "There may be an explanation, and Dr Reid should hear about it. But Mr Ahmed's possible cancer shouldn't wait another week for her return." },
    { text: "Refer Mr Ahmed to urology yourself this afternoon.",
      brief: "Helps the patient, but bypasses the practice's oversight.",
      detailed: "A referral may be right, but making it without senior advice, and without the practice learning about the missed result, means Mr Ahmed may not be told properly and the system problem isn't addressed." },
    { text: "Assume Dr Reid had a clinical reason and carry on with the consultation.",
      brief: "Ignores a possible serious omission.",
      detailed: "There may have been a reason, but nothing is documented. Assuming so, without checking, risks a delayed cancer diagnosis." },
    { text: "Tell Mr Ahmed that Dr Reid missed his result.",
      brief: "He needs to know about the result, not about who is to blame.",
      detailed: "Being honest with him is right, but blaming a named colleague before anyone knows what happened isn't fair or helpful." },
    { text: "Report Dr Reid to the General Medical Council.",
      brief: "Disproportionate for a single filing error.",
      detailed: "One missed result is a matter for the practice's processes, not the regulator, unless there is evidence of a wider problem." }
  ],
  explanation: {
    issue: "This tests whether you act on a colleague's possible error to protect a patient, using proportionate routes, even when the colleague is senior and away.",
    keyDetails: "The raised PSA wasn't acted on. Mr Ahmed hasn't been told. Dr Reid is away for a week. Mr Ahmed is in front of you now.",
    reasoning: "{k1} involves a senior promptly, {k2} puts Mr Ahmed's care right, and {k3} addresses the system. The distractors delay ({d1}, {d3}), act without oversight ({d2}), blame ({d4}), or escalate disproportionately ({d5}).",
    competing: "{d1} is fair to Dr Reid, but waiting a week puts the patient at risk. She can be told when she is back, as part of the significant event review."
  },
  refs: [
    { ref: "concerns", note: "Acting promptly when a patient may be at risk because of a colleague's omission." },
    { ref: "gmp", note: "Domain 3, contributing to systems that keep patients safe." }
  ],
  tags: ["results", "colleague error", "general practice", "cancer"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-305", pool, letters: "DCBAE", format: "ranking", difficulty: "moderate",
  title: "No plan on the system", setting: "Out-of-hours / community", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Safety and quality", "Patients, partnership and communication"],
  competencies: ["Continuity of care", "Palliative care", "Patient safety"],
  stem:
    "You are an F2 doctor working an evening shift for the GP out-of-hours service. A nurse at a care home phones about Mr Fisher, 88, who is dying and has become agitated and distressed.\n\n" +
    "She says his GP made a palliative care plan last week and prescribed anticipatory medicines, which are in the home. However, the out-of-hours system has no record of the plan or the prescription.",
  options: [
    { text: "Assess him tonight, using the plan and medicines at the home.",
      brief: "He needs his symptoms treated now, and the home has the information you need.",
      detailed: "He is dying and distressed, and the home holds the plan and the prescription. Assessing him tonight, by visiting or by clinical assessment over the phone as appropriate, lets you relieve his symptoms. It ranks first." },
    { text: "Ask his GP practice tomorrow to share the plan with the out-of-hours service.",
      brief: "Prevents the same gap for future calls.",
      detailed: "The plan should be shared so that every out-of-hours clinician can see it. It ranks second because it helps future calls but not tonight's." },
    { text: "Report the missing plan through the out-of-hours incident system.",
      brief: "Helps find out why the plan wasn't shared.",
      detailed: "This may reflect a wider problem in how plans are shared. Reporting it supports learning but is less urgent than his care, so it ranks third." },
    { text: "Advise the home to call 999 if he becomes more distressed.",
      brief: "Risks an unwanted hospital admission at the end of life.",
      detailed: "His plan is likely to aim to keep him comfortable at home. Calling an ambulance could lead to an unnecessary, distressing admission when his symptoms could be managed where he is." },
    { text: "Tell the home you can't act without the plan on your system.",
      brief: "Leaves a dying patient in distress.",
      detailed: "The information is available at the home. Refusing to help because of a gap in the record leaves Mr Fisher suffering. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you put a dying patient's comfort first when a handover gap means information is missing, and then help close the gap.",
    keyDetails: "He is dying and distressed. The plan and medicines are at the home. The out-of-hours system has no record.",
    reasoning: "{1} treats his symptoms tonight, {2} closes the gap for future calls, and {3} supports learning. {4} risks an unwanted admission, and {5} leaves him in distress.",
    competing: "{2} and {3} are close. The key puts sharing the plan first because it directly protects Mr Fisher if the home calls again."
  },
  refs: [
    { ref: "eol", note: "Planning ahead and sharing information so that patients' wishes are followed." },
    { ref: "gmp", note: "Domain 3, sharing information with colleagues to keep patients safe." }
  ],
  tags: ["palliative care", "out-of-hours", "handover", "care homes"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-306", pool, letters: "ADE", format: "multiple_choice", difficulty: "moderate",
  title: "Home to die", setting: "Oncology & palliative care", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["End-of-life planning", "Supporting carers", "Shared decision-making"],
  stem:
    "You are an F2 doctor on an oncology ward. Mr Turner, 74, has advanced lung cancer and probably has a few weeks to live. He tells you he wants to die at home.\n\n" +
    "Later his wife, 72, takes you aside in tears. She says she loves him but can't cope with caring for him at home and is frightened of him dying there.",
  options: [
    // keyed
    { text: "Talk with Mrs Turner about what frightens her about caring for him at home.",
      brief: "Her fears may be specific, and some may be answerable.",
      detailed: "She may be worried about night-time care, lifting, symptoms or being alone when he dies. Understanding her specific fears helps you see what support might make home possible, or whether it isn't." },
    { text: "Ask the palliative care team what support could be offered at home.",
      brief: "Specialist teams know what support is available.",
      detailed: "District nurses, carers, hospice at home services and equipment can make a big difference. The palliative care team can assess what is realistic for this family." },
    { text: "Arrange a meeting with them both to discuss his wishes and her concerns.",
      brief: "A shared conversation can lead to a plan they can both accept.",
      detailed: "Both of their views matter. A facilitated conversation, with her agreement, may help them find a plan, such as home with more support or a hospice." },
    // distractors
    { text: "Tell Mrs Turner that it is his right to die at home.",
      brief: "Ignores her role and her ability to cope.",
      detailed: "His wishes are important, but caring at home depends heavily on her. Dismissing her concerns is unkind and may lead to a crisis." },
    { text: "Tell Mr Turner that going home isn't possible because his wife can't cope.",
      brief: "Shares her private concerns and closes off options too early.",
      detailed: "She spoke to you privately, and with support, home may still be possible. Telling him this way could damage their relationship." },
    { text: "Arrange a nursing home placement to avoid the conflict.",
      brief: "Neither of them has asked for this.",
      detailed: "A nursing home may be an option, but arranging it without discussion overrides both their wishes." },
    { text: "Arrange discharge home as he wishes, and give her the district nurses' number.",
      brief: "Doesn't address her fears or arrange the support needed.",
      detailed: "This respects his wish in principle but leaves his main carer frightened and unsupported, which may lead to a crisis admission." },
    { text: "Ask their son to persuade his mother to agree.",
      brief: "Puts pressure on her rather than supporting her.",
      detailed: "Family involvement can help, but recruiting a relative to persuade her doesn't address her fears." }
  ],
  explanation: {
    issue: "This tests how you balance a dying patient's wishes with the needs of the carer on whom those wishes depend.",
    keyDetails: "He wants to die at home. His wife is frightened and doesn't feel able to cope. Support may make a difference. Time is short.",
    reasoning: "{k1} understands her fears, {k2} explores what support is possible, and {k3} brings them together to plan. The distractors dismiss her ({d1}), breach her confidence ({d2}), override both ({d3}), discharge without support ({d4}), or pressure her ({d5}).",
    competing: "{d4} looks like respecting his wishes, but without support it may lead to a crisis admission, which neither of them wants."
  },
  refs: [
    { ref: "eol", note: "Patients' wishes about place of death and the needs of carers." }
  ],
  tags: ["end of life", "carers", "place of death", "oncology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-307", pool, letters: "CBAED", format: "ranking", difficulty: "easy",
  title: "\"I can't cope\"", setting: "Emergency department", attribute: P,
  topic: "An impaired or unwell colleague",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Supporting colleagues", "Patient safety", "Escalation"],
  stem:
    "You are an F2 doctor in the Emergency Department. Your colleague Dr Sharma, another F2, has seemed tearful for several weeks. Today a pharmacist picked up that she prescribed ten times the intended dose of a drug, before any was given.\n\n" +
    "When you check on her in the staff room, she tells you she isn't sleeping and \"can't cope any more\". She has six hours of her shift left.",
  options: [
    { text: "Ask her gently about her safety, and encourage her to get support today.",
      brief: "'Can't cope any more' needs a direct, kind question about her safety.",
      detailed: "You are with her now, away from patients. Asking directly whether she has had thoughts of harming herself, and encouraging her to see her GP or occupational health, or use confidential support for doctors, responds to what she has told you. It ranks first because her own safety may be at risk, and the conversation is already happening." },
    { text: "Tell the consultant in charge that she's struggling and may not be safe to work today.",
      brief: "Patients may be at risk, and the consultant can arrange cover.",
      detailed: "A serious prescribing error and her own words suggest she may not be safe to work today. The consultant can support her and arrange cover. It ranks second because it is most appropriate after speaking to her, and she can be told you are doing it." },
    { text: "Make sure the prescribing error is corrected and reported.",
      brief: "Important for safety and learning, but she and the shift come first.",
      detailed: "The error was caught, but it should be corrected and reported to support learning. It ranks third because it is less urgent than her wellbeing and patients' safety today." },
    { text: "Offer to check her prescriptions for the rest of the shift.",
      brief: "Well meant, but it hides the problem from those who need to know.",
      detailed: "Checking her work reduces some risk, but it keeps her working when she may be unwell and keeps the consultant unaware. It ranks fourth." },
    { text: "Leave it, as her health is a private matter.",
      brief: "Ignores a colleague in distress and a risk to patients.",
      detailed: "Her health is private, but she has told you she can't cope and has made a serious error. Doing nothing leaves her unsupported and patients at risk. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you support a colleague in distress while recognising when patient safety means a senior must be told.",
    keyDetails: "She has been struggling for weeks. She has made a serious error. She says she can't cope. She has six hours of her shift left.",
    reasoning: "{1} supports her, {2} protects patients by involving the consultant, and {3} deals with the error. {4} hides the problem, and {5} ignores it.",
    competing: "Some would tell the consultant first because patients may be at risk. She is in the staff room with you, away from patients, and may be at risk herself, so the key puts asking about her safety first. The consultant should be told straight afterwards, and she can know that you are doing so."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues and acting when a colleague's health may put patients at risk." },
    { ref: "practitionerhealth", note: "Confidential support for doctors with mental health concerns." }
  ],
  tags: ["colleague health", "burnout", "emergency department", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-308", pool, letters: "BCF", format: "multiple_choice", difficulty: "moderate",
  title: "Falling saturations", setting: "Intensive care", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Safety and quality", "Knowledge, skills and development"],
  competencies: ["Recognising limits", "Acute care", "Escalation"],
  stem:
    "You are an F2 doctor in intensive care. Mr Lowe, 57, is ventilated for pneumonia. His oxygen saturation has fallen from 94% to 85% over ten minutes. The ICU registrar is in theatre with a patient, and the consultant is at home, 20 minutes away.\n\n" +
    "The nurse says, \"Can you just turn up his PEEP? That's what the registrar usually does.\" You have been taught to increase the oxygen concentration, but not to change other ventilator settings.",
  options: [
    // keyed
    { text: "Assess him at the bedside now, including his tube and circuit.",
      brief: "A sudden fall may have a simple, fixable cause.",
      detailed: "A displaced or blocked tube, a disconnection or a pneumothorax can cause sudden desaturation. A focused assessment may find a cause you can deal with, and it gives the senior the information they need." },
    { text: "Increase his inspired oxygen to 100% while help is sought.",
      brief: "A safe, immediate step within your competence.",
      detailed: "Increasing the oxygen is a simple, recognised first step that buys time without changing other ventilator settings you aren't trained to adjust." },
    { text: "Phone the ICU consultant now for advice.",
      brief: "A senior must guide decisions beyond your training.",
      detailed: "The registrar is unavailable, so the consultant should be called. They can advise by phone and decide whether to come in or ask for help from theatre." },
    // distractors
    { text: "Increase his PEEP as the nurse suggests.",
      brief: "Changing settings you aren't trained in could cause harm.",
      detailed: "Increasing PEEP can affect blood pressure and may be the wrong response if the cause is a pneumothorax. It needs someone with the right training." },
    { text: "Ask the nurse to adjust the ventilator herself.",
      brief: "Passes the decision to someone else without senior input.",
      detailed: "Experienced ICU nurses may adjust some settings under protocols, but asking her to do so without senior advice avoids, rather than solves, the problem." },
    { text: "Wait for the registrar to come out of theatre.",
      brief: "The patient may deteriorate further while you wait.",
      detailed: "He is getting worse now. Waiting for the registrar, without escalating, risks harm." },
    { text: "Request a chest X-ray and review him when it's done.",
      brief: "May help, but it delays action on a deteriorating patient.",
      detailed: "An X-ray may well be needed, but requesting one and waiting delays the immediate assessment and escalation he needs." },
    { text: "Give him a dose of sedation in case he is fighting the ventilator.",
      brief: "Treats a guessed cause before assessing him.",
      detailed: "Patient–ventilator dyssynchrony is possible, but sedating him without assessment could mask the real cause and lower his blood pressure." }
  ],
  explanation: {
    issue: "This tests whether you stay within your competence in an emergency, taking safe immediate steps while getting senior help.",
    keyDetails: "He is deteriorating. You aren't trained to change ventilator settings. The registrar is unavailable, but the consultant can be phoned.",
    reasoning: "{k1} looks for a fixable cause, {k2} is a safe immediate step, and {k3} gets senior advice. The distractors act beyond your competence ({d1}, {d5}), pass the decision on ({d2}), wait ({d3}), or delay action ({d4}).",
    competing: "{d1} is tempting because the nurse is experienced and it may be the right setting change. But you aren't trained to judge that, and it could be harmful in some causes of desaturation."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, working within the limits of your competence and seeking help." }
  ],
  tags: ["competence", "ventilation", "intensive care", "escalation"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-309", pool, letters: "CBDA", format: "ranking", difficulty: "hard",
  title: "The returning daughter", setting: "Acute medical unit", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Best interests", "Relatives", "Mental Capacity Act"],
  stem:
    "You are an F2 doctor on the acute medical unit. Mr Ellis, 80, has had a major stroke. He lacks capacity to make decisions about his treatment and has no lasting power of attorney. His partner of ten years visits daily.\n\n" +
    "His daughter, who hasn't seen him for 15 years, arrives today. She tells you that, as his next of kin, she will decide whether he has a feeding tube, and that his partner \"has no say\".",
  options: [
    { text: "Explain that the team decides in his best interests, after hearing from her and others.",
      brief: "Accurate, and respectful of her place in his life.",
      detailed: "Without a lasting power of attorney, no relative can make treatment decisions for him. The team decides in his best interests after considering the views of people close to him, which includes both his daughter and his partner. Explaining this honestly respects her while correcting a misunderstanding. It ranks first." },
    { text: "Arrange a meeting with the consultant, his daughter and his partner.",
      brief: "Brings together the people whose views matter.",
      detailed: "A meeting led by the consultant allows everyone to share what they know about his wishes and values. It ranks second because the daughter needs an accurate explanation from you first." },
    { text: "Tell the daughter that you can only discuss his care with his partner, who visits daily.",
      brief: "Excludes someone whose views should be considered.",
      detailed: "His partner's views matter, but so do his daughter's, even after a long separation. Excluding her is wrong, though it is less harmful than handing her the decision." },
    { text: "Agree that she will make the decision about the feeding tube, as next of kin.",
      brief: "Wrong in law and could lead to a decision that doesn't reflect his wishes.",
      detailed: "'Next of kin' has no legal authority to make treatment decisions. Giving her that role could sideline the person who knows him best now. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests your understanding of best-interests decision-making and how you handle competing relatives sensitively.",
    keyDetails: "He lacks capacity. There is no lasting power of attorney. His daughter has been absent for years. His partner is closely involved.",
    reasoning: "{1} explains the legal position kindly, and {2} brings everyone together. {3} wrongly excludes the daughter, and {4} wrongly gives her the decision.",
    competing: "Some would rank {3} last because it excludes someone. The key ranks {4} last because handing the decision to someone with no legal authority could directly affect his treatment."
  },
  refs: [
    { ref: "mca4", note: "Best interests and consulting people close to the person." },
    { ref: "consent", note: "Decisions for adults who lack capacity." }
  ],
  tags: ["best interests", "relatives", "capacity", "stroke"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-310", pool, letters: "BGH", format: "multiple_choice", difficulty: "moderate",
  title: "The unwatched inbox", setting: "General practice", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Safety and quality"],
  competencies: ["Results handling", "Raising concerns", "Patient safety"],
  stem:
    "You are an F2 doctor in a GP practice. A receptionist mentions that Dr Kerr, who usually handles the practice's test results, has been on leave for four days, and that no one else has been looking at her results inbox.\n\n" +
    "You can see that more than 60 results are waiting, including some marked abnormal. You aren't usually responsible for results.",
  options: [
    // keyed
    { text: "Tell your GP supervisor about the unchecked results straight away.",
      brief: "A senior needs to arrange for them to be reviewed today.",
      detailed: "Abnormal results that haven't been seen for four days may include urgent ones. Your supervisor can arrange for someone appropriate to review them today." },
    { text: "Offer to help review the results under your supervisor's guidance.",
      brief: "Practical help, with appropriate oversight.",
      detailed: "Reviewing results is part of your training, and helping will clear the backlog faster. Doing it with your supervisor's guidance means anything urgent is acted on correctly." },
    { text: "Suggest a significant event review so leave is covered in future.",
      brief: "The gap in cover is a system problem to fix.",
      detailed: "This happened because no one was assigned to cover the inbox. A significant event review can make sure cover is arranged whenever someone is on leave." },
    // distractors
    { text: "Leave it, as results aren't your responsibility.",
      brief: "Ignores a risk to patients that you now know about.",
      detailed: "They may not be your job, but once you know abnormal results are unseen, you have a duty to make sure someone acts on them." },
    { text: "Email Dr Kerr to let her know her inbox needs checking.",
      brief: "She is on leave and can't act on it.",
      detailed: "Contacting a colleague on leave doesn't solve the problem, and the results need reviewing now." },
    { text: "Work through all the results yourself this evening.",
      brief: "Well meant, but you need senior oversight for abnormal results.",
      detailed: "Helping is good, but acting alone on a large number of results, some abnormal, without supervision risks errors." },
    { text: "Ask the receptionist to file all the results so the inbox is cleared.",
      brief: "Filing unseen results, including abnormal ones, hides them.",
      detailed: "Clearing the inbox without clinical review would hide abnormal results that need action. It makes the problem worse." },
    { text: "Raise it at the next monthly practice meeting.",
      brief: "Too late for the results waiting now.",
      detailed: "The system should be discussed, but waiting a month leaves the current results unchecked." }
  ],
  explanation: {
    issue: "This tests whether you act on a system gap that puts patients at risk, even when it isn't your responsibility.",
    keyDetails: "Results have been unchecked for four days. Some are abnormal. You aren't normally responsible. A supervisor is available.",
    reasoning: "{k1} escalates promptly, {k2} offers supervised help, and {k3} fixes the system. The distractors ignore it ({d1}), contact someone who can't act ({d2}), act without oversight ({d3}), delegate inappropriately ({d4}), or delay ({d5}).",
    competing: "{d3} is tempting because it shows initiative, but abnormal results need senior oversight, especially in this volume."
  },
  refs: [
    { ref: "concerns", note: "Acting when systems put patients at risk." },
    { ref: "gmp", note: "Domain 3, contributing to safe systems." }
  ],
  tags: ["results", "systems", "general practice", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-311", pool, letters: "ECABD", format: "ranking", difficulty: "moderate",
  title: "Expecting", setting: "Paediatrics", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Self-care", "Occupational health", "Honesty"],
  stem:
    "You are an F2 doctor in paediatrics, and you have just found out that you are eight weeks pregnant. You haven't told anyone at work.\n\n" +
    "You are on annual leave this week. When you return next week you are rostered for a block of nights, and there is currently an outbreak of chickenpox on the ward. You don't know whether you have had chickenpox.",
  options: [
    { text: "Ask occupational health to check your chickenpox immunity.",
      brief: "Chickenpox in pregnancy can be serious, so you need to know your status now.",
      detailed: "Chickenpox in pregnancy can cause serious illness and, rarely, harm the baby. With an outbreak on the ward, finding out whether you are immune is the most urgent step. It ranks first." },
    { text: "Tell your employer you are pregnant and ask for a risk assessment.",
      brief: "This lets your employer assess and adjust your work.",
      detailed: "Once your employer knows, they must assess the risks to you and your pregnancy and make adjustments where needed. You can tell them confidentially through your supervisor or occupational health. It ranks second because the immunity check is more urgent." },
    { text: "Swap your nights with a colleague until you've been assessed.",
      brief: "Practical, but a private arrangement doesn't address the risks.",
      detailed: "Swapping may help in the short term, but it doesn't assess or manage the risks of your work, and it relies on colleagues' goodwill. It ranks third." },
    { text: "Work as normal on the ward until your 12-week scan.",
      brief: "Leaves you exposed to a serious risk.",
      detailed: "Waiting until 12 weeks to tell people is a common, personal choice. But working on a ward with chickenpox without knowing your immunity puts you and your pregnancy at risk." },
    { text: "Call in sick for the nights to avoid the ward.",
      brief: "Dishonest, and it leaves the rota short.",
      detailed: "Reporting sickness when you aren't ill is dishonest, leaves a gap in the rota, and doesn't deal with the risk. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you look after your own health and your pregnancy through proper routes, while staying honest with your employer.",
    keyDetails: "You are in early pregnancy. There is a chickenpox outbreak, and your immunity is unknown. You haven't told anyone yet.",
    reasoning: "{1} deals with the most urgent risk, {2} starts the formal risk assessment, and {3} is a temporary practical step. {4} leaves you at risk, and {5} is dishonest.",
    competing: "Some would put telling your employer first. Occupational health can usually check immunity confidentially, which deals with the most urgent risk while you decide how and when to tell others."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, looking after your own health." }
  ],
  tags: ["pregnancy", "occupational health", "chickenpox", "wellbeing"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-312", pool, letters: "ADH", format: "multiple_choice", difficulty: "easy",
  title: "Her faith leader", setting: "Oncology & palliative care", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting beliefs", "Patient-centred care", "Problem-solving"],
  stem:
    "You are an F2 doctor on an oncology ward. Mrs Adeyemi, 66, is waiting for scan results that will show whether her cancer has responded to treatment. Your consultant has asked you to arrange a meeting so the results can be discussed this afternoon.\n\n" +
    "Mrs Adeyemi says she would like her pastor to be with her for the conversation. The only quiet room on the ward is booked all afternoon.",
  options: [
    // keyed
    { text: "Tell her that her pastor is welcome to join the conversation.",
      brief: "Respects her wish for support from someone she trusts.",
      detailed: "Patients can choose who supports them in difficult conversations. Her pastor may be a vital source of comfort, and welcoming him respects her beliefs and her choice." },
    { text: "Ask the nurse in charge to find another private room.",
      brief: "A private setting is needed, and there may be alternatives.",
      detailed: "A side room, a relatives' room or an office on a nearby ward may be available. Finding a private space means the conversation doesn't have to happen at the bedside." },
    { text: "Agree a time that suits her, her pastor and your consultant.",
      brief: "Makes sure the people she wants can be there.",
      detailed: "Arranging the meeting around her pastor's availability, as well as the consultant's, shows that her wishes are being taken seriously." },
    // distractors
    { text: "Explain that results are only discussed with patients and family.",
      brief: "There is no such rule; she can choose who is present.",
      detailed: "Patients can have anyone they choose with them. Refusing her pastor would ignore her wishes." },
    { text: "Discuss the results at her bedside, with the curtains drawn.",
      brief: "Curtains don't give privacy for such a sensitive conversation.",
      detailed: "Others in the bay can hear through curtains. Significant results deserve a private setting." },
    { text: "Offer the hospital chaplain instead of her pastor.",
      brief: "Kind, but it isn't what she asked for.",
      detailed: "The chaplaincy team can be a great support, but she has asked for her own pastor, who knows her." },
    { text: "Postpone the results until next week, when the room is free.",
      brief: "An unnecessary delay to important news.",
      detailed: "She is waiting anxiously. A room booking isn't a good enough reason to make her wait another week." },
    { text: "Suggest her pastor joins by phone to keep things simple.",
      brief: "Limits her support when he could be there in person.",
      detailed: "A phone call may be a fallback if he can't come, but she has asked for him to be present." }
  ],
  explanation: {
    issue: "This tests whether you accommodate a patient's wish for spiritual support during a difficult conversation, and solve the practical obstacles.",
    keyDetails: "She wants her pastor present. A private room is needed. The results are important and she is anxious.",
    reasoning: "{k1} welcomes her pastor, {k2} finds a private space, and {k3} arranges a time that works. The distractors refuse her request ({d1}), compromise privacy ({d2}), substitute a different person ({d3}), delay ({d4}), or limit her support ({d5}).",
    competing: "{d3} is kind and may be useful later, but it isn't what she asked for."
  },
  refs: [
    { ref: "beliefs", note: "Respecting patients' beliefs and their choice of support." },
    { ref: "gmp", note: "Domain 2, giving patients the support they need to understand their care." }
  ],
  tags: ["faith", "bad news", "oncology", "privacy"]
}
];
