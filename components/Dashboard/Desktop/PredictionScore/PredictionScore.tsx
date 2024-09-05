import Icon from "@/components/Navbar/Desktop/ButtonIcons/Icon";
import React from "react";
import CustomBuyButton from "../../CustomBuyButton";
import AnimatedCounter from "@/components/Navbar/Desktop/Balance/AnimatedCounter";

const PredictionScore = () => {
  const predictedScore = 33;

  const searchedStock = "NVDA";
  return (
    <div className="w-[545px] h-[110px] flex flex-row items-center gap-8 border-[1px] rounded-[10px] p-[16px_30px] bg-prediction-gradient">
      <div className="flex flex-col  w-[296px]">
        <div className="flex flex-row gap-4">
          <p className="font-poppins font-semibold text-[24px] text-funBlue-950">
            Prediction Score
          </p>
          <Icon
            source={"/icons/question-mark-circle.svg"}
            width={20}
            height={20}
            alt={"questionMark"}
            divW="35px"
            divH="35px"
          />
        </div>
        <p className="font-poppins font-normal text-[14px] text-textPredictionGray-100">
          Prediction score for the searched stock: &quot;{searchedStock}
          &quot;
        </p>
      </div>
      <div className="flex flex-row items-center font-poppins font-semibold text-[40px] text-textPredictionRed-100">
        <AnimatedCounter amount={predictedScore} />

        <p> %</p>
      </div>
      <CustomBuyButton
        buttonW="81px"
        buttonH="37px"
        imageSource="/icons/buyStockShoppingBag.svg"
        imageText="Buy"
        alt="Buy"
      />
    </div>
  );
};

export default PredictionScore;
