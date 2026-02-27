import {
  FaHandshake,
  FaGlobe,
  FaUserTie,
  FaCogs,
} from "react-icons/fa";

export default function TechnologyPartnerSection() {
  return (
    <section className="w-full bg-white py-5 md:py-28 border-t border-gray-200">
      <div className="w-full px-4 sm:px-6 lg:px-10">

        {/* ================= HEADER ================= */}
        <div className="max-w-5xl mx-auto text-center mb-14 md:mb-24">

          <span className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-1.5
                           bg-red-50 text-red-600
                           text-[10px] md:text-xs font-bold tracking-widest uppercase
                           border border-red-200">
            TECHNOLOGY PARTNER
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Technology Support by{" "}
            <span className="text-red-600">Ownsite Technology</span>{" "}
            & Consultancy
          </h2>
        </div>

        {/* ================= PARTNERSHIP DETAILS ================= */}
        <div className="grid gap-10 lg:grid-cols-2 items-center mb-16 md:mb-28">

          {/* LEFT CONTENT */}
          <div>
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="h-11 w-11 md:h-14 md:w-14
                              flex items-center justify-center
                              border-2 border-red-600 text-red-600 text-lg md:text-2xl">
                <FaHandshake />
              </div>
              <h3 className="text-lg md:text-2xl font-bold text-gray-900">
                Dedicated Technology Partnership
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Ownsite Technology & Consultancy works exclusively as the
              technology partner for Hospigram, managing architecture,
              development, security, and long-term scalability.
            </p>

            <ul className="mt-5 space-y-2 text-gray-700 text-xs md:text-sm">
              <li className="flex items-center gap-2">
                <FaCogs className="text-red-600" />
                Platform Architecture & Engineering
              </li>
              <li className="flex items-center gap-2">
                <FaCogs className="text-red-600" />
                Secure & Scalable Infrastructure
              </li>
              <li className="flex items-center gap-2">
                <FaCogs className="text-red-600" />
                Performance & Reliability
              </li>
              <li className="flex items-center gap-2">
                <FaCogs className="text-red-600" />
                Continuous Technical Innovation
              </li>
            </ul>
          </div>

          {/* RIGHT BRAND CARD */}
          <div className="bg-gray-50 border border-gray-200 p-6 md:p-10">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="h-14 w-14 md:h-16 md:w-16
                              flex items-center justify-center
                              bg-red-600 text-white text-xl md:text-2xl">
                <FaGlobe />
              </div>

              <div>
                <h4 className="text-lg md:text-xl font-bold text-gray-900">
                  Ownsite Technology & Consultancy
                </h4>
                <p className="text-xs md:text-sm text-gray-600">
                  Digital Engineering • Secure Platforms • Scalable Systems
                </p>
              </div>
            </div>

            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              A modern technology firm delivering enterprise-grade software,
              healthcare platforms, and digital products for organizations.
            </p>
          </div>
        </div>

        {/* ================= FOUNDERS ================= */}
        <div className="text-center mb-10 md:mb-16">
          <h3 className="text-xl md:text-3xl font-extrabold text-gray-900">
            Technology Leadership at Ownsite
          </h3>
          <p className="hidden md:block text-gray-600 mt-3 max-w-2xl mx-auto">
            Experienced leaders driving innovation and reliability behind Hospigram.
          </p>
        </div>

        <div className="grid gap-8 md:gap-14 md:grid-cols-2 max-w-6xl mx-auto">

          <FounderCard
            image="public/images/Yaten.jpeg"
            name="Yatendra Singh"
            role="Co-Founder & CEO"
            desc="Driving platform vision, digital strategy, and technology-led growth to keep Hospigram scalable, secure, and future-ready."
          />

          <FounderCard
            image="public/images/Aakash.jpeg"
            name="Akash Gupta"
            role="Co-Founder & CTO"
            desc="Leading system architecture, performance optimization, and engineering excellence behind Hospigram’s technology stack."
          />

        </div>

      </div>
    </section>
  );
}

/* ====================== FOUNDER CARD ====================== */

function FounderCard({ image, name, role, desc }) {
  return (
    <div className="relative h-[280px] md:h-[420px] overflow-hidden group">

      <img
        src={image}
        alt={name}
        className="absolute inset-0 h-full w-full object-cover
                   group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-t
                      from-black/90 via-black/60 to-black/20" />

      <div className="relative z-10 h-full flex flex-col justify-end p-5 md:p-8 text-white">

        <div className="flex items-center gap-3 mb-3 md:mb-4">
          <div className="h-10 w-10 md:h-12 md:w-12
                          flex items-center justify-center
                          border-2 border-white text-white text-sm md:text-xl">
            <FaUserTie />
          </div>
          <div>
            <h4 className="text-base md:text-xl font-extrabold">{name}</h4>
            <p className="text-xs md:text-sm font-semibold text-red-400">
              {role}
            </p>
          </div>
        </div>

        {/* ❌ Description hidden on mobile */}
        <p className="hidden md:block text-sm text-white/90 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}
