import { Phone, MapPin, User, LogOut, IdCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "../../context/userContext";
import axios from "axios";

export default function DesktopActions({ isLoggedIn, user }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { setUser } = useUser();

  const [avatarOpen, setAvatarOpen] = useState(false);
  const [location, setLocation] = useState(
    localStorage.getItem("location") || "Delhi"
  );

  const firstLetter = user?.name
    ? user.name.charAt(0).toUpperCase()
    : "?";

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/api/auth/logout",
        {},
        { withCredentials: true }
      );

      setUser(null);
      navigate("/login");

    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="hidden lg:flex items-center gap-4 relative">

      {/* LOCATION */}
      {/* <div className="flex items-center gap-2 border border-red-200 px-2 py-1 rounded">
        <MapPin size={14} className="text-red-600" />
        <select
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            localStorage.setItem("location", e.target.value);
          }}
          className="text-sm bg-transparent outline-none"
        >
          <option>Delhi</option>
          <option>Noida</option>
          <option>Gurgaon</option>
          <option>Ghaziabad</option>
          <option>Meerut</option>
        </select>
      </div> */}

      {/* LANGUAGE */}
      {/* <select
        defaultValue={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="border border-red-200 px-2 py-1 text-sm rounded"
      >
        <option value="en">EN</option>
        <option value="hi">हिंदी</option>
      </select> */}

      {/* CALL */}
      <a
        href="tel:+919999999999"
        className="flex items-center gap-2 px-4 py-2
                   border border-green-500 bg-green-50
                   text-green-700 font-semibold rounded-md"
      >
        <Phone size={16} /> +91 9258165838
      </a>

      {/* AUTH SECTION */}
      {!isLoggedIn ? (
        <>
          <Link
            to="/login"
            className="border border-red-500 px-4 py-2 rounded-md text-red-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-red-600 px-5 py-2 rounded-md text-white"
          >
            Sign Up
          </Link>
        </>
      ) : (
        <div className="relative">
          <button
            onClick={() => setAvatarOpen(!avatarOpen)}
            className="w-10 h-10 rounded-full bg-red-600 text-white font-bold"
          >
            {firstLetter}
          </button>

          <AnimatePresence>
            {avatarOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute right-0 mt-3 w-72 bg-white border border-red-100 shadow-xl z-50"
              >
                {/* USER INFO */}
                <div className="px-5 py-4 bg-red-50 border-b border-red-100">
                  <p className="font-semibold text-gray-800">
                    {user?.name}
                  </p>

                  <p className="text-xs text-gray-500 mt-1">
                    📱 {user?.phone}
                  </p>

                  {/* PATIENT ID */}
                  <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-red-600 bg-white px-3 py-1 border border-red-200 w-fit">
                    <IdCard size={14} />
                    ID: {user?.hospigramPatientId}
                  </div>
                </div>

                {/* MENU */}
                <div className="py-2 text-sm">
                  <Link
                    to="/profile"
                    className="flex items-center gap-3 px-5 py-3 hover:bg-red-50 transition-all duration-200"
                  >
                    <User size={16} />
                    <span>Profile</span>
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-5 py-3 text-red-600 hover:bg-red-50 transition-all duration-200"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}