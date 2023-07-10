"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import { infuraProvider } from "@wagmi/core/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { mainnet, goerli } from "@wagmi/core/chains";

interface ProvidersProps {
  children: ReactNode;
}

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

const WagmiProvider: React.FC<ProvidersProps> = ({ children }) => (
  <WagmiConfig config={config}>{children}</WagmiConfig>
);

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="class">
      <WagmiProvider>{children}</WagmiProvider>
    </ThemeProvider>
  );
};

export default Providers;
