"use client";

import React from "react";

// providers imports
import {
  RainbowKitAuthenticationProvider,
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
import { createAuthAdapter } from "../blockchain/adapter";
import { useRouter } from "next/navigation";
import { IAuthStatus } from "@/types";

export const WrapProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  const [authStatus, setAuthStatus] =
    React.useState<IAuthStatus>("unauthenticated");

    React.useEffect(() => {
      if (typeof window !== "undefined") {
        const storedStatus = localStorage.getItem("auth_status");
        const status = storedStatus === "authenticated" ? "authenticated" : "unauthenticated";
        setAuthStatus(status);
      }
    }, []);

  const router = useRouter();

  const authAdapter = React.useMemo(
    () => createAuthAdapter({ setAuthStatus, router }),
    [setAuthStatus, router]
  );

  return (
    <ThemeProvider
      defaultTheme="dark"
      disableTransitionOnChange
      storageKey="eth-wallet"
    >
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitAuthenticationProvider
            adapter={authAdapter}
            status={authStatus}
          >
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
          </RainbowKitAuthenticationProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ThemeProvider>
  );
};
