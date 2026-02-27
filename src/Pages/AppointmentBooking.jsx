import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaCheckCircle,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaHospitalAlt,
  FaUserMd,
  FaCalendarAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

export default function AppointmentBooking() {
  const { t } = useTranslation();

  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");

  const hospitals = {
    "City Care Hospital": [
      "Dr. Amit Sharma (Cardiologist)",
      "Dr. Rahul Singh (Orthopedic)",
    ],
    "LifeLine Medical Center": [
      "Dr. Neha Verma (Gynecologist)",
      "Dr. Pankaj Mehta (Physician)",
    ],
    "HealthPlus Clinic": ["Dr. Ritu Jain (Dermatologist)"],
  };

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!hospital || !doctor || !date || !time || !patientName || !phone) {
      alert(t("errors.fillAll"));
      return;
    }
    alert(t("success.appointmentBooked"));
  };

  return (
    <>
      <Navbar />

      <div className="w-full bg-gray-50 pt-0">
        {/* ================= HERO (DESKTOP ONLY) ================= */}
        <section
          className="relative hidden md:block w-full py-10"
          style={{
            backgroundImage: "url('/images/hospital-appointment.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-3xl lg:text-4xl font-bold flex items-center gap-2">
              <FaCalendarAlt />
              {t("appointment.heroTitle")}
            </h1>
            <p className="text-gray-200 max-w-xl text-sm mt-2">
              {t("appointment.heroDesc")}
            </p>
          </div>
        </section>

        {/* ================= MAIN ================= */}
        <section className="w-full py-4 md:py-8">
          <div className="max-w-6xl mx-auto px-3 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* ---------- LEFT INFO (DESKTOP ONLY) ---------- */}
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t("appointment.trustTitle")}
              </h2>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-2">
                  <FaCheckCircle className="text-red-600 mt-1" />
                  {t("appointment.trust1")}
                </li>
                <li className="flex gap-2">
                  <FaShieldAlt className="text-red-600 mt-1" />
                  {t("appointment.trust2")}
                </li>
                <li className="flex gap-2">
                  <FaClock className="text-red-600 mt-1" />
                  {t("appointment.trust3")}
                </li>
                <li className="flex gap-2">
                  <FaHeadset className="text-red-600 mt-1" />
                  {t("appointment.trust4")}
                </li>
              </ul>
            </motion.div>

            {/* ---------- FORM (MOBILE + DESKTOP) ---------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-red-100 shadow-sm p-4 md:p-6"
            >
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaUserMd className="text-red-600" />
                {t("appointment.details")}
              </h3>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Hospital */}
                <div>
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-2 mb-1">
                    <FaHospitalAlt className="text-red-500" />
                    {t("appointment.selectHospital")}
                  </label>
                  <select
                    value={hospital}
                    onChange={(e) => {
                      setHospital(e.target.value);
                      setDoctor("");
                    }}
                    className="w-full border px-3 py-2 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-200"
                  >
                    <option value="">{t("appointment.selectHospital")}</option>
                    {Object.keys(hospitals).map((h) => (
                      <option key={h}>{h}</option>
                    ))}
                  </select>
                </div>

                {/* Doctor */}
                <div>
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-2 mb-1">
                    <FaUserMd className="text-red-500" />
                    {t("appointment.selectDoctor")}
                  </label>
                  <select
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    disabled={!hospital}
                    className="w-full border px-3 py-2 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-200"
                  >
                    <option value="">{t("appointment.selectDoctor")}</option>
                    {hospital &&
                      hospitals[hospital].map((doc) => (
                        <option key={doc}>{doc}</option>
                      ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-2 mb-1">
                    <FaCalendarAlt className="text-red-500" />
                    {t("appointment.date")}
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full border px-3 py-2 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-200"
                  />
                </div>

                {/* Time */}
                <div>
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-2 mb-1">
                    <FaClock className="text-red-500" />
                    {t("appointment.time")}
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full border px-3 py-2 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-200"
                  >
                    <option value="">{t("appointment.selectTime")}</option>
                    {timeSlots.map((slot) => (
                      <option key={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                {/* Patient */}
                <div>
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-2 mb-1">
                    <FaUserMd className="text-red-500" />
                    {t("appointment.patientName")}
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder={t("appointment.patientName")}
                    className="w-full border px-3 py-2 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-200"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-semibold text-gray-600 flex items-center gap-2 mb-1">
                    <FaPhoneAlt className="text-red-500" />
                    {t("appointment.phone")}
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("appointment.phone")}
                    className="w-full border px-3 py-2 text-sm focus:border-red-600 focus:ring-1 focus:ring-red-200"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 text-sm font-semibold hover:bg-red-700 transition"
                >
                  {t("appointment.confirm")}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
