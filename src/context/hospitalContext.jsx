import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const HospitalContext = createContext();

export const HospitalProvider = ({ children }) => {
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchHospital = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/hospitals/me",
        { withCredentials: true } // IMPORTANT for JWT cookies
      );

      setHospital(res.data.hospital);
    } catch (error) {
      setHospital(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHospital();
  }, []);

  return (
    <HospitalContext.Provider
      value={{ hospital, setHospital, loading }}
    >
      {children}
    </HospitalContext.Provider>
  );
};

export const useHospital = () => useContext(HospitalContext);