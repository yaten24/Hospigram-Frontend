import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import {
  FaHospital,
  FaFlask,
  FaCalendarAlt,
  FaClock,
  FaNotesMedical,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UnifiedBooking() {
  const [bookingType, setBookingType] = useState("Hospital");

  const [hospitals, setHospitals] = useState([]);
  const [labs, setLabs] = useState([]);

  const [selectedHospital, setSelectedHospital] = useState("");
  const [selectedLab, setSelectedLab] = useState("");
  const [selectedTests, setSelectedTests] = useState([]);

  const [problem, setProblem] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [homeCollection, setHomeCollection] = useState(false);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const timeSlots = [
    "09:00 AM","09:30 AM","10:00 AM","10:30 AM",
    "11:00 AM","11:30 AM","12:00 PM",
    "05:00 PM","05:30 PM","06:00 PM","06:30 PM",
  ];

  const testsList = [
    "CBC",
    "Blood Sugar",
    "Thyroid Profile",
    "Vitamin D",
    "Liver Function Test",
  ];

  /* ================= FETCH LISTS ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [hospitalRes, labRes] = await Promise.all([
          axios.get("http://localhost:4000/api/public/hospitals/list"),
          axios.get("http://localhost:4000/api/public/labs/list"),
        ]);

        setHospitals(hospitalRes.data.hospitals || []);
        setLabs(labRes.data.labs || []);
      } catch (error) {
        console.error("Fetch error");
      }
    };

    fetchData();
  }, []);

  const toggleTest = (test) => {
    if (selectedTests.includes(test)) {
      setSelectedTests(selectedTests.filter((t) => t !== test));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  };

  const handleSubmit = async () => {
  if (!date || !time) {
    alert("Please select date and time");
    return;
  }

  if (bookingType === "Hospital" && !selectedHospital) {
    alert("Please select hospital");
    return;
  }

  if (bookingType === "Lab" && !selectedLab) {
    alert("Please select lab");
    return;
  }

  try {
    setLoading(true);

    const payload = {
      providerType: bookingType,
      hospital: bookingType === "Hospital" ? selectedHospital : undefined,
      lab: bookingType === "Lab" ? selectedLab : undefined,
      problemDescription: problem,
      testName:
        bookingType === "Lab" ? selectedTests.join(", ") : undefined,
      appointmentDate: date,
      appointmentTime: time,
      homeCollection: bookingType === "Lab" ? homeCollection : false,
    };

    const res = await axios.post(
      "http://localhost:4000/api/appointments/book",
      payload,
      { withCredentials: true }
    );

    if (res.data.success) {
      // Optional: show small success delay
      setTimeout(() => {
        navigate("/"); // ✅ Redirect to Home page
      }, 800);
    }

  } catch (error) {
    alert(error.response?.data?.message || "Booking failed");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-50 flex items-center justify-center px-4 py-12">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-3xl bg-white shadow-xl border border-red-100 p-8 md:p-10 space-y-8"
      >

        {/* TITLE */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gray-800">
            Book Appointment
          </h2>
          <p className="text-gray-500 text-sm">
            Secure & fast booking with Hospigram
          </p>
        </div>

        {/* TYPE SWITCH */}
        <div className="flex justify-center gap-4">
          {["Hospital", "Lab"].map((type) => (
            <button
              key={type}
              onClick={() => setBookingType(type)}
              className={`px-6 py-2 font-semibold border transition-all duration-200 ${
                bookingType === type
                  ? "bg-red-600 text-white border-red-600 shadow-md"
                  : "border-gray-300 hover:bg-red-50"
              }`}
            >
              {type === "Hospital" ? <FaHospital className="inline mr-2" /> : <FaFlask className="inline mr-2" />}
              {type}
            </button>
          ))}
        </div>

        {/* PROVIDER SELECT */}
        {bookingType === "Hospital" && (
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Select Hospital
            </label>
            <select
              value={selectedHospital}
              onChange={(e) => setSelectedHospital(e.target.value)}
              className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
            >
              <option value="">Choose hospital</option>
              {hospitals.map((h) => (
                <option key={h._id} value={h._id}>
                  {h.name}
                </option>
              ))}
            </select>
          </div>
        )}

        {bookingType === "Lab" && (
          <>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">
                Select Lab
              </label>
              <select
                value={selectedLab}
                onChange={(e) => setSelectedLab(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
              >
                <option value="">Choose lab</option>
                {labs.map((l) => (
                  <option key={l._id} value={l._id}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>

            {/* TESTS */}
            <div>
              <label className="block mb-3 font-semibold text-gray-700">
                Select Tests
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {testsList.map((test, i) => (
                  <button
                    key={i}
                    onClick={() => toggleTest(test)}
                    className={`py-2 text-sm font-medium border transition ${
                      selectedTests.includes(test)
                        ? "bg-red-600 text-white border-red-600"
                        : "border-gray-300 hover:bg-red-50"
                    }`}
                  >
                    {test}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* PROBLEM */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            <FaNotesMedical className="inline mr-2 text-red-500" />
            Describe Your Problem (Optional)
          </label>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            rows={3}
            className="w-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        {/* DATE */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            <FaCalendarAlt className="inline mr-2 text-red-500" />
            Select Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-red-500 outline-none"
          />
        </div>

        {/* TIME */}
        {date && (
          <div>
            <label className="block mb-3 font-semibold text-gray-700">
              <FaClock className="inline mr-2 text-red-500" />
              Select Time
            </label>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
              {timeSlots.map((slot, i) => (
                <button
                  key={i}
                  onClick={() => setTime(slot)}
                  className={`py-2 text-sm border transition ${
                    time === slot
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

        {/* HOME COLLECTION */}
        {bookingType === "Lab" && (
          <div className="border border-red-100 bg-red-50 p-4">
            <label className="flex items-center gap-3 font-medium text-gray-700">
              <input
                type="checkbox"
                checked={homeCollection}
                onChange={(e) => setHomeCollection(e.target.checked)}
              />
              <FaHome className="text-red-600" />
              Home Sample Collection
            </label>
          </div>
        )}

        {/* SUBMIT */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-red-600 text-white py-3 font-semibold hover:bg-red-700 transition shadow-md"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>

      </motion.div>
    </section>
  );
}