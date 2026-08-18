/* Atlas Santé — Clinique de confiance: formulaire local, lisible et patient-facing; aucun envoi réseau sans intégration validée. */
import { useState, type FormEvent } from "react";
import { CheckCircle2, ChevronDown, LockKeyhole, Send } from "lucide-react";
import { Input } from "@/components/ui/input";

type AppointmentFormProps = { isArabic: boolean };

const copy = {
  fr: {
    name: "Votre nom complet", phone: "Téléphone", service: "Motif de votre visite", slot: "Créneau souhaité", message: "Un détail à nous communiquer ?", placeholder: "Décrivez brièvement votre besoin.",
    services: ["Consultation", "Suivi", "Bilan de prévention", "Autre demande"],
    submit: "Préparer mon rendez-vous", privacy: "Vos informations servent uniquement à préparer votre demande de rendez-vous.",
    success: "Votre demande est prête à être confirmée avec le cabinet.", required: "Veuillez renseigner les champs obligatoires.",
  },
  ar: {
    name: "الاسم الكامل", phone: "رقم الهاتف", service: "سبب الزيارة", slot: "الموعد المفضل", message: "هل هناك تفصيل تود مشاركته؟", placeholder: "صف حاجتك باختصار.",
    services: ["استشارة", "متابعة", "فحص وقائي", "طلب آخر"],
    submit: "تحضير موعدي", privacy: "تُستخدم معلوماتك فقط لتحضير طلب الموعد.",
    success: "طلبك جاهز لتأكيده مع العيادة.", required: "يرجى تعبئة الحقول المطلوبة.",
  },
};

export function AppointmentForm({ isArabic }: AppointmentFormProps) {
  const t = isArabic ? copy.ar : copy.fr;
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const complete = ["name", "phone", "service", "slot"].every((field) => String(data.get(field) || "").trim());
    setStatus(complete ? "success" : "error");
  }

  return (
    <form className="atlas-appointment-form" onSubmit={handleSubmit} onInput={() => status !== "idle" && setStatus("idle")} noValidate aria-describedby="appointment-form-status">
      <div className="atlas-form-grid">
        <label className="atlas-form-field"><span>{t.name}<b aria-hidden="true">*</b></span><Input required name="name" placeholder={t.name} className="atlas-form-input" /></label>
        <label className="atlas-form-field"><span>{t.phone}<b aria-hidden="true">*</b></span><Input required name="phone" inputMode="tel" placeholder="+212 6 00 00 00 00" className="atlas-form-input" dir="ltr" /></label>
        <label className="atlas-form-field"><span>{t.service}<b aria-hidden="true">*</b></span><span className="atlas-select-wrap"><select required name="service" defaultValue="" className="atlas-form-select"><option value="" disabled>—</option>{t.services.map((service) => <option key={service} value={service}>{service}</option>)}</select><ChevronDown size={16} aria-hidden="true" /></span></label>
        <label className="atlas-form-field"><span>{t.slot}<b aria-hidden="true">*</b></span><Input required name="slot" type="datetime-local" className="atlas-form-input" dir="ltr" /></label>
      </div>
      <label className="atlas-form-field atlas-form-field--wide"><span>{t.message}</span><textarea name="message" rows={3} placeholder={t.placeholder} className="atlas-form-textarea" /></label>
      <div className="atlas-form-footer">
        <p className="atlas-form-privacy"><LockKeyhole size={14} aria-hidden="true" />{t.privacy}</p>
        <button className="atlas-button atlas-button--blue" type="submit"><Send size={15} aria-hidden="true" />{t.submit}</button>
      </div>
      {status === "error" && <p id="appointment-form-status" className="atlas-form-message atlas-form-message--error" role="alert">{t.required}</p>}
      {status === "success" && <p id="appointment-form-status" className="atlas-form-message atlas-form-message--success" role="status" aria-live="polite"><CheckCircle2 size={17} aria-hidden="true" />{t.success}</p>}
    </form>
  );
}
