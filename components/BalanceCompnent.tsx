import { formatAmount } from "@/lib/utils";
import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const BalanceCompnent = () => {
  const totalCurrentBalance = 48463.94;
  return (
    <div className="w-[261px] h-[55px] border-2 border-gray-200 rounded-[6px] p-[5px_5px_5px_15px] flex flex-row items-center gap-6">
      <p className="text-[16px] font-poppins font-medium">Balance</p>
      <div className="w-[155] h-[45] rounded-[6px] bg-transparentBlue-200 bg-opacity-5 flex items-center">
        <div className="text-[22px] font-poppins font-normal text-funBlue-600 ">
          <AnimatedCounter amount={totalCurrentBalance} />
        </div>
      </div>
    </div>
  );
};

export default BalanceCompnent;
