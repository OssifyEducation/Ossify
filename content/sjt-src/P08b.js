// Practice batch P08, part 2 (sjt-156 to sjt-165). Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-156", letters: "ADH", format: "multiple_choice", difficulty: "moderate",
  title: "The wrong dose on the letter", setting: "Elderly care ward", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Candour", "Patient safety", "Owning mistakes"],
  stem:
    "You are an F2 doctor on an elderly care ward. Reviewing a discharge letter you wrote, you notice you listed Mrs Ward's furosemide as 80 mg twice daily, when the plan was 40 mg once daily.\n\n" +
    "She went home two days ago. Her GP practice and community pharmacy will have received the letter.",
  options: [
    // keyed
    { text: "Phone Mrs Ward to find out what dose she is taking and how she is.",
      brief: "She may be taking four times the intended dose.",
      detailed: "A higher dose of furosemide could cause dehydration, low blood pressure or kidney problems in an older person. Finding out what she is taking, and how she feels, tells you how urgent this is." },
    { text: "Contact her GP practice and pharmacy to correct the dose.",
      brief: "The GP needs the right information and may need to check her kidney function.",
      detailed: "Her GP and community pharmacy are working from the wrong dose. Correcting it with both, and asking the GP to arrange a blood test if needed, makes her care safe." },
    { text: "Tell your consultant and report it through the incident system.",
      brief: "Your senior needs to know, and the error should be recorded.",
      detailed: "Your consultant should know about an error affecting a discharged patient, and reporting it helps the trust learn. It also supports being open with Mrs Ward." },
    // distractors
    { text: "Send an amended discharge letter by post.",
      brief: "Too slow if she is taking the wrong dose now.",
      detailed: "An amended letter is needed, but posting it could take days, while she may be taking too much now." },
    { text: "Wait for her follow-up appointment next week to check.",
      brief: "Leaves her at risk for a week.",
      detailed: "She may be having side effects already, so waiting isn't safe." },
    { text: "Ask the ward pharmacist to sort it out.",
      brief: "It's your error, and you should lead putting it right.",
      detailed: "The pharmacist may help, but the error is yours, and you're best placed to contact her and her GP." },
    { text: "Correct the letter on the hospital computer system.",
      brief: "The GP has already received the wrong letter, and she may already be taking the dose.",
      detailed: "Correcting the record is needed, but the letter has already been sent, and correcting it on the system doesn't reach the people using it." },
    { text: "Tell Mrs Ward that the GP practice copied the dose incorrectly.",
      brief: "Dishonest; the error was yours.",
      detailed: "Blaming someone else is dishonest and could damage her trust in her GP." }
  ],
  explanation: {
    issue: "This tests whether you act promptly and openly on your own error after a patient has gone home.",
    keyDetails: "The dose is four times what was intended. She has been home for two days. The GP and pharmacy have the wrong information.",
    reasoning: "{k1} finds out whether she is at risk, {k2} corrects her ongoing care, and {k3} involves your senior and reports it. The distractors are too slow ({d1}, {d2}), pass it on ({d3}), don't reach the people using the letter ({d4}), or are dishonest ({d5}).",
    competing: "{d4} is the tempting option, but the letter has already been sent, so correcting the system doesn't stop her taking the wrong dose."
  },
  refs: [
    { ref: "candour", note: "Being open with patients and putting things right when something goes wrong." },
    { ref: "prescribing", note: "Making sure information about medicines is accurate when care is transferred." }
  ],
  tags: ["errors", "discharge letters", "candour", "diuretics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-157", letters: "CABED", format: "ranking", difficulty: "easy",
  title: "Two calls at once", setting: "Paediatrics", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Prioritisation", "Delegation", "Communication"],
  stem:
    "You are an F2 doctor covering paediatrics overnight. A nurse on the children's ward tells you that Ben, 6, who has pneumonia, has a tissued cannula with maintenance fluids running through it, and his next dose of IV antibiotics is due in 30 minutes.\n\n" +
    "At the same moment, a midwife bleeps you to see a newborn on the postnatal ward who is grunting and has oxygen saturations of 89%.",
  options: [
    { text: "Go to the newborn first.",
      brief: "A grunting baby with low saturations may be seriously unwell.",
      detailed: "Grunting and low saturations in a newborn can be signs of respiratory distress or infection, which need urgent assessment. Ben's antibiotics can wait a short time." },
    { text: "Ask a colleague who is free whether they could re-site Ben's cannula.",
      brief: "Gets Ben's cannula sorted without delaying the newborn.",
      detailed: "Another doctor may be able to help with the cannula. It ranks second because the newborn's assessment comes first." },
    { text: "Ask Ben's nurse to stop the infusion, and let her know when you expect to be back.",
      brief: "Keeps the nurse informed and prevents further tissuing.",
      detailed: "Stopping the infusion prevents further harm to the tissue, and telling the nurse your plan helps her manage Ben and his parents." },
    { text: "Ask the nurse to give Ben's next dose orally instead.",
      brief: "Changing the route of an antibiotic needs assessment.",
      detailed: "Switching to oral antibiotics may be appropriate later, but it's a clinical decision that needs review, not a solution to a cannula problem." },
    { text: "Re-site Ben's cannula first, as it will only take a few minutes.",
      brief: "Cannulating a child can take longer than expected, and the newborn may be unwell.",
      detailed: "Cannulas in children are often difficult and can take much longer than planned, delaying the assessment of a newborn who may be seriously unwell. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you prioritise two calls and use colleagues to keep both patients safe.",
    keyDetails: "The newborn may be seriously unwell. Ben's antibiotics are due in 30 minutes. Other doctors may be available.",
    reasoning: "{1} sees the sickest patient first, {2} gets help for Ben, and {3} keeps the nurse informed. {4} changes treatment without assessment, and {5} delays the newborn.",
    competing: "The order of {2} and {3} is close. The key puts getting help first because it solves Ben's problem, whereas updating the nurse only manages it. {5} ranks last because delaying a possibly sick newborn carries the greatest risk."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, prioritising patients according to clinical need." }
  ],
  tags: ["prioritisation", "paediatrics", "neonates", "cannulas"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-158", letters: "CDG", format: "multiple_choice", difficulty: "moderate",
  title: "The biopsy result", setting: "General medical ward", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Breaking bad news", "Preparation", "Seeking support"],
  stem:
    "You are an F2 doctor on a general medical ward. Mrs Lee, 58, has been waiting for the results of a liver biopsy, which shows metastatic cancer. Her consultant planned to tell her today, but is off sick.\n\n" +
    "Mrs Lee knows the result is back and keeps asking the nurses when someone will tell her. Your registrar asks you to speak to her.",
  options: [
    // keyed
    { text: "Ask your registrar whether they could be there with you.",
      brief: "Senior support helps with a difficult conversation.",
      detailed: "Breaking news like this is difficult, and she may have questions about treatment you can't answer. Asking for your registrar's support is reasonable." },
    { text: "Prepare by reading her notes, the result and the likely next steps.",
      brief: "Preparation helps you answer her questions accurately.",
      detailed: "Knowing the details, and what will happen next, helps you give her honest information and avoid uncertainty about the basics." },
    { text: "Arrange a private room, and ask whether she would like someone with her.",
      brief: "Privacy and support help her receive the news.",
      detailed: "A quiet room, time, and the chance to have a relative or a specialist nurse present all help someone hearing bad news." },
    // distractors
    { text: "Tell her at the bedside, as she is anxious and has been waiting.",
      brief: "Speed matters, but not at the cost of privacy.",
      detailed: "She is anxious, which makes it tempting to tell her straight away. But a crowded bay isn't the place to hear she has cancer." },
    { text: "Wait until her consultant is back next week.",
      brief: "Leaves her anxious, knowing the result is back.",
      detailed: "Her consultant may know her best, but she knows the result is ready, and a week's wait would be very distressing." },
    { text: "Ask the nurse to tell her that the doctors will speak to her soon.",
      brief: "Delays without a plan.",
      detailed: "This may buy time, but she is already anxious, and it doesn't give her the information she's waiting for." },
    { text: "Give her the biopsy report to read first.",
      brief: "Reading a report alone is a poor way to receive bad news.",
      detailed: "Reports are full of technical language, and reading it without support could be distressing and confusing." },
    { text: "Reassure her that the cancer is likely to be treatable.",
      brief: "You may not know, and false hope can cause harm.",
      detailed: "Offering hope is natural, but you don't know the treatment options yet, and false reassurance can damage trust." }
  ],
  explanation: {
    issue: "This tests how you prepare to break bad news when the planned person isn't available.",
    keyDetails: "The result shows metastatic cancer. Mrs Lee is anxious and knows it's back. Her consultant is off sick.",
    reasoning: "{k1} gets senior support, {k2} prepares you, and {k3} creates the right setting. The distractors sacrifice privacy ({d1}), delay unnecessarily ({d2}, {d3}), give information badly ({d4}), or offer false hope ({d5}).",
    competing: "{d2} may seem respectful of her consultant's role, but a week's wait would leave her in distress."
  },
  refs: [
    { ref: "eol", note: "Sharing difficult news with patients and supporting them." },
    { ref: "gmp", note: "Domain 2, communicating with patients sensitively." }
  ],
  tags: ["breaking bad news", "cancer", "preparation", "support"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-159", letters: "DCEAB", format: "ranking", difficulty: "hard",
  title: "Leaving without a troponin", setting: "Emergency department", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Patient safety", "Challenging colleagues", "Escalation"],
  stem:
    "You are an F2 doctor in the Emergency Department. You notice Mr Ellis, 58, putting on his coat to leave. Glancing at his notes, you see a locum doctor recorded central chest pain radiating to his left arm this morning and a normal ECG, and discharged him. No troponin was taken.\n\n" +
    "The locum is with another patient nearby.",
  options: [
    { text: "Ask Mr Ellis to wait while you check his plan.",
      brief: "Stops him leaving before the question is answered.",
      detailed: "A normal ECG doesn't rule out a heart attack, and a troponin is usually needed with this history. Asking him to wait, without alarming him, keeps him safe while you check." },
    { text: "Speak to the locum about the missing troponin.",
      brief: "He may have a reason, or may realise it was missed.",
      detailed: "The locum may have a clinical reason, or may have overlooked it. Asking him directly and respectfully is the quickest way to resolve it." },
    { text: "Discuss it with the ED consultant in charge.",
      brief: "Appropriate if the locum isn't available or disagrees.",
      detailed: "The consultant can review the plan. It ranks third because asking the locum first is quicker and fairer." },
    { text: "Tell Mr Ellis that the locum has made a mistake.",
      brief: "Undermines a colleague before you know the facts.",
      detailed: "There may be a reason, and saying this could alarm Mr Ellis and damage trust in the department." },
    { text: "Let Mr Ellis go, and arrange for him to be called back if a troponin is needed.",
      brief: "Recalling him may take hours, and he may be at risk.",
      detailed: "Recall systems exist, but if he is having a heart attack, he needs to be in hospital now. Letting him go is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you act on a possible omission by a colleague to keep a patient safe, while treating the colleague fairly.",
    keyDetails: "Mr Ellis is leaving. His history suggests possible acute coronary syndrome. No troponin was taken. The locum is nearby.",
    reasoning: "{1} keeps him safe, {2} asks the locum, and {3} escalates. {4} undermines a colleague without the facts, and {5} lets him leave at risk.",
    competing: "This is hard because {1} and {2} would happen almost together. The key puts stopping him first because once he's left, it's much harder to put right. {5} ranks last because letting a possible heart attack go home carries the greatest risk; {4} is unprofessional, but at least he stays in the department."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting when patients may be at risk because of a colleague's decision." }
  ],
  tags: ["chest pain", "locums", "patient safety", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-160", letters: "BEF", format: "multiple_choice", difficulty: "moderate",
  title: "A result nobody acted on", setting: "General medical ward", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Colleagues, culture and safety", "Patients, partnership and communication"],
  competencies: ["Handover", "Candour", "Patient safety"],
  stem:
    "You are an F2 doctor on a general medical ward. At the start of your shift, you see that a potassium result you requested at 16:00 yesterday came back at 20:00 at 6.7 mmol/L. You had left at 17:00 without handing it over, and no one has acted on it.\n\n" +
    "The patient, Mr Gold, 79, is on spironolactone and ramipril. The nurse says he seems well.",
  options: [
    // keyed
    { text: "Assess Mr Gold now, including an ECG and a repeat potassium.",
      brief: "A high potassium can cause dangerous heart rhythms.",
      detailed: "Even if he seems well, a potassium of 6.7 needs urgent assessment and treatment. An ECG and repeat potassium guide what needs doing." },
    { text: "Tell your registrar what happened.",
      brief: "Your senior needs to know about a missed result and a sick patient.",
      detailed: "Your registrar should know so they can support his treatment and any follow-up, and help you reflect on how it happened." },
    { text: "Explain to Mr Gold what happened, and apologise.",
      brief: "Being open with him is part of putting it right.",
      detailed: "He has a right to know when something has gone wrong in his care. An honest explanation and apology, once he is safe, is part of your professional duty of candour." },
    // distractors
    { text: "Repeat the potassium, and only treat if it's still high.",
      brief: "Delays treatment of a potentially dangerous result.",
      detailed: "Repeating the test is reasonable, but an ECG and assessment are needed now, and treatment may be needed before the repeat result is back." },
    { text: "Stop his spironolactone and ramipril, and review tomorrow.",
      brief: "Part of management, but doesn't address the immediate risk.",
      detailed: "Stopping these drugs is likely to be part of his treatment, but on its own it doesn't address a dangerously high potassium now." },
    { text: "Report the missed result through the incident system before doing anything else.",
      brief: "Reporting matters, but his treatment and being open come first.",
      detailed: "This should be reported, and you should do it today, but not before assessing and treating him." },
    { text: "Ask the night doctor why they didn't act on the result.",
      brief: "They weren't told about it.",
      detailed: "The result wasn't handed over, so the night doctor can't be blamed for missing it." },
    { text: "Assume the result was haemolysed, as he seems well.",
      brief: "Dangerous assumption.",
      detailed: "Haemolysis can falsely raise potassium, but you can't assume it, especially in a patient on drugs that raise potassium." }
  ],
  explanation: {
    issue: "This tests how you respond when a gap in your handover has left an abnormal result unacted on: treating the patient, telling your senior, and being open with him.",
    keyDetails: "The potassium is dangerously high. He is on drugs that raise potassium. You didn't hand it over. He seems well.",
    reasoning: "{k1} deals with the immediate risk, {k2} tells your senior, and {k3} is open with Mr Gold. The distractors delay treatment ({d1}, {d2}, {d5}), deprioritise the immediate actions ({d3}), or wrongly blame a colleague ({d4}).",
    competing: "{d3} is the hard distractor: reporting is important and should be done today, but the three keyed actions come first."
  },
  refs: [
    { ref: "candour", note: "Being open with patients when something has gone wrong." },
    { ref: "gmp", note: "Domain 3, handing over care safely." }
  ],
  tags: ["handover", "hyperkalaemia", "candour", "results"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-161", letters: "CBAED", format: "ranking", difficulty: "moderate",
  title: "Surgery she might not want", setting: "Orthopaedics", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Best interests", "Communication with families", "Mental Capacity Act"],
  stem:
    "You are an F2 doctor in orthopaedics. Mrs Fry, 92, has advanced dementia and lives in a care home. She has a hip fracture and is listed for surgery tomorrow. She lacks capacity to decide about the operation.\n\n" +
    "Her daughter tells you that her mother \"always said she didn't want to end up in hospital having operations\", and asks whether the surgery is really in her interests.",
  options: [
    { text: "Listen to her concerns and what she knows of her mother's wishes.",
      brief: "Her mother's past wishes are central to a best-interests decision.",
      detailed: "Under the Mental Capacity Act, decisions for someone who lacks capacity must take account of their past wishes and the views of those close to them. Listening carefully is essential." },
    { text: "Check whether Mrs Fry has a lasting power of attorney for health or an advance decision.",
      brief: "Either could change who decides, or what can be done.",
      detailed: "A health attorney could make this decision on her behalf, and a valid advance decision refusing surgery would have to be followed. Checking quickly is important." },
    { text: "Ask the consultant or orthogeriatrician to meet the daughter to discuss her mother's best interests.",
      brief: "A senior discussion is needed for this decision.",
      detailed: "Surgery for a hip fracture often relieves pain even in frail patients, but the decision should weigh her wishes. A senior can discuss the benefits and alternatives with her daughter." },
    { text: "Postpone the surgery until the daughter agrees.",
      brief: "Not your decision, and delay can cause harm.",
      detailed: "Her daughter's views matter, but unless she is a health attorney, she can't decide, and delaying surgery may prolong pain." },
    { text: "Tell her that decisions about surgery are for the surgeons.",
      brief: "Dismisses the duty to consult her about her mother's best interests.",
      detailed: "Surgeons decide what to offer, but the Mental Capacity Act requires those close to the patient to be consulted. This is dismissive and inaccurate." }
  ],
  explanation: {
    issue: "This tests how you involve a family in a best-interests decision for someone who lacks capacity, respecting her past wishes.",
    keyDetails: "Mrs Fry lacks capacity. Her daughter reports her past wishes. Surgery is planned for tomorrow.",
    reasoning: "{1} listens to her wishes, {2} checks who has authority, and {3} brings in a senior. {4} acts beyond your role, and {5} dismisses the duty to consult.",
    competing: "Some would arrange the senior meeting before checking for an attorney. The key checks first because it's quick and could change who makes the decision."
  },
  refs: [
    { ref: "mca4", note: "Best interests: past wishes and consulting those close to the person." },
    { ref: "consent", note: "Decisions for adults who lack capacity." }
  ],
  tags: ["best interests", "dementia", "hip fracture", "families"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-162", letters: "BFG", format: "multiple_choice", difficulty: "easy",
  title: "No BNFC tonight", setting: "Paediatrics", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development"],
  competencies: ["Safe prescribing", "Seeking advice", "Recognising limits"],
  stem:
    "You are an F2 doctor covering paediatrics overnight. A nurse asks you to prescribe IV phenytoin for a child who has had a prolonged seizure, as the registrar has asked. You have never prescribed it for a child.\n\n" +
    "The hospital IT system is down, so you can't access the online children's formulary.",
  options: [
    // keyed
    { text: "Ask the paediatric registrar to confirm the dose.",
      brief: "The registrar asked for it and can confirm the dose.",
      detailed: "The registrar decided on the drug and can confirm the dose and how to give it. Asking is quick and safe." },
    { text: "Check a printed copy of the children's formulary on the ward.",
      brief: "Wards usually keep printed copies for this situation.",
      detailed: "Many wards keep printed copies of the BNF for Children or local guidelines. Checking it gives you a reliable source." },
    { text: "Ask the on-call pharmacist for advice.",
      brief: "Pharmacists can advise on paediatric dosing.",
      detailed: "The on-call pharmacist can confirm the dose and preparation, especially for a drug with specific administration requirements." },
    // distractors
    { text: "Calculate the dose from the adult dose, adjusted for weight.",
      brief: "Adult doses don't scale reliably for children.",
      detailed: "Children's doses often differ from simple weight-adjusted adult doses, and phenytoin has a narrow therapeutic range." },
    { text: "Ask the nurse what dose is usually given.",
      brief: "Useful as a check, but not a reliable source on its own.",
      detailed: "Experienced nurses often know usual doses, which makes this tempting, but the prescriber is responsible, and the dose needs a reliable source." },
    { text: "Wait until the IT system is back before prescribing.",
      brief: "The child needs treatment now.",
      detailed: "The seizure needs treatment, and other reliable sources are available." },
    { text: "Search for the dose using a general internet search on your phone.",
      brief: "Online sources may not be reliable.",
      detailed: "Some websites are reliable, but an unverified search isn't a safe basis for a paediatric dose of phenytoin." },
    { text: "Prescribe the dose you remember from your medical school notes.",
      brief: "Memory isn't reliable for an unfamiliar paediatric dose.",
      detailed: "Relying on memory for an unfamiliar drug in a child risks a serious error." }
  ],
  explanation: {
    issue: "This tests whether you prescribe an unfamiliar drug safely when your usual source isn't available.",
    keyDetails: "The child needs treatment now. Phenytoin has a narrow therapeutic range. You haven't prescribed it for a child before.",
    reasoning: "{k1}, {k2} and {k3} all use reliable sources of advice. The distractors use unreliable methods ({d1}, {d2}, {d4}, {d5}), or delay treatment ({d3}).",
    competing: "{d2} is tempting because nurses often know usual doses, but as prescriber you need a reliable source."
  },
  refs: [
    { ref: "prescribing", note: "Prescribing only when you have enough knowledge of the medicine and the patient." }
  ],
  tags: ["prescribing", "paediatrics", "phenytoin", "IT failure"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-163", letters: "BECDA", format: "ranking", difficulty: "moderate",
  title: "A young carer's questions", setting: "Cardiology / respiratory", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Supporting young carers", "Confidentiality", "Communication"],
  stem:
    "You are an F2 doctor in cardiology. Mr Davies, 52, has severe heart failure and has capacity. His son, Rhys, 16, has been his main carer since his mother died.\n\n" +
    "While his father is asleep, Rhys asks you quietly whether his dad is going to die.",
  options: [
    { text: "Listen to Rhys, and ask how he is coping.",
      brief: "He is young, frightened, and carrying a lot.",
      detailed: "Rhys is a young carer facing the possible loss of his only parent. Listening, and asking how he is, shows care and may reveal that he needs support." },
    { text: "Ask Mr Davies, when he wakes, what he would like Rhys to be told.",
      brief: "His father decides what information is shared.",
      detailed: "Mr Davies has capacity, so he decides what is shared about his health. Many parents want help talking to their children about difficult news." },
    { text: "Let Rhys know about support for young carers.",
      brief: "Specialist support can help him now and in the future.",
      detailed: "Young carers' services can offer practical and emotional support. It ranks third because he first needs to feel heard, and his father needs to be involved." },
    { text: "Tell Rhys to ask his father.",
      brief: "May be appropriate, but leaves him unsupported.",
      detailed: "His father is the right person, but simply redirecting him doesn't acknowledge his distress." },
    { text: "Tell Rhys about his father's prognosis, as he is the main carer.",
      brief: "Shares information without his father's agreement.",
      detailed: "Rhys's role as carer doesn't entitle him to his father's information. His father should decide what he is told." }
  ],
  explanation: {
    issue: "This tests how you support a young carer while respecting his father's confidentiality.",
    keyDetails: "Mr Davies has capacity. Rhys is 16 and the main carer. He has asked a frightening question.",
    reasoning: "{1} supports Rhys, {2} involves his father, and {3} points to support. {4} redirects without support, and {5} shares information without consent.",
    competing: "Some would ask Mr Davies first. The key starts by listening to Rhys because he is in front of you and distressed, and listening doesn't share any information."
  },
  refs: [
    { ref: "confidentiality", note: "Sharing information with relatives only with the patient's agreement." },
    { ref: "gmp", note: "Domain 2, supporting those close to patients." }
  ],
  tags: ["young carers", "confidentiality", "heart failure", "families"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-164", letters: "ADE", format: "multiple_choice", difficulty: "hard",
  title: "Threats that follow you home", setting: "Psychiatry", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Colleagues, culture and safety", "Knowledge, skills and development"],
  competencies: ["Personal safety", "Seeking support", "Reporting incidents"],
  stem:
    "You are an F2 doctor on an adult psychiatric ward. Over the past week, Mr Doyle, a detained patient, has repeatedly threatened you, saying he knows where you live and will \"find you\" when he's discharged.\n\n" +
    "You are finding it hard to sleep and feel anxious walking to your car after work.",
  options: [
    // keyed
    { text: "Tell your clinical supervisor about the threats.",
      brief: "Your supervisor can support you and help manage the risk.",
      detailed: "Threats like this are serious. Your supervisor can take them into account in Mr Doyle's care plan, consider your safety, and make sure you're supported." },
    { text: "Report the threats through the incident reporting system.",
      brief: "A record helps the team assess risk and protect staff.",
      detailed: "Reporting the threats creates a record, which matters for Mr Doyle's risk assessment and for decisions about police involvement." },
    { text: "Contact occupational health or the trust's staff support service.",
      brief: "Support can help with the anxiety you're feeling.",
      detailed: "The effect on your sleep and wellbeing is real. Staff support services can help you cope." },
    // distractors
    { text: "Keep it to yourself, as threats are part of working in psychiatry.",
      brief: "Threats shouldn't be accepted as normal, and you need support.",
      detailed: "Staff in psychiatry do face aggression, but threats to find you at home are serious and should be reported." },
    { text: "Avoid Mr Doyle on the ward, but carry on as normal.",
      brief: "Doesn't address the threats or your anxiety.",
      detailed: "This may reduce contact, but doesn't deal with the risk or how it's affecting you." },
    { text: "Take sick leave until Mr Doyle is discharged.",
      brief: "May be needed, but doesn't address the risk after discharge.",
      detailed: "Time off may be appropriate if you're unwell, but the threats relate to his discharge, so this doesn't solve the problem." },
    { text: "Tell Mr Doyle that you'll have him arrested if he threatens you again.",
      brief: "Likely to escalate the situation.",
      detailed: "Responding with a threat is unprofessional and may increase the risk." },
    { text: "Contact the police yourself before speaking to the team.",
      brief: "Police involvement may be needed, but should usually be coordinated with the team.",
      detailed: "Threats can be reported to the police, which makes this a plausible option. But the team needs to know first, so the threats can be considered in his care and risk assessment, and police involvement can be coordinated." }
  ],
  explanation: {
    issue: "This tests whether you seek support and report threats from a patient, rather than accepting them as part of the job.",
    keyDetails: "The threats are repeated and specific. They are affecting your sleep and safety. Mr Doyle is detained.",
    reasoning: "{k1} gets support and helps manage the risk, {k2} records the threats, and {k3} supports your wellbeing. The distractors normalise or avoid the problem ({d1}, {d2}), don't solve it ({d3}), escalate it ({d4}), or act without the team ({d5}).",
    competing: "{d5} is the hard distractor: police involvement may well be needed, but should usually be coordinated with the clinical team."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, looking after your own health; Domain 3, reporting risks." },
    { ref: "practitionerhealth", note: "Confidential support for doctors." }
  ],
  tags: ["threats", "personal safety", "wellbeing", "psychiatry"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-165", letters: "ADBC", format: "ranking", difficulty: "moderate",
  title: "No interpreter for a Deaf patient", setting: "Emergency department", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Disability awareness", "Communication", "Reasonable adjustments"],
  stem:
    "You are an F2 doctor in the Emergency Department. Mr Clarke, 45, is Deaf and uses British Sign Language. He has abdominal pain and has been waiting two hours. No interpreter has been booked.\n\n" +
    "He has come with a friend. He becomes frustrated when the triage nurse tries to talk to him, and gestures that he can't understand.",
  options: [
    { text: "Ask how he prefers to communicate, using writing in the meantime.",
      brief: "Writing allows basic communication while an interpreter is arranged.",
      detailed: "Many Deaf people can communicate in writing, though BSL may be their first language. Asking his preference, and writing in the meantime, respects him and gets things started." },
    { text: "Arrange a BSL interpreter, in person or by video link.",
      brief: "A professional interpreter allows a full assessment.",
      detailed: "A BSL interpreter makes sure he can describe his symptoms and understand his care. Video interpreting may be available quickly. It ranks second because you can begin communicating now while it's arranged." },
    { text: "Ask the friend who came with him to interpret.",
      brief: "May help briefly, but friends aren't reliable interpreters for clinical information.",
      detailed: "His friend may help with basic communication, especially if Mr Clarke wants this, but clinical information should go through a professional interpreter." },
    { text: "Speak loudly and slowly, so he can lip-read.",
      brief: "Lip-reading is unreliable, and shouting distorts lip patterns.",
      detailed: "Many Deaf people don't lip-read well, and speaking loudly makes it harder. This is likely to increase his frustration." }
  ],
  explanation: {
    issue: "This tests whether you make reasonable adjustments for a Deaf patient so he can communicate and receive safe care.",
    keyDetails: "He uses BSL. No interpreter has been booked. He has been waiting two hours and is frustrated.",
    reasoning: "{1} starts communicating now, and {2} arranges proper interpreting. {3} uses an unreliable interpreter, and {4} is ineffective.",
    competing: "Some would arrange the interpreter first. The key starts with writing because it begins communication immediately, while the interpreter is arranged."
  },
  refs: [
    { ref: "equality", note: "Reasonable adjustments for disabled people, including Deaf patients." },
    { ref: "consent", note: "Making sure patients have information in a form they can understand." }
  ],
  tags: ["Deaf patients", "BSL", "reasonable adjustments", "emergency department"]
}
];
