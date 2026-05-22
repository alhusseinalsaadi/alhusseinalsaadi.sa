import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatWidget from "@/components/ai/AIChatWidget";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieConsent from "@/components/ui/CookieConsent";
import { Award, Users, Shield, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "ظ…ظ† ظ†ط­ظ†",
  description: "طھط¹ط±ظپ ط¹ظ„ظ‰ ظ…ظƒطھط¨ ط§ظ„ط­ط³ظٹظ† ط¨ظ† ط£ط­ظ…ط¯ ط¨ظ† ط­ط³ظٹظ† ط§ظ„ط³ط¹ط¯ظٹ ظ„ظ„ظ…ط­ط§ظ…ط§ط© â€” ظ‚طµطھظ†ط§ ظˆط®ط¯ظ…ط§طھظ†ط§ ط§ظ„ظ‚ط§ظ†ظˆظ†ظٹط© ظپظٹ ط¬ط¯ط©.",
};

const values = [
  { icon: Shield, title: "ط§ظ„ظ†ط²ط§ظ‡ط©", desc: "ط§ظ„طµط¯ظ‚ ظˆط§ظ„ط´ظپط§ظپظٹط© ظپظٹ ظƒظ„ طھط¹ط§ظ…ظ„ ظ…ط¹ ط¹ظ…ظ„ط§ط¦ظ†ط§طŒ ظˆط­ظ…ط§ظٹط© ط£ط³ط±ط§ط±ظ‡ظ… ط¨طھظ‚ط¯ظٹط± ط¹ط§ظ„ظچ." },
  { icon: Award, title: "ط§ظ„طھظ…ظٹط²", desc: "ط£ط¹ظ„ظ‰ ظ…ط¹ط§ظٹظٹط± ط§ظ„ط¬ظˆط¯ط© ظˆط§ظ„ط§ط­طھط±ط§ظپظٹط© ظپظٹ ظƒظ„ ط®ط¯ظ…ط© ظ‚ط§ظ†ظˆظ†ظٹط© ظ†ظ‚ط¯ظ…ظ‡ط§." },
  { icon: Users, title: "ط§ظ„ط´ط±ط§ظƒط©", desc: "ظ†ط¹ط§ظ…ظ„ظƒ ظƒط´ط±ظٹظƒ ظ„ط§ ظƒط±ظ‚ظ… ظپظٹ ظ…ظ„ظپ â€” ظ…طµظ„ط­طھظƒ ط£ظˆظ„ظˆظٹطھظ†ط§ ط§ظ„ط¯ط§ط¦ظ…ط©." },
  { icon: Target, title: "ط§ظ„ظ†طھط§ط¦ط¬", desc: "ظ†ط±ظƒظ‘ط² ط¹ظ„ظ‰ طھط­ظ‚ظٹظ‚ ط£ظپط¶ظ„ ط§ظ„ظ†طھط§ط¦ط¬ ط§ظ„ظ…ظ…ظƒظ†ط© ظ„ط¹ظ…ظ„ط§ط¦ظ†ط§ ظپظٹ ط£ط³ط±ط¹ ظˆظ‚طھ." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "72px" }}>
        {/* Hero */}
        <section className="gradient-hero" style={{ padding: "80px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "48px", fontWeight: 900, color: "white", marginBottom: "20px" }}>
              ظ…ظ† ظ†ط­ظ†
            </h1>
            <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: "1.8" }}>
              ظ…ظƒطھط¨ ط§ظ„ط­ط³ظٹظ† ط¨ظ† ط£ط­ظ…ط¯ ط¨ظ† ط­ط³ظٹظ† ط§ظ„ط³ط¹ط¯ظٹ ظ„ظ„ظ…ط­ط§ظ…ط§ط© â€” ط´ط±ظٹظƒظƒ ط§ظ„ظ‚ط§ظ†ظˆظ†ظٹ ط§ظ„ظ…ظˆط«ظˆظ‚ ظپظٹ ط¬ط¯ط©
            </p>
          </div>
        </section>

        {/* Story */}
        <section style={{ background: "#FAFAF8", padding: "80px 24px" }}>
          <div className="grid-2col" style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div>
              <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "14px", letterSpacing: "2px", marginBottom: "12px" }}>ظ…ظƒطھط¨ ظ‚ط§ظ†ظˆظ†ظٹ ظ…طھط®طµطµ ظپظٹ ط¬ط¯ط©</p>
              <h2 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "36px", fontWeight: 900, color: "#1A2744", marginBottom: "20px", lineHeight: "1.3" }}>
                ظ…ظƒطھط¨ ط§ظ„ط­ط³ظٹظ† ط¨ظ† ط£ط­ظ…ط¯ ط¨ظ† ط­ط³ظٹظ† ط§ظ„ط³ط¹ط¯ظٹ ظ„ظ„ظ…ط­ط§ظ…ط§ط©
              </h2>
              <div className="gold-divider-right" />
              <p style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: "1.9", marginTop: "20px", marginBottom: "16px" }}>
                ظ…ظƒطھط¨ ط§ظ„ط­ط³ظٹظ† ط¨ظ† ط£ط­ظ…ط¯ ط¨ظ† ط­ط³ظٹظ† ط§ظ„ط³ط¹ط¯ظٹ ظ„ظ„ظ…ط­ط§ظ…ط§ط© ظ…ظƒطھط¨ ظ‚ط§ظ†ظˆظ†ظٹ ظ…طھط®طµطµ ظٹظ‚ط¹ ظپظٹ ط¬ط¯ط© ط¹ظ„ظ‰ ط´ط§ط±ط¹ ط§ظ„طھط­ظ„ظٹط© ط®ظ„ظپ ظ…ط¨ظ†ظ‰ ط§ظ„ط±ظٹط§ط¶ ط¨ظ„ط§ط²ط§طŒ ظٹظ‚ط¯ظ… ط®ط¯ظ…ط§طھ ظ‚ط§ظ†ظˆظ†ظٹط© ط´ط§ظ…ظ„ط© ظ„ظƒط§ظپط© ط§ظ„ظ‚ط¶ط§ظٹط§ ظˆط§ظ„ظ…ط¬ط§ظ„ط§طھ ط§ظ„ظ‚ط§ظ†ظˆظ†ظٹط© ظپظٹ ط§ظ„ظ…ظ…ظ„ظƒط© ط§ظ„ط¹ط±ط¨ظٹط© ط§ظ„ط³ط¹ظˆط¯ظٹط©.
              </p>
              <p style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: "1.9", marginBottom: "16px" }}>
                ظٹطھظ…ظٹط² ط§ظ„ظ…ظƒطھط¨ ط¨ط®ط¨ط±ط© ظˆط§ط³ط¹ط© ظپظٹ ط§ظ„طھط¹ط§ظ…ظ„ ظ…ط¹ ط§ظ„ظ‚ط¶ط§ظٹط§ ط§ظ„طھط¬ط§ط±ظٹط©طŒ ظˆطھظ‚ط³ظٹظ… ط§ظ„طھط±ظƒط§طھطŒ ظˆط§ظ„ظ‚ط§ظ†ظˆظ† ط§ظ„ط¬ظ†ط§ط¦ظٹطŒ ظˆط§ظ„ط£ط­ظˆط§ظ„ ط§ظ„ط´ط®طµظٹط©طŒ ظˆط§ظ„ط¹ظ‚ط§ط±ط§طھطŒ ظˆظ‚ط§ظ†ظˆظ† ط§ظ„ط¹ظ…ظ„طŒ ظˆط§ظ„ط¹ط¯ظٹط¯ ظ…ظ† ط§ظ„طھط®طµطµط§طھ ط§ظ„ظ‚ط§ظ†ظˆظ†ظٹط© ط§ظ„ط£ط®ط±ظ‰ ط§ظ„طھظٹ طھظ„ط¨ظٹ ط§ط­طھظٹط§ط¬ط§طھ ط§ظ„ط£ظپط±ط§ط¯ ظˆط§ظ„ط´ط±ظƒط§طھ ط¹ظ„ظ‰ ط­ط¯ظچظ‘ ط³ظˆط§ط،.
              </p>
              <p style={{ fontSize: "16px", color: "#6B6B6B", lineHeight: "1.9", marginBottom: "32px" }}>
                ظٹط¤ظ…ظ† ط§ظ„ظ…ظƒطھط¨ ط¨ط£ظ† طھط­ظ‚ظٹظ‚ ط§ظ„ط¹ط¯ط§ظ„ط© ظٹط¨ط¯ط£ ط¨ظپظ‡ظ… ط¹ظ…ظٹظ‚ ظ„ط­ظ‚ظˆظ‚ ط§ظ„ظ…ظˆظƒظ„ ظˆط¸ط±ظˆظپظ‡طŒ ظ„ط°ط§ ظٹط­ط±طµ ط¹ظ„ظ‰ طھظ‚ط¯ظٹظ… ط§ط³طھط´ط§ط±ط§طھ ظ…ط¯ط±ظˆط³ط© ظˆط­ظ„ظˆظ„ ط¹ظ…ظ„ظٹط© ظˆظپظ‚ ط£ط­ط¯ط« ط§ظ„ط£ظ†ط¸ظ…ط© ظˆط§ظ„ظ„ظˆط§ط¦ط­ ط§ظ„ط³ط¹ظˆط¯ظٹط©طŒ ظ…ط¹ ط§ظ„ط­ظپط§ط¸ ط¹ظ„ظ‰ ط£ط¹ظ„ظ‰ ظ…ط³طھظˆظٹط§طھ ط§ظ„ط³ط±ظٹط© ظˆط§ظ„ط§ط­طھط±ط§ظپظٹط©.
              </p>
              <Link href="/contact" className="btn-primary">
                طھط­ط¯ط« ظ…ط¹ ط§ظ„ظ…ظƒطھط¨
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              {[
                { num: "17", label: "طھط®طµطµط§ظ‹ ظ‚ط§ظ†ظˆظ†ظٹط§ظ‹" },
                { num: "300+", label: "ط¹ظ…ظٹظ„ ط±ط§ط¶ظچ" },
                { num: "ط¬ط¯ط©", label: "ط´ط§ط±ط¹ ط§ظ„طھط­ظ„ظٹط©" },
                { num: "98%", label: "ط±ط¶ط§ ط§ظ„ط¹ظ…ظ„ط§ط،" },
              ].map(({ num, label }) => (
                <div key={label} style={{ background: "white", borderRadius: "16px", padding: "28px 20px", textAlign: "center", boxShadow: "0 4px 24px rgba(26,39,68,0.08)", border: "1px solid #E5E5E0" }}>
                  <div style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "36px", fontWeight: 900, color: "#C9A84C", marginBottom: "8px" }}>{num}</div>
                  <div style={{ fontSize: "14px", color: "#6B6B6B" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section style={{ background: "#1A2744", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "36px", fontWeight: 900, color: "white", marginBottom: "48px" }}>ظ‚ظٹظ…ظ†ط§ ط§ظ„ط£ط³ط§ط³ظٹط©</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "16px", padding: "32px 24px" }}>
                  <div style={{ width: "56px", height: "56px", background: "rgba(201,168,76,0.15)", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <Icon size={26} color="#C9A84C" />
                  </div>
                  <h3 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "20px", fontWeight: 700, color: "#C9A84C", marginBottom: "10px" }}>{title}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section style={{ background: "#FAFAF8", padding: "80px 24px" }}>
          <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "36px", fontWeight: 900, color: "#1A2744", marginBottom: "8px" }}>طھظˆط§طµظ„ ظ…ط¹ظ†ط§</h2>
            <div className="gold-divider" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px", marginTop: "40px" }}>
              {[
                { label: "ط§ظ„ظ‡ط§طھظپ", value: "0555545533", sub: "0122635336" },
                { label: "ط§ظ„ط¨ط±ظٹط¯ ط§ظ„ط¥ظ„ظƒطھط±ظˆظ†ظٹ", value: "alhusseinalmojan@gmail.com", sub: "" },
                { label: "ط§ظ„ط¹ظ†ظˆط§ظ†", value: "ط¬ط¯ط© - ط´ط§ط±ط¹ ط§ظ„طھط­ظ„ظٹط©", sub: "ط®ظ„ظپ ظ…ط¨ظ†ظ‰ ط§ظ„ط±ظٹط§ط¶ ط¨ظ„ط§ط²ط§" },
              ].map(({ label, value, sub }) => (
                <div key={label} style={{ background: "white", borderRadius: "16px", padding: "32px 24px", boxShadow: "0 4px 24px rgba(26,39,68,0.08)", border: "1px solid #E5E5E0" }}>
                  <p style={{ fontSize: "13px", color: "#C9A84C", fontWeight: 700, marginBottom: "8px", letterSpacing: "1px" }}>{label}</p>
                  <p style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "17px", fontWeight: 700, color: "#1A2744" }}>{value}</p>
                  {sub && <p style={{ fontSize: "15px", color: "#6B6B6B", marginTop: "4px" }}>{sub}</p>}
                </div>
              ))}
            </div>
            <div style={{ marginTop: "40px" }}>
              <Link href="/contact" className="btn-primary" style={{ fontSize: "16px" }}>
                ط§ط­ط¬ط² ط§ط³طھط´ط§ط±ط© ظ…ط¬ط§ظ†ظٹط©
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatWidget />
      <WhatsAppButton />
      <CookieConsent />
    </>
  );
}
