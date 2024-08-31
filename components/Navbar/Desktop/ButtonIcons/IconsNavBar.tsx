import React from "react";
import Icon from "./Icon";

const IconsNavBar = () => {
  return (
    <div className="flex flex-row gap-5 items-center">
      <Icon
        source="/icons/SunOutline.png"
        width={18}
        height={18}
        alt="Light/Dark mode"
      />
      <Icon
        source="/icons/Notifications.png"
        width={22.19}
        height={22.5}
        alt="Notification"
      />
    </div>
  );
};

export default IconsNavBar;
