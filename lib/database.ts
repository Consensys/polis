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

export const storeDatabase = async (state: Map<string, ApplicationNode>) => {
  const json = serializeDatabase(state);
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
