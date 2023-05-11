import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { WagmiConfig, createConfig, configureChains } from "wagmi";

import { infuraProvider } from "@wagmi/core/providers/infura";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { mainnet, goerli } from "@wagmi/core/chains";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli],
  [
    publicProvider(),
    infuraProvider({ apiKey: process.env.INFURA_API_KEY as string }),
  ]
);

const config = createConfig({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: process.env.WALLETCONNECT_PROJECT_ID as string,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={config}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
