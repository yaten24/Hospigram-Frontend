import { useState } from "react";
import {
  FaHospital,
  FaEye,
  FaEyeSlash,
  FaMapMarkerAlt,
  FaPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function HospitalRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [customService, setCustomService] = useState("");
  const navigate = useNavigate();

  const serviceOptions = [
    "General Medicine",
    "Cardiology",
    "Orthopedics",
    "Gynecology",
    "Pediatrics",
    "Neurology",
    "Dermatology",
    "Emergency Care",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hospitalType: "",
    password: "",
    phone: "",
    language: "en",
    location: "",
    address: "",
    description: "",
    services: [],
  });

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /* ================= TOGGLE SERVICE ================= */
  const toggleService = (service) => {
    if (formData.services.includes(service)) {
      setFormData({
        ...formData,
        services: formData.services.filter((s) => s !== service),
      });
    } else {
      setFormData({
        ...formData,
        services: [...formData.services, service],
      });
    }
  };

  /* ================= ADD CUSTOM SERVICE ================= */
  const addCustomService = () => {
    if (
      customService.trim() !== "" &&
      !formData.services.includes(customService)
    ) {
      setFormData({
        ...formData,
        services: [...formData.services, customService],
      });
      setCustomService("");
    }
  };

  /* ================= GET CURRENT LOCATION ================= */
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setMessage({ type: "error", text: "Geolocation not supported." });
      return;
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );

          const data = await res.json();

          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.state ||
            "";

          setFormData((prev) => ({
            ...prev,
            location: city,
          }));
        } catch {
          setMessage({
            type: "error",
            text: "Unable to fetch location name.",
          });
        } finally {
          setLocationLoading(false);
        }
      },
      () => {
        setLocationLoading(false);
        setMessage({
          type: "error",
          text: "Location permission denied.",
        });
      }
    );
  };

  /* ================= HANDLE SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(
        "http://localhost:4000/api/hospitals/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (data.success) {
        setMessage({
          type: "success",
          text: "Hospital Registered Successfully!",
        });

        setFormData({
          name: "",
          email: "",
          hospitalType: "",
          password: "",
          phone: "",
          language: "en",
          location: "",
          address: "",
          description: "",
          services: [],
        });
      } else {
        setMessage({ type: "error", text: data.message });
      }
    } catch {
      setMessage({
        type: "error",
        text: "Something went wrong. Try again.",
      });
    } finally {
      setLoading(false);
      navigate("/hospital-login")
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-3xl bg-white border border-red-200 shadow-xl p-8">

        <div className="flex items-center gap-3 mb-8">
          <FaHospital className="text-red-600 text-3xl" />
          <h2 className="text-2xl font-bold text-gray-800">
            Hospital Registration
          </h2>
        </div>

        {message && (
          <div
            className={`mb-6 px-4 py-3 text-sm font-medium rounded ${
              message.type === "success"
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Existing Fields */}
          <FloatingInput label="Hospital Name" name="name" value={formData.name} onChange={handleChange} />
          <FloatingInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
          <FloatingInput label="Hospital Type" name="hospitalType" value={formData.hospitalType} onChange={handleChange} />
          <FloatingInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />

          {/* SERVICES SECTION */}
          <div>
            <label className="block font-semibold mb-3 text-gray-700">
              Select Services (Multiple Allowed)
            </label>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {serviceOptions.map((service, index) => (
                <button
                  type="button"
                  key={index}
                  onClick={() => toggleService(service)}
                  className={`px-3 py-2 text-sm border transition ${
                    formData.services.includes(service)
                      ? "bg-red-600 text-white border-red-600"
                      : "border-gray-300 hover:border-red-500"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>

            {/* Custom Service */}
            <div className="flex gap-2">
              <input
                type="text"
                value={customService}
                onChange={(e) => setCustomService(e.target.value)}
                placeholder="Add Custom Service"
                className="flex-1 border border-gray-300 px-3 py-2 focus:outline-none focus:border-red-500"
              />
              <button
                type="button"
                onClick={addCustomService}
                className="px-4 bg-red-600 text-white hover:bg-red-700 transition"
              >
                <FaPlus />
              </button>
            </div>

            {/* Selected Services Preview */}
            {formData.services.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {formData.services.map((s, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-red-100 text-red-700 border border-red-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            )}
          </div>

          <FloatingInput label="City / District" name="location" value={formData.location} onChange={handleChange} />

          <div className="flex justify-end">
            <button
              type="button"
              onClick={getCurrentLocation}
              className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700"
            >
              <FaMapMarkerAlt />
              {locationLoading ? "Detecting..." : "Use Current Location"}
            </button>
          </div>

          <FloatingTextarea label="Full Address" name="address" value={formData.address} onChange={handleChange} />
          <FloatingTextarea label="Description" name="description" value={formData.description} onChange={handleChange} />

          {/* Password */}
          <div className="relative">
            <FloatingInput
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
            />
            <div
              className="absolute right-4 top-4 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-3 font-semibold hover:bg-red-700 transition disabled:opacity-70"
          >
            {loading ? "Registering..." : "Register Hospital"}
          </button>
        </form>
      </div>
    </section>
  );
}

/* FLOATING COMPONENTS SAME AS BEFORE */
function FloatingInput({ label, name, value, onChange, type = "text" }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder=" "
        className="peer w-full border border-gray-300 px-4 pt-6 pb-2 focus:outline-none focus:border-red-500 transition"
      />
      <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-600">
        {label}
      </label>
    </div>
  );
}

function FloatingTextarea({ label, name, value, onChange }) {
  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder=" "
        rows="3"
        className="peer w-full border border-gray-300 px-4 pt-6 pb-2 focus:outline-none focus:border-red-500 transition resize-none"
      />
      <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-600">
        {label}
      </label>
    </div>
  );
}