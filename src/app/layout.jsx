import { Inter } from "next/font/google";
import "./styles/globals.css";
import Noise from "./components/Noise/Noise";
import Navbar from "./components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio de Jessy Pinto Barreto",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} <Noise />
        <div className="fixed top-0 z-30 w-full flex justify-center pt-10 ">
          <Navbar />
        </div>
      </body>
    </html>
  );
}
