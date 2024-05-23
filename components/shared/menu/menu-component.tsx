"use client";

import { cn } from "@/lib/utils/cn";
import { RootState } from "@/redux/store";
import { setIsMenuOpen } from "@/redux/utils";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const MenuComponent: React.FC<MenuProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "h-10 w-10 grid place-items-center rounded border-muted border",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ContentTrigger: React.FC<MenuProps> = ({
  children,
  className,
  ...props
}) => {
  const { isMenuOpen } = useSelector((state: RootState) => state.setUtils);
  const dispatch = useDispatch();

  return (
    <div
      {...props}
      onClick={() => dispatch(setIsMenuOpen(!isMenuOpen))}
      className="h-10 w-10 grid place-items-center rounded border-muted border z-40 cursor-pointer"
    >
      {children}
    </div>
  );
};

export const Content: React.FC<MenuProps> = ({
  children,
  className,
  ...props
}) => {
  const { isMenuOpen } = useSelector((state: RootState) => state.setUtils);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  if (!isMenuOpen) return null;

  return (
    <div
      onClick={() => dispatch(setIsMenuOpen(false))}
      {...props}
      className="fixed inset-0 container h-[100dvh] w-full bg-black/30 backdrop-blur z-30"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "px-4 pt-16 pb-4 border-r bg-black max-w-xs border-muted h-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
