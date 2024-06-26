import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "animate.css";
import { Toaster } from "react-hot-toast";
const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "home page",
  icons: {
    icon: "https://thumbs.dreamstime.com/b/sm-initial-letter-vector-logo-icon-sm-initial-letter-vector-logo-icon-199800709.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Toaster />
        <div className="w-full min-h-screen h-full bg-black flex flex-col justify-between">
          <Header />
          <main className="">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
