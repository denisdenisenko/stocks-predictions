import React from "react";
import SearchBarMobile from "./SearchBar/SearchBarMobile";
import Image from "next/image";
import MobileSideBar from "@/components/MobileSideBar";

const UpperNavBarMobile = () => {
  return (
    <div className="flex w-full flex-row gap-[16px] justify-evenly  items-center">
      <MobileSideBar />
      <SearchBarMobile />
      <Image
        src="/icons/Reminder-Icon.svg"
        width={27}
        height={27}
        alt="reminder"
        className="cursor-pointer"
      />
      <Image
        src="/icons/Frame-Icon.svg"
        width={40}
        height={40}
        alt="frame"
        className="cursor-pointer"
      />
    </div>
  );
};

export default UpperNavBarMobile;
