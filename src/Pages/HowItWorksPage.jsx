import {
  FaSearch,
  FaHospitalAlt,
  FaCalendarCheck,
  FaCheckCircle,
  FaUserShield,
  FaHeadset,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Navbar from "../Shared/Navbar";
import MegaFooter from "../Shared/Footer";

/* ====================== PAGE ====================== */

export default function HowItWorksPage() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-gray-50">

      <Navbar />

      {/* ✅ DESKTOP NAVBAR SPACER (FIXES OVERLAP) */}
      <div className="hidden sm:block" />

      {/* ================= HERO (HIDDEN ON MOBILE) ================= */}
      <section className="hidden sm:flex relative w-full min-h-[35vh] items-center bg-white">
        <div className="w-full px-10">
          <div className="max-w-3xl mx-auto text-center">

            <span className="inline-block mb-4 px-4 py-1 bg-red-600
                             text-xs font-semibold tracking-wide text-white">
              SIMPLE • FAST • TRUSTED
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              How Hospigram Works
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Hospigram makes healthcare access simple. Book hospitals, labs,
              ultrasound, and X-ray services in just a few easy steps.
            </p>

          </div>
        </div>
      </section>

      {/* ================= STEPS ================= */}
      <section className="w-full py-10 sm:py-24 bg-gray-50">
        <div className="w-full px-4 sm:px-8 lg:px-10">

          <div className="grid gap-6 sm:gap-12 md:grid-cols-4">

            <Step
              step="01"
              icon={<FaSearch />}
              title={t("how.step1.title")}
              desc={t("how.step1.desc")}
            />

            <Step
              step="02"
              icon={<FaHospitalAlt />}
              title={t("how.step2.title")}
              desc={t("how.step2.desc")}
            />

            <Step
              step="03"
              icon={<FaCalendarCheck />}
              title={t("how.step3.title")}
              desc={t("how.step3.desc")}
            />

            <Step
              step="04"
              icon={<FaCheckCircle />}
              title={t("how.step4.title")}
              desc={t("how.step4.desc")}
            />

          </div>

        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="w-full py-10 sm:py-24 bg-white">
        <div className="w-full px-4 sm:px-8 lg:px-10">

          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
            <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900">
              Why Patients Trust Hospigram
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              We focus on trust, transparency, and patient-first healthcare.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-10 md:grid-cols-3">

            <TrustCard
              icon={<FaUserShield />}
              title={t("howPage.trust1.title")}
              desc={t("howPage.trust1.desc")}
            />

            <TrustCard
              icon={<FaCheckCircle />}
              title={t("howPage.trust2.title")}
              desc={t("howPage.trust2.desc")}
            />

            <TrustCard
              icon={<FaHeadset />}
              title={t("howPage.trust3.title")}
              desc={t("howPage.trust3.desc")}
            />

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-14 sm:py-24 bg-red-600 text-white text-center">
        <div className="w-full px-4 sm:px-8 lg:px-10">

          <h2 className="text-xl sm:text-4xl font-extrabold">
            Ready to Book Your Healthcare Service?
          </h2>

          <p className="mt-4 text-white/90 text-sm sm:text-lg max-w-2xl mx-auto">
            Find trusted hospitals, labs, ultrasound, and X-ray services near you.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/hospitals"
              className="bg-white text-red-600 px-6 py-3
                         font-semibold text-sm
                         hover:bg-gray-100 transition"
            >
              Book Doctor Appointment
            </Link>

            <Link
              to="/labs"
              className="border-2 border-white px-6 py-3
                         font-semibold text-sm
                         hover:bg-white hover:text-red-600 transition"
            >
              Book Lab Test
            </Link>
          </div>

        </div>
      </section>

      <MegaFooter />
    </div>
  );
}

/* ====================== SMALL COMPONENTS ====================== */

function Step({ step, icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200
                    hover:shadow-xl transition
                    p-4 sm:p-8 text-center">
      <div className="mx-auto mb-3 h-12 w-12 sm:h-16 sm:w-16
                      flex items-center justify-center
                      border-2 border-red-600
                      text-red-600 text-lg sm:text-2xl">
        {icon}
      </div>

      <span className="block text-xs font-bold text-gray-400 mb-1">
        STEP {step}
      </span>

      <h3 className="text-sm sm:text-lg font-bold text-gray-900">{title}</h3>

      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

function TrustCard({ icon, title, desc }) {
  return (
    <div className="text-center p-4 sm:p-8 border border-gray-200
                    hover:shadow-lg transition">
      <div className="mx-auto mb-4 h-12 w-12 sm:h-16 sm:w-16
                      flex items-center justify-center
                      border-2 border-red-600
                      text-red-600 text-lg sm:text-2xl">
        {icon}
      </div>

      <h3 className="text-sm sm:text-lg font-bold text-gray-900">{title}</h3>

      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
