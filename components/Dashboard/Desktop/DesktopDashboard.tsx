import React from "react";
import PredictionScore from "./PredictionScore/PredictionScore";
import Members from "./Members/Members";
import ModelAccuracy from "./ModelAccuracy/ModelAccuracy";

const DesktopDashboard = () => {
  return (
    <div>
      <div className="flex flex-row p-[0px_20px]  ">
        <PredictionScore />
        <div className="flex flex-row items-center">
          <ModelAccuracy />
          <Members />
        </div>
      </div>
    </div>
  );
};

export default DesktopDashboard;
