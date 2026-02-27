import { useState } from "react";
import {
  FaFlask,
  FaEye,
  FaEyeSlash,
  FaMapMarkerAlt,
  FaPlus,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LabRegister() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [customService, setCustomService] = useState("");
  const navigate = useNavigate();
  const labTypes = [
    "Pathology Lab",
    "Radiology Lab",
    "Diagnostic Center",
    "Blood Bank",
    "Imaging Center",
  ];

  const serviceOptions = [
    "Blood Test",
    "Thyroid Test",
    "Lipid Profile",
    "CBC",
    "MRI Scan",
    "CT Scan",
    "X-Ray",
    "Ultrasound",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    language: "en",
    location: "",
    address: "",
    description: "",
    homeCollectionAvailable: false,
    labType: "",
    services: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(
        "http://localhost:4000/api/labs/register",
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
          text: "Lab Registered Successfully!",
        });

        setFormData({
          name: "",
          email: "",
          password: "",
          phone: "",
          language: "en",
          location: "",
          address: "",
          description: "",
          homeCollectionAvailable: false,
          labType: "",
          services: [],
        });
      navigate("/labs-login")
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
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-3xl bg-white border border-red-200 shadow-lg p-8">

        <div className="flex items-center gap-3 mb-6">
          <FaFlask className="text-red-600 text-3xl" />
          <h2 className="text-2xl font-bold text-gray-800">
            Lab Registration
          </h2>
        </div>

        {message && (
          <div className={`mb-4 px-4 py-2 text-sm ${
            message.type === "success"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">

          <FloatingInput label="Lab Name" name="name" value={formData.name} onChange={handleChange} />
          <FloatingInput label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} />
          <FloatingInput label="Phone Number" name="phone" value={formData.phone} onChange={handleChange} />

          {/* Language Selector */}
          <div>
            <label className="block font-semibold mb-2">Preferred Language</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-red-500"
            >
              <option value="en">English</option>
              <option value="hi">Hindi</option>
            </select>
          </div>

          {/* Lab Type */}
          <div>
            <label className="block font-semibold mb-2">Lab Type</label>
            <select
              name="labType"
              value={formData.labType}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:border-red-500"
            >
              <option value="">Select Lab Type</option>
              {labTypes.map((type, i) => (
                <option key={i} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Services */}
          <div>
            <label className="block font-semibold mb-3">
              Select Services (Multiple Allowed)
            </label>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              {serviceOptions.map((service, index) => {
                const isSelected = formData.services.includes(service);
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => toggleService(service)}
                    className={`px-4 py-2 text-sm border transition ${
                      isSelected
                        ? "bg-red-600 text-white border-red-600"
                        : "border-gray-300 hover:border-red-500"
                    }`}
                  >
                    {service}
                  </button>
                );
              })}
            </div>

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
                className="px-4 bg-red-600 text-white hover:bg-red-700"
              >
                <FaPlus />
              </button>
            </div>

            {formData.services.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {formData.services.map((s, i) => (
                  <span key={i} className="px-3 py-1 text-xs bg-red-100 text-red-700 border border-red-300">
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
              className="flex items-center gap-2 text-sm text-red-600"
            >
              <FaMapMarkerAlt />
              {locationLoading ? "Detecting..." : "Use Current Location"}
            </button>
          </div>

          <FloatingTextarea label="Full Address" name="address" value={formData.address} onChange={handleChange} />
          <FloatingTextarea label="Description" name="description" value={formData.description} onChange={handleChange} />

          <div className="relative">
            <FloatingInput
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
            />
            <div
              className="absolute right-3 top-4 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="homeCollectionAvailable"
              checked={formData.homeCollectionAvailable}
              onChange={handleChange}
              className="w-4 h-4 accent-red-600"
            />
            <label className="text-sm font-semibold">
              Home Collection Available
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-3 font-semibold hover:bg-red-700"
          >
            {loading ? "Registering..." : "Register Lab"}
          </button>

        </form>
      </div>
    </section>
  );
}

/* Floating Components */

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
      <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-600">
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
        className="peer w-full border border-gray-300 px-4 pt-6 pb-2 focus:outline-none focus:border-red-500 resize-none"
      />
      <label className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-600">
        {label}
      </label>
    </div>
  );
}