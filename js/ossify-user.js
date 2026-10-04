// ════════════════════════════════════════════════════════════════════════════
// Ossify — user display helpers (sidebar avatar initials + name)
//
// One rule for every page:
//   name     = profile.full_name → sign-up full name → first + surname → email
//   initials = first letter of the first and last words of that name,
//              ignoring titles (Dr, Dr., Doctor, Prof, Mr, Mrs, Ms, Miss, Mx …)
// e.g. "Dr Henry Armes" → "HA", "Prof. Jane van Dyke" → "JD", "Henry" → "H".
// Classic script: functions are globals.
// ════════════════════════════════════════════════════════════════════════════

const OSSIFY_TITLES = new Set(['dr', 'doctor', 'prof', 'professor', 'mr', 'mrs', 'ms', 'miss', 'mx',
                               'sir', 'dame', 'lord', 'lady', 'rev', 'revd', 'fr']);

function ossifyNameWords(name) {
  return String(name || '')
    .replace(/[^\p{L}\p{N}\s'’\-.]/gu, ' ')        // drop stray symbols, keep letters/hyphens/apostrophes
    .split(/\s+/)
    .map(w => w.replace(/^[.\-'’]+|[.\-'’]+$/g, ''))  // "Dr." → "Dr", "-Smith" → "Smith"
    .filter(w => w && !OSSIFY_TITLES.has(w.toLowerCase()));
}

function ossifyFirstLetter(word) {
  const ch = Array.from(word).find(c => /[\p{L}\p{N}]/u.test(c));
  return ch ? ch.toUpperCase() : '';
}

// Initials from a name (or, if the name has nothing usable, from an email address).
function ossifyInitials(name, email) {
  let words = ossifyNameWords(name);
  if (!words.length && email) {
    words = ossifyNameWords(String(email).split('@')[0].replace(/[._+\d]+/g, ' '));
  }
  if (!words.length) return '?';
  const first = ossifyFirstLetter(words[0]);
  const last  = words.length > 1 ? ossifyFirstLetter(words[words.length - 1]) : '';
  return (first + last) || '?';
}

// Best available display name for the signed-in user.
function ossifyDisplayName(profile, user) {
  const meta = (user && user.user_metadata) || {};
  const fromParts = [meta.first_name, meta.surname].filter(Boolean).join(' ');
  return (profile && profile.full_name && profile.full_name.trim())
      || (meta.full_name && meta.full_name.trim())
      || fromParts
      || ((user && user.email) || '').split('@')[0]
      || 'Doctor';
}
