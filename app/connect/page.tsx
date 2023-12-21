"use client";

import { ConnectButton } from "@/components/ConnectButton";
import { H2, Text } from "@/components/Text";
import { redirect } from "next/navigation";
import { useAccount } from "wagmi";

const Connect = () => {
  const { isConnected, address } = useAccount();
  if (isConnected) redirect(`/dashboard?id=${address}`);

  return (
    <div className="flex flex-col items-center gap-6 mt-20">
      <div className="space-y-2">
        <H2 className="text-center">Connect your wallet to continue</H2>
        <Text className="text-center">
          Connect your wallet to access the dashboard
        </Text>
      </div>
      <ConnectButton />
    </div>
  );
};

export default Connect;
