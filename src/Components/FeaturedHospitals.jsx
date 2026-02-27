import { useTranslation } from "react-i18next";
import {
  FaStar,
  FaMapMarkerAlt,
  FaHospital,
} from "react-icons/fa";

const hospitals = [
  {
    id: 1,
    name: "AIIMS – All India Institute of Medical Sciences",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    specialties: "Cardiology, Neurology, Oncology, Trauma",
    rating: 4.8,
    location: "New Delhi, India",
    type: "Government | Teaching Hospital",
  },
  {
    id: 2,
    name: "Apollo Hospitals",
    image: "https://images.unsplash.com/photo-1576765607924-3f7b8410a787",
    specialties: "Cardiac Care, Orthopedics, ICU, Surgery",
    rating: 4.7,
    location: "Chennai, India",
    type: "Private | Multi-Speciality",
  },
  {
    id: 3,
    name: "Fortis Memorial Research Institute",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    specialties: "Emergency, Neurology, Pediatrics",
    rating: 4.6,
    location: "Gurugram, India",
    type: "Private | Super Specialty",
  },
  {
    id: 4,
    name: "Max Super Speciality Hospital",
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc",
    specialties: "Cancer Care, Cardiology, Diagnostics",
    rating: 4.5,
    location: "Noida, India",
    type: "Private | Advanced Care",
  },
];

export default function FeaturedHospitals() {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-gray-50 pb-5 md:py-20">
      <div className="w-full px-4 sm:px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            {t("featuredHospitalsTitle", {
              defaultValue: "Top & Trusted Hospitals in India",
            })}
          </h2>

          {/* Description hidden on mobile */}
          <p className="hidden md:block text-gray-600 mt-3 max-w-3xl mx-auto">
            {t("featuredHospitalsDesc", {
              defaultValue:
                "Verified hospitals across India offering world-class medical infrastructure, expert doctors, and advanced healthcare services.",
            })}
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
          {hospitals.map((hospital) => (
            <div
              key={hospital.id}
              className="bg-white border border-gray-200
                         hover:shadow-xl transition duration-300
                         flex flex-col"
            >
              {/* IMAGE */}
              <div className="h-32 sm:h-44 md:h-56 w-full overflow-hidden">
                <img
                  src={hospital.image}
                  alt={hospital.name}
                  className="h-full w-full object-cover hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 leading-snug line-clamp-2">
                  {hospital.name}
                </h3>

                {/* TYPE */}
                <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500 mt-1">
                  <FaHospital className="text-red-600" />
                  <span>{hospital.type}</span>
                </div>

                {/* LOCATION */}
                <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-600 mt-2">
                  <FaMapMarkerAlt className="text-red-600" />
                  <span className="line-clamp-1">{hospital.location}</span>
                </div>

                {/* SPECIALTIES */}
                <p className="hidden md:block text-sm text-gray-600 mt-3 line-clamp-2">
                  {hospital.specialties}
                </p>

                {/* RATING */}
                <div className="flex items-center gap-1 mt-2 sm:mt-4">
                  <FaStar className="text-yellow-500 text-xs sm:text-sm" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-800">
                    {hospital.rating}
                  </span>
                  <span className="hidden sm:inline text-xs text-gray-500">
                    ({t("verified", { defaultValue: "Verified" })})
                  </span>
                </div>

                {/* 📱 MOBILE BOOK BUTTON */}
                <button
                  className="
                    mt-3 sm:hidden
                    w-full py-2
                    text-xs font-bold text-white
                    bg-red-600 hover:bg-red-700
                    transition
                  "
                >
                  {t("bookNowCaps", { defaultValue: "BOOK NOW" })}
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
