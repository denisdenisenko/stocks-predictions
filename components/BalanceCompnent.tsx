import React from "react";

const BalanceCompnent = () => {
  return (
    <div className="w-[261px] h-[55px] border-2 border-gray-200 rounded-[6px] p-[5px_5px_5px_15px] flex flex-row items-center gap-6">
      <p className="text-[16px] font-poppins font-medium">Balance</p>
      <div className="w-[155] h-[45] rounded-[6px] bg-transparentBlue-200 bg-opacity-5 flex items-center">
        <p className="text-[22px] font-poppins font-normal text-funBlue-600 ">
          $ 48463.94
        </p>
      </div>
    </div>
  );
};

export default BalanceCompnent;
