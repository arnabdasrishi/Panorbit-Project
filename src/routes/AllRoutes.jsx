import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Homepage from "../components/Homepage";

const AllRoutes = () => {
  return (

    // ID is passed as params (:id)
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard/user/:id" element={<Homepage />} />
      <Route path="/dashboard/user/:id/:subpath" element={<Homepage />} />
    </Routes>
  );
};

export default AllRoutes;
