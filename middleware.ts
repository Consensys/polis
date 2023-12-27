import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { isAllowedEditor } from "./lib/utils";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");

  if (!id) {
    return NextResponse.redirect(new URL("/connect", request.url));
  } else if (!isAllowedEditor(id))
    return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/dashboard",
};
