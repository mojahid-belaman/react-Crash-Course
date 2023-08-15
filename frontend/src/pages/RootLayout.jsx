import React from "react";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600">
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default RootLayout;
