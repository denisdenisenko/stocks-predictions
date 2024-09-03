import React from "react";
import Image from "next/image";

const CustomBuyButton = () => {
  return (
    <div className="cursor-pointer">
      <div className="w-[81px] h-[37px] rounded-[60px] border-[1px] p-[8px_15px] border-purpleHeart-950 items-center flex flex-row gap-1">
        <Image
          src="icons/buyStockShoppingBag.svg"
          width={20}
          height={20}
          alt={"Shopping bag"}
          className="shopping-bag"
        />
        <p className="font-poppins font-normal text-[14] text-purpleHeart-950">
          Buy
        </p>
      </div>
    </div>
  );
};

export default CustomBuyButton;
