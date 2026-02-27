import { useState } from "react";
import {
  FaUser,
  FaSearch,
  FaTrashAlt,
  FaEnvelope,
  FaIdBadge,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function AdminUsers() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    {
      id: "USR001",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "Patient",
    },
    {
      id: "USR002",
      name: "Anjali Verma",
      email: "anjali@gmail.com",
      role: "Patient",
    },
    {
      id: "USR003",
      name: "Amit Singh",
      email: "amit@gmail.com",
      role: "Patient",
    },
  ]);

  const [deleteUser, setDeleteUser] = useState(null);

  /* ================= FILTER ================= */
  const filteredUsers = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.id.toLowerCase().includes(search.toLowerCase())
  );

  /* ================= DELETE ================= */
  const confirmDelete = () => {
    setUsers(users.filter((u) => u.id !== deleteUser.id));
    setDeleteUser(null);
  };

  return (
    <div className="space-y-6">

      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          Users Management
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Search, monitor and remove platform users
        </p>
      </div>

      {/* ================= SEARCH ================= */}
      <div className="bg-white border border-slate-200 shadow-sm p-4">
        <div className="flex items-center gap-3 border border-slate-300 px-3 py-2 w-full md:w-1/3">
          <FaSearch className="text-slate-400" />
          <input
            type="text"
            placeholder="Search by User ID or Name"
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
              <th className="px-6 py-3 text-left">User</th>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {filteredUsers.length > 0 ? (
              filteredUsers.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50">

                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <FaUser className="text-blue-600" />
                      <div>
                        <p className="font-medium text-slate-800">
                          {u.name}
                        </p>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <FaIdBadge />
                          {u.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    <div className="flex items-center gap-2">
                      <FaEnvelope />
                      {u.email}
                    </div>
                  </td>

                  <td className="px-6 py-4 text-slate-600">
                    {u.role}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <button
                      onClick={() => setDeleteUser(u)}
                      className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-red-600 border border-red-200 hover:bg-red-50"
                    >
                      <FaTrashAlt />
                      Delete
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
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ================= DELETE CONFIRMATION ================= */}
      {deleteUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white max-w-sm w-full p-6 shadow-xl">
            <div className="flex items-center gap-3 mb-4 text-red-600">
              <FaExclamationTriangle className="text-xl" />
              <h2 className="text-lg font-bold">
                Delete User
              </h2>
            </div>

            <p className="text-sm text-slate-600">
              Are you sure you want to delete{" "}
              <strong>{deleteUser.name}</strong>?
              This action cannot be undone.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setDeleteUser(null)}
                className="px-4 py-2 text-sm border border-slate-300 hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                onClick={confirmDelete}
                className="px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
