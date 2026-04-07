/* ── FREE TRIAL DATA ── */
const CPS_QUESTIONS = [
  {patient:{age:'68',sex:'Male',setting:'ED',presenting:'Chest pain'},stem:'A 68-year-old man presents with a 90-minute history of severe central chest pain radiating to his jaw. He is diaphoretic. ECG shows ST elevation in V1–V4. BP 105/68 mmHg, HR 94 bpm.',q:'What is the single most appropriate immediate management?',opts:['IV morphine and bed rest','Aspirin 300mg + urgent primary PCI','Sublingual GTN and observe','CT coronary angiography','Commence IV heparin infusion alone'],ans:1,exp:'Anterior STEMI (V1–V4 ST elevation) requires aspirin 300mg loading plus immediate primary PCI — the gold standard for reperfusion. GTN is relatively contraindicated with borderline BP. CT angiography has no role in acute STEMI. Heparin alone is insufficient.'},
  {patient:{age:'45',sex:'Female',setting:'AMU',presenting:'Breathlessness'},stem:'A 45-year-old woman, 5 days post-laparoscopic cholecystectomy, develops sudden dyspnoea and right-sided pleuritic chest pain. RR 22, O₂ sats 90% on air, HR 110. Wells PE score is 5.',q:'What is the most appropriate next step?',opts:['D-dimer and await result','CXR and ABG only','Therapeutic LMWH and urgent CTPA','V/Q scan (CTPA unavailable)','Discharge with outpatient CTPA'],ans:2,exp:'With Wells ≥5 (PE likely), D-dimer is not appropriate — a positive result is near-guaranteed post-operatively. Immediate anticoagulation with LMWH followed by urgent CTPA is the correct approach. Do not wait for imaging before treating a clinically high-probability PE.'},
  {patient:{age:'72',sex:'Male',setting:'ED',presenting:'Headache'},stem:'A 72-year-old man presents with a sudden onset "worst headache of my life" while lifting a box. He is alert with no focal neurology. CT head (3 hours post-onset) is reported as normal.',q:'What is the single most important next investigation?',opts:['MRI brain with contrast','Repeat CT in 24 hours','Lumbar puncture (≥12h post-onset) for xanthochromia','EEG','Carotid Doppler ultrasound'],ans:2,exp:'Thunderclap headache + normal CT does not exclude subarachnoid haemorrhage. CT sensitivity falls to ~85% at 6h and lower thereafter. LP ≥12 hours post-onset detects xanthochromia by spectrophotometry — the gold standard second test. The patient must not be discharged without this.'},
  {patient:{age:'3',sex:'Male',setting:'ED',presenting:'Fever + rash'},stem:'A 3-year-old presents with 8-hour history of high fever, irritability, and a spreading petechial rash on his trunk and legs. He is drowsy. CRT 4 seconds. Temperature 39.7°C.',q:'What is the single most appropriate immediate action?',opts:['Urgent blood cultures then await results','IV cefotaxime + blood cultures simultaneously','IM benzylpenicillin immediately, then transfer','LP before antibiotics','Paracetamol and observe for 1 hour'],ans:2,exp:'This is meningococcal septicaemia until proven otherwise — non-blanching rash + fever + shock. In a pre-hospital/GP setting: IM benzylpenicillin immediately. In hospital, blood cultures should be taken simultaneously with IV cefotaxime — not before. LP must never delay antibiotic treatment.'},
  {patient:{age:'58',sex:'Female',setting:'GP',presenting:'Chest tightness'},stem:'A 58-year-old woman with a 4-week history of exertional central chest tightness relieved by rest. She has hypertension and a 20-pack-year smoking history. Resting ECG is normal.',q:'What is the most appropriate next investigation?',opts:['Exercise ECG treadmill test','CT coronary angiography','Troponin and CXR only','Reassure and discharge','Echocardiogram'],ans:1,exp:'Per NICE NG228 (2023), CT calcium scoring followed by CT coronary angiography is now first-line for investigation of suspected stable angina — not exercise treadmill testing, which has been superseded. Exercise ECG is no longer recommended as a routine diagnostic test for chest pain.'},
  {patient:{age:'29',sex:'Female',setting:'Ward',presenting:'Post-op deterioration'},stem:'A 29-year-old woman, 48h post-appendicectomy, is increasingly confused with a temperature of 38.9°C, HR 118, BP 92/58 mmHg, and RR 24. Urine output has been 15ml/hour for the past 3 hours.',q:'Using the Sepsis 6 approach, what should be done within 1 hour?',opts:['IV paracetamol and recheck in 2 hours','Blood cultures, IV broad-spectrum antibiotics, IV fluid challenge, high-flow O₂, monitor lactate, catheterise','Oral ciprofloxacin and encourage fluids','CT abdomen then antibiotics','Await surgical review before any treatment'],ans:1,exp:'This is septic shock (qSOFA ≥2, hypotension, tachycardia, oliguria). The Sepsis 6 bundle must be initiated within 1 hour: (1) high-flow O₂, (2) blood cultures, (3) IV antibiotics, (4) IV fluid bolus, (5) lactate measurement, (6) urinary catheter for strict fluid balance. Do not wait for imaging or specialist review.'},
  {patient:{age:'42',sex:'Male',setting:'Outpatients',presenting:'Weight gain + fatigue'},stem:'A 42-year-old man presents with 6 months of fatigue, weight gain of 8kg, cold intolerance, constipation, and dry skin. His TSH is 54 mU/L and free T4 is low.',q:'What is the most appropriate first-line treatment?',opts:['Liothyronine (T3) alone','Levothyroxine starting at 100 micrograms/day','Levothyroxine starting at 25–50 micrograms/day with TFT recheck in 6–8 weeks','Radioiodine therapy','Thyroidectomy'],ans:2,exp:'Primary hypothyroidism is treated with levothyroxine. Start low (25–50 mcg/day), especially in older patients or those with cardiac risk, to avoid precipitating angina or arrhythmia. Recheck TFTs at 6–8 weeks and titrate. Starting at 100mcg is appropriate only in younger, healthy adults. Liothyronine is not first-line.'},
  {patient:{age:'65',sex:'Male',setting:'ED',presenting:'Haematemesis'},stem:'A 65-year-old man on aspirin and warfarin (for AF) presents with haematemesis. He is haemodynamically stable. INR 3.4. Hb 88 g/L. No active bleeding on endoscopy. Endoscopy shows a 1.2cm duodenal ulcer with a visible vessel.',q:'What is the Rockall post-endoscopy score likely to suggest and what is the most appropriate next step?',opts:['Low risk — discharge with PPI','High risk — IV PPI infusion, hold anticoagulation, re-endoscopy if rebleeds','Continue warfarin — thromboembolic risk outweighs GI risk','Surgical referral immediately','Tranexamic acid IV and discharge'],ans:1,exp:'A duodenal ulcer with a visible vessel (stigmata of recent haemorrhage) carries significant rebleed risk. Post-endoscopy Rockall ≥5 = high risk. Management: IV PPI (omeprazole 80mg bolus then 8mg/hr), temporary hold of anticoagulation, close monitoring. Bridge anticoagulation decisions with haematology. Warfarin should be withheld acutely.'},
  {patient:{age:'34',sex:'Female',setting:'ED',presenting:'Abdominal pain + PV bleeding'},stem:'A 34-year-old woman presents with right iliac fossa pain for 6 hours and light vaginal bleeding. LMP 7 weeks ago. BP 88/54 mmHg, HR 126. Urine βhCG is strongly positive.',q:'What is the most appropriate immediate management?',opts:['Await transvaginal ultrasound before any action','Insert 2 large-bore cannulae, IV fluids, cross-match blood, urgent gynaecology review — ectopic until proven otherwise','Methotrexate IM immediately','Arrange outpatient EPAU review','Administer IM progesterone'],ans:1,exp:'This is a haemodynamically unstable ectopic pregnancy until proven otherwise — the classic triad of positive βhCG, amenorrhoea, and pain with haemodynamic compromise. Immediate resuscitation (IV access, fluids, cross-match) and emergency gynaecology review are mandatory. Ultrasound is important but must not delay resuscitation. Methotrexate is only for stable, confirmed ectopic.'},
  {patient:{age:'77',sex:'Female',setting:'Ward',presenting:'Acute confusion'},stem:'A 77-year-old woman with known dementia and a urine dipstick positive for nitrites and leucocytes is noted to be acutely confused on the morning ward round. She has no fever, HR 88, BP 136/82. Her baseline MMSE is 18/30.',q:'What is the most appropriate initial management?',opts:['Catheterise and send CSU, start oral trimethoprim empirically immediately','Urine culture and sensitivity, encourage oral hydration, treat only if culture positive or clinical deterioration','Haloperidol for agitation','IV co-amoxiclav for 7 days','Arrange CT head urgently'],ans:1,exp:'Asymptomatic bacteriuria (positive dipstick without systemic signs) should not be treated with antibiotics — especially in patients with dementia or catheter-associated bacteriuria. Acute confusion in dementia has many causes (dehydration, constipation, medication, pain). Treat the underlying cause first; await culture results before prescribing antibiotics for UTI.'}
];

