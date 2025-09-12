import "./globals.css";
import { inter } from "./fonts";
import type { Metadata } from "next";
import SideNav from "@/components/SideNav";

export const metadata: Metadata = {
  title: "Sayan — Portfolio",
  description: "Personal site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-[#0b0b0b] text-neutral-300 antialiased">
        <SideNav />
        {children}
      </body>
    </html>
  );
}
