import "./globals.css";
import { inter } from "./fonts";
import type { Metadata } from "next";
import SideNav from "@/components/SideNav";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Sayan — Portfolio",
  description: "Personal site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} min-h-screen antialiased
                    bg-white text-neutral-900
                    dark:bg-[#0b0b0b] dark:text-neutral-100
                    transition-colors`}
      >
        <Providers>
          <SideNav />
          {children}
        </Providers>
      </body>
    </html>
  );
}
