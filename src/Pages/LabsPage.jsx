import {
  FaMapMarkerAlt,
  FaFlask,
  FaMicroscope,
  FaPhoneAlt,
  FaStar,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../Shared/Navbar";
import EmergencyBanner from "../Components/EmergencyBanner";
import MegaFooter from "../Shared/Footer";
import { useUser } from "../context/userContext";

export default function LabsPage() {
  const { user } = useUser();

  const [labs, setLabs] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const HOSPIGRAM_NUMBER = "1800-120-9999";

  /* ================= LOAD LOCATION ================= */
  useEffect(() => {
    if (user?.location) {
      setSelectedLocation(user.location);
    } else {
      const savedLocation = localStorage.getItem("selectedLocation");
      if (savedLocation) {
        setSelectedLocation(savedLocation);
      }
    }
  }, [user]);

  /* ================= FETCH LABS ================= */
  useEffect(() => {
    const fetchLabs = async () => {
      try {
        setLoading(true);

        let response;

        if (selectedLocation) {
          response = await axios.get(
            `http://localhost:4000/api/public/labs/by-location?location=${selectedLocation}`
          );
        } else {
          response = await axios.get(
            `http://localhost:4000/api/public/labs`
          );
        }

        setLabs(response.data.data || []);
      } catch (error) {
        console.error("Error fetching labs:", error);
        setLabs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLabs();
  }, [selectedLocation]);

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <Navbar />

      {/* ================= LAB GRID ================= */}
      <section className="w-full py-10">
        <div className="w-full px-4 sm:px-8 lg:px-10">

          {loading ? (
            <p className="text-center text-gray-500">
              Loading labs...
            </p>
          ) : labs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <h2 className="text-xl font-bold text-gray-800">
                No Labs Found
              </h2>
              <p className="text-gray-600 mt-2">
                Try selecting a different city.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {labs.map((lab) => (
                <div
                  key={lab._id}
                  className="bg-white border border-red-100 hover:shadow-xl transition flex flex-col justify-between"
                >
                  <div className="p-4 space-y-3">

                    <h3 className="text-sm font-bold text-gray-900">
                      {lab.name}
                    </h3>

                    <div className="flex items-center gap-2 text-[11px] text-gray-600">
                      <FaFlask className="text-red-600" />
                      {lab.labType}
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-gray-600">
                      <FaMapMarkerAlt className="text-red-600" />
                      {lab.location}
                    </div>

                    {lab.services && (
                      <div className="flex items-start gap-2 text-[11px] text-gray-500 line-clamp-2">
                        <FaMicroscope className="text-red-600 mt-0.5" />
                        {lab.services.join(", ")}
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-xs">
                      <FaStar className="text-yellow-500" />
                      <span className="font-semibold">
                        {lab.rating || "4.5"}
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-green-600 text-[11px] font-semibold">
                      <FaCheckCircle />
                      Verified by Hospigram
                    </div>
                  </div>

                  <div className="border-t border-gray-100 p-3 flex flex-col gap-2">

                    <Link
                      to={`/lab/${lab._id}`}
                      className="text-center py-2 text-xs font-semibold bg-red-600 text-white hover:bg-red-700 transition"
                    >
                      Book Blood Test
                    </Link>

                    <a
                      href={`tel:${HOSPIGRAM_NUMBER}`}
                      className="text-center py-2 text-xs font-semibold border border-red-600 text-red-600 hover:bg-red-50 transition flex items-center justify-center gap-1"
                    >
                      <FaPhoneAlt />
                      Call Now
                    </a>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      <EmergencyBanner />
      <MegaFooter />
    </div>
  );
}