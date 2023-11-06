import { Anybody } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/NavBar";

const anybody = Anybody({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata = {
  title: "UniPatas",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={anybody.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
