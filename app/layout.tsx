import { Roboto } from 'next/font/google'
import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/homeSections/footer/footer";
import ResponsiveNav from '@/components/homeSections/navBar/responsiveNav';

export const metadata: Metadata = {
  title: "NuGenesis",
  description: "Welcome to NuGenesis: a groundbreaking system of blockchain technologies designed to unlock the potential of mass adoption in the crypto market. NuGenesis features blockchain load balancers and system validators to enable infinite parallel processing blockchains, where more users mean faster transaction speeds. Its multilingual cross-chain infrastructure ensures seamless interoperability for dApps built on Ethereum, Substrate, Bitcoin, and 29 other language systems. The network is fully operational, gasless, zero-carbon, and continuously innovating to remain at the forefront of blockchain technology. NuGenesis is the foundation for gasless NFTs, AR/VR, the metaverse, and CBDC solutions.",
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
        <ResponsiveNav />
        <div className="px-2 sm:px-4 md:px-8 lg:px-16 xl:px-28 max-w-full">

          <NavBar />
          <main className="w-full">
            {children}
          </main>
        </div>
        
        <main className="w-full">
          {children}
        </main>

        <div className="mt-12">
          <Footer />
        </div>

      </body>
    </html>
  );
}