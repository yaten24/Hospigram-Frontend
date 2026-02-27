import { useState } from "react";
import { FaFlask, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useLab } from "../context/labsContext";

export default function LabsLogin() {
  const navigate = useNavigate();
  const { setLab } = useLab();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ================= HANDLE INPUT =================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ================= HANDLE LOGIN =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        "http://localhost:4000/api/labs/login",
        formData,
        { withCredentials: true }
      );

      if (res.data.success) {
        // Save in Context
        setLab(res.data.lab);

        navigate("/lab-dashboard");
      } else {
        setError(res.data.message || "Login failed");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-black px-4">
      
      {/* LOGIN CARD */}
      <div className="w-full max-w-md bg-white border border-red-200 shadow-2xl p-10">

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center bg-red-100 text-red-600 text-3xl shadow-md">
            <FaFlask />
          </div>
        </div>

        {/* HEADER */}
        <h1 className="text-2xl font-extrabold text-gray-900 text-center">
          Lab Partner Login
        </h1>
        <p className="text-center text-gray-600 mt-2 mb-8">
          Access your diagnostic dashboard securely
        </p>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 border border-red-200 px-4 py-2">
            {error}
          </div>
        )}

        {/* FORM */}
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Lab Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email address"
              className="
                w-full px-4 py-3
                border border-gray-300
                focus:border-red-600 focus:ring-1 focus:ring-red-600
                outline-none transition
              "
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter password"
                className="
                  w-full px-4 py-3 pr-12
                  border border-gray-300
                  focus:border-red-600 focus:ring-1 focus:ring-red-600
                  outline-none transition
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-red-600 transition"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="text-right mt-2">
              <Link
                to="/lab-forgot-password"
                className="text-sm text-red-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3
              bg-red-600 text-white font-semibold
              hover:bg-red-700
              transition-all duration-200
              shadow-md hover:shadow-lg
              disabled:opacity-60 disabled:cursor-not-allowed
            "
          >
            {loading ? "Logging in..." : "Login as Lab"}
          </button>
        </form>

        {/* PARTNER SECTION */}
        <div className="mt-8 pt-6 text-center">
          <p className="text-sm text-gray-600">
            Not a Hospigram Partner?
          </p>

          <Link
            to="/become-lab-partner"
            className="
              inline-block mt-3 px-6 py-2
              border border-red-600 text-red-600
              hover:bg-red-600 hover:text-white
              transition-all duration-200
              font-semibold
            "
          >
            Become a Partner
          </Link>
        </div>

        <p className="text-center text-xs text-gray-500 mt-6">
          Only registered diagnostic labs are allowed • Hospigram System
        </p>
      </div>
    </section>
  );
}