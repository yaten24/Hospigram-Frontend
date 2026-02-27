import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaFlask,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaCalendarAlt,
  FaClock,
  FaHome,
} from "react-icons/fa";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import axios from "axios";

export default function LabTimeSlotBooking() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [lab, setLab] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedTests, setSelectedTests] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [homeCollection, setHomeCollection] = useState(false);
  const [problem, setProblem] = useState("");

  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingMessage, setBookingMessage] = useState(null);

  const timeSlots = [
    "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
    "11:00 AM","11:30 AM","12:00 PM",
    "05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM",
  ];

  /* ================= FETCH LAB ================= */
  useEffect(() => {
    const fetchLab = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4000/api/public/labs/${id}`
        );

        if (res.data.success) {
          setLab(res.data.data);
        } else {
          setError("Lab not found");
        }
      } catch (err) {
        setError("Failed to load lab data");
      } finally {
        setLoading(false);
      }
    };

    fetchLab();
  }, [id]);

  const toggleTest = (test) => {
    if (selectedTests.includes(test)) {
      setSelectedTests(selectedTests.filter((t) => t !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  /* ================= BOOK APPOINTMENT ================= */
  const handleConfirmBooking = async () => {
    if (!selectedDate || !selectedSlot) {
      setBookingMessage("Please select date and time.");
      return;
    }

    if (selectedTests.length === 0) {
      setBookingMessage("Please select at least one test.");
      return;
    }

    try {
      setBookingLoading(true);
      setBookingMessage(null);

      const payload = {
        providerType: "Lab",
        lab: id,
        testName: selectedTests.join(", "),
        appointmentDate: selectedDate,
        appointmentTime: selectedSlot,
        homeCollection,
        problemDescription: problem,
      };

      const res = await axios.post(
        "http://localhost:4000/api/appointments/book",
        payload,
        { withCredentials: true }
      );

      if (res.data.success) {
        setBookingMessage("Lab test booked successfully!");

        setTimeout(() => {
          navigate("/labs");
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

      <div className="min-h-screen bg-gray-50 pt-6 pb-12">
        <div className="max-w-4xl mx-auto px-4 space-y-6">

          {loading && (
            <div className="text-center text-sm text-gray-600">
              Loading lab details...
            </div>
          )}

          {error && (
            <div className="text-center text-sm text-red-600">
              {error}
            </div>
          )}

          {lab && (
            <>
              {/* LAB DETAILS */}
              <div className="bg-white border border-red-100 p-5 shadow-sm">
                <h1 className="text-lg font-bold flex items-center gap-2">
                  <FaFlask className="text-red-600" />
                  {lab.name}
                </h1>

                <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-red-500 text-xs" />
                  {lab.address}
                </p>

                <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                  <FaPhoneAlt className="text-red-500 text-xs" />
                  {lab.phone}
                </p>

                {lab.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {lab.description}
                  </p>
                )}
              </div>

              {/* TEST SELECTION */}
              <div className="bg-white border border-red-100 p-5 shadow-sm">
                <h2 className="text-base font-bold mb-4">Select Tests</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {lab.services?.map((test, index) => (
                    <button
                      key={index}
                      onClick={() => toggleTest(test)}
                      className={`py-2 text-sm font-semibold border transition
                        ${
                          selectedTests.includes(test)
                            ? "bg-red-600 text-white border-red-600"
                            : "border-red-300 hover:bg-red-50"
                        }`}
                    >
                      {test}
                    </button>
                  ))}
                </div>
              </div>

              {/* PROBLEM DESCRIPTION */}
              <div className="bg-white border border-red-100 p-5 shadow-sm">
                <label className="block text-sm font-semibold mb-2">
                  Describe Symptoms / Notes (Optional)
                </label>

                <textarea
                  value={problem}
                  onChange={(e) => setProblem(e.target.value)}
                  rows={3}
                  placeholder="Write any symptoms or additional notes..."
                  className="w-full border border-red-200 px-4 py-2
                             focus:outline-none focus:ring-2 focus:ring-red-200"
                />
              </div>

              {/* DATE */}
              <div className="bg-white border border-red-100 p-5 shadow-sm">
                <label className="block text-sm font-semibold mb-2 flex items-center gap-2">
                  <FaCalendarAlt className="text-red-600" />
                  Select Date
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

              {/* TIME */}
              {selectedDate && (
                <div className="bg-white border border-red-100 p-5 shadow-sm">
                  <h2 className="text-base font-bold mb-4 flex items-center gap-2">
                    <FaClock className="text-red-600" />
                    Available Time Slots
                  </h2>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedSlot(slot)}
                        className={`py-2 text-sm font-semibold border transition
                          ${
                            selectedSlot === slot
                              ? "bg-red-600 text-white border-red-600"
                              : "border-red-300 hover:bg-red-50"
                          }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* HOME COLLECTION */}
              <div className="bg-white border border-red-100 p-5 shadow-sm">
                <label className="flex items-center gap-3 font-medium">
                  <input
                    type="checkbox"
                    checked={homeCollection}
                    onChange={(e) => setHomeCollection(e.target.checked)}
                  />
                  <FaHome className="text-red-600" />
                  Home Sample Collection
                </label>
              </div>

              {/* CONFIRM */}
              {selectedSlot && (
                <div className="bg-white border border-red-100 p-5 shadow-sm flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                  <div className="text-sm">
                    <p>Date: {selectedDate}</p>
                    <p className="font-semibold text-red-600">
                      Time: {selectedSlot}
                    </p>
                  </div>

                  <button
                    onClick={handleConfirmBooking}
                    disabled={bookingLoading}
                    className="bg-red-600 text-white px-6 py-2 text-sm font-semibold
                               hover:bg-red-700 transition disabled:opacity-60"
                  >
                    {bookingLoading ? "Booking..." : "Confirm Booking"}
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