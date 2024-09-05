import Icon from "@/components/Navbar/Desktop/ButtonIcons/Icon";
import React from "react";

const ModelAccuracy = () => {
  return (
    <div className="w-[271px] h-[55px] border-2 border-gray-200 rounded-[6px] p-[5px_5px_5px_15px] flex-row items-center gap-6 hidden md:hidden lg:hidden xl:flex 2xl:visible">
      <Icon
        source="/icons/question-mark-circle.svg"
        width={15}
        height={15}
        alt="Question mark"
        divH="25px"
        divW="25px"
      />
      <p>Model Accuracy</p>
      <Icon
        source="/icons/ModelAccuracyCube.svg"
        width={20}
        height={20}
        alt="Model Accuracy"
        divH="36px"
        divW="36px"
      />
    </div>
  );
};

export default ModelAccuracy;
