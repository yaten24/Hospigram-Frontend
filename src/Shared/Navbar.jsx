import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TopInfoBar from "./NavComp/TopInfoBar";
import DesktopMenu from "./NavComp/DesktopMenu";
import DesktopActions from "./NavComp/DesktopActions";
import MobileSidebar from "./NavComp/MobileSidebar";
import { useUser } from "../context/userContext";

export default function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  /* 🔐 AUTH (TEMP) */
  const {user} = useUser()

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      <TopInfoBar />

      {/* MAIN NAVBAR */}
      <nav className="fixed top-0 sm:top-10 left-0 w-full z-40 h-16 bg-white border-b border-red-100">
        <div className="h-full flex justify-between items-center px-4 md:px-8">
          {/* BRAND */}
          <Link to="/" className="leading-tight">
            <p className="text-2xl font-extrabold text-red-600">Hospigram</p>
            <p className="text-xs text-gray-500">{t("tagline")}</p>
          </Link>

          <DesktopMenu />
          <DesktopActions isLoggedIn={user} user={user} />

          {/* MOBILE MENU */}
          <button onClick={() => setOpen(true)} className="lg:hidden">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* SPACER */}
      <div className="h-16 sm:h-[104px]" />

      <MobileSidebar
        open={open}
        setOpen={setOpen}
        isLoggedIn={user}
        user={user}
      />
    </>
  );
}
