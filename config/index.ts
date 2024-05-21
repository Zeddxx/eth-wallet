import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
  } from 'wagmi/chains';

export const config = getDefaultConfig({
    appName: "web-wallet",
    projectId: "fef0d0ab05ddeab57155b33dd9d2a121",
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true
})