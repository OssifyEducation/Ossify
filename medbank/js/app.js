/* ── DATA ── */
const topics=[
  {id:'cardiovascular',icon:'❤️',title:'Cardiovascular',count:312,done:82,g:'linear-gradient(135deg,#e11d48,#fb7185)'},
  {id:'respiratory',icon:'🫁',title:'Respiratory',count:228,done:71,g:'linear-gradient(135deg,#0284c7,#38bdf8)'},
  {id:'gastroenterology',icon:'🫀',title:'Gastroenterology',count:196,done:64,g:'linear-gradient(135deg,#d97706,#fbbf24)'},
  {id:'neurology',icon:'🧠',title:'Neurology',count:241,done:55,g:'linear-gradient(135deg,#7c3aed,#a78bfa)'},
  {id:'psychiatry',icon:'🧘',title:'Psychiatry & Mental Health',count:187,done:58,g:'linear-gradient(135deg,#7c3aed,#c4b5fd)'},
  {id:'musculoskeletal',icon:'🦴',title:'Musculoskeletal',count:164,done:37,g:'linear-gradient(135deg,#059669,#34d399)'},
  {id:'paediatrics',icon:'👶',title:'Paediatrics',count:203,done:45,g:'linear-gradient(135deg,#ea580c,#fb923c)'},
  {id:'obsgyn',icon:'🤰',title:'Obs & Gynaecology',count:221,done:62,g:'linear-gradient(135deg,#db2777,#f472b6)'},
  {id:'renal',icon:'🫘',title:'Renal & Urology',count:148,done:49,g:'linear-gradient(135deg,#0891b2,#22d3ee)'},
  {id:'endocrine',icon:'⚗️',title:'Endocrinology',count:167,done:53,g:'linear-gradient(135deg,#ca8a04,#facc15)'},
  {id:'haematology',icon:'🩸',title:'Haematology & Immunology',count:139,done:41,g:'linear-gradient(135deg,#dc2626,#f87171)'},
  {id:'dermatology',icon:'🩹',title:'Dermatology',count:118,done:33,g:'linear-gradient(135deg,#a21caf,#e879f9)'},
];
const pdTopics=[
  {id:'integrity',icon:'⚖️',title:'Professional Integrity',count:85,done:62,g:'linear-gradient(135deg,#7c3aed,#a78bfa)'},
  {id:'pressure',icon:'💪',title:'Coping with Pressure',count:72,done:54,g:'linear-gradient(135deg,#0284c7,#38bdf8)'},
  {id:'empathy',icon:'❤️',title:'Empathy & Sensitivity',count:68,done:47,g:'linear-gradient(135deg,#be123c,#f43f5e)'},
  {id:'escalation',icon:'📢',title:'Escalation & Delegation',count:61,done:39,g:'linear-gradient(135deg,#d97706,#fbbf24)'},
  {id:'communication',icon:'🗣️',title:'Communication',count:74,done:58,g:'linear-gradient(135deg,#059669,#34d399)'},
  {id:'ethics',icon:'📖',title:'Ethics & GMC Guidance',count:90,done:71,g:'linear-gradient(135deg,#7c3aed,#c4b5fd)'},
];
const questions=[
  {id:1,paper:'CPS',topic:'Cardiovascular',type:'SBA',patient:{age:'68',sex:'Male',setting:'ED',presenting:'Chest pain'},stem:'A 68-year-old male presents to the Emergency Department with a 2-hour history of severe central crushing chest pain radiating to his left arm. He is diaphoretic and short of breath. ECG shows ST elevation in leads II, III, and aVF. BP 100/60 mmHg, HR 52 bpm.\n\nWhat is the single most appropriate immediate management?',options:['Administer aspirin 300 mg and arrange urgent PCI','Commence thrombolysis with alteplase','Administer metoprolol IV to slow the heart rate','Request urgent echocardiogram before any intervention','Administer GTN spray and observe for 30 minutes'],answer:0,explanation:'This patient has an inferior STEMI with cardiogenic shock and bradycardia. The priority is immediate reperfusion: aspirin 300 mg loading dose plus urgent Primary PCI (pPCI) is gold-standard. Thrombolysis is second-line if pPCI is unavailable within 120 minutes. Metoprolol is contraindicated in cardiogenic shock. An echo must never delay reperfusion.'},
  {id:2,paper:'CPS',topic:'Respiratory',type:'SBA',patient:{age:'45',sex:'Female',setting:'Ward',presenting:'Breathlessness'},stem:'A 45-year-old woman is reviewed on the ward 48 hours after a laparoscopic cholecystectomy. She has acute breathlessness and right-sided pleuritic chest pain. RR 24, O2 sats 91% on air, HR 112, BP 118/76. Wells score 6.\n\nWhat is the most appropriate next step?',options:['Perform a D-dimer test','Request a V/Q scan','Start therapeutic-dose LMWH and arrange urgent CTPA','Request CXR and ABG only','Discharge with oral anticoagulation and outpatient CTPA'],answer:2,explanation:'With Wells score 6 (high probability), D-dimer is inappropriate — it will be positive in virtually all post-operative patients. Start therapeutic LMWH immediately and arrange urgent CTPA. Do not wait for imaging before treating in high-probability PE. A Wells score >4 mandates immediate anticoagulation.'},
  {id:3,paper:'PD',topic:'Professional Integrity',type:'Ranking',patient:{age:'N/A',sex:'N/A',setting:'Ward',presenting:'Professional dilemma'},stem:'You are FY2 on call. Your registrar asks you to document that they were present during a procedure you performed alone (they were busy elsewhere), saying it is "just paperwork".\n\nRank the following from most (1) to least (5) appropriate:',options:['Decline, document accurately, and speak to the registrar privately','Agree — they are senior and responsible for your training','Document truthfully and escalate immediately to the on-call consultant','Do nothing; let the registrar amend the notes','Refuse and file a formal incident report without speaking first'],answer:0,explanation:'Falsifying medical records breaches GMC Good Medical Practice and may constitute fraud. Declining, documenting accurately, and addressing this privately is most appropriate. Immediate escalation may follow if the registrar persists, but a private conversation first is professional. Never agree to falsify records regardless of seniority.'},
  {id:4,paper:'CPS',topic:'Neurology',type:'SBA',patient:{age:'72',sex:'Male',setting:'ED',presenting:'Thunderclap headache'},stem:'A 72-year-old man presents with sudden onset "worst headache of his life" while gardening. He has mild neck stiffness. CT head at 4 hours post-onset is normal.\n\nWhat is the most appropriate next step?',options:['Discharge with analgesia and safety netting','Repeat CT in 24 hours','Perform LP at least 12 hours after symptom onset to detect xanthochromia','Arrange urgent MRI brain','Start empirical IV antibiotics for meningitis'],answer:2,explanation:'A normal CT does not exclude SAH. CT sensitivity falls over time. LP ≥12 hours after onset detects xanthochromia (haemoglobin breakdown products via spectrophotometry) — the gold standard when CT is negative. Xanthochromia peaks at 12 hours and persists for 2 weeks. This patient must not be discharged without LP.'},
  {id:5,paper:'CPS',topic:'Paediatrics',type:'SBA',patient:{age:'3',sex:'Male',setting:'ED',presenting:'Fever + rash'},stem:'A 3-year-old boy has a 12-hour history of fever (39.8°C), irritability, and a non-blanching petechial rash over his trunk and lower limbs. He is drowsy with mild neck stiffness. CRT 3 seconds.\n\nWhat is the single most appropriate immediate management?',options:['Administer IM benzylpenicillin immediately and arrange blue-light transfer','Obtain IV access, take blood cultures, then start IV cefotaxime','Perform urgent LP before starting antibiotics','Start IV cefotaxime and await blood culture results','Administer paracetamol and admit for observation'],answer:0,explanation:'This child has meningococcal septicaemia — non-blanching purpuric rash, fever, and sepsis. In a pre-hospital setting, IM benzylpenicillin should be given immediately without delay. Do NOT wait for IV access or LP before antibiotics. In hospital, blood cultures are taken simultaneously with antibiotic administration but must not delay treatment.'},
];
const flashcards=[
  {q:'What ECG changes indicate an inferior STEMI?',a:'ST elevation in leads II, III, and aVF. Reciprocal ST depression in I and aVL. Usually caused by RCA occlusion.'},
  {q:'How is the Wells score used in suspected PE?',a:'Score >4 = high probability → CTPA directly. Score ≤4 = low/moderate → D-dimer first; CTPA only if positive.'},
  {q:'What is xanthochromia and when is LP performed in suspected SAH?',a:'Yellow CSF discolouration from haemoglobin breakdown products (oxyhaemoglobin, bilirubin), detected by spectrophotometry. LP must be ≥12 hours after headache onset when CT is normal.'},
  {q:'Name the 5 domains of the MSRA CPS paper',a:'1. Investigation  2. Diagnosis  3. Emergency management  4. Prescribing  5. Clinical management'},
  {q:'MSRA band thresholds (as percentages)',a:'Band 1: <51% · Band 2: 51–65% · Band 3: 66–83% · Band 4: >83%. Platform average ≈72%.'},
  {q:'First-line antibiotic for bacterial meningitis in adults (UK)?',a:'IV cefotaxime or ceftriaxone. Add dexamethasone if not contraindicated to reduce inflammation and neurological sequelae.'},
];

