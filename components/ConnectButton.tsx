import { useState } from "react";
import Button from "./Button";
import WalletIcon from "./icons/WalletIcon";
import { ConnectionModal } from "./ConnectionModal";
import { useAccount } from "wagmi";
import DisconnectIcon from "./icons/DisconnectIcon";
import { useDisconnect } from "wagmi";

export const ConnectButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  const handleDisconnect = () => {
    disconnect();
    setOpen(false);
  };

  if (isConnected) {
    return (
      <Button
        className=" bg-opacity-0 text-primary shadow-none hover:bg-opacity-0 hover:shadow-none"
        onClick={handleDisconnect}
      >
        <DisconnectIcon /> Disconnect
      </Button>
    );
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <WalletIcon /> Connect Wallet
      </Button>

      <ConnectionModal open={open} setOpen={setOpen} />
    </>
  );
};
