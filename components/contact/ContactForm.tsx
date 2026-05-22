"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

const SAUDI_PHONE = /^(\+966|00966|0)(5\d{8})$/;
const EMAIL_RE    = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(str: string, max = 500): string {
  return str.trim().slice(0, max).replace(/<[^>]*>/g, "").replace(/[<>"'`]/g, "");
}

const inputStyle: React.CSSProperties = {
  width: "100%", border: "1px solid #E5E5E0", borderRadius: "10px",
  padding: "12px 16px", fontSize: "15px",
  fontFamily: "'IBM Plex Arabic', sans-serif",
  outline: "none", direction: "rtl",
};

export default function ContactForm() {
  const [form, setForm]           = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [consent, setConsent]     = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");

  const validate = (): string => {
    if (!form.name.trim() || form.name.trim().length < 2) return "ط§ظ„ط±ط¬ط§ط، ط¥ط¯ط®ط§ظ„ ط§ظ„ط§ط³ظ… ط§ظ„ظƒط§ظ…ظ„";
    if (!SAUDI_PHONE.test(form.phone.trim())) return "ط±ظ‚ظ… ط§ظ„ط¬ظˆط§ظ„ ط؛ظٹط± طµط­ظٹط­ (ظ…ط«ط§ظ„: 0555123456)";
    if (form.email && !EMAIL_RE.test(form.email)) return "ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ ط؛ظٹط± طµط­ظٹط­";
    if (!consent) return "ظٹط¬ط¨ ط§ظ„ظ…ظˆط§ظپظ‚ط© ط¹ظ„ظ‰ ط³ظٹط§ط³ط© ط§ظ„ط®طµظˆطµظٹط©";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const validationError = validate();
    if (validationError) { setError(validationError); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:         sanitize(form.name, 100),
          phone:        form.phone.trim(),
          email:        sanitize(form.email, 200),
          service:      sanitize(form.service, 200),
          message:      sanitize(form.message, 2000),
          consent:      true,
          conversation: [],
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "ط­ط¯ط« ط®ط·ط£طŒ ظٹط±ط¬ظ‰ ط§ظ„ظ…ط­ط§ظˆظ„ط© ظ„ط§ط­ظ‚ط§ظ‹");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("طھط¹ط°ظ‘ط± ط§ظ„ط§طھطµط§ظ„ ط¨ط§ظ„ط®ط§ط¯ظ…طŒ ظٹط±ط¬ظ‰ ط§ظ„ظ…ط­ط§ظˆظ„ط© ظ…ط±ط© ط£ط®ط±ظ‰.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid-contact" style={{ maxWidth: "1100px", margin: "0 auto" }}>
      {/* Contact Info */}
      <div>
        <h2 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "28px", fontWeight: 900, color: "#1A2744", marginBottom: "32px" }}>
          ظ…ط¹ظ„ظˆظ…ط§طھ ط§ظ„طھظˆط§طµظ„
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {[
            { icon: Phone,  label: "ط§ظ„ظ‡ط§طھظپ",              value: "0555545533 / 0122635336",                   href: "tel:0555545533" },
            { icon: Mail,   label: "ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ",   value: "alhusseinalmojan@gmail.com",                href: "mailto:alhusseinalmojan@gmail.com" },
            { icon: MapPin, label: "ط§ظ„ط¹ظ†ظˆط§ظ†",              value: "ط¬ط¯ط© - ط´ط§ط±ط¹ ط§ظ„طھط­ظ„ظٹط©طŒ ط®ظ„ظپ ظ…ط¨ظ†ظ‰ ط§ظ„ط±ظٹط§ط¶ ط¨ظ„ط§ط²ط§", href: "#" },
            { icon: Clock,  label: "ط³ط§ط¹ط§طھ ط§ظ„ط¹ظ…ظ„",         value: "ط§ظ„ط£ط­ط¯ â€“ ط§ظ„ط®ظ…ظٹط³: 8 طµ â€“ 8 ظ…",               href: "#" },
          ].map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} style={{ display: "flex", gap: "16px", alignItems: "flex-start", textDecoration: "none" }}>
              <div style={{ width: "48px", height: "48px", background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Icon size={20} color="#C9A84C" />
              </div>
              <div>
                <div style={{ fontSize: "13px", color: "#6B6B6B", marginBottom: "4px" }}>{label}</div>
                <div style={{ fontSize: "16px", fontWeight: 600, color: "#1A2744" }}>{value}</div>
              </div>
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/966555533554?text=ظ…ط±ط­ط¨ط§ظ‹طŒ ط£ط±ظٹط¯ ط§ط³طھط´ط§ط±ط© ظ‚ط§ظ†ظˆظ†ظٹط©"
          target="_blank" rel="noopener noreferrer"
          style={{ display: "flex", alignItems: "center", gap: "12px", background: "#25D366", color: "white", padding: "16px 24px", borderRadius: "12px", textDecoration: "none", marginTop: "32px", fontWeight: 700 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          طھظˆط§طµظ„ ط¹ط¨ط± ظˆط§طھط³ط§ط¨ ط§ظ„ط¢ظ†
        </a>
      </div>

      {/* Form */}
      <div style={{ background: "white", borderRadius: "20px", padding: "40px", boxShadow: "0 4px 24px rgba(26,39,68,0.08)" }}>
        {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <CheckCircle size={64} color="#22c55e" style={{ margin: "0 auto 20px", display: "block" }} />
            <h3 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "24px", fontWeight: 700, color: "#1A2744", marginBottom: "12px" }}>
              طھظ… ط§ط³طھظ„ط§ظ… ط·ظ„ط¨ظƒ!
            </h3>
            <p style={{ color: "#6B6B6B", lineHeight: "1.7" }}>
              ط³ظٹطھظˆط§طµظ„ ظ…ط¹ظƒ ظپط±ظٹظ‚ظ†ط§ ط®ظ„ط§ظ„ ط³ط§ط¹ط© ظˆط§ط­ط¯ط© ظپظٹ ط£ظˆظ‚ط§طھ ط§ظ„ط¹ظ…ظ„.
            </p>
          </div>
        ) : (
          <>
            <h2 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "24px", fontWeight: 900, color: "#1A2744", marginBottom: "28px" }}>
              ط§ط­ط¬ط² ط§ط³طھط´ط§ط±طھظƒ ط§ظ„ظ…ط¬ط§ظ†ظٹط©
            </h2>
            {error && (
              <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#FEF2F2", border: "1px solid #FCA5A5", borderRadius: "10px", padding: "12px 16px", marginBottom: "16px" }}>
                <AlertCircle size={18} color="#DC2626" style={{ flexShrink: 0 }} />
                <span style={{ fontSize: "14px", color: "#DC2626" }}>{error}</span>
              </div>
            )}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { id: "name",  label: "ط§ظ„ط§ط³ظ… ط§ظ„ظƒط§ظ…ظ„ *",     type: "text",  placeholder: "ظ…ط­ظ…ط¯ ط¹ط¨ط¯ط§ظ„ظ„ظ‡" },
                { id: "phone", label: "ط±ظ‚ظ… ط§ظ„ط¬ظˆط§ظ„ *",        type: "tel",   placeholder: "05XXXXXXXX" },
                { id: "email", label: "ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ",   type: "email", placeholder: "email@example.com" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#1A2744", marginBottom: "6px" }}>{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    required={label.includes("*")}
                    maxLength={id === "name" ? 100 : id === "phone" ? 15 : 200}
                    value={form[id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    style={inputStyle}
                  />
                </div>
              ))}
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#1A2744", marginBottom: "6px" }}>ظ†ظˆط¹ ط§ظ„ط®ط¯ظ…ط©</label>
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ ...inputStyle, background: "white" }}>
                  <option value="">ط§ط®طھط± ظ†ظˆط¹ ط§ظ„ط®ط¯ظ…ط©</option>
                  <option>ط§ظ„ظ‚ط¶ط§ظٹط§ ط§ظ„طھط¬ط§ط±ظٹط©</option>
                  <option>طھظ‚ط³ظٹظ… ط§ظ„طھط±ظƒط§طھ</option>
                  <option>ط§ظ„ظ‚ط§ظ†ظˆظ† ط§ظ„ط¬ظ†ط§ط¦ظٹ</option>
                  <option>ط§ظ„ط£ط­ظˆط§ظ„ ط§ظ„ط´ط®طµظٹط©</option>
                  <option>ط§ظ„ط£ظ†ط¸ظ…ط© ط§ظ„ط¹ظ‚ط§ط±ظٹط©</option>
                  <option>ظ†ط¸ط§ظ… ط§ظ„ط¹ظ…ظ„</option>
                  <option>ط§ظ„ط¹ظ‚ظˆط¯ ظˆط§ظ„طھظˆط«ظٹظ‚</option>
                  <option>ط§ط³طھط´ط§ط±ط© ظ‚ط§ظ†ظˆظ†ظٹط© ط¹ط§ظ…ط©</option>
                  <option>ط£ط®ط±ظ‰</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#1A2744", marginBottom: "6px" }}>ط±ط³ط§ظ„طھظƒ</label>
                <textarea
                  rows={4}
                  placeholder="ط§ط´ط±ط­ ظ„ظ†ط§ ظ…ظˆط¶ظˆط¹ظƒ ط¨ط§ط®طھطµط§ط±..."
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>
              <label style={{ display: "flex", alignItems: "flex-start", gap: "12px", background: "#FAFAF8", border: "1px solid #E5E5E0", borderRadius: "10px", padding: "14px 16px", cursor: "pointer", fontSize: "13px", color: "#4B4B4B", lineHeight: "1.6" }}>
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  style={{ width: "18px", height: "18px", accentColor: "#C9A84C", flexShrink: 0, marginTop: "2px" }}
                />
                <span>
                  ط£ظˆط§ظپظ‚ ط¹ظ„ظ‰{" "}
                  <Link href="/privacy-policy" target="_blank" style={{ color: "#C9A84C", fontWeight: 600 }}>ط³ظٹط§ط³ط© ط§ظ„ط®طµظˆطµظٹط©</Link>
                  {" "}ظˆ{" "}
                  <Link href="/terms" target="_blank" style={{ color: "#C9A84C", fontWeight: 600 }}>ط´ط±ظˆط· ط§ظ„ط§ط³طھط®ط¯ط§ظ…</Link>
                  . ط£ط¹ظ„ظ… ط£ظ† ط¨ظٹط§ظ†ط§طھظٹ ط³طھظڈط³طھط®ط¯ظ… ظ„ظ„طھظˆط§طµظ„ ظ…ط¹ظٹ ط¨ط´ط£ظ† ط·ظ„ط¨ظٹ ط§ظ„ظ‚ط§ظ†ظˆظ†ظٹ ظˆظپظ‚{" "}
                  <span style={{ fontWeight: 600 }}>ظ†ط¸ط§ظ… ط­ظ…ط§ظٹط© ط§ظ„ط¨ظٹط§ظ†ط§طھ ط§ظ„ط´ط®طµظٹط© (PDPL)</span>.
                </span>
              </label>
              <button
                type="submit"
                className="btn-primary"
                disabled={loading || !consent}
                style={{ justifyContent: "center", fontSize: "16px", opacity: (!consent || loading) ? 0.6 : 1 }}
              >
                {loading ? "ط¬ط§ط±ظچ ط§ظ„ط¥ط±ط³ط§ظ„..." : <><Send size={18} /> ط¥ط±ط³ط§ظ„ ط§ظ„ط·ظ„ط¨</>}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
