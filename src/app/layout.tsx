import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DarkVeil from "../components/Background/Index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter.className} relative min-h-screen overflow-x-hidden text-slate-50 antialiased`}
      >
        <div className="fixed inset-0 -z-10 h-full w-full">
          <DarkVeil />
        </div>

        <main className="relative z-10 flex w-full flex-col">{children}</main>
      </body>
    </html>
  );
}
