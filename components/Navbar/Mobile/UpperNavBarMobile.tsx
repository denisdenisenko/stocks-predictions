import React from "react";
import SearchBarMobile from "./SearchBar/SearchBarMobile";
import Image from "next/image";
import MobileSideBar from "@/components/MobileSideBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
      <div className="relative">
        <Avatar className="relative">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JT</AvatarFallback>
        </Avatar>
        <div className="absolute inset-0">
          <img
            src="/icons/Ellipse_avatar.svg"
            alt="ellipse"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default UpperNavBarMobile;