/* ── LEADERBOARD ── */
function genLB(){
  const specs=['General Practice','Psychiatry','Radiology','Emergency Medicine','Paediatrics','Anaesthetics','Neurology','Cardiology','Surgery','O&G'];
  const names=['Dr. S. Ahmed','Dr. J. Williams','Dr. P. Chen','Dr. A. Okafor','Dr. M. Kowalski','Dr. R. Patel','Dr. L. Santos','Dr. K. Nakamura','Dr. F. Müller','Dr. C. Osei','Dr. B. Thompson','Dr. I. Volkov','Dr. N. Hassan','Dr. E. Johansson','Dr. T. Nguyen','Dr. H. Adeyemi','Dr. G. Macdonald','Dr. Z. Petrova','Dr. D. Fernandez','Dr. W. Okonkwo'];
  const cols=['#e11d48','#7c3aed','#0891b2','#d97706','#059669','#38bdf8','#ec4899','#8b5cf6','#f97316','#06b6d4'];
  let lb=[];
  for(let i=0;i<100;i++){const raw=Math.round(298-i*0.7+(Math.random()*6-3));lb.push({rank:i+1,name:names[i%names.length]+(i>=names.length?` ${Math.floor(i/names.length)+1}`:''),specialty:specs[Math.floor(Math.random()*specs.length)],raw,pct:Math.round(raw/350*100),color:cols[i%cols.length]});}
  lb[11]={rank:12,name:'Dr. R. Patel',specialty:'General Practice',raw:267,pct:76,color:'#0891b2',isUser:true};
  return lb;
}
let lbData=genLB();
function renderLeaderboard(data){
  const m=['🥇','🥈','🥉'];
  document.getElementById('lbList').innerHTML=data.slice(0,100).map(u=>`<div class="lb-item${u.isUser?' lb-me':''}"><div class="lb-rank ${u.rank===1?'gold':u.rank===2?'silver':u.rank===3?'bronze':''}">${u.rank<=3?m[u.rank-1]:u.rank}</div><div class="lb-av" style="background:${u.color}22;border:1px solid ${u.color}44;color:${u.color}">${u.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div class="lb-info"><div class="lb-name">${u.name}${u.isUser?'<span style="font-size:10px;background:rgba(8,145,178,.12);color:#0891b2;padding:1px 7px;border-radius:10px;margin-left:6px;font-weight:700">You</span>':''}</div><div class="lb-spec">${u.specialty}</div></div><div class="lb-score">${u.pct}%<span class="lb-raw">${u.raw} raw</span></div></div>`).join('');
}
function filterLeaderboard(){const q=document.getElementById('lbSearch').value.toLowerCase();renderLeaderboard(lbData.filter(u=>u.name.toLowerCase().includes(q)||u.specialty.toLowerCase().includes(q)));}

