"use client";

import { ReactNode } from "react";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { infuraProvider } from "@wagmi/core/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { mainnet, goerli } from "@wagmi/core/chains";
import { ThemeProvider } from "next-themes";

type Props = {
  children: ReactNode;
};

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli],
  [
    publicProvider(),
    infuraProvider({ apiKey: process.env.INFURA_API_KEY as string }),
  ]
);

const config = createConfig({
  autoConnect: false,
  connectors: [new MetaMaskConnector({ chains })],
  publicClient,
  webSocketPublicClient,
});

const Providers: React.FC<Props> = ({ children }) => (
  <WagmiConfig config={config}>
    <ThemeProvider attribute="class">{children}</ThemeProvider>
  </WagmiConfig>
);

export default Providers;
