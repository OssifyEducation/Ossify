// Practice batch P01, part 2 (sjt-016 to sjt-025). Written in key order; see scripts/compile-sjt-drafts.js.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-016", letters: "DFH", format: "multiple_choice", difficulty: "moderate",
  title: "An insurance letter", setting: "Out-of-hours / community", attribute: P,
  topic: "Probity in records, forms and certification",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Honest documentation", "Writing reports", "Patient-centred communication"],
  stem:
    "You are an F2 doctor working in an out-of-hours GP service. On Saturday you visited Mr Grant, 66, at home and diagnosed a chest infection.\n\n" +
    "On Monday he phones the service and asks to speak to you. His cruise left last Wednesday, three days before your visit, and he didn't go because he felt unwell. His travel insurer wants a doctor's letter confirming he was too ill to travel on Wednesday. \"You saw how poorly I was,\" he says. \"Could you just write that I wasn't fit to travel last week? Otherwise I lose £4,000.\"",
  options: [
    { text: "Explain that you can only report what you found when you saw him on Saturday, not how he was before.",
      brief: "Honest about the limits of what you witnessed, which is exactly what a medical report must reflect.",
      detailed: "A doctor's letter carries weight because it records what the doctor actually knows. You saw Mr Grant three days after the cruise left; you cannot say from your own knowledge how unwell he was on Wednesday, even if a chest infection often builds up over several days. Explaining this clearly, and without judgement, is the starting point for helping him properly." },
    { text: "Offer to provide a factual report of your visit, with his consent, if the insurer asks for one.",
      brief: "Gives him genuine help within honest limits; insurers often accept factual records alongside other evidence.",
      detailed: "Your findings on Saturday are relevant evidence and he is entitled to have them shared, with his consent. A factual report of what he told you about the onset of his symptoms, clearly attributed to him, and what you found on examination is honest and may well support his claim. It is not the same as you certifying how he was on a day you didn't see him." },
    { text: "Suggest he asks his own GP, who may hold records from before Wednesday, for supporting information.",
      brief: "Points him towards a source that may be able to speak to the relevant dates.",
      detailed: "If Mr Grant contacted his GP practice or a pharmacy before the cruise, there may be a record that genuinely supports his account. His GP is also better placed to provide the kind of report insurers commonly ask for. This gives him a realistic route rather than leaving him with a refusal." },
    { text: "Write a letter saying he 'reported feeling unwell for several days before my visit', based on his account.",
      brief: "Closer to honest, but presented as a fitness-to-travel letter it implies an opinion you can't give.",
      detailed: "Reporting what a patient told you is legitimate in a factual record, which is why this option is tempting. Written as a letter to support a claim that he was unfit to travel on Wednesday, though, it lends your professional authority to a conclusion you haven't reached. The difference between a factual report and a supportive letter matters." },
    { text: "Refuse to provide any information to his insurer, as you didn't see him on the day in question.",
      brief: "Overcorrects: your findings from Saturday are relevant, and he is entitled to them.",
      detailed: "You are right not to certify something you didn't witness, but refusing to share anything goes too far. A factual report of your visit, with his consent, is reasonable and may help him. Refusing outright leaves a patient without information he is entitled to and damages his trust in the service." },
    { text: "Record the date of your visit as Wednesday in the letter, as he was probably just as unwell then.",
      brief: "Falsifying a date in a medical document is dishonest, whatever your belief about his illness.",
      detailed: "This is straightforward falsification. Even if Mr Grant probably was unwell on Wednesday, changing the date of your visit creates a false record and would support a potentially fraudulent claim. Probity in documents is one of the clearest expectations of every doctor." },
    { text: "Write the letter he asks for, since chest infections usually develop over several days.",
      brief: "Clinical plausibility is not the same as knowledge, and the letter would state something you can't vouch for.",
      detailed: "It is quite likely that Mr Grant was unwell on Wednesday, and your sympathy for his loss is understandable. But a letter stating he was unfit to travel on a day you didn't assess him certifies something you don't know. If the claim were investigated, it would be your signature on an unsupported statement." },
    { text: "Tell him that what he's asking for is insurance fraud, and end the call.",
      brief: "Accusatory and unhelpful; he may simply not understand what a doctor can certify.",
      detailed: "Most patients who ask for this kind of letter are not trying to defraud anyone; they believe they were ill and want help. Accusing him and ending the call damages the relationship and leaves him with no understanding of what you can legitimately do. A clear, kind explanation achieves the same boundary without the harm." }
  ],
  explanation: {
    issue: "This tests honesty in certification: helping a patient with a genuine need while refusing to put your name to something you don't know to be true.",
    keyDetails: "You saw him three days after the date in question. He wants a statement about Wednesday, not about Saturday. The amount of money involved adds pressure, and his illness is real, which is what makes the request feel reasonable.",
    reasoning: "{k1} sets the honest boundary, and {k2} and {k3} give him real ways forward: your own factual findings, and his GP for the earlier dates. Together they are honest and helpful. The distractors either cross the line into certifying what you didn't see ({d1}, {d3}, {d4}) or hold the line in a way that is unhelpful or hostile ({d2}, {d5}).",
    competing: "{d1} is the closest call, because reporting what a patient tells you is legitimate. What makes it a distractor is its purpose and framing: a letter written to support a claim that he was unfit to travel, rather than a neutral record of your consultation."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, 'Acting with honesty and integrity': documents you write or sign must not be false or misleading." },
    { ref: "confidentiality", note: "Disclosing information to insurers with the patient's consent." }
  ],
  tags: ["probity", "certification", "insurance", "out-of-hours"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-017", letters: "BEACD", format: "ranking", difficulty: "hard",
  title: "Leave this afternoon", setting: "Psychiatry", attribute: C,
  topic: "Disagreeing with a senior's decision",
  gmcDomains: ["Colleagues, culture and safety", "Patients, partnership and communication"],
  competencies: ["Challenging decisions", "Risk assessment", "Communicating concerns"],
  stem:
    "You are an F2 doctor on an inpatient psychiatric ward. Mr Hart, 45, is detained under the Mental Health Act with severe depression; he was admitted after a suicide attempt. His consultant plans to grant him four hours of unescorted leave to visit home this afternoon, as he has seemed brighter over the past week.\n\n" +
    "This morning Mr Hart told you he had \"sorted everything out\" and felt calm \"for the first time in months\". A nurse mentions that he gave his watch to another patient yesterday. The consultant, who hasn't seen him today, will confirm the leave at the ward round in an hour.",
  options: [
    { text: "Speak to the consultant before the ward round, describing exactly what Mr Hart said and what the nurse saw.",
      brief: "Specific, recent warning signs need to reach the person making the leave decision before it is made.",
      detailed: "A sudden sense of calm after a long depression and giving away possessions can be signs that someone has decided to end their life. The consultant's plan is based on a week of improvement; these observations, made this morning, may change it. Describing exactly what you heard and what was reported, rather than a vague sense of unease, gives the consultant what they need to reassess the risk." },
    { text: "Suggest at the ward round that any leave today should be shorter or escorted.",
      brief: "Accepts the consultant's authority while looking for a way to reduce the risk you are worried about.",
      detailed: "The consultant may have reasons for granting leave that you aren't aware of, and the decision is theirs. Leave plans are often adjustable, and proposing a shorter period or an escort is a constructive way to reduce the risk. It ranks second because, on its own, it doesn't give the consultant the specific observations that may change the decision altogether." },
    { text: "Ask the ward's specialty registrar to raise your concerns with the consultant on your behalf.",
      brief: "Gets the information to the consultant, but less directly and with the risk that details are lost.",
      detailed: "Involving a registrar can feel safer when you are wary of challenging a consultant, and the registrar may add weight. But passing your observations through someone else risks them being diluted or arriving too late. You saw and heard these things, so you are best placed to describe them." },
    { text: "Write your observations in Mr Hart's notes and leave the leave decision to the consultant.",
      brief: "Documentation matters, but notes may not be read before the decision is made in an hour.",
      detailed: "Recording what you observed is good practice and you would do it whatever happens. On its own, though, it relies on the consultant reading the notes before the ward round, which is far from certain. When the concern is time-critical, documentation supports communication; it does not replace it." },
    { text: "Tell Mr Hart that you are going to recommend his leave is cancelled.",
      brief: "Pre-empts a decision that isn't yours and may make him more distressed or less open.",
      detailed: "Telling him before you have spoken to the consultant could provoke anger, despair or a reluctance to share his feelings honestly, which would make it harder to assess his risk. It also commits you to a position that the consultant may not take. Your concerns should go to the decision-maker first." }
  ],
  explanation: {
    issue: "This tests whether you challenge a senior's decision when you have new information that changes the risk, and how you do it effectively.",
    keyDetails: "Mr Hart is detained after a suicide attempt. The warning signs (sudden calm, 'sorted everything out', giving away a possession) are recent and well recognised. The consultant hasn't seen him today, and the decision is an hour away.",
    reasoning: "{1} gets the key information to the decision-maker in time, and {2} offers a constructive way to reduce the risk. {3} and {4} both communicate the concern, but less effectively. {5} acts on the concern in the wrong direction, with the patient rather than the team.",
    competing: "The hardest ordering is {4} against {5}. Writing in the notes is passive but harmless; telling the patient prematurely is active and potentially harmful. Some would argue that doing nothing beyond documentation is worse when the risk is suicide; the key reflects that {5} could itself increase that risk."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, 'Responding to safety risks'; speaking up when you have concerns about a decision." },
    { ref: "concerns", note: "Raising concerns, including with senior colleagues, when patient safety may be at risk." }
  ],
  tags: ["mental health", "suicide risk", "disagreeing with seniors", "leave"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-018", letters: "ACE", format: "multiple_choice", difficulty: "moderate",
  title: "He handles my money now", setting: "General practice", attribute: E,
  topic: "Safeguarding children and vulnerable adults",
  gmcDomains: ["Patients, partnership and communication", "Colleagues, culture and safety"],
  competencies: ["Safeguarding adults", "Sensitive enquiry", "Working with the safeguarding lead"],
  stem:
    "You are an F2 doctor in a GP practice. Mrs Kowalski, 82, attends with her son because she has lost weight. She has no known cognitive impairment.\n\n" +
    "Her son answers most of your questions. He mentions that he \"handles her money now\" and keeps her bank card. Mrs Kowalski looks at him before answering anything, and when he is on his phone she says quietly that she often has \"nothing left for food by the end of the month\". When you glance at her, she shakes her head slightly, as if asking you not to pursue it.",
  options: [
    { text: "Find a way to see Mrs Kowalski on her own, for example during the examination.",
      brief: "She cannot speak freely with her son present, and seeing patients alone is routine and unremarkable.",
      detailed: "Many practices see older patients alone for part of a consultation, so asking her son to step out for an examination draws little attention. It gives Mrs Kowalski a safe opportunity to say more, and you can then judge what she wants and whether she is at risk. Without this, everything else depends on information filtered through her son." },
    { text: "Ask her gently, when you are alone, how things are at home, including money and whether she feels safe.",
      brief: "Open, sensitive questions let her tell her story on her own terms.",
      detailed: "Financial abuse often comes with other forms of control. Asking open questions about her daily life, her money and whether she feels safe, without suggesting answers or criticising her son, makes disclosure easier. Her answers will also help you understand whether her weight loss has a social cause rather than, or as well as, a medical one." },
    { text: "Discuss your concerns with the practice safeguarding lead and agree whether to refer to adult social care.",
      brief: "Safeguarding decisions shouldn't rest on one F2's judgement, and the lead knows the local process.",
      detailed: "Possible financial abuse of an older adult is a safeguarding concern. The practice lead can help you decide whether to refer to the local authority, which has a duty to make enquiries, and how to involve Mrs Kowalski in that decision. If she has capacity and declines, there may still be grounds to share information if she or others are at serious risk; the lead can help you weigh that." },
    { text: "Tell her son that you are concerned he may be taking his mother's money.",
      brief: "Confronting him could put Mrs Kowalski at greater risk and close off further disclosure.",
      detailed: "You don't yet know what is happening, and confronting the son on suspicion alone may lead him to restrict her contact with the practice or retaliate against her. Concerns about possible abuse are best explored with the person at risk and through safeguarding processes, not by challenging the suspected perpetrator directly." },
    { text: "Respect her signal not to pursue it, and focus the consultation on her weight loss alone.",
      brief: "Her wishes matter, but you can't respect them properly until you have given her a safe chance to express them.",
      detailed: "A shake of the head in front of her son is not a considered decision. She may be frightened, embarrassed, or protecting him. Respecting autonomy means giving her the chance to speak freely, and then taking her wishes seriously, not dropping the subject because she cannot raise it safely in front of him." },
    { text: "Phone the police to report suspected financial abuse.",
      brief: "There's no immediate danger, and going straight to the police skips her views and the safeguarding route.",
      detailed: "The police have a role in serious crime, and financial abuse can be a crime. But nothing suggests immediate danger, and you don't yet know what Mrs Kowalski wants. The safeguarding process, through the practice lead and the local authority, is the proportionate first route." },
    { text: "Ask her son to bring in her bank statements at her next appointment.",
      brief: "Alerts him to your concern and relies on him to provide evidence about himself.",
      detailed: "This is an attempt to gather facts, but it puts the person who may be controlling her money in charge of the evidence, and signals your suspicion. It may lead him to change how he presents things or to limit her contact with the practice." },
    { text: "Tell her that you will have to report this to social services, whether or not she agrees to that happening.",
      brief: "Overstates your duty and may stop her talking to you; adults with capacity are usually involved in the decision.",
      detailed: "For an adult with capacity, safeguarding referrals are normally made with her knowledge and, where possible, her consent. There are exceptions, for example where others are at risk or the harm is serious, but announcing a referral as inevitable at this stage is likely to frighten her and close down the conversation." }
  ],
  explanation: {
    issue: "This tests your response to possible financial abuse of an older adult: creating a safe space for her to speak, and using safeguarding processes rather than acting alone.",
    keyDetails: "Her son controls her money and her answers. She drops a hint about running out of money for food and then signals you to leave it, which she can't safely say otherwise. She has no known cognitive impairment, so her views will matter a great deal.",
    reasoning: "{k1} and {k2} give her a safe opportunity to tell you what is happening, and {k3} brings in the right expertise to decide what to do next. The distractors either confront the son ({d1}, {d4}), drop the concern ({d2}), escalate disproportionately ({d3}), or misrepresent her rights ({d5}).",
    competing: "{d2} is tempting because it seems to respect her wishes. The point is that she hasn't yet had a safe chance to express them. Once she has, and if she has capacity and declines help, her wishes carry great weight, unless she or others face serious harm."
  },
  refs: [
    { ref: "careact42", note: "The local authority's duty to make enquiries where an adult may be experiencing abuse, including financial abuse." },
    { ref: "confidentiality", note: "Disclosing information to protect patients from serious harm, and involving them where possible." },
    { ref: "gmp", note: "Domain 2, protecting patients who may be vulnerable." }
  ],
  tags: ["safeguarding adults", "financial abuse", "general practice", "older people"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-019", letters: "EBDAC", format: "ranking", difficulty: "moderate",
  title: "An accepted paper", setting: "Non-clinical (training)", attribute: P,
  topic: "Probity in training, research, audit and applications",
  gmcDomains: ["Trust and professionalism"],
  competencies: ["Probity", "Challenging colleagues", "Proportionate escalation"],
  stem:
    "You are an F2 doctor. You and your friend Sam, also an F2, co-wrote a case report. Last month the journal asked for minor revisions, which you made; yesterday you heard that it has now been rejected.\n\n" +
    "Sam shows you his specialty training application, which he submitted last week. Under publications it lists your case report as \"accepted for publication\". Shortlisting has not yet taken place. When you mention the rejection, Sam says that after the revision request he assumed acceptance was a formality, and that \"it won't make much difference anyway\".",
  options: [
    { text: "Tell Sam he needs to contact the recruitment office to correct his application before shortlisting.",
      brief: "Gives Sam the chance to put it right himself, which is the proportionate first step.",
      detailed: "Listing the paper as accepted after a revision request was an overstatement, but now that he knows it has been rejected, leaving the claim in place would be dishonest. Recruitment offices deal with corrections routinely, and correcting before shortlisting is likely to cause him little harm. Encouraging him to do it himself respects your friendship and puts the record straight." },
    { text: "Ask your educational supervisor for advice on what to do about Sam's application.",
      brief: "Gets senior advice on a difficult probity issue involving a friend, before anything more formal.",
      detailed: "A probity issue involving a friend is hard to handle alone, and your supervisor can help you think through whether and how the recruitment office should be told, and may speak to Sam themselves. It ranks second because talking to Sam directly gives him the chance to correct the entry himself, which is quicker and fairer." },
    { text: "Inform the recruitment office yourself, without speaking further to Sam.",
      brief: "Corrects the record, but skips giving a colleague the chance to put right what may have begun as an honest mistake.",
      detailed: "The recruitment office does need accurate information, and as a co-author you have direct knowledge. But going behind Sam's back, when he may still correct it himself, is not proportionate as a first step. It may also damage your working relationship unnecessarily." },
    { text: "Report Sam to the GMC for making a false claim on his application.",
      brief: "Disproportionate at this stage, though it reflects a correct view that this matters.",
      detailed: "False claims on applications can be a fitness-to-practise issue, which is why this isn't the worst option. But no local steps have been taken, Sam may still correct it, and a regulator referral would be a serious step out of proportion to a situation that can be put right within days." },
    { text: "Leave it to Sam, as it is his application and he says it won't make much difference.",
      brief: "Leaves a known false claim in an application, and lets Sam's reasoning stand unchallenged.",
      detailed: "Whether or not the paper would change his score, an application containing a claim he knows to be untrue is dishonest. Staying silent also involves you, as a co-author who knows the truth. It is the only option that does nothing about a probity problem you are fully aware of." }
  ],
  explanation: {
    issue: "This tests your response to a colleague's inaccurate claim on an application, balancing loyalty and proportionality against honesty.",
    keyDetails: "The paper was never accepted and has now been rejected, Sam knows it, and shortlisting hasn't happened, so a correction is easy and timely. You are a co-author, so you know the facts first hand. Sam's comment that it 'won't make much difference' is a rationalisation, not a reason.",
    reasoning: "{1} gives Sam the chance to correct his own record, and {2} gets you senior advice, which you would certainly need if he refused. {3} corrects the record but bypasses Sam. {4} and {5} are at opposite extremes: {4} is a disproportionate escalation, and {5} accepts a known falsehood.",
    competing: "The ordering of {4} and {5} reflects that over-reacting to a probity issue is less damaging than ignoring it. In practice, if Sam refused to correct the entry and your supervisor agreed, informing the recruitment office would become appropriate."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, 'Acting with honesty and integrity': being honest in CVs, applications and other documents." }
  ],
  tags: ["probity", "applications", "colleague", "publications"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-020", letters: "BGH", format: "multiple_choice", difficulty: "easy",
  title: "No time in theatre", setting: "General surgery", attribute: C,
  topic: "Rotas, leave, and training versus service",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Advocating for training", "Teamwork", "Using proper channels"],
  stem:
    "You are an F2 doctor in general surgery and hope to apply for surgical training. Your placement description promises two theatre sessions a week.\n\n" +
    "For the past six weeks, every theatre session you were due to attend has been cancelled for you at short notice so that you can cover the wards, because of rota gaps. Your colleagues on the same rotation seem to get to theatre regularly. You have six weeks of the placement left.",
  options: [
    { text: "Discuss with your clinical supervisor how you can get the theatre time your placement is meant to include.",
      brief: "Your supervisor is responsible for your learning on this placement and can help protect sessions.",
      detailed: "Clinical supervisors can often negotiate protected time once they know there is a problem. Raising it now, with six weeks left, gives time for a plan. It also documents the issue, which matters if it affects your progress or future placements." },
    { text: "Talk to your fellow F2s about sharing ward cover fairly, so that theatre sessions are rotated.",
      brief: "A practical team solution, given that colleagues on the same rotation are getting to theatre.",
      detailed: "The rota gaps aren't your colleagues' fault, and they may not realise you have missed every session. Agreeing a fair rotation of ward cover is a simple, collegiate fix that keeps the wards safe while sharing the learning opportunities more evenly." },
    { text: "Submit an exception report for the training opportunities you have missed.",
      brief: "Exception reports cover missed education as well as extra hours, and they alert your supervisor and the trust.",
      detailed: "Under the junior doctor contract, exception reporting is the formal way to record that you have missed educational opportunities your work schedule promised. It triggers a review with your supervisor and helps the trust see where rota gaps are eroding training, which is information it needs to fix the underlying problem." },
    { text: "Refuse to cover the wards when you are next asked to miss theatre.",
      brief: "Refusing outright could leave patients without a doctor, which isn't an acceptable way to protect training.",
      detailed: "Your frustration is understandable, but ward cover exists because patients need a doctor. Refusing at short notice could leave the wards unsafe, and it is unlikely to fix the underlying problem. The right approach is to raise the issue through your supervisor and exception reporting." },
    { text: "Stop attending the morning handover so that you aren't the one asked to cover.",
      brief: "Avoids the request at the cost of missing important clinical information and shifting the problem to others.",
      detailed: "Handover is where patient information is passed on; skipping it to avoid being asked to cover puts patients at risk and is unfair on colleagues. It is avoidance rather than a solution." },
    { text: "Accept that service needs come first and stop asking about theatre time.",
      brief: "Service needs do sometimes take priority, but six weeks of lost training deserves to be raised.",
      detailed: "Accepting occasional disruption is part of working in the NHS, which is what makes this option feel mature. But losing every theatre session for six weeks is a pattern, not an occasional need, and your placement is meant to provide this learning. Raising it appropriately is reasonable and expected." },
    { text: "Tell the consultant you won't do any more ward cover unless you are guaranteed theatre time.",
      brief: "A legitimate concern raised as an ultimatum, which is likely to sour relationships without solving anything.",
      detailed: "Your consultant may well be sympathetic and able to help, but making your cooperation conditional puts them in a difficult position and frames the problem as a dispute. The same concern raised with your supervisor, alongside an exception report, is far more likely to lead to a fair solution." },
    { text: "Ask a friend in theatre to sign off procedures in your portfolio that you haven't done.",
      brief: "Fills the gap in your portfolio dishonestly.",
      detailed: "This would be falsifying your training record, with consequences for your probity and potentially for patient safety if you were later assumed to be competent in procedures you haven't performed. Missing training must be addressed honestly, not hidden." }
  ],
  explanation: {
    issue: "This tests how you advocate for your own training when service pressures crowd it out, using constructive and proper routes rather than confrontation or avoidance.",
    keyDetails: "The problem is persistent (six weeks), specific to you (colleagues are getting to theatre), and there is still time to fix it (six weeks left). Ward cover is genuinely needed, so any solution must keep the wards safe.",
    reasoning: "{k1} brings in the person responsible for your training, {k2} solves the fairness problem with your colleagues, and {k3} records the lost training formally so the trust can act. The distractors either risk patient safety ({d1}, {d2}), give up on training altogether ({d3}), escalate unhelpfully ({d4}) or are dishonest ({d5}).",
    competing: "{d3} looks like a mature acceptance of NHS pressures. Accepting occasional disruption is reasonable; accepting that one trainee loses every training session for weeks is not, and raising it is part of being a responsible trainee."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, keeping your knowledge and skills up to date; Domain 3, contributing to a fair training environment." },
    { ref: "leadership", note: "Raising issues that affect the quality of education and training through appropriate channels." }
  ],
  tags: ["training", "rota", "exception reporting", "surgery"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-021", letters: "DCEAB", format: "ranking", difficulty: "moderate",
  title: "Choosing a different path", setting: "Oncology & palliative care", attribute: E,
  topic: "Autonomy, capacity and refusal",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Respecting autonomy", "Exploring patients' beliefs", "Shared decision making"],
  stem:
    "You are an F2 doctor in a haematology and oncology clinic. Ms Lewis, 38, has early-stage Hodgkin lymphoma. Her consultant has explained that chemotherapy offers a very good chance of cure.\n\n" +
    "Ms Lewis has now told the clinic nurse that she has decided not to have chemotherapy. She plans to follow a strict diet and have high-dose vitamin infusions at a private clinic she found online. The consultant has been called to the ward, and you have been asked to see her before she leaves. She seems calm and articulate, and she is clearly well informed about her diagnosis.",
  options: [
    { text: "Explore what led her to this choice, and check she understands the likely outcomes with and without chemotherapy.",
      brief: "Understanding her reasons is the basis for any useful conversation, and she must have the information she needs.",
      detailed: "Patients who decline effective treatment often have specific fears, such as infertility, hair loss, or a relative's bad experience, that can be addressed. Asking open questions shows respect and may reveal misunderstandings. Checking that she understands the likely consequences of each path makes sure her decision is informed, without pressuring her." },
    { text: "Arrange for her to see the consultant again, with a specialist nurse, before she makes a final decision.",
      brief: "A decision with such high stakes deserves a further conversation with the senior clinician responsible.",
      detailed: "The consultant can answer detailed questions about the treatment and its effects that you may not be able to. A specialist nurse can provide continuing support. Arranging this doesn't mean you think she is wrong; it means she has the best possible basis for a decision with major consequences." },
    { text: "Give her written information about her treatment options, and make sure she knows she can change her mind at any time.",
      brief: "Supports her decision-making and keeps the door open, though on its own it doesn't explore her reasons.",
      detailed: "Written information lets her review the facts in her own time, and knowing she can return without judgement makes it easier for her to reconsider later. This ranks below the first two because, without a conversation about why she has decided this, it may not address what actually matters to her." },
    { text: "Tell her that alternative therapies don't work and that she is making a serious mistake.",
      brief: "The concern may be justified, but delivered this way it is likely to make her stop listening.",
      detailed: "There is no good evidence that diet or vitamin infusions cure lymphoma, and she should know that. But telling her she is making a mistake, rather than exploring her reasons, is likely to make her defensive, reduce her trust in the team, and make it less likely she will return if she changes her mind." },
    { text: "Accept her decision without further discussion, and write to her GP to say she has declined treatment.",
      brief: "Respects her autonomy in a narrow sense, but without checking that her decision is informed or offering further support.",
      detailed: "Ms Lewis has the right to refuse treatment, and an unwise decision is not evidence of a lack of capacity. But respecting autonomy also means making sure her decision is informed and that she has had a chance to discuss it. Discharging her without any exploration abandons her at a point where a conversation might change her course." }
  ],
  explanation: {
    issue: "This tests how you respond when a capacitous patient declines highly effective treatment: respecting her right to decide while making sure the decision is informed and that the door stays open.",
    keyDetails: "The treatment offers a very good chance of cure, so the stakes are high. She appears to have capacity, and an unwise choice does not mean she lacks it. Her reasons haven't yet been explored, and the consultant is temporarily unavailable.",
    reasoning: "{1} explores her reasons and understanding, {2} brings in senior and specialist support, and {3} supports her in her own time. {4} and {5} fail in opposite directions: {4} confronts without listening, and {5} accepts without engaging.",
    competing: "{4} versus {5} is the hardest call. Some argue that accepting her decision respects autonomy better than criticising it. The key ranks {5} lowest because it ends the conversation entirely, whereas {4}, though poorly delivered, at least keeps the clinical concern in view."
  },
  refs: [
    { ref: "mca1", note: "A person is not to be treated as unable to make a decision merely because it is unwise." },
    { ref: "consent", note: "Exploring patients' values and supporting them to make informed decisions, including refusal." }
  ],
  tags: ["autonomy", "refusal", "oncology", "alternative medicine"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-022", letters: "CEH", format: "multiple_choice", difficulty: "hard",
  title: "Please don't tell my mum", setting: "Obstetrics & gynaecology", attribute: P,
  topic: "Confidentiality and information sharing",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Confidentiality with young people", "Assessing competence", "Safeguarding"],
  stem:
    "You are an F2 doctor in a gynaecology outpatient clinic. Chloe, 15, has been referred with heavy periods and attends with her mother. The consultant has suggested the combined pill as one treatment option.\n\n" +
    "While her mother steps out to move the car, Chloe tells you she has a boyfriend, who is 16, and that they are planning to have sex. She asks whether the pill would also work as contraception and begs you not to tell her mother about the boyfriend.",
  options: [
    { text: "Assess whether Chloe understands the advice well enough to make her own decisions about contraception.",
      brief: "Under-16s can consent to contraception if they are competent, so this is the key judgement.",
      detailed: "Young people under 16 can consent to their own treatment, including contraception, if they have the maturity and understanding to do so. The Fraser guidance, followed in GMC guidance on 0–18s, sets out what to consider for contraceptive advice. Assessing this properly determines whether you can act on her request in confidence." },
    { text: "Encourage her to involve her mother, but reassure her that if she is competent you will respect her confidentiality.",
      brief: "Supports family involvement without making it a condition of care.",
      detailed: "Involving a parent is generally in a young person's interests, and you should encourage it. But if Chloe is competent and still prefers not to, she is entitled to confidentiality like any other patient, unless there is a risk of serious harm. Making this clear helps her trust you and makes it more likely she will seek advice in future." },
    { text: "Ask her about the relationship, including whether she feels under any pressure.",
      brief: "Sexual activity under 16 always warrants a sensitive safeguarding enquiry, even when the partner is close in age.",
      detailed: "A 16-year-old partner is close in age, which makes exploitation less likely, but you still need to know whether the relationship is consensual and free of pressure, and whether there are any other concerns. Asking sensitively is part of good care and doesn't imply suspicion. If concerns emerged, the confidentiality picture would change." },
    { text: "Tell her mother about the boyfriend when she returns, as Chloe is under 16.",
      brief: "Being under 16 does not on its own remove a young person's right to confidentiality.",
      detailed: "Many people assume parents must be told, which is why this option is tempting. But a competent young person is entitled to confidentiality, and breaching it without good reason would damage her trust in doctors and may deter her from seeking sexual health advice in future." },
    { text: "Decline to discuss contraception, and tell her she can come back when she is 16.",
      brief: "Refusing advice to a young person who is likely to have sex anyway may put her at greater risk.",
      detailed: "Declining may feel like the safe option, but it doesn't stop her having sex. It just means she may do so without contraception or advice. GMC guidance supports providing contraceptive advice to competent under-16s where it is in their best interests." },
    { text: "Prescribe the pill without asking about the relationship, to avoid embarrassing her.",
      brief: "Respects her request but skips the safeguarding enquiry that every under-16 consultation needs.",
      detailed: "Providing contraception may well be appropriate, but not without understanding her situation. Avoiding the questions to spare embarrassment means you might miss signs of pressure or exploitation. A brief, sensitive conversation is part of competent care." },
    { text: "Tell her you will have to inform social services, because she is under 16 and planning to have sex.",
      brief: "Sexual activity under 16 isn't automatically a safeguarding referral when the relationship appears consensual and between peers.",
      detailed: "Every case needs assessment, and referral would be needed if there were signs of abuse or exploitation. But a consensual relationship with a 16-year-old does not by itself require one, and telling her it does is inaccurate and likely to stop her seeking help." },
    { text: "Suggest she sees her GP or a sexual health clinic about contraception, since today's appointment is only about her periods.",
      brief: "Not wrong in itself, but it deflects her at the moment she has chosen to ask you.",
      detailed: "This is the subtle distractor. Referring her on is sometimes sensible, and a sexual health clinic may be well placed to help. But she has raised it now, the pill was already being considered for her periods, and deflecting her loses the chance to assess her competence and safety while she is in front of you." }
  ],
  explanation: {
    issue: "This tests your handling of confidentiality and consent with a young person under 16, including the safeguarding judgement that sits alongside it.",
    keyDetails: "Chloe is 15 and asking for advice she can consent to herself if she is competent. Her partner is 16, which makes exploitation less likely, though not impossible. The pill is already being considered for her periods, so the clinical question is close to hand. Her mother is about to return.",
    reasoning: "{k1} determines whether Chloe can make this decision herself, {k2} encourages family involvement while respecting her rights, and {k3} carries out the safeguarding enquiry. Together they answer her question safely. The distractors either breach confidentiality ({d1}, {d4}), withhold care ({d2}, {d5}) or skip the safeguarding conversation ({d3}).",
    competing: "{d5} is the most defensible distractor, as referral to specialist sexual health services is sometimes the right call. The key prefers dealing with her question while she is with you, because she has chosen this moment and the treatment is already under discussion."
  },
  refs: [
    { ref: "u18", note: "Confidentiality, competence and contraceptive advice for young people under 16." },
    { ref: "children", note: "When to share information to protect children and young people from harm." },
    { ref: "confidentiality", note: "The duty of confidentiality to all patients, including young people." }
  ],
  tags: ["young people", "confidentiality", "contraception", "safeguarding"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-023", letters: "CADEB", format: "ranking", difficulty: "moderate",
  title: "Reported without a word", setting: "Elderly care ward", attribute: C,
  topic: "Responding to criticism, feedback and your own underperformance",
  gmcDomains: ["Colleagues, culture and safety", "Knowledge, skills and development"],
  competencies: ["Responding to feedback", "Professional relationships", "Reflective practice"],
  stem:
    "You are an F2 doctor on an elderly care ward. Last week you forgot to request a patient's kidney function test the day after starting her on a new blood pressure tablet. The pharmacist spotted the omission the following morning, the test was done, and the result was normal.\n\n" +
    "Today you receive an email from your clinical supervisor saying that the ward sister has reported the omission to her, and asking to meet this week. The ward sister has not mentioned it to you. You feel embarrassed and a little angry that she went over your head.",
  options: [
    { text: "Meet your supervisor, acknowledge the omission, and discuss what you have changed to prevent it happening again.",
      brief: "Owning the mistake openly and showing what you've learned is the most constructive response.",
      detailed: "The omission was real, even if no harm resulted, and your supervisor's meeting is an opportunity rather than a punishment. Acknowledging it plainly, and describing a concrete change such as how you now record follow-up tests when prescribing, shows insight. It also makes the conversation about learning rather than blame." },
    { text: "Ask the ward sister for a quiet word, to understand her concerns and agree how you can raise issues with each other directly.",
      brief: "Repairs a working relationship that matters, without being defensive.",
      detailed: "You may never know exactly why she went to your supervisor; she may have been following policy or may have had other concerns. A calm conversation lets you hear her view, and agreeing to raise things directly in future helps you both. Approached without resentment, it is likely to improve how you work together." },
    { text: "Write a reflection on the omission in your portfolio.",
      brief: "Useful for learning, but on its own it doesn't address the meeting or the working relationship.",
      detailed: "Reflection is valuable, and you would probably do this as well. Ranked on its own, though, it is a private action that doesn't deal with the supervisor's request or with the ward sister. It sits below the two options that address the situation directly." },
    { text: "Email the ward sister to tell her she should have spoken to you before going to your supervisor.",
      brief: "Your frustration may be understandable, but an email complaint is likely to sound defensive and escalate things.",
      detailed: "There is a fair point to be made about raising issues directly, but making it by email, while you are still feeling annoyed, invites a defensive reply and puts the focus on her conduct rather than your omission. A face-to-face conversation in a calmer moment achieves the same goal without the friction." },
    { text: "Avoid working with the ward sister where possible over the coming weeks.",
      brief: "Avoidance damages teamwork on the ward, and it is patients who lose out.",
      detailed: "Steering clear of a senior nurse on your own ward is impractical and harms communication about patients. It also leaves the tension unresolved and suggests you haven't taken the feedback on board. Of the five options, it is the least professional." }
  ],
  explanation: {
    issue: "This tests how you respond to criticism of your own performance, especially when you dislike the way it was raised.",
    keyDetails: "The omission was yours, even though no harm resulted. The feedback came indirectly, which is the source of your irritation. Your supervisor has asked to meet, so there is an established, supportive route to deal with it.",
    reasoning: "{1} owns the mistake and focuses on learning, and {2} repairs the working relationship. {3} is useful but private. {4} and {5} are driven by the hurt feelings rather than the issue, with {5} doing the most damage to teamwork.",
    competing: "Whether the ward sister should have spoken to you first is a fair question, and {2} gives you a constructive way to raise it. The key ranks {1} first because the omission, not the manner of reporting, is the issue you are responsible for."
  },
  refs: [
    { ref: "gmp", note: "Domain 1, reflecting on and learning from your practice; Domain 3, working constructively with colleagues." },
    { ref: "candour", note: "Reporting and learning from errors, including those that don't cause harm." }
  ],
  tags: ["feedback", "errors", "teamwork", "reflection"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-024", letters: "ABF", format: "multiple_choice", difficulty: "moderate",
  title: "Better off without me", setting: "General practice", attribute: E,
  topic: "Mental health, distress and stigma",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Suicide risk enquiry", "Safety planning", "Seeking supervision"],
  stem:
    "You are an F2 doctor in a GP practice. Liam, 26, booked a routine appointment about poor sleep. He tells you he lost his job two months ago, is behind on his rent and has stopped seeing his friends.\n\n" +
    "Towards the end of the ten-minute appointment, looking at the floor, he says, \"Sometimes I think everyone would be better off without me.\" You are already running 20 minutes late and the waiting room is full.",
  options: [
    { text: "Ask Liam directly whether he is having thoughts of ending his life, and whether he has made any plans.",
      brief: "His comment needs a direct, unflinching question; asking about suicide doesn't put the idea there.",
      detailed: "A remark like Liam's can be a cautious way of testing whether it is safe to say more. Asking directly and calmly whether he has thought about ending his life, whether he has made plans, and whether he has taken any steps tells you how urgent his situation is. It also tells him that you have heard him and can talk about it." },
    { text: "Agree a safety plan with him, including who he can contact and what to do if he feels worse.",
      brief: "Gives him concrete steps and contacts to use if things get worse before you see him again.",
      detailed: "A safety plan, worked out with Liam, identifies his warning signs, things that help, people he can turn to, and crisis contacts such as a helpline, NHS 111 or emergency services. It is something he takes away and can use, which matters more than any reassurance you could offer in the time left." },
    { text: "Arrange to see him again within a few days, and discuss the consultation with your GP supervisor today.",
      brief: "Early follow-up and senior input are needed for a patient with possible suicidal thoughts.",
      detailed: "You shouldn't carry an assessment like this alone. Your supervisor can help you judge the level of risk and whether he needs urgent mental health input. Arranging to see him soon keeps him connected to care and means his situation is reviewed before it can deteriorate unnoticed." },
    { text: "Reassure Liam that losing a job is a common reason to feel low, and that the feelings usually pass.",
      brief: "Normalising may sound kind, but it skips past what he has just told you.",
      detailed: "Job loss is a common trigger for low mood, but Liam has just told you something that may indicate suicidal thoughts. Responding with general reassurance tells him that you haven't really heard him, and may make him less likely to say more." },
    { text: "Prescribe an antidepressant and ask him to come back in a month.",
      brief: "Treatment may be appropriate later, but it doesn't address the immediate risk.",
      detailed: "Medication may have a role once his symptoms have been assessed properly, but prescribing at the end of a rushed appointment without exploring his suicidal thoughts leaves the most important question unanswered. A month is also a long time to wait for review in this situation." },
    { text: "Avoid asking him about suicide, in case raising it puts the idea in his head.",
      brief: "A common worry, but asking directly does not increase risk and not asking may miss it.",
      detailed: "This fear is widespread, which is why the option is tempting. In practice, asking clearly and compassionately about suicidal thoughts is how clinicians find out about risk, and patients often feel relieved to be asked. Avoiding the question leaves Liam's risk unknown." },
    { text: "Give him the number of a debt advice charity and end the consultation, as you are already running very late.",
      brief: "Practical help with his debts is useful, but not as a substitute for addressing what he has just said.",
      detailed: "Financial pressures are clearly contributing to how Liam feels, and debt advice could genuinely help. But ending the consultation now, after what he has just said, puts your timetable ahead of a potentially serious risk. The extra minutes needed are justified." },
    { text: "Tell Liam you will need to let his family know how he is feeling.",
      brief: "Breaches his confidentiality without his agreement, and without any assessment of whether that is needed.",
      detailed: "Involving family can be helpful, and in some circumstances may be justified without consent to protect someone from serious harm. But you don't yet know his level of risk, and announcing it at this stage removes his control and may make him less willing to talk. Ask him whether he would like someone involved." }
  ],
  explanation: {
    issue: "This tests how you respond to a possible disclosure of suicidal thoughts under time pressure, and whether you prioritise assessing and responding to risk.",
    keyDetails: "Liam's comment is indirect but significant, and it comes with recent job loss, financial strain and social withdrawal. The appointment was booked for something else, and you are running late, which is the pressure in the scenario.",
    reasoning: "{k1} assesses the risk, {k2} gives him a plan to keep himself safe, and {k3} makes sure he is followed up and that you have senior support. The distractors either fail to engage with what he said ({d1}, {d3}, {d4}), treat the problem without understanding the risk ({d2}), or breach his confidentiality ({d5}).",
    competing: "Running late is a real pressure in general practice, and {d4} reflects a genuine attempt to help. But a disclosure like Liam's justifies the extra time, and colleagues will understand."
  },
  refs: [
    { ref: "ng222", note: "Assessing risk, including suicidal ideation, in adults with depression." },
    { ref: "ng225", note: "Safety planning and follow-up for people at risk of self-harm." },
    { ref: "gmp", note: "Domain 2, responding to patients' needs and concerns." }
  ],
  tags: ["mental health", "suicide risk", "general practice", "time pressure"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-025", letters: "ADBC", format: "ranking", difficulty: "moderate",
  title: "A major incident after nights", setting: "Emergency department", attribute: C,
  topic: "Unexpected events and system failures",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Fatigue and safety", "Major incident response", "Communicating availability"],
  stem:
    "You are an F2 doctor in the Emergency Department. At 08:30 you are walking to your car after finishing a run of three night shifts. You have been awake for 15 hours.\n\n" +
    "Your phone receives a text from the hospital: a major incident has been declared after a coach crash, and off-duty staff who are available should contact the Emergency Department's staff coordination point.",
  options: [
    { text: "Phone the coordination point, explain you have just finished nights, and ask how you can be most useful.",
      brief: "Lets the people running the response decide how to use you, with full knowledge of your state.",
      detailed: "Major incident plans depend on staff contacting the coordination point rather than turning up unannounced. Telling them you have just finished nights allows them to make a sensible choice: they may need you for a non-clinical role now, or, more often, they will want you to rest so that you can staff a later shift. Either way, you have offered help responsibly." },
    { text: "Go home to sleep, and text the department that you can come in for a later shift if needed.",
      brief: "Prioritises safety and offers help later, though without checking what the department actually needs now.",
      detailed: "After three nights, and 15 hours awake, your judgement is likely to be impaired, and resting so you can return later is often exactly what departments want. This ranks second because it decides on your behalf what the response needs, without speaking to the coordination point." },
    { text: "Go home without responding to the message, as you are off duty after nights.",
      brief: "Being off duty is legitimate, but not responding at all leaves the department unaware of who may be available.",
      detailed: "You are not obliged to work after a run of nights, and resting is reasonable. But the department is trying to plan staffing for the hours and days ahead, and a quick response saying you could help later would be useful information. This ranks above the final option because it doesn't put patients at risk." },
    { text: "Return straight to the Emergency Department and start seeing patients.",
      brief: "Well meant, but working exhausted and outside the coordinated response puts patients at risk.",
      detailed: "The instinct to help is admirable. But arriving without checking in bypasses the coordination that major incidents depend on, and after 15 hours awake your capacity for safe decision-making is reduced. Fatigue-related errors in a chaotic situation can harm patients, which is why this ranks last." }
  ],
  explanation: {
    issue: "This tests whether you respond to an emergency call for help in a way that is useful to the response and safe for patients, given your own fatigue.",
    keyDetails: "You have just finished three nights and have been awake for 15 hours. The message asks available staff to contact a coordination point, not to come in. Major incidents often need staff over the following days, not just in the first few hours.",
    reasoning: "{1} offers help through the right channel, with honest information about your state. {2} makes a sensible choice to rest but without checking the department's needs. {3} rests but fails to communicate. {4} turns up exhausted and uncoordinated, which is the least safe option.",
    competing: "Some candidates rank {4} above {3}, reasoning that helping beats not helping. The key reflects that in a major incident, uncoordinated arrivals of tired staff can add to the risk rather than reduce it."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, 'Managing risks posed by your health', including fatigue; Domain 2, 'Helping in emergencies'." }
  ],
  tags: ["major incident", "fatigue", "emergency department", "teamwork"]
}
];