/* ── TOPICS ── */
function renderTopics(){
  document.getElementById('topicsGrid').innerHTML=topics.map(t=>`<div class="topic-card" onclick="startTopic('${t.id}')"><div class="tc-hdr"><span class="tc-icon">${t.icon}</span><span class="tc-arrow">→</span></div><div class="tc-title">${t.title}</div><div class="tc-count">${t.count} questions</div><div class="tc-track"><div class="tc-fill" style="width:${t.done}%;background:${t.g}"></div></div><div class="tc-pct">${t.done}% complete</div></div>`).join('');
  document.getElementById('pdGrid').innerHTML=pdTopics.map(t=>`<div class="topic-card" onclick="startTopic('${t.id}')"><div class="tc-hdr"><span class="tc-icon">${t.icon}</span><span class="tc-arrow">→</span></div><div class="tc-title">${t.title}</div><div class="tc-count">${t.count} scenarios</div><div class="tc-track"><div class="tc-fill" style="width:${t.done}%;background:${t.g}"></div></div><div class="tc-pct">${t.done}% complete</div></div>`).join('');
}
function switchPaper(tabId,btn){document.querySelectorAll('.paper-tab').forEach(t=>t.classList.remove('active'));btn.classList.add('active');document.getElementById('cps-tab').style.display=tabId==='cps-tab'?'block':'none';document.getElementById('pd-tab').style.display=tabId==='pd-tab'?'block':'none';}

