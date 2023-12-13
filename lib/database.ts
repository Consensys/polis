import { getcurrentHash, update } from "./ipns";
import { add, cat } from "./ipfs";
import { DEFAULT_FETCH_LIMIT } from "./constants";
import { isProduction } from "./constants";

export type ApplicationNode = {
  id: string;
  title: string;
  category: string[];
  description: string;
  user: string;
  applicationUrl?: string;
  repoUrl?: string;
  logo?: string;
  screenshots?: string;
  createdAt?: string;
  updatedAt?: string;
  isEditorsPick?: boolean;
};

export type Filter = (node: ApplicationNode) => boolean | undefined;

export const addNode = (
  state: Map<string, ApplicationNode>,
  node: ApplicationNode
) => {
  return new Map(state).set(node.id, node);
};

export const getNode = (state: Map<string, ApplicationNode>, id: string) => {
  return state.get(id);
};

export const serializeDatabase = (state: Map<string, ApplicationNode>) => {
  const nodes = Array.from(state.values());
  const json = JSON.stringify(nodes);
  return json;
};

export const deserializeDatabase = (nodes: ApplicationNode[]) => {
  const state = new Map(nodes.map((node: ApplicationNode) => [node.id, node]));
  return state;
};

export const storeDatabase = async () => {
  //const json = serializeDatabase(state);
  const json = JSON.stringify([
    {
      id: "HWQHZz5vEpFMGtkDKbx-2",
      user: "0xc5bD9a72AF6c3cAD9a8Df9b55515353553609cA7",
      updatedAt: "2023-08-15T19:28:17.672Z",
      createdAt: "9/12/2023, 11:54:45 PM",
      category: ["Marketplace", "Blockchain"],
      title: "Dogecoin in MetaMask",
      description:
        "This tutorial will guide you in adding a non-EVM (Ethereum Virtual Machine) chain to MetaMask using Snaps. The chain we'll be exploring? Dogecoin. 🐕💫 If you're looking to find out more about adding a non-EVM chain to MetaMask using Snaps, or simply wanting to learn more about Snaps, MetaMask's powerful extension platform, you're exactly where you need to be. ",
      applicationUrl: "",
      repoUrl: "https://github.com/ziad-saab/dogecoin-snap",
      isEditorsPick: true,
      screenshots: "QmPC7FYVJutLUgso1TYKrg6SEUHmd5nW1hga3kz5CEwBnH",
      logo: "QmWHtFSNaY5R5YXS5imrxQQUjAbmgEYkDWGVNwUsVTpsrd",
    },
    {
      id: "Ra4OH4q-d44-nLosBvhSq",
      user: "0xc12ca5A8c4726ed7e00aE6De2b068C3c48fA6570",
      createdAt: "9/1/2023, 11:30:37 PM",
      category: ["Blockchain"],
      title: "Zion: Bitcoin Snap",
      description:
        "Zion is a web platform operated and developed by Yanssie HK Limited. Services include but not limited to, accessing any website or application on the platform, and any services offered through the btcsnap platform.",
      applicationUrl: "https://btc.justsnap.io/",
      repoUrl: "https://github.com/snapdao/btcsnap",
      screenshots: "QmczXQzHBz4rhFR7KsugXgGZ12VJzXJwBQSE74E2dGt3Ze",
      logo: "QmcLJmZAch5TLGexNMte967AVzJS5yzRoVY21E6brYAi6V",
      isEditorsPick: false,
    },
    {
      id: "oMObNGIHGupfgKkwUnK-W",
      user: "0xc12ca5A8c4726ed7e00aE6De2b068C3c48fA6570",
      createdAt: "9/1/2023, 11:34:27 PM",
      category: ["Security"],
      title: "MobyMask ",
      description:
        "This snap warns you when interacting with a contract that has been identified as a phisher in the MobyMask Phisher Registry.  ",
      applicationUrl: "https://montoya.github.io/mobymask-snap/",
      repoUrl: "https://github.com/Montoya/mobymask-snap",
      screenshots: "QmddFhP3od4qRyLpzVQkoCuoGp3XRxHEeS1kckW3uHfiqF",
      logo: "QmdiM7AnXtShBznk6HbHrTBttbetRYbeixmDjaypreuPCV",
      isEditorsPick: false,
    },
    {
      id: "G64wLoKRuB4-ySeIkMbFw",
      user: "0x7a1D598f56EBCff8578170D902Aca24C0D8c7cA6",
      createdAt: "10/13/2023, 4:49:00 PM",
      category: ["Portfolio"],
      title: "MetaMask Portfolio",
      description:
        "MetaMask Portfolio is your one-stop shop for all things web3. Instead of connecting to multiple exchanges, dapps, and tools, you just need to connect to one simple dapp to fulfill all your web3 needs.\n\nMetaMask Portfolio provides a simple way to perform common tasks through features such as:\n\nDashboard\nBuy\nSwap\nBridge\nStake",
      applicationUrl: "https://portfolio.metamask.io/",
      repoUrl: "",
      screenshots: "Qmew3fZBQe5DV8y4uGyGA2gGXMw7waNm9APGqxbFLNNHoE",
      logo: "QmaBC1mUpLtokXHgD3TjGCKeJcXHdtRvDZpyvHPeaz9kF2",
      isEditorsPick: false,
    },
  ]);
  const jsonDataBlob = new Blob([json], { type: "application/json" });
  const hash = await add({ blob: jsonDataBlob, fileName: "db.json" });

  if (!hash) {
    throw new Error("couldn't store database");
  }
  await update(process.env.DB_HASH!, process.env.DB_KEY!, hash);
};

export const retrieveDatabase = async () => {
  const hash = await getcurrentHash();
  const json = await cat(hash);
  return deserializeDatabase(json);
};

export const query = async (
  predicate?: Filter,
  page = 1,
  limit = DEFAULT_FETCH_LIMIT
) => {
  const state = await retrieveDatabase();
  const nodes = Array.from(state.values());
  const matches = nodes.filter(predicate || Boolean);
  const endIndex = page * limit;

  const paginatedResults = matches.slice(0, endIndex);

  return {
    data: paginatedResults,
    total: nodes.length,
  };
};
