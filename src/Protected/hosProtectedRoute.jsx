import { Navigate } from "react-router-dom";
import { useHospital } from "../context/hospitalContext";

export default function HospitalProtectedRoute({ children }) {
  const { hospital, loading } = useHospital();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!hospital) {
    return <Navigate to="/hospital-login" replace />;
  }

  return children;
}