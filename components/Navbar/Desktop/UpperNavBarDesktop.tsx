import React from "react";
import SearchBarDesktop from "./Searchbar/SearchBarDesktop";
import BalanceCompnent from "./Balance/BalanceCompnent";
import IconsNavBar from "./ButtonIcons/IconsNavBar";
import UserInfoDesktop from "./UserInfo/UserInfoDesktop";

//lg:p-8 xl:p-10 2xl:p-12

const UpperNavBarDesktop = () => {
  return (
    <section className=" w-full h-[56px] flex flex-row p-[0px_20px_0px_20px] items-center xl:justify-evenly lg:justify-evenly lg:gap-2">
      <div>
        <p className="font-poppins text-[26px] font-semibold text-funBlue-950">
          Dashboard
        </p>
      </div>
      <div className="w-full h-[56px] flex flex-row p-[0px_20px_0px_20px] items-center xl:justify-evenly lg:justify-evenly lg:gap-2">
        <SearchBarDesktop />
        <BalanceCompnent />
        <IconsNavBar />
        <UserInfoDesktop />
      </div>
    </section>
  );
};

export default UpperNavBarDesktop;
