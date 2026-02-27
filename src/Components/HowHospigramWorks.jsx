import { useTranslation } from "react-i18next";
import {
  FaSearch,
  FaHospital,
  FaCalendarCheck,
  FaCheckCircle,
} from "react-icons/fa";

export default function HowHospigramWorks() {
  const { t } = useTranslation();

  const steps = [
    {
      id: 1,
      title: t("how.step1.title"),
      desc: t("how.step1.desc"),
      icon: <FaSearch />,
    },
    {
      id: 2,
      title: t("how.step2.title"),
      desc: t("how.step2.desc"),
      icon: <FaHospital />,
    },
    {
      id: 3,
      title: t("how.step3.title"),
      desc: t("how.step3.desc"),
      icon: <FaCalendarCheck />,
    },
    {
      id: 4,
      title: t("how.step4.title"),
      desc: t("how.step4.desc"),
      icon: <FaCheckCircle />,
    },
  ];

  return (
    <section className="w-full bg-white py-5 md:py-20">
      <div className="w-full px-4 sm:px-8 lg:px-20">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-20">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            {t("how.title", {
              defaultValue: "How Hospigram Works",
            })}
          </h2>

          {/* ❌ subtitle hidden on mobile */}
          <p className="hidden md:block text-gray-600 mt-4 text-base max-w-3xl mx-auto">
            {t("how.subtitle", {
              defaultValue:
                "Booking healthcare services with Hospigram is simple, fast, and secure. Just follow these four easy steps.",
            })}
          </p>
        </div>

        {/* STEPS GRID */}
        <div className="grid gap-8 sm:gap-12 grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <div
              key={step.id}
              className="relative text-center px-2 sm:px-4"
            >
              {/* STEP NUMBER */}
              <div
                className="absolute -top-5 left-1/2 -translate-x-1/2
                           h-7 w-7 sm:h-9 sm:w-9
                           flex items-center justify-center
                           bg-red-600 text-white font-bold text-xs sm:text-base"
              >
                {index + 1}
              </div>

              {/* ICON */}
              <div
                className="mx-auto mb-4 sm:mb-6
                           h-12 w-12 sm:h-20 sm:w-20
                           flex items-center justify-center
                           border-2 border-red-600
                           text-red-600 text-xl sm:text-3xl"
              >
                {step.icon}
              </div>

              {/* TITLE */}
              <h3 className="text-sm sm:text-lg font-bold text-gray-900">
                {step.title}
              </h3>

              {/* DESCRIPTION (desktop only) */}
              <p className="hidden md:block text-sm text-gray-600 mt-3 leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
