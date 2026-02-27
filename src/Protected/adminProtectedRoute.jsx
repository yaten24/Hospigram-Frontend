import { Navigate } from "react-router-dom";
import { useAdmin } from "../context/adminContext";

export default function AdminProtectedRoute({ children }) {
  const { admin, loading } = useAdmin();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}