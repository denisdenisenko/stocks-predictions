import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SearchBarDesktop = () => {
  return (
    <div className="flex items-center w-[313px] h-[42px] rounded-lg border border-purpleHeart-50 bg-purpleHeart-50 dark:bg-gray-900 p-[9px_16px_9px_16px] gap-2">
      <Image src="/icons/SearchIcon.svg" width={30} height={30} alt="search" />
      <Input
        type="search"
        placeholder="Search for stocks..."
        className="w-full border-0 h-8 font-semibold searchbar-desktop"
      />
    </div>
  );
};

export default SearchBarDesktop;
