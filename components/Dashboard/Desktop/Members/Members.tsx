import React from "react";
import CustomBuyButton from "../../CustomBuyButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Members = () => {
  return (
    <div className="flex flex-row items-center ">
      <div className="flex flex-row items-center">
        <Avatar className="relative border-[3px] border-white w-[50px] h-[50px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JT</AvatarFallback>
        </Avatar>
        <Avatar className="relative border-[3px] border-white right-3 w-[50px] h-[50px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JT</AvatarFallback>
        </Avatar>
        <Avatar className="relative border-[3px] border-white right-6 w-[50px] h-[50px]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>JT</AvatarFallback>
        </Avatar>
        <Avatar className="relative border-[3px] border-white right-9 bg-funBlue-100 w-[50px] h-[50px]">
          <AvatarImage src="" />
          <AvatarFallback className="font-poppins font-normal text-funBlue-600 text-[20px]">
            +8
          </AvatarFallback>
        </Avatar>
      </div>
      <div>
        <CustomBuyButton
          buttonW={"154px"}
          buttonH={"40px"}
          imageSource="/icons/PlusMembers.svg"
          imageText="Invite Member"
          backgrouundColor="#F3F1FF"
          alt="Invite Member"
        />
      </div>
    </div>
  );
};

export default Members;
