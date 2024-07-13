import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Digital Money House",
  description: "Tu nueva billetera digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header theme="dark" />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
