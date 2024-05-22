"use client";

import { ChildrenProps } from "@/types";
import { useAccount } from "wagmi";

const IsWalletConnected = ({ children }: ChildrenProps) => {
  const { address } = useAccount();

  // if wallet is disconnected don't show this component.
  if (!address) return null;

  return <>{children}</>;
};
export default IsWalletConnected;
