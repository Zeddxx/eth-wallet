"use client";

import { ChildrenProps } from "@/types";
import { SessionProvider as NextAuthProvider } from "next-auth/react";

export default function SessionProvider({ children }: ChildrenProps) {
  return <NextAuthProvider>{children}</NextAuthProvider>;
}
