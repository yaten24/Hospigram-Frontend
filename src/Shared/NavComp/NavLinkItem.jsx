import { NavLink } from "react-router-dom";

export default function NavLinkItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative transition-all duration-200 pb-1 ${
          isActive
            ? "text-red-600"
            : "text-gray-700 hover:text-red-600"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {label}

          {/* Active Underline */}
          {isActive && (
            <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-red-600"></span>
          )}
        </>
      )}
    </NavLink>
  );
}