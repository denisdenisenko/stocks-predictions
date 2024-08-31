import React from "react";
import SearchBarDesktop from "./Searchbar/SearchBarDesktop";
import BalanceCompnent from "./Balance/BalanceCompnent";
import IconsNavBar from "./ButtonIcons/IconsNavBar";
import UserInfoDesktop from "./UserInfo/UserInfoDesktop";

const UpperNavBarDesktop = () => {
  return (
    <section className=" w-[1200px] h-[56px] flex flex-row gap-5 p-[0px_20px_0px_20px] items-center">
      <p className="font-poppins text-[26px] font-semibold text-funBlue-950">
        Dashboard
      </p>
      <SearchBarDesktop />
      <BalanceCompnent />
      <IconsNavBar />
      <UserInfoDesktop />
    </section>
  );
};

export default UpperNavBarDesktop;
