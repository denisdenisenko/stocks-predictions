import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SearchBarMobile = () => {
  return (
    <div className="flex items-center h-[40px] w-[161px] max-w-sm space-x-2 rounded-lg border gap-[10px] border-purpleHeart-50 bg-purpleHeart-50 dark:bg-gray-900 px-3.5 py-2">
      <Image src="/icons/SearchIcon.svg" width={30} height={30} alt="search" />
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
