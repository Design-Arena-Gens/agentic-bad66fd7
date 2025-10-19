import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Random Google Searcher",
  description: "Open random Google searches with one click",
  metadataBase: new URL("https://agentic-bad66fd7.vercel.app")
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
