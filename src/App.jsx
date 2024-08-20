import React from "react";
import "animate.css";
import AppLayout from "./layout/AppLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  AOS.init();
  return (
    <>
      <ToastContainer />
      <AppLayout />
    </>
  );
};

export default App;
