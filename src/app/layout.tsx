import { Footer } from "@/ui/footer/footer";
import "@/ui/globals.css";
import { Header } from "@/ui/header/header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

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
      <body className={`${openSans.className} antialised`}>
        <Header isLoggedIn={true} />
        <main>{children}</main>
        <Footer isLoggedIn={true} />
      </body>
    </html>
  );
}
