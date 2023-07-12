"use server";
import { nanoid } from "nanoid";
import {
  addNode,
  retrieveDatabase,
  storeDatabase,
  ApplicationNode,
  query,
  Filter,
} from "./database";
import { getDirectoryContent, add } from "./ipfs";
import { revalidatePath } from "next/cache";

export const getApplications = async (
  filter?: Filter
): Promise<IApplication[]> => {
  const applicationNodes = await query(filter);

  const applications = Array.from(applicationNodes.values()).map(
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

  return Promise.all(applications);
};

export const getApplication = async (
  id: string
): Promise<IApplication | undefined> => {
  try {
    const application = (
      await query((node: ApplicationNode) => node.id === id)
    )[0];

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

export const submitApplication = async ({
  images,
  data,
}: {
  images: FormData;
  data: string;
}) => {
  let logoHash, screenshotsHash;

  const logo = images.get("logo") as File;
  const screenshots = images.getAll("screenshots") as File[];

  if (logo) {
    logoHash = await add({ file: logo });
  }

  if (screenshots.length > 0) {
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
    createdAt: new Date().toLocaleString('en-US', { timeZone: 'UTC' }),
    isEditorsPick: false,
  });

  await storeDatabase(newState);
  revalidatePath("/");
};
