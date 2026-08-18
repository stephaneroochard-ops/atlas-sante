/* Atlas Santé — Clinique de confiance: un pied de page léger qui conclut la première fondation sans alourdir la page. */
type SiteFooterProps = { isArabic: boolean };

export function SiteFooter({ isArabic }: SiteFooterProps) {
  const t = isArabic
    ? { copyright: "حضور رقمي واضح ومطمئن لصحتك.", legal: "معلومات قانونية", privacy: "الخصوصية" }
    : { copyright: "Une présence en ligne claire et rassurante pour votre santé.", legal: "Mentions légales", privacy: "Confidentialité" };

  return (
    <footer className="atlas-footer">
      <div className="atlas-container atlas-footer__inner">
        <p className="atlas-footer__text">© 2026 Atlas Santé — {t.copyright}</p>
        <nav className="atlas-footer__links" aria-label={isArabic ? "روابط ثانوية" : "Liens secondaires"}>
          <a href="#">{t.legal}</a>
          <a href="#">{t.privacy}</a>
        </nav>
      </div>
    </footer>
  );
}
