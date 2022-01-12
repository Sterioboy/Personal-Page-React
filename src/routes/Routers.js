import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../components/Main/Main";
import AllProjects from "../components/AllProjects/AllProjects";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/allProjects" element={<AllProjects />} />
    </Routes>
  );
};

export default Routers;
