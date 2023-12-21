import { getApplications } from "@/lib/actions";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { applications } = await getApplications({
      filter: () => true,
    });
    return NextResponse.json({ message: "ok", applications });
  } catch (e) {
    return NextResponse.json({ message: "error", error: e });
  }
}
