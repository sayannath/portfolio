import "./globals.css";
import { inter } from "./fonts";
import type { Metadata } from "next";
import SideNav from "@/components/SideNav";
import { Analytics } from "@vercel/analytics/next"

export const metadata: Metadata = {
  title: "Sayan — Portfolio",
  description: "Personal site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} min-h-screen antialiased
                    bg-[#000000FF] text-neutral-100
                    transition-colors`}
      >
        <SideNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
