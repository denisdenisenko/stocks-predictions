"use client";
import React from "react";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileSideBar = () => {
  const pathName = usePathname();

  return (
    <section className="">
      {/* Sheet component to manage sidebar */}
      <Sheet>
        {/* Trigger to open sidebar */}
        <div className="flex items-center gap-[16px]">
          <SheetTrigger>
            <Image
              src="/icons/hero-icon.svg"
              width={27}
              height={27}
              alt="menu"
              className="cursor-pointer"
            />
          </SheetTrigger>
        </div>

        {/* Sidebar Content */}
        <SheetContent side="left" className="border-none bg-white w-64">
          {/* Home Link */}
          <SheetClose asChild>
            <Link
              href="/"
              className="mb-12 cursor-pointer flex items-center gap-2 px-4"
            >
              <Image
                src="/icons/Fingerprint.svg"
                width={40}
                height={40}
                alt="Stockify logo"
                className="max-sm:size-10"
              />
              <h1 className="text-[20px] font-ibm-plex-serif font-bold text-black-1">
                Stockify
              </h1>
            </Link>
          </SheetClose>

          {/* Sidebar Links */}
          <div className="mobilenav-sheet">
            <nav className="flex flex-col gap-4 pt-4 text-black-2">
              {sidebarLinks.map((item) => {
                const isActive =
                  pathName === item.route ||
                  pathName.startsWith(`${item.route}/`);
                return (
                  <SheetClose asChild key={item.route}>
                    <Link
                      href={item.route}
                      className={cn(
                        "mobilenav-sheet_close flex items-center gap-4 w-full px-4 py-2 rounded-md border border-transparent",
                        {
                          "bg-purpleHeart-200 bg-opacity-30 border-purpleHeart-900 border-opacity-20":
                            isActive,
                        }
                      )}
                    >
                      <div className="w-6 h-6 flex-shrink-0 relative">
                        <Image
                          src={item.imgURL}
                          alt={item.label}
                          width={24}
                          height={24}
                          className={cn(
                            {
                              "brightness-[2] invert-0": isActive,
                            },
                            { "opacity-40": !isActive }
                          )}
                        />
                      </div>

                      <p
                        className={cn(
                          "sidebar-mobile-label text-[16px] font-semibold",
                          {
                            "!text-purpleHeart-900 !font-normal": isActive,
                            "text-opacity-50": !isActive,
                          }
                        )}
                      >
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="p-4">FOOTER</div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileSideBar;
