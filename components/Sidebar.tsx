"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link
          href="/"
          className="mb-12
        cursor-pointer flex
        items-center gap-2"
        >
          <Image
            src="/icons/Fingerprint.svg"
            width={50}
            height={50}
            alt="Stockify logo"
            className="size-[40px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Stockify</h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            pathName === item.route || pathName.startsWith(`${item.route}/`);
          return (
            <Link
              href={item.route}
              key={item.label}
              className={cn("sidebar-link border border-transparent", {
                "bg-purpleHeart-200 bg-opacity-30 border-purpleHeart-900 border-opacity-20":
                  isActive,
              })}
            >
              <div className="relative size-6">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  fill
                  className={cn(
                    {
                      "brightness-[2] invert-0": isActive,
                    },
                    { "opacity-40": !isActive }
                  )}
                />
              </div>
              <p
                className={cn("sidebar-label", {
                  "!text-purpleHeart-900 ": isActive,
                })}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
      FOOTER
    </section>
  );
};

export default Sidebar;
