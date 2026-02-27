import { motion } from "framer-motion";
import { FaPhoneAlt, FaHeartbeat } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function EmergencyBanner() {
  const { t } = useTranslation();
  const phoneNumber = "+91 99999 99999";

  return (
    <section className="relative w-full py-24 bg-gradient-to-r from-red-700 via-red-600 to-red-700 overflow-hidden">

      {/* CIRCULAR BLINK / PULSE */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0.05, 0.35] }}
        transition={{ duration: 2.8, repeat: Infinity }}
        className="absolute left-1/2 top-1/2
                   -translate-x-1/2 -translate-y-1/2
                   h-[420px] w-[420px]
                   rounded-full bg-white/20"
      />

      {/* INNER CIRCLE */}
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute left-1/2 top-1/2
                   -translate-x-1/2 -translate-y-1/2
                   h-[300px] w-[300px]
                   rounded-full bg-white/10"
      />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-10 flex flex-col items-center text-center text-white">

        {/* ICON */}
        <div className="h-20 w-20 flex items-center justify-center
                        rounded-full bg-white/20 mb-6">
          <FaHeartbeat className="text-4xl" />
        </div>

        {/* TEXT */}
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          {t("emergency.title", {
            defaultValue: "Need Immediate Assistance?",
          })}
        </h2>

        <p className="text-white/90 mt-4 max-w-2xl text-base sm:text-lg">
          {t("emergency.desc", {
            defaultValue:
              "Our emergency support team is ready to help you connect with nearby hospitals and urgent healthcare services.",
          })}
        </p>

        {/* CALL BUTTON */}
        <motion.a
          href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-flex items-center gap-4
                     bg-white text-red-700
                     px-10 py-4 font-bold text-lg
                     shadow-2xl"
        >
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.4, repeat: Infinity }}
            className="h-11 w-11 flex items-center justify-center
                       rounded-full bg-red-600 text-white"
          >
            <FaPhoneAlt />
          </motion.span>
          {t("emergency.callNow", {
            defaultValue: "Call Now",
          })}
        </motion.a>

      </div>
    </section>
  );
}
