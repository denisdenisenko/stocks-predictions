import React from "react";
import SearchBarDesktop from "./Searchbar/SearchBarDesktop";
import IconsNavBar from "./ButtonIcons/IconsNavBar";
import UserInfoDesktop from "./UserInfo/UserInfoDesktop";
import BalanceComponent from "./Balance/BalanceComponent";

const UpperNavBarDesktop = () => {
  return (
    <section className="w-full h-[70px] flex flex-row p-[0px_20px_0px_20px] items-center xl:justify-start lg:justify-start md:justify-start lg:gap-4 sm:gap-8 shadow-creditCard">
      <div>
        <p className="font-poppins text-[26px] font-semibold text-funBlue-950">
          Dashboard
        </p>
      </div>
      <div className="w-full flex flex-row items-center xl:justify-evenly lg:justify-evenly lg:gap-2 md:gap-4 ">
        <SearchBarDesktop />
        <BalanceComponent />
        <IconsNavBar />
        <UserInfoDesktop />
      </div>
    </section>
  );
};

export default UpperNavBarDesktop;
