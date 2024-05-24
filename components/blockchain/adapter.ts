import { createAuthenticationAdapter } from "@rainbow-me/rainbowkit";
import React from "react";
import { SiweMessage } from "siwe";
import { IAuthStatus } from "@/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface IAdapterProps {
  setAuthStatus: React.Dispatch<React.SetStateAction<IAuthStatus>>;
  router: AppRouterInstance;
}

export const createAuthAdapter = ({ setAuthStatus, router }: IAdapterProps) =>
  createAuthenticationAdapter({
    getNonce: async () => {
      const response = await fetch("/api/siwe/nonce");
      return await response.text();
    },

    createMessage: ({ nonce, address, chainId }) => {
      return new SiweMessage({
        domain: window.location.host,
        address,
        statement: "Sign in with Ethereum to the app.",
        uri: window.location.origin,
        version: "1",
        chainId,
        nonce,
      });
    },

    getMessageBody: ({ message }) => {
      return message.prepareMessage();
    },

    verify: async ({ message, signature }) => {
      const verifyRes = await fetch("/api/siwe/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, signature }),
      });

      if (verifyRes.ok) {
        setAuthStatus("authenticated");
        localStorage.setItem("auth_status", "authenticated")
        router.push("/dashboard");
        return true;
      }

      return false;
    },

    signOut: async () => {
      await fetch("/api/siwe/logout");
      localStorage.setItem("auth_status", "unauthenticated")
    },
  });
