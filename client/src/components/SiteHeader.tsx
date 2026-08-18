/* Atlas Santé — Clinique de confiance: navigation nette et rassurante, conçue simultanément pour FR et AR RTL. */
import { Clock3, Globe2, MapPin, Menu, Phone, X } from "lucide-react";

type SiteHeaderProps = {
  isArabic: boolean;
  menuOpen: boolean;
  onToggleLanguage: () => void;
  onToggleMenu: () => void;
};

const copy = {
  fr: {
    phone: "+212 5 22 00 00 00",
    city: "Casablanca, Maroc",
    hours: "Lun. – Sam. : 9h00 – 18h00",
    name: "Atlas Santé",
    descriptor: "Votre santé, avec clarté",
    nav: ["Accueil", "À propos", "Services", "Équipe", "Contact"],
    appointment: "Prendre rendez-vous",
  },
  ar: {
    phone: "+212 5 22 00 00 00",
    city: "الدار البيضاء، المغرب",
    hours: "الإثنين – السبت: 09:00 – 18:00",
    name: "أطلس للصحة",
    descriptor: "وضوح يرافق صحتك",
    nav: ["الرئيسية", "من نحن", "الخدمات", "الفريق", "تواصل"],
    appointment: "حجز موعد",
  },
};

export function SiteHeader({ isArabic, menuOpen, onToggleLanguage, onToggleMenu }: SiteHeaderProps) {
  const t = isArabic ? copy.ar : copy.fr;

  return (
    <header>
      <div className="atlas-utility">
        <div className="atlas-container atlas-utility__inner">
          <div className="atlas-utility__group">
            <a className="atlas-utility__item" href="tel:+212522000000" dir="ltr">
              <Phone size={13} aria-hidden="true" />
              <span data-field="contact.phone">{t.phone}</span>
            </a>
            <span className="atlas-utility__item atlas-utility__item--address">
              <MapPin size={13} aria-hidden="true" />
              <span>{t.city}</span>
            </span>
          </div>
          <div className="atlas-utility__group atlas-utility__group--desktop">
            <span className="atlas-utility__item">
              <Clock3 size={13} aria-hidden="true" />
              <span>{t.hours}</span>
            </span>
          </div>
        </div>
      </div>
      <nav className="atlas-nav" aria-label={isArabic ? "التنقل الرئيسي" : "Navigation principale"}>
        <div className="atlas-container atlas-nav__inner">
          <a className="atlas-brand" href="#accueil" aria-label={t.name}>
            <img className="atlas-brand__mark" data-field="brand.logo" src="/manus-storage/atlas-sante-symbol_ea784670.png" alt="" />
            <span className="atlas-brand__text">
              <span className="atlas-brand__name" data-field="business.name">{t.name}</span>
              <span className="atlas-brand__tagline">{t.descriptor}</span>
            </span>
          </a>
          <div className={`atlas-nav__links ${menuOpen ? "atlas-nav__links--open" : ""}`}>
            {t.nav.map((item, index) => (
              <a key={item} className="atlas-nav__link" href={index === 0 ? "#accueil" : index === 1 ? "#approche" : "#"}>
                {item}
              </a>
            ))}
          </div>
          <div className="atlas-nav__cta">
            <a className="atlas-button atlas-button--light" href="#rendez-vous">{t.appointment}</a>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="atlas-language" onClick={onToggleLanguage} aria-label={isArabic ? "Passer au français" : "التبديل إلى العربية"}>
              <Globe2 size={13} className="inline-block align-[-2px] me-1" aria-hidden="true" />
              {isArabic ? "FR" : "AR"}
            </button>
            <button type="button" className="atlas-menu-button" onClick={onToggleMenu} aria-expanded={menuOpen} aria-label={menuOpen ? (isArabic ? "إغلاق القائمة" : "Fermer le menu") : isArabic ? "فتح القائمة" : "Ouvrir le menu"}>
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
