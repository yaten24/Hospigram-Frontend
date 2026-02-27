import { useState } from "react";
import {
  FaUserCog,
  FaEnvelope,
  FaLock,
  FaBell,
  FaToggleOn,
  FaToggleOff,
  FaSave,
} from "react-icons/fa";

export default function AdminSettings() {
  const [platformLive, setPlatformLive] = useState(true);
  const [autoApprove, setAutoApprove] = useState(false);
  const [emailNotify, setEmailNotify] = useState(true);

  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-extrabold text-slate-800">
          Admin Settings
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Manage admin profile and platform configurations
        </p>
      </div>

      {/* ================= PROFILE SETTINGS ================= */}
      <div className="bg-white border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4 text-slate-700">
          <FaUserCog className="text-xl text-red-600" />
          <h2 className="font-bold text-lg">Admin Profile</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Admin Name"
            className="border border-slate-300 px-4 py-2 outline-none"
          />
          <div className="flex items-center gap-3 border border-slate-300 px-4 py-2">
            <FaEnvelope className="text-slate-400" />
            <input
              type="email"
              placeholder="Admin Email"
              className="w-full outline-none"
            />
          </div>
        </div>
      </div>

      {/* ================= PASSWORD SETTINGS ================= */}
      <div className="bg-white border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4 text-slate-700">
          <FaLock className="text-xl text-blue-600" />
          <h2 className="font-bold text-lg">Change Password</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="password"
            placeholder="Current Password"
            className="border border-slate-300 px-4 py-2 outline-none"
          />
          <input
            type="password"
            placeholder="New Password"
            className="border border-slate-300 px-4 py-2 outline-none"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-slate-300 px-4 py-2 outline-none"
          />
        </div>
      </div>

      {/* ================= SYSTEM SETTINGS ================= */}
      <div className="bg-white border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4 text-slate-700">
          <FaToggleOn className="text-xl text-green-600" />
          <h2 className="font-bold text-lg">System Settings</h2>
        </div>

        <div className="space-y-4 text-sm text-slate-700">

          {/* PLATFORM STATUS */}
          <div className="flex items-center justify-between">
            <span>Platform Live Status</span>
            <button
              onClick={() => setPlatformLive(!platformLive)}
              className={`text-2xl ${
                platformLive ? "text-green-600" : "text-slate-400"
              }`}
            >
              {platformLive ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </div>

          {/* AUTO APPROVAL */}
          <div className="flex items-center justify-between">
            <span>Auto Approve Hospitals & Labs</span>
            <button
              onClick={() => setAutoApprove(!autoApprove)}
              className={`text-2xl ${
                autoApprove ? "text-green-600" : "text-slate-400"
              }`}
            >
              {autoApprove ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </div>
        </div>
      </div>

      {/* ================= NOTIFICATIONS ================= */}
      <div className="bg-white border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-3 mb-4 text-slate-700">
          <FaBell className="text-xl text-purple-600" />
          <h2 className="font-bold text-lg">Notifications</h2>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-700">
          <span>Email Notifications</span>
          <input
            type="checkbox"
            checked={emailNotify}
            onChange={() => setEmailNotify(!emailNotify)}
            className="w-5 h-5 accent-red-600"
          />
        </div>
      </div>

      {/* ================= SAVE BUTTON ================= */}
      <div className="text-right">
        <button
          className="
            inline-flex items-center gap-2
            px-6 py-3
            bg-red-600 text-white font-semibold
            hover:bg-red-700
            transition
          "
        >
          <FaSave />
          Save Settings
        </button>
      </div>

    </div>
  );
}
