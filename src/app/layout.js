import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";


const josefin_Sans = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Hekto E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin_Sans.className}>
        <Header/>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
