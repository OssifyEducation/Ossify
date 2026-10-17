// ════════════════════════════════════════════════════════════════════════════
// Ossify — payments (Stripe Payment Links) and access helpers
//
// Classic script: functions are globals.
//
// !! TEST MODE !!  The three links below are Stripe TEST links (buy.stripe.com/test_…).
// To go live, replace them with the three LIVE Payment Links and nothing else.
// The Stripe webhook (Supabase edge function "stripe-webhook") grants the access.
// ════════════════════════════════════════════════════════════════════════════

const OSSIFY_STRIPE_LINKS = {
  '3month':  'https://buy.stripe.com/test_28E9AM1QzeIV73S9d4bjW02',
  '6month':  'https://buy.stripe.com/test_4gM8wIan59oBdsgfBsbjW01',
  '12month': 'https://buy.stripe.com/test_6oU6oA7aT1W9gEs0GybjW00'
};

const OSSIFY_PLAN_LABELS = {
  '3month': '3 months',
  '6month': '6 months',
  '12month': '1 year',
  'dev': 'Full access'
};

// Same rule the database uses (_has_paid_access): active, and not past its end date.
function ossifyHasAccess(profile) {
  return !!profile
    && profile.subscription_status === 'active'
    && (!profile.subscription_expires_at || new Date(profile.subscription_expires_at) > new Date());
}

// "14 January 2027"
function ossifyFormatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

// Send a logged-in user to Stripe checkout for the chosen plan. The user's id travels with the
// payment (client_reference_id) so the webhook knows exactly whose account to credit.
// Logged-out visitors are sent to sign up first.
async function ossifyBuy(plan, sbClient) {
  const link = OSSIFY_STRIPE_LINKS[plan];
  if (!link) return;
  const { data: { session } } = await sbClient.auth.getSession();
  if (!session) { window.location.href = 'login.html?tab=signup'; return; }
  const u = session.user;
  try {
    const { data: p } = await sbClient.from('profiles').select('subscription_expires_at').eq('id', u.id).single();
    sessionStorage.setItem('ossify_prev_expiry', (p && p.subscription_expires_at) || '');
  } catch (e) {}
  window.location.href = link
    + '?client_reference_id=' + encodeURIComponent(u.id)
    + '&prefilled_email=' + encodeURIComponent(u.email || '');
}
