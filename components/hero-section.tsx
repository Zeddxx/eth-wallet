"use client";

// framer motions...
import { heading } from "@/animations";
import { motion } from "framer-motion";
import { signIn } from "next-auth/react";

// shared components...
import WalletConnect from "@/components/blockchain/wallet-connect";
import IsWalletConnected from "@/components/shared/is-wallet-connected";
import Button from "./ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const HeroSection = () => {
  return (
    <motion.div
      initial={heading.initial}
      animate={heading.animate}
      transition={heading.transition}
      className="max-w-7xl mx-auto space-y-4 px-4 min-h-[calc(100dvh-80px)] flex flex-col justify-center"
    >
      <h1 className="h1 text-center">
        Seamlessly <span className="text-primary">Connect</span> Your Web3
        Wallet with One Click
      </h1>
      <p className="max-w-2xl text-sm text-muted-foreground mx-auto text-center">
        A Web3 Application to connect your wallet in a web browser and look the
        balance of your wallets.
      </p>

      <div className="flex sm:flex-row flex-col gap-3 justify-center w-full max-w-4xl mx-auto">
        <IsWalletConnected>
          <WalletConnect />
        </IsWalletConnected>
        <Button
          onClick={() =>
            signIn("github", { callbackUrl: DEFAULT_LOGIN_REDIRECT })
          }
          variant="outline"
        >
          Github Sign in
        </Button>
      </div>
    </motion.div>
  );
};
export default HeroSection;
