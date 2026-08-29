import fs from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  // gray-matter returns `data` as `{ [key: string]: any }`; field values
  // are whatever YAML parsed them into — strings, booleans, numbers, dates, ….
  // `draft` is narrowed to `boolean` here so callers can compare it with
  // `===` / `!==` (YAML's `draft: true` parses to a real boolean, but
  // `draft: 'true'` would land as a string, so normalize both shapes).
  type Items = {
    draft?: boolean
    [key: string]: any
  }

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (field === 'draft') {
      items[field] = data[field] === true || data[field] === 'true';
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, ['draft', 'order', ...fields]))
    // hide posts marked as drafts from the list
    .filter((post) => post.draft !== true)
    // sort explicitly by `order` frontmatter (ascending); posts without an
    // `order` value fall back to descending date
    .sort((post1, post2) => {
      const o1 = typeof post1.order === 'number' ? post1.order : null;
      const o2 = typeof post2.order === 'number' ? post2.order : null;
      if (o1 !== null && o2 !== null) {
        return o1 - o2;
      }
      if (o1 !== null) return -1;
      if (o2 !== null) return 1;
      return post1.date > post2.date ? -1 : 1;
    });
  return posts;
}
