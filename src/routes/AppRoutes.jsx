import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Software from "../pages/Software";
import Training from "../pages/Training";
import About from "../pages/About";
import Blogs from "../pages/Blogs";
import ScrlTopOfPage from "../scrlTopOfPage/ScrlTopOfPage";
import Teams from "../pages/Teams";
import BlogDetails from "../pages/BlogDetails";
import ServiceDetails from "../pages/ServiceDetails";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import HelpSupport from "../pages/HelpSupport";
import TermsCondition from "../pages/TermsCondition";
import SoftwareDetails from "../pages/SoftwareDetails";
import TrainingDetails from "../pages/TrainingDetails";

const AppRoutes = () => {
  return (
    <>
      <ScrlTopOfPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/software" element={<Software />} />
        <Route path="/software/:id" element={<SoftwareDetails />} />
        <Route path="/pricing" element={<Training />} />
        <Route path="/training" element={<Training />} />
        <Route path="/training/:id" element={<TrainingDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help-support" element={<HelpSupport />} />
        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
