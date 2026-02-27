import { useState } from "react";
import {
  FaHospital,
  FaSearch,
  FaEye,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function AdminHospitals() {
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [search, setSearch] = useState("");

  // 🔐 ALL hospitals (backend data)
  const allHospitals = [
    {
      id: 1,
      name: "City Care Hospital",
      email: "citycare@gmail.com",
      city: "Delhi",
      status: "Approved",
      address: "Sector 18, Noida, Delhi NCR",
      phone: "+91 9876543210",
    },
    {
      id: 2,
      name: "LifeLine Multispeciality",
      email: "lifeline@gmail.com",
      city: "Mumbai",
      status: "Pending",
      address: "Andheri East, Mumbai",
      phone: "+91 9123456780",
    },
    {
      id: 3,
      name: "Green Valley Hospital",
      email: "greenvalley@gmail.com",
      city: "Noida",
      status: "Rejected",
      address: "Sector 62, Noida",
      phone: "+91 9988776655",
    },
  ];

  // ✅ ONLY APPROVED hospitals (always)
  const approvedHospitals = allHospitals
    .filter((h) => h.status === "Approved")
    .filter(
      (h) =>
        h.name.toLowerCase().includes(search.toLowerCase()) ||
        h.email.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          Live Hospitals
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Hospitals currently active and approved on Hospigram
        </p>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="bg-white border border-slate-200 shadow-sm p-4">
        <div className="flex items-center gap-3 w-full md:w-1/3 border border-slate-300 px-3 py-2">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            placeholder="Search hospital by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-6 py-3 text-left">Hospital</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">City</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {approvedHospitals.length > 0 ? (
              approvedHospitals.map((h) => (
                <tr key={h.id} className="hover:bg-slate-50">

                  <td className="px-6 py-4 flex items-center gap-3 font-medium text-slate-800">
                    <FaHospital className="text-red-600" />
                    {h.name}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {h.email}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {h.city}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => setSelectedHospital(h)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50"
                    >
                      <FaEye />
                      View
                    </button>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-10 text-center text-slate-500"
                >
                  No live hospitals found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= VIEW MODAL ================= */}
      {selectedHospital && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 shadow-xl">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Hospital Details
            </h2>

            <div className="space-y-3 text-sm text-slate-700">
              <p><strong>Name:</strong> {selectedHospital.name}</p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> {selectedHospital.email}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> {selectedHospital.address}
              </p>
              <p><strong>City:</strong> {selectedHospital.city}</p>
              <p><strong>Phone:</strong> {selectedHospital.phone}</p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedHospital(null)}
                className="px-4 py-2 bg-slate-700 text-white text-sm hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
