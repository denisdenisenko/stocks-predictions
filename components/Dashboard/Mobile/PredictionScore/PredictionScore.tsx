import React from "react";
import Image from "next/image";
import CustomBuyButton from "../../Desktop/PredictionScore/CustomBuyButton";
import AnimatedCounter from "@/components/Navbar/Desktop/Balance/AnimatedCounter";
const PredictionScore = () => {
  const predictedAmount = 34;
  return (
    <div className="sm:w-[328px] md:w[400px] h-[150px] flex flex-col gap-[10px] bg-prediction-gradient border-lightPink-50 absolute top-[75px] rounded-[10px] border border-solid left-[16px] p-[12px_16px] ">
      <div className="w-[368px] gap-4 h-[35px] flex flex-row items-center relative">
        <h2 className="font-poppins text-[18px] font-semibold text-funBlue-950 text-left">
          Prediction Score
        </h2>
        <div className=" inset-0 flex items-center justify-end pointer-events-none">
          <Image
            src="/icons/Question-Icon.svg"
            width={18}
            height={18}
            alt="question"
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="w-[296px] h[42px]">
        <p className="font-poppins text-[14px] font-normal text-gray-30">
          Prediction score for the search term “SEDG”
        </p>
      </div>
      <div className="w-[350px] h-[39px] flex flex-row content-center items-cente">
        <div className="w-[350px] h-[39px]">
          <div className="flex flex-row font-poppins font-semibold text-[26px] text-red-50 leading-[39px]">
            <AnimatedCounter amount={predictedAmount} />
            <p>%</p>
          </div>
        </div>
        <CustomBuyButton buttonH="33px" buttonW="75px" />
      </div>
    </div>
  );
};

export default PredictionScore;
