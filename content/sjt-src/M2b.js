// Mock 2, part 2 (sjt-263 to sjt-275). Pool mock-2: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-2";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-263", pool, letters: "CEABD", format: "ranking", difficulty: "moderate",
  title: "A signature for someone else", setting: "Paediatrics", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism", "Safety and quality"],
  competencies: ["Honest record-keeping", "Probity", "Patient safety"],
  stem:
    "You are an F2 doctor in paediatrics. Ava, 9 months, has been on the ward for several weeks. Yesterday a nurse gave her routine immunisations, which had been prescribed, but didn't sign the administration record. That nurse is now on two weeks' leave.\n\n" +
    "Today another nurse asks you to sign the record as the person who gave the vaccines, \"so the chart is complete before the audit\". You weren't on the ward yesterday.",
  options: [
    { text: "Decline, and suggest she adds a dated note explaining the missing signature.",
      brief: "You can't sign for something you didn't do, but the gap can be recorded honestly.",
      detailed: "Signing would create a false record that you gave the vaccines. A dated, signed note explaining that the signature is missing, and how the dose was confirmed (for example from the vaccine stock and batch record), keeps the record accurate and honest. Her personal child health record (the 'red book') should match. It ranks first because it refuses the false entry and offers a proper solution." },
    { text: "Ask the nurse in charge how the ward corrects a missing administration signature.",
      brief: "Most wards have a process for this, and following it keeps the record reliable.",
      detailed: "Missing signatures are a common problem with an established fix. The nurse in charge will know the local process and can make sure it is followed. It ranks second because it is helpful but doesn't, on its own, deal with the request to sign." },
    { text: "Phone the nurse who gave the vaccines to confirm that they were given.",
      brief: "Confirmation helps, but contacting someone on leave should be a last resort.",
      detailed: "Knowing for certain that the dose was given matters, because a missed or duplicated vaccine affects Ava. But there are usually other ways to confirm it, such as the stock record, and contacting a colleague on leave is intrusive. It ranks third." },
    { text: "Leave the record as it is for the nurse to sign when she returns.",
      brief: "Leaves an unclear record for two weeks, which risks a repeat or missed dose.",
      detailed: "An unsigned entry may be read as a dose not given, so Ava could be given the vaccines again, or a later team could be unsure of her status. Doing nothing isn't dishonest, but it leaves a risk in place." },
    { text: "Sign the record, as the vaccines were almost certainly given.",
      brief: "This falsifies a clinical record.",
      detailed: "Signing to say you gave a drug you didn't give is a false entry, however likely it is that the dose was given. Records must be honest and accurate. This is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you keep clinical records honest under pressure, while helping to fix the problem properly.",
    keyDetails: "You didn't give the vaccines or see them given. The nurse who did is away. The record matters for Ava's future care.",
    reasoning: "{1} refuses the false entry and offers an honest fix. {2} uses the ward's process, and {3} confirms the facts but intrudes on a colleague's leave. {4} leaves a risky gap, and {5} falsifies the record.",
    competing: "Some would rank {3} higher, because confirmation is essential. The key prefers other ways of confirming the dose first, which respects the colleague's leave."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, keeping records honest and accurate." },
    { ref: "nmccode", note: "Keeping clear and accurate records of the care given." }
  ],
  tags: ["records", "probity", "immunisation", "paediatrics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-264", pool, letters: "CDF", format: "multiple_choice", difficulty: "hard",
  title: "Sedation or a cause?", setting: "Elderly care ward", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Challenging seniors", "Delirium", "Patient safety"],
  stem:
    "You are an F2 doctor on an elderly care ward. Mrs Grant, 86, was admitted with a fall two days ago. Since last night she has been agitated and muddled, which the nurses say is new. She hasn't opened her bowels for five days and hasn't had her pain reassessed since admission.\n\n" +
    "On the ward round, your consultant says, \"She's sundowning. Start regular lorazepam at night,\" and moves on to the next patient.",
  options: [
    // keyed
    { text: "Tell the consultant you suspect delirium and suggest looking for a cause.",
      brief: "Sharing your concern lets the consultant reconsider with the full picture.",
      detailed: "New agitation and confusion in an older inpatient suggest delirium, which usually has a treatable cause. Benzodiazepines can make delirium worse and increase the risk of falls. Raising this respectfully, with the facts, gives the consultant a chance to change the plan." },
    { text: "Check her for constipation, urinary retention, pain and infection.",
      brief: "Treating the cause is the main treatment for delirium.",
      detailed: "She is constipated and her pain hasn't been reviewed, and infection and urinary retention are also common causes. Finding and treating the cause is far more effective than sedation, and it gives the consultant the information needed to revise the plan." },
    { text: "Ask the nurses to use non-drug measures, such as reorientation.",
      brief: "These are first-line measures for agitation in delirium.",
      detailed: "Reorientation, a calm environment, glasses and hearing aids, and involving family can reduce agitation without drugs. They help Mrs Grant tonight while the cause is being treated." },
    // distractors
    { text: "Prescribe the lorazepam as instructed, as it is the consultant's decision.",
      brief: "Following an instruction you think is harmful, without raising it, isn't safe.",
      detailed: "The consultant makes the final decision, but you have relevant concerns they may not have considered. Prescribing without raising them could harm Mrs Grant." },
    { text: "Refuse to prescribe the lorazepam and tell the nurses not to give it.",
      brief: "Refusing outright, without discussion, undermines the team.",
      detailed: "You shouldn't prescribe something you believe is harmful, but the first step is to discuss it. Countermanding a consultant's plan with the nurses, without speaking to the consultant, creates confusion." },
    { text: "Ask the ward pharmacist to challenge the consultant on your behalf.",
      brief: "The pharmacist can help, but you should raise it yourself first.",
      detailed: "A pharmacist's view on benzodiazepines in delirium could be valuable, but asking them to raise your concern for you avoids a conversation you should have directly." },
    { text: "Prescribe a smaller dose than the consultant asked for.",
      brief: "Quietly changing the plan isn't honest or safe.",
      detailed: "This doesn't address the concern that sedation may be the wrong treatment, and changing a senior's plan without telling them undermines trust." },
    { text: "Write in the notes that you disagree with the plan.",
      brief: "Documenting disagreement without discussing it doesn't help the patient.",
      detailed: "Records should reflect clinical discussions, but writing your disagreement without raising it with the consultant protects you rather than Mrs Grant." }
  ],
  explanation: {
    issue: "This tests whether you raise a well-founded concern with a senior, while also acting in the patient's interest.",
    keyDetails: "The confusion is new. There are obvious possible causes. Benzodiazepines can worsen delirium. The consultant made the decision quickly on a busy ward round.",
    reasoning: "{k1} raises the concern directly, {k2} looks for treatable causes, and {k3} helps her tonight without drugs. The distractors comply without question ({d1}), refuse without discussion ({d2}), delegate the challenge ({d3}), alter the plan covertly ({d4}), or document instead of discussing ({d5}).",
    competing: "{d3} is the closest call. Involving the pharmacist is sensible as well, but not instead of speaking to the consultant yourself."
  },
  refs: [
    { ref: "delirium", note: "Identifying and treating the causes of delirium, with non-drug measures before medication." },
    { ref: "gmp", note: "Domain 3, raising concerns about care with colleagues." }
  ],
  tags: ["delirium", "challenging seniors", "elderly care", "prescribing"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-265", pool, letters: "EDCAB", format: "ranking", difficulty: "moderate",
  title: "A new friend", setting: "Oncology & palliative care", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Patients, partnership and communication", "Safety and quality"],
  competencies: ["Adult safeguarding", "Capacity", "Patient-centred care"],
  stem:
    "You are an F2 doctor on an oncology ward. Mrs Byrne, 79, has lung cancer and mild dementia and was admitted for symptom control. A man she met a few months ago visits daily and says he is her \"best friend\".\n\n" +
    "Her niece tells you, in private, that he has been using Mrs Byrne's bank cards and recently persuaded her to add his name to her savings account. Mrs Byrne's capacity to manage her finances hasn't been assessed.",
  options: [
    { text: "Talk with Mrs Byrne alone about the friend and what she wants.",
      brief: "Her views and understanding come first and shape what happens next.",
      detailed: "Safeguarding should be led by the person's wishes as far as possible. Speaking to her alone lets her talk freely and helps you judge whether she understands what is happening with her money. It ranks first because her voice should come before any process." },
    { text: "Discuss your concerns with the hospital's adult safeguarding team.",
      brief: "Possible financial abuse of a vulnerable adult needs specialist advice.",
      detailed: "Financial abuse is a recognised form of abuse. The safeguarding team can advise on a referral to the local authority and on assessing her capacity. It ranks second because it works best informed by what Mrs Byrne says." },
    { text: "Record the niece's concerns and your own observations in the notes.",
      brief: "Accurate records support any later enquiry.",
      detailed: "Clear, factual documentation helps the safeguarding team and anyone else who becomes involved. It is important but less active than speaking to Mrs Byrne or seeking advice, so it ranks third." },
    { text: "Advise the niece to contact her aunt's bank herself.",
      brief: "Banks can help, but this bypasses the proper safeguarding route.",
      detailed: "Banks do have processes for suspected financial abuse, so this isn't unreasonable. But it leaves the response to a relative, without involving Mrs Byrne or the professionals responsible for safeguarding." },
    { text: "Leave it, as Mrs Byrne is free to choose her own friends.",
      brief: "Ignores a possible abuse of a vulnerable adult.",
      detailed: "She is free to choose her friends, but there is evidence of possible financial exploitation and her capacity is uncertain. Doing nothing leaves her at risk, so this is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to possible financial abuse of a vulnerable adult, putting her wishes first while making sure she is protected.",
    keyDetails: "She has dementia and her financial capacity is unknown. There are specific concerns about her bank cards and savings. The concern comes from a relative.",
    reasoning: "{1} hears from Mrs Byrne, {2} seeks safeguarding advice, and {3} documents the concerns. {4} is partial and bypasses the process, and {5} leaves her at risk.",
    competing: "Some would put the safeguarding team first. The key puts talking to Mrs Byrne first because safeguarding should start from the person's own views, and she is on the ward to ask."
  },
  refs: [
    { ref: "careact42", note: "Safeguarding enquiries for adults at risk, including financial abuse." },
    { ref: "mca1", note: "Assuming capacity unless it is shown to be lacking for the decision." }
  ],
  tags: ["safeguarding", "financial abuse", "dementia", "oncology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-266", pool, letters: "AEH", format: "multiple_choice", difficulty: "moderate",
  title: "Borrowed slides", setting: "Non-clinical (teaching, audit, social)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honesty", "Academic integrity", "Teaching"],
  stem:
    "You are an F2 doctor about to give a 20-minute teaching session to medical students. While setting up, you realise that six of your slides are copied from a presentation your colleague Dr Osei gave last year. You meant to credit him but forgot.\n\n" +
    "The session starts in five minutes, and the slides will be uploaded to the students' online learning platform afterwards.",
  options: [
    // keyed
    { text: "Tell the students at the start that some slides are Dr Osei's work.",
      brief: "A spoken credit puts things right for this audience.",
      detailed: "There is no time to edit every slide, but a clear verbal acknowledgement at the start credits Dr Osei honestly in front of the people seeing his work." },
    { text: "Add a credit to the slides before they are uploaded.",
      brief: "The uploaded version will be used later, so it needs to be accurate.",
      detailed: "The slides will circulate after the session. Adding an acknowledgement to the slides before uploading makes the record accurate for anyone who reads them later." },
    { text: "Tell Dr Osei afterwards, apologise and ask if he's happy with this.",
      brief: "He should know, and it gives him the chance to agree or object.",
      detailed: "Using a colleague's work without asking isn't ideal even with credit. Telling him and apologising is honest, and asking his permission respects his ownership of the material." },
    // distractors
    { text: "Delete the six slides and teach that section without them.",
      brief: "This avoids the problem but may weaken the teaching.",
      detailed: "This avoids presenting his work without credit, but it may leave the students with a poorer session. Crediting him is simpler and more honest." },
    { text: "Postpone the session until you have redone the slides.",
      brief: "Disproportionate when a credit fixes the problem.",
      detailed: "Cancelling at five minutes' notice wastes the students' time when a spoken acknowledgement resolves the immediate issue." },
    { text: "Present as planned and credit him next time you give the talk.",
      brief: "Presents his work as your own today.",
      detailed: "Leaving the credit for another occasion means this audience, and anyone using the uploaded slides, will assume the work is yours." },
    { text: "Text Dr Osei to ask permission, and present only if he replies in time.",
      brief: "A reasonable instinct, but it doesn't solve the credit problem.",
      detailed: "Asking permission is good practice, but even with permission his work needs crediting. If he doesn't reply in five minutes, the students lose their session." },
    { text: "Credit the slides to 'colleagues' rather than naming him.",
      brief: "A vague credit doesn't properly acknowledge his work.",
      detailed: "Acknowledgement should be specific. A generic credit still leaves the impression that the content is largely yours." }
  ],
  explanation: {
    issue: "This tests honesty about other people's work, even when the omission was accidental and time is short.",
    keyDetails: "You used his slides without credit by mistake. The talk starts in five minutes. The slides will be shared afterwards.",
    reasoning: "{k1} credits him for today's audience, {k2} corrects the shared version, and {k3} is open with Dr Osei. The distractors avoid the issue ({d1}, {d2}), delay the credit ({d3}), make it conditional ({d4}), or credit vaguely ({d5}).",
    competing: "{d4} is tempting, as asking permission is good practice. But it doesn't credit him and may cost the students their session, whereas the keyed options do both."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty in all professional work, including teaching." }
  ],
  tags: ["teaching", "plagiarism", "honesty", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-267", pool, letters: "ADBCE", format: "ranking", difficulty: "easy",
  title: "An anniversary night", setting: "General medical ward", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Work–life balance", "Assertiveness", "Teamwork"],
  stem:
    "You are an F2 doctor on a general medical rotation. On Thursday afternoon the rota coordinator messages you: a colleague has called in sick for Saturday night, and she asks whether you can cover.\n\n" +
    "Saturday is your wedding anniversary, and you have booked a dinner away for the night. You aren't rostered for that weekend.",
  options: [
    { text: "Reply that you have plans for Saturday, and politely decline.",
      brief: "You aren't rostered, and it's reasonable to protect important personal time.",
      detailed: "You have no obligation to cover an unrostered shift, and time away from work matters for your wellbeing. A prompt, polite answer lets the coordinator look elsewhere straight away, so it ranks first." },
    { text: "Mention a colleague who said she'd like extra shifts.",
      brief: "Helpful, without sacrificing your plans.",
      detailed: "Pointing to someone who wants extra work shows goodwill and may help her find cover quickly. It ranks second because a clear, prompt answer is what the coordinator needs most." },
    { text: "Agree to cover, and cancel your plans.",
      brief: "Generous, but at a real personal cost you aren't obliged to bear.",
      detailed: "Covering would help the rota, and some doctors would choose to. But regularly sacrificing important personal time isn't sustainable, and you aren't obliged to. It ranks third: it is a choice, not a failing." },
    { text: "Leave the message unanswered until next week.",
      brief: "Leaves the coordinator waiting for an answer she needs today.",
      detailed: "Not replying wastes time the coordinator could spend finding cover. It's discourteous, but it doesn't directly put patients at risk, so it ranks above the last option." },
    { text: "Agree to cover, but plan to leave the shift halfway through for your dinner.",
      brief: "Creates an uncovered gap in a night shift.",
      detailed: "Leaving part-way through a night shift would leave patients without a doctor. This is the only option that directly creates a risk to patient safety, so it is the least appropriate." }
  ],
  explanation: {
    issue: "This tests whether you can say no to extra work in a professional way, without creating risk for patients.",
    keyDetails: "You aren't rostered. It's an important personal occasion. The coordinator needs an answer soon to find cover.",
    reasoning: "{1} gives a clear, timely answer, and {2} adds a helpful suggestion. {3} is generous but not required, {4} wastes the coordinator's time, and {5} leaves patients without cover.",
    competing: "Some would see {3} as the most professional response. The key respects your right to decline unrostered work, which is sustainable practice."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, looking after your own health and wellbeing." }
  ],
  tags: ["rota", "wellbeing", "work–life balance", "general medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-268", pool, letters: "DGH", format: "multiple_choice", difficulty: "moderate",
  title: "Kept alive by a machine", setting: "Cardiology / respiratory", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Consent", "Exploring concerns", "Respecting autonomy"],
  stem:
    "You are an F2 doctor in cardiology. Mr Fraser, 83, has been admitted after two blackouts and has complete heart block. The team recommends a permanent pacemaker.\n\n" +
    "He tells you he doesn't want one because he doesn't want to be \"kept alive by a machine\" when his time comes. He is alert, follows the conversation well, and lives independently with his wife.",
  options: [
    // keyed
    { text: "Ask him what he means by being kept alive by a machine.",
      brief: "Understanding his fear lets you respond to it accurately.",
      detailed: "His concern may be based on a misunderstanding, or on experiences with relatives. Exploring it first means the information you give will address what actually worries him." },
    { text: "Explain what a pacemaker does, including that it doesn't stop a natural death.",
      brief: "Accurate information may change his view, and he needs it to decide.",
      detailed: "A pacemaker treats a slow heart rhythm. It doesn't keep someone alive when they are dying of another illness. He needs this information to make an informed decision, whichever way he decides." },
    { text: "Accept his decision if he still declines, and agree a plan for his care.",
      brief: "A capacitous patient can refuse treatment, and he still needs a plan.",
      detailed: "He appears to have capacity. If he still refuses after an accurate explanation, that is his right. Agreeing a plan, including what to do if he blacks out again and offering to revisit the decision, respects his autonomy and keeps him safe." },
    // distractors
    { text: "Arrange the pacemaker anyway, as it is clearly in his best interests to have one.",
      brief: "Best-interests decisions apply only to patients who lack capacity.",
      detailed: "He appears to have capacity, so treating him against his wishes would be unlawful, however beneficial the treatment." },
    { text: "Ask his wife to persuade him to agree to the pacemaker.",
      brief: "Involving family can help, but recruiting her to persuade him isn't fair.",
      detailed: "He may want to discuss it with his wife, and that is reasonable. Asking her to persuade him puts pressure on him rather than supporting his decision." },
    { text: "Tell him he could die without one and should reconsider.",
      brief: "The risk should be explained, but not as pressure to agree.",
      detailed: "He needs to know the risks of declining, and they belong in your explanation. Presenting them as a reason he should change his mind, without exploring his fear, may feel like coercion and doesn't address his concern." },
    { text: "Refer him to the psychiatry team to assess his decision.",
      brief: "Unusual decisions don't, in themselves, suggest a lack of capacity.",
      detailed: "There is nothing to suggest he lacks capacity. A decision others disagree with isn't a reason for a psychiatric referral." },
    { text: "Ask your consultant to talk him round on tomorrow's ward round.",
      brief: "Senior involvement is fine, but the aim shouldn't be to talk him round.",
      detailed: "Your consultant should be involved in a significant decision, but framing the aim as persuasion rather than informed choice is the problem." }
  ],
  explanation: {
    issue: "This tests whether you explore the reasons behind a refusal and give accurate information, while respecting a capable patient's right to decide.",
    keyDetails: "He appears to have capacity. His fear may rest on a misunderstanding of what a pacemaker does. The condition is serious if untreated.",
    reasoning: "{k1} explores his concern, {k2} corrects a possible misunderstanding, and {k3} respects his decision while keeping him safe. The distractors override him ({d1}), pressure him ({d2}, {d3}, {d5}), or question his capacity without reason ({d4}).",
    competing: "{d5} is close, because a senior should be involved. The problem is the aim of persuading him, rather than helping him decide."
  },
  refs: [
    { ref: "consent", note: "Exploring patients' concerns and respecting their decisions." },
    { ref: "mca1", note: "An unwise decision does not, by itself, mean a lack of capacity." }
  ],
  tags: ["capacity", "refusal", "pacemaker", "cardiology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-269", pool, letters: "DCBA", format: "ranking", difficulty: "hard",
  title: "The employer calls", setting: "General medical ward", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Confidentiality", "Communication", "Patient advocacy"],
  stem:
    "You are an F2 doctor on a general medical ward. You answer the ward phone. The caller says she is the line manager of Ms Ahmed, 42, who was admitted two days ago with pneumonia.\n\n" +
    "The manager says Ms Ahmed is \"key to a big project\" and asks whether she will be fit to return to work next week, so that she can plan staffing.",
  options: [
    { text: "Say you can't share information about patients, without confirming she is here.",
      brief: "Protects her confidentiality, including the fact that she is in hospital.",
      detailed: "Even confirming that someone is an inpatient is a disclosure. A polite explanation that you can't share information about patients protects Ms Ahmed and is the standard response to callers without her consent." },
    { text: "Ask Ms Ahmed whether she would like to update her employer herself.",
      brief: "Lets her decide what, if anything, her employer is told.",
      detailed: "She may want her employer to know, or may prefer to say nothing yet. Asking her puts the decision where it belongs. It ranks second because it doesn't deal with the caller, who still needs a response now." },
    { text: "Tell the manager that Ms Ahmed is improving, but you can't say more.",
      brief: "Well meant, but confirms her admission and her progress without consent.",
      detailed: "This seems discreet, but it confirms that she is in hospital and gives information about her health to her employer. She hasn't agreed to either." },
    { text: "Tell the manager when Ms Ahmed is likely to be fit for work, as it helps them plan.",
      brief: "A clear breach of confidentiality.",
      detailed: "Her employer's planning needs don't override her right to confidentiality. Sharing her expected recovery without consent is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you handle a request for information from a third party with no right to it, including whether you confirm that the patient is there at all.",
    keyDetails: "The caller is her employer. Ms Ahmed hasn't given consent. Even confirming her admission is a disclosure.",
    reasoning: "{1} protects her confidentiality completely, and {2} lets her decide what to share. {3} discloses some information, and {4} discloses more.",
    competing: "{1} and {2} work together. The key puts {1} first because the caller is on the line now and needs a response that discloses nothing."
  },
  refs: [
    { ref: "confidentiality", note: "Disclosing information only with consent or a legal or public-interest justification." }
  ],
  tags: ["confidentiality", "employers", "telephone", "general medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-270", pool, letters: "CFG", format: "multiple_choice", difficulty: "moderate",
  title: "Not ready yet", setting: "Obstetrics & gynaecology", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Receiving feedback", "Reflection", "Learning"],
  stem:
    "You are an F2 doctor in obstetrics and gynaecology. You have assisted with several instrumental deliveries and feel ready to do one yourself under supervision.\n\n" +
    "When you ask the registrar, Dr Lewis, she says you aren't ready yet, because your examination findings in labour have been inaccurate twice this week. You think the findings were difficult and that she is being overcautious.",
  options: [
    // keyed
    { text: "Ask Dr Lewis which findings were inaccurate and what she would need to see.",
      brief: "Specific feedback tells you exactly what to work on.",
      detailed: "Accurate assessment in labour is essential before instrumental delivery. Asking for specifics, without being defensive, turns disagreement into a plan and shows you take the feedback seriously." },
    { text: "Ask to do more supervised examinations so your findings can be checked.",
      brief: "Directly addresses the skill she is concerned about.",
      detailed: "Having your findings checked by a senior builds the skill and gives Dr Lewis evidence of your progress. It is a practical, safe way forward." },
    { text: "Discuss the feedback with your educational supervisor and reflect on it.",
      brief: "Reflection and support help you learn from feedback you disagree with.",
      detailed: "Your supervisor can help you look at the feedback objectively and plan your development. Reflecting on it, rather than dismissing it, is part of professional learning." },
    // distractors
    { text: "Ask another registrar, who doesn't know about your findings, to supervise a delivery.",
      brief: "Goes around feedback that relates to patient safety.",
      detailed: "This avoids the concern rather than addressing it. The feedback is about a skill that matters for safety in an instrumental delivery." },
    { text: "Tell Dr Lewis that the examinations were difficult and anyone could have misjudged them.",
      brief: "Defensive, and it closes down the discussion.",
      detailed: "The findings may well have been difficult, but responding defensively makes it harder to learn from feedback and to rebuild her confidence in you." },
    { text: "Complain to the consultant that Dr Lewis is holding back your training.",
      brief: "Treats legitimate safety feedback as a grievance.",
      detailed: "If you felt you were being treated unfairly, discussing it would be reasonable, but this feedback is specific and relevant to safety. A complaint isn't justified." },
    { text: "Stop asking to do procedures until a registrar offers.",
      brief: "Withdrawing doesn't help you learn.",
      detailed: "Pulling back limits your learning. A better response is to work on the specific skill and ask again." },
    { text: "Accept her decision without comment and carry on as before.",
      brief: "Avoids conflict, but misses the chance to improve.",
      detailed: "Accepting the decision is fine, but without understanding the feedback or changing anything, you won't progress." }
  ],
  explanation: {
    issue: "This tests how you respond to feedback you disagree with, particularly when it relates to patient safety.",
    keyDetails: "The feedback is specific and relevant to safe instrumental delivery. You feel ready but have made errors this week.",
    reasoning: "{k1} gets specific feedback, {k2} works on the skill, and {k3} reflects with support. The distractors go around the feedback ({d1}), are defensive ({d2}), escalate inappropriately ({d3}), withdraw ({d4}), or change nothing ({d5}).",
    competing: "{d5} is the most tempting: it is polite and avoids conflict. But it doesn't help you learn what she needs to see."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, reflecting on feedback and keeping your skills up to date." }
  ],
  tags: ["feedback", "training", "obstetrics", "procedures"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-271", pool, letters: "CAEBD", format: "ranking", difficulty: "moderate",
  title: "\"Back again\"", setting: "Emergency department", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Non-judgemental care", "Self-harm", "Challenging behaviour in colleagues"],
  stem:
    "You are an F2 doctor in the Emergency Department. Ms Quinn, 26, has attended for the fifth time this month with cuts to her forearm. She is waiting to be seen.\n\n" +
    "At the nurses' station, two staff members say she is \"back again for attention\" and that she \"should be made to wait\". You are about to see her.",
  options: [
    { text: "Make sure she has a full assessment, including by liaison psychiatry.",
      brief: "She should get the same standard of care as anyone, including a psychosocial assessment.",
      detailed: "Repeated self-harm is associated with higher risk, not lower. National guidance recommends a psychosocial assessment at each presentation, without judgement. Making sure she gets it ranks first because it protects her directly." },
    { text: "Tell your colleagues, privately, that the comments aren't appropriate.",
      brief: "Challenging stigma calmly helps change attitudes that affect care.",
      detailed: "Comments like these can influence how patients are treated. A calm, private word shows professionalism and may change behaviour. It ranks second because her own care comes first." },
    { text: "Suggest staff attitudes to self-harm as a topic for department teaching.",
      brief: "Useful for the department, but it doesn't help her today.",
      detailed: "Teaching can address attitudes across the whole team, which is valuable. It ranks third because it does nothing for this patient or this conversation." },
    { text: "Ask Ms Quinn why she keeps coming back to the department.",
      brief: "May sound judgemental and could discourage her from seeking help.",
      detailed: "Understanding her reasons for self-harm matters, but asking why she 'keeps coming back' can sound like a criticism of her attendances. It may make her less likely to seek help next time." },
    { text: "Treat her wound and discharge her, as the team knows her well.",
      brief: "Skips assessment of a high-risk patient.",
      detailed: "Familiarity can lead to under-assessment. Discharging her without a mental health assessment could miss a rise in her risk. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you give non-judgemental care to a patient who self-harms, and respond to stigmatising comments from colleagues.",
    keyDetails: "She has repeated presentations. Staff comments are dismissive. You are about to see her. Repeated self-harm doesn't mean lower risk.",
    reasoning: "{1} makes sure she is properly assessed, {2} challenges the comments, and {3} addresses attitudes more widely. {4} risks sounding judgemental, and {5} skips her assessment.",
    competing: "Some would challenge the comments first. The key puts her assessment first, because that directly affects her safety, and you can speak to colleagues straight afterwards."
  },
  refs: [
    { ref: "ng225", note: "Psychosocial assessment and non-judgemental care at each presentation." }
  ],
  tags: ["self-harm", "stigma", "emergency department", "mental health"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-272", pool, letters: "ABE", format: "multiple_choice", difficulty: "easy",
  title: "A watch after his death", setting: "Oncology & palliative care", attribute: P,
  topic: "Professional boundaries",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Gifts", "Boundaries", "Compassion"],
  stem:
    "You are an F2 doctor on an oncology ward. Mr Clarke, whom you looked after for several weeks, died peacefully on the ward last week.\n\n" +
    "His wife and daughter return to thank the team. They give you a small box and say it contains his expensive watch, which \"he would have wanted you to have\".",
  options: [
    // keyed
    { text: "Thank them warmly for thinking of you.",
      brief: "Their gesture comes from gratitude and grief, and deserves a kind response.",
      detailed: "Acknowledging their kindness matters, especially soon after a death. A warm response shows that the care you gave was personal and that their thanks is received." },
    { text: "Explain gently that you can't accept something so valuable.",
      brief: "Valuable gifts can affect, or appear to affect, trust in doctors.",
      detailed: "Most trusts don't allow staff to accept valuable gifts, and accepting one could appear to compromise your professional relationship. Explaining kindly why you can't accept it avoids causing hurt." },
    { text: "Mention the ward's charity fund, if they'd like to give something.",
      brief: "Gives them another way to express their thanks.",
      detailed: "Many families want to give something back. Suggesting the ward charity offers an alternative that benefits other patients, without any pressure." },
    // distractors
    { text: "Accept the watch and record it in the trust's gifts register.",
      brief: "Declaring is good practice, but a watch of this value shouldn't be accepted.",
      detailed: "Declaring gifts is the right approach for small items. For something this valuable, declaring it doesn't remove the concern, and most policies would not allow you to accept it." },
    { text: "Accept it so as not to hurt them.",
      brief: "Kind in intent, but inappropriate for a valuable gift.",
      detailed: "Not wanting to hurt a grieving family is understandable, but accepting a gift of this value is a professional concern, and there are kind ways to decline." },
    { text: "Ask the family to give it to the ward manager to sell for the team.",
      brief: "Redirects a personal gift in a way the family didn't intend.",
      detailed: "This may seem fair to the team, but the family intended a personal gift of a man's watch, and it puts them in an awkward position." },
    { text: "Tell them you'll ask your consultant whether you can keep it.",
      brief: "Delays a clear answer and suggests you might accept it.",
      detailed: "Checking local policy is reasonable for small or unclear gifts, but here the answer is clear. Delaying it may raise their expectations." },
    { text: "Decline briefly and move on to your next task.",
      brief: "Correct outcome, but abrupt with a grieving family.",
      detailed: "Declining is right, but doing it abruptly may hurt a family who came back to thank you." }
  ],
  explanation: {
    issue: "This tests how you handle a valuable gift from a bereaved family with kindness, while maintaining professional standards.",
    keyDetails: "The gift is valuable. The family is grieving and grateful. The patient has died.",
    reasoning: "{k1} receives their thanks warmly, {k2} declines kindly, and {k3} offers another way to give. The distractors accept the gift ({d1}, {d2}), redirect it awkwardly ({d3}), delay a clear answer ({d4}), or decline unkindly ({d5}).",
    competing: "{d1} is the closest call, as declaring gifts is good practice. The value of the gift is what makes accepting it inappropriate."
  },
  refs: [
    { ref: "coi", note: "Gifts and their potential to affect, or appear to affect, professional judgement." },
    { ref: "gmp", note: "Domain 4, acting with honesty and integrity." }
  ],
  tags: ["gifts", "boundaries", "bereavement", "oncology"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-273", pool, letters: "ECDBA", format: "ranking", difficulty: "moderate",
  title: "Fire alarm", setting: "Paediatrics", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Emergency procedures", "Teamwork", "Prioritisation"],
  stem:
    "You are an F2 doctor on a paediatric ward. You are reviewing Zara, 4, who has asthma and is having a salbutamol nebuliser driven by wall oxygen. Her mother is with her.\n\n" +
    "The ward fire alarm starts sounding continuously, which on this ward means the fire may be nearby. The nurse in charge is at the nurses' station coordinating staff.",
  options: [
    { text: "Switch Zara's nebuliser to a portable oxygen cylinder so she can be moved.",
      brief: "You are with the child most dependent on equipment, and this takes seconds.",
      detailed: "A child on a wall-driven nebuliser can't be moved quickly, and wall oxygen may be isolated if the fire is close. You are already at her bedside, so switching to a portable cylinder takes moments and means she is ready if the ward has to move patients. It ranks first because it protects the most vulnerable child without delaying anything else." },
    { text: "Go to the nurse in charge for instructions on the ward's fire plan.",
      brief: "Coordinated action, led by the person in charge, keeps everyone safe.",
      detailed: "In a fire, the ward's plan depends on staff following the person coordinating it. Reporting to the nurse in charge means you are used where you are most needed. It ranks second only because you can make Zara ready to move first, in seconds, from where you are standing." },
    { text: "Reassure Zara's mother and the other families in the bay.",
      brief: "Calm reassurance reduces panic, but it's less urgent than safety actions.",
      detailed: "Families will be frightened, and a calm word helps. But it doesn't move anyone towards safety, so it ranks below preparing Zara and joining the ward's response." },
    { text: "Continue your review until you are told the alarm is real.",
      brief: "Assumes it's a false alarm, which could waste vital time.",
      detailed: "Most alarms are false, but you should respond to every one as real. Continuing as normal delays the response, though you are at least still with a patient, so it ranks above leaving." },
    { text: "Leave the ward by the nearest exit, as fire procedures are for the nursing team.",
      brief: "Abandons patients during an emergency.",
      detailed: "All staff have a role in a fire, and leaving would reduce the help available to evacuate children. This is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond to an unexpected emergency on the ward: preparing vulnerable patients, following the ward's plan and staying calm.",
    keyDetails: "The alarm suggests a fire nearby. Zara depends on wall oxygen, and you are at her bedside. The nurse in charge is coordinating.",
    reasoning: "{1} makes the most dependent child ready to move, {2} joins the coordinated response, and {3} supports families. {4} delays the response, and {5} abandons patients.",
    competing: "Some would go to the nurse in charge first. It is a close call: the key puts Zara's oxygen first because you are already beside her and it takes seconds, then you join the ward's plan."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, working with colleagues to keep patients safe." }
  ],
  tags: ["fire", "emergency", "paediatrics", "teamwork"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-274", pool, letters: "AEH", format: "multiple_choice", difficulty: "hard",
  title: "After the resuscitation", setting: "Emergency department", attribute: E,
  topic: "Supporting colleagues in distress",
  gmcDomains: ["Collaboration, teamwork and leadership"],
  competencies: ["Supporting colleagues", "Teamwork", "Wellbeing"],
  stem:
    "You are an F2 doctor in the Emergency Department. Half an hour ago, the team tried for 40 minutes to resuscitate a three-year-old, but the child died.\n\n" +
    "You find Maya, a nurse who was part of the team, crying in the sluice. She says she's fine and needs to get back to her patients. The department is busy.",
  options: [
    // keyed
    { text: "Stay with Maya for a few minutes and ask how she is.",
      brief: "A moment of genuine attention helps, even if she says she's fine.",
      detailed: "After a child's death, many staff say they are fine when they aren't. Staying briefly and asking gently shows care and gives her a chance to talk if she wants to." },
    { text: "Ask the nurse in charge if Maya can have a short break.",
      brief: "Practical support from the person who manages the workload.",
      detailed: "The nurse in charge can cover her patients for a short while. A break may help her recover enough to work safely, and it avoids her feeling she has to ask." },
    { text: "Tell her about the team debrief and staff support services.",
      brief: "She may want support later, even if not now.",
      detailed: "Many departments hold debriefs after a child's death and offer staff support. Knowing what's available means she can use it when she's ready." },
    // distractors
    { text: "Tell her it gets easier with time.",
      brief: "Well meant, but it can minimise what she is feeling now.",
      detailed: "Some staff find this reassuring, but it may suggest her reaction is a sign of inexperience. Listening is more helpful than advice." },
    { text: "Leave her to compose herself, as she has said she's fine.",
      brief: "Respects her words but may leave her unsupported.",
      detailed: "Respecting her wishes matters, but a brief check costs little and may help. Leaving immediately could feel like nobody noticed." },
    { text: "Suggest she goes home for the rest of the shift.",
      brief: "May not be what she wants, and it isn't your decision.",
      detailed: "Some staff need to go home, but she wants to continue, and staffing decisions sit with the nurse in charge. Sending her home could feel like a judgement on her ability." },
    { text: "Organise a formal debrief for the whole team yourself this afternoon.",
      brief: "Debriefs are valuable, but they are usually led by senior staff.",
      detailed: "A debrief may help, but organising it yourself, at short notice and without the senior team, may not be appropriate or effective." },
    { text: "Refer her to occupational health.",
      brief: "Premature and not your role at this stage.",
      detailed: "Occupational health may help if distress continues, but a referral now, without her agreement, would be disproportionate." }
  ],
  explanation: {
    issue: "This tests how you support a colleague after a traumatic event, balancing her wishes with care and practical help.",
    keyDetails: "She has just been through a child's death. She says she's fine. The department is busy. She wants to keep working.",
    reasoning: "{k1} offers personal support, {k2} arranges practical support, and {k3} points to longer-term help. The distractors minimise ({d1}), withdraw ({d2}), override her ({d3}), overstep ({d4}), or escalate prematurely ({d5}).",
    competing: "{d2} is tempting because she said she's fine, but a brief, gentle check is unlikely to be unwelcome and may matter a great deal."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, supporting colleagues and contributing to a supportive culture." }
  ],
  tags: ["colleague support", "paediatric death", "emergency department", "wellbeing"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-275", pool, letters: "DBCEA", format: "ranking", difficulty: "moderate",
  title: "Mum's tablets", setting: "Non-clinical (teaching, audit, social)", attribute: P,
  topic: "Conflicts of interest and self-prescribing",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Prescribing for family", "Professional boundaries", "Probity"],
  stem:
    "You are an F2 doctor. On Saturday morning your mother phones. She has run out of her blood pressure tablets (amlodipine, once a day), and her GP surgery is closed until Monday. She feels well.\n\n" +
    "She asks if you could \"just write a prescription\" for her, since you are a doctor.",
  options: [
    { text: "Suggest she asks a community pharmacist for an emergency supply.",
      brief: "The quickest appropriate route for a regular medicine.",
      detailed: "Pharmacists can often supply a regular medicine in an emergency without a new prescription. It is quick, uses her own records, and avoids you prescribing for a family member, so it ranks first." },
    { text: "Suggest she calls NHS 111 for an out-of-hours prescription.",
      brief: "An appropriate route, though usually slower.",
      detailed: "NHS 111 can arrange for a prescriber to issue a prescription when the surgery is closed. It is appropriate, but often slower than a pharmacy, so it ranks second." },
    { text: "Advise her to wait until Monday and phone her GP surgery.",
      brief: "Probably safe for a short gap, but avoidable.",
      detailed: "Missing a day or two of a blood pressure tablet is unlikely to cause harm in someone who feels well, but it isn't necessary when other routes exist. It ranks third." },
    { text: "Write her a private prescription for a week's supply of the tablets.",
      brief: "Prescribing for a close family member should be avoided except in an emergency.",
      detailed: "This isn't an emergency, and you don't have her records. Prescribing for those close to you risks a lack of objectivity and poor continuity of care. It ranks fourth because it is at least limited and openly a private prescription." },
    { text: "Write her a month's supply on a hospital prescription.",
      brief: "Prescribes for family and misuses hospital resources.",
      detailed: "Hospital prescriptions are for hospital patients. Using one for your mother is inappropriate prescribing and a misuse of resources. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you avoid prescribing for a family member when appropriate alternatives exist.",
    keyDetails: "It's a regular medicine. She feels well. Pharmacies and NHS 111 are available. It isn't an emergency.",
    reasoning: "{1} uses the quickest appropriate route, {2} is appropriate but slower, and {3} is probably safe but unnecessary. {4} prescribes for family without an emergency, and {5} also misuses hospital resources.",
    competing: "{3} might reasonably rank higher for a drug where a short gap is harmless, but the key prefers getting her tablets today when there's an easy way to do so."
  },
  refs: [
    { ref: "prescribing", note: "Prescribing for yourself or those close to you." }
  ],
  tags: ["prescribing", "family", "probity", "boundaries"]
}
];
