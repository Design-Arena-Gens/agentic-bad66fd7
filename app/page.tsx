"use client";

import React, { useMemo, useState } from "react";

const TOPICS: string[] = [
  "artificial intelligence",
  "quantum computing",
  "blockchain",
  "space exploration",
  "climate change",
  "machine learning",
  "cybersecurity",
  "renewable energy",
  "bioinformatics",
  "nanotechnology",
  "astrophotography",
  "ocean conservation",
  "robotics",
  "web development",
  "typescript",
  "rust programming",
  "python data science",
  "javascript frameworks",
  "react performance",
  "next.js routing",
  "vue transitions",
  "svelte animations",
  "design systems",
  "ui ux research",
  "accessibility a11y",
  "edge computing",
  "serverless architectures",
  "vercel deployment",
  "aws lambda",
  "google cloud",
  "kubernetes",
  "docker compose",
  "postgres tuning",
  "sqlite tricks",
  "neovim config",
  "emacs org mode",
  "linux kernel",
  "open source licenses",
  "graphql best practices",
  "rest api security",
  "testing strategies",
  "tdd vs bdd",
  "observability",
  "distributed systems",
  "consistency models",
  "event sourcing",
  "domain driven design",
  "clean architecture",
  "microfrontends",
  "image optimization",
  "web vitals",
  "pwa offline",
  "seo techniques",
  "content marketing",
  "email deliverability",
  "prompt engineering",
  "rag pipelines",
  "llm fine tuning",
  "transformers",
  "diffusion models",
  "gan networks",
  "cryptography",
  "zero knowledge proofs",
  "homomorphic encryption",
  "math puzzles",
  "neuroscience",
  "philosophy of mind",
  "astronomy",
  "ancient history",
  "linguistics",
  "econometrics",
  "behavioral economics",
  "game theory",
  "sports analytics",
  "music theory",
  "film cinematography",
  "photography composition",
  "travel guides",
  "cooking techniques",
  "coffee roasting",
  "tea ceremony",
  "woodworking",
  "gardening",
  "minimalism",
  "productivity systems",
  "habits formation",
  "meditation",
  "fitness programming",
  "marathon training",
  "rock climbing",
  "chess openings",
  "board games",
  "lego engineering",
  "origami",
  "3d printing",
  "electronics diy",
  "ham radio",
  "astral photography"
];

const SUFFIXES: string[] = [
  "news", "tutorial", "guide", "best practices", "2025", "examples", "tips",
  "beginners", "advanced", "tools", "courses", "open source", "research",
  "paper", "repository", "documentation", "case study", "conference"
];

function getRandomInt(min: number, max: number): number {
  const low = Math.ceil(min);
  const high = Math.floor(max);
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

function generateRandomQuery(): string {
  const topic = TOPICS[getRandomInt(0, TOPICS.length - 1)];
  const suffix = SUFFIXES[getRandomInt(0, SUFFIXES.length - 1)];
  return `${topic} ${suffix}`;
}

export default function Page() {
  const [count, setCount] = useState<number>(3);
  const [country, setCountry] = useState<string>("");
  const [lang, setLang] = useState<string>("en");
  const [queries, setQueries] = useState<string[]>([]);

  const canOpen = useMemo(() => count > 0 && count <= 10, [count]);

  const openRandomSearches = () => {
    const newQueries: string[] = Array.from({ length: count }, () => generateRandomQuery());
    setQueries((prev) => [...newQueries, ...prev].slice(0, 20));
    const params = new URLSearchParams();
    if (lang) params.set("hl", lang);
    if (country) params.set("gl", country.toUpperCase());
    for (const q of newQueries) {
      const url = `https://www.google.com/search?${params.toString()}&q=${encodeURIComponent(q)}`;
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <main className="container">
      <h1>Random Google Searcher</h1>
      <p className="muted">Open multiple random Google searches in new tabs.</p>

      <section className="controls">
        <label>
          How many tabs (1-10)
          <input
            type="number"
            min={1}
            max={10}
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
        </label>
        <label>
          Language (hl)
          <input
            type="text"
            placeholder="en"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          />
        </label>
        <label>
          Country (gl)
          <input
            type="text"
            placeholder="US"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <button onClick={openRandomSearches} disabled={!canOpen}>
          Open {count} Random Searches
        </button>
      </section>

      {queries.length > 0 && (
        <section className="history">
          <h2>Recently opened queries</h2>
          <ul>
            {queries.map((q, idx) => (
              <li key={`${q}-${idx}`}>
                <a
                  href={`https://www.google.com/search?q=${encodeURIComponent(q)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {q}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
