import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SearchBarMobile = () => {
  return (
    <div className="flex items-center h-[40px] w-[200px] bg-purpleHeart-50 rounded-[10px] border border-purpleHeart-50 px-[10px] py-[6px] gap-[8px]">
      <div className="flex items-center flex-row gap-[10px] w-[141px] h-[20px]">
        <Image
          src="/icons/SearchIcon.svg"
          width={27}
          height={27}
          alt="search"
        />
        <input
          type="search"
          placeholder="Search"
          className="h-[20px] w-[150px] border-0 bg-purpleHeart-50 searchbar-mobile "
        />
      </div>
    </div>
  );
};
export default SearchBarMobile;
