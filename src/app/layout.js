import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Google clone",
  description: "Generated by create next app",
  icons: {
    icon: [
      {
        url: "https://static-00.iconduck.com/assets.00/google-icon-2048x2048-tmg5cp5v.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
