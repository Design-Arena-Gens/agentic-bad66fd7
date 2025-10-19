import { NextResponse } from "next/server";

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>https://agentic-bad66fd7.vercel.app/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n</urlset>`;
  return new NextResponse(body, { headers: { "content-type": "application/xml" } });
}
