import { useState } from "react";
import { FaUserShield, FaEye, FaEyeSlash } from "react-icons/fa";

export default function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1586773860418-d37222d8fce3)",
      }}
    >
      {/* ================= OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/75" />

      {/* ================= LOGIN CARD ================= */}
      <div className="relative z-10 w-full max-w-md bg-white/95 backdrop-blur-xl border border-white/30 shadow-2xl p-10">

        {/* ICON */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center bg-red-100 text-red-600 text-3xl">
            <FaUserShield />
          </div>
        </div>

        {/* HEADER */}
        <h1 className="text-2xl font-extrabold text-gray-900 text-center">
          Admin Login
        </h1>
        <p className="text-center text-gray-600 mt-2 mb-8">
          Access Hospigram administration panel
        </p>

        {/* FORM */}
        <form className="space-y-6">

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Admin Email
            </label>
            <input
              type="email"
              placeholder="admin@hospigram.com"
              className="
                w-full px-4 py-3
                border border-gray-300
                focus:border-red-600 focus:ring-1 focus:ring-red-600
                outline-none
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
                placeholder="Enter password"
                className="
                  w-full px-4 py-3 pr-12
                  border border-gray-300
                  focus:border-red-600 focus:ring-1 focus:ring-red-600
                  outline-none
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="
              w-full py-3
              bg-red-600 text-white font-semibold
              hover:bg-red-700
              transition
            "
          >
            Login as Admin
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-xs text-gray-500 mt-6">
          Authorized personnel only • Hospigram Admin System
        </p>
      </div>
    </section>
  );
}
