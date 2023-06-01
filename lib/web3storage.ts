import { Web3Storage } from "web3.storage";

let client: Web3Storage;

export const getWeb3StorageClient = () => {
  const token = process.env.WEB3_STORAGE_TOKEN;
  if (!token) throw new Error("No web3 storage token found");

  if (client) return client;

  client = new Web3Storage({
    token,
  });
};
