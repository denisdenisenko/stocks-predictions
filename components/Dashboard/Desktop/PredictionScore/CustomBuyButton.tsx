import React from "react";
import Image from "next/image";

interface CustomButtonSize {
  buttonW: string;
  buttonH: string;
}

const CustomBuyButton: React.FC<CustomButtonSize> = ({ buttonW, buttonH }) => {
  return (
    <div className="cursor-pointer">
      <div
        className={`rounded-[60px] border-[1px] px-4 py-2 border-purpleHeart-950 items-center flex flex-row gap-1`}
        style={{ width: buttonW, height: buttonH }}
      >
        <Image
          src="/icons/buyStockShoppingBag.svg"
          width={15}
          height={15}
          alt="Shopping bag"
          className="shopping-bag"
        />
        <p className="font-poppins font-normal text-[14px] text-purpleHeart-950">
          Buy
        </p>
      </div>
    </div>
  );
};

export default CustomBuyButton;
