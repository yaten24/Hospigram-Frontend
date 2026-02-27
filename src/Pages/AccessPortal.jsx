import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaUserInjured,
  FaHospitalAlt,
  FaShieldAlt,
  FaHeartbeat,
} from "react-icons/fa";

export default function AccessPortal() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full grid md:grid-cols-2 bg-white shadow-2xl border border-red-100 overflow-hidden"
      >

        {/* LEFT SIDE - BRANDING */}
        <div className="hidden md:flex flex-col justify-center bg-red-600 text-white p-14 relative overflow-hidden">

          <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500 rounded-full opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-red-400 rounded-full opacity-20"></div>

          <FaHeartbeat className="text-6xl mb-8 opacity-90" />

          <h1 className="text-4xl font-bold leading-tight mb-6">
            Welcome to <br />
            <span className="text-red-200">Hospigram</span>
          </h1>

          <p className="text-sm text-red-100 leading-relaxed">
            India's modern healthcare booking ecosystem connecting
            patients with verified hospitals, labs, ultrasound and X-Ray centers.
          </p>

          <div className="mt-10 space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <FaShieldAlt /> Secure & Encrypted Platform
            </div>
            <div className="flex items-center gap-3">
              <FaHospitalAlt /> Verified Medical Partners
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - LOGIN OPTIONS */}
        <div className="flex flex-col justify-center p-10 sm:p-14">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold text-gray-800 mb-10 text-center"
          >
            Choose Your Access
          </motion.h2>

          <div className="space-y-6">

            {/* PATIENT LOGIN */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border border-red-200 p-6 bg-red-50 hover:bg-red-100 transition cursor-pointer"
              onClick={() => navigate("/login")}
            >
              <div className="flex items-center gap-4">
                <div className="bg-red-600 text-white p-4">
                  <FaUserInjured size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Patient Login
                  </h3>
                  <p className="text-sm text-gray-600">
                    Book appointments, manage records and access reports.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* PARTNER LOGIN */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="border border-gray-200 p-6 bg-white hover:bg-gray-50 transition cursor-pointer"
              onClick={() => navigate("/partner-login")}
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-800 text-white p-4">
                  <FaHospitalAlt size={24} />
                </div>

                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    Partner Login
                  </h3>
                  <p className="text-sm text-gray-600">
                    Hospitals, Labs & Admin access dashboard.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          <p className="text-xs text-gray-500 mt-10 text-center">
            Powered by Hospigram Healthcare Network
          </p>

        </div>
      </motion.div>
    </section>
  );
}