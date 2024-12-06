import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.sass";

const ntype = localFont({
  src: "./fonts/NType82-Regular.otf",
  display: "swap", 
  variable: "--font-ntype",
});

const dmsans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Aurora",
  description: "Excelencia en techado para hogares de lujo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ntype.variable}`}>
      <body
        className={`${dmsans.className} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
