import React from "react";
import SearchBarMobile from "./SearchBar/SearchBarMobile";
import Image from "next/image";

const UpperNavBarMobile = () => {
  return (
    <div className="flex flex-row gap-[20px] w-[327px] h-[40px] ">
      <Image
        src="/icons/hero-icon.svg"
        width={20}
        height={20}
        alt="menu"
        className="cursor-pointer"
      />
      <SearchBarMobile />
      <Image
        src="/icons/Reminder-Icon.svg"
        width={20}
        height={20}
        alt="reminder"
        className="cursor-pointer"
      />
    </div>
  );
};

export default UpperNavBarMobile;
