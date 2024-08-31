import React from "react";
import Icon from "./Icon";

const IconsNavBar = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Icon
        source="/icons/Moon.svg"
        width={30}
        height={30}
        alt="Light/Dark mode"
      />
      <Icon
        source="/icons/bell-alert.svg"
        width={30}
        height={30}
        alt="Notification"
      />
    </div>
  );
};

export default IconsNavBar;
