import React from "react";
import Icon from "./Icon";

const IconsNavBar = () => {
  return (
    <div className="flex-row gap-4 items-center hidden md:hidden lg:hidden xl:flex 2xl:visible">
      <div className=" 2xl:flex xl:hidden md:hidden sm:hidden">
        <Icon
          source="/icons/Moon.svg"
          width={30}
          height={30}
          alt="Light/Dark mode"
        />
      </div>
      <div>
        <Icon
          source="/icons/bell-alert.svg"
          width={30}
          height={30}
          alt="Notification"
        />
      </div>
    </div>
  );
};

export default IconsNavBar;
