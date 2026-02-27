import {
  FaHospital,
  FaFlask,
  FaUsers,
  FaClipboardCheck,
  FaArrowUp,
  FaArrowDown,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaUserShield,
  FaServer,
  FaBell,
} from "react-icons/fa";

export default function AdminDashboard() {
  const stats = [
    {
      label: "Hospitals",
      value: 124,
      icon: <FaHospital />,
      color: "red",
      trend: "+12%",
      trendIcon: <FaArrowUp />,
    },
    {
      label: "Labs",
      value: 68,
      icon: <FaFlask />,
      color: "purple",
      trend: "+8%",
      trendIcon: <FaArrowUp />,
    },
    {
      label: "Users",
      value: 5420,
      icon: <FaUsers />,
      color: "blue",
      trend: "-2%",
      trendIcon: <FaArrowDown />,
    },
    {
      label: "Pending Approvals",
      value: 19,
      icon: <FaClipboardCheck />,
      color: "orange",
      trend: "+5",
      trendIcon: <FaClock />,
    },
  ];

  return (
    <div className="space-y-10">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800">
            Admin Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            System overview & platform health
          </p>
        </div>

        <div className="flex items-center gap-4 text-slate-600">
          <FaBell className="text-xl cursor-pointer hover:text-red-600" />
          <div className="flex items-center gap-2">
            <FaUserShield className="text-red-600" />
            <span className="text-sm font-semibold">Super Admin</span>
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 shadow-sm p-6"
          >
            <div className="flex items-center justify-between">
              <div
                className={`text-${s.color}-600 text-2xl`}
              >
                {s.icon}
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-500">{s.label}</p>
            <h2 className="text-3xl font-extrabold text-slate-800">
              {s.value}
            </h2>
          </div>
        ))}
      </div>

      {/* ================= QUICK ACTIONS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <QuickCard
          icon={<FaHospital />}
          title="Manage Hospitals"
          desc="Approve, suspend or verify hospitals"
          color="red"
        />
        <QuickCard
          icon={<FaFlask />}
          title="Manage Labs"
          desc="Diagnostics & report partners"
          color="purple"
        />
        <QuickCard
          icon={<FaUsers />}
          title="Manage Users"
          desc="Patients & platform users"
          color="blue"
        />
      </div>

      {/* ================= ACTIVITY + SYSTEM ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* RECENT ACTIVITY */}
        <div className="bg-white border border-slate-200 shadow-sm p-6">
          <h2 className="font-bold text-slate-800 mb-5">
            Recent Activity
          </h2>

          <ul className="space-y-4 text-sm">
            <ActivityItem
              icon={<FaCheckCircle />}
              text="New hospital registered"
              color="green"
            />
            <ActivityItem
              icon={<FaClock />}
              text="Lab approval pending"
              color="orange"
            />
            <ActivityItem
              icon={<FaExclamationTriangle />}
              text="User account flagged"
              color="red"
            />
            <ActivityItem
              icon={<FaCheckCircle />}
              text="System settings updated"
              color="blue"
            />
          </ul>
        </div>

        {/* SYSTEM STATUS */}
        <div className="bg-white border border-slate-200 shadow-sm p-6">
          <h2 className="font-bold text-slate-800 mb-5">
            System Status
          </h2>

          <ul className="space-y-4 text-sm">
            <StatusItem
              icon={<FaServer />}
              label="API Server"
              status="Operational"
              color="green"
            />
            <StatusItem
              icon={<FaServer />}
              label="Database"
              status="Operational"
              color="green"
            />
            <StatusItem
              icon={<FaServer />}
              label="Payment Gateway"
              status="Degraded"
              color="orange"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function QuickCard({ icon, title, desc, color }) {
  return (
    <div className="bg-white border border-slate-200 shadow-sm p-6">
      <div className={`text-${color}-600 text-2xl mb-4`}>
        {icon}
      </div>
      <h3 className="font-bold text-slate-800 mb-1">
        {title}
      </h3>
      <p className="text-sm text-slate-500">
        {desc}
      </p>
    </div>
  );
}

function ActivityItem({ icon, text, color }) {
  return (
    <li className="flex items-center gap-3">
      <span className={`text-${color}-600`}>{icon}</span>
      <span className="text-slate-600">{text}</span>
    </li>
  );
}

function StatusItem({ icon, label, status, color }) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-3 text-slate-600">
        <span className={`text-${color}-600`}>{icon}</span>
        {label}
      </div>
      <span className={`text-sm font-semibold text-${color}-600`}>
        {status}
      </span>
    </li>
  );
}
