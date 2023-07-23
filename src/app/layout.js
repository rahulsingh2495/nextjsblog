"use client"
import Navbar from "@component/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@component/components/Footer/Footer";
// import { ThemeContext, ThemeProvider } from "@/context/ThemeContext";
import { ThemeContext, ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "@component/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Modern Blog",
  description: "This Modern Blog is made by using Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
        <AuthProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
