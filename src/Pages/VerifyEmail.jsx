import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaEnvelopeOpenText, FaArrowRight } from "react-icons/fa";

const VerifyEmail = () => {
  return (
    <section className="min-h-screen w-full bg-slate-100 flex items-center justify-center px-4">

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl bg-white border border-red-100 shadow-2xl overflow-hidden"
      >

        {/* TOP RED STRIP */}
        <div className="bg-red-600 py-4 text-center text-white font-semibold tracking-wide">
          HOSPIGRAM • ACCOUNT VERIFICATION
        </div>

        <div className="p-10 text-center">

          {/* ICON */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-red-50 border border-red-200">
              <FaEnvelopeOpenText className="text-4xl text-red-600" />
            </div>
          </motion.div>

          {/* HEADING */}
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Check Your Email
          </h2>

          {/* DESCRIPTION */}
          <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
            We've sent a verification link to your registered email address.
            Please check your inbox and click the link to activate your
            Hospigram account.
          </p>

          {/* EXTRA INFO BOX */}
          <div className="mt-6 bg-slate-50 border border-slate-200 p-4 text-xs text-slate-600">
            Didn’t receive the email? Please check your spam folder or wait a
            few minutes before requesting another link.
          </div>

          {/* CTA BUTTON */}
          <div className="mt-8">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 text-sm font-semibold hover:bg-red-700 transition"
            >
              Go to Login <FaArrowRight />
            </Link>
          </div>

        </div>

      </motion.div>
    </section>
  );
};

export default VerifyEmail;
