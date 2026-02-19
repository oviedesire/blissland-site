import fs from 'fs';
import path from 'path';

export interface NewsItem {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  content: string; // HTML
  cover?: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'news');

/**
 * Simple frontmatter & markdown parser without external dependencies.
 * Extracts YAML frontmatter between --- markers and converts basic markdown to HTML.
 */
function readMarkdownFile(filePath: string) {
  const raw = fs.readFileSync(filePath, 'utf8');
  
  // Parse frontmatter - normalize line endings for Windows compatibility
  const normalized = raw.replace(/\r\n/g, '\n');
  const frontmatterMatch = normalized.match(/^---\n([\s\S]*?)\n---/);
  const data: Record<string, any> = {};
  
  if (frontmatterMatch) {
    const lines = frontmatterMatch[1].split('\n');
    lines.forEach((line) => {
      // Match key: "value" or key: value patterns
      const match = line.trim().match(/^(\w+):\s*"?([^"]*)"?\s*$/);
      if (match && match[2]) {
        const [, key, value] = match;
        data[key] = value.trim();
      }
    });
  }
  
  // Extract markdown content (after the closing --- of frontmatter)
  const contentStart = frontmatterMatch ? frontmatterMatch[0].length : 0;
  const markdownContent = normalized.substring(contentStart).trim();
  
  // Simple markdown to HTML conversion
  let html = markdownContent
    .split('\n\n')
    .map((para) => {
      if (para.trim()) {
        return `<p>${para.trim()}</p>`;
      }
      return '';
    })
    .join('\n');
  
  return { data, html };
}

export function getAllNews(): NewsItem[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
  const items = files.map((file) => {
    const full = path.join(CONTENT_DIR, file);
    const { data, html } = readMarkdownFile(full);
    const slug = file.replace(/\.md$/, '');
    return {
      slug,
      title: data.title || slug,
      date: data.date || '1970-01-01',
      excerpt: data.excerpt || '',
      content: html,
      cover: data.cover || '',
    } as NewsItem;
  });
  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  const all = getAllNews();
  return all.find((n) => n.slug === slug);
}

export function getRelatedNews(currentSlug: string, count = 3): NewsItem[] {
  const all = getAllNews();
  return all.filter((n) => n.slug !== currentSlug).slice(0, count);
}

export function calculateReadingTime(htmlContent: string): number {
  const wordsPerMinute = 200;
  const plainText = htmlContent.replace(/<[^>]*>/g, '');
  const words = plainText.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}
