import { useState } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaSearch,
  FaEye,
  FaClock,
  FaHospital,
  FaFlask,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function AdminApprovals() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("Pending");

  const approvals = [
    {
      id: "HSP001",
      type: "Hospital",
      name: "City Care Hospital",
      email: "citycare@gmail.com",
      city: "Delhi",
      address: "Sector 18, Delhi",
      status: "Pending",
    },
    {
      id: "LAB001",
      type: "Lab",
      name: "HealthPlus Diagnostics",
      email: "healthplus@gmail.com",
      city: "Mumbai",
      address: "Andheri West, Mumbai",
      status: "Pending",
    },
    {
      id: "HSP002",
      type: "Hospital",
      name: "Green Valley Hospital",
      email: "greenvalley@gmail.com",
      city: "Noida",
      address: "Sector 62, Noida",
      status: "Approved",
    },
  ];

  /* ================= FILTERED DATA ================= */
  const filteredData = approvals.filter(
    (a) =>
      (filter === "All" || a.status === filter) &&
      (a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          Approvals Management
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Review and approve hospitals & labs registrations
        </p>
      </div>

      {/* ================= CONTROLS ================= */}
      <div className="bg-white border border-slate-200 shadow-sm p-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

        {/* SEARCH */}
        <div className="flex items-center gap-3 w-full md:w-1/3 border border-slate-300 px-3 py-2">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full outline-none text-sm"
          />
        </div>

        {/* FILTER */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-slate-300 px-3 py-2 text-sm"
        >
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      {/* ================= TABLE ================= */}
      <div className="bg-white border border-slate-200 shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-6 py-3 text-left">Entity</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">City</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredData.length > 0 ? (
              filteredData.map((a) => (
                <tr key={a.id} className="hover:bg-slate-50">

                  <td className="px-6 py-4 font-medium text-slate-800">
                    <div className="flex items-center gap-2">
                      {a.type === "Hospital" ? (
                        <FaHospital className="text-red-600" />
                      ) : (
                        <FaFlask className="text-purple-600" />
                      )}
                      {a.name}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {a.type}
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {a.city}
                  </td>

                  <td className="px-6 py-4">
                    <StatusBadge status={a.status} />
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">

                      <button
                        onClick={() => setSelectedItem(a)}
                        className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50"
                      >
                        <FaEye />
                        View
                      </button>

                      {a.status === "Pending" && (
                        <>
                          <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-green-600 border border-green-200 hover:bg-green-50">
                            <FaCheckCircle />
                            Approve
                          </button>

                          <button className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-red-600 border border-red-200 hover:bg-red-50">
                            <FaTimesCircle />
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-10 text-center text-slate-500">
                  No approvals found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= VIEW MODAL ================= */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 shadow-xl">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              {selectedItem.type} Details
            </h2>

            <div className="space-y-3 text-sm text-slate-700">
              <p><strong>Name:</strong> {selectedItem.name}</p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> {selectedItem.email}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> {selectedItem.address}
              </p>
              <p><strong>City:</strong> {selectedItem.city}</p>
              <p>
                <strong>Status:</strong>{" "}
                <StatusBadge status={selectedItem.status} />
              </p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedItem(null)}
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

/* ================= STATUS BADGE ================= */
function StatusBadge({ status }) {
  if (status === "Approved") {
    return (
      <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-green-700 bg-green-100">
        <FaCheckCircle />
        Approved
      </span>
    );
  }

  if (status === "Pending") {
    return (
      <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-orange-700 bg-orange-100">
        <FaClock />
        Pending
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-red-700 bg-red-100">
      <FaTimesCircle />
      Rejected
    </span>
  );
}
