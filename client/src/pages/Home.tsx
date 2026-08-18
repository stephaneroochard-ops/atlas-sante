/* Atlas Santé — Clinique de confiance: hero asymétrique bleu médical, cartes translucides et support RTL pensé dès la fondation. */
import { useEffect, useState } from "react";
import { ArrowRight, CalendarCheck2, CheckCircle2, ClipboardPlus, HeartPulse, ShieldCheck, Stethoscope, Languages, MapPinned, MessageCircleHeart, Sparkles, Smartphone, ChevronDown, Mail, PhoneCall, Clock3, Navigation } from "lucide-react";
import { AppointmentForm } from "@/components/AppointmentForm";
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
    servicesLabel: "Les soins, avec simplicité",
    servicesTitle: "Les informations essentielles, à portée de main.",
    servicesIntro: "Présentez clairement les motifs de consultation et les informations dont vos patients ont besoin avant leur visite.",
    services: [["Consultation", "Présentez la première rencontre avec votre praticien, dans un langage simple et rassurant."], ["Prévention", "Aidez vos patients à comprendre les démarches de prévention et les bilans proposés."], ["Suivi", "Expliquez comment le cabinet accompagne chaque patient au fil de son parcours."], ["Conseils", "Réunissez les réponses utiles pour que chaque visite soit mieux préparée."]],
    more: "En savoir plus",
    trustLabel: "Un parcours plus serein",
    trustTitle: "L’essentiel de votre cabinet, avec attention et clarté.",
    trustText: "Vos patients s’orientent sans surcharge d’information. Chaque repère favorise un contact simple, respectueux et lisible avec votre équipe de santé.",
    trustBadgeTitle: "Un échange plus simple", trustBadgeText: "Les bonnes informations au bon moment.",
    trustItems: [["Depuis votre mobile", "Une consultation du site adaptée à chaque écran."], ["Dans votre langue", "Le français et l’arabe intégrés avec soin."], ["Avant votre visite", "Des repères utiles pour mieux vous préparer."], ["À votre écoute", "Un point de contact clair avec le cabinet."]],
    appointmentLabel: "Demande de rendez-vous",
    appointmentTitle: "Préparez votre visite en quelques instants.",
    appointmentText: "Indiquez vos coordonnées, le motif de votre visite et le créneau qui vous convient. Vous pourrez ensuite confirmer ce créneau avec le cabinet.",
    appointmentNote: "Le créneau est confirmé avec le cabinet afin de vous accueillir dans les meilleures conditions.",
    faqLabel: "Questions fréquentes",
    faqTitle: "Les réponses utiles avant votre visite.",
    faqText: "Retrouvez les premiers repères pratiques. Pour toute question particulière, le cabinet reste à votre écoute.",
    faqLanguage: "Français · العربية, avec la même attention",
    faq: [["Comment préparer ma première visite ?", "Rassemblez simplement les informations ou documents que vous souhaitez présenter. Le cabinet vous indiquera les éléments utiles au moment de confirmer votre rendez-vous."], ["Puis-je faire une demande de rendez-vous en ligne ?", "Oui. Indiquez votre nom, votre numéro, le motif de votre visite et le créneau souhaité. Le cabinet revient ensuite vers vous pour confirmer."], ["Puis-je échanger en français ou en arabe ?", "Le parcours de contact est disponible dans les deux langues. Choisissez celle qui vous met le plus à l’aise pour préparer votre visite."], ["Où trouver les horaires et l’itinéraire ?", "Les coordonnées et informations d’accès sont présentées ci-dessous. Elles sont renseignées par le cabinet afin que chaque patient prépare son déplacement sereinement."]],
    contactLabel: "Informations pratiques",
    contactTitle: "Préparez votre venue avec les bonnes informations.",
    contactText: "Retrouvez les coordonnées, les horaires et l’accès au cabinet en un seul endroit.",
    contactCards: [["Téléphone", "Le numéro du cabinet", "contact.phone"], ["Email", "L’adresse de contact", "contact.email"], ["Horaires", "Les créneaux d’accueil", "contact.hours"]],
    mapTitle: "Accès au cabinet", mapText: "L’adresse et l’itinéraire sont renseignés par le cabinet pour faciliter votre venue.", mapLink: "Préparer mon itinéraire",
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
    servicesLabel: "الرعاية ببساطة",
    servicesTitle: "المعلومات الأساسية في متناول يدك.",
    servicesIntro: "قدّم أسباب الاستشارة والمعلومات التي يحتاج إليها مرضاك بوضوح قبل موعدهم.",
    services: [["استشارة", "قدّم اللقاء الأول مع طبيبك بلغة بسيطة ومطمئنة."], ["وقاية", "ساعد مرضاك على فهم خطوات الوقاية والفحوصات المقترحة."], ["متابعة", "اشرح كيف ترافق العيادة كل مريض خلال مساره الصحي."], ["إرشادات", "اجمع الإجابات المفيدة ليكون كل موعد أكثر استعداداً."]],
    more: "اعرف المزيد",
    trustLabel: "مسار أكثر طمأنينة",
    trustTitle: "كل ما يهم عيادتك، بعناية ووضوح.",
    trustText: "يتوجه مرضاك من دون إفراط في المعلومات. كل مؤشر يشجّع على تواصل بسيط ومحترم وواضح مع فريقك الصحي.",
    trustBadgeTitle: "تواصل أبسط", trustBadgeText: "المعلومة المناسبة في الوقت المناسب.",
    trustItems: [["من هاتفك", "تصفّح موقعاً مناسباً لكل شاشة."], ["بلغتك", "الفرنسية والعربية مدمجتان بعناية."], ["قبل زيارتك", "مؤشرات مفيدة للاستعداد بشكل أفضل."], ["نستمع إليك", "نقطة تواصل واضحة مع العيادة."]],
    appointmentLabel: "طلب موعد",
    appointmentTitle: "حضّر زيارتك في لحظات.",
    appointmentText: "أدخل بياناتك وسبب زيارتك والموعد الذي يناسبك. ويمكنك بعد ذلك تأكيد الموعد مع العيادة.",
    appointmentNote: "يُؤكَّد الموعد مع العيادة من أجل استقبال مريح وفي أفضل الظروف.",
    faqLabel: "أسئلة شائعة",
    faqTitle: "الإجابات المفيدة قبل زيارتك.",
    faqText: "اعثر على أهم الإرشادات العملية. ولأي سؤال خاص، تبقى العيادة رهن إشارتك.",
    faqLanguage: "العربية · Français، بالعناية نفسها",
    faq: [["كيف أستعد للزيارة الأولى؟", "اجمع ببساطة المعلومات أو الوثائق التي ترغب في تقديمها. ستخبرك العيادة بالعناصر المفيدة عند تأكيد الموعد."], ["هل يمكنني طلب موعد عبر الإنترنت؟", "نعم. اذكر اسمك ورقمك وسبب الزيارة والموعد المفضل. ثم تتواصل معك العيادة لتأكيد الموعد."], ["هل يمكنني التواصل بالفرنسية أو العربية؟", "مسار التواصل متاح باللغتين. اختر اللغة التي تمنحك أكبر قدر من الراحة قبل زيارتك."], ["أين أجد المواعيد والاتجاهات؟", "تظهر بيانات التواصل والوصول أدناه. تضعها العيادة كي يستعد كل مريض لرحلته براحة." ]],
    contactLabel: "معلومات عملية",
    contactTitle: "حضّر زيارتك بالمعلومات المناسبة.",
    contactText: "اعثر على بيانات التواصل والمواعيد والوصول إلى العيادة في مكان واحد.",
    contactCards: [["الهاتف", "رقم العيادة", "contact.phone"], ["البريد الإلكتروني", "عنوان التواصل", "contact.email"], ["المواعيد", "ساعات الاستقبال", "contact.hours"]],
    mapTitle: "الوصول إلى العيادة", mapText: "تُحدّد العيادة العنوان والاتجاهات لتسهيل زيارتك.", mapLink: "حضّر مسارك",
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
        <AtlasSectionMotif />
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
      <section className="atlas-services" id="services">
        <AtlasSectionMotif tone="dark" />
        <div className="atlas-container">
          <div className="atlas-services__head">
            <div><span className="atlas-section-label" style={{ color: "#a9d0ff" }}>{t.servicesLabel}</span><h2>{t.servicesTitle}</h2></div>
            <p className="atlas-services__intro">{t.servicesIntro}</p>
          </div>
          <div className="atlas-service-grid" data-repeat="services">
            {t.services.map(([title, description], index) => {
              const Icon = [Stethoscope, ShieldCheck, HeartPulse, MessageCircleHeart][index];
              return <article className="atlas-service-card" key={title}><span className="atlas-service-card__icon"><Icon size={21} /></span><div><h3 data-field={isArabic ? "services[].title.ar" : "services[].title.fr"}>{title}</h3><p data-field={isArabic ? "services[].description.ar" : "services[].description.fr"}>{description}</p></div><a className="atlas-service-card__link" href="#rendez-vous">{t.more}<ArrowRight size={14} className={isArabic ? "rotate-180" : ""} /></a></article>;
            })}
          </div>
        </div>
      </section>
      <section className="atlas-trust" id="confiance">
        <AtlasSectionMotif />
        <div className="atlas-container atlas-trust__layout">
          <div className="atlas-trust__image-wrap"><img className="atlas-trust__image" src="/manus-storage/atlas-sante-care-detail_ef72a54c.jpg" alt={isArabic ? "لحظة اهتمام بين مختص ومريض" : "Un geste d’attention entre un professionnel et son patient"} /><div className="atlas-trust__glass"><strong>{t.trustBadgeTitle}</strong><span>{t.trustBadgeText}</span></div></div>
          <div><span className="atlas-section-label">{t.trustLabel}</span><h2>{t.trustTitle}</h2><p className="atlas-trust__description">{t.trustText}</p><div className="atlas-trust-list">{t.trustItems.map(([title, text], index) => { const Icon = [Smartphone, Languages, MapPinned, Sparkles][index]; return <div className="atlas-trust-item" key={title}><Icon className="atlas-trust-item__icon" size={18} /><strong>{title}</strong><span>{text}</span></div>; })}</div></div>
        </div>
      </section>
      <section className="atlas-appointment" id="rendez-vous">
        <AtlasSectionMotif tone="dark" />
        <div className="atlas-container atlas-appointment__layout">
          <div className="atlas-appointment__intro"><span className="atlas-section-label" style={{ color: "#a9d0ff" }}>{t.appointmentLabel}</span><h2>{t.appointmentTitle}</h2><p>{t.appointmentText}</p><span className="atlas-appointment__bilingual"><span lang="fr">Français</span><span aria-hidden="true"> · </span><span lang="ar" dir="rtl">العربية</span></span><p className="atlas-appointment__note">{t.appointmentNote}</p></div>
          <AppointmentForm isArabic={isArabic} />
        </div>
      </section>
      <section className="atlas-faq" id="faq">
        <AtlasSectionMotif />
        <div className="atlas-container atlas-faq__layout">
          <div className="atlas-faq__intro"><span className="atlas-section-label">{t.faqLabel}</span><h2>{t.faqTitle}</h2><p>{t.faqText}</p><span className="atlas-faq__language">{t.faqLanguage}</span></div>
          <div className="atlas-faq-list" data-section="faq">{t.faq.map(([question, answer]) => <details className="atlas-faq-item" key={question}><summary><span data-field={isArabic ? "faq[].q.ar" : "faq[].q.fr"}>{question}</span><ChevronDown size={18} aria-hidden="true" /></summary><p data-field={isArabic ? "faq[].a.ar" : "faq[].a.fr"}>{answer}</p></details>)}</div>
        </div>
      </section>
      <section className="atlas-contact" id="contact">
        <AtlasSectionMotif />
        <div className="atlas-container"><div className="atlas-contact__head"><div><span className="atlas-section-label">{t.contactLabel}</span><h2>{t.contactTitle}</h2></div><p>{t.contactText}</p></div>
          <div className="atlas-contact-grid"><div className="atlas-contact-cards">{t.contactCards.map(([label, text, field], index) => { const Icon = [PhoneCall, Mail, Clock3][index]; return <article className="atlas-contact-card" key={field}><span className="atlas-contact-card__icon"><Icon size={19} /></span><div><strong>{label}</strong><span data-field={field}>{text}</span></div></article>; })}</div>
          <article className="atlas-contact-map"><div className="atlas-contact-map__content"><span className="atlas-contact-map__pin"><MapPinned size={19} /></span><div><h3 data-field="contact.address.city">{t.mapTitle}</h3><p>{t.mapText}</p></div><a className="atlas-contact-map__link" href="#rendez-vous"><Navigation size={15} />{t.mapLink}</a></div></article></div>
        </div>
      </section>
      <SiteFooter isArabic={isArabic} />
    </div>
  );
}

function GlobeIcon() {
  return <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
}

function AtlasSectionMotif({ tone = "light" }: { tone?: "light" | "dark" }) {
  return <span className={`atlas-section-motif atlas-section-motif--${tone}`} aria-hidden="true"><img src="/manus-storage/atlas-sante-symbol_ea784670.png" alt="" /></span>;
}
