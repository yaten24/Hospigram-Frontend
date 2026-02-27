import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaHospital,
  FaFlask,
  FaXRay,
  FaArrowRight,
} from "react-icons/fa";
import { GiUltrasound } from "react-icons/gi";

export default function HealthcareCategories() {
  const { t } = useTranslation();

  const categories = [
    {
      title: t("hospitals"),
      subtitle: t("hospitalsDesc"),
      icon: <FaHospital size={28} />,
      link: "/hospitals",
    },
    {
      title: t("labs"),
      subtitle: t("labsDesc"),
      icon: <FaFlask size={28} />,
      link: "/labs",
    },
    {
      title: t("ultrasound"),
      subtitle: t("ultrasoundDesc"),
      icon: <GiUltrasound size={28} />,
      link: "/ultrasound",
    },
    {
      title: t("xray"),
      subtitle: t("xrayDesc"),
      icon: <FaXRay size={28} />,
      link: "/xray",
    },
  ];

  return (
    <section className="w-full bg-white pt-12 md:pt-20 pb-16 px-4 sm:px-6 lg:px-24">
      
      {/* HEADING */}
      <div className="hidden md:block text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
          {t("chooseService")}
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          {t("categoryIntro", {
            defaultValue:
              "Select a service to find verified healthcare centers and book appointments instantly.",
          })}
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10">
        {categories.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="
              group
              border border-red-200
              hover:border-red-500
              bg-white
              shadow-sm hover:shadow-xl
              transition-all duration-300
              p-5 md:p-8
              flex flex-col justify-between
              min-h-[170px] md:min-h-[260px]
            "
          >
            {/* TOP ICON */}
            <div className="text-red-600 mb-4 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </div>

            {/* CONTENT */}
            <div>
              <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="hidden md:block text-sm text-gray-600 mb-6">
                {item.subtitle}
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center justify-between text-xs md:text-sm font-semibold uppercase tracking-wide text-red-600">
              <span className="group-hover:text-red-700 transition">
                {t("bookNowCaps")}
              </span>
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}