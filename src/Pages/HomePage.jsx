import React, { useEffect } from "react";
import Navbar from "../Shared/Navbar";
import Hero from "../Components/Hero";
import HealthcareCategories from "../Components/HealthcareCategories";
import SearchLocationSection from "../Components/SearchLocationSection";
import FeaturedHospitals from "../Components/FeaturedHospitals";
import PopularDiagnosticTests from "../Components/PopularDiagnosticTests";
import HowHospigramWorks from "../Components/HowHospigramWorks";
import WhyChooseHospigram from "../Components/WhyChooseHospigram";
import EmergencyBanner from "../Components/EmergencyBanner";
import MegaFooter from "../Shared/Footer";
import TechnologyPartnerSection from "../Components/TechnologyPartnerSection";
import { useUser } from "../context/userContext";
import { useLab } from "../context/labsContext";
import { useHospital } from "../context/hospitalContext";
import { useAdmin } from "../context/adminContext";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const { user, loading: userLoading } = useUser();
  const { lab, loading: labLoading } = useLab();
  const { hospital, loading: hospitalLoading } = useHospital();
  const { admin, loading: adminLoading } = useAdmin();
  const navigate = useNavigate();

 useEffect(() => {
  // Wait until all contexts finish loading
  if (
    userLoading ||
    labLoading ||
    hospitalLoading ||
    adminLoading
  ) {
    return;
  }

  if (admin) {
    navigate("/admin-dashboard");
    return;
  }

  if (hospital) {
    navigate("/hospital-dashboard");
    return;
  }

  if (lab) {
    navigate("/lab-dashboard");
    return;
  }

  if (user) {
    navigate("/");
    return;
  }

  // 👇 If no one logged in
  navigate("/access-portal");

}, [
  user,
  lab,
  hospital,
  admin,
  userLoading,
  labLoading,
  hospitalLoading,
  adminLoading,
  navigate,
]);

  return (
    <div className="w-full">
      <Navbar />

      {/* ❌ Hero hidden on mobile, ✅ visible on md+ */}
      <div className="hidden md:block">
        <Hero />
      </div>

      <HealthcareCategories />

      {/* Optional: agar mobile ke liye alag search UX chahiye ho */}
      {/* <SearchLocationSection /> */}

      {/* <FeaturedHospitals /> */}
      <PopularDiagnosticTests />
      <HowHospigramWorks />
      <WhyChooseHospigram />
      <TechnologyPartnerSection />
      <EmergencyBanner />
      <MegaFooter />
    </div>
  );
};

export default HomePage;
