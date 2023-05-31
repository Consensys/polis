"use server";

import { applications } from "../dummy-data";
//import { addToIpfs } from "./ipfs";
//import { publish } from "./ipns";
import { prisma } from "./db";

export const addApplication = async (newApplication: any) => {
  // const hash = await addToIpfs(newApplication);
  // const { name, key } = await publish(hash.toString());
  // const application = await prisma.application.create({
  //   data: {
  //     name,
  //     key: JSON.stringify(Array.from(key)),
  //   },
  // });
};

export const getApplications = async (): Promise<IApplication[]> => {
  // returning dummy data for now

  return new Promise((resolve) => {
    resolve(applications);
  });

  // const applications = await prisma.application.findMany();
  // const nameServiceUrl = process.env.WEB3_NAME_SERVICE_URL;

  // if (!nameServiceUrl) {
  //   throw new Error("WEB3_NAME_SERVICE_URL is not set");
  // }

  // const response = applications.map(async (application) => {
  //   const res = await fetch(`${nameServiceUrl}/${application.name}`);
  //   const hash = (await res.json()).value;
  //   const resp = await fetch(`https://${hash}.ipfs.w3s.link/data.json`);
  //   const data = await resp.json();
  //   return {
  //     name: application.name,
  //     data,
  //   };
  // });

  // return Promise.all(response);
};

export const getApplication = async (
  id: string
): Promise<IApplication | undefined> => {
  return new Promise((resolve) => {
    applications.find((application) => application.id === id);
    resolve(applications.find((application) => application.id === id));
  });

  // const application = await prisma.application.findFirstOrThrow({
  //   where: {
  //     name: ipns,
  //   },
  // });

  // const nameServiceUrl = process.env.WEB3_NAME_SERVICE_URL;

  // if (!nameServiceUrl) {
  //   throw new Error("WEB3_NAME_SERVICE_URL is not set");
  // }

  // const res = await fetch(`${nameServiceUrl}/${application.name}`);
  // const hash = (await res.json()).value;
  // const resp = await fetch(`https://${hash}.ipfs.w3s.link/data.json`);
  // return await resp.json();
};

// export const updateApplication = async (data: any, ipns: any) => {
//   const hash = await addToIpfs(data);

//   const application = await prisma.application.findFirstOrThrow({
//     where: {
//       name: ipns,
//     },
//   });

//   update(ipns, application.key, hash.toString());
// };
