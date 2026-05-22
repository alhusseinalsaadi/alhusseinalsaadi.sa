"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Star, Shield, Award, Phone } from "lucide-react";

const headlines = [
  "ظ†ط­ظ…ظٹ ط­ظ‚ظˆظ‚ظƒ ط¨ط£ظ…ط§ظ†ط© ظˆط§ط­طھط±ط§ظپظٹط©",
  "ط®ط¨ط±ط© ظ‚ط§ظ†ظˆظ†ظٹط© طھط®ط¯ظ… ظ…طµظ„ط­طھظƒ",
  "ط´ط±ظٹظƒظƒ ط§ظ„ظ‚ط§ظ†ظˆظ†ظٹ ط§ظ„ظ…ظˆط«ظˆظ‚ ظپظٹ ط¬ط¯ط©",
];

export default function HeroSection() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((i) => (i + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="gradient-hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "68px",
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(201,168,76,0.05) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      {/* Logo strip at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "90px",
          overflow: "hidden",
          pointerEvents: "none",
          opacity: 0.07,
          filter: "brightness(0) invert(1)",
          display: "flex",
          alignItems: "center",
          gap: "48px",
          whiteSpace: "nowrap",
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <img key={i} src="/logo.png" alt="" style={{ height: "70px", width: "auto", flexShrink: 0 }} />
        ))}
      </div>

      {/* â”€â”€ Grid â”€â”€ */}
      <div className="hero-grid" style={{ maxWidth: "1280px", margin: "0 auto", padding: "56px 24px", width: "100%", position: "relative", zIndex: 1 }}>

        {/* â”€â”€ Content column â”€â”€ */}
        <div>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.35)",
              borderRadius: "999px",
              padding: "6px 16px",
              marginBottom: "20px",
            }}
          >
            <Award size={13} color="#C9A84C" />
            <span style={{ color: "#C9A84C", fontSize: "12px", fontWeight: 600 }}>
              ظ…ط±ط®طµ ظ…ظ† ظ‡ظٹط¦ط© ط§ظ„ظ…ط­ط§ظ…ظٹظ† ط§ظ„ط³ط¹ظˆط¯ظٹظٹظ† | ط±ظ‚ظ… ط§ظ„طھط±ط®ظٹطµ: 421848
            </span>
          </div>

          {/* Firm name pill */}
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginBottom: "12px", letterSpacing: "0.5px" }}>
            ظ…ظƒطھط¨ ط§ظ„ط­ط³ظٹظ† ط¨ظ† ط£ط­ظ…ط¯ ط¨ظ† ط­ط³ظٹظ† ط§ظ„ط³ط¹ط¯ظٹ ظ„ظ„ظ…ط­ط§ظ…ط§ط©
          </p>

          {/* Rotating headline */}
          <h1
            style={{
              fontFamily: "'Noto Kufi Arabic', serif",
              fontSize: "clamp(32px, 4.5vw, 56px)",
              fontWeight: 900,
              color: "white",
              lineHeight: "1.25",
              marginBottom: "20px",
            }}
          >
            <span className="text-gradient-gold">{headlines[headlineIndex]}</span>
          </h1>

          {/* Description */}
          <p
            style={{
              fontSize: "clamp(15px, 2vw, 18px)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: "1.85",
              marginBottom: "32px",
              maxWidth: "500px",
            }}
          >
            ظ…ظƒطھط¨ ظ‚ط§ظ†ظˆظ†ظٹ ظ…طھط®طµطµ ظپظٹ ط¬ط¯ط© â€” ط´ط§ط±ط¹ ط§ظ„طھط­ظ„ظٹط©. ظ†ظ‚ط¯ظ… ط®ط¯ظ…ط§طھظ†ط§ ظپظٹ 17 طھط®طµطµط§ظ‹
            ظ‚ط§ظ†ظˆظ†ظٹط§ظ‹ ظ„ظ„ط£ظپط±ط§ط¯ ظˆط§ظ„ط´ط±ظƒط§طھ ظˆظپظ‚ ط£ط­ط¯ط« ط§ظ„ط£ظ†ط¸ظ…ط© ط§ظ„ط³ط¹ظˆط¯ظٹط©.
          </p>

          {/* CTAs */}
          <div className="btn-group" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "36px" }}>
            <Link href="/contact" className="btn-primary" style={{ fontSize: "15px" }}>
              ط§ط­ط¬ط² ط§ط³طھط´ط§ط±ط© ظ…ط¬ط§ظ†ظٹط©
              <ArrowLeft size={17} style={{ transform: "scaleX(-1)" }} />
            </Link>
            <a
              href="tel:0555545533"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "1.5px solid rgba(201,168,76,0.4)",
                color: "#C9A84C",
                padding: "13px 24px",
                borderRadius: "12px",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                background: "rgba(201,168,76,0.08)",
                transition: "all 0.3s",
              }}
            >
              <Phone size={16} />
              ط§طھطµظ„ ط§ظ„ط¢ظ†
            </a>
          </div>

          {/* Social proof */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <div style={{ display: "flex" }}>
                {[1,2,3,4,5].map((i) => <Star key={i} size={15} fill="#C9A84C" color="#C9A84C" />)}
              </div>
              <span style={{ color: "#C9A84C", fontWeight: 700, fontSize: "14px" }}>4.9</span>
              <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>(300+ ظ…ظˆظƒظ„)</span>
            </div>
            <div style={{ width: "1px", height: "18px", background: "rgba(255,255,255,0.15)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Shield size={14} color="#C9A84C" />
              <span style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px" }}>ط³ط±ظٹط© طھط§ظ…ط© ظˆظ…ط¶ظ…ظˆظ†ط©</span>
            </div>
          </div>
        </div>

        {/* â”€â”€ Visual card column (desktop only) â”€â”€ */}
        <div
          className="hero-visual"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(201,168,76,0.25)",
              borderRadius: "24px",
              padding: "36px 32px",
              textAlign: "center",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              maxWidth: "380px",
              width: "100%",
            }}
          >
            {/* Logo */}
            <div style={{ marginBottom: "20px", paddingBottom: "20px", borderBottom: "1px solid rgba(201,168,76,0.2)" }}>
              <img
                src="/h_logo.png"
                alt="ظ…ظƒطھط¨ ط§ظ„ط­ط³ظٹظ† ط¨ظ† ط£ط­ظ…ط¯ ط¨ظ† ط­ط³ظٹظ† ط§ظ„ط³ط¹ط¯ظٹ ظ„ظ„ظ…ط­ط§ظ…ط§ط©"
                style={{
                  height: "150px",
                  maxWidth: "100%",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                  margin: "0 auto",
                  filter: "brightness(0) invert(1)",
                  opacity: 0.92,
                }}
              />
            </div>

            {/* Quranic verse */}
            <div style={{ fontSize: "40px", color: "rgba(201,168,76,0.25)", fontFamily: "serif", lineHeight: 1, marginBottom: "8px" }}>â‌‌</div>
            <p style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "17px", fontWeight: 700, color: "#C9A84C", lineHeight: "1.8", marginBottom: "8px" }}>
              ط£ط­ط³ظگظ† ط¥ظ„ظ‰ ط§ظ„ظ†ظژظ‘ط§ط³ طھظژط³طھط¹ط¨ظگط¯ظ’ ظ‚ظ„ظˆط¨ظژظ‡ظڈظ…ظڈ<br />ظپط·ط§ظ„ظ…ط§ ط§ط³طھط¹ط¨ط¯ظژ ط§ظ„ط¥ظ†ط³ط§ظ†ظژ ط¥ط­ط³ط§ظ†ظڈ
            </p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", marginBottom: "24px" }}>â€” ط§ظ„ظ…طھظ†ط¨ظٹ</p>

            {/* Stats grid */}
            <div
              style={{
                paddingTop: "20px",
                borderTop: "1px solid rgba(201,168,76,0.15)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              {[
                { num: "300+", label: "ظ…ظˆظƒظ„" },
                { num: "17", label: "طھط®طµطµط§ظ‹" },
                { num: "ط¬ط¯ط©", label: "ط§ظ„طھط­ظ„ظٹط©" },
                { num: "98%", label: "ط±ط¶ط§ ط§ظ„ط¹ظ…ظ„ط§ط،" },
              ].map(({ num, label }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "22px", fontWeight: 900, color: "#C9A84C" }}>{num}</div>
                  <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", marginTop: "2px" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
