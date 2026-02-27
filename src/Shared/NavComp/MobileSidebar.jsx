import { X, LogOut, MapPin } from "lucide-react";
import { FaChevronDown, FaGlobe } from "react-icons/fa";
import MobileNavItem from "./MobileNavItem";
import { useTranslation } from "react-i18next";

export default function MobileSidebar({ open, setOpen, isLoggedIn, user }) {
  const { t, i18n } = useTranslation();

  const location =
    localStorage.getItem("location") || "Delhi";

  const changeLocation = (city) => {
    localStorage.setItem("location", city);
    window.location.reload(); // simple sync for now
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  const logout = () => {
    console.log("Logout clicked");
  };

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-[999]
        transition-opacity duration-300
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* SIDEBAR */}
      <div
        className={`fixed inset-y-0 right-0 w-[88%] max-w-sm bg-white z-[1000]
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="h-16 flex justify-between items-center px-4 border-b border-red-100">
          <span className="font-extrabold text-red-600 text-lg">Hospigram</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="overflow-y-auto">

          {/* NAV LINKS */}
          <div className="px-4 py-4 space-y-3">
            <MobileNavItem to="/hospitals" label={t("hospitals")} setOpen={setOpen} />
            <MobileNavItem to="/labs" label={t("labs")} setOpen={setOpen} />
            <MobileNavItem to="/ultrasound" label={t("ultrasound")} setOpen={setOpen} />
            <MobileNavItem to="/xray" label={t("xray")} setOpen={setOpen} />
            <MobileNavItem to="/support" label={t("support")} setOpen={setOpen} />
          </div>

          {/* LOCATION */}
          <div className="px-4 py-3 border-t border-red-100">
            <label className="text-xs font-semibold text-gray-500 mb-1 block">
              Location
            </label>

            <div className="relative">
              <MapPin
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
              />

              <select
                defaultValue={location}
                onChange={(e) => changeLocation(e.target.value)}
                className="w-full appearance-none
                           pl-10 pr-9 py-3
                           text-sm font-semibold
                           border border-red-300 rounded-md
                           focus:ring-2 focus:ring-red-200"
              >
                <option>Delhi</option>
                <option>Noida</option>
                <option>Gurgaon</option>
                <option>Ghaziabad</option>
                <option>Meerut</option>
              </select>

              <FaChevronDown
                size={12}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
              />
            </div>
          </div>

          {/* LANGUAGE */}
          <div className="px-4 py-3">
            <label className="text-xs font-semibold text-gray-500 mb-1 block">
              Language
            </label>

            <div className="relative">
              <FaGlobe
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-red-600"
              />

              <select
                defaultValue={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="w-full appearance-none
                           pl-10 pr-9 py-3
                           text-sm font-semibold
                           border border-red-300 rounded-md
                           focus:ring-2 focus:ring-red-200"
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>

              <FaChevronDown
                size={12}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500"
              />
            </div>
          </div>

          {/* AUTH SECTION */}
          {!isLoggedIn ? (
            <div className="px-4 py-4 border-t border-red-100 space-y-3">
              <a
                href="/login"
                className="block text-center py-3
                           border border-red-500 text-red-600
                           font-semibold rounded-md"
              >
                Login
              </a>

              <a
                href="/register"
                className="block text-center py-3
                           bg-red-600 text-white
                           font-semibold rounded-md"
              >
                Sign Up
              </a>
            </div>
          ) : (
            <div className="px-4 py-4 border-t border-red-100">
              <div className="flex items-center justify-between gap-3 p-3
                              border border-red-200 rounded-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600 text-white
                                  flex items-center justify-center font-bold">
                    {user.name?.[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Hi, {user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                  </div>
                </div>

                <button
                  onClick={logout}
                  className="p-2 rounded-md border border-red-300
                             text-red-600 hover:bg-red-50"
                >
                  <LogOut size={18} />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
