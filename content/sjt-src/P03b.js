// Practice batch P03, part 2 (sjt-056 to sjt-065). Written in key order; see scripts/compile-sjt-drafts.js.
const P = "Professional integrity", C = "Coping with pressure", E = "Empathy and sensitivity";

module.exports = [
// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-056", letters: "DEF", format: "multiple_choice", difficulty: "moderate",
  title: "A migraine before teaching", setting: "Non-clinical (teaching)", attribute: P,
  topic: "Conflicts of interest and self-prescribing",
  gmcDomains: ["Trust and professionalism", "Colleagues, culture and safety"],
  competencies: ["Probity with medicines", "Fitness to work", "Self-care"],
  stem:
    "You are an F2 doctor. This morning you are due to present at the foundation teaching programme in the education centre, and this afternoon you start a 12-hour on-call shift on the medical wards.\n\n" +
    "Twenty minutes before your talk you feel a migraine coming on, with visual aura and a building headache. Sumatriptan usually works well for you, but you've left yours at home. Another F2 says: \"I can grab you some sumatriptan from the stock cupboard on Ward 6. Nobody will mind.\"",
  options: [
    { text: "Tell the teaching organiser you're unwell, and ask if someone else can present.",
      brief: "Being honest about being unwell lets the organiser plan around it.",
      detailed: "A migraine with aura can make it hard to concentrate or speak clearly. Telling the organiser early gives them time to swap the order of talks or ask someone else to step in, which is better for everyone than struggling through or disappearing at the last minute." },
    { text: "Buy a migraine treatment from a pharmacy, such as the one in the hospital entrance.",
      brief: "Gets you treatment through a legitimate route.",
      detailed: "Sumatriptan is available from pharmacies in the UK without a prescription for adults with established migraine, and simple painkillers are also available. Buying your own treatment, and checking with the pharmacist that it's appropriate for you, avoids any question of misusing hospital stock." },
    { text: "Warn the on-call registrar that you may not be fit for this afternoon's shift.",
      brief: "Early warning gives the team the best chance of arranging cover if you need it.",
      detailed: "You may well feel better by the afternoon, but if you don't, the team will need to find cover. Telling the registrar now, rather than at the start of the shift, makes that much easier and puts patient safety first. You owe it to patients not to work if you aren't fit to." },
    { text: "Accept your colleague's offer to bring you sumatriptan from the ward stock cupboard.",
      brief: "Ward stock is for patients; taking it for yourself is misuse of hospital medicines.",
      detailed: "This is tempting because it's quick and the drug would help. But ward stock is supplied for the treatment of patients, and taking it for personal use, however small the amount, is a probity issue that could have serious consequences for you and your colleague." },
    { text: "Ask your colleague to write a hospital prescription for sumatriptan for you.",
      brief: "Informal prescribing between colleagues bypasses proper assessment and records.",
      detailed: "GMC prescribing guidance advises against doctors prescribing for colleagues or people close to them except in limited circumstances. Your colleague isn't responsible for your care and has no access to your records, so this isn't an appropriate route to get the medicine." },
    { text: "Write yourself a prescription for sumatriptan to collect from the hospital pharmacy.",
      brief: "Self-prescribing is discouraged and hospital prescriptions are for patients.",
      detailed: "GMC guidance says doctors should avoid prescribing for themselves wherever possible. A hospital prescription is also meant for patients under the trust's care. This would be inappropriate even though the medicine is one you take regularly." },
    { text: "Give your talk and start the on-call shift, taking breaks when you can.",
      brief: "Admirable commitment, but risks working while unwell without telling anyone who could help.",
      detailed: "Wanting not to let people down is understandable. But carrying on without treatment or support risks a poor talk and, more importantly, an on-call shift where you aren't safe to make decisions." },
    { text: "Drive home to collect your own sumatriptan, and come back in time for the shift.",
      brief: "Gets your own medicine, but driving with an aura may be unsafe and you'd miss your talk unannounced.",
      detailed: "Using your own medication is the right instinct. But driving while you have visual disturbance from an aura could be dangerous, and leaving without telling the organiser would leave the teaching session without a speaker." }
  ],
  explanation: {
    issue: "This tests whether you look after your health through legitimate routes, without misusing medicines, while protecting the people who depend on you.",
    keyDetails: "The drug is in ward stock, and a colleague is offering to get it. You have a talk in twenty minutes and an on-call shift later. You may not be fit to do either.",
    reasoning: "{k1} and {k3} are honest about your health so others can plan, and {k2} gets you treatment properly. The distractors misuse medicines or prescribing ({d1}, {d2}, {d3}), or put yourself and others at risk ({d4}, {d5}).",
    competing: "{d5} has the right instinct, using your own medicine, but the driving and the missed talk make it weaker than buying treatment on site and telling people."
  },
  refs: [
    { ref: "prescribing", note: "Avoiding prescribing for yourself or for those close to you." },
    { ref: "gmp", note: "Domain 4, honesty and integrity; Domain 1, your health and fitness to work." }
  ],
  tags: ["self-prescribing", "ward stock", "doctors' health", "probity"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-057", letters: "ADBEC", format: "ranking", difficulty: "easy",
  title: "No cover for a break", setting: "Intensive care", attribute: C,
  topic: "Difficult team dynamics and conflict between colleagues",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Teamwork", "Looking after yourself", "Resolving conflict"],
  stem:
    "You are an F2 doctor on a 12-hour day shift in intensive care. It has been busy, and seven hours in you haven't had a break. You ask Dr Kaur, the other junior doctor on the unit, to hold your bleep for 30 minutes. She says she's too busy.\n\n" +
    "Ten minutes later you see her sitting at the desk scrolling through her phone. You are tired, hungry, and starting to feel irritated.",
  options: [
    { text: "Ask Dr Kaur calmly whether now would be a good time, and explain you haven't had a break all day.",
      brief: "A calm, direct request gives her the chance to help without feeling accused.",
      detailed: "You don't know what she was doing on her phone; she might have been checking a guideline or dealing with a personal call. Asking again, without assuming the worst, and explaining that you haven't eaten all day, is the simplest way to get your break and keep a good working relationship." },
    { text: "Ask the nurse in charge or your registrar to help organise breaks for the team.",
      brief: "Breaks are a team responsibility, and seniors can help arrange them.",
      detailed: "If the request to Dr Kaur doesn't work, the nurse in charge or registrar can help organise cover so that everyone gets a break. It ranks second because talking to her directly first is quicker and less formal." },
    { text: "Keep working and take your break later in the shift, when the unit is quieter.",
      brief: "Avoids conflict, but working tired and hungry for longer affects your performance.",
      detailed: "Sometimes a break really does have to wait. But putting it off indefinitely, when you are already tired, makes mistakes more likely, and the unit may not get quieter." },
    { text: "Tell the other staff on the unit that Dr Kaur refused to cover you and then sat on her phone.",
      brief: "Undermines a colleague without knowing the facts, and won't get you a break.",
      detailed: "This is how irritation often comes out, but complaining to others about her behaviour, without knowing why she was on her phone, creates tension on the unit and doesn't solve your problem." },
    { text: "Put your bleep on the desk next to Dr Kaur and tell her you're going for your break.",
      brief: "Forces the issue and risks bleeps going unanswered if she doesn't accept it.",
      detailed: "You are entitled to a break, but leaving your bleep with someone who hasn't agreed to hold it means calls could be missed, which puts patients at risk. It is also likely to cause a confrontation." }
  ],
  explanation: {
    issue: "This tests how you deal with frustration at a colleague while still looking after yourself and keeping patients safe.",
    keyDetails: "You haven't had a break in seven hours. You don't know what Dr Kaur was doing on her phone. A bleep can't be left unattended in intensive care.",
    reasoning: "{1} resolves things directly and without accusation, and {2} gets senior help if that doesn't work. {3} avoids conflict at the cost of your own wellbeing, {4} creates conflict without solving anything, and {5} risks patient safety.",
    competing: "Putting off your break ranks above complaining about her because it at least doesn't damage the team, though it isn't sustainable."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, working constructively with colleagues; Domain 1, looking after your own health." }
  ],
  tags: ["breaks", "teamwork", "intensive care", "fatigue"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-058", letters: "ACH", format: "multiple_choice", difficulty: "moderate",
  title: "In front of the waiting room", setting: "Oncology & palliative care", attribute: E,
  topic: "Dignity, privacy, disability and chaperones",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Dignity", "Responding to concerns", "Advocacy"],
  stem:
    "You are an F2 doctor on an oncology ward. Mrs Ahmed, 52, has lost her hair because of chemotherapy and wears a wig. This morning she went for an MRI scan.\n\n" +
    "When she comes back she is tearful. She tells you that, because the wig has metal clips, a member of staff asked her to take it off in the waiting area, in front of other patients and a porter. She says she felt \"humiliated\".",
  options: [
    { text: "Say that you're sorry this happened, and listen to how she feels about it.",
      brief: "Acknowledging her distress is the most important first response.",
      detailed: "Mrs Ahmed has been through an upsetting experience, and hair loss is often one of the hardest parts of chemotherapy. Saying sorry that it happened, and giving her time to talk, shows that you take her feelings seriously. It doesn't require you to know exactly what happened in the scanner." },
    { text: "With her agreement, let the radiology department know, so it can be addressed.",
      brief: "Feedback helps the department make sure this doesn't happen to others.",
      detailed: "There are usually private changing areas for this, and the department will want to know if they weren't used. Raising it, with her agreement, through the department manager or the trust's incident reporting system, helps protect the dignity of future patients." },
    { text: "Offer to record in her notes that she should be given privacy to remove her wig in future.",
      brief: "A practical step that helps prevent a repeat.",
      detailed: "She is likely to have more scans. A note in her records, with her agreement, means future staff know to offer her a private space, which gives her some control and protects her dignity." },
    { text: "Tell her that metal must be removed before an MRI, so staff had no choice.",
      brief: "True about the metal, but misses the point: it was how and where it was removed.",
      detailed: "MRI safety does require metal to be removed, so it may seem helpful to explain this. But her distress is about being asked to do it in front of others, and the explanation could sound as though you are defending what happened." },
    { text: "Suggest she wears a headscarf rather than a wig for future scans.",
      brief: "Practical, but puts the responsibility on her rather than on the service.",
      detailed: "This may help in future, but it implies the problem was her choice of wig rather than how she was treated. She should be able to wear what makes her comfortable and still be treated with dignity." },
    { text: "Ask a female nurse to talk to her about it later, as she may prefer that.",
      brief: "Assumes what she wants, and delays a response she needs now.",
      detailed: "Some patients do prefer to talk to someone of the same gender, but she has chosen to tell you. Passing her on without asking her may seem like you don't want to deal with it." },
    { text: "Explain that the member of staff was probably under pressure to keep the scans running on time.",
      brief: "Excuses the behaviour rather than acknowledging her experience.",
      detailed: "Radiology departments are busy, and the staff member may not have intended any harm. But offering an excuse on their behalf doesn't help Mrs Ahmed and may make her feel her experience doesn't matter." },
    { text: "Refer her to the clinical psychology service for support with her body image.",
      brief: "May be helpful later, but turns a dignity issue into a problem with her.",
      detailed: "Psychological support can help people adjust to hair loss, and she might value it. But offering it as the response to this incident suggests the issue is her reaction rather than how she was treated." }
  ],
  explanation: {
    issue: "This tests how you respond when a patient's dignity hasn't been respected: acknowledging her feelings, acting to prevent a repeat, and avoiding defensive responses.",
    keyDetails: "The metal clips did need removing; the problem was where it happened. She is likely to need more scans. She has chosen to tell you.",
    reasoning: "{k1} acknowledges her distress, {k2} makes sure the department learns from it, and {k3} protects her at future scans. The distractors defend or excuse what happened ({d1}, {d4}), shift the responsibility onto her ({d2}, {d5}), or pass her on ({d3}).",
    competing: "{d1} is factually correct, which makes it tempting, but answering a dignity concern with a safety rule misses why she is upset."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, treating patients with dignity and respect; Domain 3, responding to concerns about care." }
  ],
  tags: ["dignity", "privacy", "oncology", "hair loss"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-059", letters: "EDBAC", format: "ranking", difficulty: "hard",
  title: "A comment on the ward round", setting: "General surgery", attribute: P,
  topic: "Challenging undermining, bullying and discrimination",
  gmcDomains: ["Colleagues, culture and safety"],
  competencies: ["Challenging inappropriate behaviour", "Supporting colleagues", "Using proper channels"],
  stem:
    "You are an F2 doctor in general surgery. On the ward round, Dr Price, the consultant, asks Dr Lewis, a female F1, to present a patient. When she hesitates, he says to the patient, laughing, \"Don't worry, she's better at making tea than diagnoses — that's why we keep her around.\"\n\n" +
    "Dr Lewis smiles, but looks upset. Last week she told you that he often makes comments like this. Dr Price glances at you, as if expecting you to laugh.",
  options: [
    { text: "After the ward round, ask Dr Lewis how she is and talk about what she would like to do.",
      brief: "She is the person most affected, and her wishes should shape what happens next.",
      detailed: "Supporting her comes first: she is upset, and this is part of a pattern. Talking with her about the options, such as speaking to Dr Price, her educational supervisor, or the trust's reporting route, helps her decide, and means any action reflects her wishes where possible." },
    { text: "Speak to Dr Price privately, explaining that the comment was inappropriate and upsetting.",
      brief: "Challenging the behaviour directly is appropriate, if you feel able to.",
      detailed: "GMC guidance expects doctors to act when they see a colleague being undermined. A calm, private conversation may help Dr Price understand the effect of his comments. It ranks below supporting Dr Lewis because she may have views on how it's raised, and as an F2 you may also want advice before challenging a consultant." },
    { text: "Report the comment through the trust's reporting system, even if Dr Lewis prefers you didn't.",
      brief: "A pattern of comments may need reporting, but acting without discussing it with her is premature.",
      detailed: "Repeated undermining of a junior colleague is a serious concern, and you can raise what you witnessed. But doing so immediately, against her wishes and before talking it through, may leave her feeling her choices weren't respected. It's not wrong in itself, which is why this question is hard." },
    { text: "Reassure Dr Lewis that it was only a joke and she shouldn't take it personally.",
      brief: "Minimises her experience and discourages her from raising it.",
      detailed: "This may be meant kindly, but it suggests her reaction is the problem rather than his behaviour, and may stop her seeking help." },
    { text: "Laugh along with Dr Price's comment during the ward round, so things don't become awkward.",
      brief: "Endorses the comment in front of a patient and colleagues.",
      detailed: "It's common to laugh awkwardly when a senior makes a joke, but doing so here signals that the behaviour is acceptable and leaves Dr Lewis isolated. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests how you respond when a senior undermines a colleague with a discriminatory remark, balancing support for her, challenge, and reporting.",
    keyDetails: "The comment was made in front of a patient. Dr Lewis looks upset and has told you it has happened before. You are junior to the consultant.",
    reasoning: "{1} supports Dr Lewis and puts her wishes at the centre, {2} challenges the behaviour, and {3} reports it, though prematurely. {4} minimises her experience and {5} reinforces the behaviour.",
    competing: "Many would argue {2} should come first, since GMC guidance says doctors should challenge such behaviour. Both are appropriate; the key puts Dr Lewis first because she is upset now and has a say in how it's taken forward. {3} would rise if she agreed or if the pattern continued."
  },
  refs: [
    { ref: "gmp", note: "Domain 3, 'Contributing to a positive working and training environment': acting when a colleague is bullied, harassed or undermined." },
    { ref: "equality", note: "Harassment related to sex is unlawful under the Equality Act 2010." }
  ],
  tags: ["undermining", "sexism", "consultants", "speaking up"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-060", letters: "CGH", format: "multiple_choice", difficulty: "moderate",
  title: "\"I'll post it online\"", setting: "General medical ward", attribute: C,
  topic: "Complaints, aggression and difficult encounters",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["De-escalation", "Explaining decisions", "Fair allocation of resources"],
  stem:
    "You are an F2 doctor on a general medical ward. Mr Barker, 81, was admitted yesterday with a chest infection and is in a six-bed bay. His daughter approaches you, angry, saying the bay is noisy and her father hasn't slept.\n\n" +
    "She demands that he is moved to the side room opposite. When you hesitate, she holds up her phone and says that unless he is moved within the hour she'll post a video online naming you and the nurses. The side room is occupied by a patient with C. difficile.",
  options: [
    { text: "Stay calm, listen, and acknowledge her concern about her father's sleep.",
      brief: "Listening often defuses anger and shows you take her seriously.",
      detailed: "Behind the threat is a worry about her father. Acknowledging that, calmly and without becoming defensive, is often enough to lower the temperature and lets you understand what would help." },
    { text: "Explain how side rooms are allocated, and what could help her father rest in the bay.",
      brief: "Honest about the limits, while offering practical help.",
      detailed: "You can explain, without naming anyone, that side rooms are allocated according to clinical need. Offering practical steps, such as eye masks, earplugs, reviewing night-time observations and noise in the bay, shows you are trying to help." },
    { text: "Involve the nurse in charge, and tell her how to raise a complaint if she remains unhappy.",
      brief: "Brings in the person who manages beds, and gives her a proper route for her concerns.",
      detailed: "The nurse in charge can look at whether a move to a quieter area is possible. Explaining how to contact the Patient Advice and Liaison Service (PALS) or make a complaint gives her a legitimate route that is far more likely to help than a video." },
    { text: "Agree to ask the nurse in charge to find Mr Barker a side room within the hour.",
      brief: "Side rooms are allocated on clinical need, not in response to threats.",
      detailed: "This would end the confrontation quickly, which is what makes it tempting. But side rooms are allocated for infection control and other clinical needs, and giving way to a threat would be unfair to other patients and make the same thing more likely next time." },
    { text: "Explain that filming staff on the ward isn't allowed, and ask her to put her phone away.",
      brief: "A fair point, but it focuses on the threat rather than her concern, and may escalate things.",
      detailed: "Wards often have policies about filming, and it's reasonable to mention them at some point. But leading with this treats her as a problem to be managed rather than a worried relative, and is likely to make her angrier." },
    { text: "Tell her that naming staff online could be treated as harassment.",
      brief: "Sounds like a counter-threat and is likely to escalate things.",
      detailed: "Staff are protected from harassment, and the trust may act if they are targeted. But responding to a threat with a threat is unlikely to calm her, and doesn't address her concern." },
    { text: "Explain that the side room is needed for a patient with an infection.",
      brief: "Reveals another patient's diagnosis, which is confidential.",
      detailed: "It may seem honest to explain why the room isn't available, and in general terms you can say side rooms are prioritised for clinical reasons. But naming the patient's infection, or implying who is in the room, breaches their confidentiality." },
    { text: "Ask the nurses to deal with her, as room allocation is a nursing decision.",
      brief: "Bed allocation is often led by nurses, but passing her on now leaves her feeling dismissed.",
      detailed: "The nurse in charge usually manages bed allocation, so involving them is sensible. But walking away from an angry relative, rather than engaging with her and then involving the nurse in charge, is likely to escalate things." }
  ],
  explanation: {
    issue: "This tests how you respond calmly to a threat from a relative, keeping to fair, clinically based decisions while addressing her real concern.",
    keyDetails: "Her concern about his sleep is reasonable. The side room is needed for infection control. Her threat is designed to put you under pressure.",
    reasoning: "{k1} lowers the tension, {k2} explains the limits honestly and offers help, and {k3} brings in the right person and gives her a route to complain. The distractors give in to the threat ({d1}), escalate ({d2}, {d3}), breach another patient's confidentiality ({d4}), or pass her on ({d5}).",
    competing: "{d4} is the subtle one: explaining why a room is unavailable feels honest, but naming another patient's infection breaches their confidentiality."
  },
  refs: [
    { ref: "gmp", note: "Domain 2, communicating with patients and those close to them; Domain 4, fair use of resources." },
    { ref: "confidentiality", note: "Not disclosing other patients' information." }
  ],
  tags: ["difficult relatives", "threats", "side rooms", "social media"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-061", letters: "DACEB", format: "ranking", difficulty: "moderate",
  title: "\"Just say I've seen him\"", setting: "Emergency department", attribute: P,
  topic: "Honesty with patients and colleagues",
  gmcDomains: ["Trust and professionalism", "Colleagues, culture and safety"],
  competencies: ["Honesty", "Patient safety", "Supporting colleagues"],
  stem:
    "You are an F2 doctor in the Emergency Department. An hour ago the consultant asked your colleague, Dr Hart, to see Mr Ward, 70, who has abdominal pain, in cubicle 7. Dr Hart has been busy with another patient and hasn't seen him yet.\n\n" +
    "The consultant is walking towards you. Dr Hart quickly says, \"If he asks, just tell him I've seen the man in cubicle 7 and he's fine. I'll get to him in a minute.\"",
  options: [
    { text: "Tell Dr Hart you won't do that, and that the consultant needs to know Mr Ward hasn't been seen.",
      brief: "Being honest protects Mr Ward, and your colleague, from a false picture.",
      detailed: "If the consultant believes Mr Ward has been seen and is fine, he may not be prioritised, and abdominal pain in a 70-year-old can be serious. Refusing to lie, and making sure the consultant has accurate information, protects the patient. It also protects Dr Hart from a far bigger problem later." },
    { text: "Offer to see Mr Ward yourself, if you have the capacity.",
      brief: "Makes sure he is seen soon, and helps a stretched colleague.",
      detailed: "This deals with the practical problem: Mr Ward needs assessing. It ranks second because it doesn't replace giving the consultant accurate information; if you're also busy, Mr Ward still needs to be prioritised." },
    { text: "Suggest Dr Hart tells the consultant himself that he hasn't managed to see Mr Ward yet.",
      brief: "The right outcome, but leaves it to Dr Hart, and the consultant is almost with you.",
      detailed: "Encouraging him to be honest himself is good, and he may well agree. But with the consultant about to ask you, it relies on Dr Hart acting in time." },
    { text: "Tell the consultant that you're not sure, and that he should ask Dr Hart.",
      brief: "Evasive and not honest: you know Mr Ward hasn't been seen.",
      detailed: "This may feel like a way of not lying, but saying you're not sure, when you know Mr Ward hasn't been seen, is itself misleading. It also delays the information the consultant needs." },
    { text: "Tell the consultant that Dr Hart has seen Mr Ward, as he asked.",
      brief: "A direct lie that could leave an unwell patient unassessed.",
      detailed: "Loyalty to a colleague is understandable, but this is dishonest and could delay the assessment of a patient who may be seriously unwell." }
  ],
  explanation: {
    issue: "This tests whether you stay honest when a colleague asks you to cover for him, and recognise the risk to the patient.",
    keyDetails: "Mr Ward is 70 with abdominal pain and hasn't been seen. The consultant is about to ask. Dr Hart is busy rather than negligent.",
    reasoning: "{1} refuses to lie and makes sure the consultant knows, and {2} makes sure Mr Ward is seen. {3} is honest in intent but relies on Dr Hart, {4} is evasive, and {5} is dishonest.",
    competing: "Some would put offering to see Mr Ward first. You may do both, but the key ranks honesty first because the consultant's decisions about the department depend on accurate information."
  },
  refs: [
    { ref: "gmp", note: "Domain 4, honesty and integrity; Domain 3, raising concerns about patient safety." }
  ],
  tags: ["honesty", "covering for colleagues", "emergency department"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-062", letters: "AFG", format: "multiple_choice", difficulty: "easy",
  title: "Turned away", setting: "General practice", attribute: P,
  topic: "Equality and fair treatment of patients",
  gmcDomains: ["Patients, partnership and communication", "Trust and professionalism"],
  competencies: ["Access to care", "Personal beliefs", "Raising concerns"],
  stem:
    "You are an F2 doctor in a GP practice. Ms Patel, 24, comes back to reception in tears. She had unprotected sex two days ago and saw Dr Hughes, a salaried GP, asking for emergency contraception.\n\n" +
    "She says Dr Hughes told her he doesn't provide emergency contraception because of his religious beliefs, and that she should \"think carefully about her choices\". He didn't tell her where else she could get it. The receptionist asks if you can help.",
  options: [
    { text: "Make sure Ms Patel can get emergency contraception today, at the practice if possible.",
      brief: "Emergency contraception is time-sensitive, and she has a right to access it.",
      detailed: "Emergency contraception is more effective the sooner it is used. GMC guidance allows doctors to opt out of some procedures because of their beliefs, but says patients must still be able to access care. Seeing her yourself, or arranging for someone else to, ensures she isn't disadvantaged. She should also be told about all the options: a copper intrauterine device is the most effective method and can be fitted up to five days after unprotected sex." },
    { text: "Apologise for her experience, and explain how she can give feedback if she wishes.",
      brief: "Acknowledges what happened and gives her a route to raise it.",
      detailed: "She has been upset by how she was treated. An apology for her experience, without criticising your colleague, and information on how to raise a concern or complaint, respects her and allows the practice to learn." },
    { text: "Let your GP supervisor know what happened, so the practice can prevent a repeat.",
      brief: "The practice needs to know, so that patients can always access this care.",
      detailed: "Practices should have arrangements so that a doctor's objection never stops patients getting care. Telling your supervisor allows the practice to review those arrangements and to speak to Dr Hughes." },
    { text: "Tell Ms Patel that she can buy emergency contraception from a local pharmacy without an appointment.",
      brief: "True, but leaves a distressed patient to sort it out herself.",
      detailed: "Oral emergency contraception is available from pharmacies, so this is accurate. But she has come to the practice for help, is upset, and may need advice about all her options, including an intrauterine device. Sending her away again isn't a good response to what has happened." },
    { text: "Tell Dr Hughes his religious views have no place in medicine.",
      brief: "Doctors may hold beliefs; the issue is how he treated her.",
      detailed: "GMC guidance accepts that doctors can opt out of some procedures for reasons of conscience. The problem is that he expressed disapproval and didn't make sure she could get care elsewhere. Attacking his beliefs is unhelpful and unprofessional." },
    { text: "Report Dr Hughes to the GMC straight away.",
      brief: "Premature: a concern like this should be raised locally first.",
      detailed: "His conduct may need to be addressed, but this is a matter for the practice to look at first, through your supervisor or the practice lead. Referral to the GMC is for serious concerns that can't be handled locally." },
    { text: "Book Ms Patel a routine appointment with another GP next week.",
      brief: "Too late; emergency contraception is time-critical.",
      detailed: "Seeing another GP is the right idea, but a routine appointment next week would be too late for emergency contraception to be effective." },
    { text: "Explain to Ms Patel that Dr Hughes is entitled to his beliefs.",
      brief: "True in part, but defends him rather than helping her.",
      detailed: "Doctors are entitled to their beliefs, but this doesn't answer her distress, and it overlooks that he shouldn't have expressed disapproval or left her without access to care." }
  ],
  explanation: {
    issue: "This tests whether you make sure a patient gets time-sensitive care when a colleague's personal beliefs have got in the way, and raise the problem appropriately.",
    keyDetails: "Emergency contraception is time-critical. Doctors can opt out on grounds of conscience, but must not obstruct access or express disapproval. Ms Patel is distressed.",
    reasoning: "{k1} gets her the care she needs, {k2} acknowledges her experience and gives her a route to raise it, and {k3} makes sure the practice addresses the problem. The distractors either don't help her enough ({d1}, {d4}), defend or attack Dr Hughes ({d2}, {d5}), or escalate prematurely ({d3}).",
    competing: "{d1} is accurate, but on its own it leaves a distressed patient to arrange her own care, when you can make sure she gets it today."
  },
  refs: [
    { ref: "beliefs", note: "Doctors who object to providing a treatment must make sure patients can access it, and must not express disapproval of their lifestyle or choices." },
    { ref: "gmp", note: "Domain 2, treating patients fairly; Domain 3, raising concerns." }
  ],
  tags: ["personal beliefs", "emergency contraception", "access to care", "general practice"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-063", letters: "BECDA", format: "ranking", difficulty: "moderate",
  title: "A foot check that wasn't", setting: "General medical ward", attribute: P,
  topic: "Own errors and candour",
  gmcDomains: ["Trust and professionalism", "Patients, partnership and communication"],
  competencies: ["Honesty about errors", "Record keeping", "Patient safety"],
  stem:
    "You are an F2 doctor on a general medical ward. Last night, during a very busy on-call, you clerked Mr Osei, 74, who has type 2 diabetes. On the admission proforma you ticked \"feet examined — no ulceration\", although you didn't actually examine his feet.\n\n" +
    "This afternoon a nurse finds an ulcer on his heel and asks you whether it was there when he was admitted.",
  options: [
    { text: "Tell the nurse and your registrar that you didn't actually examine his feet last night.",
      brief: "Honesty is essential, and the team needs to know when the ulcer could have developed.",
      detailed: "The record currently suggests the ulcer developed in hospital, which affects how it is investigated, managed and reported. Admitting that you didn't examine his feet, although it's uncomfortable, gives the team accurate information and is the honest response." },
    { text: "Make sure the ulcer is assessed, and refer him to the diabetic foot team.",
      brief: "A diabetic foot ulcer needs prompt specialist assessment.",
      detailed: "Foot ulcers in people with diabetes can deteriorate quickly. Making sure it is assessed properly and referred to the specialist team is essential for Mr Osei's care. It ranks second because the honest answer to the nurse's question comes first, and is quick." },
    { text: "Add a dated entry to the notes explaining that the feet weren't examined on admission.",
      brief: "Corrects the record without altering the original.",
      detailed: "Records shouldn't be altered, but a clear, dated note that the earlier entry was incorrect keeps the record accurate. It ranks below telling the team and treating the ulcer because those matter more for Mr Osei right now." },
    { text: "Tell the nurse that you can't remember whether the ulcer was there when you clerked him.",
      brief: "Misleading: you know you didn't examine his feet.",
      detailed: "This avoids an outright lie, but it is misleading, because you know you didn't examine his feet, and it leaves the record misleading too." },
    { text: "Tell the nurse that the ulcer must have developed since admission.",
      brief: "A false statement that could mislead an investigation.",
      detailed: "This would compound the original error with a deliberate falsehood, and could wrongly suggest the ulcer was caused by care on the ward. It is the least appropriate option." }
  ],
  explanation: {
    issue: "This tests whether you are honest about an error in your own records, and correct it properly, while making sure the patient is cared for.",
    keyDetails: "You documented an examination you didn't do. The nurse is asking a direct question. The answer affects whether the ulcer is treated as hospital-acquired.",
    reasoning: "{1} is honest with the team, {2} makes sure he gets the right care, and {3} corrects the record properly. {4} is evasive and {5} is a lie.",
    competing: "Some would put referring the ulcer first, on the basis that patient care comes first. The key puts the honest answer first because it's immediate, and the nurse needs it to act correctly. You should also reflect on what happened with your educational supervisor."
  },
  refs: [
    { ref: "candour", note: "Being open and honest with colleagues when things go wrong." },
    { ref: "gmp", note: "Domain 1, keeping clear, accurate records; Domain 4, honesty." }
  ],
  tags: ["documentation", "honesty", "diabetic foot", "candour"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-064", letters: "BDE", format: "multiple_choice", difficulty: "hard",
  title: "Weekend on-call", setting: "General surgery", attribute: C,
  topic: "Prioritisation and competing demands",
  gmcDomains: ["Knowledge, skills and development", "Colleagues, culture and safety"],
  competencies: ["Prioritisation", "Recognising the unwell patient", "Asking for help"],
  stem:
    "You are an F2 doctor on a Saturday day shift, covering about 120 general surgical inpatients across four wards. You have a list of ten patients needing IV fluid prescriptions, and two other jobs.\n\n" +
    "A nurse on Ward 8 bleeps you. Mr Turner, 68, is two days after a bowel resection and has developed central chest pain. His heart rate is 110 and his blood pressure is 105/70. Your registrar is in theatre with an emergency laparotomy.",
  options: [
    { text: "Ask the nurse to do an ECG and repeat his observations, and go to see Mr Turner now.",
      brief: "He needs urgent assessment, and an ECG will be ready when you arrive.",
      detailed: "Chest pain with a raised heart rate after major surgery needs immediate assessment. Asking for an ECG and repeat observations before you arrive saves time, and seeing him promptly lets you recognise and treat a serious cause." },
    { text: "Ask the ward nurses which fluid prescriptions are most urgent, and do those first afterwards.",
      brief: "Some patients will need fluids sooner than others; the nurses can tell you which.",
      detailed: "Patients who are nil by mouth, have low urine output or whose fluids have run out need prescriptions sooner than others. Asking the nurses to prioritise the list means the most urgent are done first once you've seen Mr Turner." },
    { text: "Update the registrar about Mr Turner once you've assessed him.",
      brief: "Your registrar needs to know about a sick patient and whether you need help.",
      detailed: "Even if the registrar is in theatre, they will want to know about a deteriorating post-operative patient, and can arrange support or advise you. Being clear if your workload is unmanageable gives them the chance to help." },
    { text: "Write the fluid prescriptions first, as they are quick and many patients depend on them.",
      brief: "Fluids matter, but chest pain in a post-operative patient is potentially life-threatening.",
      detailed: "This is the trap. Ten fluid prescriptions are important and may feel more manageable, but Mr Turner could have a myocardial infarction, a pulmonary embolus or an anastomotic leak. He must be assessed first." },
    { text: "Ask the nurse to give him GTN and call you back if the pain persists.",
      brief: "Treats a possible cardiac cause without assessment, and may be dangerous if he's hypotensive.",
      detailed: "GTN may be used for cardiac chest pain, but giving it without assessment risks dropping his blood pressure further and delays finding out what is wrong." },
    { text: "Prescribe the same standard 24-hour maintenance regimen for every patient on the list.",
      brief: "Fluid needs vary widely; blanket prescribing risks harm.",
      detailed: "This would clear the list quickly, but fluid prescriptions should be based on each patient's needs, including their electrolytes and fluid balance. A standard regimen could be harmful for some." },
    { text: "Ask the nurse to call the medical registrar to see Mr Turner instead.",
      brief: "May be needed later, but he first needs assessment by his own team.",
      detailed: "Medical advice can be valuable for post-operative chest pain, but Mr Turner is a surgical patient and you are the doctor covering him. He needs your assessment first." },
    { text: "Ask the nurses to phone you the patients' fluid requirements so you can prescribe them verbally.",
      brief: "Verbal prescribing of routine IV fluids isn't safe practice.",
      detailed: "This saves time, but routine prescriptions should be written by the prescriber after assessment, not given verbally, to avoid errors." }
  ],
  explanation: {
    issue: "This tests how you prioritise a potentially unwell patient over routine tasks, organise the rest of your work safely, and keep your seniors informed.",
    keyDetails: "Mr Turner has chest pain, a tachycardia and a borderline blood pressure two days after major surgery. The fluid list is long but less urgent. Your registrar is in theatre.",
    reasoning: "{k1} assesses the sickest patient first, {k2} prioritises the remaining work sensibly, and {k3} keeps your senior informed. The distractors either prioritise the wrong task ({d1}), treat without assessment ({d2}), use unsafe shortcuts ({d3}, {d5}), or pass the patient on ({d4}).",
    competing: "{d1} is the hard distractor: clearing a list feels productive, but a potentially serious problem in one patient takes priority."
  },
  refs: [
    { ref: "news2", note: "Escalation of care for patients with abnormal observations." },
    { ref: "gmp", note: "Domain 1, prioritising patients according to clinical need; Domain 3, asking for help." }
  ],
  tags: ["prioritisation", "on-call", "chest pain", "surgery"]
},

// ─────────────────────────────────────────────────────────────────────────────
{
  id: "sjt-065", letters: "CABD", format: "ranking", difficulty: "moderate",
  title: "A repeat hearing test", setting: "Paediatrics", attribute: E,
  topic: "Breaking bad news and uncertainty",
  gmcDomains: ["Patients, partnership and communication"],
  competencies: ["Explaining uncertainty", "Reassurance", "Communication"],
  stem:
    "You are an F2 doctor on the postnatal ward. Baby Lily, two days old, had her newborn hearing screen this morning. It didn't show a clear response in one ear, and the screener has arranged a second test before discharge.\n\n" +
    "Lily's parents stop you as you pass. They are anxious and ask you whether this means she is deaf.",
  options: [
    { text: "Explain that a second test is common and doesn't necessarily mean hearing loss.",
      brief: "Honest, accurate information is reassuring without making promises.",
      detailed: "It's common for newborns not to give a clear response on the first test, often because of fluid or a temporary blockage in the ear, background noise, or the baby being unsettled. Most babies who need a second test don't have permanent hearing loss. Explaining this honestly, without promising a result, gives the parents real reassurance." },
    { text: "Offer to ask the screener to come and talk to them about the second test.",
      brief: "The screener can give detailed information and answer their questions.",
      detailed: "The screener knows the test well and can explain exactly what will happen. Arranging this is helpful; it ranks second because the parents are anxious now, and you can give them accurate information straight away." },
    { text: "Tell them the screener will explain everything at the second test.",
      brief: "Not wrong, but leaves them worrying until then.",
      detailed: "The screener will explain the test, but the parents are anxious now. Putting them off when you could give them some accurate information misses an opportunity to help." },
    { text: "Reassure them that you are sure Lily's hearing will turn out to be completely normal.",
      brief: "Kind, but makes a promise you can't keep.",
      detailed: "This is tempting, as you want to relieve their worry. But you can't know the result, and if Lily does have a hearing problem, false reassurance would damage their trust." }
  ],
  explanation: {
    issue: "This tests how you communicate uncertainty to anxious parents: honestly, accurately, and without false reassurance.",
    keyDetails: "A second test is common and doesn't necessarily mean hearing loss. The parents are anxious now. You can't know the result.",
    reasoning: "{1} gives accurate, honest reassurance, and {2} arranges more detailed information. {3} defers when you could help, and {4} makes a promise you can't keep.",
    competing: "Some would rank deferral last, since it doesn't help at all. The key puts false reassurance last because it could damage their trust if Lily does have a hearing problem."
  },
  refs: [
    { ref: "newbornhearing", note: "A second test doesn't necessarily mean hearing loss; common reasons include fluid in the ear and an unsettled baby." },
    { ref: "gmp", note: "Domain 2, giving patients and families honest information." }
  ],
  tags: ["newborn screening", "hearing", "uncertainty", "parents"]
}
];
