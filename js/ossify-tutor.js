// ════════════════════════════════════════════════════════════════════════════
// Ossify — shared Tutor Mode renderer
//
// Used by practice.html (Tutor / Topic modes) and exam.html (Timed Exam review)
// so both pages render answers, explanations, stem annotations, high-yield
// summaries and references identically. Moved verbatim from practice.html;
// the LOCKED FORMAT rules in FORMATTING.md apply to everything in this file.
//
// Classic script (no modules): functions are globals, as they were inline.
// ════════════════════════════════════════════════════════════════════════════

// ── Tutor panel toggles ──
function tpToggleClue(row) {
  const open = row.classList.contains('open');
  const card = row.closest('.tp-card');
  if (card) card.querySelectorAll('.clue-row-tp.open').forEach(r => r.classList.remove('open'));
  if (!open) row.classList.add('open');
}
function tpToggleDetail(id, btn) {
  const det = document.getElementById(id);
  if (!det) return;
  const open = det.classList.toggle('open');
  btn.textContent = open ? 'Hide explanation' : 'Detailed explanation';
  // When detailed opens, hide brief; when it closes, show brief again
  const brief = btn.closest('.ans-block')?.querySelector('.ans-brief');
  if (brief) brief.style.display = open ? 'none' : '';
}

// Panel toggle
function togglePanel(header) {
  const body = header.nextElementSibling;
  const chevron = header.querySelector('.panel-chevron');
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : 'block';
  chevron.classList.toggle('open', !isOpen);
}

function toggleOptExp(header) {
  const body = header.nextElementSibling;
  body.classList.toggle('open');
}

function toggleDetailed(el) {
  const det = el.nextElementSibling;
  if (det.classList.contains('hidden')) {
    det.classList.remove('hidden');
    el.textContent = 'Hide detailed explanation ▲';
  } else {
    det.classList.add('hidden');
    el.textContent = 'Show detailed explanation ▼';
  }
}

// Formatting helpers
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/\n/g, '<br>');
}

function formatBullets(text) {
  if (!text) return '';
  return escapeHtml(text)
    .replace(/•\s+/g, '<br><strong style="color:var(--teal)">•</strong> ')
    .replace(/^<br>/, '');
}


// ── Stem annotation (clues + distractors highlighted after answering) ────────
function annotateStem(stemText, clues, distractors) {
  const anns = [
    ...clues.map(c => ({ label: c.label, explanation: c.explanation, cls: 'stem-clue' })),
    ...distractors.map(d => ({ label: d.label, explanation: d.explanation, cls: 'stem-distractor' })),
  ].filter(a => a.label && a.label.length > 3);

  if (!anns.length) return escapeHtml(stemText);

  // Properly escape all regex special characters
  function reEsc(s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); }

  // Try to find a label (or a meaningful fragment) in the stem text
  function findInStem(label) {
    const candidates = [label];
    // Split on " + " — clue labels sometimes combine two phrases
    label.split(/\s*\+\s*/).forEach(p => { if (p.trim().length > 10) candidates.push(p.trim()); });
    // Remove parenthesised asides and retry
    const stripped = label.replace(/\s*\([^)]*\)/g, '').trim();
    if (stripped.length > 10 && stripped !== label) candidates.push(stripped);
    // Split on "with" — catches second half of compound clues
    label.split(/\s+with\s+/i).forEach(p => {
      const pc = p.replace(/\s*\([^)]*\)/g,'').trim();
      if (pc.length > 10) candidates.push(pc);
    });
    // Try ALL windows of N consecutive words (catches mid-label matches)
    const words = label.replace(/[()[\]]/g, ' ').split(/\s+/).filter(Boolean);
    for (let start = 0; start < words.length; start++) {
      for (let n = Math.min(words.length - start, 8); n >= 4; n--) {
        const phrase = words.slice(start, start + n).join(' ');
        if (phrase.length > 10) candidates.push(phrase);
      }
    }
    for (const c of candidates) {
      try {
        const m = new RegExp(reEsc(c), 'gi').exec(stemText);
        if (m) return { start: m.index, end: m.index + m[0].length, text: m[0] };
      } catch(e) { /* invalid regex — skip */ }
    }
    return null;
  }

  // Collect matches
  const matches = [];
  anns.forEach(ann => {
    const m = findInStem(ann.label);
    if (m) matches.push({ ...m, ann });
  });
  if (!matches.length) return escapeHtml(stemText);

  // Sort by position; remove overlaps (first/longest wins)
  matches.sort((a, b) => a.start - b.start || b.end - a.end);
  const clean = [];
  let lastEnd = 0;
  for (const m of matches) {
    if (m.start >= lastEnd) { clean.push(m); lastEnd = m.end; }
  }

  // Build annotated HTML
  let out = '', pos = 0;
  for (const m of clean) {
    out += escapeHtml(stemText.slice(pos, m.start));
    out += `<span class="${m.ann.cls}" tabindex="0">`
         + `<span class="stem-tip">${escapeHtml(m.ann.explanation)}</span>`
         + `${escapeHtml(m.text)}</span>`;
    pos = m.end;
  }
  out += escapeHtml(stemText.slice(pos));
  return out;
}
function tpParseClueStr(s) {
  if (typeof s !== 'string') return null;
  s = s.replace(/\s*\|\s*$/, '').trim(); // strip trailing pipe from DB format
  const m = s.match(/^"([^"]+)"\s*[—–\-]+\s*(.+)$/s);
  return m ? { label: m[1].trim(), explanation: m[2].trim() } : null;
}

