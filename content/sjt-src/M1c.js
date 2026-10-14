// Mock 1, part 3 (sjt-226 to sjt-237). Pool mock-1: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-1";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-226", pool, letters: "FGH", format: "multiple_choice", difficulty: "moderate",
  title: "Talked over", setting: "Out-of-hours / community", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communication with people with learning disabilities", "Dignity", "Involving patients"],
  stem:
    "You are an F2 doctor on an out-of-hours home visit. Mr Price, 32, has a learning disability and lives in supported accommodation. He has had diarrhoea and vomiting for two days.\n\n" +
    "Two support workers and his mother are in the room. Everyone answers your questions for him, and he looks down at the floor.",
  options: [
    // keyed
    { text: "Speak to Mr Price directly, using simple language.",
      brief: "He should be at the centre of his own consultation.",
      detailed: "People with learning disabilities are often spoken over. Speaking to him directly, in plain language, shows respect and may give you important information only he can provide." },
    { text: "Ask him and those who know him what helps him communicate.",
      brief: "He may have preferred ways of communicating.",
      detailed: "He may communicate best with more time, pictures, or a particular person's support. Asking helps you adapt." },
    { text: "Check what he understands, and involve him in decisions.",
      brief: "He has the right to be involved in his own care.",
      detailed: "Adults are presumed to have capacity. Checking what he understands, and involving him, respects his rights." },
    // distractors
    { text: "Take the history from the support workers, as it's quicker.",
      brief: "Their input is useful, but he should be asked first.",
      detailed: "His carers know him well and can add important information, which is why this is tempting. But leaving him out of his own consultation isn't appropriate." },
    { text: "Assume he lacks capacity, given his learning disability.",
      brief: "A learning disability doesn't mean someone lacks capacity.",
      detailed: "Capacity is decision-specific and must be presumed unless shown otherwise." },
    { text: "Ask his mother to answer on his behalf.",
      brief: "He should be asked first.",
      detailed: "His mother's views matter, but he should be able to speak for himself where he can." },
    { text: "Speak more loudly and slowly to him.",
      brief: "Volume doesn't help understanding.",
      detailed: "This may feel patronising and doesn't address how he best communicates." },
    { text: "Give him a written leaflet about gastroenteritis to read later.",
      brief: "May not be accessible to him.",
      detailed: "Written information can help, but only if it's in a format he can use, such as easy-read." }
  ],
  explanation: {
    issue: "This tests whether you involve a patient with a learning disability in his own consultation and adapt your communication.",
    keyDetails: "Everyone is speaking for him. He looks withdrawn. He is presumed to have capacity.",
    reasoning: "{k1} speaks to him, {k2} adapts your communication, and {k3} involves him in decisions. The distractors exclude him ({d1}, {d3}), make assumptions ({d2}), patronise him ({d4}), or give inaccessible information ({d5}).",
    competing: "{d1} is the tempting option because carers can add a lot, but he should be asked first."
  },
  refs: [
    { ref: "equality", note: "Reasonable adjustments for disabled people." },
    { ref: "mca1", note: "Presumption of capacity." }
  ],
  tags: ["learning disability", "communication", "dignity", "home visits"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-227", pool, letters: "EACDB", format: "ranking", difficulty: "easy",
  title: "Because of her headscarf", setting: "Elderly care ward", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Colleagues, culture and safety", "Patients, partnership and communication"],
  competencies: ["Challenging discrimination", "Supporting colleagues", "Patient care"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mr Bates, 80, who is stable, refuses to let Dr Malik, a Muslim F1 who wears a headscarf, examine him, saying he wants \"a proper British doctor\".\n\n" +
    "Dr Malik walks away looking upset.",
  options: [
    { text: "Tell Mr Bates calmly that Dr Malik is a qualified doctor on his team.",
      brief: "Challenges the remark calmly and keeps the focus on his care.",
      detailed: "A calm response makes clear that his comment is unacceptable, while trying to understand any underlying concern. He is entitled to care but not to discriminate against staff." },
    { text: "Check on Dr Malik privately, and offer support.",
      brief: "She has experienced discrimination and may need support.",
      detailed: "Being rejected because of her religion is hurtful. Checking on her and offering support shows solidarity. It ranks second because addressing the remark comes first." },
    { text: "Report the incident in line with the trust's policy on discriminatory behaviour.",
      brief: "Trusts have policies on abuse of staff.",
      detailed: "Recording it supports Dr Malik and the trust's response, and should be done with her involvement. It ranks third because the immediate response matters more." },
    { text: "Swap patients with Dr Malik so the examination can go ahead.",
      brief: "Practical, but accommodates discrimination without addressing it.",
      detailed: "This gets him examined, but sends the message that discriminatory requests are accepted, and leaves Dr Malik unsupported." },
    { text: "Tell Mr Bates that, as he's being racist, the team won't treat him.",
      brief: "Patients must still receive care.",
      detailed: "His behaviour is unacceptable, but refusing care isn't appropriate, and this is likely to escalate things." }
  ],
  explanation: {
    issue: "This tests how you respond to a patient's discriminatory remark about a colleague: challenging it, supporting her, and keeping him safe.",
    keyDetails: "He is stable. The remark targets her religion. She is upset.",
    reasoning: "{1} challenges the remark calmly, {2} supports Dr Malik, and {3} records it. {4} accommodates discrimination, and {5} withdraws care.",
    competing: "Some would check on Dr Malik first. That's reasonable; the key addresses the remark first because it happened in front of you and needs a response."
  },
  refs: [
    { ref: "equality", note: "Harassment related to religion." },
    { ref: "gmp", note: "Domain 3, challenging discrimination and supporting colleagues." }
  ],
  tags: ["discrimination", "religion", "colleagues", "patients"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-228", pool, letters: "ABE", format: "multiple_choice", difficulty: "moderate",
  title: "Hit during personal care", setting: "Elderly care ward", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Managing aggression", "Delirium", "Supporting colleagues"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mrs Grey, 88, has advanced dementia and was admitted with a urinary tract infection. During personal care, she hits a healthcare assistant, Jo, in the face.\n\n" +
    "Jo is shaken but not seriously hurt. Mrs Grey is agitated and calling out.",
  options: [
    // keyed
    { text: "Check that Jo is all right.",
      brief: "She has been hurt and may be upset.",
      detailed: "Even if not seriously injured, she may be shaken. Checking on her shows support." },
    { text: "Assess Mrs Grey for pain or delirium.",
      brief: "Her behaviour may be a sign of an unmet need.",
      detailed: "People with dementia often become agitated because of pain, delirium, or fear. Her infection may be making her more confused. Finding the cause helps." },
    { text: "Record the incident, and review how her care is given.",
      brief: "A plan can make care safer for her and staff.",
      detailed: "Recording the incident, and reviewing her care, for example with a calm approach or two staff, protects both her and staff." },
    // distractors
    { text: "Prescribe a sedative to calm her down.",
      brief: "Sedation should be a last resort.",
      detailed: "Sedatives can worsen delirium and cause falls. Looking for the cause comes first." },
    { text: "Tell Jo that aggression is part of the job.",
      brief: "Dismisses her experience.",
      detailed: "Staff do face aggression, but this minimises what happened." },
    { text: "Call the police.",
      brief: "Not appropriate for a patient with dementia and delirium.",
      detailed: "Her behaviour is likely caused by her illness, not intent." },
    { text: "Ask Mrs Grey's family to do her personal care instead.",
      brief: "Passes responsibility to her family.",
      detailed: "Family may help calm her, but personal care is the ward's responsibility." },
    { text: "Ask staff to avoid personal care until she calms down.",
      brief: "Leaves her without care.",
      detailed: "A short pause may help, but care can't be avoided indefinitely." }
  ],
  explanation: {
    issue: "This tests how you respond to aggression from a patient with dementia: supporting staff and looking for the cause.",
    keyDetails: "She has dementia and a UTI. She is agitated. A colleague was hit.",
    reasoning: "{k1} supports Jo, {k2} looks for a cause, and {k3} makes care safer. The distractors sedate first ({d1}), dismiss Jo ({d2}), overreact ({d3}), or avoid the problem ({d4}, {d5}).",
    competing: "{d1} is the tempting option, but sedation can worsen delirium and should be a last resort."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, caring for patients with dementia; Domain 3, supporting colleagues." }
  ],
  tags: ["aggression", "dementia", "delirium", "elderly care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-229", pool, letters: "ABDC", format: "ranking", difficulty: "hard",
  title: "A second signature", setting: "Out-of-hours / community", attribute: P,
  topic: "Honesty with patients and colleagues",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honesty", "Records", "Integrity under pressure"],
  stem:
    "You are an F2 doctor in an out-of-hours GP service. Dr Patel, a GP colleague, verified the expected death of a care home resident on his own earlier tonight.\n\n" +
    "The care home's paperwork asks for a second person's signature as a witness. Dr Patel asks you to sign it, saying, \"It's just a formality.\" You weren't there.",
  options: [
    { text: "Decline, as you can't witness something you didn't see.",
      brief: "Signing would be a false statement.",
      detailed: "A witness signature says you were present. Signing it would be dishonest, however minor it seems." },
    { text: "Suggest he records clearly that he verified the death alone, and why.",
      brief: "An honest record is better than a false one.",
      detailed: "The care home's form may not reflect legal requirements, and an honest note explaining what happened is better than a false signature." },
    { text: "Ask the clinical lead how the service handles this.",
      brief: "The lead can clarify the process.",
      detailed: "The service may have a policy for situations like this. It ranks third because declining comes first." },
    { text: "Sign it, as it's only a formality.",
      brief: "Signing would be dishonest.",
      detailed: "Even a formality is a declaration that you were present. This is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you refuse to sign a document that would be false, even when a colleague calls it a formality.",
    keyDetails: "You weren't present. The form asks for a witness. Your colleague is senior.",
    reasoning: "{1} declines honestly, {2} suggests an honest alternative, and {3} seeks advice. {4} is dishonest.",
    competing: "This is hard because the request seems minor. The key reflects that signing as a witness is a factual declaration."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in documents." }
  ],
  tags: ["honesty", "signatures", "verification of death", "out-of-hours"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-230", pool, letters: "CDE", format: "multiple_choice", difficulty: "moderate",
  title: "\"Do you know who I am?\"", setting: "General surgery", attribute: P,
  topic: "Equality and fair treatment of patients",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Fair treatment", "Communication", "Escalation"],
  stem:
    "You are an F2 doctor in general surgery. Mr Hardy, 60, a local councillor, is waiting for a planned hernia repair and is fourth on today's list.\n\n" +
    "He asks you to move him to the top, saying he has important meetings and that the hospital should look after people who \"make decisions about its funding\".",
  options: [
    // keyed
    { text: "Explain that the list order is decided on clinical grounds.",
      brief: "Treatment should be fair and based on need.",
      detailed: "Explaining politely how the list is decided helps him understand why his status doesn't change it." },
    { text: "Tell him how he can raise concerns if he's unhappy.",
      brief: "Gives him a proper route.",
      detailed: "He can raise concerns through PALS or the complaints process." },
    { text: "Let the consultant know about his request.",
      brief: "Keeps the team informed.",
      detailed: "The consultant may want to speak to him, and should know about the request." },
    // distractors
    { text: "Move him up the list, as he is influential.",
      brief: "Unfair to other patients.",
      detailed: "Prioritising him because of his status would be unfair." },
    { text: "Ask the consultant whether he can be moved up the list.",
      brief: "Treats his status as a reason for priority.",
      detailed: "Asking on his behalf suggests his status is a valid reason, which it isn't." },
    { text: "Tell him you'll see what you can do.",
      brief: "Suggests special treatment might be possible.",
      detailed: "This avoids conflict but implies his status could matter." },
    { text: "Tell the other patients that he asked to jump the queue.",
      brief: "Breaches his privacy and is unprofessional.",
      detailed: "This may stir up conflict and breaches his confidentiality." },
    { text: "Ignore his request.",
      brief: "He deserves an explanation.",
      detailed: "A brief explanation is more respectful than ignoring him." }
  ],
  explanation: {
    issue: "This tests whether you treat patients fairly when one seeks priority because of his status.",
    keyDetails: "He is fourth on the list. His request is based on status. The list is clinically ordered.",
    reasoning: "{k1} explains fairly, {k2} gives him a route, and {k3} informs the consultant. The distractors give him priority or imply it ({d1}, {d2}, {d3}), breach his privacy ({d4}), or ignore him ({d5}).",
    competing: "{d2} is the hard distractor: involving the consultant is right, but asking on his behalf treats his status as relevant."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients fairly." },
    { ref: "equality", note: "Fair treatment of all patients." }
  ],
  tags: ["fairness", "VIP patients", "surgery", "theatre lists"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-231", pool, letters: "AEDCB", format: "ranking", difficulty: "moderate",
  title: "Anticoagulation forgotten", setting: "Orthopaedics", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Candour", "Patient safety", "Owning mistakes"],
  stem:
    "You are an F2 doctor in orthopaedics. Mr Day, 70, who takes apixaban for atrial fibrillation, had a hip replacement two days ago. The plan was to restart his apixaban the day after surgery.\n\n" +
    "You were responsible for restarting it, but forgot. A pharmacist notices 36 hours late.",
  options: [
    { text: "Check Mr Day for clots or stroke, and restart his apixaban.",
      brief: "His safety comes first.",
      detailed: "Missing anticoagulation raises his risk of stroke and clots. Checking him and restarting it promptly reduces the risk." },
    { text: "Tell your registrar what happened.",
      brief: "Your senior needs to know.",
      detailed: "Your registrar should know, so they can make sure his care is right and support you." },
    { text: "Explain to Mr Day what happened, and apologise.",
      brief: "He has a right to know.",
      detailed: "Being open with him about the missed doses and apologising is part of your professional duty of candour. It ranks third because his safety and your senior come first." },
    { text: "Report the missed doses through the trust's incident reporting system.",
      brief: "Supports learning.",
      detailed: "Reporting helps the team prevent similar errors. It ranks fourth because it's less urgent." },
    { text: "Restart it, and record that it was paused intentionally.",
      brief: "Falsifies the record.",
      detailed: "This hides your error and is dishonest. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you put a patient's safety first after your own error, and are open about it.",
    keyDetails: "Apixaban was missed for 36 hours. He has atrial fibrillation and has had surgery. It was your responsibility.",
    reasoning: "{1} protects him, {2} informs your senior, {3} is open with him, and {4} supports learning. {5} falsifies the record.",
    competing: "Some would tell Mr Day before the registrar. Either is reasonable; the key puts the registrar first because they may need to review him."
  },
  refs: [
    { ref: "candour", note: "Being open with patients when something goes wrong." }
  ],
  tags: ["candour", "anticoagulation", "errors", "orthopaedics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-232", pool, letters: "BDH", format: "multiple_choice", difficulty: "easy",
  title: "Fever on chemotherapy", setting: "Oncology & palliative care", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Prioritisation", "Neutropenic sepsis", "Delegation"],
  stem:
    "You are an F2 doctor on an oncology ward. You are writing up chemotherapy prescriptions for tomorrow's day-unit patients, which the pharmacy needs by 17:00.\n\n" +
    "A nurse tells you that Mr Shaw, 58, who had chemotherapy eight days ago, has just been admitted with a temperature of 38.6°C and shivering.",
  options: [
    // keyed
    { text: "See Mr Shaw straight away.",
      brief: "Possible neutropenic sepsis is an emergency.",
      detailed: "Fever after chemotherapy may be neutropenic sepsis, which can be fatal without prompt treatment." },
    { text: "Make sure he gets antibiotics within an hour.",
      brief: "Prompt antibiotics save lives.",
      detailed: "Guidance recommends antibiotics within one hour for suspected neutropenic sepsis, without waiting for blood results." },
    { text: "Let the pharmacy know the prescriptions may be a little late.",
      brief: "Keeps the pharmacy informed.",
      detailed: "The chemotherapy prescriptions matter, but they can wait. Letting the pharmacy know prevents a problem tomorrow." },
    // distractors
    { text: "Finish the chemotherapy prescriptions first.",
      brief: "Delays an emergency.",
      detailed: "The prescriptions are important but not urgent compared with possible sepsis." },
    { text: "Ask the nurse to take bloods, and give antibiotics once the neutrophil count is back.",
      brief: "Waiting for results delays antibiotics.",
      detailed: "Blood tests are needed, but antibiotics shouldn't wait for the results." },
    { text: "Ask the nurse to give paracetamol and recheck his temperature in an hour.",
      brief: "May mask fever and delay treatment.",
      detailed: "This delays assessment of a potential emergency." },
    { text: "Hand the prescriptions to another doctor who doesn't know the patients.",
      brief: "Unsafe handover of complex prescriptions.",
      detailed: "Chemotherapy prescribing needs care and information." },
    { text: "Ask the day unit to postpone tomorrow's patients.",
      brief: "Unnecessary; the prescriptions can still be done today.",
      detailed: "There's no need to postpone treatment; the prescriptions can be done after the emergency." }
  ],
  explanation: {
    issue: "This tests whether you prioritise a possible emergency over important routine work.",
    keyDetails: "Fever eight days after chemotherapy suggests possible neutropenic sepsis. The prescriptions are due at 17:00.",
    reasoning: "{k1} sees him, {k2} gets prompt antibiotics, and {k3} informs the pharmacy. The distractors delay treatment ({d1}, {d2}, {d3}), or act unsafely or unnecessarily ({d4}, {d5}).",
    competing: "{d2} is the tempting option, but antibiotics shouldn't wait for blood results."
  },
  refs: [
    { ref: "sepsis", note: "Prompt recognition and treatment of sepsis." }
  ],
  tags: ["neutropenic sepsis", "prioritisation", "oncology", "chemotherapy"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-233", pool, letters: "CEADB", format: "ranking", difficulty: "moderate",
  title: "Can I look after my baby?", setting: "Acute medical unit", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communicating uncertainty", "Empathy", "Planning support"],
  stem:
    "You are an F2 doctor on the acute medical unit. Ms Ross, 30, has had a stroke and has weakness in her left arm. Her baby is four months old.\n\n" +
    "She asks you, tearfully, whether she will be able to look after her baby.",
  options: [
    { text: "Ask her what worries her most, and what support she has at home.",
      brief: "Understanding her worries helps you respond.",
      detailed: "She may be worried about feeding, carrying the baby, or being alone. Knowing what matters most helps you respond honestly and practically." },
    { text: "Be honest that recovery is uncertain this early, and that the team will help her plan.",
      brief: "Honest without false hope.",
      detailed: "Recovery after stroke varies, especially in the early days. Being honest, and explaining that therapists will help her plan, gives her realistic hope." },
    { text: "Arrange for the occupational therapist to discuss practical support for caring for her baby.",
      brief: "Practical support is available.",
      detailed: "Occupational therapists can help with practical adaptations. It ranks third because she needs a response from you first." },
    { text: "Reassure her that she'll definitely be able to care for her baby.",
      brief: "False reassurance.",
      detailed: "This may be what she wants to hear, but you can't know." },
    { text: "Tell her she probably won't be able to care for her baby on her own.",
      brief: "Premature and distressing.",
      detailed: "She may need help, but saying this now, without understanding her situation, could be devastating." }
  ],
  explanation: {
    issue: "This tests how you respond to a patient's fears after a serious diagnosis, honestly and practically.",
    keyDetails: "She is young and has a baby. Her recovery is uncertain. She is distressed.",
    reasoning: "{1} explores her worries, {2} is honest, and {3} arranges practical help. {4} gives false hope, and {5} is premature.",
    competing: "The order of {4} and {5} is close. The key ranks {5} last because it is premature and could cause unnecessary distress about something central to her life."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, communicating honestly and supporting patients." }
  ],
  tags: ["stroke", "uncertainty", "young adults", "parenting"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-234", pool, letters: "ACG", format: "multiple_choice", difficulty: "hard",
  title: "A result after she's gone", setting: "Emergency department", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Colleagues, culture and safety", "Patients, partnership and communication"],
  competencies: ["Acting on results", "Patient safety", "Communication"],
  stem:
    "You are an F2 doctor on an evening shift in the Emergency Department. You see a CT head report for Mrs Lane, 79, who takes apixaban. It shows a small subdural haematoma.\n\n" +
    "Dr Kay, who requested the scan, discharged her two hours ago before the report came back and has gone home.",
  options: [
    // keyed
    { text: "Ask Mrs Lane to come back to the department now.",
      brief: "A bleed in someone on an anticoagulant needs urgent review.",
      detailed: "A subdural haematoma in a patient taking apixaban may need urgent management, including reversing the anticoagulant. She needs to come back." },
    { text: "Inform the ED consultant.",
      brief: "A senior should oversee her care.",
      detailed: "The consultant needs to know, and may involve neurosurgery or arrange transport." },
    { text: "Document what happened, and let Dr Kay know.",
      brief: "Keeps the record clear and helps Dr Kay learn.",
      detailed: "Dr Kay should know the outcome. A clear record helps the department review the process." },
    // distractors
    { text: "Email Dr Kay so she can deal with it tomorrow.",
      brief: "Too slow.",
      detailed: "Mrs Lane needs action now." },
    { text: "Phone Mrs Lane and advise her to stop her apixaban.",
      brief: "She needs assessment, not just advice.",
      detailed: "Stopping apixaban may be needed, but she also needs urgent assessment." },
    { text: "Ask her GP to see her tomorrow.",
      brief: "Too slow for a brain bleed.",
      detailed: "She needs assessment in hospital tonight." },
    { text: "Leave a note for the morning team.",
      brief: "Delays urgent action.",
      detailed: "The morning team will be too late." },
    { text: "Report Dr Kay for discharging her before the result.",
      brief: "Focuses on blame rather than the patient.",
      detailed: "The process may need reviewing, but the patient comes first." }
  ],
  explanation: {
    issue: "This tests whether you act on a result for a patient who has been discharged, when the requesting doctor isn't available.",
    keyDetails: "The CT shows a bleed. She takes apixaban. She has gone home.",
    reasoning: "{k1} gets her back, {k2} informs the consultant, and {k3} closes the loop. The distractors delay ({d1}, {d3}, {d4}), give advice without assessment ({d2}), or focus on blame ({d5}).",
    competing: "{d2} is the hard distractor: stopping apixaban may be part of the plan, but she needs to be assessed."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting on results and making sure care continues." }
  ],
  tags: ["results", "subdural haematoma", "anticoagulation", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-235", pool, letters: "BDACE", format: "ranking", difficulty: "moderate",
  title: "\"So that it ends quicker\"", setting: "General medical ward", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["End-of-life care", "Exploring distress", "Symptom control"],
  stem:
    "You are an F2 doctor on a general medical ward. Mr Brooks, 75, has terminal lung cancer and is receiving palliative care. He is in pain and breathless.\n\n" +
    "He asks you to increase his morphine \"so that it ends quicker\".",
  options: [
    { text: "Ask him gently what he means, and about how he is feeling.",
      brief: "His request may reflect suffering that can be addressed.",
      detailed: "He may be in uncontrolled pain, frightened, or feel he is a burden. Exploring this helps you understand and respond." },
    { text: "Make sure his symptoms are reviewed, involving the palliative care team.",
      brief: "Better symptom control may relieve his suffering.",
      detailed: "His pain and breathlessness may be better controlled. The palliative care team can help." },
    { text: "Explain that you can't give treatment intended to end his life, but can make him more comfortable.",
      brief: "Honest about what is allowed, while focusing on comfort.",
      detailed: "Intentionally ending life is illegal, but medicines to relieve suffering can be given even if they may shorten life slightly. Explaining this honestly helps him." },
    { text: "Tell him that isn't something doctors can discuss.",
      brief: "Closes down the conversation.",
      detailed: "This may leave him feeling unheard and doesn't address his suffering." },
    { text: "Increase his morphine, as he asked, to end his life sooner.",
      brief: "Increasing it with the intention of ending his life is illegal.",
      detailed: "Increasing doses to relieve symptoms is appropriate, but not with the intention of ending his life. This is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to a dying patient's request to hasten death: exploring his suffering and focusing on comfort.",
    keyDetails: "He has terminal cancer and is in pain. He wants his life to end sooner. Assisted dying is illegal.",
    reasoning: "{1} explores his distress, {2} improves his symptoms, and {3} explains honestly. {4} closes the conversation, and {5} is illegal.",
    competing: "Some would explain the law first. The key starts with exploring, because his request may reflect suffering that can be relieved."
  },
  refs: [
    { ref: "eol", note: "Caring for patients at the end of life, including requests to hasten death." }
  ],
  tags: ["end of life", "palliative care", "requests to hasten death", "morphine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-236", pool, letters: "BEF", format: "multiple_choice", difficulty: "moderate",
  title: "A partner who seems confused", setting: "General practice", attribute: P,
  topic: "An impaired or unwell colleague",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Patient safety", "Supporting colleagues", "Raising concerns"],
  stem:
    "You are an F2 doctor in a GP practice. The practice manager tells you that Dr Morgan, one of the GP partners, has seemed confused in recent clinics, has missed appointments, and once couldn't remember a patient he'd seen earlier that day.\n\n" +
    "Dr Shah is the senior partner. The practice manager asks you what she should do.",
  options: [
    // keyed
    { text: "Suggest she tells Dr Shah, the senior partner.",
      brief: "Those responsible for the practice need to know.",
      detailed: "A senior partner can speak to Dr Morgan and decide what to do, including protecting patients." },
    { text: "Discuss it with your GP supervisor.",
      brief: "Your supervisor can advise and may act.",
      detailed: "This is a serious concern, and your supervisor can help." },
    { text: "Encourage her to note what she has observed.",
      brief: "Clear facts help those who need to act.",
      detailed: "Dates, missed appointments and specific incidents, recorded factually and without speculation, help the senior partner understand the concern and act fairly." },
    // distractors
    { text: "Speak to Dr Morgan yourself about his memory.",
      brief: "Better coming from a senior colleague.",
      detailed: "A conversation is needed, but a junior raising this with a senior partner may not be appropriate." },
    { text: "Report Dr Morgan to the GMC.",
      brief: "Premature.",
      detailed: "This may be a health issue that can be addressed locally." },
    { text: "Tell her it isn't your place to get involved.",
      brief: "Patient safety is everyone's concern.",
      detailed: "You can advise her on who to speak to." },
    { text: "Suggest she checks Dr Morgan's notes for errors.",
      brief: "Not her role.",
      detailed: "Reviewing clinical notes isn't her role, and should be done by a clinician." },
    { text: "Suggest she waits to see if it gets worse.",
      brief: "Patients may be at risk now.",
      detailed: "Waiting could put patients at risk." }
  ],
  explanation: {
    issue: "This tests how you respond to concerns about a senior colleague's health that may affect patients.",
    keyDetails: "The concerns are specific. Dr Morgan is a senior partner. Patients may be at risk.",
    reasoning: "{k1} directs her to the right person, {k2} involves your supervisor, and {k3} helps make sure the concern is clear and fair. The distractors are inappropriate for your role ({d1}, {d4}), premature ({d2}), or dismissive ({d3}, {d5}).",
    competing: "{d1} is the tempting option, but this conversation is better coming from a senior colleague."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting when a colleague's health may put patients at risk." },
    { ref: "concerns", note: "Raising concerns about colleagues." }
  ],
  tags: ["impaired colleague", "general practice", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-237", pool, letters: "DCBAE", format: "ranking", difficulty: "easy",
  title: "Who was driving?", setting: "Emergency department", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Honesty", "Supporting families", "Timing of information"],
  stem:
    "You are an F2 doctor in the Emergency Department. Mr Fenton, 50, has a broken leg after a car crash. His son, 19, who has minor injuries and is in the next cubicle, was driving. The son has asked to tell his father himself when he feels able to.\n\n" +
    "Mr Fenton's wife asks you not to tell her husband that their son was driving, as he is in pain and she wants to tell him herself later.",
  options: [
    { text: "Listen to her reasons, and explain that you won't lie if he asks you directly.",
      brief: "Respects her wishes about timing without being dishonest.",
      detailed: "Her request is about timing, which you can respect. But if Mr Fenton asks you directly, you can't lie to him." },
    { text: "Suggest she tells him when he's settled, with support if she wants it.",
      brief: "Supports her to share the news at a better time.",
      detailed: "Offering support, such as being there when she tells him, helps her." },
    { text: "Avoid raising it yourself, as it isn't relevant to his treatment.",
      brief: "Reasonable, but doesn't address what you'd say if asked.",
      detailed: "It isn't your role to raise it, but you need to be clear about what you'd do if asked." },
    { text: "Tell Mr Fenton straight away, as he has a right to know.",
      brief: "Overrides a reasonable request about timing.",
      detailed: "He has a right to know, but this isn't urgent for his care, and his wife wants to tell him." },
    { text: "Tell Mr Fenton, if he asks, that his son wasn't driving.",
      brief: "A lie.",
      detailed: "This is dishonest and is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respect a relative's wishes about timing without being dishonest with your patient.",
    keyDetails: "The information isn't relevant to his treatment. His wife wants to tell him herself. He may ask.",
    reasoning: "{1} respects her wishes honestly, {2} supports her, and {3} avoids the issue. {4} overrides her request, and {5} is a lie.",
    competing: "Some would see {4} as more honest. The key reflects that respecting timing isn't dishonest, as long as you don't lie."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty with patients." }
  ],
  tags: ["honesty", "relatives", "timing", "emergency department"]
}
];
