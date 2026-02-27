import { Routes, Route } from "react-router-dom";

/* ================= PUBLIC PAGES ================= */
import HomePage from "./Pages/HomePage";
import HospitalsPage from "./Pages/HospitalsPage";
import LabsPage from "./Pages/LabsPage";
import UltrasoundPage from "./Pages/UltrasoundPage";
import XRayPage from "./Pages/XRayPage";
import HowItWorksPage from "./Pages/HowItWorksPage";
import SupportPage from "./Pages/SupportPage";
import TimeSlotBooking from "./Pages/Hospital_Booking";
import UnifiedBooking from "./Pages/UnifiedBooking";
import AccessPortal from "./Pages/AccessPortal";

/* ================= AUTH ================= */
import Login from "./Auth/Login";
import Register from "./Auth/Register";

/* ================= PARTNER AUTH ================= */
import LoginSelection from "./Admin/LoginSelection";
import AdminLogin from "./Admin/AdminLogin";
import HospitalLogin from "./Admin/HospitalLogin";
import LabsLogin from "./Admin/LabsLogin";
import HospitalRegister from "./Admin/HospitalRegister";
import LabRegister from "./Admin/LabsRegister";

/* ================= USER ================= */
import UserProfile from "./User/UserProfile";
import UserProtectedRoute from "./Protected/userProtectedRoute";

/* ================= ADMIN ================= */
import AdminLayout from "./Admin/AdminDashboard/AdminLayout";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";
import AdminHospitals from "./Admin/AdminDashboard/AdminHospitals";
import AdminLabs from "./Admin/AdminDashboard/AdminLabs";
import AdminUsers from "./Admin/AdminDashboard/AdminUsers";
import AdminApprovals from "./Admin/AdminDashboard/AdminApprovals";
import AdminAssistedBooking from "./Admin/AdminDashboard/AdminAssistedBooking";
import AdminProtectedRoute from "./Protected/adminProtectedRoute";

/* ================= HOSPITAL ================= */
import HospitalDashboard from "./Admin/HospitalDashboard/HospitalDashboard";
import HospitalProtectedRoute from "./Protected/hosProtectedRoute";

/* ================= LAB ================= */
import LabDashboard from "./Admin/LabDashboard/LabDashboard";
import LabProtectedRoute from "./Protected/labProtectedRoute";
import LabTimeSlotBooking from "./Pages/Lab_Booking";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
    <Toaster position="top-right" />
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}
      <Route path="/" element={<HomePage />} />
      <Route path="/access-portal" element={<AccessPortal />} />
      <Route
        path="/hospitals"
        element={
          <UserProtectedRoute>
            <HospitalsPage />
          </UserProtectedRoute>
        }
      />
      <Route
        path="/labs"
        element={
          <UserProtectedRoute>
            <LabsPage />
          </UserProtectedRoute>
        }
      />
      <Route
        path="/ultrasound"
        element={
          <UserProtectedRoute>
            <UltrasoundPage />
          </UserProtectedRoute>
        }
      />
      <Route
        path="/xray"
        element={
          <UserProtectedRoute>
            <XRayPage />
          </UserProtectedRoute>
        }
      />
      <Route
        path="/howitsworks"
        element={
          <UserProtectedRoute>
            <HowItWorksPage />
          </UserProtectedRoute>
        }
      />
      <Route
        path="/support"
        element={
          <UserProtectedRoute>
            <SupportPage />
          </UserProtectedRoute>
        }
      />
      <Route
        path="/hospital/:id"
        element={
          <UserProtectedRoute>
            <TimeSlotBooking />
          </UserProtectedRoute>
        }
      />
      <Route
        path="/lab/:id"
        element={
          <UserProtectedRoute>
            <LabTimeSlotBooking />
          </UserProtectedRoute>
        }
      />
      <Route
        path="/book-now"
        element={
          <UserProtectedRoute>
            <UnifiedBooking />
          </UserProtectedRoute>
        }
      />

      {/* ================= PATIENT AUTH ================= */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* ================= PARTNER AUTH ================= */}
      <Route path="/partner-login" element={<LoginSelection />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/hospital-login" element={<HospitalLogin />} />
      <Route path="/labs-login" element={<LabsLogin />} />
      <Route path="/become-hospital-partner" element={<HospitalRegister />} />
      <Route path="/become-lab-partner" element={<LabRegister />} />

      {/* ================= PATIENT PROTECTED ================= */}
      <Route
        path="/profile"
        element={
          <UserProtectedRoute>
            <UserProfile />
          </UserProtectedRoute>
        }
      />

      {/* ================= ADMIN PROTECTED ================= */}
      <Route
        path="/admin"
        element={
          <AdminProtectedRoute>
            <AdminLayout />
          </AdminProtectedRoute>
        }
      >
        <Route index element={<AdminDashboard />} />
        <Route path="hospitals" element={<AdminHospitals />} />
        <Route path="labs" element={<AdminLabs />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="approvals" element={<AdminApprovals />} />
        <Route path="book-appointment" element={<AdminAssistedBooking />} />
      </Route>

      {/* ================= HOSPITAL PROTECTED ================= */}
      <Route
        path="/hospital-dashboard"
        element={
          <HospitalProtectedRoute>
            <HospitalDashboard />
          </HospitalProtectedRoute>
        }
      />

      {/* ================= LAB PROTECTED ================= */}
      <Route
        path="/lab-dashboard"
        element={
          <LabProtectedRoute>
            <LabDashboard />
          </LabProtectedRoute>
        }
      />
    </Routes>
    </>
  );
}
