"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DashboardItems } from "@/constants";
import { cn } from "@/lib/utils/cn";
import { RootState } from "@/redux/store";
import { setIsMenuOpen, setTab } from "@/redux/utils";

const Aside = () => {
  const dispatch = useDispatch();
  const { tab } = useSelector((state: RootState) => state.setUtils);

  useEffect(() => {
    dispatch(setIsMenuOpen(false));
  }, [tab, dispatch]);

  return (
    <header className="sticky top-16 z-40 w-full container border-b border-muted bg-black-100">
      <div className="p-4">
        <div className="flex items-center gap-x-4">
          {DashboardItems.map(({ item, title, value }) => (
            <div
              key={item}
              title={title}
              onClick={() => dispatch(setTab(value))}
              className="w-full cursor-pointer"
            >
              <p
                className={cn(
                  "flex items-center px-4 py-2 text-xs border border-muted rounded",
                  tab === value ? "bg-black-300" : "bg-black-100"
                )}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Aside;