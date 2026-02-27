import {
  FaMapMarkerAlt,
  FaStar,
  FaHospitalAlt,
  FaPhoneAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaCalendarAlt,
  FaClock,
  FaHome,
  FaTimes,
  FaXRay,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Navbar from "../Shared/Navbar";
import EmergencyBanner from "../Components/EmergencyBanner";
import MegaFooter from "../Shared/Footer";

export default function XRayPage() {
  const HOSPIGRAM_NUMBER = "1800-120-9999";

  const [providers, setProviders] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedProvider, setSelectedProvider] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [description, setDescription] = useState("");
  const [homeCollection, setHomeCollection] = useState(false);

  const [bookingLoading, setBookingLoading] = useState(false);

  const timeSlots = [
    "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
    "11:00 AM","11:30 AM","12:00 PM",
    "05:00 PM","05:30 PM","06:00 PM","06:30 PM",
  ];

  useEffect(() => {
    const fetchProviders = async () => {
      try {
        const res = await axios.get(
          "http://localhost:4000/api/public/xray/providers"
        );
        if (res.data.success) {
          setProviders(res.data.providers);
        }
      } catch (error) {
        console.error("Failed to fetch providers");
      } finally {
        setLoading(false);
      }
    };

    fetchProviders();
  }, []);

  const openBookingModal = (provider) => {
    setSelectedProvider(provider);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDate("");
    setSelectedTime("");
    setDescription("");
    setHomeCollection(false);
  };

  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) {
      toast.error("Please select date and time");
      return;
    }

    try {
      setBookingLoading(true);

      const payload = {
        providerType: selectedProvider.providerType,
        hospital:
          selectedProvider.providerType === "Hospital"
            ? selectedProvider.id
            : undefined,
        lab:
          selectedProvider.providerType === "Lab"
            ? selectedProvider.id
            : undefined,
        testName: "X-Ray",
        appointmentDate: selectedDate,
        appointmentTime: selectedTime,
        homeCollection:
          selectedProvider.providerType === "Lab"
            ? homeCollection
            : false,
        problemDescription: description,
      };

      const res = await axios.post(
        "http://localhost:4000/api/appointments/book",
        payload,
        { withCredentials: true }
      );

      if (res.data.success) {
        toast.success("✅ X-Ray Booking Confirmed!");
        closeModal();
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Booking failed"
      );
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <Navbar />

      {/* ================= GRID ================= */}
      <section className="w-full py-10">
        <div className="w-full px-4 sm:px-10">

          {loading && (
            <div className="text-center text-gray-600 text-sm">
              Loading providers...
            </div>
          )}

          {!loading && providers.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <FaExclamationTriangle className="text-red-500 text-5xl mb-4" />
              <h2 className="text-xl font-bold text-gray-800">
                No X-Ray Centers Available
              </h2>
            </div>
          )}

          {!loading && providers.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

              {providers.map((center) => (
                <div
                  key={center.id}
                  className="bg-white border border-red-100 hover:shadow-xl transition flex flex-col justify-between"
                >
                  <div className="p-4 space-y-3">

                    {/* NAME */}
                    <h3 className="text-sm font-bold text-gray-900 line-clamp-2">
                      {center.name}
                    </h3>

                    {/* TYPE BADGE + RATING */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] px-2 py-1 font-semibold uppercase tracking-wide
                        ${
                          center.providerType === "Hospital"
                            ? "bg-blue-50 text-blue-600 border border-blue-200"
                            : "bg-green-50 text-green-600 border border-green-200"
                        }`}
                      >
                        {center.providerType}
                      </span>

                      <div className="flex items-center gap-1 text-xs text-yellow-600 font-semibold">
                        <FaStar />
                        4.6
                      </div>
                    </div>

                    {/* ADDRESS */}
                    <div className="flex items-start gap-2 text-[11px] text-gray-600">
                      <FaMapMarkerAlt className="text-red-600 mt-0.5" />
                      <span className="line-clamp-2">
                        {center.location || "Address not available"}
                      </span>
                    </div>

                    {/* SERVICES */}
                    <div className="flex items-start gap-2 text-[11px] text-gray-500">
                      <FaXRay className="text-red-600 mt-0.5" />
                      <span className="line-clamp-2">
                        {center.services || "X-Ray Services Available"}
                      </span>
                    </div>

                    {/* PHONE */}
                    {center.phone && (
                      <div className="flex items-center gap-2 text-[11px] text-gray-600">
                        <FaPhoneAlt className="text-red-500" />
                        {center.phone}
                      </div>
                    )}

                    {/* VERIFIED */}
                    <div className="flex items-center gap-1 text-green-600 text-[11px] font-semibold">
                      <FaCheckCircle />
                      Verified by Hospigram
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="border-t border-gray-100 p-3 flex flex-col gap-2">
                    <button
                      onClick={() => openBookingModal(center)}
                      className="py-2 text-xs font-semibold bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Book X-Ray
                    </button>

                    <a
                      href={`tel:${HOSPIGRAM_NUMBER}`}
                      className="py-2 text-xs font-semibold border border-red-600 text-red-600 hover:bg-red-50 transition flex items-center justify-center gap-1"
                    >
                      <FaPhoneAlt />
                      Call Now
                    </a>
                  </div>
                </div>
              ))}

            </div>
          )}
        </div>
      </section>

      {/* ================= MODAL ================= */}
      {showModal && selectedProvider && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

          <div className="bg-white w-full max-w-md p-6 space-y-4 relative">

            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-600"
            >
              <FaTimes />
            </button>

            <h2 className="text-lg font-bold text-gray-800">
              Book X-Ray - {selectedProvider.name}
            </h2>

            {/* DATE */}
            <div>
              <label className="text-sm font-semibold flex items-center gap-2">
                <FaCalendarAlt className="text-red-600" />
                Select Date
              </label>
              <input
                type="date"
                value={selectedDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full border border-red-200 px-3 py-2 mt-1"
              />
            </div>

            {/* TIME */}
            <div>
              <label className="text-sm font-semibold flex items-center gap-2">
                <FaClock className="text-red-600" />
                Select Time
              </label>

              <div className="grid grid-cols-3 gap-2 mt-2">
                {timeSlots.map((slot, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedTime(slot)}
                    className={`py-1 text-xs border ${
                      selectedTime === slot
                        ? "bg-red-600 text-white border-red-600"
                        : "border-red-300 hover:bg-red-50"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* DESCRIPTION */}
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              placeholder="Describe your issue (optional)"
              className="w-full border border-red-200 px-3 py-2"
            />

            {/* HOME COLLECTION */}
            {selectedProvider.providerType === "Lab" && (
              <label className="flex items-center gap-3 text-sm font-medium">
                <input
                  type="checkbox"
                  checked={homeCollection}
                  onChange={(e) => setHomeCollection(e.target.checked)}
                />
                <FaHome className="text-red-600" />
                Home Collection
              </label>
            )}

            <button
              onClick={handleBooking}
              disabled={bookingLoading}
              className="w-full bg-red-600 text-white py-2 font-semibold hover:bg-red-700 transition disabled:opacity-50"
            >
              {bookingLoading ? "Booking..." : "Confirm Booking"}
            </button>

          </div>
        </div>
      )}

      <EmergencyBanner />
      <MegaFooter />
    </div>
  );
}