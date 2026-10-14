// Practice batch P09, part 1 (sjt-166 to sjt-175). Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-166", letters: "BCH", format: "multiple_choice", difficulty: "moderate",
  title: "A timeline that 'looks better'", setting: "General medical ward", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honest records", "Integrity under pressure", "Seeking advice"],
  stem:
    "You are an F2 doctor on a general medical ward. A family has complained that their mother, Mrs Ellis, waited too long to be reviewed after a fall on the ward last week. You reviewed her, but didn't write your note until two hours later.\n\n" +
    "Your registrar asks you to add a note to the record dated and timed at the time of the fall, \"so the timeline looks better\".",
  options: [
    // keyed
    { text: "Decline, explaining that you can't backdate an entry.",
      brief: "Backdating creates a false record.",
      detailed: "A note timed to look as though it was written earlier would misrepresent what happened, and could mislead the complaint investigation. Declining, politely, keeps the record honest." },
    { text: "Offer to add a clearly dated retrospective note giving any relevant detail.",
      brief: "Late entries are acceptable when they are clearly labelled.",
      detailed: "If you have useful information to add, such as when you actually reviewed her, you can write a new entry with today's date and time, making clear it is retrospective. That adds detail without misleading anyone." },
    { text: "Seek advice from your consultant or the trust's complaints team.",
      brief: "Seniors can advise on responding to the complaint properly.",
      detailed: "Your consultant or the complaints team can advise on how to contribute honestly to the response, including writing a statement about what happened." },
    // distractors
    { text: "Add the note as asked, as you did review her.",
      brief: "The note would still misrepresent when it was written.",
      detailed: "You did review her, which makes this tempting. But the note would suggest it was written at the time, which isn't true." },
    { text: "Add the note without any date or time.",
      brief: "Undated entries are poor practice and may also mislead.",
      detailed: "This avoids backdating, but undated entries can be read as contemporaneous, and records must show when entries were made." },
    { text: "Tell the family that your registrar asked you to change the notes.",
      brief: "Not the right route, and may inflame the complaint.",
      detailed: "The family deserve an honest response, but this isn't the way to raise your concern. Speaking to your consultant is the right route." },
    { text: "Report your registrar to the GMC.",
      brief: "Disproportionate before raising it locally.",
      detailed: "The request is a concern, but a single request you declined is best raised locally first." },
    { text: "Agree, but add a note elsewhere explaining that the entry was backdated.",
      brief: "Still creates a misleading entry.",
      detailed: "This tries to balance honesty with the registrar's request, but the backdated entry itself would still be misleading." }
  ],
  explanation: {
    issue: "This tests whether you keep records honest when a senior asks you to change them to look better in a complaint.",
    keyDetails: "You did review her, but wrote the note later. The record is relevant to a complaint. Your registrar is asking you to backdate.",
    reasoning: "{k1} declines, {k2} offers an honest alternative, and {k3} seeks advice. The distractors misrepresent the record ({d1}, {d2}, {d5}), or handle the concern inappropriately ({d3}, {d4}).",
    competing: "{d5} is the tempting distractor, as it seems to keep some honesty, but the backdated entry itself would still mislead."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in records; Domain 1, recording when entries are made." }
  ],
  tags: ["records", "backdating", "complaints", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-167", letters: "DCEAB", format: "ranking", difficulty: "easy",
  title: "Antibiotics for a cold", setting: "General practice", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Antimicrobial stewardship", "Respectful challenge", "Learning"],
  stem:
    "You are an F2 doctor in a GP practice, sitting in on your trainer's surgery. Mr Ward, 35, has had a cough and runny nose for three days. He has no other symptoms, and his examination is normal.\n\n" +
    "He asks for antibiotics, and your trainer begins to prescribe amoxicillin. You think antibiotics aren't indicated.",
  options: [
    { text: "Ask your trainer, after the consultation, what made them decide to prescribe.",
      brief: "Respectful, and you may learn something.",
      detailed: "Your trainer may have a reason you haven't considered. Asking privately, after the patient has left, is respectful and is a learning opportunity for you." },
    { text: "Share your view, with reference to the guidance, when you discuss the case.",
      brief: "Raising evidence respectfully supports good prescribing.",
      detailed: "Guidance generally advises against antibiotics for simple respiratory infections. Sharing this respectfully contributes to good practice. It ranks second because asking first is fairer." },
    { text: "Accept your trainer's decision, and reflect on it later.",
      brief: "Respects their role, but misses the chance to discuss it.",
      detailed: "Your trainer is responsible for the prescription, and reflecting is useful. But not discussing it misses a learning opportunity for you both." },
    { text: "Report your trainer to the practice prescribing lead.",
      brief: "Disproportionate for a single prescribing decision.",
      detailed: "Prescribing patterns can be reviewed, but reporting a single decision without discussing it is disproportionate. It ranks above contradicting your trainer in front of the patient because it at least happens away from him." },
    { text: "Tell Mr Ward during the consultation that you don't think he needs antibiotics.",
      brief: "Undermines your trainer in front of the patient.",
      detailed: "Your view may be right, but contradicting your trainer in front of the patient undermines them, may confuse him, and damages his trust in the practice. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you raise a disagreement with a senior's prescribing, respectfully and at the right time.",
    keyDetails: "The prescription seems not to be indicated. You are the junior. The patient is present.",
    reasoning: "{1} asks respectfully, {2} shares the evidence, and {3} defers without discussion. {4} is disproportionate, and {5} undermines your trainer in front of the patient.",
    competing: "The order of {1} and {2} is close; asking first is fairer, as there may be a reason you don't know."
  },
  refs: [
    { ref: "prescribing", note: "Prescribing appropriately, including antimicrobials." },
    { ref: "gmp", note: "Domain 3, raising concerns respectfully with colleagues." }
  ],
  tags: ["antibiotics", "stewardship", "trainers", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-168", letters: "DFH", format: "multiple_choice", difficulty: "moderate",
  title: "A disclosure at pre-op assessment", setting: "General surgery", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Sensitive history-taking", "Safeguarding", "Documentation"],
  stem:
    "You are an F2 doctor in a pre-operative assessment clinic. Mrs Ahmed, 32, is having a laparoscopic cholecystectomy. While taking her history, she tells you that she had female genital mutilation (FGM) as a child, before she came to the UK.\n\n" +
    "She has two daughters, aged 4 and 7.",
  options: [
    // keyed
    { text: "Thank her for telling you, and ask whether she has any related health problems.",
      brief: "A sensitive response and an offer of help with any effects.",
      detailed: "FGM can cause long-term physical and psychological problems. Responding sensitively, without judgement, and asking whether she has any problems she'd like help with, puts her care first." },
    { text: "Record the disclosure in her notes, following the trust's FGM guidance.",
      brief: "Accurate recording is required and supports her care.",
      detailed: "Trusts have guidance on recording FGM in a woman's records. This supports her care and any safeguarding assessment for her daughters." },
    { text: "Discuss the possible risk to her daughters with the trust's safeguarding team.",
      brief: "Daughters of women who have had FGM may be at risk, which needs assessing.",
      detailed: "Having had FGM doesn't mean she would allow it for her daughters, and many women strongly oppose it. But the risk needs to be considered, and the safeguarding team can advise on assessment and any referral." },
    // distractors
    { text: "Report the FGM to the police under the mandatory reporting duty.",
      brief: "The mandatory duty applies to girls under 18, not adult women.",
      detailed: "Doctors must report known FGM in girls under 18 to the police. Mrs Ahmed is an adult, so the duty doesn't apply to her, though safeguarding for her daughters still needs considering." },
    { text: "Take no further action, as it happened long ago and abroad.",
      brief: "Overlooks her health needs and her daughters' possible risk.",
      detailed: "The FGM happened before she came to the UK, but her health and her daughters' safety still need considering." },
    { text: "Refer her daughters to children's social care immediately, without discussion.",
      brief: "Premature without assessing the risk.",
      detailed: "A referral may be needed, but the safeguarding team should help assess the risk first, and she should usually be involved." },
    { text: "Ask her husband whether he intends FGM for their daughters.",
      brief: "Not your role, and could put her and her daughters at risk.",
      detailed: "Raising this with her husband without her consent could put her in a difficult or unsafe position." },
    { text: "Postpone her operation until the safeguarding assessment is complete.",
      brief: "Her surgery doesn't depend on the safeguarding process.",
      detailed: "The two issues are separate. Postponing her operation would be unfair and unnecessary." }
  ],
  explanation: {
    issue: "This tests how you respond sensitively to an adult's disclosure of FGM, while recognising the possible risk to her daughters.",
    keyDetails: "Mrs Ahmed is an adult; the FGM happened in childhood, abroad. She has two young daughters.",
    reasoning: "{k1} responds sensitively and offers help, {k2} records it properly, and {k3} considers her daughters' safety. The distractors misapply the law ({d1}), take no action ({d2}), act prematurely ({d3}, {d5}), or risk her safety ({d4}).",
    competing: "{d1} is the trap: the mandatory reporting duty applies to girls under 18, not to adult women."
  },
  refs: [
    { ref: "fgm", note: "The mandatory reporting duty applies to known FGM in under-18s." },
    { ref: "workingtogether", note: "Assessing risk to children." }
  ],
  tags: ["FGM", "safeguarding", "pre-operative assessment", "women's health"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-169", letters: "EBDAC", format: "ranking", difficulty: "hard",
  title: "\"Just fill it in and I'll sign\"", setting: "Non-clinical (training)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism", "Knowledge, skills and development"],
  competencies: ["Honest assessment", "Managing your training", "Seeking advice"],
  stem:
    "You are an F2 doctor near the end of your placement. Your educational supervisor is very busy. She emails to say she hasn't had time to complete your end-of-placement report, and asks you to fill in her section yourself so she can \"just sign it\".\n\n" +
    "The report is used at your annual review.",
  options: [
    { text: "Reply that you'd prefer her to complete it, and offer a short meeting.",
      brief: "Respects her time while keeping the assessment hers.",
      detailed: "Her report should reflect her judgement. Offering a short meeting, at a time that suits her, makes it easier for her to complete it properly." },
    { text: "Offer to send her a summary of your achievements and evidence to help her write it.",
      brief: "Saves her time without writing her assessment for her.",
      detailed: "Many supervisors appreciate a summary of the evidence in your portfolio. This helps her without you writing her judgement. It ranks second because the first option keeps the assessment entirely hers." },
    { text: "Ask your foundation programme tutor for advice.",
      brief: "Useful if she can't complete it, though less direct.",
      detailed: "The tutor can advise on what's acceptable and help if she can't complete it in time. It ranks third because a direct, helpful reply may solve it." },
    { text: "Complete her section honestly, rating yourself fairly, as she asked.",
      brief: "Honest ratings are still your judgement, not hers.",
      detailed: "This is tempting because it's what she asked, and you might be fair. But it's still not her assessment, and signing it would misrepresent who made the judgement." },
    { text: "Complete her section, rating yourself highly in every area.",
      brief: "Dishonest and self-serving.",
      detailed: "This would misrepresent your performance in a report used to judge your progress. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you keep assessments honest when a busy supervisor suggests a shortcut.",
    keyDetails: "The report should be her judgement. It is used at your annual review. She is busy, not dishonest.",
    reasoning: "{1} keeps the assessment hers, {2} helps her without writing it, and {3} seeks advice. {4} writes her judgement for her, and {5} does so dishonestly.",
    competing: "This is hard because {4} is honest in content. It ranks below the others because it still misrepresents who made the assessment."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in assessments and records of your training." }
  ],
  tags: ["assessment", "supervisors", "ARCP", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-170", letters: "CEG", format: "multiple_choice", difficulty: "moderate",
  title: "Thirteen hours, no breaks", setting: "Intensive care", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Safe working", "Exception reporting", "Fitness to work"],
  stem:
    "You are an F2 doctor in intensive care. It is 22:30, and you have just finished a 13-hour shift without a single break because the unit was so busy. Your next shift starts at 07:30 tomorrow.\n\n" +
    "This is the third time in two weeks this has happened. You feel exhausted.",
  options: [
    // keyed
    { text: "Submit an exception report for the missed breaks and short rest.",
      brief: "Exception reports record unsafe working so it can be addressed.",
      detailed: "Missed breaks and less than the minimum rest between shifts are exactly what exception reports are for. They alert your supervisor and the guardian of safe working hours." },
    { text: "Raise the pattern with the guardian of safe working hours.",
      brief: "A repeated pattern suggests a rota problem that needs fixing.",
      detailed: "Three times in two weeks suggests a problem with staffing or the rota. Raising it with those responsible means it can be looked at." },
    { text: "Be honest with the consultant tomorrow about how tired you are.",
      brief: "Patients' safety depends on you being fit to work.",
      detailed: "If you are too fatigued to make safe decisions, the consultant needs to know so they can support you. This is a professional responsibility, not a weakness." },
    // distractors
    { text: "Accept it as part of working in intensive care.",
      brief: "Normalises unsafe working.",
      detailed: "Intensive care is demanding, but missing all breaks and minimum rest repeatedly isn't safe or acceptable." },
    { text: "Phone in sick tomorrow to get some rest.",
      brief: "Not honest unless you are unwell, and leaves the unit short.",
      detailed: "If you're too tired to work safely, you should say so honestly rather than call in sick." },
    { text: "Have strong coffee before your next shift and carry on.",
      brief: "Doesn't address the underlying problem.",
      detailed: "Caffeine may help briefly, but it doesn't make you safe after inadequate rest, and the problem will continue." },
    { text: "Arrange to swap tomorrow's shift informally with a colleague who is less tired.",
      brief: "May leave a colleague tired, and doesn't fix the rota.",
      detailed: "Swaps can help, but informal swaps bypass the rota and don't address the pattern." },
    { text: "Post about the conditions on social media to raise awareness.",
      brief: "Bypasses routes that can fix the problem.",
      detailed: "Public awareness has its place, but posting online won't fix your rota and could identify colleagues or patients." }
  ],
  explanation: {
    issue: "This tests how you respond to unsafe working patterns, protecting patients and yourself through proper routes.",
    keyDetails: "No breaks in 13 hours, and less than the minimum rest before your next shift. It has happened repeatedly. You are exhausted.",
    reasoning: "{k1} records it, {k2} addresses the pattern, and {k3} protects patients tomorrow. The distractors accept it ({d1}, {d3}), are dishonest ({d2}), bypass proper routes ({d4}), or go public ({d5}).",
    competing: "{d4} is the tempting option, as swaps can help, but an informal swap doesn't fix the rota and may tire a colleague."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, making sure fatigue doesn't put patients at risk." }
  ],
  tags: ["fatigue", "exception reporting", "rest breaks", "intensive care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-171", letters: "DEACB", format: "ranking", difficulty: "moderate",
  title: "Detained, and refusing antibiotics", setting: "Psychiatry", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Capacity assessment", "Mental Health Act", "Communication"],
  stem:
    "You are an F2 doctor on an adult psychiatric ward. Mr Rowe, 40, is detained under the Mental Health Act for treatment of schizophrenia. He has developed cellulitis of his leg, and the medical team recommends IV antibiotics.\n\n" +
    "He refuses, saying the nurses want to poison him.",
  options: [
    { text: "Explore his concerns, and explain the treatment in simple terms.",
      brief: "Understanding his fears may help him accept treatment.",
      detailed: "His fear may be linked to his illness, but listening and explaining calmly may help him accept treatment. It also gives you information relevant to his capacity." },
    { text: "Assess his capacity to decide about the antibiotics, with senior support.",
      brief: "Detention doesn't mean he lacks capacity for this decision.",
      detailed: "Capacity is decision-specific. His belief that he will be poisoned may affect his ability to weigh up the treatment, but this needs assessing, with senior help." },
    { text: "Ask the medical team whether oral antibiotics would be an alternative.",
      brief: "An alternative he accepts may be better than one he refuses.",
      detailed: "He may accept tablets more readily than a drip. It ranks third because his understanding and capacity need addressing first." },
    { text: "Accept his refusal and document it, as patients can refuse treatment.",
      brief: "His refusal may be affected by his illness, and needs assessing.",
      detailed: "Patients with capacity can refuse, but his belief about being poisoned raises doubt that needs assessing before accepting his refusal." },
    { text: "Give the antibiotics under the Mental Health Act, as he is detained.",
      brief: "The Act covers treatment for mental disorder, not unrelated physical illness.",
      detailed: "Detention under the Mental Health Act allows treatment for his mental disorder, not for an unrelated physical illness like cellulitis. Treating him against his will would need another legal basis, such as the Mental Capacity Act if he lacks capacity." }
  ],
  explanation: {
    issue: "This tests your understanding of capacity and consent for physical treatment in a patient detained under the Mental Health Act.",
    keyDetails: "He is detained for schizophrenia. The cellulitis is unrelated. His refusal is based on a belief that may be linked to his illness.",
    reasoning: "{1} explores his concerns, {2} assesses capacity, and {3} looks for an alternative. {4} accepts the refusal without assessment, and {5} misuses the Mental Health Act.",
    competing: "Some would assess capacity first. The key starts with exploring his concerns, which is part of any capacity assessment and may resolve the refusal."
  },
  refs: [
    { ref: "mca1", note: "Capacity is decision-specific." },
    { ref: "consent", note: "Consent for physical treatment." }
  ],
  tags: ["Mental Health Act", "capacity", "refusal", "physical health"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-172", letters: "ADG", format: "multiple_choice", difficulty: "easy",
  title: "A handover sheet on the bus", setting: "General surgery", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Information governance", "Confidentiality", "Reporting"],
  stem:
    "You are an F2 doctor in general surgery. On the bus home, you find a printed surgical handover sheet on the seat next to you. It lists patients' names, dates of birth and diagnoses from your hospital.",
  options: [
    // keyed
    { text: "Keep it safe and return it for confidential disposal.",
      brief: "Protects patients' information.",
      detailed: "The sheet contains confidential information. Keeping it safe and disposing of it through the hospital's confidential waste protects the patients." },
    { text: "Report it as an information governance incident.",
      brief: "The trust needs to know about the breach.",
      detailed: "A lost handover sheet is a data breach. Reporting it lets the trust assess the risk and learn from it." },
    { text: "Let the surgical team know a sheet was found.",
      brief: "Helps them check their handover practice.",
      detailed: "The team may not know a sheet was lost. Telling them helps prevent it happening again." },
    // distractors
    { text: "Leave it on the bus, as it isn't yours.",
      brief: "Leaves confidential information exposed.",
      detailed: "It isn't yours, but leaving it means others could read it." },
    { text: "Put it in a bin at the bus stop.",
      brief: "Ordinary bins aren't secure.",
      detailed: "This gets rid of it, but a public bin isn't secure, and others could find and read it." },
    { text: "Take a photo of it to show the surgical team, then throw it away.",
      brief: "Creates another copy of confidential information.",
      detailed: "Photographing it creates a second copy of patients' confidential details on your personal phone, which adds to the breach rather than containing it." },
    { text: "Read it to find out whose it is.",
      brief: "Reads confidential information unnecessarily.",
      detailed: "This seems sensible, but you don't need to read patient details to report it." },
    { text: "Recycle it at home.",
      brief: "Household recycling isn't secure.",
      detailed: "Household recycling isn't confidential disposal, and the sheet could still be read by others before it is destroyed." }
  ],
  explanation: {
    issue: "This tests whether you protect confidential information you find, and report the breach.",
    keyDetails: "The sheet contains identifiable information. It was left in public. It belongs to your hospital.",
    reasoning: "{k1} secures it, {k2} reports the breach, and {k3} helps prevent another. The distractors leave it exposed ({d1}, {d2}, {d5}), add to the breach ({d3}), or read it unnecessarily ({d4}).",
    competing: "{d4} may seem reasonable, but you don't need to read the details to report it."
  },
  refs: [
    { ref: "confidentiality", note: "Protecting patients' information and reporting breaches." }
  ],
  tags: ["confidentiality", "information governance", "handover", "data breach"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-173", letters: "EDACB", format: "ranking", difficulty: "moderate",
  title: "Safety-netting that fell short", setting: "Out-of-hours / community", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Responding to feedback", "Safety-netting", "Reflection"],
  stem:
    "You are an F2 doctor in an out-of-hours GP service. A GP who audits telephone consultations reviews some of your recent calls. She tells you that in several, your safety-netting advice was too vague, for example \"call back if it gets worse\".\n\n" +
    "You feel your advice was reasonable for the patients involved.",
  options: [
    { text: "Ask her for specific examples, and how you could improve.",
      brief: "Specific feedback helps you change your practice.",
      detailed: "Understanding exactly what was missing, such as which symptoms to watch for and when to seek help, gives you something concrete to improve." },
    { text: "Listen to some of your recorded calls to identify patterns.",
      brief: "Reviewing your own practice helps you see the gaps.",
      detailed: "Hearing your own calls can reveal habits you weren't aware of. It ranks second because her specific feedback guides what to look for." },
    { text: "Use a structured approach to safety-netting in future calls.",
      brief: "Specific advice protects patients.",
      detailed: "Safety-netting should tell patients what to look out for, what to do, and how soon. Adopting a structure helps. It ranks third because understanding the feedback comes first." },
    { text: "Explain that the patients were low risk, so detailed safety-netting wasn't needed.",
      brief: "Defensive; low-risk patients still need clear advice.",
      detailed: "Your judgement may have been reasonable, but even low-risk patients need clear advice about what to watch for." },
    { text: "Ignore the feedback, as she isn't your supervisor.",
      brief: "Feedback is valuable whoever gives it.",
      detailed: "She audits calls as part of the service's quality process, and her feedback is relevant to patient safety." }
  ],
  explanation: {
    issue: "This tests how you respond to feedback that challenges your practice: openly and constructively.",
    keyDetails: "The feedback is specific and comes from a quality review. You feel your advice was reasonable.",
    reasoning: "{1} seeks specific feedback, {2} reviews your practice, and {3} improves it. {4} is defensive, and {5} dismisses it.",
    competing: "Some would adopt a structured approach first. The key starts with understanding the feedback, which shows what to change."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, reflecting on feedback and improving practice." }
  ],
  tags: ["feedback", "safety-netting", "telephone consultations", "out-of-hours"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-174", letters: "BCH", format: "multiple_choice", difficulty: "hard",
  title: "Not yet examined", setting: "Acute medical unit", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Challenging stigma", "Clinical assessment", "Advocacy"],
  stem:
    "You are an F2 doctor on the acute medical unit. Mr Kane, 45, has schizophrenia and was admitted six hours ago with shortness of breath. His notes say \"known psychosis — approach with caution\", and no doctor has yet examined him.\n\n" +
    "When you approach, he is calm and polite, but breathless.",
  options: [
    // keyed
    { text: "Examine him yourself, explaining what you're doing as you go.",
      brief: "He needs assessment now.",
      detailed: "He has been breathless for six hours without a medical examination. He is calm, so there's no reason to delay, and explaining as you go helps him feel at ease." },
    { text: "Tell the nurse in charge and your registrar about the delay.",
      brief: "A six-hour delay in assessment needs raising.",
      detailed: "This delay needs to be known so his care can be prioritised and the team can understand how it happened." },
    { text: "Raise with the team how the note may have delayed his care.",
      brief: "Labels can lead to unfair treatment.",
      detailed: "The note may have led staff to avoid him. Raising this constructively helps prevent the same thing happening to other patients with mental illness." },
    // distractors
    { text: "Ask the psychiatry liaison team to see him before you examine him.",
      brief: "Delays a medical assessment he needs now.",
      detailed: "Liaison psychiatry may be helpful, but he needs a medical assessment for his breathlessness now." },
    { text: "Ask security to be present while you examine him.",
      brief: "Unnecessary for a calm patient, and stigmatising.",
      detailed: "Safety matters, but he is calm and polite. Bringing security would be unnecessary and could distress him." },
    { text: "Assume his breathlessness may be anxiety related to his illness.",
      brief: "A dangerous assumption without assessment.",
      detailed: "Anxiety can cause breathlessness, but assuming it without examination risks missing a serious condition such as pneumonia or a pulmonary embolism." },
    { text: "Ask a nurse to do his observations and call you if they're abnormal.",
      brief: "Observations alone aren't a medical assessment.",
      detailed: "Observations are needed, but he also needs to be examined." },
    { text: "Remove the note from his record.",
      brief: "You can't remove another clinician's entry.",
      detailed: "The note may be unhelpful, but you can't delete it. You can raise it with the team and add your own observations." }
  ],
  explanation: {
    issue: "This tests whether you treat a patient with mental illness fairly, assessing his physical symptoms promptly and challenging a label that has delayed his care.",
    keyDetails: "He has been breathless for six hours without examination. He is calm. A note in his record seems to have led staff to avoid him.",
    reasoning: "{k1} assesses him, {k2} raises the delay, and {k3} addresses the label. The distractors delay assessment ({d1}, {d4}), stigmatise him ({d2}), make a dangerous assumption ({d3}), or alter the record ({d5}).",
    competing: "{d1} is the hard distractor: liaison psychiatry can help, but his physical symptoms need assessing first."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients fairly and without prejudice." },
    { ref: "equality", note: "Fair treatment of people with mental illness." }
  ],
  tags: ["stigma", "mental illness", "physical health", "acute medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-175", letters: "ADCB", format: "ranking", difficulty: "moderate",
  title: "Just one selfie", setting: "Emergency department", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Professional boundaries", "Confidentiality", "Social media"],
  stem:
    "You are an F2 doctor in the Emergency Department. You have just treated a well-known footballer for a minor ankle injury. As he gets ready to leave, he cheerfully offers to take a selfie with you.\n\n" +
    "Other patients are waiting nearby.",
  options: [
    { text: "Thank him, and politely decline.",
      brief: "Friendly, and maintains a professional relationship.",
      detailed: "Photos with patients, especially in a clinical area, can compromise confidentiality, including of other patients, and blur boundaries. A friendly refusal is appropriate." },
    { text: "Suggest he contacts the trust's communications team if he'd like a photo with staff.",
      brief: "Redirects a request to the people who manage it.",
      detailed: "Some trusts arrange photos with well-known visitors in suitable settings. Pointing him there is polite, though not necessary. It ranks second because declining is the main point." },
    { text: "Take the photo, but ask him not to post it.",
      brief: "Still takes a personal photo with a patient in a clinical area.",
      detailed: "This seems a compromise, but you can't control what happens to the photo, and other patients may be in the background." },
    { text: "Take the selfie and post it on your own social media.",
      brief: "Breaches his confidentiality and professional standards.",
      detailed: "Posting a photo with a patient discloses that he was treated, and is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you maintain professional boundaries when a well-known patient offers a friendly gesture.",
    keyDetails: "He offered, cheerfully. You are in a clinical area with other patients. He is well known.",
    reasoning: "{1} declines politely, and {2} redirects the request. {3} still takes a personal photo, and {4} also discloses his treatment publicly.",
    competing: "Some would see {3} as harmless, but you can't control what happens to the photo once it's taken."
  },
  refs: [
    { ref: "socialmedia", note: "Doctors' use of social media and photos with patients." },
    { ref: "boundaries", note: "Maintaining professional boundaries." }
  ],
  tags: ["boundaries", "social media", "celebrities", "photos"]
}
];
