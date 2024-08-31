import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SearchBarMobile = () => {
  return (
    <div className="flex items-center h-[40px] w-[161px] rounded-[10px] border border-purpleHeart-50 bg-purpleHeart-50 px-[10px] py-[6px] gap-[8px]">
      <Image src="/icons/SearchIcon.svg" width={20} height={20} alt="search" />
      <Input
        type="search"
        placeholder="Search"
        className=" h-[20px] w-[141px]  border-0  font-semibold searchbar-mobile"
      />
    </div>
  );
  ///
};
export default SearchBarMobile;
