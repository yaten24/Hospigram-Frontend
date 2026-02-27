import { Navigate } from "react-router-dom";
import { useLab } from "../context/labsContext";
import { useHospital } from "../context/hospitalContext";
import { useAdmin } from "../context/adminContext";
import { useUser } from "../context/userContext";

export default function ProtectedRoute({ children, role }) {
  const { lab } = useLab();
  const { hospital } = useHospital();
  const { admin } = useAdmin();
  const { user } = useUser();

  if (role === "lab" && !lab) {
    return <Navigate to="/lab/login" />;
  }

  if (role === "hospital" && !hospital) {
    return <Navigate to="/hospital/login" />;
  }

  if (role === "admin" && !admin) {
    return <Navigate to="/admin/login" />;
  }

  if (role === "user" && !user) {
    return <Navigate to="/login" />;
  }

  return children;
}