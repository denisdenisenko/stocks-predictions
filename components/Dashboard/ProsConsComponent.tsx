import React from "react";
import Icon from "../Common/Icon";
import DataComponent from "./DataComponent";

const ProsConsComponent = () => {
  return (
    <div className="w-[690px] h-[392px] border-[2px] rounded-[20px] bg-gray-50 border-gray-60 ">
      <div className="flex flex-col p-7">
        <div className="flex flex-row justify-between">
          <p className="font-poppins font-semibold text-[24px] text-funBlue-950 ">
            Pro's
          </p>
          <Icon
            divH="36px"
            divW="36px"
            alt="3dots"
            height={20}
            width={20}
            source="/icons/3dots.svg"
            tooltipText="This is a pro's"
          />
        </div>
      </div>
      <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
        <DataComponent />
        <DataComponent />
        <DataComponent />
      </div>
    </div>
  );
};

export default ProsConsComponent;
