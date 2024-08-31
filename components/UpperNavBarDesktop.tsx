import React from "react";
import { Poppins } from "next/font/google";
import SearchBarDesktop from "./SearchBarDesktop";

const UpperNavBarDesktop = () => {
  return (
    <section className="flex flex-row justify-between items-center">
      <p className="font-poppins text-[26px] font-semibold text-funBlue-950">
        Dashboard
      </p>
      <SearchBarDesktop />
      <div>Balance</div>
      <div>Icons</div>
      <div>User</div>
    </section>
  );
};

export default UpperNavBarDesktop;