/* ── PRACTICE ── */
let currentQ=0,selectedOption=null,answered=false;
function renderQuestion(idx){
  const q=questions[idx];
  document.getElementById('practiceContent').innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px"><div style="display:flex;align-items:center;gap:8px"><span class="q-badge ${q.paper==='CPS'?'badge-cps':'badge-pd'}">${q.paper}</span><span class="q-badge badge-topic">${q.topic}</span><span class="q-badge badge-topic">${q.type}</span></div><div style="font-size:12px;color:var(--muted)">Q ${idx+1} / ${questions.length}</div></div>${q.patient.age!=='N/A'?`<div class="q-patient"><div><div class="pinfo-lbl">Age</div><div class="pinfo-val">${q.patient.age} yrs</div></div><div><div class="pinfo-lbl">Sex</div><div class="pinfo-val">${q.patient.sex}</div></div><div><div class="pinfo-lbl">Setting</div><div class="pinfo-val">${q.patient.setting}</div></div><div><div class="pinfo-lbl">Presenting</div><div class="pinfo-val">${q.patient.presenting}</div></div></div>`:''}<div class="q-stem">${q.stem.replace(/\n/g,'<br>')}</div><div class="opts" id="optList">${q.options.map((o,i)=>`<div class="opt" id="opt${i}" onclick="selectOption(${i})"><div class="opt-letter">${String.fromCharCode(65+i)}</div><div class="opt-txt">${o}</div></div>`).join('')}</div><div class="expl" id="expl"><div class="expl-title">✅ Explanation</div><div class="expl-body">${q.explanation}</div></div><div style="display:flex;align-items:center;gap:10px;margin-top:12px"><button class="btn btn-ghost" onclick="prevQ()" ${idx===0?'disabled':''}>← Previous</button><button class="btn btn-primary" id="subBtn" onclick="submitAnswer(${q.answer})">Submit Answer</button><button class="btn btn-ghost" id="nxtBtn" style="display:none" onclick="nextQ()">Next →</button></div>`;
  answered=false;selectedOption=null;
}
function selectOption(i){if(answered)return;selectedOption=i;document.querySelectorAll('.opt').forEach(o=>o.classList.remove('sel'));document.getElementById('opt'+i).classList.add('sel');}
function submitAnswer(correct){if(selectedOption===null){alert('Please select an answer');return;}answered=true;document.getElementById('opt'+correct).classList.add('corr');if(selectedOption!==correct)document.getElementById('opt'+selectedOption).classList.add('incorr');document.getElementById('expl').classList.add('show');document.getElementById('subBtn').style.display='none';document.getElementById('nxtBtn').style.display='inline-flex';}
function prevQ(){if(currentQ>0){currentQ--;renderQuestion(currentQ);}}
function nextQ(){if(currentQ<questions.length-1){currentQ++;renderQuestion(currentQ);}}
function startTopic(id){showPage('practice');currentQ=0;renderQuestion(currentQ);}

/* ── FLASHCARDS ── */
let fcIdx=0,fcFlipped=false;
function renderFlashcard(){
  const fc=flashcards[fcIdx];
  document.getElementById('flashcardContent').innerHTML=`<div class="fc-wrap"><div style="text-align:center;margin-bottom:14px;font-size:13px;color:var(--muted)">${fcIdx+1} / ${flashcards.length}</div><div class="fc-card" onclick="flipCard()"><div class="fc-side">${fcFlipped?'💡 Answer':'❓ Question'}</div><div class="fc-content">${fcFlipped?fc.a:fc.q}</div><div class="fc-hint">Tap to ${fcFlipped?'show question':'reveal answer'}</div></div><div class="fc-nav"><button class="btn btn-ghost" onclick="prevFC()">← Prev</button><button class="btn btn-ghost" onclick="flipCard()">🔄 Flip</button><button class="btn btn-ghost" onclick="nextFC()">Next →</button></div><div class="fc-rate"><button class="fc-btn" style="background:var(--rose-dim);color:var(--rose);border:1px solid rgba(225,29,72,.2)" onclick="nextFC()">😕 Unsure</button><button class="fc-btn" style="background:var(--amber-dim);color:var(--amber);border:1px solid rgba(217,119,6,.2)" onclick="nextFC()">🤔 Maybe</button><button class="fc-btn" style="background:var(--emerald-dim);color:var(--emerald);border:1px solid rgba(5,150,105,.2)" onclick="nextFC()">✅ Got it!</button></div></div>`;
}
function flipCard(){fcFlipped=!fcFlipped;renderFlashcard();}
function prevFC(){fcFlipped=false;fcIdx=(fcIdx-1+flashcards.length)%flashcards.length;renderFlashcard();}
function nextFC(){fcFlipped=false;fcIdx=(fcIdx+1)%flashcards.length;renderFlashcard();}

/* ── MOCK HISTORY ── */
function renderMockHistory(){
  const mocks=[{name:'Full MSRA Mock #3',date:'14 Mar',cps:78,pd:75,overall:76},{name:'Full MSRA Mock #2',date:'7 Mar',cps:75,pd:73,overall:74},{name:'CPS Only Mock',date:'2 Mar',cps:74,pd:'—',overall:74},{name:'Full MSRA Mock #1',date:'21 Feb',cps:71,pd:69,overall:70}];
  document.getElementById('mockHistory').innerHTML=mocks.map(m=>`<div class="table-row"><div style="font-weight:600">${m.name}</div><div style="color:var(--muted)">${m.date}</div><div style="color:var(--cyan);font-weight:600">${m.cps}%</div><div style="color:var(--violet);font-weight:600">${m.pd}</div><div style="font-weight:800;color:var(--amber)">${m.overall}%</div></div>`).join('');
}

