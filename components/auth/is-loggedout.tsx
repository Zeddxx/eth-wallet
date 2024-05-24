"use client";

import { ChildrenProps } from "@/types";
import { useSession } from "next-auth/react";

const IsLoggedOut = ({ children }: ChildrenProps) => {
  const { status } = useSession();
  if (status === "authenticated") return null;
  return <div>{status === "loading" ? "Loading..." : children}</div>;
};
export default IsLoggedOut;
