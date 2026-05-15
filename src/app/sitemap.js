import { readdirSync, statSync } from 'fs';
import { join } from 'path';

const BASE_URL = 'https://www.woodbridgehomeoptions.com';

function getRoutes() {
  const appDir = join(process.cwd(), 'src', 'app');
  const routes = [];

  const entries = readdirSync(appDir);
  for (const entry of entries) {
    const fullPath = join(appDir, entry);
    if (!statSync(fullPath).isDirectory()) continue;
    if (entry.startsWith('_') || entry.startsWith('(') || entry === 'api') continue;
    const pageFile = join(fullPath, 'page.js');
    try {
      statSync(pageFile);
      routes.push(entry);
    } catch {
      // no page.js — skip
    }
  }

  return routes;
}

export default function sitemap() {
  const routes = getRoutes();

  const pages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...routes.map((route) => ({
      url: `${BASE_URL}/${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];

  return pages;
}
