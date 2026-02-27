import { MapPin, Search } from "lucide-react";

export default function SearchLocationSection() {
  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION TITLE */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Find Healthcare Services Near You
          </h2>
          <p className="text-gray-600 mt-2">
            Search hospitals, diagnostic labs, tests & scans in your area
          </p>
        </div>

        {/* SEARCH BOX */}
        <div
          className="bg-white border border-gray-200 
                     shadow-sm p-4 md:p-6
                     flex flex-col md:flex-row 
                     items-stretch md:items-center 
                     gap-4"
        >

          {/* LOCATION SELECT */}
          <div className="flex items-center gap-2 border border-gray-300 px-4 py-3 w-full md:w-1/4">
            <MapPin size={18} className="text-red-600" />
            <select
              className="w-full outline-none text-sm font-medium text-gray-700 bg-transparent"
            >
              <option>Select City</option>
              <option>Delhi</option>
              <option>Noida</option>
              <option>Ghaziabad</option>
              <option>Bulandshahr</option>
            </select>
          </div>

          {/* SEARCH INPUT */}
          <div className="flex items-center gap-2 border border-gray-300 px-4 py-3 w-full md:flex-1">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search hospital, test, scan..."
              className="w-full outline-none text-sm font-medium text-gray-700"
            />
          </div>

          {/* SEARCH BUTTON */}
          <button
            className="bg-red-600 hover:bg-red-700 
                       text-white font-semibold 
                       px-8 py-3 text-sm
                       transition w-full md:w-auto"
          >
            Search
          </button>

        </div>

        {/* QUICK SUGGESTIONS */}
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
          <span className="text-gray-500">Popular:</span>
          <Suggestion label="Nearby Hospitals" />
          <Suggestion label="Blood Test" />
          <Suggestion label="Ultrasound" />
          <Suggestion label="X-Ray" />
          <Suggestion label="Full Body Checkup" />
        </div>

      </div>
    </section>
  );
}

/* ===== SUGGESTION CHIP ===== */
function Suggestion({ label }) {
  return (
    <span
      className="px-4 py-1 border border-gray-300 
                 text-gray-700 hover:border-red-600 
                 hover:text-red-600 cursor-pointer transition"
    >
      {label}
    </span>
  );
}
