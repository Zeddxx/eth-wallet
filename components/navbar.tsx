"use client";

// framer motion
import { motion } from "framer-motion";

// animations
import { navbar } from "@/animations";

// icons
import { FaEthereum } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";

// components
import WalletConnect from "@/components/blockchain/wallet-connect";

// Siwe components...
import { Content, ContentTrigger } from "./shared/menu/menu-component";
import { DashboardItems } from "@/constants";
import { useDispatch, useSelector } from "react-redux";
import { setIsMenuOpen, setTab } from "@/redux/utils";
import { cn } from "@/lib/utils/cn";
import { RootState } from "@/redux/store";
import IsLoggedIn from "./auth/is-loggedin";
import Logout from "./auth/logout";
import { useSession } from "next-auth/react";

const Navbar = () => {
  const { tab } = useSelector((state: RootState) => state.setUtils);
  const dispatch = useDispatch();
  const { data } = useSession()
  console.log(data);

  return (
    <motion.nav
      initial={navbar.initial}
      animate={navbar.animate}
      transition={navbar.transition}
      className="w-full sticky top-0 border-b border-muted bg-black z-20"
    >
      <div className="flex container px-4 items-center w-full justify-between h-16">
        <div className="flex gap-x-2">
          <ContentTrigger>
            <IoIosMenu className="h-6 w-6" />
          </ContentTrigger>
          <Content className="flex flex-col justify-between">
            <div className="space-y-2">
              {DashboardItems.map(({ item, title, value }) => (
                <div
                  onClick={() => {
                    dispatch(setTab(value));
                    dispatch(setIsMenuOpen(false));
                  }}
                  key={value}
                  title={title}
                  className="py-3 cursor-pointer group hover:bg-muted px-2 border border-muted rounded"
                >
                  <p
                    className={cn(
                      "text-pretty group-hover:text-white",
                      tab === value ? "text-white" : "text-muted-foreground"
                    )}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </Content>
          {/* logo */}
          <div className="h-10 w-10 grid place-items-center rounded border-muted border">
            <FaEthereum className="h-4 w-4" />
          </div>
        </div>

        {/* items */}
        <div className="flex gap-x-3 items-center">
          <IsLoggedIn>
            <WalletConnect />
          </IsLoggedIn>

          <IsLoggedIn>
            <Logout />
          </IsLoggedIn>
        </div>
      </div>
    </motion.nav>
  );
};
export default Navbar;
