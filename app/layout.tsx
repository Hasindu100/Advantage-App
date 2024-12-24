import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/sections/navBar/navBar";
import Footer from "../components/sections/footer/footer";

export const metadata: Metadata = {
  title: "Zone24x7 Inc",
  description: "Zone24X7 Inc is a leading software solutions provider specializing in cutting-edge technology, innovation, and digital transformation. We deliver customized software services, AI-driven solutions, and seamless integration to help businesses thrive in a dynamic market.",
  icons: {
    icon: "/images/logo/titleLogo.png",
  }
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
