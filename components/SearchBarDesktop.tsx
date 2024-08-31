import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const SearchBarDesktop = () => {
  return (
    <div className="flex items-center w-full max-w-sm space-x-2 rounded-lg border border-purpleHeart-50 bg-purpleHeart-50 dark:bg-gray-900 px-3.5 py-2">
      <Image src="/icons/SearchIcon.svg" width={30} height={30} alt="search" />
      <Input
        type="search"
        placeholder="Search for stocks..."
        className="w-full border-0 h-8 font-semibold"
      />
    </div>
  );
};

export default SearchBarDesktop;
