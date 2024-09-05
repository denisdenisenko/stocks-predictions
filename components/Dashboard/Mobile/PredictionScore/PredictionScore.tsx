import React from "react";
import Image from "next/image";
import CustomBuyButton from "../../../Common/CustomButton";
import AnimatedCounter from "@/components/Navbar/Desktop/Balance/AnimatedCounter";
const PredictionScore = () => {
  const predictedAmount = 34;
  return (
    <div className="sm:w-full m-[10px_10px_0px_10px] h-[150px] flex flex-col gap-[10px] bg-prediction-gradient border-lightPink-50 rounded-[10px] border border-solid p-[12px_16px] ">
      <div className="w-[296px] gap-4 h-[35px] flex flex-row items-center">
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
      <div className="w-full h-[39px] flex flex-row content-center justify-between">
        <div className="w-[350px] h-[39px]">
          <div className="flex flex-row font-poppins font-semibold text-[26px] text-red-50 leading-[39px]">
            <AnimatedCounter amount={predictedAmount} />
            <p>%</p>
          </div>
        </div>
        <CustomBuyButton
          buttonH="33px"
          buttonW="75px"
          imageSource="/icons/buyStockShoppingBag.svg"
          imageText="Buy"
          alt="Buy"
        />
      </div>
    </div>
  );
};

export default PredictionScore;
