import type { SiteLocale } from '../../i18n/locales';
import type { ForumPost } from './types';
import { forumCategories as forumCategoriesEn, forumPosts as forumPostsEn } from '../forum';

export function getForumCategories(locale: SiteLocale) {
  void locale;
  return forumCategoriesEn;
}

export function getForumPosts(locale: SiteLocale): ForumPost[] {
  // The discussion archive is written in English. Localized routes use the same
  // copy as a fallback and are excluded from indexing until translations exist.
  void locale;
  return forumPostsEn;
}

export function getForumPost(slug: string, locale: SiteLocale): ForumPost | undefined {
  return getForumPosts(locale).find((p) => p.slug === slug);
}

export function getForumPostsBySlugs(slugs: string[], locale: SiteLocale = 'en'): ForumPost[] {
  return slugs
    .map((slug) => getForumPost(slug, locale))
    .filter((p): p is ForumPost => Boolean(p));
}
