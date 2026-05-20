import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AIChatWidget from "@/components/ai/AIChatWidget";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import CookieConsent from "@/components/ui/CookieConsent";
import { Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "المدونة القانونية",
  description: "مقالات وتحليلات قانونية متخصصة في القانون السعودي من مكتب الحسين بن أحمد بن حسين السعدي للمحاماة.",
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await prisma.post.findMany({
    where: { category: "blog", published: true },
    orderBy: { publishedAt: "desc" },
    select: { id: true, title: true, slug: true, excerpt: true, publishedAt: true, createdAt: true },
  });

  return (
    <>
      <Header />
      <main style={{ paddingTop: "72px" }}>
        {/* Hero */}
        <section className="gradient-hero" style={{ padding: "72px 24px", textAlign: "center" }}>
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <p style={{ color: "#C9A84C", fontWeight: 600, fontSize: "14px", letterSpacing: "2px", marginBottom: "12px" }}>
              المعرفة القانونية
            </p>
            <h1 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "44px", fontWeight: 900, color: "white", marginBottom: "16px" }}>
              المدونة القانونية
            </h1>
            <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.7)", lineHeight: "1.8" }}>
              مقالات متخصصة وتحليلات معمّقة في القانون السعودي من مكتب السعدي للمحاماة
            </p>
          </div>
        </section>

        {/* Posts Grid */}
        <section style={{ background: "#FAFAF8", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            {posts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "80px 0", color: "#6B6B6B" }}>
                <BookOpen size={48} style={{ margin: "0 auto 16px", opacity: 0.3 }} />
                <p style={{ fontSize: "18px", fontWeight: 600 }}>لا توجد مقالات منشورة بعد</p>
                <p style={{ fontSize: "14px", marginTop: "8px", opacity: 0.7 }}>تابعنا قريباً لأحدث المقالات القانونية</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "24px" }}>
                {posts.map((post) => {
                  const date = post.publishedAt ?? post.createdAt;
                  return (
                    <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                      <article className="card" style={{ height: "100%", display: "flex", flexDirection: "column", gap: "14px", cursor: "pointer" }}>
                        <h2 style={{ fontFamily: "'Noto Kufi Arabic', serif", fontSize: "19px", fontWeight: 700, color: "#1A2744", lineHeight: "1.5", flex: 1 }}>
                          {post.title}
                        </h2>
                        {post.excerpt && (
                          <p style={{ fontSize: "14px", color: "#6B6B6B", lineHeight: "1.7" }}>
                            {post.excerpt.slice(0, 180)}{post.excerpt.length > 180 ? "..." : ""}
                          </p>
                        )}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "12px", borderTop: "1px solid #E5E5E0" }}>
                          <span style={{ fontSize: "13px", color: "#6B6B6B", display: "flex", alignItems: "center", gap: "6px" }}>
                            <Calendar size={13} />
                            {new Date(date).toLocaleDateString("ar-SA", { year: "numeric", month: "long", day: "numeric" })}
                          </span>
                          <span style={{ color: "#C9A84C", fontSize: "13px", fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}>
                            اقرأ المزيد <ArrowLeft size={13} style={{ transform: "scaleX(-1)" }} />
                          </span>
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            )}
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
