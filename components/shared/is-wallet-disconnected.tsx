"use client";

import { ChildrenProps } from "@/types";
import { useAccount } from "wagmi";

const IsWalletDisconnected = ({ children }: ChildrenProps) => {
  const { address } = useAccount();

  // if connected hide this component
  if (address) return null;

  return <>{children}</>;
};
export default IsWalletDisconnected;
