import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Libre_Franklin, Merriweather_Sans } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
import { UserDataProvider } from "./UserDataContext";

const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});
const judson = Merriweather_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-judson",
});

export const metadata: Metadata = {
  title: "SION El Juego de Cartas",
  description: "SION El Juego de Cartas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libre_franklin.variable + " " + judson.variable}>
        <div className="min-h-screen flex flex-col">
          <UserDataProvider>
            <Header />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />
          </UserDataProvider>
        </div>
      </body>
    </html>
  );
}
