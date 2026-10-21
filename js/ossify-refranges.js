/* Ossify: "Reference ranges" box shown at the top right of every CPS question.
   Usage: put ossifyRefRanges() into the question header HTML. Collapsed by default.
   Adult ranges, UK SI units. Ranges vary between laboratories. */
(function () {
  var SECTIONS = [
    { id: "fbc", title: "Full blood count (FBC)", rows: [
      ["Haemoglobin", "Men 130–180 g/L<br>Women 115–160 g/L"],
      ["White cell count", "4.0–11.0 ×10⁹/L"],
      ["Neutrophils", "1.5–7.0 ×10⁹/L"],
      ["Lymphocytes", "1.0–4.5 ×10⁹/L"],
      ["Monocytes", "0.2–0.8 ×10⁹/L"],
      ["Platelets", "150–400 ×10⁹/L"],
      ["MCV", "80–100 fL"],
      ["MCH", "27–32 pg"]
    ]},
    { id: "crp", title: "Inflammatory marker", rows: [
      ["C-reactive protein (CRP)", "&lt;5 mg/L"]
    ]},
    { id: "renal", title: "Renal profile (U&amp;E)", rows: [
      ["Sodium", "133–146 mmol/L"],
      ["Potassium", "3.5–5.3 mmol/L"],
      ["Chloride", "95–108 mmol/L"],
      ["Bicarbonate", "22–29 mmol/L"],
      ["Urea", "2.5–7.8 mmol/L"],
      ["Creatinine", "Men 62–115 µmol/L<br>Women 49–90 µmol/L"],
      ["eGFR", "&gt;90 mL/min/1.73 m²"],
      ["Calcium (adjusted)", "2.20–2.60 mmol/L"],
      ["Phosphate", "0.80–1.50 mmol/L"],
      ["Magnesium", "0.70–1.00 mmol/L"]
    ]},
    { id: "lft", title: "Liver function tests (LFTs)", rows: [
      ["Bilirubin (total)", "&lt;21 µmol/L"],
      ["ALT", "&lt;40 U/L"],
      ["AST", "&lt;40 U/L"],
      ["ALP", "30–130 U/L"],
      ["GGT", "Men &lt;70 U/L<br>Women &lt;40 U/L"],
      ["Albumin", "35–50 g/L"],
      ["Total protein", "60–80 g/L"]
    ]},
    { id: "tft", title: "Thyroid function tests", rows: [
      ["TSH", "0.27–4.20 mU/L"],
      ["Free T4", "12–22 pmol/L"],
      ["Free T3", "3.1–6.8 pmol/L"]
    ]},
    { id: "psa", title: "PSA (age-specific thresholds, NICE NG12)", rows: [
      ["Age 40–49", "≤2.5 µg/L"],
      ["Age 50–59", "≤3.5 µg/L"],
      ["Age 60–69", "≤4.5 µg/L"],
      ["Age 70–79", "≤6.5 µg/L"],
      ["Under 40 or over 79", "Use clinical judgement"]
    ], note: "Above the threshold for age: refer on a suspected cancer pathway (NG12)." },
    { id: "ddimer", title: "D-dimer", rows: [
      ["D-dimer", "&lt;500 ng/mL FEU (0.5 mg/L FEU)"],
      ["Age-adjusted (over 50)", "&lt;age × 10 ng/mL FEU"]
    ], note: "Cut-offs and units vary by assay. NICE NG158 suggests considering the age-adjusted cut-off for people over 50." },
    { id: "ntprobnp", title: "NT-proBNP (suspected heart failure, NICE NG106)", rows: [
      ["&lt;400 ng/L", "Heart failure unlikely"],
      ["400–2,000 ng/L", "Echo and specialist assessment within 6 weeks"],
      ["&gt;2,000 ng/L", "Echo and specialist assessment within 2 weeks"]
    ]}
  ];

  var CSS = [
    ".rr{position:relative;margin-left:auto;flex-shrink:0;}",
    ".rr>summary{list-style:none;display:inline-flex;align-items:center;gap:6px;cursor:pointer;user-select:none;font-family:var(--font-sans);font-size:11.5px;font-weight:600;color:var(--pu-mid);background:var(--lav-card,#fff);border:0.5px solid var(--lav-border);border-radius:20px;padding:5px 11px;transition:background .15s,border-color .15s;}",
    ".rr>summary::-webkit-details-marker{display:none;}",
    ".rr>summary:hover{background:var(--pu-ultra);border-color:var(--pu-light);}",
    ".rr>summary:focus-visible{outline:2px solid var(--pu-mid);outline-offset:2px;}",
    ".rr>summary svg{width:13px;height:13px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;}",
    ".rr>summary .rr-chev{transition:transform .2s;}",
    ".rr[open]>summary{background:var(--pu-mid);border-color:var(--pu-mid);color:#fff;}",
    ".rr[open]>summary .rr-chev{transform:rotate(180deg);}",
    ".rr-panel{position:fixed;z-index:200;width:440px;max-width:calc(100vw - 32px);max-height:min(70vh,560px);overflow-y:auto;background:var(--surface,#fff);border:0.5px solid var(--lav-border);border-radius:14px;box-shadow:0 14px 40px rgba(61,31,122,.18);padding:6px 18px 14px;text-align:left;}",
    "html[data-theme='dark'] .rr-panel{background:#1d1630;}",
    ".rr-hd{position:sticky;top:-6px;background:inherit;padding:12px 0 8px;display:flex;justify-content:space-between;align-items:baseline;gap:10px;border-bottom:0.5px solid var(--lav-border);margin-bottom:4px;z-index:1;}",
    ".rr-title{font-size:11px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:var(--pu-dark);}",
    ".rr-sub{font-size:11px;color:var(--muted);margin-left:auto;}",
    ".rr-x{border:none;background:var(--pu-pale);color:var(--pu-mid);width:26px;height:26px;border-radius:50%;font-size:16px;line-height:1;cursor:pointer;flex-shrink:0;}",
    ".rr-x:hover{background:var(--pu-light);color:#fff;}",
    ".rr-jump{display:flex;flex-wrap:wrap;gap:5px;padding:8px 0 4px;}",
    ".rr-jump a{font-size:11px;font-weight:600;color:var(--pu-mid);background:var(--pu-pale);border-radius:12px;padding:3px 9px;text-decoration:none;}",
    ".rr-jump a:hover{background:var(--pu-light);color:#fff;}",
    ".rr-sec{padding-top:12px;}",
    ".rr-sec h4{font-size:12px;font-weight:700;color:var(--pu-dark);margin:0 0 6px;}",
    ".rr-tbl{width:100%;border-collapse:collapse;font-size:12.5px;}",
    ".rr-tbl td{padding:5px 0;border-top:0.5px solid var(--lav-border);vertical-align:top;color:var(--ink);line-height:1.45;}",
    ".rr-tbl tr:first-child td{border-top:none;}",
    ".rr-tbl td:first-child{color:var(--moss);padding-right:12px;width:44%;}",
    ".rr-tbl td:last-child{font-variant-numeric:tabular-nums;font-weight:500;}",
    ".rr-note{font-size:11px;color:var(--muted);line-height:1.5;margin-top:5px;}",
    ".rr-foot{font-size:11px;color:var(--muted);line-height:1.5;margin-top:14px;padding-top:10px;border-top:0.5px solid var(--lav-border);}",
    "@media (max-width:860px){.rr-panel{left:16px!important;right:16px!important;top:auto!important;bottom:16px;width:auto;max-height:72vh!important;}}"
  ].join("\n");

  function injectCss() {
    if (document.getElementById("rr-css")) return;
    var s = document.createElement("style"); s.id = "rr-css"; s.textContent = CSS; document.head.appendChild(s);
  }

  var uid = 0;
  window.ossifyRefRanges = function () {
    injectCss();
    var p = "rr" + (++uid) + "-";
    var jump = SECTIONS.map(function (s) {
      var short = { fbc: "FBC", crp: "CRP", renal: "U&amp;E", lft: "LFTs", tft: "Thyroid", psa: "PSA", ddimer: "D-dimer", ntprobnp: "NT-proBNP" }[s.id];
      return '<a href="#' + p + s.id + '">' + short + "</a>";
    }).join("");
    var body = SECTIONS.map(function (s) {
      return '<section class="rr-sec" id="' + p + s.id + '"><h4>' + s.title + '</h4><table class="rr-tbl"><tbody>' +
        s.rows.map(function (r) { return "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td></tr>"; }).join("") +
        "</tbody></table>" + (s.note ? '<div class="rr-note">' + s.note + "</div>" : "") + "</section>";
    }).join("");
    return '<details class="rr">' +
      '<summary aria-label="Reference ranges"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 2v6L4 18a2 2 0 0 0 1.8 3h12.4A2 2 0 0 0 20 18l-5-10V2"/><line x1="8" y1="2" x2="16" y2="2"/><line x1="7" y1="14" x2="17" y2="14"/></svg>Reference ranges<svg class="rr-chev" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg></summary>' +
      '<div class="rr-panel" role="region" aria-label="Laboratory reference ranges">' +
      '<div class="rr-hd"><span class="rr-title">Reference ranges</span><span class="rr-sub">Adults · UK units</span><button type="button" class="rr-x" aria-label="Close reference ranges">×</button></div>' +
      '<div class="rr-jump">' + jump + "</div>" + body +
      '<div class="rr-foot">Typical UK adult ranges. Each laboratory sets its own, so values differ slightly between hospitals. If a question gives its own ranges, use those.</div>' +
      "</div></details>";
  };

  // Place the open panel under its button (fixed, so scrolling areas never clip it)
  function place(d) {
    var panel = d.querySelector(".rr-panel"), r = d.querySelector("summary").getBoundingClientRect();
    if (window.innerWidth <= 860) { panel.style.top = panel.style.right = panel.style.maxHeight = ""; return; }
    var top = r.bottom + 8;
    panel.style.top = top + "px";
    panel.style.right = Math.max(16, window.innerWidth - r.right) + "px";
    panel.style.maxHeight = Math.max(240, Math.min(560, window.innerHeight - top - 16)) + "px";
  }
  document.addEventListener("toggle", function (e) {
    var d = e.target; if (!d.classList || !d.classList.contains("rr") || !d.open) return;
    document.querySelectorAll("details.rr[open]").forEach(function (o) { if (o !== d) o.open = false; });
    place(d);
  }, true);
  function reposition() { document.querySelectorAll("details.rr[open]").forEach(place); }
  window.addEventListener("resize", reposition);
  document.addEventListener("scroll", function (e) { if (!(e.target.closest && e.target.closest(".rr-panel"))) reposition(); }, true);
  document.addEventListener("click", function (e) {
    var x = e.target.closest && e.target.closest(".rr-x"); if (!x) return;
    var d = x.closest("details.rr"); d.open = false; d.querySelector("summary").focus();
  });

  // Close when clicking outside or pressing Escape
  document.addEventListener("click", function (e) {
    document.querySelectorAll("details.rr[open]").forEach(function (d) { if (!d.contains(e.target)) d.open = false; });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    document.querySelectorAll("details.rr[open]").forEach(function (d) { d.open = false; var s = d.querySelector("summary"); if (s) s.focus(); });
  });
  // Jump links scroll inside the panel only
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest(".rr-jump a"); if (!a) return;
    e.preventDefault();
    var t = document.getElementById(a.getAttribute("href").slice(1)), panel = a.closest(".rr-panel");
    if (t && panel) panel.scrollTo({ top: t.offsetTop - 70, behavior: "smooth" });
  });
})();
