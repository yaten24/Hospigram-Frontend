import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaHospitalAlt,
  FaFlask,
  FaShieldAlt,
  FaUserMd,
} from "react-icons/fa";

const images = [
  "/images/healthcare-1.jpg",
  "/images/healthcare-2.jpg",
  "/images/healthcare-3.jpg",
];

export default function Hero() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 w-full flex items-center py-24 md:py-32">
        <div className="w-full px-6 md:px-12 lg:px-20 text-white">
          <div className="max-w-4xl">

            {/* TAGLINE */}
            <p className="inline-block mb-5 px-4 py-1 text-xs font-bold tracking-widest 
                          uppercase bg-red-600/20 text-red-400 border border-red-500">
              {t("hero.tagline")}
            </p>

            {/* HEADING */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {t("hero.headingPart1")}{" "}
              <span className="text-red-500">{t("hero.highlight")}</span>,  
              <br /> {t("hero.headingPart2")}
            </h1>

            {/* SUBTEXT */}
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl">
              {t("hero.subtext")}
            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-5 mb-12">
              <Link
                to="/book-now"
                className="px-8 py-4 bg-red-600 text-white text-sm font-bold
                           rounded-none hover:bg-red-700 transition"
              >
                {t("hero.bookAppointment")}
              </Link>

              <Link
                to="/partner-login"
                className="px-8 py-4 border-2 border-white text-white text-sm font-semibold
                           rounded-none hover:bg-white hover:text-black transition"
              >
                {t("hero.becomePartner")}
              </Link>
            </div>

            {/* TRUST FEATURES */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-200">
              <TrustItem icon={<FaHospitalAlt />} text={t("hero.trust.hospitals")} />
              <TrustItem icon={<FaFlask />} text={t("hero.trust.labs")} />
              <TrustItem icon={<FaShieldAlt />} text={t("hero.trust.secure")} />
              <TrustItem icon={<FaUserMd />} text={t("hero.trust.support")} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* TRUST ITEM */
function TrustItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-red-500 text-xl">{icon}</span>
      <span>{text}</span>
    </div>
  );
}
