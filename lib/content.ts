/**
 * File-based content: Markdown with front matter in /content/projects and /content/articles.
 * Alister (or Decap CMS at /admin/) edits these files; the site rebuilds on Netlify automatically.
 */
import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { marked } from 'marked';

const root = path.join(process.cwd(), 'content');

export type Article = {
  slug: string; title: string; description: string; date: string; updated?: string;
  category: string; readingMinutes: number; summary: string; keyQuestion: string; shortAnswer: string;
  relatedServices: string[]; html: string; draft: boolean; author: string;
};

export type ProjectImage = { src?: string; alt: string; caption?: string; shot?: string };
export type Project = {
  slug: string; title: string; description: string; suburb: string; projectType: string; serviceSlug: string;
  year?: string; status: 'template' | 'published' | 'draft'; summary: string;
  heroImage: ProjectImage; before?: ProjectImage; after?: ProjectImage; gallery: ProjectImage[];
  objectives: string; design: string; challenges: string; craftsmanship: string; outcome: string;
  testimonial?: { quote: string; name: string; permission: boolean };
  html: string;
};

function readDir(dir: string) {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  return fs.readdirSync(full).filter((f) => f.endsWith('.md')).map((f) => {
    const raw = fs.readFileSync(path.join(full, f), 'utf8');
    const { data, content } = matter(raw);
    return { slug: f.replace(/\.md$/, ''), data, html: marked.parse(content, { async: false }) as string, words: content.split(/\s+/).length };
  });
}

const showDrafts = process.env.NEXT_PUBLIC_SHOW_TEMPLATES !== 'false';

export function getArticles(): Article[] {
  return readDir('articles')
    .map(({ slug, data, html, words }) => ({
      slug, html, title: data.title, description: data.description, date: String(data.date), updated: data.updated ? String(data.updated) : undefined,
      category: data.category || 'Planning', readingMinutes: Math.max(3, Math.round(words / 220)), summary: data.summary || data.description,
      keyQuestion: data.keyQuestion || data.title, shortAnswer: data.shortAnswer || data.summary || '', relatedServices: data.relatedServices || [], draft: Boolean(data.draft),
      // Byline: defaults to the business. Set `author: Alister` only once he has written or approved the article.
      author: data.author || 'Renick Carpentry',
    }))
    .filter((a) => !a.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
export const getArticle = (slug: string) => getArticles().find((a) => a.slug === slug);

export function getProjects(): Project[] {
  return readDir('projects')
    .map(({ slug, data, html }) => ({ slug, html, gallery: [], ...data }) as unknown as Project)
    .filter((p) => p.status === 'published' || (p.status === 'template' && showDrafts))
    .sort((a, b) => (a.status === 'published' ? -1 : 1) - (b.status === 'published' ? -1 : 1));
}
export const getProject = (slug: string) => getProjects().find((p) => p.slug === slug);
export const getPublishedProjects = () => getProjects().filter((p) => p.status === 'published');
