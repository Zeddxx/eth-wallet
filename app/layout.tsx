import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { WrapProvider } from "@/providers/wrap-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import ConnectWallet from "@/components/connect-wallet";
import { ReduxProvider } from "@/providers/redux-provider";
import SessionProvider from "@/providers/session-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Wallet | A Web3 Wallet",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-black-100 min-h-[100dvh] relative`}
      >
        <SessionProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <WrapProvider>
              <ReduxProvider>
                <div className="">{children}</div>
                <ConnectWallet />
              </ReduxProvider>
            </WrapProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
