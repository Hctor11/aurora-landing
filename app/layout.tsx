import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.sass";

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
    <html lang="en">
      <body
        className={`${dmsans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
