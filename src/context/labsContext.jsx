import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const LabContext = createContext();

export const LabProvider = ({ children }) => {
  const [lab, setLab] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchLab = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/labs/me",
        { withCredentials: true } // IMPORTANT for JWT cookies
      );

      setLab(res.data.lab);
    } catch (error) {
      setLab(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLab();
  }, []);

  return (
    <LabContext.Provider value={{ lab, setLab, loading }}>
      {children}
    </LabContext.Provider>
  );
};

export const useLab = () => useContext(LabContext);