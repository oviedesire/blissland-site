import fs from 'fs';
import path from 'path';

export interface GalleryImage {
  slug: string;
  title: string;
  image: string;
  caption?: string;
}

const GALLERY_DIR = path.join(process.cwd(), 'content', 'gallery');

/**
 * Parse frontmatter from markdown files to extract image metadata.
 */
function readGalleryFile(filePath: string) {
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
  
  return data;
}

export function getAllGalleryImages(): GalleryImage[] {
  if (!fs.existsSync(GALLERY_DIR)) return [];
  const files = fs.readdirSync(GALLERY_DIR).filter((f) => f.endsWith('.md'));
  const items = files.map((file) => {
    const full = path.join(GALLERY_DIR, file);
    const data = readGalleryFile(full);
    const slug = file.replace(/\.md$/, '');
    return {
      slug,
      title: data.title || slug,
      image: data.image || '',
      caption: data.caption || '',
    } as GalleryImage;
  });
  return items;
}
