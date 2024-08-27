import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/index";

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata: Metadata = {
  title: "Victor Adeshina Portfolio",
  description: "A modern portfolio created by victor adeshina aka victorscript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main id="container">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

//FEATURES
//1. Custom Loader