/* ── ACCURACY BARS ── */
function renderAccuracyBars(){
  const d=[{n:'Cardiovascular',p:82},{n:'Respiratory',p:71},{n:'Neurology',p:67},{n:'Gastroenterology',p:64},{n:'Obs & Gynae',p:62},{n:'Psychiatry',p:58},{n:'Paediatrics',p:51},{n:'Musculoskeletal',p:43},{n:'Dermatology',p:38}];
  const c=['#e11d48','#0284c7','#7c3aed','#d97706','#db2777','#7c3aed','#ea580c','#059669','#a21caf'];
  document.getElementById('accuracyBars').innerHTML=d.map((x,i)=>`<div class="tp"><div class="tp-hdr"><span class="tp-name">${x.n}</span><span class="tp-pct">${x.p}%</span></div><div class="tp-track"><div class="tp-fill" style="width:${x.p}%;background:${c[i]}"></div></div></div>`).join('');
}

/* ── THEME ── */
let isDark=false;
function toggleTheme(){
  isDark=!isDark;
  document.documentElement.setAttribute('data-theme',isDark?'dark':'light');
  document.getElementById('themeToggle').classList.toggle('on',isDark);
  document.getElementById('themeLabel').textContent=isDark?'☀️ Light mode':'🌙 Dark mode';
}

