"use server";
import { nanoid } from "nanoid";
import {
  addNode,
  retrieveDatabase,
  storeDatabase,
  ApplicationNode,
  query,
  Filter,
  getNode,
} from "./database";
import { getDirectoryContent, add } from "./ipfs";
import { revalidatePath } from "next/cache";

type getApplicationsParams = {
  filter?: Filter;
  page?: number;
  limit?: number;
};

export const getApplications = async ({
  filter,
  page,
  limit,
}: getApplicationsParams): Promise<{
  applications: IApplication[];
  total: number;
}> => {
  const applicationNodes = await query(filter, page, limit);

  const applications = Array.from(applicationNodes.data.values()).map(
    async ({ screenshots: screenshotsHash, logo: logoHash, ...rest }) => {
      let screenshots: string[] = [],
        logo = undefined;

      if (screenshotsHash) {
        // get the screenshots directory contents
        screenshots = (await getDirectoryContent(screenshotsHash)).map(
          (hash) => `${process.env.INFURA_IPFS_GATEWAY}/${hash}`
        );
      }

      if (logoHash) {
        logo = `${process.env.INFURA_IPFS_GATEWAY}/${logoHash}`;
      }

      return {
        ...rest,
        screenshots,
        logo,
      };
    }
  );

  return {
    applications: await Promise.all(applications),
    total: applicationNodes.total,
  };
};

export const getApplication = async (
  id: string
): Promise<IApplication | undefined> => {
  try {
    const application = (await query((node: ApplicationNode) => node.id === id))
      .data[0];

    const { screenshots: screenshotsHash, logo: logoHash } = application;

    let screenshots: string[] = [],
      logo = undefined;

    if (screenshotsHash) {
      // get the screenshots directory contents
      screenshots = (await getDirectoryContent(screenshotsHash)).map(
        (hash) => `${process.env.INFURA_IPFS_GATEWAY}/${hash}`
      );
    }

    if (logoHash) {
      logo = `${process.env.INFURA_IPFS_GATEWAY}/${logoHash}`;
    }

    return { ...application, screenshots, logo };
  } catch (error) {
    console.error("Error getting application", error);
  }
};

export const updateApplication = async ({
  id,
  isEditorsPick,
}: {
  id: string;
  isEditorsPick: boolean;
}) => {
  const state = await retrieveDatabase();
  const application = getNode(state, id);

  const newState = addNode(state, {
    ...application!,
    id,
    isEditorsPick,
  });

  await storeDatabase(newState);
  revalidatePath("/");
};

export const submitApplication = async ({
  images,
  data,
  isEditorsPick = false,
}: {
  images?: FormData;
  data: string;
  isEditorsPick?: boolean;
}) => {
  let logoHash, screenshotsHash;

  const logo = images?.get("logo") as File;
  const screenshots = images?.getAll("screenshots") as File[];

  if (logo) {
    logoHash = await add({ file: logo });
  }

  if (screenshots && screenshots.length > 0) {
    screenshotsHash = await add({ files: screenshots });
  }

  const application = JSON.parse(data) as Omit<
    IApplication,
    "id" | "screenshots" | "logo"
  >;

  const state = await retrieveDatabase();

  const newState = addNode(state, {
    id: nanoid(),
    ...application,
    screenshots: screenshotsHash,
    logo: logoHash,
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    isEditorsPick,
  });

  await storeDatabase(newState);
  revalidatePath("/");
};
