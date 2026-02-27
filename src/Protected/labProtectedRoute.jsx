import { Navigate } from "react-router-dom";
import { useLab } from "../context/labsContext";

export default function LabProtectedRoute({ children }) {
  const { lab, loading } = useLab();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!lab) {
    return <Navigate to="/labs-login" replace />;
  }

  return children;
}