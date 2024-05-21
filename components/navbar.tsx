"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaEthereum } from "react-icons/fa6";
import { useAccount } from "wagmi";
import { motion } from "framer-motion";
import { navbar } from "@/animations";
import Link from "next/link";
import { GrDashboard } from "react-icons/gr";

const Navbar = () => {
  const { isConnected } = useAccount();

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
          <Link href="/dashboard" className="flex items-center gap-x-2 hover:text-primary duration-200
          ">
            <span className="sm:block hidden">Dashboard</span>
            <GrDashboard className="" />    
        </Link>
          {isConnected ? <ConnectButton /> : null}
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