const SJT_QUESTIONS = [
  {stem:'You are FY2 on call at night. Your registrar asks you to document that they were present during a central line insertion you performed alone (they were held up in resus). They say it is "just paperwork".',q:'Rank the following from MOST (1) to LEAST (5) appropriate:',opts:['Politely decline, document accurately, and speak with the registrar privately afterwards','Agree — the registrar is ultimately responsible and would have supervised if possible','Document truthfully; if the registrar persists, escalate to the on-call consultant','Do nothing; allow the registrar to amend the notes themselves','Refuse and immediately file a formal incident report before speaking with the registrar'],ans:0,exp:'Falsifying medical records breaches GMC Good Medical Practice (Domain 4: Maintaining trust). The most appropriate first step is to decline, document accurately, and address this professionally with the registrar. If they persist, escalation is required. Filing a formal report without first addressing the issue privately is disproportionate as a first response.'},
  {stem:'During a busy A&E shift, you notice a nurse administering medication without checking the patient\'s ID band. The patient has a common name and there are two patients with similar names on the same bay.',q:'Which is the MOST appropriate immediate action?',opts:['Say nothing — the nurse is experienced and likely knows what she is doing','Politely interrupt and ask the nurse to verify the patient\'s identity before continuing','Report the nurse to the matron after the shift','Check the patient yourself after the medication has been given','Document the incident in the notes and let the consultant know in the morning'],ans:1,exp:'Patient safety must take precedence in real time. The most appropriate action is immediate, polite intervention — pausing the medication administration to verify identity. This is a safety-critical moment; retrospective reporting does not prevent the potential harm. This is not a criticism of the nurse but a standard safety check.'},
  {stem:'A patient who has capacity tells you they have decided to discharge themselves against medical advice. They have been admitted with community-acquired pneumonia and still require IV antibiotics. They are alert, oriented, and understand the risks you have explained.',q:'What is the MOST appropriate response?',opts:['Refuse to discharge them — it is unsafe','Respect their decision, ensure they understand the risks, document the conversation, and provide a discharge summary and safety-net instructions','Contact their family to persuade them to stay','Arrange an urgent Mental Health Act assessment','Inform the consultant and delay the discharge until they arrive'],ans:1,exp:'A patient with capacity has an absolute right to refuse treatment, including the right to self-discharge, even against medical advice. Your role is to ensure they have been fully informed of the risks, document this clearly, and provide appropriate safety-netting. Contacting family without consent or arranging an MHA assessment without clinical indication would be inappropriate.'},
  {stem:'You are completing a ward round alone as FY2 when a patient mentions that your consultant made a comment about their diagnosis to their spouse last week, without the patient\'s knowledge or consent.',q:'Which of the following represents the MOST appropriate initial response?',opts:['Tell the patient there is nothing you can do as the consultant is senior','Acknowledge the patient\'s concern, apologise that this has happened, explain their right to confidentiality, and advise them on the formal complaints process','Immediately report the consultant to the GMC','Ask the patient not to escalate as it may damage the clinical team','Contact the consultant directly and confront them in front of the patient'],ans:1,exp:'Confidentiality is a cornerstone of medical ethics (GMC Confidentiality guidance). You must acknowledge the patient\'s concern with empathy, validate that their confidentiality rights matter, and inform them of how they can raise a formal concern (PALS, complaints team). You should also consider whether to raise this with your own supervisor. Immediately reporting to the GMC is premature at this stage.'},
  {stem:'At the end of a long shift, a foundation colleague approaches you. They appear tearful and disclose they have been struggling significantly with their mental health for the past month and have started drinking more heavily to cope.',q:'Which of the following is the MOST appropriate response?',opts:['Advise them to speak to HR directly and leave them to it','Listen empathetically, encourage them to seek confidential support (e.g. occupational health, their GP, BMA Doctors for Doctors), and gently explore whether patient safety is currently at risk','Report them immediately to the clinical director as a fitness to practise concern','Cover their shifts without mentioning anything to anyone','Tell them to take a few days off and they will feel better'],ans:1,exp:'Doctors have a duty of care to themselves and to patients. The first priority is to listen and offer genuine support. Encouraging confidential routes (OH, GP, BMA helpline) protects both the colleague and patients. However, if there is evidence of impaired practice, you have a duty to escalate — this question indicates distress but not necessarily impaired practice yet. Immediate reporting without support is inappropriate and may deter colleagues from seeking help.'},
  {stem:'You are asked to consent a patient for an elective total hip replacement. During your conversation, you realise the patient has significantly misunderstood the operation — they believe it is a "straightforward knee procedure".',q:'What should you do?',opts:['Proceed with consent — they will be better informed after the procedure','Obtain consent anyway — the consultant can clarify later','Stop, clearly correct the misunderstanding, re-explain the procedure, risks, benefits and alternatives, and only proceed with consent when the patient understands','Cancel the operating list','Ask the nurse to re-explain and obtain consent'],ans:2,exp:'Valid consent requires the patient to understand what they are consenting to. Consenting a patient with a fundamental misunderstanding would render that consent invalid. You must correct the misunderstanding thoroughly, re-explain the procedure, and ensure understanding before obtaining consent. If you are not confident in your ability to consent for this procedure, seek senior support — but the consent process cannot proceed on a false basis.'},
  {stem:'Whilst completing discharge paperwork you notice that a colleague has documented a drug allergy for penicillin in a patient\'s notes as "anaphylaxis", but the patient tells you it was just a mild rash as a child and they have taken amoxicillin since without any reaction.',q:'Which is the MOST appropriate action?',opts:['Leave the allergy as documented — it is not worth the risk','Delete the allergy entry immediately','Clarify the history with the patient thoroughly; if the reaction was mild and they have tolerated penicillins since, discuss with a senior and update the allergy record appropriately with full documentation','Refer immediately to immunology','Continue to label as penicillin anaphylaxis for safety'],ans:2,exp:'Mislabelling a mild childhood rash as anaphylaxis causes significant harm — patients are denied first-line antibiotics unnecessarily. A thorough allergy history should be taken. If the evidence suggests the label is inaccurate (mild rash + subsequent tolerance), this should be updated in the notes with clear documentation, ideally following discussion with a senior. This is a patient safety issue in both directions.'},
  {stem:'You are an FY2 and receive a call from a journalist who says they have heard about a patient on your ward who is a public figure. They want a comment on the patient\'s condition.',q:'What is the MOST appropriate response?',opts:['Deny that the patient is admitted','Confirm admission but give no clinical details','Decline to comment on any individual patient and direct them to the hospital\'s press or communications office','Speak to the journalist briefly — public figures have reduced expectation of privacy','Tell the journalist you will speak after your shift'],ans:2,exp:'Confidentiality applies equally to all patients, including public figures. You must not confirm, deny, or comment on any aspect of a patient\'s care to media. The correct response is to decline to comment and direct the journalist to the hospital communications team. Speaking to journalists about patients — even without sharing clinical details — risks inadvertently breaching confidentiality.'},
  {stem:'You are FY2 covering the surgical ward on a Saturday morning. A patient recovering from a hemicolectomy is requesting their maximum prescribed PRN opioid dose for the third time this morning, despite good wound healing and no surgical complications. They are becoming increasingly distressed when doses are declined.',q:'Which response BEST reflects appropriate management?',opts:['Give the opioid — it is prescribed and the patient is in distress','Refuse all further analgesia and document drug-seeking behaviour','Assess the patient holistically, explore their pain and distress, review the analgesic ladder, liaise with the pain team, and consider whether the current regimen is adequate rather than assuming misuse','Discharge early to remove the issue','Contact the patient\'s GP to report possible opioid dependence'],ans:2,exp:'Distress around pain management may reflect undertreated pain, anxiety, prior trauma, or dependency — none of which should be assumed. The most appropriate response is a holistic assessment: review whether analgesia is adequate, explore the patient\'s concerns, involve the acute pain team, and consider adjuncts. Assuming misuse without assessment is poor practice. Refusing all analgesia and labelling patients is harmful and unprofessional.'},
  {stem:'You witness a consultant surgeon make a dismissive and belittling comment about a patient\'s weight in front of the multidisciplinary team during a ward round. The patient appears visibly distressed and says nothing.',q:'Which of the following is the MOST appropriate response?',opts:['Say nothing — challenging a consultant publicly would be inappropriate','Apologise to the patient privately after the ward round, then raise your concern with the consultant privately or through your educational supervisor if the behaviour is repeated','Immediately report the consultant to the GMC','Laugh along to avoid tension','Make a note in the patient\'s records and do nothing else'],ans:1,exp:'Disrespectful comments undermine patient dignity and psychological safety. The most appropriate initial response is to address the impact on the patient — a private apology shows compassion and professionalism. The consultant\'s behaviour should then be raised privately as a first step, or through your educational supervisor if it is a pattern. Immediate GMC referral is disproportionate for a first-time incident that does not constitute immediate patient harm.'}
];

