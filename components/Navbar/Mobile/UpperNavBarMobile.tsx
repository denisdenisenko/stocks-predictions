import React from "react";
import SearchBarMobile from "./SearchBar/SearchBarMobile";
import Image from "next/image";
import MobileSideBar from "@/components/MobileSideBar";

const UpperNavBarMobile = () => {
  return (
    <div className="flex flex-row gap-[16px] items-center">
      <MobileSideBar />
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
