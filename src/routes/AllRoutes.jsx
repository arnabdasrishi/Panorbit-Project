import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import Dashboard from "../components/Dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}/>
      <Route path="/dashboard/users/:id" element={<Dashboard />}/>
    </Routes>
  );
};

export default AllRoutes;
