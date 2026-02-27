import { NavLink, Outlet } from "react-router-dom";
import {
  FaChartPie,
  FaHospital,
  FaFlask,
  FaUsers,
  FaClipboardCheck,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-slate-100">

      {/* ================= SIDEBAR ================= */}
      <aside className="w-[260px] bg-white border-r border-slate-200 shadow-sm fixed inset-y-0 flex flex-col">

        {/* BRAND */}
        <div className="p-6 border-b border-slate-200">
          <h1 className="text-xl font-extrabold text-red-600 tracking-wide">
            Hospigram
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Administration Panel
          </p>
        </div>

        {/* NAV LINKS */}
        <nav className="flex-1 px-3 py-4 space-y-1 text-sm font-medium">

          <SidebarLink
            to="/admin"
            icon={<FaChartPie />}
            label="Dashboard"
          />

          <p className="px-3 pt-4 pb-1 text-xs uppercase tracking-widest text-slate-400">
            Management
          </p>

          <SidebarLink
            to="/admin/hospitals"
            icon={<FaHospital />}
            label="Hospitals"
          />
          <SidebarLink
            to="/admin/labs"
            icon={<FaFlask />}
            label="Labs"
          />
          <SidebarLink
            to="/admin/users"
            icon={<FaUsers />}
            label="Users"
          />

          <p className="px-3 pt-4 pb-1 text-xs uppercase tracking-widest text-slate-400">
            System
          </p>

          <SidebarLink
            to="/admin/approvals"
            icon={<FaClipboardCheck />}
            label="Approvals"
          />
          <SidebarLink
            to="/admin/book-appoitment"
            icon={<FaCog />}
            label="Book Appoitment"
          />
        </nav>

        {/* LOGOUT (BOTTOM FIXED) */}
        <div className="p-4 border-t border-slate-200">
          <button
            className="
              w-full flex items-center gap-3
              px-4 py-3
              text-red-600 font-semibold
              hover:bg-red-50
              transition
            "
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1 ml-[260px]">

        {/* ================= HEADER ================= */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <h2 className="font-bold text-slate-800">
            Admin Dashboard
          </h2>
          <span className="text-sm text-slate-500">
            Welcome, Admin
          </span>
        </header>

        {/* ================= PAGE CONTENT ================= */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/* ================= SIDEBAR LINK ================= */
function SidebarLink({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      end
      className={({ isActive }) =>
        `
        group flex items-center gap-3
        px-4 py-2.5 rounded-sm
        transition
        ${
          isActive
            ? "bg-red-600 text-white"
            : "text-slate-700 hover:bg-slate-100"
        }
      `
      }
    >
      <span
        className={`
          text-lg
          ${
            window.location.pathname === to
              ? "text-white"
              : "text-slate-500 group-hover:text-slate-700"
          }
        `}
      >
        {icon}
      </span>
      {label}
    </NavLink>
  );
}
