// Mock 1, part 2 (sjt-213 to sjt-225). Pool mock-1: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-1";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-213", pool, letters: "CADEB", format: "ranking", difficulty: "moderate",
  title: "A box already ticked", setting: "Obstetrics & gynaecology", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism", "Colleagues, culture and safety"],
  competencies: ["Honest records", "Patient safety", "Improving systems"],
  stem:
    "You are an F2 doctor on the postnatal ward. Writing the discharge summary for Mrs Lee, who had a caesarean section two days ago, you notice that the template has automatically filled in \"VTE risk assessment completed\".\n\n" +
    "You haven't done a VTE assessment for her, and you can't find one in her notes.",
  options: [
    { text: "Complete her VTE risk assessment before she goes home.",
      brief: "She may need thromboprophylaxis after a caesarean.",
      detailed: "Women are at increased risk of blood clots after a caesarean section, and some need preventive treatment after discharge. Doing the assessment now protects her." },
    { text: "Correct the summary so it reflects what was actually done.",
      brief: "The record must be accurate.",
      detailed: "Whatever the template says, the summary should only state what was done. Correcting it keeps the record honest." },
    { text: "Report the template problem so it can be fixed.",
      brief: "Other summaries may contain the same false statement.",
      detailed: "If the template auto-fills this line, other women's summaries may say an assessment was done when it wasn't. Reporting it protects them." },
    { text: "Delete the line without doing the assessment.",
      brief: "Removes the false statement but leaves her unassessed.",
      detailed: "This makes the record honest, but leaves her without an assessment she needs after a caesarean." },
    { text: "Leave the entry, as the midwives usually assess VTE risk.",
      brief: "You've checked and can't find an assessment.",
      detailed: "Midwives may assess VTE risk in some units, but you've looked and found no record. Leaving the entry keeps a probably false statement and leaves her unassessed. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you make sure a patient receives care that a record wrongly says was done, and fix the record and the system.",
    keyDetails: "The template auto-filled the entry. No assessment was done. She is at increased risk after a caesarean.",
    reasoning: "{1} protects her, {2} corrects the record, and {3} fixes the system. {4} corrects the record but leaves her at risk, and {5} leaves both a false record and an unassessed patient.",
    competing: "The order of {4} and {5} is close, as neither gets her assessed. {5} ranks last because it also leaves a probably false statement in her record."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in records; Domain 3, reporting system problems." }
  ],
  tags: ["records", "VTE", "templates", "obstetrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-214", pool, letters: "DEG", format: "multiple_choice", difficulty: "hard",
  title: "The senior says leave him at home", setting: "Out-of-hours / community", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Colleagues, culture and safety", "Knowledge, skills and development"],
  competencies: ["Escalation", "Clinical judgement", "Communication with seniors"],
  stem:
    "You are an F2 doctor on an out-of-hours home visit. Mr Lowe, 82, lives alone and has a chest infection. He is newly confused, his respiratory rate is 26, and his oxygen saturation is 91% on air.\n\n" +
    "You phone the senior GP at base, who advises starting oral antibiotics and leaving him at home. You think he needs admission.",
  options: [
    // keyed
    { text: "Repeat your specific findings to the senior GP.",
      brief: "The senior may not have taken in how unwell he is.",
      detailed: "New confusion, a raised respiratory rate and low oxygen saturation are concerning, especially in an older person living alone. Repeating them clearly may change the advice." },
    { text: "Tell the senior GP you'd like to refer him to the medical team.",
      brief: "Open escalation is appropriate when you remain concerned.",
      detailed: "If you still believe he needs admission, saying so openly and proposing a referral is professional and keeps the senior informed." },
    { text: "Document your findings and the advice you were given.",
      brief: "A clear record supports any decision.",
      detailed: "Recording your findings, the advice, and the decision reached protects Mr Lowe and you." },
    // distractors
    { text: "Leave him at home with oral antibiotics, as the senior GP has advised you to.",
      brief: "Doesn't act on your concerns about a sick patient.",
      detailed: "The senior's advice deserves respect, but you have seen him and are concerned. Accepting advice you think is unsafe, without discussing it further, isn't appropriate." },
    { text: "Ask a neighbour to check on him overnight.",
      brief: "Not a substitute for appropriate medical care.",
      detailed: "A neighbour may help, but he may need oxygen and hospital treatment." },
    { text: "Call 999 for an emergency ambulance yourself.",
      brief: "May be needed in an emergency, but bypasses the senior.",
      detailed: "If he deteriorated rapidly, an emergency ambulance would be right. But he is stable enough for a discussion, and the senior should know." },
    { text: "Tell Mr Lowe the senior GP is wrong.",
      brief: "Undermines a colleague and doesn't help him.",
      detailed: "He needs a plan, not to be drawn into a disagreement between doctors." },
    { text: "Start antibiotics and arrange a visit for tomorrow morning.",
      brief: "May be too late if he deteriorates overnight.",
      detailed: "This is a reasonable plan for a less unwell patient, but his observations suggest he may deteriorate before then." }
  ],
  explanation: {
    issue: "This tests how you escalate a concern when a senior's advice, given by phone, differs from your own assessment.",
    keyDetails: "His observations are abnormal. He is confused and lives alone. The senior hasn't seen him.",
    reasoning: "{k1} gives the senior the full picture, {k2} escalates openly, and {k3} records it. The distractors accept advice you think is unsafe ({d1}, {d5}), rely on others ({d2}), bypass the senior ({d3}), or undermine them ({d4}).",
    competing: "{d5} is the hard distractor: it's reasonable for a less unwell patient, but his observations suggest he needs more."
  },
  refs: [
    { ref: "news2", note: "Responding to abnormal observations." },
    { ref: "gmp", note: "Domain 3, escalating concerns about patient safety." }
  ],
  tags: ["escalation", "home visits", "pneumonia", "seniors"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-215", pool, letters: "BDAEC", format: "ranking", difficulty: "moderate",
  title: "Her boyfriend is 21", setting: "Paediatrics", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Child safeguarding", "Confidentiality", "Communication with young people"],
  stem:
    "You are an F2 doctor on a paediatric ward. Mia, 14, has been admitted with abdominal pain. While taking her history alone, she tells you she is in a sexual relationship with her boyfriend, who is 21.\n\n" +
    "She asks you not to tell her parents.",
  options: [
    { text: "Listen calmly, and ask her more about the relationship.",
      brief: "Understanding the relationship helps you assess the risk to her.",
      detailed: "A relationship between a 14-year-old and an adult raises serious concerns about exploitation. Listening without judgement helps her feel able to talk, and helps you understand the risk." },
    { text: "Explain that you'll need to share this with the safeguarding team, and why.",
      brief: "Being honest about the limits of confidentiality keeps her trust.",
      detailed: "Because of her age and his, this must be shared to protect her. Explaining this honestly, and what will happen, respects her even though you can't keep it secret." },
    { text: "Discuss it with the consultant and the safeguarding team the same day.",
      brief: "This needs specialist safeguarding input urgently.",
      detailed: "The safeguarding team will decide on next steps, including whether to involve children's social care and the police." },
    { text: "Tell her parents straight away, without discussing it with her.",
      brief: "Bypasses safeguarding processes and her trust.",
      detailed: "Her parents may need to know, but the safeguarding team should guide this, and telling them without explaining to her first could damage her trust." },
    { text: "Agree to keep it confidential, as long as she is using contraception.",
      brief: "Fails to protect her from possible exploitation.",
      detailed: "Contraception doesn't address the risk of exploitation by an adult. Keeping this secret would leave her unprotected, and is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to a young person's disclosure that suggests she may be at risk of exploitation, protecting her while keeping her trust.",
    keyDetails: "She is 14 and he is 21. She has asked you not to tell her parents. The age gap raises serious safeguarding concerns.",
    reasoning: "{1} listens, {2} is honest about sharing, and {3} involves safeguarding. {4} bypasses processes, and {5} leaves her unprotected.",
    competing: "Some would put informing the safeguarding team first. The key starts with listening, because what she tells you shapes the referral, and then explains honestly before sharing."
  },
  refs: [
    { ref: "u18", note: "Sharing information to protect young people from abuse or exploitation." },
    { ref: "workingtogether", note: "Responding to concerns about child sexual exploitation." }
  ],
  tags: ["child safeguarding", "exploitation", "confidentiality", "adolescents"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-216", pool, letters: "CFG", format: "multiple_choice", difficulty: "moderate",
  title: "The 'outlier' weeks", setting: "Non-clinical (audit)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honesty in audit", "Data integrity", "Learning from results"],
  stem:
    "You are an F2 doctor completing a re-audit of sepsis antibiotic times in the Emergency Department. The results are worse than the first audit, mainly because of three very busy weeks.\n\n" +
    "Your registrar suggests leaving those weeks out as \"outliers\" so the results look like an improvement before you present them.",
  options: [
    // keyed
    { text: "Explain that you'd prefer to present all the data.",
      brief: "Excluding unfavourable data without a valid reason misrepresents the results.",
      detailed: "Data can only be excluded for reasons decided in advance, not because the results are unfavourable. Presenting all the data is honest." },
    { text: "Analyse why those weeks were worse, and present that too.",
      brief: "The busy weeks may reveal something important.",
      detailed: "The worse results during busy weeks may show where the system struggles, which is valuable for improvement." },
    { text: "Discuss the request with the audit lead or your supervisor.",
      brief: "They can support you in presenting honestly.",
      detailed: "The audit lead can advise on handling the data properly, and support you if the registrar disagrees." },
    // distractors
    { text: "Remove the weeks as the registrar suggests.",
      brief: "Misrepresents the results.",
      detailed: "This would make the results look better than they are, which is dishonest and could mislead the department." },
    { text: "Remove the weeks, but mention in small print that some data was excluded.",
      brief: "Still presents a misleading headline.",
      detailed: "This seems more honest, but the main results would still give a false impression." },
    { text: "Delay presenting until you can collect better data.",
      brief: "Avoids presenting unfavourable but valid results.",
      detailed: "More data may help, but delaying to avoid unwelcome results isn't honest." },
    { text: "Report the registrar to the GMC.",
      brief: "Disproportionate for a suggestion you can decline.",
      detailed: "The suggestion is wrong, but declining and discussing it locally is the right response." },
    { text: "Present only the first audit's results.",
      brief: "Hides the re-audit findings.",
      detailed: "This avoids the problem but conceals important information." }
  ],
  explanation: {
    issue: "This tests honesty in audit when a senior suggests excluding unfavourable data.",
    keyDetails: "The re-audit shows worse results. The registrar wants to remove weeks without a valid reason. The results will be presented.",
    reasoning: "{k1} keeps the data honest, {k2} turns the result into learning, and {k3} seeks support. The distractors misrepresent or hide the data ({d1}, {d2}, {d3}, {d5}), or overreact ({d4}).",
    competing: "{d2} is the tempting option, but a misleading headline is still misleading."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in audit and research." },
    { ref: "sepsis", note: "Timely antibiotics in suspected sepsis." }
  ],
  tags: ["audit", "data integrity", "probity", "sepsis"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-217", pool, letters: "DCABE", format: "ranking", difficulty: "easy",
  title: "One more swap", setting: "Orthopaedics", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Looking after yourself", "Supporting colleagues", "Saying no"],
  stem:
    "You are an F2 doctor in orthopaedics. You've covered three extra night shifts this month and feel tired. Dr Lewis, another F2, asks you to swap so he can attend a job interview next week. The swap would give you another night shift.\n\n" +
    "He says no one else can do it.",
  options: [
    { text: "Say you can't do another night, and offer to help find cover.",
      brief: "Honest about your limits while still trying to help.",
      detailed: "You're tired after extra nights. Saying so honestly, and helping him find cover, supports him without risking your own fitness to work." },
    { text: "Suggest he asks the rota coordinator for help.",
      brief: "The coordinator may find cover.",
      detailed: "The rota coordinator may know who is available. It ranks second because it's less personal than offering to help." },
    { text: "Agree, provided the swap keeps you within your rest requirements.",
      brief: "Helpful, but you're already tired.",
      detailed: "Checking the rules is sensible, but you are already tired, and another night may not be wise even if it's allowed." },
    { text: "Tell him his interview isn't your problem.",
      brief: "Unkind and unhelpful.",
      detailed: "You aren't obliged to swap, but this is dismissive of a colleague. It ranks above working while tired because it doesn't put patients at risk." },
    { text: "Agree to the swap, despite how tired you are.",
      brief: "Risks your health and patient safety.",
      detailed: "Wanting to help is good, but taking on another night when you're already tired puts patients at risk. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you look after your own wellbeing while still supporting a colleague.",
    keyDetails: "You've covered three extra nights. He needs the swap for an interview. He says no one else can do it.",
    reasoning: "{1} is honest and helpful, {2} points him to the coordinator, and {3} helps cautiously. {4} is unkind, and {5} risks patient safety.",
    competing: "Some would see {3} as best. It ranks third because you're already tired, even if the swap is within the rules."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, making sure fatigue doesn't put patients at risk." }
  ],
  tags: ["rotas", "fatigue", "colleagues", "shift swaps"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-218", pool, letters: "BDH", format: "multiple_choice", difficulty: "moderate",
  title: "No transfusion", setting: "General medical ward", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting autonomy", "Shared decision-making", "Safe discharge"],
  stem:
    "You are an F2 doctor on a general medical ward. Mrs Grant, 70, has iron-deficiency anaemia with a haemoglobin of 68 g/L. She is breathless on exertion but otherwise stable. The team recommends a blood transfusion.\n\n" +
    "She refuses, saying she \"doesn't want someone else's blood\", and wants to go home. She has capacity.",
  options: [
    // keyed
    { text: "Ask her about her reasons and concerns.",
      brief: "Understanding her concerns may help.",
      detailed: "She may have worries about infection or other concerns that can be addressed. Exploring this respects her and supports an informed decision." },
    { text: "Explain the risks of declining, and alternatives such as IV iron.",
      brief: "An informed decision needs the full picture.",
      detailed: "There are alternatives, such as intravenous iron, which may be acceptable to her. Explaining the risks and options helps her decide." },
    { text: "Respect her decision, and arrange a safe discharge plan.",
      brief: "A capacitous refusal must be respected, with a safe plan.",
      detailed: "She has capacity, so her decision must be respected. A clear plan for treatment, follow-up and safety-netting reduces the risk." },
    // distractors
    { text: "Transfuse her in her best interests.",
      brief: "Unlawful for a patient with capacity.",
      detailed: "Best interests apply only to people who lack capacity." },
    { text: "Insist she stays in hospital until her haemoglobin improves.",
      brief: "She can choose to leave.",
      detailed: "She has capacity and can decide to go home." },
    { text: "Ask her family to persuade her to have the transfusion.",
      brief: "Pressures her and involves them without consent.",
      detailed: "This doesn't respect her decision." },
    { text: "Discharge her without follow-up, as she declined treatment.",
      brief: "Respecting a refusal doesn't mean withdrawing care.",
      detailed: "She still needs treatment for her anaemia and follow-up." },
    { text: "Refer her to psychiatry, as refusing blood is unusual.",
      brief: "An unusual decision isn't evidence of lacking capacity.",
      detailed: "She has capacity, and refusing blood isn't a psychiatric issue." }
  ],
  explanation: {
    issue: "This tests whether you respect a capacitous patient's refusal while making sure she is informed and safe.",
    keyDetails: "She has capacity. She is stable. Alternatives exist.",
    reasoning: "{k1} explores her concerns, {k2} informs her decision, and {k3} respects it safely. The distractors override her ({d1}, {d2}), pressure her ({d3}), abandon her ({d4}), or question her capacity without reason ({d5}).",
    competing: "{d4} is the tempting option because it seems to respect her decision, but she still needs care."
  },
  refs: [
    { ref: "consent", note: "Respecting the decisions of patients with capacity." }
  ],
  tags: ["refusal", "transfusion", "anaemia", "autonomy"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-219", pool, letters: "DBCA", format: "ranking", difficulty: "hard",
  title: "Still driving", setting: "General practice", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Confidentiality", "Public safety", "Persuasion"],
  stem:
    "You are an F2 doctor in a GP practice. Mr Harris, 38, has epilepsy and had a seizure two weeks ago. He tells you he is still driving to work because he'd lose his job otherwise.\n\n" +
    "He says he won't tell the DVLA.",
  options: [
    { text: "Explain that he must stop driving and tell the DVLA, and why.",
      brief: "He may not understand the legal and safety implications.",
      detailed: "After a seizure, he must stop driving and inform the DVLA. Explaining the risks to himself and others, and the law, may persuade him." },
    { text: "Explain that you'd have to inform the DVLA yourself if he keeps driving, telling him first.",
      brief: "Honest about what you'd need to do.",
      detailed: "GMC guidance says that if a patient continues to drive against advice, you should inform the DVLA, telling the patient before you do. Being honest about this now is fair." },
    { text: "Discuss the situation with your GP supervisor.",
      brief: "Advice helps with a difficult confidentiality decision.",
      detailed: "Your supervisor can advise and support you. It ranks third because explaining to Mr Harris comes first." },
    { text: "Respect his confidentiality and take no further action.",
      brief: "Puts him and others at serious risk.",
      detailed: "Confidentiality is important, but not when someone is driving with uncontrolled epilepsy and putting others at risk." }
  ],
  explanation: {
    issue: "This tests how you balance confidentiality against public safety when a patient continues to drive against medical advice.",
    keyDetails: "He has had a recent seizure. He is still driving. He refuses to tell the DVLA.",
    reasoning: "{1} explains his duty, {2} is honest about yours, and {3} gets advice. {4} puts others at risk.",
    competing: "This is hard because the order of {1} and {2} may feel close. The key starts with persuasion, as the GMC expects you to try to persuade him first."
  },
  refs: [
    { ref: "dvla", note: "Driving rules for epilepsy." },
    { ref: "confidentiality", note: "Disclosing information to the DVLA when a patient continues to drive." }
  ],
  tags: ["confidentiality", "DVLA", "epilepsy", "public safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-220", pool, letters: "ACE", format: "multiple_choice", difficulty: "moderate",
  title: "Late discharge summaries", setting: "Acute medical unit", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Responding to feedback", "Time management", "Communication with community teams"],
  stem:
    "You are an F2 doctor on the acute medical unit. Your consultant tells you that several of your discharge summaries have been sent days late, and a GP has complained that a patient's medication change wasn't communicated in time.\n\n" +
    "You've been busy and have been leaving summaries until the end of the week.",
  options: [
    // keyed
    { text: "Ask which cases were affected, and what happened.",
      brief: "Understanding what happened helps you change.",
      detailed: "Knowing which summaries were late, and the consequences, helps you see why it matters." },
    { text: "Write summaries on the day of discharge from now on.",
      brief: "Prevents delays in future.",
      detailed: "Writing summaries on the day of discharge, even briefly, means GPs get the information when they need it." },
    { text: "Ask your supervisor for advice on managing your time.",
      brief: "Support with workload and time management.",
      detailed: "Your supervisor can suggest strategies and help if your workload is genuinely too high." },
    // distractors
    { text: "Explain that you've been too busy to write them sooner.",
      brief: "True, but doesn't address the problem.",
      detailed: "Workload is real, but late summaries affect patients' care." },
    { text: "Write shorter summaries, leaving out medication changes.",
      brief: "Medication changes are essential information.",
      detailed: "This saves time but leaves out the most important information." },
    { text: "Ask the F1 to write your summaries.",
      brief: "Shifts the problem to a colleague.",
      detailed: "This doesn't solve the problem and adds to the F1's workload." },
    { text: "Stay late every night until all summaries are done.",
      brief: "Unsustainable, and doesn't fix the routine.",
      detailed: "This may help for a while but isn't sustainable." },
    { text: "Apologise to the consultant, and carry on as before.",
      brief: "An apology without change doesn't help.",
      detailed: "Acknowledging the problem is good, but nothing changes." }
  ],
  explanation: {
    issue: "This tests how you respond to feedback about your own work, by understanding the impact and changing your practice.",
    keyDetails: "Summaries were late. A medication change wasn't communicated. You've been leaving them until the end of the week.",
    reasoning: "{k1} understands the impact, {k2} changes your routine, and {k3} gets support. The distractors excuse it ({d1}), compromise safety ({d2}), shift it ({d3}), are unsustainable ({d4}), or don't change anything ({d5}).",
    competing: "{d4} is the tempting option, but it doesn't change the routine that caused the problem."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, reflecting on feedback; Domain 3, communicating with colleagues who share care." }
  ],
  tags: ["feedback", "discharge summaries", "time management", "acute medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-221", pool, letters: "EDBAC", format: "ranking", difficulty: "moderate",
  title: "Nightmares after intensive care", setting: "Intensive care", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Recognising psychological distress", "Reassurance", "Follow-up"],
  stem:
    "You are an F2 doctor in intensive care. Mrs Ahmed, 55, is recovering after two weeks on a ventilator with pneumonia and is due to move to a ward.\n\n" +
    "She tells you she has vivid nightmares about being trapped, and has panic attacks when nurses approach her bed at night. She is embarrassed and worried she's \"going mad\".",
  options: [
    { text: "Listen, and reassure her this is common after intensive care.",
      brief: "Normalising her experience reduces fear.",
      detailed: "Nightmares and anxiety are common after intensive care, often linked to delirium and frightening memories. Knowing this can be a great relief." },
    { text: "Make sure she is referred to the ICU follow-up service or psychological support.",
      brief: "Specialist support can help her recover.",
      detailed: "Many units offer follow-up after discharge, including psychological support. This helps her recover." },
    { text: "Review her for any ongoing delirium or medication effects.",
      brief: "Physical causes should be considered.",
      detailed: "Delirium or medication side effects can contribute. It ranks third because her distress needs addressing first." },
    { text: "Prescribe a sleeping tablet to help her sleep.",
      brief: "Doesn't address the cause and may worsen delirium.",
      detailed: "Sedatives can worsen confusion and don't address what she is experiencing." },
    { text: "Tell her they're only dreams and will soon pass.",
      brief: "Dismissive of her distress.",
      detailed: "They may pass, but this dismisses how frightening they are." }
  ],
  explanation: {
    issue: "This tests whether you recognise and respond to psychological distress after critical illness.",
    keyDetails: "She has nightmares and panic attacks. She fears she's going mad. She's moving to a ward.",
    reasoning: "{1} reassures her, {2} arranges support, and {3} considers physical causes. {4} risks harm, and {5} dismisses her.",
    competing: "Some would review for delirium first. The key starts with reassurance because she is frightened now, and physical causes can be reviewed alongside."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, responding to patients' psychological needs." }
  ],
  tags: ["post-ICU", "psychological distress", "delirium", "intensive care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-222", pool, letters: "DFH", format: "multiple_choice", difficulty: "easy",
  title: "At the gym", setting: "General surgery", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Boundaries", "Confidentiality", "Courtesy"],
  stem:
    "You are an F2 doctor in general surgery. At your local gym, Mr Webb, a patient you consented for a hernia repair last week, recognises you.\n\n" +
    "He starts asking about his post-operative pain and shows you his wound in the changing room.",
  options: [
    // keyed
    { text: "Explain politely that you can't advise him properly here.",
      brief: "A gym isn't a place for clinical advice.",
      detailed: "You don't have his notes, can't examine him properly, and others may overhear. Explaining this kindly respects him." },
    { text: "Suggest he contacts the ward, his GP or NHS 111 about his pain.",
      brief: "Directs him to appropriate help.",
      detailed: "These services can assess him properly." },
    { text: "Be friendly, and wish him well with his recovery.",
      brief: "Courtesy maintains a good relationship.",
      detailed: "Being friendly, while keeping boundaries, is appropriate." },
    // distractors
    { text: "Examine his wound in the changing room.",
      brief: "Inappropriate setting, without privacy.",
      detailed: "This is not a clinical setting, and there's no privacy." },
    { text: "Advise him on painkillers there and then.",
      brief: "Advice without proper assessment.",
      detailed: "You don't know his history or current medications." },
    { text: "Pretend not to recognise him.",
      brief: "Unkind and awkward.",
      detailed: "This avoids the situation, but may upset him." },
    { text: "Give him your phone number so he can contact you with questions.",
      brief: "Blurs professional boundaries.",
      detailed: "This creates an informal relationship outside proper channels." },
    { text: "Discuss his operation with him in front of others in the changing room.",
      brief: "Breaches his privacy.",
      detailed: "Others could overhear." }
  ],
  explanation: {
    issue: "This tests how you handle a patient seeking advice outside the clinical setting, keeping boundaries while being kind.",
    keyDetails: "You're at the gym. He's in pain and wants advice. Others are present.",
    reasoning: "{k1} explains the limits, {k2} directs him to help, and {k3} stays friendly. The distractors give care inappropriately ({d1}, {d2}, {d5}), avoid him ({d3}), or blur boundaries ({d4}).",
    competing: "{d2} may seem helpful, but you can't safely advise without proper assessment."
  },
  refs: [
    { ref: "boundaries", note: "Maintaining professional boundaries outside work." }
  ],
  tags: ["boundaries", "outside work", "confidentiality"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-223", pool, letters: "CAEDB", format: "ranking", difficulty: "moderate",
  title: "Lost samples", setting: "General surgery", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Responding to system failures", "Prioritisation", "Communication"],
  stem:
    "You are an F2 doctor on a surgical ward. The laboratory phones to say that a batch of the ward's morning blood samples has been lost, including a group and save for Mr Owen, who is first on this afternoon's theatre list for a bowel resection.\n\n" +
    "You have twelve patients whose bloods were taken this morning.",
  options: [
    { text: "Identify the urgent repeats, starting with Mr Owen's group and save.",
      brief: "Prioritising makes sure the most important tests are repeated first.",
      detailed: "Mr Owen's operation depends on his group and save. Repeating it first, then other urgent bloods, keeps the day on track." },
    { text: "Let the surgical team and theatre know about the delay.",
      brief: "They may need to adjust the list.",
      detailed: "If the group and save may not be ready, the team may need to reorder the list." },
    { text: "Report the loss through the incident reporting system.",
      brief: "The lab needs to understand what happened.",
      detailed: "Reporting helps the trust find out what went wrong. It ranks third because patients come first." },
    { text: "Repeat all twelve patients' bloods in the order they were originally taken.",
      brief: "Safe, but doesn't prioritise.",
      detailed: "All may need repeating, but prioritising urgent tests matters." },
    { text: "Send Mr Owen to theatre without a group and save.",
      brief: "Unsafe if he needs a transfusion.",
      detailed: "Operating without a group and save could put him at risk." }
  ],
  explanation: {
    issue: "This tests how you prioritise and communicate when a system failure affects patients' care.",
    keyDetails: "The group and save for the first theatre patient is lost. Twelve patients are affected.",
    reasoning: "{1} prioritises, {2} informs the team, and {3} reports it. {4} doesn't prioritise, and {5} is unsafe.",
    competing: "Some would inform theatre first. Both are urgent; the key starts with repeating the group and save because it's the step that keeps him on the list."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, responding to safety risks." }
  ],
  tags: ["system failure", "blood tests", "surgery", "prioritisation"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-224", pool, letters: "ABG", format: "multiple_choice", difficulty: "hard",
  title: "Your partner's clinic", setting: "General practice", attribute: P,
  topic: "Conflicts of interest and self-prescribing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Conflicts of interest", "Impartial advice", "Honesty"],
  stem:
    "You are an F2 doctor in a GP practice. Mrs Ward, 52, has had knee pain for months and would benefit from physiotherapy. She says the NHS wait is too long and asks if you can recommend a good private physiotherapist.\n\n" +
    "Your partner runs a private physiotherapy clinic in the same town.",
  options: [
    // keyed
    { text: "Explain the NHS physiotherapy options and how to self-refer.",
      brief: "She should know all her options.",
      detailed: "Many areas allow self-referral, and waits may be shorter than she thinks." },
    { text: "Give her neutral information on finding a private physiotherapist.",
      brief: "Impartial information lets her choose freely.",
      detailed: "Pointing her to the professional register lets her choose without your influence." },
    { text: "Avoid recommending your partner's clinic.",
      brief: "Recommending it would be a conflict of interest.",
      detailed: "Recommending a business in which you have a personal interest could affect, or appear to affect, your advice." },
    // distractors
    { text: "Recommend your partner's clinic, as it is good.",
      brief: "A conflict of interest.",
      detailed: "Even if it is good, recommending it without declaring your interest isn't appropriate." },
    { text: "Recommend your partner's clinic, explaining that it's your partner's.",
      brief: "Declaring the interest helps, but you'd still be steering her.",
      detailed: "Being open is better, but recommending it still steers her towards a business you benefit from." },
    { text: "Arrange a discount for her at your partner's clinic.",
      brief: "Creates a further conflict.",
      detailed: "This could seem kind, but it deepens the conflict of interest." },
    { text: "Tell her you can't discuss private physiotherapy.",
      brief: "Unhelpful; neutral information is fine.",
      detailed: "You can give impartial information." },
    { text: "Tell her the NHS wait is too long, so private treatment is best.",
      brief: "May not be accurate, and steers her to private care.",
      detailed: "You may not know the current wait, and this pushes her towards private care." }
  ],
  explanation: {
    issue: "This tests whether you give impartial advice when you have a personal financial interest.",
    keyDetails: "Your partner runs a clinic nearby. She asked for a recommendation. NHS options may be available.",
    reasoning: "{k1} explains NHS options, {k2} gives impartial information, and {k3} avoids the conflict. The distractors steer her to your partner's clinic ({d1}, {d2}, {d3}), are unhelpful ({d4}), or steer her to private care ({d5}).",
    competing: "{d2} is the hard distractor: declaring the interest is better, but recommending the clinic still steers her."
  },
  refs: [
    { ref: "coi", note: "Recognising and managing conflicts of interest, including those of family members." }
  ],
  tags: ["conflicts of interest", "private practice", "general practice", "impartiality"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-225", pool, letters: "BDCEA", format: "ranking", difficulty: "moderate",
  title: "Two instructions", setting: "General medical ward", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Clarifying instructions", "Teamwork", "Patient safety"],
  stem:
    "You are an F2 doctor on a general medical ward. Dr Ali, a registrar, asks you to start Mr Foster's treatment-dose heparin today for a suspected pulmonary embolism.\n\n" +
    "An hour later, Dr Brown, another registrar, tells you to withhold it, as Mr Foster is due a kidney biopsy tomorrow. Neither knows about the other's instruction.",
  options: [
    { text: "Tell both registrars about the conflict, and ask them to agree.",
      brief: "They need to discuss it directly.",
      detailed: "Each registrar has a valid reason. They need to discuss it so a safe plan is agreed." },
    { text: "Ask the consultant to decide.",
      brief: "If the registrars can't agree, the consultant decides.",
      detailed: "The consultant has overall responsibility. It ranks second because the registrars may agree between themselves." },
    { text: "Follow Dr Ali's instruction, as he spoke to you first.",
      brief: "Seniority doesn't resolve the clinical conflict.",
      detailed: "This may seem logical, but Dr Brown has information about the biopsy that Dr Ali may not know, which could change the decision." },
    { text: "Follow Dr Brown's instruction, as it was the most recent one you received.",
      brief: "Leaves Dr Ali unaware that the plan changed.",
      detailed: "Dr Ali may not know about the biopsy, and needs to know the plan has changed." },
    { text: "Do nothing until one of them asks.",
      brief: "Leaves the patient's treatment uncertain.",
      detailed: "This may delay important treatment and is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you resolve conflicting instructions from seniors, making sure a safe, shared plan is agreed.",
    keyDetails: "Both instructions have valid reasons. Neither registrar knows the other's view. A PE needs treatment.",
    reasoning: "{1} gets them to agree, {2} escalates if needed, and {3} follows one instruction without resolving the conflict. {4} leaves one uninformed, and {5} leaves the patient's treatment uncertain.",
    competing: "Some would go to the consultant first. The key prefers the registrars agreeing first, as it's quicker and they each have information the other needs."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, communicating with colleagues to keep patients safe." }
  ],
  tags: ["conflicting instructions", "anticoagulation", "teamwork", "registrars"]
}
];
