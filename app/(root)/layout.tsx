import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import UpperNavBarDesktop from "@/components/UpperNavBarDesktop";
import UpperNavBarMobile from "@/components/UpperNavBarMobile";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />
      <div className="flex size-full flex-col">
        <div className="hidden md:block sm:p-8">
          <UpperNavBarDesktop />
        </div>
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <UpperNavBarMobile />
          <div>
            <MobileNav />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
