import { useMemo, useState, useEffect } from "react";
import {
  FaFlask,
  FaSignOutAlt,
  FaHome,
  FaPhoneAlt,
  FaExclamationTriangle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useLab } from "../../context/labsContext";
import axios from "axios";
import toast from "react-hot-toast";

export default function LabDashboard() {
  const { lab, setLab, loading } = useLab();
  const navigate = useNavigate();

  const [tests, setTests] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [filter, setFilter] = useState("Pending");

  const [confirmModal, setConfirmModal] = useState({
    open: false,
    id: null,
    status: "",
  });

  /* ================= FETCH BOOKINGS ================= */
  useEffect(() => {
    if (!lab) return;

    const fetchBookings = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/labs/bookings",
          { withCredentials: true }
        );

        if (res.data.success) {
          setTests(res.data.bookings);
        }
      } catch {
        toast.error("Failed to load bookings");
      } finally {
        setDataLoading(false);
      }
    };

    fetchBookings();
  }, [lab]);

  /* ================= FILTERED DATA ================= */
  const filteredTests = useMemo(() => {
    if (filter === "All") return tests;
    return tests.filter((t) => t.status === filter);
  }, [tests, filter]);

  /* ================= STATS ================= */
  const stats = useMemo(() => {
    return {
      total: tests.length,
      pending: tests.filter((t) => t.status === "Pending").length,
      confirmed: tests.filter((t) => t.status === "Confirmed").length,
      completed: tests.filter((t) => t.status === "Completed").length,
    };
  }, [tests]);

  /* ================= STATUS UPDATE ================= */
  const confirmUpdate = async () => {
    try {
      const { id, status } = confirmModal;

      const res = await axios.put(
        `http://localhost:4000/api/labs/booking/${id}`,
        { status },
        { withCredentials: true }
      );

      if (res.data.success) {
        setTests((prev) =>
          prev.map((t) =>
            t._id === id ? { ...t, status } : t
          )
        );

        toast.success(`Appointment ${status}`);
      }
    } catch {
      toast.error("Failed to update status");
    } finally {
      setConfirmModal({ open: false, id: null, status: "" });
    }
  };

  /* ================= LOGOUT ================= */
  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/api/labs/logout",
        {},
        { withCredentials: true }
      );
      setLab(null);
      toast.success("Logged out successfully");
      navigate("/lab-login");
    } catch {
      toast.error("Logout failed");
    }
  };

  if (loading || dataLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        Loading Dashboard...
      </div>
    );
  }

  if (!lab) {
    navigate("/lab-login");
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 md:px-10 py-10">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-slate-200 shadow-lg p-6 md:p-8 mb-8 flex flex-col md:flex-row justify-between gap-6"
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-slate-800">
            <FaFlask className="text-indigo-600" />
            {lab.name}
          </h1>

          <p className="text-sm text-slate-500 mt-2">
            {lab.address}
          </p>

          {lab.homeCollectionAvailable && (
            <div className="mt-3 flex items-center gap-2 text-green-600 text-sm font-semibold">
              <FaHome />
              Home Collection Available
            </div>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 border border-red-500 text-red-600 px-5 py-2 font-semibold hover:bg-red-600 hover:text-white transition"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </motion.div>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 mb-6">
        {["Pending", "Confirmed", "Completed", "Rejected", "All"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 text-sm font-semibold border transition ${
              filter === status
                ? "bg-indigo-600 text-white border-indigo-600"
                : "border-slate-300 text-slate-600 hover:bg-slate-100"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Total" value={stats.total} />
        <StatCard label="Pending" value={stats.pending} />
        <StatCard label="Confirmed" value={stats.confirmed} />
        <StatCard label="Completed" value={stats.completed} />
      </div>

      {/* TABLE */}
      <div className="bg-white border border-slate-200 shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b bg-slate-50">
          <h2 className="text-lg font-semibold text-slate-700">
            Lab Appointments ({filter})
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[1200px]">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="py-4 px-6 text-left">Patient</th>
                <th className="py-4 px-6 text-left">Test</th>
                <th className="py-4 px-6 text-left">Schedule</th>
                <th className="py-4 px-6 text-left">Details</th>
                <th className="py-4 px-6 text-left">Status</th>
                <th className="py-4 px-6 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredTests.map((t) => (
                <tr key={t._id} className="border-t hover:bg-slate-50">

                  {/* PATIENT */}
                  <td className="py-4 px-6">
                    <p className="font-semibold text-slate-800">
                      {t.patientId}
                    </p>

                    {t.homeCollection && (
                      <a
                        href={`tel:${t.patientPhone}`}
                        className="flex items-center gap-2 text-xs text-indigo-600 hover:underline"
                      >
                        <FaPhoneAlt />
                        {t.patientPhone}
                      </a>
                    )}
                  </td>

                  {/* TEST */}
                  <td className="py-4 px-6 font-medium">
                    {t.testName}
                  </td>

                  {/* SCHEDULE */}
                  <td className="py-4 px-6">
                    {new Date(t.appointmentDate).toDateString()}
                    <div className="text-xs text-slate-500">
                      {t.appointmentTime}
                    </div>
                  </td>

                  {/* DETAILS */}
                  <td className="py-4 px-6 text-xs space-y-2">

                    <div>
                      <span className="font-semibold">Booked:</span>{" "}
                      {new Date(t.createdAt).toDateString()}
                    </div>

                    <div>
                      <span className="font-semibold">Payment:</span>{" "}
                      <span
                        className={
                          t.paymentStatus === "Paid"
                            ? "text-green-600 font-semibold"
                            : "text-red-500 font-semibold"
                        }
                      >
                        {t.paymentStatus}
                      </span>
                    </div>

                    {t.homeCollection && (
                      <div className="inline-flex items-center gap-2 px-2 py-1 bg-green-100 text-green-700 font-semibold rounded-sm">
                        <FaHome />
                        Home Collection
                      </div>
                    )}

                    {t.problemDescription && (
                      <div>
                        <span className="font-semibold">Description:</span>
                        <p className="italic text-slate-500 mt-1">
                          {t.problemDescription}
                        </p>
                      </div>
                    )}
                  </td>

                  {/* STATUS */}
                  <td className="py-4 px-6">
                    <StatusBadge status={t.status} />
                  </td>

                  {/* ACTION */}
                  <td className="py-4 px-6 flex gap-2 flex-wrap">
                    {t.status === "Pending" && (
                      <>
                        <ActionBtn
                          label="Confirm"
                          color="blue"
                          onClick={() =>
                            setConfirmModal({
                              open: true,
                              id: t._id,
                              status: "Confirmed",
                            })
                          }
                        />
                        <ActionBtn
                          label="Reject"
                          color="red"
                          onClick={() =>
                            setConfirmModal({
                              open: true,
                              id: t._id,
                              status: "Rejected",
                            })
                          }
                        />
                      </>
                    )}

                    {t.status === "Confirmed" && (
                      <ActionBtn
                        label="Complete"
                        color="green"
                        onClick={() =>
                          setConfirmModal({
                            open: true,
                            id: t._id,
                            status: "Completed",
                          })
                        }
                      />
                    )}
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* CONFIRM MODAL */}
      <AnimatePresence>
        {confirmModal.open && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="bg-white p-6 w-96 shadow-xl border"
            >
              <div className="flex items-center gap-3 text-red-600 mb-4">
                <FaExclamationTriangle />
                <h3 className="font-semibold">Confirm Action</h3>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to mark this appointment as{" "}
                <strong>{confirmModal.status}</strong>?
              </p>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() =>
                    setConfirmModal({ open: false, id: null, status: "" })
                  }
                  className="px-4 py-2 border hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  onClick={confirmUpdate}
                  className="px-4 py-2 bg-red-600 text-white hover:bg-red-700"
                >
                  Yes, Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

/* COMPONENTS */

function StatCard({ label, value }) {
  return (
    <div className="bg-white border border-slate-200 shadow-sm p-5">
      <p className="text-xs text-slate-500">{label}</p>
      <h3 className="text-xl font-bold mt-1">{value}</h3>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-700",
    Confirmed: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
    Cancelled: "bg-gray-100 text-gray-600",
  };

  return (
    <span className={`px-3 py-1 text-xs font-semibold ${styles[status]}`}>
      {status}
    </span>
  );
}

function ActionBtn({ label, onClick, color }) {
  const colors = {
    blue: "border-blue-500 text-blue-600 hover:bg-blue-600 hover:text-white",
    green:
      "border-green-500 text-green-600 hover:bg-green-600 hover:text-white",
    red: "border-red-500 text-red-600 hover:bg-red-600 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 text-xs font-semibold border transition ${colors[color]}`}
    >
      {label}
    </button>
  );
}