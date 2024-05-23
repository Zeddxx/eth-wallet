import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { WrapProvider } from "@/components/providers/wrap-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Wallet | A Web3 Wallet",
  description:
    "A Eth Wallet to navigate your transaction and balance of your wallet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased dark bg-black min-h-[100dvh] relative`}
      >
        <WrapProvider>
            <div className="">{children}</div>
        </WrapProvider>
      </body>
    </html>
  );
}
