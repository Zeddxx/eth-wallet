"use client";

import { HTMLAttributes, useEffect } from "react";

import { useUser } from "@/lib/hooks/use-user";
import Button from "@/components/ui/button";
import { siweLogout } from "../action/siwe-logout";
import { useAccount, useDisconnect } from "wagmi";

interface ButtonSIWELogoutProps extends HTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const ButtonSIWELogout = ({
  className,
  label = "Logout",
  children,
  ...props
}: ButtonSIWELogoutProps) => {
  const { mutateUser } = useUser();
  const { isDisconnected } = useAccount()
  const { disconnectAsync } = useDisconnect()

  const handleLogout = async () => {
    await siweLogout();
    await mutateUser();
    await disconnectAsync();
  };

  useEffect(() => {
    if(isDisconnected) {
      handleLogout()
    }
  }, [isDisconnected])

  return (
    <Button
      variant="outline"
      className={className}
      onClick={() => void handleLogout()}
      {...props}
    >
      {children || label}
    </Button>
  );
};
