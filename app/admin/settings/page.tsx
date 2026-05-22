"use client";

import { useState, useEffect } from "react";
import AdminShell from "@/components/admin/AdminShell";
import { CheckCircle, Loader2 } from "lucide-react";

const DEFAULTS = {
  officeName: "ظ…ظƒطھط¨ ط§ظ„ط­ط³ظٹظ† ط¨ظ† ط£ط­ظ…ط¯ ط¨ظ† ط­ط³ظٹظ† ط§ظ„ط³ط¹ط¯ظٹ ظ„ظ„ظ…ط­ط§ظ…ط§ط©",
  phone1: "0555545533",
  phone2: "0122635336",
  email: "alhusseinalmojan@gmail.com",
  address: "ط¬ط¯ط© - ط´ط§ط±ط¹ ط§ظ„طھط­ظ„ظٹط© ط®ظ„ظپ ظ…ط¨ظ†ظ‰ ط§ظ„ط±ظٹط§ط¶ ط¨ظ„ط§ط²ط§",
  whatsapp: "966555533554",
  twitter: "",
  linkedin: "",
};

type FormData = typeof DEFAULTS;

export default function SettingsPage() {
  const [form, setForm] = useState<FormData>(DEFAULTS);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/settings")
      .then((r) => r.json())
      .then((data: Partial<FormData>) => {
        setForm((prev) => ({ ...prev, ...data }));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setSaving(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", border: "1px solid #E5E5E0", borderRadius: "10px",
    padding: "12px 16px", fontSize: "15px",
    fontFamily: "'IBM Plex Arabic', sans-serif",
    outline: "none",
  };

  const fields: { label: string; key: keyof FormData; ltr?: boolean }[] = [
    { label: "ط§ط³ظ… ط§ظ„ظ…ظƒطھط¨",          key: "officeName" },
    { label: "ط±ظ‚ظ… ط§ظ„ظ‡ط§طھظپ ط§ظ„ط£ظˆظ„",    key: "phone1" },
    { label: "ط±ظ‚ظ… ط§ظ„ظ‡ط§طھظپ ط§ظ„ط«ط§ظ†ظٹ",   key: "phone2" },
    { label: "ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ",    key: "email",    ltr: true },
    { label: "ط§ظ„ط¹ظ†ظˆط§ظ†",              key: "address" },
    { label: "ط±ظ‚ظ… ظˆط§طھط³ط§ط¨ (ط¨ط¯ظˆظ† +)", key: "whatsapp", ltr: true },
    { label: "ط±ط§ط¨ط· طھظˆظٹطھط±/X",        key: "twitter",  ltr: true },
    { label: "ط±ط§ط¨ط· ظ„ظٹظ†ظƒط¯ط¥ظ†",        key: "linkedin", ltr: true },
  ];

  return (
    <AdminShell>
      <div style={{ padding: "32px 24px", maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "26px", fontWeight: 900, color: "#1A2744", marginBottom: "8px" }}>
          ط¥ط¹ط¯ط§ط¯ط§طھ ط§ظ„ظ…ظˆظ‚ط¹
        </h1>
        <p style={{ color: "#6B6B6B", marginBottom: "32px", fontSize: "14px" }}>
          ط¨ظٹط§ظ†ط§طھ ط§ظ„ظ…ظƒطھط¨ ط§ظ„ظ…ط¹ط±ظˆط¶ط© ط¹ظ„ظ‰ ط§ظ„ظ…ظˆظ‚ط¹ â€” ط§ظ„طھط؛ظٹظٹط±ط§طھ طھظڈط­ظپط¸ ظپظٹ ظ‚ط§ط¹ط¯ط© ط§ظ„ط¨ظٹط§ظ†ط§طھ
        </p>

        {saved && (
          <div style={{ background: "#D1FAE5", border: "1px solid #6EE7B7", borderRadius: "10px", padding: "12px 16px", color: "#059669", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckCircle size={16} /> طھظ… ط­ظپط¸ ط§ظ„ط¥ط¹ط¯ط§ط¯ط§طھ ط¨ظ†ط¬ط§ط­
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: "center", padding: "60px", color: "#6B6B6B" }}>
            <Loader2 size={32} style={{ margin: "0 auto 12px", animation: "spin 1s linear infinite" }} />
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            ط¬ط§ط±ظچ ط§ظ„طھط­ظ…ظٹظ„...
          </div>
        ) : (
          <form onSubmit={handleSave}>
            <div style={{ background: "white", borderRadius: "16px", padding: "32px", boxShadow: "0 4px 24px rgba(26,39,68,0.06)", display: "flex", flexDirection: "column", gap: "20px" }}>
              {fields.map(({ label, key, ltr }) => (
                <div key={key}>
                  <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#1A2744", marginBottom: "6px" }}>{label}</label>
                  <input
                    type="text"
                    value={form[key]}
                    onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                    style={{ ...inputStyle, direction: ltr ? "ltr" : "rtl" }}
                  />
                </div>
              ))}

              <div style={{ paddingTop: "8px", borderTop: "1px solid #F3F4F6" }}>
                <button
                  type="submit"
                  disabled={saving}
                  style={{ background: "#C9A84C", color: "#1A2744", fontWeight: 700, padding: "14px 32px", borderRadius: "10px", border: "none", fontSize: "15px", cursor: saving ? "default" : "pointer", fontFamily: "'IBM Plex Arabic', sans-serif", display: "inline-flex", alignItems: "center", gap: "8px" }}
                >
                  {saving && <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />}
                  {saving ? "ط¬ط§ط±ظچ ط§ظ„ط­ظپط¸..." : "ط­ظپط¸ ط§ظ„ط¥ط¹ط¯ط§ط¯ط§طھ"}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Password section */}
        <div style={{ background: "white", borderRadius: "16px", padding: "28px 32px", boxShadow: "0 4px 24px rgba(26,39,68,0.06)", marginTop: "20px" }}>
          <h2 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "18px", fontWeight: 700, color: "#1A2744", marginBottom: "6px" }}>
            ظƒظ„ظ…ط© ظ…ط±ظˆط± ط§ظ„ط¯ط®ظˆظ„
          </h2>
          <p style={{ fontSize: "13px", color: "#6B6B6B" }}>
            ظ„طھط؛ظٹظٹط± ظƒظ„ظ…ط© ط§ظ„ظ…ط±ظˆط±طŒ ط¹ط¯ظ‘ظ„ ظ…طھط؛ظٹط± ط§ظ„ط¨ظٹط¦ط©{" "}
            <code style={{ background: "#F3F4F6", padding: "2px 6px", borderRadius: "4px", direction: "ltr", display: "inline-block" }}>ADMIN_PASSWORD_HASH</code>{" "}
            ظپظٹ ظ…ظ„ظپ{" "}
            <code style={{ background: "#F3F4F6", padding: "2px 6px", borderRadius: "4px", direction: "ltr", display: "inline-block" }}>.env</code>{" "}
            ط¨ط§ط³طھط®ط¯ط§ظ… bcrypt (saltRounds: 12).
          </p>
          <p style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "8px", direction: "ltr", fontFamily: "monospace" }}>
            node -e &quot;require(&apos;bcryptjs&apos;).hash(&apos;ظƒظ„ظ…ط©_ط§ظ„ظ…ط±ظˆط±&apos;,12).then(console.log)&quot;
          </p>
        </div>
      </div>
    </AdminShell>
  );
}
