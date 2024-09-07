import React from "react";
import PredictionScore from "./PredictionScore/PredictionScore";
import ProsConsComponent from "../ProsConsComponent";

const MobileDashboard = () => {
  return (
    <div className="sm:w-full m-[15px] flex flex-col gap-[10px]">
      <PredictionScore />
      <ProsConsComponent
        header={"Pro's"}
        tooltip={"This is pros"}
        backgroundColor={"bg-pros-gradient"}
      />
      <ProsConsComponent
        header={"Con's"}
        tooltip={"This is cons"}
        backgroundColor={"bg-cons-gradient"}
      />
    </div>
  );
};

export default MobileDashboard;
