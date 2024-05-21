import Navbar from "@/components/navbar";
import ConnectWallet from "@/components/connect-wallet";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Navbar />
      <div className="">{children}</div>
      <ConnectWallet />
    </main>
  );
}