/* ── QUICK FIRE WEDNESDAY ── */
const qfwQuestions=[
  {stem:'A 68-year-old man presents with sudden-onset central crushing chest pain radiating to the jaw for 40 minutes. ECG shows ST elevation in II, III and aVF. What is the most appropriate immediate management?',options:['Aspirin 300mg + PPCI','Morphine alone','Thrombolysis only','IV beta-blocker then PPCI','Watchful waiting with serial ECGs'],answer:0},
  {stem:'A 45-year-old woman presents with a 3-day history of productive cough, fever 38.9°C, and right-sided pleuritic chest pain. CXR shows right lower lobe consolidation. CRB-65 score is 1. Most appropriate management?',options:['Admit for IV antibiotics','Oral amoxicillin + safety net','High-flow oxygen + ITU referral','CT pulmonary angiogram','Bronchoscopy'],answer:1},
  {stem:'A junior colleague asks you to sign a controlled drug prescription they have already written on behalf of your consultant who is on leave. What is the most appropriate action?',options:['Sign it — the consultant would approve','Refuse and ask the colleague to get appropriate authorisation','Sign it but make a note in the patient record','Contact the consultant by phone and verbally authorise','Report the colleague to the GMC immediately'],answer:1},
  {stem:'A 28-year-old woman 32 weeks pregnant collapses. She is unresponsive and not breathing. How should you modify CPR?',options:['Left lateral tilt 15–30° and standard 30:2','Prone position','No modifications needed','Chest compressions only, no ventilations','Right lateral tilt only'],answer:0},
  {stem:'A 19-year-old student presents with severe headache, photophobia and neck stiffness for 6 hours. Temperature 39.2°C. Non-blanching petechial rash noted. What is the immediate priority?',options:['LP then antibiotics','IV benzylpenicillin/ceftriaxone immediately','CT head first','Blood cultures, then wait for results','Meningococcal PCR first'],answer:1},
  {stem:'You witness a colleague who appears intoxicated on the ward during a shift. They are about to assess a patient. What should you do first?',options:['Ignore it — one incident is not enough','Immediately ask the colleague to stop seeing patients and inform senior','Write an incident report later','Tell the patient first','Wait until the shift ends to raise it'],answer:1},
  {stem:'A 54-year-old man presents with sudden-onset worst-ever headache. He describes it as a "thunderclap". Neurological exam is normal. CT head is normal. What is the next investigation?',options:['MRI brain','Lumbar puncture for xanthochromia','EEG','Carotid Doppler','Discharge with analgesia'],answer:1},
  {stem:'A 7-year-old child presents with a 6-hour history of periumbilical pain now migrated to the right iliac fossa, fever 38.3°C and vomiting. Rovsing\'s sign is positive. Most likely diagnosis?',options:['Mesenteric adenitis','Appendicitis','Intussusception','Ovarian torsion','Meckel\'s diverticulitis'],answer:1},
  {stem:'A patient is brought in by ambulance having taken an unknown quantity of paracetamol 3 hours ago. She is alert. What is the most important first step?',options:['Gastric lavage','Check serum paracetamol level and start N-acetylcysteine per nomogram','Activated charcoal immediately','Liver biopsy','IV fluids only'],answer:1},
  {stem:'A doctor feels their FY1 colleague is making repeated prescribing errors due to exhaustion from excess hours. What is the most appropriate first step?',options:['Cover for them without saying anything','Raise concerns with the rota coordinator/educational supervisor','Report directly to GMC','Confront the colleague aggressively in front of staff','Do nothing — FY1 errors are expected'],answer:1},
  {stem:'A 72-year-old woman presents with sudden painless loss of vision in her right eye. On fundoscopy you see a "cherry red spot" on a pale retina. Diagnosis?',options:['Vitreous haemorrhage','Central retinal artery occlusion','Age-related macular degeneration','Retinal detachment','Central retinal vein occlusion'],answer:1},
  {stem:'A 30-year-old presents with palpitations, weight loss, heat intolerance, and tremor. TSH is <0.01 mU/L, free T4 is elevated. Most likely diagnosis?',options:['Hypothyroidism','Graves\' disease','Phaeochromocytoma','Addison\'s disease','Cushing\'s syndrome'],answer:1},
  {stem:'A registrar asks you to document a procedure you did not perform in order to meet a training milestone. What is the most appropriate response?',options:['Do it — it\'s a small request','Refuse and explain you cannot falsify medical records','Ask a senior colleague to decide','Document it but add a note it was supervised','Agree but inform the GMC later'],answer:1},
  {stem:'A 40-year-old woman has a serum calcium of 3.1 mmol/L found incidentally. She has no symptoms. PTH is elevated. Most likely cause?',options:['Malignancy','Primary hyperparathyroidism','Sarcoidosis','Vitamin D toxicity','Thiazide diuretics'],answer:1},
  {stem:'An 80-year-old man on warfarin presents with sudden-onset right-sided weakness and aphasia lasting 4 hours then fully resolving. INR is 2.5. Most appropriate next step?',options:['Discharge with advice','Urgent referral to TIA clinic + brain imaging within 24 hours','Reverse anticoagulation immediately','Carotid endarterectomy today','Repeat INR in 2 weeks'],answer:1},
  {stem:'A 55-year-old man with known COPD presents with acute breathlessness. ABG: pH 7.26, PaCO2 9.2 kPa, PaO2 6.8 kPa on 28% O2. Most appropriate initial treatment?',options:['High-flow 15L O2 via non-rebreather','NIV (BiPAP)','Intubate immediately','IV aminophylline','Salbutamol nebuliser only'],answer:1},
  {stem:'A patient on a ward discloses to you that their consultant has been sharing their diagnosis with their family without consent. How should you respond?',options:['Tell the patient\'s family first','Listen, acknowledge their concern, and explain their right to privacy. Advise on the hospital complaints process.','Confront the consultant immediately in front of the patient','Do nothing — family involvement is standard','Write a complaint letter for the patient'],answer:1},
  {stem:'A 26-year-old woman presents with right iliac fossa pain, vaginal bleeding, and a positive pregnancy test. Her BP is 90/60, HR 118. Most urgent management?',options:['Pelvic USS and wait for results','IV access, bloods, immediate gynaecology review — ectopic until proven otherwise','IM methotrexate','Discharge with EPAU referral','Urine MSU and await culture'],answer:1},
  {stem:'A 6-week-old infant presents with projectile non-bilious vomiting after every feed. The baby is hungry immediately after vomiting. What is the most likely diagnosis?',options:['Duodenal atresia','Pyloric stenosis','Gastro-oesophageal reflux disease','Intussusception','Hirschsprung\'s disease'],answer:1},
  {stem:'A 34-year-old woman collapses in the outpatient department. She is unresponsive. You cannot feel a pulse. What is the very first action?',options:['Give two rescue breaths','Call for help and start CPR (30:2)','Attach defibrillator first','Check pupils','IV adrenaline immediately'],answer:1},
];

const qfwLbData=[
  {rank:1,name:'Dr. J. Williams',specialty:'Cardiology',correct:20,time:198,color:'#f59e0b'},
  {rank:2,name:'Dr. S. Ahmed',specialty:'Emergency Medicine',correct:20,time:214,color:'#7c3aed'},
  {rank:3,name:'Dr. P. Chen',specialty:'General Practice',correct:19,time:203,color:'#0891b2'},
  {rank:4,name:'Dr. L. Santos',specialty:'Neurology',correct:19,time:221,color:'#059669'},
  {rank:5,name:'Dr. A. Okafor',specialty:'Paediatrics',correct:19,time:235,color:'#e11d48'},
  {rank:6,name:'Dr. K. Nakamura',specialty:'Anaesthetics',correct:18,time:198,color:'#d97706'},
  {rank:7,name:'Dr. F. Müller',specialty:'Psychiatry',correct:18,time:209,color:'#38bdf8'},
  {rank:8,name:'Dr. R. Patel',specialty:'General Practice',correct:18,time:272,color:'#0891b2',isMe:true},
  {rank:9,name:'Dr. N. Hassan',specialty:'Surgery',correct:17,time:195,color:'#ec4899'},
  {rank:10,name:'Dr. E. Johansson',specialty:'Radiology',correct:17,time:218,color:'#8b5cf6'},
];

