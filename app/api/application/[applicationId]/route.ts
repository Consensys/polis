import { NextResponse } from "next/server";
import { getApplication } from "../../../../lib/applications";

export async function GET(
  request: Request,
  { params: { applicationId } }: { params: { applicationId: string } }
) {
  const application = await getApplication(applicationId);

  return NextResponse.json(application);
}
