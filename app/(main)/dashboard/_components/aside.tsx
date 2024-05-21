"use client";

import { DashboardItems } from "@/constants";
import { cn } from "@/lib/utils/cn";
import { RootState } from "@/redux/store";
import { setIsMenuOpen, setTab } from "@/redux/utils";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

const Aside = () => {
  const { isMenuOpen, tab } = useSelector((state: RootState) => state.setUtils);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setIsMenuOpen(false));
  }, [tab, dispatch]);

  return (
    <header className="border-b sticky top-16 container bg-black-100 border-muted w-full">
      <div className="p-4">
        <div className="flex gap-x-4 items-center">
          {DashboardItems.map(({ item, title, icon, value }) => (
            <div
              onClick={() => dispatch(setTab(value))}
              title={title}
              className="cursor-pointer w-full"
              key={item}
            >
              <p
                className={cn(
                  "px-4 py-2 border border-muted flex items-center text-xs rounded",
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
