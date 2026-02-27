import { useState } from "react";
import {
  FaFlask,
  FaSearch,
  FaEye,
  FaMapMarkerAlt,
  FaEnvelope,
  FaVial,
} from "react-icons/fa";

export default function AdminLabs() {
  const [selectedLab, setSelectedLab] = useState(null);
  const [search, setSearch] = useState("");

  // 🔐 ALL labs (backend data)
  const allLabs = [
    {
      id: 1,
      name: "HealthPlus Diagnostics",
      email: "healthplus@gmail.com",
      city: "Delhi",
      status: "Approved",
      address: "Karol Bagh, Delhi",
      phone: "+91 9876543210",
      tests: "Blood, Urine, X-Ray",
    },
    {
      id: 2,
      name: "CarePath Labs",
      email: "carepath@gmail.com",
      city: "Mumbai",
      status: "Pending",
      address: "Andheri West, Mumbai",
      phone: "+91 9123456789",
      tests: "Blood, Thyroid",
    },
    {
      id: 3,
      name: "GreenLife Diagnostics",
      email: "greenlife@gmail.com",
      city: "Noida",
      status: "Rejected",
      address: "Sector 62, Noida",
      phone: "+91 9988776655",
      tests: "Pathology",
    },
  ];

  // ✅ ONLY APPROVED labs (live)
  const approvedLabs = allLabs
    .filter((l) => l.status === "Approved")
    .filter(
      (l) =>
        l.name.toLowerCase().includes(search.toLowerCase()) ||
        l.email.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          Live Diagnostic Labs
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Labs approved by admin and active on Hospigram
        </p>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="bg-white border border-slate-200 shadow-sm p-4">
        <div className="flex items-center gap-3 w-full md:w-1/3 border border-slate-300 px-3 py-2">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            placeholder="Search lab by name or email"
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
              <th className="px-6 py-3 text-left">Lab</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">City</th>
              <th className="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {approvedLabs.length > 0 ? (
              approvedLabs.map((l) => (
                <tr key={l.id} className="hover:bg-slate-50">

                  <td className="px-6 py-4 flex items-center gap-3 font-medium text-slate-800">
                    <FaFlask className="text-purple-600" />
                    {l.name}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {l.email}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {l.city}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => setSelectedLab(l)}
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
                  No live labs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= VIEW MODAL ================= */}
      {selectedLab && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 shadow-xl">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Lab Details
            </h2>

            <div className="space-y-3 text-sm text-slate-700">
              <p><strong>Name:</strong> {selectedLab.name}</p>

              <p className="flex items-center gap-2">
                <FaEnvelope /> {selectedLab.email}
              </p>

              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> {selectedLab.address}
              </p>

              <p className="flex items-center gap-2">
                <FaVial /> Tests: {selectedLab.tests}
              </p>

              <p><strong>City:</strong> {selectedLab.city}</p>
              <p><strong>Phone:</strong> {selectedLab.phone}</p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedLab(null)}
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
