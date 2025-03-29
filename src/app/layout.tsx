import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./provider";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "Father Shops",
  description: "An Ecommerce Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>
          <Header/>
          <ToastContainer />
          {children}
        </Providers>
      </body>
    </html>
  );
}
