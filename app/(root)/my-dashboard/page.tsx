import DesktopDashboard from "@/components/Dashboard/Desktop/DesktopDashboard";
import MobileDashboard from "@/components/Dashboard/Mobile/MobileDashboard";
import React from "react";

const MyDashboard = () => {
  return (
    <div>
      <div className="hidden md:block p-[6px_0px_10px_0px]">
        <DesktopDashboard />
      </div>
      <div className="md:hidden">
        <MobileDashboard />
      </div>
    </div>
  );
};

export default MyDashboard;
