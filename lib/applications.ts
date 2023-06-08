import { prisma } from "./db";

export const getApplications = async (): Promise<IApplication[]> => {
  const applicationsMeta = await prisma.application.findMany();

  const nameServiceUrl = process.env.WEB3_NAME_SERVICE_URL;

  if (!nameServiceUrl) {
    throw new Error("WEB3_NAME_SERVICE_URL is not set");
  }

  const response = applicationsMeta.map(async (application) => {
    return getApplication(application.name);
  });

  return (await Promise.all(response)).filter(Boolean) as IApplication[];
};

export const getApplication = async (
  name: string
): Promise<IApplication | undefined> => {
  try {
    const application = await prisma.application.findFirstOrThrow({
      where: {
        name,
      },
    });

    const nameServiceUrl = process.env.WEB3_NAME_SERVICE_URL;

    if (!nameServiceUrl) {
      throw new Error("WEB3_NAME_SERVICE_URL is not set");
    }

    const res = await fetch(`${nameServiceUrl}/${application.name}`);

    const cid = (await res.json()).value;

    // get the directory contents
    const dirResponse = await fetch(`https://dweb.link/api/v0/ls?arg=${cid}`);

    const directory = await dirResponse.json();

    const dataHash = directory.Objects[0].Links.find(
      (link: any) => link.Name === "data.json"
    ).Hash;

    const dataResponse = await fetch(
      `https://polis.infura-ipfs.io/ipfs/${dataHash}`
    );

    const data: IApplication = await dataResponse.json();

    const screenshots =
      directory.Objects[0].Links.filter(
        (link: any) => link.Name !== "data.json"
      ).map((sc: any) => sc.Hash) || [];

    return { ...data, screenshots, id: application.name };
  } catch (error) {
    console.error("Error getting application", error);
  }
};
