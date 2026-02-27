import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaHospitalAlt,
  FaMapMarkerAlt,
  FaStar,
  FaInfoCircle,
  FaPhoneAlt,
} from "react-icons/fa";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import axios from "axios";

export default function TimeSlotBooking() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();

  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState(null);

  const timeSlots = [
    "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
    "11:00 AM","11:30 AM","12:00 PM",
    "05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM",
  ];

  /* ================= FETCH HOSPITAL ================= */
  useEffect(() => {
    const fetchHospital = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/public/hospital/${id}`
        );

        if (res.data.success) {
          setHospital(res.data.data);
        } else {
          setError("Hospital not found");
        }
      } catch (err) {
        setError("Failed to load hospital data");
      } finally {
        setLoading(false);
      }
    };

    fetchHospital();
  }, [id]);

  /* ================= CONFIRM BOOKING ================= */
  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedSlot) {
      setBookingMessage("Please select date and time.");
      return;
    }

    try {
      setBookingLoading(true);
      setBookingMessage(null);

      const payload = {
        providerType: "Hospital",
        hospital: id,
        appointmentDate: selectedDate,
        appointmentTime: selectedSlot,
        problemDescription: "",
      };

      const res = await axios.post(
        "http://localhost:4000/api/appointments/book",
        payload,
        { withCredentials: true }
      );

      if (res.data.success) {
        setBookingMessage("Appointment booked successfully!");

        setTimeout(() => {
          navigate("/hospitals");
        }, 1200);
      }

    } catch (error) {
      setBookingMessage(
        error.response?.data?.message || "Booking failed."
      );
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="w-full bg-gray-50 pt-6 pb-12 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 space-y-6">

          {loading && (
            <div className="text-center text-sm text-gray-600">
              Loading hospital details...
            </div>
          )}

          {error && (
            <div className="text-center text-sm text-red-600">
              {error}
            </div>
          )}

          {hospital && (
            <>
              {/* ================= HOSPITAL DETAILS ================= */}
              <div className="bg-white border border-red-100 p-5 shadow-sm">

                <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">

                  <div>
                    <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                      <FaHospitalAlt className="text-red-600" />
                      {hospital.name}
                    </h1>

                    <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                      <FaMapMarkerAlt className="text-red-500 text-xs" />
                      {hospital.address}
                    </p>

                    <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                      <FaPhoneAlt className="text-red-500 text-xs" />
                      {hospital.phone}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm font-semibold text-green-600">
                      <FaStar /> 4.5
                    </span>

                    <span className="text-sm font-semibold text-gray-800 capitalize">
                      {hospital.hospitalType}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 flex gap-2 mt-4">
                  <FaInfoCircle className="text-red-500 mt-1 text-xs" />
                  <p>{hospital.description}</p>
                </div>
              </div>

              {/* ================= DATE ================= */}
              <div className="bg-white border border-red-100 p-5 shadow-sm">
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <FaCalendarAlt className="text-red-600" />
                  {t("appointmentDate")}
                </label>

                <input
                  type="date"
                  value={selectedDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => {
                    setSelectedDate(e.target.value);
                    setSelectedSlot(null);
                  }}
                  className="w-full md:w-60 border border-red-200 px-4 py-2
                             focus:outline-none focus:ring-2 focus:ring-red-200"
                />
              </div>

              {/* ================= TIME SLOTS ================= */}
              {selectedDate && (
                <div className="bg-white border border-red-100 p-5 shadow-sm">
                  <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FaClock className="text-red-600" />
                    {t("availableTimeSlots")}
                  </h2>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 text-sm font-semibold border transition-all
                          ${
                            selectedSlot === slot
                              ? "bg-red-600 text-white border-red-600"
                              : "bg-white text-gray-700 border-red-300 hover:bg-red-50 hover:text-red-600"
                          }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ================= CONFIRM ================= */}
              {selectedSlot && (
                <div className="bg-white border border-red-100 p-5 shadow-sm
                                flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                  <div className="text-sm">
                    <p className="font-semibold text-gray-900">
                      {t("confirmAppointment")}
                    </p>
                    <p className="text-gray-600">
                      Date:
                      <span className="font-medium ml-1">
                        {selectedDate}
                      </span>
                    </p>
                    <p className="text-gray-600">
                      Time:
                      <span className="font-semibold text-red-600 ml-1">
                        {selectedSlot}
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={handleConfirmBooking}
                    disabled={bookingLoading}
                    className="bg-red-600 text-white px-6 py-2
                               text-sm font-semibold
                               hover:bg-red-700 transition disabled:opacity-60"
                  >
                    {bookingLoading ? "Booking..." : t("confirmBooking")}
                  </button>
                </div>
              )}

              {bookingMessage && (
                <div className="text-center text-sm font-semibold mt-3 text-green-600">
                  {bookingMessage}
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}