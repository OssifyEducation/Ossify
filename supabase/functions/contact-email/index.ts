// Ossify contact form → saved to public.contact_messages and emailed to info@ossify.co.uk (Resend).
// Secrets: RESEND_API_KEY (required to email). Optional: CONTACT_FROM, e.g. "Ossify <contact@ossify.co.uk>"
// once ossify.co.uk is verified in Resend; until then Resend's onboarding@resend.dev sender is used.
import { createClient } from "jsr:@supabase/supabase-js@2";

const TO = "info@ossify.co.uk";
const SUBJECTS: Record<string, string> = {
  general: "General enquiry", bug: "Bug report", feature: "Feature request",
  content: "Question about content", billing: "Billing or account", other: "Other",
};
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...CORS, "Content-Type": "application/json" } });
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405);

  const url = Deno.env.get("SUPABASE_URL")!;
  const auth = req.headers.get("Authorization") ?? "";
  const userClient = createClient(url, Deno.env.get("SUPABASE_ANON_KEY")!, { global: { headers: { Authorization: auth } } });
  const { data: { user } } = await userClient.auth.getUser();
  if (!user) return json({ error: "not_signed_in" }, 401);

  let b: Record<string, unknown>;
  try { b = await req.json(); } catch { return json({ error: "bad_request" }, 400); }
  const name = String(b.name ?? "").trim().slice(0, 100);
  const email = String(b.email ?? "").trim().slice(0, 200);
  const subjectKey = String(b.subject ?? "general");
  const subject = SUBJECTS[subjectKey] ?? "Other";
  const message = String(b.message ?? "").trim();
  if (!name || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || message.length < 10 || message.length > 5000) {
    return json({ error: "invalid" }, 400);
  }

  const admin = createClient(url, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  // Up to 5 messages per person per hour
  const since = new Date(Date.now() - 3600_000).toISOString();
  const { count } = await admin.from("contact_messages").select("id", { count: "exact", head: true })
    .eq("user_id", user.id).gte("created_at", since);
  if ((count ?? 0) >= 5) return json({ error: "too_many" }, 429);

  const { data: row, error: insErr } = await admin.from("contact_messages")
    .insert({ user_id: user.id, name, email, subject, message }).select("id").single();
  if (insErr || !row) return json({ error: "save_failed" }, 500);

  const key = Deno.env.get("RESEND_API_KEY");
  if (!key) {
    await admin.from("contact_messages").update({ email_error: "RESEND_API_KEY not set" }).eq("id", row.id);
    return json({ ok: true, emailed: false });
  }
  const from = Deno.env.get("CONTACT_FROM") ?? "Ossify contact form <onboarding@resend.dev>";
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#222">
    <p style="margin:0 0 12px"><strong>${esc(subject)}</strong> from <strong>${esc(name)}</strong> &lt;${esc(email)}&gt;</p>
    <div style="white-space:pre-wrap;border-left:3px solid #7c5cbf;padding:8px 12px;background:#f7f4ff">${esc(message)}</div>
    <p style="margin:14px 0 0;color:#777;font-size:12px">Sent from the Ossify contact form · message #${row.id} · reply to this email to answer ${esc(name)} directly.</p></div>`;
  const text = `${subject} from ${name} <${email}>\n\n${message}\n\nSent from the Ossify contact form (message #${row.id}). Reply to this email to answer directly.`;

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [TO], reply_to: email, subject: `[Ossify] ${subject}: ${name}`, html, text }),
    });
    if (!r.ok) {
      await admin.from("contact_messages").update({ email_error: `resend ${r.status}: ${(await r.text()).slice(0, 300)}` }).eq("id", row.id);
      return json({ ok: true, emailed: false });
    }
    await admin.from("contact_messages").update({ emailed_at: new Date().toISOString(), email_error: null }).eq("id", row.id);
    return json({ ok: true, emailed: true });
  } catch (e) {
    await admin.from("contact_messages").update({ email_error: String(e).slice(0, 300) }).eq("id", row.id);
    return json({ ok: true, emailed: false });
  }
});
