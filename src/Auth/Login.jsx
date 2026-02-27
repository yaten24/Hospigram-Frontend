import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  FaPhoneAlt,
  FaLock,
  FaHospitalAlt,
  FaArrowRight,
  FaShieldAlt,
  FaUserCheck,
  FaCalendarCheck,
} from "react-icons/fa";
import axios from "axios";
import { useUser } from "../context/userContext";

/* ================= TRUST STATEMENTS ================= */
const trustStatements = [
  "Trusted by 10,000+ Patients Across India",
  "Connected with NABL & Government Verified Labs",
  "Instant Booking • Zero Paperwork • Full Transparency",
  "Secure Medical Records with Bank-Grade Encryption",
];

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/login",
        { phone, password },
        { withCredentials: true }
      );

      if (res.data.success) {
        setMessage(res.data.message || "Login Successful");
        setUser(res.data.user);

        setTimeout(() => {
          navigate("/");
        }, 1200);
      } else {
        setError(res.data.message || "Invalid Credentials");
      }

    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    } finally {
      setLoading(false);
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
            Welcome Back to <br />
            <span className="text-red-200">Hospigram</span>
          </h1>

          <p className="text-sm text-red-100 leading-relaxed">
            Book hospital appointments, lab tests and diagnostics
            instantly with full transparency and secure medical data.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <FaUserCheck className="text-lg text-emerald-300 mt-1" />
              Verified Hospitals & Labs
            </div>
            <div className="flex items-start gap-3">
              <FaCalendarCheck className="text-lg text-cyan-200 mt-1" />
              Real-time slot booking
            </div>
            <div className="flex items-start gap-3">
              <FaShieldAlt className="text-lg text-amber-200 mt-1" />
              Secure & encrypted data
            </div>
          </div>

          <AutoRotateTrust />
        </div>

        {/* RIGHT SIDE - LOGIN FORM */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">

          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Login to your account
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

            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">
                Mobile Number
              </label>
              <div className="flex items-center border border-gray-300 px-4 focus-within:border-red-500 transition">
                <FaPhoneAlt className="text-gray-400 mr-3" />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your mobile number"
                  className="w-full py-3 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">
                Password
              </label>
              <div className="flex items-center border border-gray-300 px-4 focus-within:border-red-500 transition">
                <FaLock className="text-gray-400 mr-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full py-3 text-sm outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end text-xs">
              <Link
                to="/forgot-password"
                className="text-red-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-3 text-sm font-semibold hover:bg-red-700 transition shadow-md disabled:opacity-60"
            >
              {loading ? "Logging in..." : "Login"} <FaArrowRight />
            </button>

          </form>

          <p className="text-xs text-gray-600 mt-8 text-center">
            New to Hospigram?{" "}
            <Link
              to="/register"
              className="text-red-600 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>

        </div>
      </motion.div>
    </section>
  );
}

/* ================= AUTO ROTATE TRUST ================= */
function AutoRotateTrust() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % trustStatements.length),
      3000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-10 h-6 overflow-hidden">
      <motion.p
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-xs tracking-wide uppercase text-red-100"
      >
        {trustStatements[index]}
      </motion.p>
    </div>
  );
}