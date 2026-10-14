// Mock 2, part 1 (sjt-251 to sjt-262). Pool mock-2: never shipped to the browser bundle.
// Written in key order; see scripts/compile-sjt-drafts.js.
// Multiple choice: the three keyed options first, then five distractors. Ranking: best to worst.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";
const pool = "mock-2";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-251", pool, letters: "CBEDA", format: "ranking", difficulty: "moderate",
  title: "The unsigned chart", setting: "Out-of-hours / community", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Candour", "Patient safety", "Owning mistakes"],
  stem:
    "You are an F2 doctor in a GP practice. This afternoon you visited Mrs Doyle, 81, who is dying at home, and prescribed anticipatory medicines, including morphine for pain. You filled in the community medicines authorisation chart that the district nurses work from.\n\n" +
    "At 18:15, as you are about to leave the surgery, a district nurse phones from Mrs Doyle's house. She is in pain, but you didn't sign the chart, so the nurse can't give the morphine. The house is ten minutes' drive away.",
  options: [
    { text: "Go back to the house now and sign the chart.",
      brief: "This fixes your error fastest, so Mrs Doyle gets pain relief within minutes.",
      detailed: "The delay is your mistake, and you are the quickest route to putting it right. Returning to sign the chart lets the nurse give morphine within minutes and gives you the chance to apologise to Mrs Doyle and her family in person. It ranks first because her pain is happening now and every other option leaves her waiting longer." },
    { text: "Tell your GP supervisor what has happened before you go.",
      brief: "Your supervisor should know about an error affecting a patient. They can support you and help make sure nothing else on the chart is wrong.",
      detailed: "An error that has delayed symptom relief for a dying patient should be shared with your supervisor, who can check the rest of your paperwork and support you. It ranks below returning to the house because telling your supervisor doesn't, by itself, relieve Mrs Doyle's pain." },
    { text: "Record it as a significant event so the practice can review the process.",
      brief: "Useful for learning, but less urgent than her pain.",
      detailed: "A significant event review could prompt a simple check, such as a second person looking at authorisation charts before a visit ends. It is the right thing to do, but it can wait until tomorrow, so it ranks third." },
    { text: "Ask the district nurse to arrange for the out-of-hours GP to authorise the dose.",
      brief: "This is a safe route, but it passes your error to others and is likely to take longer.",
      detailed: "An out-of-hours GP could authorise the morphine, so this does lead to pain relief by a legitimate route. However, the out-of-hours service may take an hour or more to visit, Mrs Doyle stays in pain meanwhile, and you would be asking the nurse to sort out a problem you can fix in ten minutes." },
    { text: "Tell the nurse to give the dose now, and that you'll sign the chart tomorrow.",
      brief: "Asks the nurse to give a controlled drug without a valid authorisation.",
      detailed: "This would relieve the pain quickly, which is why it is tempting. But it asks the nurse to give a controlled drug without a valid authorisation, which she shouldn't do under her own professional code, and it puts her registration at risk to cover your mistake. A safe, quick alternative exists, so this is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you take personal responsibility for an error that is causing a patient harm now, and choose the quickest safe way to fix it.",
    keyDetails: "Mrs Doyle is in pain now. The problem is your missing signature. You can be there in ten minutes. The nurse can't lawfully give the morphine without a valid authorisation.",
    reasoning: "{1} relieves her pain fastest and lets you apologise in person. {2} and {3} deal with support and learning, which matter but are less urgent. {4} is safe but slower and passes your mistake on, and {5} asks a colleague to act outside her professional code.",
    competing: "{4} is a legitimate pathway and would be the right choice if you couldn't get there quickly, for example if the house were an hour away. Here, you are the faster route."
  },
  refs: [
    { ref: "candour", note: "Being open with patients and families when something goes wrong." },
    { ref: "prescribing", note: "Responsibilities when prescribing controlled drugs for others to give." },
    { ref: "nmccode", note: "Nurses giving medicines only in line with a valid prescription or authorisation." }
  ],
  tags: ["candour", "palliative care", "controlled drugs", "community"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-252", pool, letters: "BCE", format: "multiple_choice", difficulty: "easy",
  title: "Consent or confusion", setting: "Orthopaedics", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Knowledge, skills and development", "Patients, partnership and communication"],
  competencies: ["Prioritisation", "Recognising deterioration", "Communication with seniors"],
  stem:
    "You are an F2 doctor in orthopaedics. Your consultant consented the four patients on this afternoon's hip and knee list in clinic, and has asked you to go to the day unit and confirm their consent before theatre. The list starts in 40 minutes.\n\n" +
    "As you leave the ward, a nurse tells you that Mr Hughes, 78, who had a hip fracture fixed two days ago, has become newly confused in the last hour and is pulling at his cannula. His observations were normal this morning.",
  options: [
    // keyed
    { text: "See Mr Hughes before you go to the day unit.",
      brief: "New confusion after surgery may be a sign of a serious problem, so he needs assessing now.",
      detailed: "Acute confusion in an older patient after a hip fracture can be caused by sepsis, hypoxia, hypoglycaemia, urinary retention, pain or drugs. Some of these are dangerous and treatable, and he is also at risk of pulling out his cannula or falling. A short, focused assessment now comes before routine consent for elective patients." },
    { text: "Phone your consultant to say consent will be delayed and why.",
      brief: "Lets the consultant replan, for example by asking someone else to consent.",
      detailed: "The consultant needs to know the list may start late. They may ask the registrar to consent the patients or reorder the list. A brief call keeps the team informed and avoids patients being sent for theatre without consent." },
    { text: "Ask the nurse to repeat his observations and check his glucose.",
      brief: "This gives you useful information quickly and spots an urgent cause.",
      detailed: "Repeat observations and a capillary glucose can be done in minutes and may reveal a cause such as sepsis or hypoglycaemia. Asking for them as you head to see him makes good use of the team's time." },
    // distractors
    { text: "Confirm consent for the list, then see Mr Hughes once theatre starts.",
      brief: "This puts routine paperwork ahead of a possibly unwell patient.",
      detailed: "Consent matters, but the elective patients are stable and others can help. Mr Hughes may be developing a serious illness, and leaving him for an hour or more could delay treatment." },
    { text: "Ask the nurse to call you back if he becomes more agitated.",
      brief: "Waits for things to get worse, rather than finding the cause.",
      detailed: "New confusion is already a change from normal. Waiting for more agitation delays finding the cause." },
    { text: "Prescribe a low dose of haloperidol so the nurses can settle him.",
      brief: "Sedating without assessment can mask the cause and cause harm.",
      detailed: "Antipsychotics are not first-line for delirium. Giving one without assessing him could hide a serious cause, such as hypoxia, and increases the risk of falls." },
    { text: "Phone his daughter to ask whether he is ever confused at home.",
      brief: "Useful background later, but not the first priority.",
      detailed: "Knowing his usual cognition helps, and it may be worth asking later. It doesn't replace examining him, and it takes time you need for the assessment." },
    { text: "Confirm consent quickly by going over only the main risks.",
      brief: "Rushed consent isn't valid consent.",
      detailed: "Confirming consent means checking that patients still understand the risks, benefits and alternatives and still want to go ahead. Cutting corners to save time doesn't solve the problem and isn't fair to them." }
  ],
  explanation: {
    issue: "This tests whether you put a possibly deteriorating patient ahead of routine work, while keeping your team informed.",
    keyDetails: "The confusion is new and he has had surgery recently. The consent is for elective patients, and others could do it. The list starts in 40 minutes.",
    reasoning: "{k1} assesses the patient who may be unwell, {k3} gets quick information, and {k2} lets the consultant replan the list. The distractors delay assessment ({d1}, {d2}), treat the symptom rather than the cause ({d3}), prioritise background information ({d4}), or compromise consent ({d5}).",
    competing: "{d4} is a reasonable thing to do later in the day, but it shouldn't come before examining him."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, prioritising care and recognising deterioration." },
    { ref: "consent", note: "What patients need to know to give valid consent." }
  ],
  tags: ["prioritisation", "delirium", "consent", "orthopaedics"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-253", pool, letters: "DACEB", format: "ranking", difficulty: "moderate",
  title: "Results, alone", setting: "General practice", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Breaking bad news", "Respecting autonomy", "Confidentiality"],
  stem:
    "You are an F2 doctor in a GP practice. Mrs Ellis, 74, lives alone and was referred to the memory clinic after her son noticed she was forgetting things. She was unwell and missed her feedback appointment, so the clinic has written to the practice: the assessment is consistent with early Alzheimer's disease.\n\n" +
    "She has come to the surgery on her own. She tells you her son is \"far too busy\" to come with her and that she would like to know what the tests showed.",
  options: [
    { text: "Ask what she has been thinking the tests might show.",
      brief: "Finding out what she expects lets you pitch the news at the right level.",
      detailed: "Starting with her understanding and concerns helps you judge how much she already suspects and how she wants to hear it. It also gives her some control at the start of a difficult conversation, so it ranks first." },
    { text: "Explain the diagnosis plainly and book a follow-up appointment within a fortnight.",
      brief: "She has asked to know. Honest information plus a follow-up gives her support.",
      detailed: "She is entitled to her results and has asked for them. Clear language and an early follow-up give her time to absorb the news and come back with questions, perhaps with someone she trusts. It ranks second because it works best after you have found out where she is starting from." },
    { text: "Suggest she rebooks with her son before you discuss the results.",
      brief: "Well meant, but it delays information she has asked for.",
      detailed: "Support from family can help, and you could offer it as a choice. Insisting on waiting, though, when she has clearly said she wants to know, is paternalistic and leaves her anxious about what you are holding back. It ranks third because it is still kinder and more honest than the two options below." },
    { text: "Describe the results as 'some memory changes' and avoid the word dementia.",
      brief: "Vague wording can leave her without the information she needs to plan.",
      detailed: "Gentle language is fine, but avoiding the diagnosis altogether leaves her unable to plan, for example for driving, finances or a lasting power of attorney. It falls short of honest communication." },
    { text: "Phone her son after the appointment to explain the diagnosis.",
      brief: "Sharing her diagnosis without her consent breaches confidentiality.",
      detailed: "She has capacity and hasn't agreed to her son being told. However well meant, telling him breaches her confidentiality and takes a decision that is hers to make. You could offer to help her tell him if she would like that." }
  ],
  explanation: {
    issue: "This tests how you share a significant diagnosis with a patient who has asked to know and has come alone, while respecting her choices.",
    keyDetails: "She has asked for the results. She has capacity. She has come alone by choice. The diagnosis affects future planning.",
    reasoning: "{1} finds out her starting point, and {2} gives honest information with follow-up. {3} delays what she has asked for, and {4} is evasive. {5} breaches her confidentiality.",
    competing: "Some would offer the choice of returning with her son first. Offering that choice is fine; insisting on it is what ranks {3} below {2}."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, giving patients the information they want in a way they can understand." },
    { ref: "confidentiality", note: "Sharing information with relatives only with the patient's consent." }
  ],
  tags: ["bad news", "dementia", "general practice", "confidentiality"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-254", pool, letters: "DEF", format: "multiple_choice", difficulty: "hard",
  title: "No sign out", setting: "Theatres / day surgery", attribute: P,
  topic: "A colleague's error or poor performance",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Speaking up", "Patient safety", "Working with seniors"],
  stem:
    "You are an F2 doctor assisting on a busy general surgery day list. For the first two patients, the team skipped the 'sign out' stage of the surgical safety checklist to save time. The swab and instrument counts were not confirmed aloud.\n\n" +
    "The third operation, a laparoscopic cholecystectomy, is now finishing. The consultant is closing and says, \"Let's get the next one in.\"",
  options: [
    // keyed
    { text: "Ask the team to do sign out, with the counts, before this patient leaves.",
      brief: "Sign out is how the team confirms nothing has been left inside the patient.",
      detailed: "The count is the main protection against a retained swab or instrument. Asking politely but clearly for sign out before the patient leaves theatre protects this patient directly. The checklist is designed so that any team member can call for it." },
    { text: "Discuss the skipped checks with the consultant after the list.",
      brief: "A private conversation gives the consultant a chance to respond and to change practice.",
      detailed: "Raising the pattern with the consultant directly, once the list is over, is respectful and may be enough to change practice. It also deals with the first two patients, whose counts were never confirmed aloud." },
    { text: "Report the skipped checks through the incident reporting system.",
      brief: "Repeated omission of a safety check is a system risk that should be reviewed.",
      detailed: "Skipping sign out for several patients is a safety concern beyond one person. Reporting it lets the theatre team check that the counts for the earlier patients were in fact correct, and supports learning. Incident reporting is about improving safety, not blaming individuals." },
    // distractors
    { text: "Ask the scrub nurse quietly whether the count was correct.",
      brief: "Better than nothing, but it doesn't confirm the count for the team.",
      detailed: "The scrub nurse may well have counted, and asking shows the right concern. But a quiet check doesn't replace sign out, which confirms the count with the whole team before the patient leaves." },
    { text: "Wait until the end of the list and raise all three patients at once.",
      brief: "This patient may have left theatre by then.",
      detailed: "By the end of the list, this patient will be in recovery or on the ward. If something has been retained, finding it before the patient leaves theatre is far better." },
    { text: "Tell the third patient after the operation that the count wasn't confirmed.",
      brief: "Premature, as nothing is known to have gone wrong.",
      detailed: "If a count were found to be wrong, the patient would need to be told. At this stage, the right step is to confirm the count, not to alarm the patient." },
    { text: "Leave it, as the consultant is responsible for theatre safety.",
      brief: "Every team member is responsible for speaking up about safety.",
      detailed: "The checklist depends on everyone, including juniors, being willing to speak up. Staying silent because a senior is present is exactly what it is designed to prevent." },
    { text: "Email the medical director about the consultant's practice.",
      brief: "Escalating outside the theatre team at this stage is premature.",
      detailed: "Concerns can go to senior managers if they aren't addressed locally. Going straight to the medical director, without speaking to the consultant or reporting through normal routes, is disproportionate at this stage." }
  ],
  explanation: {
    issue: "This tests whether you speak up about a skipped safety check in the moment, despite hierarchy and time pressure, and then deal with the wider pattern appropriately.",
    keyDetails: "Sign out has been missed for several patients. The counts weren't confirmed aloud. The current patient hasn't left theatre yet. The consultant is pressing to move on.",
    reasoning: "{k1} protects the patient in front of you. {k2} and {k3} address the pattern: directly with the consultant, and through incident reporting so earlier patients can be checked. The distractors check incompletely ({d1}), act too late ({d2}), alarm the patient ({d3}), stay silent ({d4}), or escalate disproportionately ({d5}).",
    competing: "{d1} is the most tempting. It feels less confrontational, but it doesn't achieve what sign out achieves: a confirmed count, agreed by the team, before the patient leaves."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, contributing to safety systems and speaking up." },
    { ref: "concerns", note: "Raising concerns about patient safety, including with seniors." },
    { ref: "psirf", note: "Reporting safety incidents to support learning." }
  ],
  tags: ["surgical safety", "speaking up", "theatres", "checklist"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-255", pool, letters: "ABECD", format: "ranking", difficulty: "moderate",
  title: "Missing from handover", setting: "Paediatrics", attribute: C,
  topic: "Handover, continuity and loose ends",
  gmcDomains: ["Safety and quality", "Collaboration, teamwork and leadership"],
  competencies: ["Handover", "Safeguarding", "Attention to detail"],
  stem:
    "You are an F2 doctor in paediatrics, finishing a day shift. Lily, 3, was admitted today with bronchiolitis. Earlier you spoke to her social worker, who told you Lily is on a child protection plan and that her mother's partner must not have unsupervised contact with her.\n\n" +
    "You notice the registrar's written handover sheet for the night team doesn't mention the child protection plan. Handover starts in five minutes.",
  options: [
    { text: "Add the information to the sheet and point it out to the night doctor.",
      brief: "The night team must know about the contact restriction, in writing and in person.",
      detailed: "The restriction protects Lily overnight, when her mother's partner could visit. Adding it to the written sheet and highlighting it in person makes sure the night team knows. It ranks first because it closes the gap before you go home." },
    { text: "Tell the nurse in charge about the contact restriction before you leave.",
      brief: "Nurses manage visiting, so they need to know directly.",
      detailed: "Ward nurses are the people most likely to notice who is visiting, so they need to know about the restriction. It ranks second only because the night medical team also needs the information, which the first option covers." },
    { text: "Mention to the registrar that safeguarding details should go on the sheet.",
      brief: "This helps prevent the same gap with future patients.",
      detailed: "A brief, constructive word helps make sure safeguarding information is included in future. It doesn't help Lily tonight, so it ranks below the actions that protect her now." },
    { text: "Ask Lily's mother not to bring her partner to the ward tonight.",
      brief: "Well intentioned, but it isn't the way the restriction should be managed.",
      detailed: "The plan sets out how contact is managed, and an ad hoc conversation with her mother may be unhelpful or inconsistent with what social care has agreed. It also relies on the mother rather than the ward team being aware. It ranks fourth." },
    { text: "Leave the sheet as it is, as the plan will be in the medical notes.",
      brief: "Leaves the night team unaware of a risk to Lily.",
      detailed: "Busy night teams rely on handover and may not read every note. Assuming they will find it leaves Lily unprotected, so this is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you close a safety gap in handover before going home, particularly when it involves safeguarding.",
    keyDetails: "Lily has a child protection plan with a contact restriction. The night team doesn't know. You have five minutes before handover.",
    reasoning: "{1} informs the night doctors and {2} informs the nurses who manage visiting. {3} helps prevent future gaps. {4} bypasses the agreed plan, and {5} leaves Lily unprotected.",
    competing: "{1} and {2} are close. The key puts the handover first because it is the formal record the night team works from, and you can tell the nurse in charge straight afterwards."
  },
  refs: [
    { ref: "children", note: "Sharing information to protect children." },
    { ref: "workingtogether", note: "Child protection plans and multi-agency working." }
  ],
  tags: ["handover", "safeguarding", "paediatrics", "child protection"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-256", pool, letters: "AGH", format: "multiple_choice", difficulty: "moderate",
  title: "\"Do everything\"", setting: "Elderly care ward", attribute: E,
  topic: "End of life, DNACPR and ceilings of care",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Communicating with families", "End-of-life care", "Honesty"],
  stem:
    "You are an F2 doctor on an elderly care ward at the weekend. Mr Kaur, 92, has advanced heart failure and is now drowsy and lacks capacity. On Friday his consultant decided that cardiopulmonary resuscitation (CPR) would not work for him, recorded a DNACPR decision, and planned to focus on comfort.\n\n" +
    "His two sons arrive and tell you they want \"everything done\", including resuscitation and intensive care. They say no one discussed the decision with them.",
  options: [
    // keyed
    { text: "Ask the sons, in a quiet room, what they understand about his condition.",
      brief: "Listening first helps you understand their concerns and what they know.",
      detailed: "Their request may come from shock, guilt or not having been told how ill he is. Starting with their understanding, in private, lets you respond to what is actually driving them and shows that you take them seriously." },
    { text: "Explain honestly why CPR wouldn't help him, and the care he will continue to receive.",
      brief: "Honest, compassionate explanation, focused on what will be done rather than what won't.",
      detailed: "Families should be told about DNACPR decisions and the reasons for them. Explaining that CPR would not work, while stressing that he will be kept comfortable and cared for, is honest and reassuring. A DNACPR decision is not a decision to stop caring." },
    { text: "Ask the on-call consultant to speak with the family today.",
      brief: "A senior can review the decision and answer their questions with authority.",
      detailed: "The family say they weren't consulted. When a patient lacks capacity, those close to him should usually be involved before a DNACPR decision is made, so the consultant should know this has been raised. The on-call consultant can review the decision, acknowledge what went wrong and speak with them with the authority of the responsible team, and this shouldn't wait until Monday." },
    // distractors
    { text: "Tell them the decision is medical and isn't theirs to make.",
      brief: "Technically accurate, but dismissive and likely to escalate their distress.",
      detailed: "Doctors aren't obliged to provide treatment that wouldn't work, but saying so bluntly ignores the family's distress and the fact that they should have been consulted." },
    { text: "Arrange for the intensive care team to assess him, to reassure the family.",
      brief: "Refers to a team when there is no clinical reason to.",
      detailed: "An intensive care review is appropriate when admission could be beneficial. Requesting one only to placate the family uses scarce resources and may raise false hope." },
    { text: "Cancel the DNACPR form until the family can meet the consultant on Monday.",
      brief: "Overrides a valid clinical decision and could lead to futile CPR.",
      detailed: "If he arrests over the weekend, he might receive CPR that would not work and could cause him distress and injury at the end of his life. Disagreement should be resolved by discussion, not by removing the decision." },
    { text: "Offer them a second medical opinion straight away.",
      brief: "Second opinions have a place, but not before the decision has been explained.",
      detailed: "A second opinion can help if disagreement continues after a full explanation. Offering one before anyone has explained the decision skips the conversation they were denied." },
    { text: "Explain that you weren't involved in the decision and suggest they come back on Monday.",
      brief: "Leaves a distressed family without support over the weekend.",
      detailed: "It may be true that you weren't involved, but it isn't a reason to send them away. Their father is dying, and they need a conversation now." }
  ],
  explanation: {
    issue: "This tests how you respond to a family's distress about a DNACPR decision with honesty, compassion and appropriate senior involvement.",
    keyDetails: "The decision is clinical: CPR wouldn't work. The family weren't consulted. He is dying, and it is the weekend.",
    reasoning: "{k1} listens, {k2} explains honestly while focusing on care, and {k3} brings in the on-call consultant. The distractors are dismissive ({d1}, {d5}), use a referral to placate ({d2}), override the decision ({d3}), or jump to a second opinion before explaining ({d4}).",
    competing: "{d4} is reasonable later if disagreement continues. The key prefers a full explanation from the team first, including an honest acknowledgement that the family should have been involved."
  },
  refs: [
    { ref: "eol", note: "Discussing CPR decisions with those close to the patient." },
    { ref: "respect", note: "Recording and discussing emergency care recommendations." }
  ],
  tags: ["DNACPR", "end of life", "families", "elderly care"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-257", pool, letters: "EABDC", format: "ranking", difficulty: "easy",
  title: "Coughing on the unit", setting: "Intensive care", attribute: P,
  topic: "An impaired or unwell colleague",
  gmcDomains: ["Safety and quality", "Trust and professionalism"],
  competencies: ["Patient safety", "Supporting colleagues", "Raising concerns"],
  stem:
    "You are an F2 doctor in intensive care. Dr Barnes, the consultant on duty, has been coughing and sweating all morning and says he \"probably has a chest infection\". He is examining ventilated patients, some of whom are immunosuppressed.\n\n" +
    "He tells the team he can't go home because there is no one to cover him.",
  options: [
    { text: "Speak to Dr Barnes privately about your concern for him and the patients.",
      brief: "A direct, kind conversation is the right first step.",
      detailed: "Raising it with him privately respects him and may be all that is needed. You can point out the risk to immunosuppressed patients and that he looks unwell, and ask whether cover can be found, so it ranks first." },
    { text: "Tell the unit's clinical lead that Dr Barnes is unwell and needs cover.",
      brief: "The clinical lead can arrange cover, which is the real barrier.",
      detailed: "Dr Barnes feels he can't leave because there is no cover. The clinical lead can solve that. It ranks second because speaking to him first is more respectful and may resolve things, but it is the right escalation if he won't step back." },
    { text: "Ask the nurse in charge to give him a mask to wear.",
      brief: "Reduces the risk a little, but doesn't address him working while unwell.",
      detailed: "A mask may reduce transmission and is better than nothing. But a consultant who is feverish and coughing may not be fit to work, so this only partly deals with the problem." },
    { text: "Avoid working closely with him and leave it to the nursing team.",
      brief: "Protects you, but not the patients.",
      detailed: "This leaves the risk to patients unchanged and passes responsibility to others. Every member of the team has a duty to act on a risk to patients." },
    { text: "Post in the unit's group chat that the consultant is unwell and refusing to go home.",
      brief: "Unprofessional and undermining, and it solves nothing.",
      detailed: "Discussing a colleague's health in a group chat is disrespectful and could breach his privacy. It doesn't arrange cover or reduce the risk, so it is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you act when a senior colleague's illness may put patients at risk, starting with a respectful conversation.",
    keyDetails: "He is visibly unwell. The patients are vulnerable. His reason for staying is a lack of cover, which others can solve.",
    reasoning: "{1} speaks to him directly, and {2} escalates to someone who can arrange cover. {3} only partly reduces the risk, {4} passes the problem on, and {5} is unprofessional.",
    competing: "Some would go to the clinical lead first because of the risk to vulnerable patients. A quick private word is the natural first step, and the clinical lead can follow within minutes."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, protecting patients from risks posed by a colleague's health." },
    { ref: "concerns", note: "Raising concerns about patient safety." }
  ],
  tags: ["unwell colleague", "infection control", "intensive care", "patient safety"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-258", pool, letters: "BDG", format: "multiple_choice", difficulty: "moderate",
  title: "He wants to leave", setting: "Psychiatry", attribute: C,
  topic: "Working beyond competence and asking for help",
  gmcDomains: ["Knowledge, skills and development", "Safety and quality"],
  competencies: ["Recognising limits", "Risk assessment", "Mental Health Act"],
  stem:
    "You are an F2 doctor on call overnight for an inpatient psychiatric unit and are the only doctor on site. Mr Adeyemi, 29, is an informal patient admitted three days ago with severe depression and suicidal thoughts.\n\n" +
    "At 01:00 he tells the nurses he is leaving. The nurse in charge asks you whether you will detain him. You have never used a holding power before. The on-call psychiatry registrar is at home and can be reached by phone.",
  options: [
    // keyed
    { text: "Talk with Mr Adeyemi about why he wants to leave, and assess his risk.",
      brief: "You need to understand his mental state and risk before any decision.",
      detailed: "His reasons may be practical, such as a family problem, or a sign of worsening risk. A calm conversation and risk assessment is the basis for any decision, and it may also persuade him to stay voluntarily." },
    { text: "Phone the on-call registrar for advice on whether to detain him.",
      brief: "Detention is a serious decision you haven't made before, so senior advice is needed.",
      detailed: "Using a holding power under the Mental Health Act removes someone's liberty. You haven't done this before, and the registrar is available by phone. Seeking advice is the right response to a decision beyond your experience." },
    { text: "Ask the nurse in charge to stay with him while you phone for advice.",
      brief: "Keeps him safe in the meantime and allows the nurse to act if needed.",
      detailed: "A nurse staying with him helps keep him safe while you get advice. A qualified mental health nurse also has her own short holding power, if he tries to leave before a doctor can decide." },
    // distractors
    { text: "Let him leave, as he is an informal patient.",
      brief: "He has the right to leave, but his risk needs assessing first.",
      detailed: "Informal patients can leave, but he was admitted with suicidal thoughts three days ago. Letting him go without assessing his risk could be very dangerous." },
    { text: "Detain him yourself under section 5(2) and tell the registrar in the morning.",
      brief: "A decision this serious, made for the first time, should be discussed with a senior.",
      detailed: "Detention may turn out to be appropriate, but making the decision alone, without experience or advice, risks an unlawful or unnecessary detention. Advice is readily available." },
    { text: "Ask security to stand at the ward exit until the morning team arrives.",
      brief: "Restricting his movement without a legal basis is unlawful.",
      detailed: "Physically preventing an informal patient from leaving without using the Mental Health Act would be an unlawful deprivation of liberty, and it doesn't address his risk." },
    { text: "Prescribe a sedative to help him sleep until morning.",
      brief: "Sedation doesn't address the risk and shouldn't be used to manage leaving.",
      detailed: "He may well need help with sleep, but sedating him to stop him leaving is inappropriate and doesn't assess his risk." },
    { text: "Phone the police to bring him back if he leaves.",
      brief: "Premature, and it doesn't address what is happening now.",
      detailed: "Police involvement may be needed if a high-risk patient goes missing, but he is still on the ward, and the priority is assessing him now." }
  ],
  explanation: {
    issue: "This tests whether you recognise a decision that is beyond your experience and get senior help, while keeping the patient safe.",
    keyDetails: "He is informal but high risk. You have never used a holding power. The registrar can be phoned. He is still on the ward.",
    reasoning: "{k1} assesses him, {k2} gets senior advice on the legal decision, and {k3} keeps him safe in the meantime. The distractors ignore the risk ({d1}), act alone ({d2}), restrict him unlawfully ({d3}), sedate inappropriately ({d4}), or jump ahead ({d5}).",
    competing: "{d2} might be what the registrar advises, but making that decision alone, for the first time and without advice, isn't safe practice."
  },
  refs: [
    { ref: "mha5", note: "Holding powers for patients already in hospital." },
    { ref: "gmp", note: "Domain 1, recognising and working within the limits of your competence." }
  ],
  tags: ["mental health act", "competence", "psychiatry", "risk assessment"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-259", pool, letters: "BDCA", format: "ranking", difficulty: "hard",
  title: "Always in the room", setting: "Obstetrics & gynaecology", attribute: E,
  topic: "Relatives and carers",
  gmcDomains: ["Patients, partnership and communication", "Safety and quality"],
  competencies: ["Privacy", "Safeguarding", "Communication with families"],
  stem:
    "You are an F2 doctor on the antenatal ward. Mrs Malik, 23, is 32 weeks pregnant and has been admitted with abdominal pain. She speaks fluent English, but her mother-in-law has stayed beside her throughout, answers most questions for her, and has said she will stay for every examination.\n\n" +
    "You need to examine Mrs Malik and take a full history, which on this unit includes asking every pregnant woman, in private, about her safety at home.",
  options: [
    { text: "Explain that part of every assessment is done alone, and invite her mother-in-law out.",
      brief: "Presenting private time as routine protects Mrs Malik without accusing anyone.",
      detailed: "Seeing every pregnant woman alone for part of the assessment is standard practice, which is why routine enquiry about domestic abuse is done in private. Framing it as routine is truthful, doesn't single the family out, and gives Mrs Malik a safe chance to speak." },
    { text: "Ask Mrs Malik, in front of her mother-in-law, whether she would like her to stay.",
      brief: "Respects her choice in principle, but she may not feel free to answer.",
      detailed: "Asking the patient is respectful, but in front of a relative who has been answering for her, she may not feel able to say no. It ranks below the first option because it can't give her a genuinely private choice." },
    { text: "Complete the examination with her mother-in-law present and ask the midwife to find time alone later.",
      brief: "Gets the clinical assessment done, but postpones a safety question.",
      detailed: "Examining her promptly matters, and a midwife may find a private moment later. But it puts off the routine safety question, which may not happen if her mother-in-law never leaves her side." },
    { text: "Tell her mother-in-law that you need to see Mrs Malik alone because you are worried about her home situation.",
      brief: "Could put Mrs Malik at risk if there is a problem at home.",
      detailed: "If Mrs Malik is being controlled or abused, telling a family member that you suspect it could increase her risk. It also accuses the family without evidence. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you make space for a private conversation with a patient whose relative is always present, without causing offence or putting her at risk.",
    keyDetails: "Her mother-in-law answers for her and plans to stay. Routine safety questions must be asked in private. Mrs Malik needs examining.",
    reasoning: "{1} creates privacy as a matter of routine. {2} offers a choice she may not be free to make. {3} delays the safety question, and {4} could put her in danger.",
    competing: "{2} and {3} are close. Asking her directly at least offers a choice now, whereas {3} defers the question and relies on someone else finding a moment later."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, respecting patients' privacy and dignity." },
    { ref: "chaperones", note: "Who may be present during an intimate examination." }
  ],
  tags: ["privacy", "domestic abuse", "obstetrics", "relatives"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-260", pool, letters: "EFH", format: "multiple_choice", difficulty: "moderate",
  title: "Out-of-date adrenaline", setting: "Out-of-hours / community", attribute: P,
  topic: "Raising concerns about systems and safety",
  gmcDomains: ["Safety and quality"],
  competencies: ["Patient safety", "Incident reporting", "Following procedures"],
  stem:
    "You are an F2 doctor working an evening shift for the GP out-of-hours service, doing home visits with a driver. Before setting off, you check the emergency drug bag in the car and find that the adrenaline for anaphylaxis expired two months ago.\n\n" +
    "The bag has a signed checklist saying it was checked last week. Your first visit is waiting.",
  options: [
    // keyed
    { text: "Get in-date adrenaline from the base before setting off.",
      brief: "You may need it on any visit, so it must be replaced now.",
      detailed: "Anaphylaxis can occur at any time, and expired adrenaline may not work. Replacing it before you leave takes a few minutes and means you are equipped for an emergency." },
    { text: "Check the expiry dates of the rest of the drugs in the bag.",
      brief: "If one item was missed, others may have been too.",
      detailed: "The checklist was signed, yet expired adrenaline was missed. Other drugs in the bag may also be out of date, so a quick check protects patients on tonight's visits." },
    { text: "Report the expired drug and the signed check as an incident.",
      brief: "A signed check that missed an expired drug is a system problem to review.",
      detailed: "The checking process failed, which may affect other cars too. Reporting it lets the service review how bags are checked. The aim is learning, not blame." },
    // distractors
    { text: "Set off now and collect new adrenaline when you return to base.",
      brief: "You would be without working adrenaline during your visits.",
      detailed: "Your first patient is waiting, but an emergency could arise on any visit. A few minutes now is better than being unable to treat anaphylaxis." },
    { text: "Note the expiry on the checklist so the next shift sees it.",
      brief: "A note may help later, but it doesn't make tonight's bag safe or explain the failure.",
      detailed: "Recording what you found has some value, but it leaves you without working adrenaline tonight and doesn't trigger any review of why the check missed it." },
    { text: "Tell your driver so he can mention it to whoever restocks the cars.",
      brief: "An informal message may never reach the right person.",
      detailed: "Passing it on informally doesn't make sure it is fixed or reviewed, and it relies on someone else remembering." },
    { text: "Find out who signed the checklist and confront them about it.",
      brief: "Confrontation isn't the way to deal with a system failure.",
      detailed: "The person who signed may have made an honest mistake, or the system may be at fault. The incident process is the right route for finding out what happened." },
    { text: "Email the service's pharmacist next week about stock checks.",
      brief: "Too slow, and it doesn't deal with tonight's risk.",
      detailed: "Contacting pharmacy may be useful, but waiting a week leaves the problem in place, and it doesn't address tonight's shift." }
  ],
  explanation: {
    issue: "This tests whether you deal with an immediate equipment risk and also report a failed safety check.",
    keyDetails: "The adrenaline has expired. The bag was signed as checked. You are about to start visits. Replacing it takes minutes.",
    reasoning: "{k1} fixes the immediate risk, {k2} checks for other gaps, and {k3} reports the failure so it can be reviewed. The distractors leave you without a working drug ({d1}, {d2}), rely on informal messages ({d3}, {d5}), or confront rather than report ({d4}).",
    competing: "{d1} is tempting because a patient is waiting, but the delay to replace the adrenaline is short and the risk of not having it is serious."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, acting on risks to patient safety." },
    { ref: "psirf", note: "Reporting incidents so systems can be improved." }
  ],
  tags: ["equipment", "anaphylaxis", "out-of-hours", "incident reporting"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-261", pool, letters: "BDEAC", format: "ranking", difficulty: "moderate",
  title: "Asleep at the wheel", setting: "General surgery", attribute: C,
  topic: "Your own health, fatigue and wellbeing",
  gmcDomains: ["Trust and professionalism", "Safety and quality"],
  competencies: ["Self-care", "Recognising fatigue", "Raising concerns"],
  stem:
    "You are an F2 doctor in general surgery. After agreeing to cover extra shifts for absent colleagues, you have worked seven days in a row, most of them long days. Driving home tonight, you briefly fell asleep at a junction and woke when the car behind sounded its horn.\n\n" +
    "You are off tomorrow but rostered for a long day on Saturday, and the rota coordinator has asked if you could do an extra shift on Sunday.",
  options: [
    { text: "Plan a safe way home after Saturday's shift, such as a taxi.",
      brief: "Falling asleep while driving is an immediate danger to you and others.",
      detailed: "You have already fallen asleep at the wheel once, and Saturday's long day will leave you tired again. Planning a safe way home, such as a taxi or a lift, deals with the most immediate danger to you and other road users, so it ranks first." },
    { text: "Tell your educational supervisor about the extra shifts and the near miss.",
      brief: "Someone senior should know, and can help you work safely.",
      detailed: "Your supervisor can help you review your workload, and can involve the guardian of safe working, whose role includes monitoring whether doctors' hours and rest are safe. It ranks second because it deals with the cause rather than Saturday's journey." },
    { text: "Tell the rota coordinator you can't take on any more extra shifts.",
      brief: "This protects you from adding to your fatigue.",
      detailed: "Saying no is reasonable and necessary when you are this tired. It ranks below telling your supervisor because it doesn't, by itself, make anyone review the pattern that led here." },
    { text: "Have a strong coffee before you drive home tomorrow.",
      brief: "Caffeine may help briefly, but it doesn't make a very tired driver safe.",
      detailed: "Caffeine can help briefly, but it isn't a reliable defence against falling asleep when you are this tired. It is better than doing nothing, which is why it ranks fourth." },
    { text: "Carry on as normal, as you didn't have an accident.",
      brief: "Ignores a clear warning sign that you and others are at risk.",
      detailed: "Falling asleep while driving is a serious warning. Carrying on unchanged leaves the risk in place for you, other road users, and potentially your patients. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you recognise dangerous fatigue in yourself and act on it, both immediately and by addressing its cause.",
    keyDetails: "You fell asleep while driving. You have another long day soon. The cause is an excess of shifts, and you are being asked to do more.",
    reasoning: "{1} deals with the next danger, {2} gets senior support with the cause, and {3} stops the problem getting worse. {4} is a weak measure, and {5} ignores the risk.",
    competing: "Some would put telling your supervisor first because it addresses the cause. The key puts the next journey home first because that is the risk most likely to cause harm."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, looking after your own health so it doesn't put others at risk." },
    { ref: "practitionerhealth", note: "Confidential support for doctors' health, including burnout." }
  ],
  tags: ["fatigue", "driving", "rota", "wellbeing"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-262", pool, letters: "ABC", format: "multiple_choice", difficulty: "easy",
  title: "Fasting and insulin", setting: "General practice", attribute: E,
  topic: "Cultural, religious and language needs",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting beliefs", "Shared decision-making", "Patient safety"],
  stem:
    "You are an F2 doctor in a GP practice. Mr Hussain, 56, has type 2 diabetes and takes a long-acting insulin each evening, plus metformin. Ramadan begins in three weeks, and he tells you he intends to fast from dawn until sunset, as he has done every year.\n\n" +
    "Last year he had two episodes of feeling shaky and sweaty in the late afternoon. He asks how he should adjust his medicines.",
  options: [
    // keyed
    { text: "Ask how he managed last year and what the shaky episodes were like.",
      brief: "His experience shows the risks you need to plan around.",
      detailed: "The episodes sound like hypoglycaemia. Understanding when they happened and what he did helps you tailor his plan, and shows you take his experience seriously." },
    { text: "Agree an insulin plan for the fast with him, with the practice diabetes nurse.",
      brief: "Shared planning lets him fast as safely as possible.",
      detailed: "Insulin doses and timing usually need adjusting around the pre-dawn and sunset meals to reduce the risk of hypoglycaemia. Agreeing a plan with him, with the advice of the practice diabetes nurse, respects his decision and protects his safety." },
    { text: "Explain how to check his glucose while fasting, and when to break the fast.",
      brief: "Monitoring and a clear threshold for breaking the fast prevent serious hypos.",
      detailed: "Many people worry that checking blood glucose breaks the fast. Explaining that monitoring is safe, and agreeing when he should break the fast to treat a low reading, gives him a clear safety net." },
    // distractors
    { text: "Advise him not to fast because of his diabetes.",
      brief: "Ignores his wishes and isn't necessarily required.",
      detailed: "Some people with diabetes are advised not to fast, but many can fast safely with planning. Telling him not to, without discussion, disregards his beliefs and his autonomy." },
    { text: "Tell him to take his usual insulin dose at his usual time.",
      brief: "Unchanged doses during a long fast risk hypoglycaemia.",
      detailed: "His previous symptoms suggest hypoglycaemia. Keeping his doses unchanged while fasting for long hours puts him at risk." },
    { text: "Tell him to stop his insulin for the whole of Ramadan.",
      brief: "Stopping insulin altogether risks very high blood glucose.",
      detailed: "This avoids hypos but risks severe hyperglycaemia. Adjusting the dose is safer than stopping it." },
    { text: "Suggest he asks his imam whether he should fast this year.",
      brief: "He asked for medical advice, which is your role to give.",
      detailed: "He may wish to discuss religious questions with his imam, but he has asked you for medical advice, and you should give it." },
    { text: "Give him a leaflet on fasting with diabetes and ask him to book a review after Ramadan.",
      brief: "A leaflet helps, but he needs a plan before he starts.",
      detailed: "Written information is useful as a supplement. A review after Ramadan is too late to prevent the problems he had last year." }
  ],
  explanation: {
    issue: "This tests whether you support a patient's religious practice while making it as safe as possible.",
    keyDetails: "He plans to fast. He takes insulin. He had probable hypoglycaemia last year. He has asked for advice in good time.",
    reasoning: "{k1} learns from last year, {k2} adjusts his treatment with him, and {k3} gives him a safety net. The distractors ignore his wishes ({d1}), give unsafe advice ({d2}, {d3}), deflect ({d4}), or leave planning too late ({d5}).",
    competing: "{d5} is tempting as a quick option, but he needs a plan before the fast begins, not afterwards."
  },
  refs: [
    { ref: "beliefs", note: "Respecting patients' beliefs when they affect their care." },
    { ref: "gmp", note: "Domain 2, shared decision-making." }
  ],
  tags: ["diabetes", "Ramadan", "religion", "general practice"]
}
];
