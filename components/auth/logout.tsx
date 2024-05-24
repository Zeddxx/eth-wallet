"use client";

import { logout } from "@/actions/logout";
import Button from "../ui/button";
import { cn } from "@/lib/utils/cn";
import { useDisconnect } from "wagmi";

interface LogoutProps {
  label?: string;
  className?: string;
}

const Logout = ({ label = "Logout", className }: LogoutProps) => {
  const { disconnect } = useDisconnect();
  const onClick = () => {
    logout();
    disconnect();
  };
  return (
    <Button onClick={onClick} variant="outline" className={cn("", className)}>
      {label}
    </Button>
  );
};
export default Logout;
