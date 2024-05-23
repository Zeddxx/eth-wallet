"use client";

import React from "react";

// providers imports
import {
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

// custom providers components
import { ThemeProvider } from "@/components/providers/theme-provider";

// custom config...
import { config } from "@/config";
import { ReduxProvider } from "./redux-provider";

export const WrapProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <ThemeProvider
      defaultTheme="dark"
      disableTransitionOnChange
      storageKey="eth-wallet"
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            theme={darkTheme({
              fontStack: "system",
              overlayBlur: "small",
              borderRadius: "small",
            })}
            coolMode
          >
            <ReduxProvider>{children}</ReduxProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
};