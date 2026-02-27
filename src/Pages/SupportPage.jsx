import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadset,
  FaQuestionCircle,
  FaClock,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

import Navbar from "../Shared/Navbar";
import EmergencyBanner from "../Components/EmergencyBanner";
import MegaFooter from "../Shared/Footer";

/* ====================== PAGE ====================== */

export default function SupportPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-gray-50">

      <Navbar />

      {/* ✅ DESKTOP NAVBAR SPACER (FIXES OVERLAP) */}
      <div className="hidden sm:block" />

      {/* ================= HERO ================= */}
      <section className="w-full bg-white py-10 sm:py-20 animate-fadeUp">
        <div className="w-full px-4 sm:px-8 lg:px-10">
          <div className="max-w-3xl mx-auto text-center">

            <span className="inline-block mb-3 px-4 py-1 bg-red-600
                             text-xs font-semibold tracking-wide text-white">
              {t("supportPage.badge", { defaultValue: "WE ARE HERE TO HELP" })}
            </span>

            <h1 className="text-xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
              {t("supportPage.title", { defaultValue: "Hospigram Support" })}
            </h1>

            <p className="mt-3 sm:mt-6 text-sm sm:text-lg text-gray-600">
              {t("supportPage.subtitle", {
                defaultValue:
                  "Need help with bookings, appointments, lab tests, or reports? Our support team is always available.",
              })}
            </p>

          </div>
        </div>
      </section>

      {/* ================= SUPPORT OPTIONS ================= */}
      <section className="w-full py-10 sm:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-8 lg:px-10">
          <div className="grid gap-6 sm:gap-12 md:grid-cols-3">

            <SupportCard
              icon={<FaPhoneAlt />}
              title={t("supportPage.call.title")}
              desc={t("supportPage.call.desc")}
              value="+91 99999 99999"
            />

            <SupportCard
              icon={<FaEnvelope />}
              title={t("supportPage.email.title")}
              desc={t("supportPage.email.desc")}
              value="support@hospigram.com"
            />

            <SupportCard
              icon={<FaHeadset />}
              title={t("supportPage.live.title")}
              desc={t("supportPage.live.desc")}
              value={t("supportPage.live.value")}
            />

          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="w-full py-10 sm:py-24 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-10">

          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16">
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900">
              {t("supportPage.faq.title")}
            </h2>
            <p className="text-gray-600 mt-2 sm:mt-4 text-sm sm:text-base">
              {t("supportPage.faq.subtitle")}
            </p>
          </div>

          <div className="grid gap-4 sm:gap-10 md:grid-cols-2">
            <FaqItem q={t("supportPage.faq.q1.q")} a={t("supportPage.faq.q1.a")} />
            <FaqItem q={t("supportPage.faq.q2.q")} a={t("supportPage.faq.q2.a")} />
            <FaqItem q={t("supportPage.faq.q3.q")} a={t("supportPage.faq.q3.a")} />
            <FaqItem q={t("supportPage.faq.q4.q")} a={t("supportPage.faq.q4.a")} />
          </div>

        </div>
      </section>

      {/* ================= INFO ================= */}
      <section className="w-full py-10 sm:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-8 lg:px-10">
          <div className="grid gap-6 sm:gap-12 md:grid-cols-3">

            <InfoItem
              icon={<FaClock />}
              title={t("supportPage.info.hours.title")}
              desc={t("supportPage.info.hours.desc")}
            />

            <InfoItem
              icon={<FaMapMarkerAlt />}
              title={t("supportPage.info.coverage.title")}
              desc={t("supportPage.info.coverage.desc")}
            />

            <InfoItem
              icon={<FaQuestionCircle />}
              title={t("supportPage.info.help.title")}
              desc={t("supportPage.info.help.desc")}
            />

          </div>
        </div>
      </section>

      <EmergencyBanner />
      <MegaFooter />

      {/* ANIMATIONS */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.5s ease-out forwards;
        }
      `}</style>

    </div>
  );
}

/* ====================== COMPONENTS ====================== */

function SupportCard({ icon, title, desc, value }) {
  return (
    <div className="bg-white border border-gray-200
                    p-5 sm:p-8 text-center
                    transition-all duration-300
                    hover:shadow-xl hover:-translate-y-1">
      <div className="mx-auto mb-4 h-14 w-14
                      flex items-center justify-center
                      border-2 border-red-600
                      text-red-600 text-xl
                      transition group-hover:scale-110">
        {icon}
      </div>

      <h3 className="text-sm sm:text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
      <p className="mt-3 font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function FaqItem({ q, a }) {
  return (
    <div className="border border-gray-200 p-4 sm:p-6
                    transition hover:shadow-lg hover:-translate-y-0.5">
      <h4 className="font-bold text-gray-900 text-sm sm:text-base">{q}</h4>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">{a}</p>
    </div>
  );
}

function InfoItem({ icon, title, desc }) {
  return (
    <div className="p-5 sm:p-8 bg-white border border-gray-200
                    text-center transition hover:shadow-lg hover:-translate-y-1">
      <div className="mx-auto mb-4 h-14 w-14
                      flex items-center justify-center
                      border-2 border-red-600
                      text-red-600 text-xl">
        {icon}
      </div>

      <h3 className="font-bold text-gray-900 text-sm sm:text-base">{title}</h3>
      <p className="text-gray-600 mt-2 text-sm">{desc}</p>
    </div>
  );
}
