import React from "react";
import Image from "next/image";
const PredictionScore = () => {
  return (
    <div className="sm:w-[328px] md:w[400px] h-[150px] flex flex-col gap-[10px] bg-black-1 border-lightPink-50 absolute top-[75px] rounded-[10px] border border-solid left-[16px] p-[12px_16px] ">
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
          <p className="font-poppins font-semibold text-[26px] text-red-50 leading-[39px]">
            0%
          </p>
        </div>
        <div className="w-[75px] h-[33px] flex justify-center">
          <Image
            src="/icons/Buy-Icon.png"
            width={75}
            height={33}
            alt="question"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default PredictionScore;
