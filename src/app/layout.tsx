import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono , Poppins } from "next/font/google";

const robotoMono = Roboto_Mono({subsets: ["latin"], weight:["400"]})
const poppins = Poppins ({subsets:["latin"], weight:["400"]})
import Header from "./components/Header";


export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Marcos Vinicius Ferreira Pinto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased  ${robotoMono.className} ${poppins.className}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
