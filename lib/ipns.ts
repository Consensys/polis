import * as Name from "w3name";
import { isProduction } from "./constants";

export const update = async (ipns: string, keyStr: string, content: string) => {
  const name = Name.parse(ipns);
  const revision = await Name.resolve(name);

  const nextRevision = await Name.increment(revision, content);

  if (!keyStr) {
    return;
  }
  const key = new Uint8Array(Buffer.from(keyStr, "base64"));

  const name2 = await Name.from(key);
  await Name.publish(nextRevision, name2.key);
};

export const getcurrentHash = async () => {
  const nameServiceUrl = process.env.WEB3_NAME_SERVICE_URL;

  if (!nameServiceUrl) {
    throw new Error("WEB3_NAME_SERVICE_URL is not set");
  }

  const res = await fetch(`${nameServiceUrl}/${isProduction ? process.env.DB_HASH : process.env.DB_HASH_DEV}`);

  return (await res.json()).value;
};
