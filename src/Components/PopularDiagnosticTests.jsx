import { useTranslation } from "react-i18next";
import { FaFlask, FaHospital, FaMicroscope } from "react-icons/fa";

const tests = [
  {
    id: 1,
    name: "CBC (Complete Blood Count)",
    desc:
      "Evaluates overall health and detects infections, anemia, and blood disorders.",
    labs: 120,
    icon: <FaMicroscope />,
  },
  {
    id: 2,
    name: "Thyroid Profile Test",
    desc:
      "Measures thyroid hormone levels to detect hypo or hyperthyroidism.",
    labs: 95,
    icon: <FaFlask />,
  },
  {
    id: 3,
    name: "Blood Sugar Test",
    desc:
      "Checks glucose levels to diagnose and monitor diabetes.",
    labs: 140,
    icon: <FaFlask />,
  },
  {
    id: 4,
    name: "Full Body Checkup",
    desc:
      "Comprehensive health screening covering major organs and vital parameters.",
    labs: 60,
    icon: <FaHospital />,
  },
  {
    id: 5,
    name: "Lipid Profile Test",
    desc:
      "Analyzes cholesterol and triglyceride levels to assess heart health.",
    labs: 85,
    icon: <FaMicroscope />,
  },
  {
    id: 6,
    name: "Liver Function Test (LFT)",
    desc:
      "Evaluates liver health and detects infections or liver damage.",
    labs: 75,
    icon: <FaFlask />,
  },
  {
    id: 7,
    name: "Kidney Function Test (KFT)",
    desc:
      "Checks kidney performance and detects renal disorders.",
    labs: 70,
    icon: <FaHospital />,
  },
  {
    id: 8,
    name: "Vitamin D Test",
    desc:
      "Detects vitamin D deficiency affecting bones and immunity.",
    labs: 65,
    icon: <FaMicroscope />,
  },
];

export default function PopularDiagnosticTests() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gray-50 py-5 md:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-10">

        {/* HEADING (visible on all) */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xl md:text-3xl font-extrabold text-gray-900">
            {t("popularTestsTitle", {
              defaultValue: "Popular Diagnostic Tests",
            })}
          </h2>

          {/* Description hidden on mobile */}
          <p className="hidden md:block text-gray-600 mt-3 max-w-3xl mx-auto">
            {t("popularTestsDesc", {
              defaultValue:
                "Commonly recommended diagnostic tests for early detection, routine health monitoring, and preventive care.",
            })}
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white border border-gray-200
                         hover:shadow-xl transition duration-300"
            >
              <div className="p-4 md:p-7 flex flex-col h-full">

                {/* ICON */}
                <div className="text-xl md:text-3xl text-red-600 mb-2 md:mb-4">
                  {test.icon}
                </div>

                {/* NAME */}
                <h3 className="text-sm md:text-lg font-bold text-gray-900 leading-snug line-clamp-2">
                  {test.name}
                </h3>

                {/* DESCRIPTION (desktop only) */}
                <p className="hidden md:block text-sm text-gray-600 mt-3 leading-relaxed flex-grow">
                  {test.desc}
                </p>

                {/* LAB COUNT */}
                <div className="flex items-center gap-1 md:gap-2 mt-2 md:mt-4 text-xs md:text-sm text-gray-500">
                  <FaHospital className="text-red-600 text-xs md:text-sm" />
                  <span>
                    {test.labs}+{" "}
                    {t("verifiedLabsAvailable", {
                      defaultValue: "Verified Labs Available",
                    })}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
