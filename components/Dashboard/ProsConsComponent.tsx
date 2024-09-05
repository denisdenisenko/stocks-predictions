import React from "react";
import Icon from "../Common/Icon";
import DataComponent from "./DataComponent";

interface ProsConsProps {
  header: string;
  tooltip: string;
  backgroundColor: string;
}

const ProsConsComponent: React.FC<ProsConsProps> = ({
  header,
  tooltip,
  backgroundColor,
}) => {
  return (
    <div
      className={`w-full max-w-[690px] h-auto sm:h-[392px] border-[2px] rounded-[20px] border-gray-60 ${backgroundColor}`}
    >
      <div className="flex flex-col p-4 sm:p-7">
        <div className="flex flex-row justify-between items-center">
          <p className="font-poppins font-semibold text-[20px] sm:text-[24px] text-funBlue-950">
            {header}
          </p>
          <Icon
            divH="36px"
            divW="36px"
            alt="3dots"
            height={20}
            width={20}
            source="/icons/3dots.svg"
            tooltipText={tooltip}
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
