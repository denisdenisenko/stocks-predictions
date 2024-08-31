import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
const UserInfoDesktop = () => {
  const name: string = "John Travolta";
  const email: string = "johntravolta@nana.co.il";
  return (
    <div className="flex flex-row gap-5 items-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>JT</AvatarFallback>
      </Avatar>
      <div className="flex flex-row gap-12 items-center">
        <div className="flex flex-col">
          <p className="text-[18px] font-montserrat font-medium">{name}</p>
          <p className="tetx-[14px] font-montserrat font-normal text-textGray-100">
            {email}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Image
              src="/icons/Arrow-Down-Navbar.svg"
              width={45}
              height={45}
              className="cursor-pointer"
              alt="arrow-down"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserInfoDesktop;
