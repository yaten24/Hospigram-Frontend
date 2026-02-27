import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";

const Verify = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const res = await axios.post(
          "http://localhost:4000/api/auth/verify",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.success) {
          setStatus("success");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.log(error);
        setStatus("error");
      }
    };

    verifyEmail();
  }, [token, navigate]);

  return (
    <section className="min-h-screen w-full bg-slate-100 flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg bg-white border border-red-100 shadow-2xl overflow-hidden"
      >

        {/* TOP STRIP */}
        <div className="bg-red-600 text-white text-center py-4 font-semibold tracking-wide">
          HOSPIGRAM • EMAIL VERIFICATION
        </div>

        <div className="p-10 text-center">

          {/* ICON SECTION */}
          <div className="flex justify-center mb-6">
            {status === "loading" && (
              <FaSpinner className="text-5xl text-red-600 animate-spin" />
            )}

            {status === "success" && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <FaCheckCircle className="text-5xl text-green-600" />
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <FaTimesCircle className="text-5xl text-red-600" />
              </motion.div>
            )}
          </div>

          {/* MESSAGE SECTION */}
          {status === "loading" && (
            <h2 className="text-lg font-semibold text-slate-700">
              Verifying your email...
            </h2>
          )}

          {status === "success" && (
            <>
              <h2 className="text-lg font-semibold text-slate-800 mb-2">
                Email Verified Successfully
              </h2>
              <p className="text-sm text-slate-500">
                Your Hospigram account is now active. Redirecting to login...
              </p>
            </>
          )}

          {status === "error" && (
            <>
              <h2 className="text-lg font-semibold text-red-600 mb-2">
                Verification Failed
              </h2>
              <p className="text-sm text-slate-500">
                Invalid or expired verification link. Please request a new
                verification email.
              </p>
            </>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Verify;
