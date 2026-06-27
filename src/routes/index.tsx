import { createFileRoute } from "@tanstack/react-router";
import { Megaphone, Globe, Bot, Share2, Search, PenTool, BarChart3, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MD Al Amin — Founder & CEO, 10 Cent Agency" },
      { name: "description", content: "Digital business card for MD Al Amin, Founder & CEO of 10 Cent Agency. Save contact, message on WhatsApp, and connect." },
    ],
  }),
  component: Index,
});

// Icons (inline SVG, no deps)
const Icon = {
  whatsapp: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.555-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
  ),
  facebook: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
  ),
  linkedin: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  ),
  instagram: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
  ),
  youtube: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
  ),
  mail: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
  ),
  phone: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
  ),
  pin: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
  ),
  clock: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  ),
  download: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
  ),
  contact: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><circle cx="12" cy="11" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/></svg>
  ),
  external: (cls = "h-5 w-5") => (
    <svg viewBox="0 0 24 24" className={cls} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
  ),
};

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* SECTION 1 — HERO */}
      <section className="relative bg-background px-6 pt-12 pb-10 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #2F85F3 1px, transparent 1px)",
            backgroundSize: "18px 18px",
            opacity: 0.11,
          }}
        />
        <div className="mx-auto max-w-[480px] flex flex-col items-center text-center">
          <div className="fade-up h-32 w-32 rounded-full overflow-hidden ring-4 ring-accent shadow-sm bg-muted">
            <img src="/founder.jpg" alt="MD Al Amin" className="h-full w-full object-cover" />
          </div>

          <h1 className="fade-up delay-1 mt-5 text-3xl font-bold tracking-tight" style={{ color: "#00346D" }}>
            MD Al Amin
          </h1>
          <p className="fade-up delay-1 mt-1 text-sm font-medium" style={{ color: "#2F85F3" }}>
            Founder &amp; CEO, 10 Cent Agency
          </p>

          <p className="fade-up delay-2 mt-4 text-[15px] leading-relaxed text-foreground max-w-[280px]">
            Helping small &amp; medium businesses across Bangladesh grow online through smart marketing, websites, and AI automation that actually deliver results.
          </p>

          <div className="fade-up delay-2 mt-7 w-full space-y-3">
            <a
              href="/contact.vcf"
              target="_blank"
              rel="noopener"
              onClick={(e) => {
                if (typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent)) {
                  e.preventDefault();
                  let fallbackTimer: ReturnType<typeof setTimeout> | null = setTimeout(() => {
                    window.location.href = "/contact.vcf";
                  }, 1200);
                  const clearFallback = () => {
                    if (fallbackTimer !== null) {
                      clearTimeout(fallbackTimer);
                      fallbackTimer = null;
                    }
                    window.removeEventListener("pagehide", clearFallback);
                    window.removeEventListener("blur", clearFallback);
                    document.removeEventListener("visibilitychange", onVisibility);
                  };
                  const onVisibility = () => {
                    if (document.hidden) clearFallback();
                  };
                  window.addEventListener("pagehide", clearFallback);
                  window.addEventListener("blur", clearFallback);
                  document.addEventListener("visibilitychange", onVisibility);
                  window.location.href =
                    "intent://contacts/people/#Intent;action=android.intent.action.INSERT;type=vnd.android.cursor.dir/contact;S.name=MD%20Al%20Amin;S.phone=%2B8801616144114;i.phone_type=2;S.email=rtxalamin1%40gmail.com;i.email_type=1;S.company=10%20Cent%20Agency;S.job_title=Founder%20%26%20CEO;end";
                }
              }}
              className="w-full flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold text-white transition active:scale-[0.98]"
              style={{ backgroundColor: "#2F85F3" }}
            >
              {Icon.contact("h-5 w-5")}
              View Contact
            </a>


            <a
              href="https://wa.me/8801616144114"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold bg-white transition active:scale-[0.98]"
              style={{ border: "1.5px solid #B6D7FF", color: "#00346D" }}
            >
              <span style={{ color: "#25D366" }}>{Icon.whatsapp("h-5 w-5")}</span>
              Message on WhatsApp
            </a>
          </div>

          <div className="fade-up delay-3 mt-6 flex items-center justify-center gap-4">
            <SocialCircle href="https://www.facebook.com/fardin.alamin/" label="Facebook">{Icon.facebook()}</SocialCircle>
            <SocialCircle href="https://www.linkedin.com/in/fardinalamin/" label="LinkedIn">{Icon.linkedin()}</SocialCircle>
            <SocialCircle href="mailto:rtxalamin1@gmail.com" label="Email">{Icon.mail()}</SocialCircle>
            <SocialCircle href="tel:+8801616144114" label="Phone">{Icon.phone()}</SocialCircle>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 w-full" style={{ backgroundColor: "#F5F7FA" }} />

      {/* SECTION 2 — COMPANY */}
      <section className="px-6 py-12" style={{ backgroundColor: "#F5F7FA" }}>
        <div className="mx-auto max-w-[480px]">
          <div className="flex flex-col items-center text-center">
            <div className="fade-up h-20 w-[11rem] rounded-2xl bg-white flex items-center justify-center p-3 border border-border">
              <img src="/logo.svg" alt="10 Cent Agency" className="h-full w-full object-contain" />
            </div>
            <p className="fade-up delay-1 mt-4 text-[11px] font-semibold tracking-[0.18em]" style={{ color: "#2F85F3" }}>
              PROFESSIONAL · AFFORDABLE · UNSTOPPABLE
            </p>
          </div>

          <p className="fade-up delay-2 mt-6 text-[15px] leading-relaxed text-foreground">
            10 Cent Agency is a full-service digital marketing agency based in Dhaka, helping small &amp; medium businesses, startups, and entrepreneurs grow online — through Facebook &amp; Meta marketing, website development, AI automation, and social media management. Premium quality, SMB-friendly pricing.
          </p>

          {/* Services */}
          <div className="fade-up delay-2 mt-8">
            <h2 className="text-lg font-bold" style={{ color: "#00346D" }}>Our Services</h2>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { name: "Facebook & Meta Marketing", icon: <Megaphone size={20} style={{ color: "#2F85F3" }} />, url: "https://www.10centagency.com/services/facebook-meta-marketing" },
                { name: "Website Development", icon: <Globe size={20} style={{ color: "#2F85F3" }} />, url: "https://www.10centagency.com/services/website-development" },
                { name: "AI Automation & Chatbot", icon: <Bot size={20} style={{ color: "#2F85F3" }} />, url: "https://www.10centagency.com/services/ai-automation-chatbot" },
                { name: "Social Media Management", icon: <Share2 size={20} style={{ color: "#2F85F3" }} />, url: "https://www.10centagency.com/services/social-media-management" },
                { name: "SEO", icon: <Search size={20} style={{ color: "#2F85F3" }} />, url: "https://www.10centagency.com/services/seo" },
                { name: "Graphic Design", icon: <PenTool size={20} style={{ color: "#2F85F3" }} />, url: "https://www.10centagency.com/services/graphic-design" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center rounded-2xl bg-white border border-border p-4 text-center transition active:scale-[0.98] hover:bg-muted"
                >
                  <div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#B6D7FF" }}>
                    {s.icon}
                  </div>
                  <span className="mt-2 text-xs font-bold leading-tight" style={{ color: "#2D3748" }}>{s.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact card */}
          <div className="fade-up delay-2 mt-6 rounded-2xl bg-white border border-border p-5 space-y-4">
            <ContactRow icon={Icon.phone()} href="tel:+8801615144114">+880 1615-144114</ContactRow>
            <ContactRow icon={Icon.mail()} href="mailto:hello@10centagency.com">hello@10centagency.com</ContactRow>
            <ContactRow icon={Icon.pin()}>East Monipur, Mirpur, Dhaka, Bangladesh — 1216</ContactRow>
            <ContactRow icon={Icon.clock()}>Sat–Thu, 10:00 AM – 9:00 PM (BST, UTC+6)</ContactRow>
          </div>

          {/* Social row */}
          <div className="fade-up delay-3 mt-6 flex items-center justify-center gap-3 flex-wrap">
            <SocialOutline href="https://facebook.com/10centagency" label="Facebook">{Icon.facebook()}</SocialOutline>
            <SocialOutline href="https://instagram.com/10centagency" label="Instagram">{Icon.instagram()}</SocialOutline>
            <SocialOutline href="https://youtube.com/@10centagency" label="YouTube">{Icon.youtube()}</SocialOutline>
            <SocialOutline href="https://linkedin.com/company/10-cent-agency" label="LinkedIn">{Icon.linkedin()}</SocialOutline>
            <SocialOutline href="https://wa.me/8801615144114" label="WhatsApp">{Icon.whatsapp()}</SocialOutline>
          </div>

          <a
            href="https://www.10centagency.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up delay-3 mt-7 w-full flex items-center justify-center gap-2 rounded-2xl px-5 py-4 text-base font-semibold text-white transition active:scale-[0.98]"
            style={{ backgroundColor: "#00346D" }}
          >
            Explore our website
            {Icon.external("h-4 w-4")}
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-6 text-center" style={{ backgroundColor: "#00346D" }}>
        <p className="text-sm font-medium tracking-wide" style={{ color: "#B6D7FF" }}>
          Professional | Affordable | Unstoppable
        </p>
      </footer>
    </main>
  );
}

function SocialCircle({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-11 w-11 rounded-full flex items-center justify-center transition active:scale-95"
      style={{ backgroundColor: "#B6D7FF", color: "#00346D" }}
    >
      {children}
    </a>
  );
}

function SocialOutline({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-11 w-11 rounded-full flex items-center justify-center bg-white transition active:scale-95"
      style={{ border: "1.5px solid #B6D7FF", color: "#00346D" }}
    >
      {children}
    </a>
  );
}

function ContactRow({ icon, href, children }: { icon: React.ReactNode; href?: string; children: React.ReactNode }) {
  const content = (
    <div className="flex items-start gap-3">
      <div className="shrink-0 h-9 w-9 rounded-full flex items-center justify-center" style={{ backgroundColor: "#B6D7FF", color: "#00346D" }}>
        {icon}
      </div>
      <span className="text-[15px] leading-snug pt-1.5 min-w-0" style={{ color: "#2D3748" }}>{children}</span>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}
