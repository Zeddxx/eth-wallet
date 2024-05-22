"use client";

import { store } from "@/redux/store";
import { ChildrenProps } from "@/types";
import { Provider } from "react-redux";

export const ReduxProvider = ({ children }: ChildrenProps) => {
  return <Provider store={store}>{children}</Provider>;
};
