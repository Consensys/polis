import { getWeb3StorageClient } from "./web3storage";

export const addToIpfs = async (files: File[]) => {
  const client = getWeb3StorageClient();

  if (!client) throw new Error("No web3 storage client found");

  return await client.put(files);
};
