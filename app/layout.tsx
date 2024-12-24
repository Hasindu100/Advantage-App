import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/sections/navBar/navBar";
import Footer from "../components/sections/footer/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 px-10 sm:px-10 md:px-10 lg:px-28 min-h-screen">
        <NavBar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
