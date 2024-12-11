import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono , Poppins } from "next/font/google";

const robotoMono = Roboto_Mono({subsets: ["latin"], weight:["400"]})
const poppins = Poppins ({subsets:["latin"], weight:["400"]})
import Header from "./components/Header";
import { ThemeProvider } from "./context/ContextThemeProvider";


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
    <html lang="pt-BR" suppressHydrationWarning>
        <body
          className={`antialiased transition-colors duration-300 ease-in-out    ${robotoMono.className} ${poppins.className}`}
        >
          <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
              <Header />
              {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
