"use client";

import { useSession } from "next-auth/react";
import React from "react";

interface IsLoggedInProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

const IsLoggedIn: React.FC<IsLoggedInProps> = ({ children, ...props }) => {
  const { status } = useSession();

  if (status === "unauthenticated") return null;

  return <div {...props}>{children}</div>;
};
export default IsLoggedIn;
