import React from "react";
import { Poppins } from "next/font/google";
import SearchBarDesktop from "./SearchBarDesktop";
import BalanceCompnent from "./BalanceCompnent";

const UpperNavBarDesktop = () => {
  return (
    <section className=" w-[1200px] h-[78px] flex flex-row justify-between items-center">
      <p className="font-poppins text-[26px] font-semibold text-funBlue-950">
        Dashboard
      </p>
      <SearchBarDesktop />
      <BalanceCompnent />
      <div>Icons</div>
      <div>User</div>
    </section>
  );
};

export default UpperNavBarDesktop;
