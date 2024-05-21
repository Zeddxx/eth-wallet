"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const ConnectWallet = () => {
  const { isConnecting, isConnected } = useAccount();

  if (isConnected) return null;

  return (
    <div className="fixed bottom-4 h-fit w-full px-4 inset-x-0 pr-4 z-20">
      <div className="container">
        <div className="float-end">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};
export default ConnectWallet;
