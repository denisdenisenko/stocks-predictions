import React from "react";
import PredictionScore from "./PredictionScore/PredictionScore";
import Members from "./Members/Members";
import ModelAccuracy from "./ModelAccuracy/ModelAccuracy";

const DesktopDashboard = () => {
  return (
    <div>
      <div className="flex flex-row p-[0px_20px] ">
        <PredictionScore />
        <ModelAccuracy />
        <Members />
      </div>
    </div>
  );
};

export default DesktopDashboard;
