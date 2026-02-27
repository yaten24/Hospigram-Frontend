import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FaSearch,
  FaUser,
  FaHospital,
  FaFlask,
  FaCalendarAlt,
  FaClock,
  FaHome,
} from "react-icons/fa";

export default function AdminAssistedBooking() {
  const [patientId, setPatientId] = useState("");
  const [patient, setPatient] = useState(null);
  const [loadingPatient, setLoadingPatient] = useState(false);

  const [bookingType, setBookingType] = useState("hospital");
  const [selectedCenter, setSelectedCenter] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [selectedSlot, setSelectedSlot] = useState("");

  const [homeCollection, setHomeCollection] = useState(false);
  const [collectionAddress, setCollectionAddress] = useState("");
  const [collectionTime, setCollectionTime] = useState("");

  const timeSlots = [
    "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
    "11:00 AM","11:30 AM","12:00 PM",
    "05:00 PM","05:30 PM","06:00 PM","06:30 PM",
  ];

  /* ================= SEARCH PATIENT ================= */
  const handleSearchPatient = async () => {
    if (!patientId) return;

    try {
      setLoadingPatient(true);

      const res = await axios.get(
        `http://localhost:4000/api/admin/patient/${patientId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setPatient(res.data.data);
      }

    } catch (err) {
      alert("Patient not found");
      setPatient(null);
    } finally {
      setLoadingPatient(false);
    }
  };

  /* ================= BOOK APPOINTMENT ================= */
  const handleBook = async () => {
    if (!patient || !appointmentDate || !selectedSlot) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await axios.post(
        "http://localhost:4000/api/admin/book-appointment",
        {
          hospigramPatientId: patientId,
          hospital: bookingType === "hospital" ? selectedCenter : null,
          lab: bookingType === "lab" ? selectedCenter : null,
          appointmentDate,
          appointmentTime: selectedSlot,
          homeCollection,
          collectionAddress,
          collectionTime,
        },
        { withCredentials: true }
      );

      alert("Appointment Booked Successfully");

      // reset
      setSelectedSlot("");
      setAppointmentDate("");

    } catch (err) {
      alert("Booking failed");
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-6xl mx-auto space-y-6">

        {/* ================= SEARCH SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 border border-red-100 shadow-sm"
        >
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Search Patient
          </h2>

          <div className="flex gap-4">
            <input
              type="text"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              placeholder="Enter Hospigram Patient ID"
              className="flex-1 border border-gray-300 px-4 py-2 outline-none focus:border-red-500"
            />
            <button
              onClick={handleSearchPatient}
              className="bg-red-600 text-white px-5 py-2 font-semibold"
            >
              {loadingPatient ? "Searching..." : "Search"}
            </button>
          </div>
        </motion.div>

        {/* ================= PATIENT DETAILS ================= */}
        {patient && (
          <div className="bg-white p-6 border border-red-100 shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-2">
              Patient Details
            </h3>

            <p><FaUser className="inline mr-2 text-red-500" /> {patient.name}</p>
            <p>📱 {patient.phone}</p>
            <p>ID: {patient.hospigramPatientId}</p>
          </div>
        )}

        {/* ================= BOOKING SECTION ================= */}
        {patient && (
          <div className="bg-white p-6 border border-red-100 shadow-sm space-y-6">

            <h3 className="text-lg font-bold text-gray-800">
              Create Appointment
            </h3>

            {/* TYPE TOGGLE */}
            <div className="flex gap-4">
              <button
                onClick={() => setBookingType("hospital")}
                className={`px-4 py-2 font-semibold border ${
                  bookingType === "hospital"
                    ? "bg-red-600 text-white border-red-600"
                    : "border-gray-300"
                }`}
              >
                <FaHospital className="inline mr-2" />
                Hospital
              </button>

              <button
                onClick={() => setBookingType("lab")}
                className={`px-4 py-2 font-semibold border ${
                  bookingType === "lab"
                    ? "bg-red-600 text-white border-red-600"
                    : "border-gray-300"
                }`}
              >
                <FaFlask className="inline mr-2" />
                Lab
              </button>
            </div>

            {/* SELECT CENTER */}
            <div>
              <label className="text-sm font-semibold block mb-1">
                Select {bookingType === "hospital" ? "Hospital" : "Lab"}
              </label>
              <input
                type="text"
                value={selectedCenter}
                onChange={(e) => setSelectedCenter(e.target.value)}
                placeholder="Enter ID"
                className="w-full border border-gray-300 px-4 py-2 focus:border-red-500 outline-none"
              />
            </div>

            {/* DATE */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                <FaCalendarAlt className="inline mr-2 text-red-500" />
                Select Date
              </label>
              <input
                type="date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                className="border border-gray-300 px-4 py-2 focus:border-red-500 outline-none"
              />
            </div>

            {/* TIME SLOTS */}
            {appointmentDate && (
              <div>
                <h4 className="font-semibold mb-2">
                  <FaClock className="inline mr-2 text-red-500" />
                  Select Time
                </h4>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-2 border text-sm font-semibold ${
                        selectedSlot === slot
                          ? "bg-red-600 text-white border-red-600"
                          : "border-gray-300 hover:bg-red-50"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* HOME COLLECTION (LAB ONLY) */}
            {bookingType === "lab" && (
              <div className="border border-red-100 p-4 bg-red-50 space-y-4">
                <label className="flex items-center gap-2 font-semibold">
                  <input
                    type="checkbox"
                    checked={homeCollection}
                    onChange={(e) => setHomeCollection(e.target.checked)}
                  />
                  <FaHome className="text-red-600" />
                  Home Sample Collection
                </label>

                {homeCollection && (
                  <>
                    <input
                      type="text"
                      placeholder="Collection Address"
                      value={collectionAddress}
                      onChange={(e) =>
                        setCollectionAddress(e.target.value)
                      }
                      className="w-full border border-gray-300 px-4 py-2"
                    />

                    <input
                      type="text"
                      placeholder="Collection Time"
                      value={collectionTime}
                      onChange={(e) =>
                        setCollectionTime(e.target.value)
                      }
                      className="w-full border border-gray-300 px-4 py-2"
                    />
                  </>
                )}
              </div>
            )}

            {/* SUBMIT */}
            <button
              onClick={handleBook}
              className="w-full bg-red-600 text-white py-3 font-semibold hover:bg-red-700 transition"
            >
              Book Appointment
            </button>

          </div>
        )}

      </div>
    </section>
  );
}