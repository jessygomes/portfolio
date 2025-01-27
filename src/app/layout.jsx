import { Inter } from "next/font/google";
import "./styles/globals.css";
import Noise from "../app/components/Noise/Noise";
import Navbar from "../app/components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio de Jessy Pinto Barreto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="3a5b4085-9f27-4205-b624-dd061f83eec1"
        ></script>
      </head>
      <body className={inter.className}>
        <Analytics />
        <SpeedInsights />
        {children} <Noise />
        <div className="fixed top-0 z-30 w-full flex justify-center pt-10">
          <Navbar />
        </div>
      </body>
    </html>
  );
}
