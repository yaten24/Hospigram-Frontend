import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function TopInfoBar() {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 w-full z-50 h-10 bg-red-700 text-white text-xs hidden sm:flex">
      <div className="w-full h-full flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4 font-medium">
          <span>{t("trusted")} | {t("support24")}</span>
          <span className="h-3 w-px bg-white/40" />
          <a href="tel:+919999999999" className="flex items-center gap-2 hover:underline">
            <FaPhoneAlt className="text-[11px]" /> +91 99999 99999
          </a>
          <a href="mailto:support@hospigram.com" className="flex items-center gap-2 hover:underline">
            <FaEnvelope className="text-[11px]" /> support@hospigram.com
          </a>
        </div>

        <Link
          to="/partner-login"
          className="px-3 py-1 border border-white/40 rounded-md
                     text-[11px] font-semibold hover:bg-white
                     hover:text-red-700 transition"
        >
          {t("partnerWithUs")}
        </Link>
      </div>
    </div>
  );
}
