import { Link } from "react-router-dom";
import {
  FaHospital,
  FaFlask,
  FaExternalLinkAlt,
  FaArrowLeft,
} from "react-icons/fa";

export default function LoginSelection() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1586773860418-d37222d8fce3)",
      }}
    >
      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/75" />

      {/* ================= HOME BUTTON ================= */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 
                     text-sm font-semibold hover:bg-red-700 transition"
        >
          <FaArrowLeft />
          Home
        </Link>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 w-full max-w-5xl px-4 sm:px-6 py-10">

        {/* ================= BRAND HEADER ================= */}
        <div className="text-center mb-10 sm:mb-14">

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-wide">
            HOSPIGRAM
          </h1>

          <p className="text-red-500 text-xs sm:text-sm font-semibold tracking-widest mt-2">
            HEALTHCARE BOOKING PLATFORM
          </p>

          <p className="mt-4 text-gray-300 text-sm sm:text-base">
            Secure access for verified hospitals & diagnostic labs
          </p>

          <div className="mt-6 text-gray-400 text-xs sm:text-sm">
            Powered by{" "}
            <a
              href="https://ownsite.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-red-400 transition inline-flex items-center gap-1"
            >
              Ownsite Technology
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>

        </div>

        {/* ================= LOGIN CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">

          <LoginCard
            title="Hospital Login"
            description="Manage appointments, doctors, patient records & hospital profile."
            buttonText="Continue as Hospital"
            buttonColor="bg-red-600 hover:bg-red-700"
            icon={<FaHospital />}
            iconBg="bg-red-100 text-red-600"
            link="/hospital-login"
          />

          <LoginCard
            title="Labs Login"
            description="Control lab tests, diagnostics, reports & booking management."
            buttonText="Continue as Lab"
            buttonColor="bg-red-600 hover:bg-red-700"
            icon={<FaFlask />}
            iconBg="bg-red-100 text-red-600"
            link="/labs-login"
          />

        </div>

      </div>
    </section>
  );
}

/* ================= CARD COMPONENT ================= */

function LoginCard({
  title,
  description,
  buttonText,
  buttonColor,
  icon,
  iconBg,
  link,
}) {
  return (
    <div
      className="
        bg-white/95 backdrop-blur-xl
        border border-white/20
        p-6 sm:p-10
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-1 sm:hover:-translate-y-2
        transition-all duration-300
      "
    >
      <div
        className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 text-xl sm:text-2xl ${iconBg}`}
      >
        {icon}
      </div>

      <h2 className="text-lg sm:text-2xl font-bold text-gray-900 mb-3">
        {title}
      </h2>

      <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
        {description}
      </p>

      <Link to={link}>
        <button
          className={`w-full py-3 text-sm sm:text-base text-white font-semibold transition ${buttonColor}`}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
}