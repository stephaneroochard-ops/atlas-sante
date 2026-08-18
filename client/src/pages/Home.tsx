/* Atlas Santé — Clinique de confiance: hero asymétrique bleu médical, cartes translucides et support RTL pensé dès la fondation. */
import { useEffect, useState } from "react";
import { ArrowRight, CalendarCheck2, CheckCircle2, ClipboardPlus, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

const copy = {
  fr: {
    eyebrow: "Une expérience pensée pour vous",
    title: "Des soins clairs, à votre rythme.",
    description: "Retrouvez les informations essentielles de votre cabinet, préparez votre rendez-vous et échangez dans la langue qui vous convient.",
    primaryCta: "Découvrir les services",
    secondaryCta: "Préparer une visite",
    proof: "Un accueil clair en français et en العربية.",
    statOne: "Parcours fluide", statOneLabel: "l’essentiel, sans détour",
    statTwo: "FR · عربي", statTwoLabel: "une expérience bilingue fluide",
    availability: "Prendre rendez-vous",
    availabilityDetail: "Contactez directement le cabinet",
    approachLabel: "Une attention qui se voit",
    approachTitle: "Vous guider avec clarté, avant même votre visite.",
    approachText: "Chaque information trouve sa place : présenter les soins, répondre aux premières questions et faciliter le contact avec votre équipe de santé.",
    points: ["Informations essentielles faciles à trouver", "Une expérience confortable sur chaque écran", "Le français et l’arabe dans un même parcours"],
    learn: "Découvrir notre approche",
    hints: [
      ["Votre parcours", "Les informations utiles, avec clarté."],
      ["Préparer la consultation", "Anticipez votre visite en quelques instants."],
      ["Français · العربية", "Choisissez votre langue, naturellement."],
    ],
  },
  ar: {
    eyebrow: "تجربة مصممة من أجلك",
    title: "رعاية واضحة، وفق إيقاعك.",
    description: "اكتشف المعلومات الأساسية عن عيادتك، حضّر موعدك وتواصل باللغة التي تناسبك.",
    primaryCta: "اكتشف الخدمات",
    secondaryCta: "حضّر زيارتك",
    proof: "ترحيب واضح بالفرنسية والعربية.",
    statOne: "مسار سلس", statOneLabel: "المهم، من دون تعقيد",
    statTwo: "FR · عربي", statTwoLabel: "تجربة ثنائية اللغة بسلاسة",
    availability: "حجز موعد",
    availabilityDetail: "تواصل مباشرة مع العيادة",
    approachLabel: "اهتمام يظهر في التفاصيل",
    approachTitle: "نرشدك بوضوح، حتى قبل موعدك.",
    approachText: "لكل معلومة مكانها: التعرّف إلى العلاجات، الإجابة عن الأسئلة الأولى وتسهيل التواصل مع فريقك الصحي.",
    points: ["معلومات أساسية يسهل الوصول إليها", "تجربة مريحة على كل شاشة", "الفرنسية والعربية في مسار واحد"],
    learn: "اكتشف نهجنا",
    hints: [
      ["مسارك", "المعلومات المفيدة بوضوح."],
      ["حضّر استشارتك", "استعد لزيارتك في لحظات."],
      ["Français · العربية", "اختر لغتك بكل بساطة."],
    ],
  },
};

export default function Home() {
  const [isArabic, setIsArabic] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = isArabic ? copy.ar : copy.fr;

  useEffect(() => {
    document.documentElement.lang = isArabic ? "ar" : "fr";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.title = isArabic ? "أطلس للصحة — واجهة طبية ثنائية اللغة" : "Atlas Santé — Squelette médical bilingue";
    setMenuOpen(false);
  }, [isArabic]);

  return (
    <div className={`atlas-shell ${isArabic ? "atlas-font-ar" : ""}`} dir={isArabic ? "rtl" : "ltr"}>
      <section className="atlas-hero" id="accueil">
        <SiteHeader isArabic={isArabic} menuOpen={menuOpen} onToggleLanguage={() => setIsArabic((value) => !value)} onToggleMenu={() => setMenuOpen((value) => !value)} />
        <main className="atlas-container atlas-hero__content" id="main-content">
          <div className="atlas-hero__copy">
            <span className="atlas-eyebrow"><span className="atlas-eyebrow__dot" />{t.eyebrow}</span>
            <h1 data-field={isArabic ? "business.tagline.ar" : "business.tagline.fr"}>{t.title}</h1>
            <p className="atlas-hero__description" data-field={isArabic ? "business.description.ar" : "business.description.fr"}>{t.description}</p>
            <div className="atlas-hero__actions">
              <a className="atlas-button atlas-button--light" href="#approche">{t.primaryCta}<ArrowRight size={16} className={isArabic ? "rotate-180" : ""} aria-hidden="true" /></a>
              <a className="atlas-button atlas-button--ghost" href="#rendez-vous"><CalendarCheck2 size={16} aria-hidden="true" />{t.secondaryCta}</a>
            </div>
            <p className="atlas-hero__proof">{t.proof}</p>
            <div className="atlas-hero__stats" aria-label={isArabic ? "مؤشرات الموقع" : "Indicateurs du site"}>
              <div className="atlas-stat"><span className="atlas-stat__icon"><HeartPulse size={17} /></span><span><span className="atlas-stat__value">{t.statOne}</span><span className="atlas-stat__label">{t.statOneLabel}</span></span></div>
              <div className="atlas-stat"><span className="atlas-stat__icon"><GlobeIcon /></span><span><span className="atlas-stat__value">{t.statTwo}</span><span className="atlas-stat__label">{t.statTwoLabel}</span></span></div>
            </div>
          </div>
        </main>
        <aside className="atlas-hero__float" aria-label={isArabic ? "مؤشر جودة" : "Indicateur de qualité"}>
          <div className="atlas-float__top"><span className="atlas-float__number">AA</span><span className="atlas-float__muted">contraste</span></div>
          <p className="atlas-float__caption">{isArabic ? "قراءة مريحة ومحتوى واضح." : "Lisibilité et contenu clair."}</p>
        </aside>
        <aside className="atlas-hero__float atlas-hero__float--appointment" id="rendez-vous">
          <div className="atlas-float__top"><span className="atlas-float__icon"><ClipboardPlus size={17} /></span><span><span className="atlas-float__title">{t.availability}</span><span className="atlas-float__availability">{t.availabilityDetail}</span></span></div>
        </aside>
      </section>

      <section className="atlas-services-strip" aria-label={isArabic ? "أسس الواجهة" : "Fondations du thème"}>
        <div className="atlas-container atlas-services-strip__grid">
          {t.hints.map(([title, text], index) => {
            const Icon = [Stethoscope, CalendarCheck2, ShieldCheck][index];
            return <article className="atlas-service-hint" key={title}><span className="atlas-service-hint__icon"><Icon size={20} /></span><span><span className="atlas-service-hint__title">{title}</span><span className="atlas-service-hint__text">{text}</span></span></article>;
          })}
        </div>
      </section>

      <section className="atlas-foundation" id="approche">
        <div className="atlas-container atlas-foundation__grid">
          <div className="atlas-foundation__media">
            <div className="atlas-foundation__shape" />
            <img className="atlas-foundation__image" src="/manus-storage/atlas-sante-consultation_c0c999f5.jpg" alt={isArabic ? "طبيبة تستمع إلى مريضتها" : "Une médecin à l’écoute de sa patiente"} />
          </div>
          <div className="atlas-foundation__content">
            <span className="atlas-section-label">{t.approachLabel}</span>
            <h2>{t.approachTitle}</h2>
            <p>{t.approachText}</p>
            <span className="atlas-bilingual-chip">{isArabic ? "العربية · Français" : "Français · العربية"}</span>
            <ul className="atlas-points">{t.points.map((point) => <li key={point}><CheckCircle2 size={18} aria-hidden="true" />{point}</li>)}</ul>
            <a className="atlas-button" style={{ background: "var(--color-primary)", color: "white" }} href="#accueil">{t.learn}<ArrowRight size={16} className={isArabic ? "rotate-180" : ""} aria-hidden="true" /></a>
          </div>
        </div>
      </section>
      <SiteFooter isArabic={isArabic} />
    </div>
  );
}

function GlobeIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
}