const qfwLobbyUsers=[
  {name:'Dr. M. Kowalski',spec:'Emergency Medicine',color:'#e11d48'},
  {name:'Dr. T. Nguyen',spec:'Cardiology',color:'#7c3aed'},
  {name:'Dr. H. Adeyemi',spec:'Neurology',color:'#0891b2'},
  {name:'Dr. G. Macdonald',spec:'General Practice',color:'#059669'},
  {name:'Dr. Z. Petrova',spec:'Paediatrics',color:'#d97706'},
  {name:'Dr. D. Fernandez',spec:'Radiology',color:'#38bdf8'},
  {name:'Dr. W. Okonkwo',spec:'Psychiatry',color:'#ec4899'},
  {name:'Dr. C. Osei',spec:'Surgery',color:'#8b5cf6'},
  {name:'Dr. B. Thompson',spec:'Anaesthetics',color:'#f97316'},
  {name:'Dr. I. Volkov',spec:'O&G',color:'#06b6d4'},
  {name:'Dr. R. Patel',spec:'General Practice',color:'#0891b2',me:true},
  {name:'Dr. S. Ahmed',spec:'Emergency Medicine',color:'#a21caf'},
];

function renderQFWLobby(){
  document.getElementById('qfwLobbyList').innerHTML=qfwLobbyUsers.map(u=>`<div class="qfw-lobby-user${u.me?' me':''}"><div style="width:34px;height:34px;border-radius:50%;background:${u.color}22;color:${u.color};border:1px solid ${u.color}44;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0">${u.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div><div><div style="font-size:12px;font-weight:600;color:var(--text)">${u.name}${u.me?'<span style="font-size:9px;margin-left:5px;color:#f97316;font-weight:700">YOU</span>':''}</div><div style="font-size:11px;color:var(--muted)">${u.spec}</div></div></div>`).join('');
}

function renderQFWLeaderboard(highlight){
  const medals=['🥇','🥈','🥉'];
  document.getElementById('qfwLbList').innerHTML=qfwLbData.map(u=>{
    const mins=Math.floor(u.time/60),secs=u.time%60;
    const timeStr=`${mins}m ${secs.toString().padStart(2,'0')}s`;
    return `<div class="qfw-lb-row${u.isMe?' qfw-me':''}">
      <div class="qfw-lb-rank ${u.rank===1?'gold':u.rank===2?'silver':u.rank===3?'bronze':''}">${u.rank<=3?medals[u.rank-1]:u.rank}</div>
      <div class="qfw-lb-av" style="background:${u.color}22;color:${u.color};border:1px solid ${u.color}44">${u.name.split(' ').map(n=>n[0]).join('').slice(0,2)}</div>
      <div class="qfw-lb-info"><div class="qfw-lb-name">${u.name}${u.isMe?'<span style="font-size:9px;background:rgba(249,115,22,.15);color:#f97316;padding:1px 6px;border-radius:10px;margin-left:5px;font-weight:700">You</span>':''}</div><div class="qfw-lb-detail">${u.specialty}</div></div>
      <div class="qfw-lb-score-col"><div class="qfw-lb-correct">${u.correct}/20</div><div class="qfw-lb-time">${timeStr}</div></div>
    </div>`;
  }).join('');
}

let qfwTimer=null,qfwElapsed=0,qfwCurrentQ=0,qfwCorrect=0,qfwSelected=null,qfwAnswered=false;

function startQFW(){
  document.getElementById('qfwHero').style.display='none';
  document.getElementById('qfwLobby').style.display='none';
  document.getElementById('qfwGameWrap').style.display='block';
  document.getElementById('qfwResultsWrap').style.display='none';
  qfwElapsed=0;qfwCurrentQ=0;qfwCorrect=0;qfwSelected=null;qfwAnswered=false;
  if(qfwTimer)clearInterval(qfwTimer);
  qfwTimer=setInterval(()=>{
    qfwElapsed+=0.1;
    const d=document.getElementById('qfwTimerDisplay');
    if(d){
      d.textContent=qfwElapsed<60?qfwElapsed.toFixed(1)+'s':Math.floor(qfwElapsed/60)+'m '+Math.floor(qfwElapsed%60)+'s';
      d.classList.toggle('danger',qfwElapsed>180);
    }
  },100);
  renderQFWQuestion(0);
}