/* ── STATE ── */
let trialMode = 'cps';
let trialQ = 0;
let trialAnswered = false;
let trialScore = { cps: 0, sjt: 0 };
let trialAttempted = { cps: 0, sjt: 0 };
let trialDone = { cps: false, sjt: false };
let trialSelected = null;

function switchTrialTab(mode) {
  trialMode = mode;
  document.getElementById('tabCPS').classList.toggle('active', mode === 'cps');
  document.getElementById('tabSJT').classList.toggle('active', mode === 'sjt');
  trialQ = 0;
  trialAnswered = false;
  trialSelected = null;
  renderTrialQuestion();
}

function getQuestions() {
  return trialMode === 'cps' ? CPS_QUESTIONS : SJT_QUESTIONS;
}

function renderTrialQuestion() {
  const qs = getQuestions();
  const done = trialDone[trialMode];
  if (done) { renderTrialDone(); return; }

  const q = qs[trialQ];
  const total = qs.length;
  const score = trialScore[trialMode];
  const attempted = trialAttempted[trialMode];

  document.getElementById('trialQNum').textContent = trialQ + 1;
  document.getElementById('trialQOf').textContent = `/ ${total}`;
  document.getElementById('trialScore').textContent = score;
  document.getElementById('trialScoreOf').textContent = attempted;
  document.getElementById('trialTabLabel').textContent = trialMode === 'cps' ? 'Clinical Problem Solving' : 'Professional Dilemmas SJT';
  document.getElementById('trialPBar').style.width = `${(trialQ / total) * 100}%`;

  const isCPS = trialMode === 'cps';
  const patientBar = isCPS && q.patient ? `
    <div class="patient-bar">
      <div><div class="pb-lbl">Age</div><div class="pb-val">${q.patient.age} yrs</div></div>
      <div><div class="pb-lbl">Sex</div><div class="pb-val">${q.patient.sex}</div></div>
      <div><div class="pb-lbl">Setting</div><div class="pb-val">${q.patient.setting}</div></div>
      <div><div class="pb-lbl">Presenting</div><div class="pb-val">${q.patient.presenting}</div></div>
    </div>` : '';

  document.getElementById('trialBody').innerHTML = `
    <div class="trial-q-type ${isCPS ? 'type-cps' : 'type-sjt'}">${isCPS ? '🔬 Clinical Problem Solving' : '⚖️ Professional Dilemmas SJT'}</div>
    ${patientBar}
    <div class="trial-stem">${q.stem.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
    <p style="font-size:14px;font-weight:600;color:var(--text);margin-bottom:16px">${q.q}</p>
    <div class="trial-opts" id="trialOpts">
      ${q.opts.map((o, i) => `
        <button class="trial-opt" id="topt${i}" onclick="selectTrialOpt(${i})">
          <div class="opt-letter" id="tletter${i}">${String.fromCharCode(65 + i)}</div>
          <div class="opt-text">${o.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>
        </button>`).join('')}
    </div>
    <div class="trial-expl" id="trialExpl">
      <div class="expl-title">✅ Explanation</div>
      <div class="expl-body" id="trialExplBody"></div>
    </div>
    <div class="trial-actions">
      <div style="font-size:12px;color:var(--text3)">${trialQ > 0 ? `Question ${trialQ + 1} of ${total}` : `${total - trialQ} questions remaining`}</div>
      <div style="display:flex;gap:10px">
        <button class="btn btn-ghost" id="trialSubmitBtn" onclick="submitTrialAnswer()" style="font-size:13.5px">Submit answer →</button>
        <button class="btn btn-cyan" id="trialNextBtn" onclick="nextTrialQ()" style="display:none;font-size:13.5px">${trialQ < total - 1 ? 'Next question →' : 'See results →'}</button>
      </div>
    </div>`;
  trialAnswered = false;
  trialSelected = null;
}

function selectTrialOpt(idx) {
  if (trialAnswered) return;
  trialSelected = idx;
  document.querySelectorAll('.trial-opt').forEach((el, i) => {
    el.classList.toggle('selected', i === idx);
  });
}

function submitTrialAnswer() {
  if (trialSelected === null) {
    const btn = document.getElementById('trialSubmitBtn');
    btn.textContent = 'Please select an answer first';
    btn.style.color = 'var(--amber2)';
    setTimeout(() => { btn.textContent = 'Submit answer →'; btn.style.color = ''; }, 1500);
    return;
  }
  trialAnswered = true;
  const q = getQuestions()[trialQ];
  const correct = trialSelected === q.ans;

  if (correct) trialScore[trialMode]++;
  trialAttempted[trialMode]++;

  document.querySelectorAll('.trial-opt').forEach((el, i) => {
    el.classList.add('disabled');
    if (i === q.ans) el.classList.add('correct');
    else if (i === trialSelected && !correct) el.classList.add('incorrect');
  });

  document.getElementById('trialExplBody').textContent = q.exp;
  document.getElementById('trialExpl').classList.add('show');
  document.getElementById('trialSubmitBtn').style.display = 'none';
  document.getElementById('trialNextBtn').style.display = 'inline-flex';
  document.getElementById('trialScore').textContent = trialScore[trialMode];
  document.getElementById('trialScoreOf').textContent = trialAttempted[trialMode];
}

function nextTrialQ() {
  const qs = getQuestions();
  if (trialQ >= qs.length - 1) {
    trialDone[trialMode] = true;
    renderTrialDone();
  } else {
    trialQ++;
    renderTrialQuestion();
  }
}

function renderTrialDone() {
  const score = trialScore[trialMode];
  const total = getQuestions().length;
  const pct = Math.round((score / total) * 100);
  const isCPS = trialMode === 'cps';
  const bothDone = trialDone.cps && trialDone.sjt;

  let icon, title, sub;
  if (pct >= 80) { icon = '🏆'; title = 'Excellent work!'; sub = `You scored ${score}/${total} — that's a strong performance.`; }
  else if (pct >= 60) { icon = '📈'; title = 'Good start!'; sub = `You scored ${score}/${total}. With the full library, you'll build this up quickly.`; }
  else { icon = '💪'; title = 'Room to grow!'; sub = `You scored ${score}/${total}. That's exactly why MedBank exists — targeted revision works.`; }

  const otherMode = isCPS ? 'sjt' : 'cps';
  const otherTab = isCPS ? 'SJT' : 'Clinical';

  document.getElementById('trialQNum').textContent = '✓';
  document.getElementById('trialQOf').textContent = ' Done';
  document.getElementById('trialPBar').style.width = '100%';
  document.getElementById('trialScore').textContent = score;
  document.getElementById('trialScoreOf').textContent = total;

  document.getElementById('trialBody').innerHTML = `
    <div class="trial-done">
      <div class="trial-done-icon">${icon}</div>
      <div class="trial-done-h">${title}</div>
      <div class="trial-done-sub">${sub}</div>
      <div class="trial-done-stats">
        <div class="td-stat"><div class="td-val" style="color:${pct>=70?'var(--emerald)':'var(--amber2)'}">${score}/${total}</div><div class="td-lbl">Correct</div></div>
        <div class="td-stat"><div class="td-val" style="color:var(--cyan)">${pct}%</div><div class="td-lbl">Score</div></div>
        <div class="td-stat"><div class="td-val" style="color:var(--violet)">${pct >= 83 ? 'Band 4' : pct >= 66 ? 'Band 3' : 'Band 2'}</div><div class="td-lbl">Estimated band</div></div>
      </div>
      <div class="trial-upsell">
        <div class="upsell-text">
          ${bothDone
            ? `You've completed both free sections. The full MedBank library has <strong>3,200+ questions</strong>, adaptive mock exams, a live leaderboard, and weekly challenges. Your ${isCPS ? 'CPS' : 'SJT'} score of <strong>${pct}%</strong> gives you a clear starting point.`
            : `That's your ${isCPS ? 'CPS' : 'SJT'} score. You still have <strong>10 free ${otherTab} questions</strong> to try — switch tabs above. Or unlock the full library for <strong>£49 for 3 months</strong>.`
          }
        </div>
      </div>
      <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap">
        ${!trialDone[otherMode] ? `<button class="btn btn-ghost" onclick="switchTrialTab('${otherMode}')">Try ${otherTab} questions →</button>` : ''}
        <a href="#pricing" class="btn btn-amber">Get full access — £49 →</a>
      </div>
    </div>`;
}

/* ── SCROLL REVEAL ── */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feat-card, .testi-card, .price-card, .hiw-step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});

/* ── INIT ── */
renderTrialQuestion();
