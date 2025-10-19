import { NextResponse } from "next/server";

export function GET() {
  return new NextResponse("User-agent: *\nAllow: /\nSitemap: https://agentic-bad66fd7.vercel.app/sitemap.xml\n", {
    headers: { "content-type": "text/plain" },
  });
}
