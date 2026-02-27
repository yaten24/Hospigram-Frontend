import {
  FaHospital,
  FaFlask,
  FaWaveSquare,
  FaXRay,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MegaFooter() {
  const { t } = useTranslation();
  const phoneNumber = "+91 99999 99999";

  return (
    <footer className="w-full bg-gray-900 text-gray-300">

      {/* ================= TOP TRUST STRIP ================= */}
      <div className="border-b border-gray-800">
        <div className="w-full px-10 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          <TrustItem
            icon={<FaHospital />}
            title={t("footer.trust.hospitals.title")}
            desc={t("footer.trust.hospitals.desc")}
          />
          <TrustItem
            icon={<FaFlask />}
            title={t("footer.trust.labs.title")}
            desc={t("footer.trust.labs.desc")}
          />
          <TrustItem
            icon={<FaShieldAlt />}
            title={t("footer.trust.secure.title")}
            desc={t("footer.trust.secure.desc")}
          />
          <TrustItem
            icon={<FaPhoneAlt />}
            title={t("footer.trust.support.title")}
            desc={t("footer.trust.support.desc")}
          />
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="w-full px-10 py-16 grid gap-12 lg:grid-cols-5">

        {/* BRAND */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-extrabold text-white">
            {t("brandName")}
          </h2>
          <p className="text-gray-400 mt-3 max-w-md">
            {t("footer.about")}
          </p>

          {/* CONTACT */}
          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-red-500" />
              <a href={`tel:${phoneNumber.replace(/\s+/g, "")}`}>
                {phoneNumber}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-red-500" />
              {t("footer.email")}
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-red-500" />
              {t("footer.country")}
            </p>
          </div>
        </div>

        {/* SERVICES */}
        <FooterColumn title={t("footer.services.title")}>
          <FooterLink to="/hospitals" label={t("hospitals")} />
          <FooterLink to="/labs" label={t("labs")} />
          <FooterLink to="/ultrasound" label={t("ultrasound")} />
          <FooterLink to="/xray" label={t("xray")} />
          <FooterLink
            to="/health-checkups"
            label={t("footer.services.checkups")}
          />
        </FooterColumn>

        {/* PATIENTS */}
        <FooterColumn title={t("footer.patients.title")}>
          <FooterLink to="/how-it-works" label={t("how.title")} />
          <FooterLink to="/support" label={t("support")} />
          <FooterLink to="/faqs" label={t("faq")} />
          <FooterLink to="/contact" label={t("contact")} />
        </FooterColumn>

        {/* PARTNERS */}
        <FooterColumn title={t("footer.partners.title")}>
          <FooterLink to="/become-partner" label={t("partnerWithUs")} />
          <FooterLink to="/hospital-login" label={t("footer.partners.hospitalLogin")} />
          <FooterLink to="/lab-login" label={t("footer.partners.labLogin")} />
        </FooterColumn>

      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-gray-800">
        <div className="w-full px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <span>
            © {new Date().getFullYear()} {t("brandName")}. {t("footer.rights")}
          </span>

          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">
              {t("privacyPolicy")}
            </Link>
            <Link to="/terms" className="hover:text-white">
              {t("termsConditions")}
            </Link>
            <Link to="/disclaimer" className="hover:text-white">
              {t("footer.disclaimer")}
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}

/* ================= COMPONENTS ================= */

function TrustItem({ icon, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="text-red-500 text-2xl">{icon}</div>
      <div>
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-sm text-gray-400 mt-1">{desc}</p>
      </div>
    </div>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-4">
        {title}
      </h4>
      <div className="space-y-3 text-sm">
        {children}
      </div>
    </div>
  );
}

function FooterLink({ to, label }) {
  return (
    <Link
      to={to}
      className="block hover:text-white transition"
    >
      {label}
    </Link>
  );
}
