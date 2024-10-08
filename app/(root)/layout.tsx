import UpperNavBarDesktop from "@/components/Navbar/Desktop/UpperNavBarDesktop";
import UpperNavBarMobile from "@/components/Navbar/Mobile/UpperNavBarMobile";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar />
      <div className="flex size-full flex-col">
        <div className="hidden md:block p-[6px_0px_10px_0px]">
          <UpperNavBarDesktop />
        </div>
        <div className="root-layout">
          {/* <Image src="/icons/logo.svg" width={30} height={30} alt="logo" /> */}
          <UpperNavBarMobile />
        </div>
        {children}
      </div>
    </main>
  );
}
