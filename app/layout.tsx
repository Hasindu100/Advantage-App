import { Roboto } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import NavBar from "../components/homeSections/navBar/navBar";
import Footer from "../components/homeSections/footer/footer";

export const metadata: Metadata = {
  title: "Zone24x7 Inc",
  description: "Zone24X7 Inc is a leading software solutions provider specializing in cutting-edge technology, innovation, and digital transformation. We deliver customized software services, AI-driven solutions, and seamless integration to help businesses thrive in a dynamic market.",
  icons: {
    icon: "/images/logo/titleLogo.png",
  }
};

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-gray-50 min-h-screen overflow-x-hidden">
        <div className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-28 max-w-full">
          <NavBar />
          <main className="w-full">
            {children}
          </main>
        </div>
        <div className="mt-12">
          <Footer />
        </div>
      </body>
    </html>
  );
}