function tpBriefFallback(det) {
  if (!det) return '';
  const m = det.match(/^(.{40,350})\.\s/s);
  return m ? m[1].trim() + '.' : det.substring(0, 180).trim();
}


function tpClueRowHtml(c, type, idx) {
  const tagCls  = type === 'clue' ? 'tag-tp-clue' : 'tag-tp-dist';
  const tagText = type === 'clue' ? 'Clue' : 'Distractor';
  const detCls  = type === 'distractor' ? 'clue-detail-tp dist-tp' : 'clue-detail-tp';
  const uid = `clue-${type}-${idx}`;
  return `<div class="clue-row-tp" onclick="tpToggleClue(this)">
    <div class="clue-tag-tp ${tagCls}">${tagText}</div>
    <div class="clue-label-tp">"${escapeHtml(c.label)}"</div>
    <div class="clue-chev-tp">▶</div>
  </div><div class="${detCls}">${escapeHtml(c.explanation)}</div>`;
}


// opts (optional, used by exam review — practice.html passes nothing):
//   opts.unanswered     true → banner reads "Not answered" instead of "Not quite"
//   opts.bottomNavHtml  string → replaces the practice-page bottom navigation
function renderTutorPanels(q, selected, tc, opts) {
  opts = opts || {};
  const letters = ['A','B','C','D','E','F','G','H','I','J'];
  const isSBA = tc.type === 'sba';
  const isEMQ = tc.type === 'emq';

  // Work out correct letter
  let correctLetter;
  if (isEMQ && tc.this_scenario) {
    correctLetter = tc.this_scenario.correct_letter || '';
  } else if (isSBA && tc.options) {
    const co = tc.options.find(o => o.correct === true || o.correct === 'true');
    correctLetter = co ? co.letter : letters[q.correct_answer] || '';
  } else {
    correctLetter = letters[q.correct_answer] || '';
  }
  const selectedLetter = selected !== null && selected !== undefined ? letters[selected] : '';
  const isCorrectAnswer = selectedLetter === correctLetter;

  let html = `<div class="tutor-panels visible">`;

  // ── 1. Result banner ──
  if (opts.unanswered) {
    html += `<div class="result-banner-tp wrong">
      <span class="rb-icon">⏱</span>
      <div><strong>Not answered.</strong><span>The correct answer is <strong>${escapeHtml(correctLetter)}</strong>. Unanswered questions score zero.</span></div>
    </div>`;
  } else if (isCorrectAnswer) {
    html += `<div class="result-banner-tp correct">
      <span class="rb-icon">✅</span>
      <div><strong>Correct!</strong><span>Scroll down for the full explanation.</span></div>
    </div>`;
  } else {
    html += `<div class="result-banner-tp wrong">
      <span class="rb-icon">❌</span>
      <div><strong>Not quite.</strong><span>The correct answer is <strong>${escapeHtml(correctLetter)}</strong>. See explanations below.</span></div>
    </div>`;
  }

  // ── 2. Answer explanations ──
  

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // !! LOCKED FORMAT — do not change without explicit instruction !!
  // High-yield summary: split on •\s+, strip trailing [N] ref markers,
  // render each as .hys-bullet-item (teal dot + text + border-bottom).
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ── 3. High-yield summary ──
  if (tc.high_yield_summary) {
    const bullets = tc.high_yield_summary
      .replace(/^Key Points to Memorise\s*/i, '')
      .split(/•\s+/)
      .map(s => s.trim().replace(/\s*\[\d+\]\s*$/, '').trim())  // strip trailing [1] ref markers
      .filter(s => s.length > 5);
    if (bullets.length) {
      html += `<div class="hys-panel">
        <div class="panel-header" onclick="togglePanel(this)">
          <div class="panel-title teal">⚡ High-yield summary</div>
          <span class="panel-chevron">▼</span>
        </div>
        <div class="panel-body" style="display:none">
          <div class="hys-body">${bullets.map(b =>
            `<div class="hys-bullet-item"><span class="hys-dot">•</span><span>${escapeHtml(b)}</span></div>`
          ).join('')}</div>
        </div>
      </div>`;
    }
  }

  // ── 4. Key diagnostic clues ──
  let clues = [], distractors = [];
  if (isSBA) {
    // New format: key_clues and key_distractors are separate arrays
    clues = (tc.key_clues || []).map(tpParseClueStr).filter(Boolean);
    distractors = (tc.key_distractors || []).map(tpParseClueStr).filter(Boolean);
  } else if (isEMQ && tc.this_scenario) {
    clues = (tc.this_scenario.key_clues || []).map(tpParseClueStr).filter(Boolean);
    distractors = (tc.this_scenario.distractors || []).map(tpParseClueStr).filter(Boolean);
  }

  if (clues.length) {
    html += `<div class="tp-card"><div class="tp-card-title">🔑 Key Diagnostic Clues</div>
      ${clues.map((c, i) => tpClueRowHtml(c, 'clue', i)).join('')}
    </div>`;
  }

  if (distractors.length) {
    html += `<div class="tp-card"><div class="tp-card-title">🔵 Distractors — Why They Mislead</div>
      ${distractors.map((d, i) => tpClueRowHtml(d, 'distractor', i)).join('')}
    </div>`;
  }

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // !! LOCKED FORMAT — do not change without explicit instruction !!
  // References: split on [N] markers → .ref-item rows with purple .ref-num
  // and .ref-text. Non-numbered preamble → .ref-preamble (italic). Panel
  // starts collapsed. See FORMATTING.md for the full spec.
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  // ── 5. References ──
  if (tc.references) {
    // Parse references: split on [N] markers, handle preamble text too
    const refRaw = tc.references.trim();
    const refParts = refRaw.split(/(?=\[\d+\])/).filter(p => p.trim());
    const refItems = [];
    refParts.forEach(part => {
      const trimmed = part.trim();
      if (!trimmed) return;
      const m = trimmed.match(/^(\[\d+\])\s*([\s\S]*)/);
      if (m) {
        refItems.push({ num: m[1], text: m[2].replace(/\n/g,' ').trim(), isPreamble: false });
      } else {
        // Non-numbered preamble text — split by newline
        trimmed.split('\n').map(l=>l.trim()).filter(l=>l.length>3).forEach(l=>{
          refItems.push({ num: '', text: l, isPreamble: true });
        });
      }
    });
    const refHtml = refItems.map(r => r.isPreamble
      ? `<div class="ref-preamble">${escapeHtml(r.text)}</div>`
      : `<div class="ref-item"><span class="ref-num">${escapeHtml(r.num)}</span><span class="ref-text">${escapeHtml(r.text)}</span></div>`
    ).join('');
    html += `<div class="hys-panel">
      <div class="panel-header" onclick="togglePanel(this)">
        <div class="panel-title" style="color:var(--muted)">📚 References</div>
        <span class="panel-chevron">▼</span>
      </div>
      <div class="panel-body" style="display:none">
        <div class="refs-body">${refHtml}</div>
      </div>
    </div>`;
  }

  if (typeof opts.bottomNavHtml === 'string') {
    html += opts.bottomNavHtml;
  } else {
    // ── Bottom navigation (always visible after reading explanations) ──
    html += `<div style="display:flex;gap:12px;padding:20px 0 8px;border-top:1px solid rgba(255,255,255,.06);margin-top:8px">`;
    if (typeof currentIdx !== 'undefined' && typeof questions !== 'undefined') {
      if (currentIdx < questions.length - 1) {
        html += `<button class="btn btn-primary" onclick="nextQuestion()" style="min-width:160px">Next question →</button>`;
      } else {
        html += `<button class="btn btn-primary" onclick="showResult()" style="min-width:160px">Finish session →</button>`;
      }
      if (currentIdx > 0) {
        html += `<button class="btn btn-ghost" onclick="prevQuestion()">← Back</button>`;
      }
    }
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

// ── Shared question-rendering helpers (extracted from practice.html renderQuestion) ──

// EMQ theme + option list header. q.tutor_content needs only set_theme / option_list.
function renderEmqSetHeader(q) {
  const tc = q.tutor_content;
  const isEMQ = q.type === 'EMQ';
  let html = '';
  if (isEMQ && tc && tc.option_list && tc.option_list.length) {
    const setTheme = tc.set_theme || q.emq_theme;
    html += `<div class="emq-set-header">
      <div class="emq-set-title">EMQ — ${setTheme}</div>
      <div class="emq-set-instruction">For each scenario below, select the single best answer from the option list. Each option may be used once, more than once, or not at all.</div>
      <div class="emq-options-list">
        ${tc.option_list.map(opt => {
          const [letter, ...rest] = opt.split('. ');
          return `<div class="emq-opt-item"><span class="emq-opt-letter">${letter}.</span><span>${rest.join('. ')}</span></div>`;
        }).join('')}
      </div>
    </div>`;
  } else if (isEMQ) {
    // Fallback: render options from DB
    const optLabels = ['A','B','C','D','E','F','G','H','I','J'];
    html += `<div class="emq-set-header">
      <div class="emq-set-title">EMQ — ${q.emq_theme || 'Extended Matching Question'}</div>
      <div class="emq-set-instruction">Select the single best answer from the option list for each scenario.</div>
      <div class="emq-options-list">
        ${q.options.map((opt, idx) => `<div class="emq-opt-item"><span class="emq-opt-letter">${optLabels[idx]}.</span><span>${opt}</span></div>`).join('')}
      </div>
    </div>`;
  }
  return html;
}

// Clues / distractors used to annotate the stem once the answer is revealed.
function getStemAnnotations(q, tc) {
  let stemClues = [], stemDistractors = [];
  if (tc) {
    if (q.type === 'SBA') {
      stemClues       = (tc.key_clues        || []).map(tpParseClueStr).filter(Boolean);
      stemDistractors = (tc.key_distractors  || []).map(tpParseClueStr).filter(Boolean);
    } else if (q.type === 'EMQ' && tc.this_scenario) {
      stemClues       = (tc.this_scenario.key_clues   || []).map(tpParseClueStr).filter(Boolean);
      stemDistractors = (tc.this_scenario.distractors || []).map(tpParseClueStr).filter(Boolean);
    }
  }
  return { clues: stemClues, distractors: stemDistractors };
}

// Revealed answer option: correct/wrong styling + inline brief and
// "Detailed explanation" toggle (LOCKED FORMAT — see FORMATTING.md §3).
function renderAnsweredOption(q, opt, idx, selected, tc) {
  const letters = ['A','B','C','D','E','F','G','H','I','J'];
  const letter = letters[idx];
  const isCorrect  = idx === q.correct_answer;
  const isWrongPick = (selected !== null && selected !== undefined) && idx === selected && !isCorrect;

  // Pull brief/detailed from tutor_content
  let brief = '', detailed = '';
  if (tc) {
    const tcArr = q.type === 'SBA'
      ? (tc.options || [])
      : (tc.this_scenario?.answer_key || []);
    const entry = tcArr.find(o => (o.letter || '').toUpperCase() === letter);
    if (entry) {
      // Strip document-artefact ': **' prefix and closing '**' from EMQ briefs
      brief    = (entry.brief    || '').replace(/^:\s*\*+\s*/, '').replace(/\s*\*+\s*$/, '').trim();
      detailed = (entry.detailed || '');
    }
  }
  // Clean markdown artefacts from brief
  if (brief) brief = brief.replace(/^:\s*\*+\s*/, '').replace(/\s*\*+\s*$/, '').trim();
  if (!brief && detailed) brief = tpBriefFallback(detailed);

  const detId = 'idet-' + (q.question_id || idx).replace(/[^a-z0-9]/gi, '') + '-' + letter;

  let boxCls = 'opt-ans-box';
  let badgeHtml = '';
  let letterCls = 'option-letter';
  if (isCorrect)    { boxCls += ' opt-correct'; letterCls += ' opt-ltr-correct'; badgeHtml = `<span class="opt-badge opt-badge-correct">✓ Correct</span>`; }
  if (isWrongPick)  { boxCls += ' opt-wrong';   letterCls += ' opt-ltr-wrong';   badgeHtml = `<span class="opt-badge opt-badge-wrong">✗ Your answer</span>`; }

  const detHtml = detailed
    ? `<button class="btn-tp-detail opt-det-btn" onclick="toggleInlineDetail('${detId}',this)">Detailed explanation</button>
       <div class="ans-detail-body" id="${detId}">${detailed.split(/\n+/).filter(p=>p.trim()).map(p=>`<p>${escapeHtml(p)}</p>`).join('')}</div>`
    : '';

  return `<div class="${boxCls}">
      <div class="opt-ans-top">
        <span class="${letterCls}">${letter}</span>
        <span class="opt-ans-label">${escapeHtml(opt)}</span>
        ${badgeHtml}
      </div>
      ${brief ? `<div class="opt-ans-brief" id="brief-${detId}">${escapeHtml(brief)}</div>` : ''}
      ${detHtml}
    </div>`;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// !! LOCKED FORMAT — tpToggleDetail must hide brief when detail opens !!
// Answer options: brief visible by default. "Detailed explanation" hides
// brief + shows detailed. "Hide explanation" reverses. Never both visible.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ── Stem annotation tooltips (JS-positioned, never obscured) ─────────────────
// The #stemTip element is looked up at event time (and created if a page
// doesn't include one), so this works wherever the script is loaded.
(function() {
  const PAD = 12; // gap between cursor and tip
  function getTip() {
    let tip = document.getElementById('stemTip');
    if (!tip && document.body) {
      tip = document.createElement('div');
      tip.id = 'stemTip';
      tip.setAttribute('role', 'tooltip');
      tip.style.cssText = 'position:fixed;display:none;z-index:9999;background:#1e293b;color:#f1f5f9;'
        + 'font-size:12.5px;font-weight:400;line-height:1.6;padding:10px 14px;border-radius:10px;'
        + 'width:300px;max-width:90vw;box-shadow:0 6px 24px rgba(0,0,0,.3);pointer-events:none;';
      document.body.appendChild(tip);
    }
    return tip;
  }
  function showTip(el, e) {
    const tip = getTip();
    const txt = el.querySelector('.stem-tip');
    if (!tip || !txt) return;
    tip.textContent = txt.textContent;
    tip.style.display = 'block';
    positionTip(e);
  }
  function hideTip() { const tip = document.getElementById('stemTip'); if (tip) tip.style.display = 'none'; }
  function positionTip(e) {
    const tip = document.getElementById('stemTip');
    if (!tip) return;
    const tw = tip.offsetWidth, th = tip.offsetHeight;
    const vw = window.innerWidth,  vh = window.innerHeight;
    let x = e.clientX + PAD, y = e.clientY + PAD;
    if (x + tw > vw - PAD) x = e.clientX - tw - PAD;
    if (y + th > vh - PAD) y = e.clientY - th - PAD;
    if (x < PAD) x = PAD;
    if (y < PAD) y = PAD;
    tip.style.left = x + 'px';
    tip.style.top  = y + 'px';
  }
  // Keyboard users: annotated spans are tabindex=0, so show the tip on focus too
  function focusTip(el) {
    const r = el.getBoundingClientRect();
    showTip(el, { clientX: r.left, clientY: r.bottom });
  }

  document.addEventListener('mouseover', e => {
    const el = e.target.closest && e.target.closest('.stem-clue, .stem-distractor');
    if (el) showTip(el, e);
  });
  document.addEventListener('mousemove', e => {
    const tip = document.getElementById('stemTip');
    if (tip && tip.style.display === 'block') positionTip(e);
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest && e.target.closest('.stem-clue, .stem-distractor') &&
        !e.relatedTarget?.closest('.stem-clue, .stem-distractor')) hideTip();
  });
  document.addEventListener('focusin', e => {
    const el = e.target.closest && e.target.closest('.stem-clue, .stem-distractor');
    if (el) focusTip(el);
  });
  document.addEventListener('focusout', e => {
    if (e.target.closest && e.target.closest('.stem-clue, .stem-distractor')) hideTip();
  });
})();

// ── Inline option detail toggle ──────────────────────────────────────────────
function toggleInlineDetail(id, btn) {
  const det   = document.getElementById(id);
  const brief = document.getElementById('brief-' + id);
  if (!det) return;
  const open = det.classList.toggle('open');
  btn.textContent = open ? 'Hide explanation' : 'Detailed explanation';
  if (brief) brief.style.display = open ? 'none' : '';
}
