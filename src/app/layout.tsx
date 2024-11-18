import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ads from "@/components/Ads";
import { LikesProvider } from "@/components/utils/LikeContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bandage",
  description: "Your one-stop shop for trendy products",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LikesProvider>
          <Ads />
          <Header />
          <main className="md:px-32 px-4">
            {children}
          </main>
          <Footer />
        </LikesProvider>
      </body>
    </html>
  );
}
