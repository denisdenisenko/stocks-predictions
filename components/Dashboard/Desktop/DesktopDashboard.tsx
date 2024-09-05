import React from "react";
import PredictionScore from "./PredictionScore/PredictionScore";
import Members from "./Members/Members";
import ModelAccuracy from "./ModelAccuracy/ModelAccuracy";
import ProsConsComponent from "../ProsConsComponent";

const DesktopDashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row p-[20px_20px] justify-between items-center ">
        <PredictionScore />
        <ModelAccuracy />
        <Members />
      </div>
      <div className="flex flex-row p-[10px_20px] justify-between">
        <ProsConsComponent
          backgroundColor="bg-pros-gradient"
          header="Pro's"
          tooltip="This is a pros"
        />
        <ProsConsComponent
          backgroundColor="bg-cons-gradient"
          header="Con's"
          tooltip="This is a cons"
        />
      </div>
    </div>
  );
};

export default DesktopDashboard;
