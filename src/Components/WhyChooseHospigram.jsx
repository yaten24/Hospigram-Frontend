import { useTranslation } from "react-i18next";
import {
  FaHospital,
  FaRupeeSign,
  FaCalendarAlt,
  FaHandshake,
  FaHeadset,
} from "react-icons/fa";

export default function WhyChooseHospigram() {
  const { t } = useTranslation();

  const reasons = [
    {
      id: 1,
      title: t("why.reason1.title"),
      desc: t("why.reason1.desc"),
      icon: <FaHospital />,
    },
    {
      id: 2,
      title: t("why.reason2.title"),
      desc: t("why.reason2.desc"),
      icon: <FaRupeeSign />,
    },
    {
      id: 3,
      title: t("why.reason3.title"),
      desc: t("why.reason3.desc"),
      icon: <FaCalendarAlt />,
    },
    {
      id: 4,
      title: t("why.reason4.title"),
      desc: t("why.reason4.desc"),
      icon: <FaHandshake />,
    },
    {
      id: 5,
      title: t("why.reason5.title"),
      desc: t("why.reason5.desc"),
      icon: <FaHeadset />,
    },
  ];

  return (
    <section className="relative w-full py-5 md:py-24 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-50 via-white to-white" />

      <div className="relative w-full px-4 sm:px-8 lg:px-20">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-20">
          <span className="inline-block text-red-600 font-semibold text-xs sm:text-sm tracking-wide uppercase mb-2">
            {t("why.badge", { defaultValue: "Our Strength" })}
          </span>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            {t("why.title", { defaultValue: "Why Choose Hospigram" })}
          </h2>

          {/* ❌ Subtitle hidden on mobile */}
          <p className="hidden md:block text-gray-600 mt-4 max-w-3xl mx-auto text-base md:text-lg">
            {t("why.subtitle", {
              defaultValue:
                "Built on trust, transparency, and technology to simplify healthcare access for patients across India.",
            })}
          </p>
        </div>

        {/* FEATURES GRID */}
        <div className="grid gap-4 sm:gap-8 grid-cols-2 lg:grid-cols-5">

          {reasons.map((item) => (
            <div
              key={item.id}
              className="relative bg-white border border-gray-200
                         hover:border-red-600 hover:shadow-xl
                         transition-all duration-300
                         p-4 sm:p-8 group"
            >
              {/* LEFT ACCENT */}
              <div className="absolute left-0 top-0 h-full w-1 bg-red-600 opacity-0 group-hover:opacity-100 transition" />

              {/* ICON */}
              <div className="mb-3 sm:mb-6">
                <div
                  className="h-10 w-10 sm:h-14 sm:w-14
                             flex items-center justify-center
                             bg-red-600 text-white text-sm sm:text-xl"
                >
                  {item.icon}
                </div>
              </div>

              {/* TITLE */}
              <h3 className="text-sm sm:text-lg font-bold text-gray-900">
                {item.title}
              </h3>

              {/* DESC (desktop only) */}
              <p className="hidden md:block text-sm text-gray-600 mt-4 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
