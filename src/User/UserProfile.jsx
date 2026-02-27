import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";
import {
  FaIdCard,
  FaCalendarAlt,
  FaHistory,
  FaGlobe,
  FaExclamationTriangle,
} from "react-icons/fa";

import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState("profile");

  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("");
  const [location, setLocation] = useState("");
  const [availableLocations, setAvailableLocations] = useState([]);

  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [previousBookings, setPreviousBookings] = useState([]);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [confirmModal, setConfirmModal] = useState({
    open: false,
    bookingId: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [profileRes, bookingRes, locationRes] = await Promise.all([
          axios.get("http://localhost:4000/api/auth/profile", {
            withCredentials: true,
          }),
          axios.get("http://localhost:4000/api/auth/bookings", {
            withCredentials: true,
          }),
          axios.get("http://localhost:4000/api/public/available-locations"),
        ]);

        if (profileRes.data.success) {
          setUser(profileRes.data.data);
          setLanguage(profileRes.data.data.language || "en");
          setLocation(profileRes.data.data.location || "");
        }

        if (bookingRes.data.success) {
          setUpcomingBookings(bookingRes.data.upcoming);
          setPreviousBookings(bookingRes.data.previous);
        }

        if (locationRes.data.success) {
          setAvailableLocations(locationRes.data.locations);
        }
      } catch {
        toast.error("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = async () => {
    try {
      setSaving(true);

      const res = await axios.put(
        "http://localhost:4000/api/auth/update-profile",
        { language, location },
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success("Profile updated successfully");
      }
    } catch {
      toast.error("Update failed");
    } finally {
      setSaving(false);
    }
  };

  const confirmCancelBooking = async () => {
    try {
      const id = confirmModal.bookingId;

      const res = await axios.put(
        `http://localhost:4000/api/auth/cancel-booking/${id}`,
        {},
        { withCredentials: true }
      );

      if (res.data.success) {
        const cancelledBooking = upcomingBookings.find(
          (b) => b._id === id
        );

        setUpcomingBookings((prev) =>
          prev.filter((b) => b._id !== id)
        );

        if (cancelledBooking) {
          setPreviousBookings((prev) => [
            { ...cancelledBooking, status: "Cancelled" },
            ...prev,
          ]);
        }

        toast.success("Booking cancelled");
      }
    } catch {
      toast.error("Cancel failed");
    } finally {
      setConfirmModal({ open: false, bookingId: null });
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center text-red-600 font-semibold">
          Loading Profile...
        </div>
        <Footer />
      </>
    );
  }

  if (!user) return null;

  return (
    <>
      <Navbar />

      <div className="w-full bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 space-y-10">

          {/* HEADER */}
          <div className="bg-white border border-red-200 shadow-sm p-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                {user.name}
              </h1>
              <p className="text-sm text-gray-500">
                {user.email}
              </p>
            </div>

            <div className="text-xs font-semibold text-green-700 bg-green-100 border border-green-200 px-4 py-1">
              ACTIVE
            </div>
          </div>

          {/* TABS */}
          <div className="bg-white border border-red-200 shadow-sm flex">
            <TabButton
              active={activeTab === "profile"}
              label="Profile"
              onClick={() => setActiveTab("profile")}
            />
            <TabButton
              active={activeTab === "bookings"}
              label="Bookings"
              onClick={() => setActiveTab("bookings")}
            />
          </div>

          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <Section title="Basic Information" icon={<FaIdCard />}>
                <Info label="Name" value={user.name} />
                <Info label="Phone" value={user.phone} />
                <Info label="Location" value={user.location || "Not Selected"} />
              </Section>

              <Section title="Preferences" icon={<FaGlobe />}>
                <div className="space-y-5">
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 focus:border-red-500 outline-none cursor-pointer"
                  >
                    <option value="en">English</option>
                    <option value="hi">Hindi</option>
                  </select>

                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full border border-gray-300 px-3 py-2 focus:border-red-500 outline-none cursor-pointer"
                  >
                    <option value="">Select City</option>
                    {availableLocations.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={handleUpdate}
                    disabled={saving}
                    className="w-full bg-red-600 hover:bg-red-700 transition text-white py-2 font-semibold cursor-pointer disabled:opacity-50"
                  >
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </Section>
            </motion.div>
          )}

          {/* BOOKINGS TAB */}
          {activeTab === "bookings" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <Section title="Upcoming Bookings" icon={<FaCalendarAlt />}>
                {upcomingBookings.length === 0 ? (
                  <Empty text="No upcoming bookings" />
                ) : (
                  upcomingBookings.map((b) => (
                    <BookingCard
                      key={b._id}
                      data={b}
                      onCancel={() =>
                        setConfirmModal({ open: true, bookingId: b._id })
                      }
                    />
                  ))
                )}
              </Section>

              <Section title="Previous Bookings" icon={<FaHistory />}>
                {previousBookings.length === 0 ? (
                  <Empty text="No previous bookings" />
                ) : (
                  previousBookings.map((b) => (
                    <BookingCard key={b._id} data={b} />
                  ))
                )}
              </Section>
            </motion.div>
          )}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {confirmModal.open && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() =>
              setConfirmModal({ open: false, bookingId: null })
            }
          >
            <motion.div
              className="bg-white p-6 w-96 shadow-lg border border-gray-200"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 text-red-600 mb-4">
                <FaExclamationTriangle />
                <h3 className="font-semibold">
                  Confirm Cancellation
                </h3>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Are you sure you want to cancel this booking?
              </p>

              <div className="flex justify-end gap-3">
                <button
                  className="px-4 py-2 border border-gray-300 hover:bg-gray-50 cursor-pointer"
                  onClick={() =>
                    setConfirmModal({ open: false, bookingId: null })
                  }
                >
                  No
                </button>
                <button
                  onClick={confirmCancelBooking}
                  className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                >
                  Yes, Cancel
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}

/* COMPONENTS */

function TabButton({ active, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 py-3 font-semibold transition cursor-pointer ${
        active
          ? "text-red-600 border-b-2 border-red-600 bg-red-50"
          : "hover:bg-red-50 text-gray-600"
      }`}
    >
      {label}
    </button>
  );
}

function Section({ title, icon, children }) {
  return (
    <div className="bg-white border border-gray-200 shadow-sm p-6 space-y-4">
      <h2 className="font-bold flex items-center gap-2 text-gray-800">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <p className="text-xs text-gray-500">{label}</p>
      <p className="font-semibold text-gray-800">{value}</p>
    </div>
  );
}

function BookingCard({ data, onCancel }) {
  const statusStyle =
    data.status === "Confirmed"
      ? "bg-green-100 text-green-700 border-green-200"
      : data.status === "Pending"
      ? "bg-yellow-100 text-yellow-700 border-yellow-200"
      : "bg-gray-100 text-gray-600 border-gray-200";

  return (
    <div className="border border-gray-200 p-4 shadow-sm hover:shadow-md transition">
      <p className="font-semibold text-gray-800">
        {data.hospital?.name || data.lab?.name}
      </p>

      <p className="text-sm text-gray-500 mb-3">
        {new Date(data.appointmentDate).toDateString()} • {data.appointmentTime}
      </p>

      <div className="flex justify-between items-center">
        <span className={`text-xs px-3 py-1 border ${statusStyle}`}>
          {data.status}
        </span>

        {(data.status === "Pending" || data.status === "Confirmed") && (
          <button
            onClick={onCancel}
            className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1 cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

function Empty({ text }) {
  return (
    <div className="text-gray-400 text-sm border border-gray-200 p-6 text-center bg-gray-50">
      {text}
    </div>
  );
}