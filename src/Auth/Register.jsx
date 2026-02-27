import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  FaUser,
  FaPhoneAlt,
  FaLock,
  FaMapMarkerAlt,
  FaLanguage,
  FaHospitalAlt,
  FaArrowRight,
} from "react-icons/fa";
import axios from "axios";

export default function Register() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    location: "Delhi",
    language: "en",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const locations = ["Delhi", "Noida", "Ghaziabad", "Gurgaon", "Faridabad"];
  const languages = [
    { code: "en", label: "English" },
    { code: "hi", label: "हिंदी" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const payload = {
        name: form.name,
        phone: form.mobile,
        password: form.password,
        language: form.language,
        location: form.location,
      };

      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        payload
      );

      setMessage(res.data.message || "Registration successful");

      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-red-50 to-white flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-5xl bg-white shadow-2xl border border-red-100 grid md:grid-cols-2"
      >

        {/* LEFT SIDE - BRAND */}
        <div className="hidden md:flex flex-col justify-center bg-red-600 text-white p-12">
          <FaHospitalAlt className="text-5xl mb-6 opacity-90" />

          <h1 className="text-3xl font-bold mb-4 leading-snug">
            Welcome to <br />
            <span className="text-red-200">Hospigram</span>
          </h1>

          <p className="text-sm text-red-100 leading-relaxed">
            India's modern healthcare booking platform connecting
            patients with verified hospitals, labs and diagnostics centers.
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Create your account
          </h2>

          {message && (
            <div className="mb-4 text-sm text-green-700 bg-green-50 p-3 border border-green-200">
              {message}
            </div>
          )}

          {error && (
            <div className="mb-4 text-sm text-red-700 bg-red-50 p-3 border border-red-200">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <Input
              icon={<FaUser />}
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Rahul Sharma"
            />

            <Input
              icon={<FaPhoneAlt />}
              label="Mobile Number"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="9876543210"
            />

            <Input
              icon={<FaLock />}
              type="password"
              label="Password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Minimum 6 characters"
            />

            <Input
              icon={<FaLock />}
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter password"
            />

            {/* LOCATION */}
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">
                <FaMapMarkerAlt className="inline mr-1 text-red-500" />
                Location
              </label>
              <select
                name="location"
                value={form.location}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 text-sm focus:border-red-500 outline-none"
              >
                {locations.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* LANGUAGE */}
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-2 block">
                <FaLanguage className="inline mr-1 text-red-500" />
                Preferred Language
              </label>

              <div className="flex gap-3">
                {languages.map((lang) => (
                  <button
                    type="button"
                    key={lang.code}
                    onClick={() => {
                      i18n.changeLanguage(lang.code);
                      localStorage.setItem("hospigram_lang", lang.code);
                      setForm((prev) => ({
                        ...prev,
                        language: lang.code,
                      }));
                    }}
                    className={`px-4 py-2 text-sm border transition-all ${
                      form.language === lang.code
                        ? "border-red-600 bg-red-50 text-red-600"
                        : "border-gray-300 text-gray-600 hover:border-red-400"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3 text-sm font-semibold hover:bg-red-700 transition shadow-md"
            >
              Create Account <FaArrowRight />
            </button>

          </form>

          <p className="text-xs text-center text-gray-600 mt-8">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-red-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </motion.div>
    </section>
  );
}

/* ================= INPUT COMPONENT ================= */
function Input({
  icon,
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}) {
  return (
    <div>
      <label className="text-xs font-semibold text-gray-600 mb-1 block">
        {label}
      </label>
      <div className="flex items-center border border-gray-300 px-4 focus-within:border-red-500 transition">
        <span className="text-gray-400 mr-3">{icon}</span>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className="w-full py-3 text-sm outline-none"
        />
      </div>
    </div>
  );
}