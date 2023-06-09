import { NextResponse } from "next/server";
import { getApplication } from "../../../../lib/applications";
import { prisma } from "../../../../lib/db";
import { update } from "../../../../lib/ipns";
import { revalidatePath } from "next/cache";

export async function GET(
  request: Request,
  { params: { applicationId } }: { params: { applicationId: string } }
) {
  const application = await getApplication(applicationId);

  return NextResponse.json(application);
}

export async function PUT(
  request: Request,
  { params: { applicationId } }: { params: { applicationId: string } }
) {
  
  const application = await prisma.application.findFirstOrThrow({
    where: {
      name: applicationId,
    },
  });

  const data = await request.formData();

  const response = await fetch(
    `${process.env.INFURA_IPFS_ENDPOINT}/api/v0/add?wrap-with-directory=true`,
    {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.INFURA_IPFS_KEY + ":" + process.env.INFURA_IPFS_SECRET
          ).toString("base64"),
      },
      body: data,
    }
  );

  const cids = await response.text();
  const lines = cids.split("\n").filter(Boolean);
  const directory = lines.at(-1);

  if (!directory) {
    throw new Error("No directory returned from IPFS");
  }

  const hash = JSON.parse(directory).Hash;

  // publish new directory CID to existing IPNS name
  await update(applicationId, application.key, hash.toString());


  return NextResponse.json({ success: true });
}
