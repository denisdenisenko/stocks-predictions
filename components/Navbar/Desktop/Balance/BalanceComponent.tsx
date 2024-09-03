import { formatAmount } from "@/lib/utils";
import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const BalanceCompnent = () => {
  const totalCurrentBalance = 48463.94;
  return (
    <div className="w-[271px] h-[55px] border-2 border-gray-200 rounded-[6px] p-[5px_5px_5px_15px] flex-row items-center gap-6 hidden md:hidden lg:hidden xl:flex 2xl:visible">
      <p className="text-[16px] font-poppins font-medium">Balance</p>
      <div className="w-[165px] h-[45px] rounded-[6px] bg-transparentBlue-200 bg-opacity-5 items-center p-[6px_15px] flex flex-row">
        <div className="text-[22px] font-poppins font-normal text-funBlue-600">
          <AnimatedCounter
            amount={totalCurrentBalance}
            prefix={"$ "}
            decimals={2}
          />
        </div>
      </div>
    </div>
  );
};

export default BalanceCompnent;
