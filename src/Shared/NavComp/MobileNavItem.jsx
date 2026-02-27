import { Link } from "react-router-dom";

export default function MobileNavItem({ to, label, setOpen }) {
  return (
    <Link
      to={to}
      onClick={() => setOpen(false)}
      className="flex justify-between items-center px-4 py-3
                 border border-red-300 rounded-md font-semibold"
    >
      <span>{label}</span>
      <span className="text-red-500">›</span>
    </Link>
  );
}
