import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SearchBarMobile = () => {
  return (
    <div
      className="flex items-center h-[40px] w-[180px] rounded-[10px] border border-purpleHeart-50 px-[10px] py-[6px] gap-[8px]"
      style={{ backgroundColor: "rgba(243, 241, 255, 0.6)" }}
    >
      <div className="flex items-center flex-row gap-[10px] w-[141px] h-[20px]">
        <Image
          src="/icons/SearchIcon.svg"
          width={28}
          height={28}
          alt="search"
        />
        <input
          type="search"
          placeholder="Search"
          className="h-[20px] w-[141px] border-0 font-semibold searchbar-mobile"
          style={{ backgroundColor: "rgba(243, 241, 255, 0.6)" }}
        />
      </div>
    </div>
  );
};
export default SearchBarMobile;