function renderQFWQuestion(idx){
  qfwAnswered=false;qfwSelected=null;
  const q=qfwQuestions[idx];
  document.getElementById('qfwQNum').textContent=idx+1;
  document.getElementById('qfwProgressFill').style.width=((idx)/20)*100+'%';
  document.getElementById('qfwScoreLive').textContent=qfwCorrect;
  document.getElementById('qfwQBody').innerHTML=`
    <div class="qfw-q-stem">${q.stem}</div>
    <div id="qfwOpts">${q.options.map((o,i)=>`<div class="qfw-opt" id="qfwo${i}" onclick="qfwSelect(${i})"><div class="qfw-opt-letter">${String.fromCharCode(65+i)}</div><div class="qfw-opt-txt">${o}</div></div>`).join('')}</div>
    <div class="qfw-action-row">
      <button class="btn btn-primary" id="qfwSubBtn" onclick="qfwSubmit(${q.answer})" style="background:linear-gradient(135deg,#f97316,#e11d48);border:none">Submit →</button>
      <button class="btn btn-ghost" id="qfwNxtBtn" style="display:none" onclick="qfwNext()">Next Question →</button>
    </div>`;
}

function qfwSelect(i){if(qfwAnswered)return;qfwSelected=i;document.querySelectorAll('.qfw-opt').forEach(o=>o.classList.remove('sel'));document.getElementById('qfwo'+i).classList.add('sel');}

function qfwSubmit(correct){
  if(qfwSelected===null){alert('Select an answer first!');return;}
  qfwAnswered=true;
  document.getElementById('qfwo'+correct).classList.add('corr');
  if(qfwSelected===correct){qfwCorrect++;}
  else{document.getElementById('qfwo'+qfwSelected).classList.add('incorr');qfwElapsed+=10;}
  document.getElementById('qfwScoreLive').textContent=qfwCorrect;
  document.getElementById('qfwSubBtn').style.display='none';
  document.getElementById('qfwNxtBtn').style.display='inline-flex';
}

function qfwNext(){qfwCurrentQ++;if(qfwCurrentQ>=20){qfwFinish();return;}renderQFWQuestion(qfwCurrentQ);}

function qfwFinish(){
  clearInterval(qfwTimer);
  const total=qfwElapsed;
  const mins=Math.floor(total/60),secs=Math.floor(total%60);
  const timeStr=`${mins}m ${secs.toString().padStart(2,'0')}s`;
  const score=qfwCorrect*1000-Math.floor(total);
  const emoji=qfwCorrect>=18?'🏆':qfwCorrect>=14?'⚡':qfwCorrect>=10?'📈':'💪';
  document.getElementById('qfwGameWrap').style.display='none';
  document.getElementById('qfwResultsWrap').style.display='block';
  document.getElementById('qfwResultsBody').innerHTML=`
    <div class="qfw-result-icon">${emoji}</div>
    <div class="qfw-result-title">${qfwCorrect>=18?'Brilliant!':qfwCorrect>=14?'Great run!':qfwCorrect>=10?'Good effort!':'Keep practising!'}</div>
    <div class="qfw-result-sub">You answered ${qfwCorrect}/20 correctly in ${timeStr}</div>
    <div class="qfw-result-stats">
      <div class="qfw-rs"><div class="qfw-rs-val" style="color:var(--emerald)">${qfwCorrect}/20</div><div class="qfw-rs-lbl">Correct</div></div>
      <div class="qfw-rs"><div class="qfw-rs-val" style="color:var(--cyan)">${timeStr}</div><div class="qfw-rs-lbl">Total Time</div></div>
      <div class="qfw-rs"><div class="qfw-rs-val" style="color:var(--amber)">${score.toLocaleString()}</div><div class="qfw-rs-lbl">Score</div></div>
    </div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="qfw-start-btn" onclick="retryQFW()" style="font-size:13px;padding:11px 24px">🔄 Try Again</button>
      <button class="btn btn-ghost" onclick="showPage('practice')" style="padding:11px 24px">📚 Review Topics</button>
    </div>`;
}

function retryQFW(){
  document.getElementById('qfwResultsWrap').style.display='none';
  document.getElementById('qfwHero').style.display='block';
  document.getElementById('qfwLobby').style.display='block';
}

/* ── NAVIGATION ── */
const pageTitles={dashboard:'Dashboard',leaderboard:'Leaderboard',topics:'Topics',practice:'Practice Questions',mock:'Mock Exams',flashcards:'Flashcards',cps:'Clinical Problem Solving',pd:'Professional Dilemmas',stats:'My Statistics',quickfire:'⚡ Quick Fire Wednesday'};

function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.getElementById('pageTitle').textContent=pageTitles[id]||id;
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  if(id==='practice')renderQuestion(currentQ);
  if(id==='flashcards'){fcIdx=0;fcFlipped=false;renderFlashcard();}
  if(id==='mock')renderMockHistory();
  if(id==='stats')renderAccuracyBars();
  if(id==='quickfire'){renderQFWLeaderboard(false);renderQFWLobby();}
  window.scrollTo(0,0);
}

/* ── INIT ── */
renderLeaderboard(lbData);
renderTopics();
renderQFWLeaderboard(false);
