import { NextResponse } from "next/server";
import { getApplications } from "../../lib/applications";
import { publish } from "../../lib/ipns";
import { saveApplication } from "../../lib/prisma";

export async function GET() {
  const applications = await getApplications();

  return NextResponse.json(applications);
}

export async function POST(request: Request) {
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

  // publish directory CID to IPNS
  const { name, key } = await publish(hash.toString());

  // save application to database
  await saveApplication(name, key);

  return NextResponse.json({ name });
}
