"use client";

import { useUser } from "@/lib/hooks/use-user";
import { ChildrenProps } from "@/types";

export const IsSignedIn = ({ children }: ChildrenProps) => {
  const { user } = useUser();

  if (!user?.isLoggedIn) return null;

  return <>{children}</>;
};
