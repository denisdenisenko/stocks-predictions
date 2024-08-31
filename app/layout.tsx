import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500"], // Adjust weights as needed
  variable: "--font-montserrat", // Set a CSS variable for the font
});

export const metadata: Metadata = {
  title: "Stockify",
  description: "Stockify App is platform for everyone",
  icons: {
    icon: "/public/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} ${montserrat.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
