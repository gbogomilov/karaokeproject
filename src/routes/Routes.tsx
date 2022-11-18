import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../components/Content/Dashboard";
import { Login } from "../components/login/Login";
export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};
