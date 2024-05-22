"use client";

// next hooks and components
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

// animations
import { navbar } from "@/animations";

// icons
import { GrDashboard } from "react-icons/gr";
import { FaEthereum } from "react-icons/fa6";

// components
import IsWalletConnected from "@/components/shared/is-wallet-connected";
import IsWalletDisconnected from "@/components/shared/is-wallet-disconnected";
import WalletConnect from "@/components/blockchain/wallet-connect";

// Siwe components...
import { ButtonSIWELogin } from "@/siwe/components/siwe-button";
import { IsSignedIn } from "@/siwe/components/is-signed-in";
import { IsSignedOut } from "@/siwe/components/is-signed-out";
import { ButtonSIWELogout } from "@/siwe/components/button-siwe-logout";

const Navbar = () => {
  return (
    <motion.nav
      initial={navbar.initial}
      animate={navbar.animate}
      transition={navbar.transition}
      className="w-full sticky top-0 bg-black-100 z-20"
    >
      <div className="flex container px-4 items-center w-full justify-between h-16">
        {/* logo */}
        <div className="h-10 w-10 grid place-items-center rounded border-muted border">
          <FaEthereum className="h-4 w-4" />
        </div>

        {/* items */}
        <div className="flex gap-x-3 items-center">
          <Link
            href="/dashboard"
            className="flex items-center gap-x-2 hover:text-primary duration-200
          "
          >
            <span className="sm:block hidden">Dashboard</span>
            <GrDashboard className="" />
          </Link>
          <IsWalletConnected>
            <WalletConnect />
            <IsSignedIn>
              <ButtonSIWELogout />
            </IsSignedIn>
            <IsSignedOut>
              <ButtonSIWELogin />
            </IsSignedOut>
          </IsWalletConnected>

          <IsWalletDisconnected>
            <WalletConnect />
          </IsWalletDisconnected>
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
