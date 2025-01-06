import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";
import "./globals.css";

import NavBar from "./components/NavBar";

const inter = Inter({ subsets: ["latin"] });
const osans = Open_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Balemoya",
  description: "Find contractual jobs based on your skillset.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={osans.className + ' p-0 min-h-screen flex flex-col items-center'}>
        <NavBar />
        <div className="w-11/12 h-1 bg-cyan-950"></div>
        {children}
      </body>
    </html>
  );
}
