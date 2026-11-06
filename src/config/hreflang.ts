import type { LinkItem } from '@astrojs/sitemap';
import { localizePath, stripLocalePrefix } from '../i18n/paths';
import { DEFAULT_LOCALE, LOCALES, type SiteLocale } from '../i18n/locales';
import { canonicalUrl } from './seo';
import { getBlogPost } from '../data/blog/locale';
import { getForumPost } from '../data/forum/locale';

export type HreflangAlternate = { hreflang: string; href: string };

/** HTML `<link rel="alternate" hreflang>` entries for a pathname in any locale. */
export function hreflangAlternatesForPath(pathname: string): HreflangAlternate[] {
  const base = stripLocalePrefix(pathname);
  const localizedForumPath = /^\/(es|de|fr)\/forum(?:\/|$)/.test(pathname);
  if (localizedForumPath) return [];
  if (base === '/forum/' || /^\/forum\/[^/]+\/$/.test(base)) {
    const englishPath = base;
    const englishUrl = canonicalUrl(englishPath);
    return [{ hreflang: 'en', href: englishUrl }, { hreflang: 'x-default', href: englishUrl }];
  }
  const blogMatch = base.match(/^\/blog\/([^/]+)\/$/);
  const forumMatch = base.match(/^\/forum\/([^/]+)\/$/);
  const available = LOCALES.flatMap((locale) => {
    if (blogMatch) {
      const post = getBlogPost(blogMatch[1], locale);
      return post ? [{ hreflang: locale, href: canonicalUrl(localizePath(`/blog/${post.slug}/`, locale)) }] : [];
    }
    if (forumMatch) {
      const post = getForumPost(forumMatch[1], locale);
      return post ? [{ hreflang: locale, href: canonicalUrl(localizePath(`/forum/${post.slug}/`, locale)) }] : [];
    }
    return [{ hreflang: locale, href: canonicalUrl(localizePath(pathname, locale)) }];
  });
  const alternates: HreflangAlternate[] = available;
  alternates.push({
    hreflang: 'x-default',
    href: canonicalUrl(localizePath(pathname, DEFAULT_LOCALE)),
  });
  return alternates;
}

/** Sitemap `xhtml:link` alternates for the same pathname cluster. */
export function sitemapAlternateLinks(pathname: string): LinkItem[] {
  return hreflangAlternatesForPath(pathname).map(({ hreflang, href }) => ({
    lang: hreflang,
    url: href,
  }));
}

export function isIndexablePath(pathname: string): boolean {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;

  if (path.includes('/404') || path.startsWith('/go/') || path.includes('/rss.xml')) {
    return false;
  }
  if (/^\/(es|de|fr)\/404\//.test(path)) return false;
  if (/^\/(es|de|fr)\/forum(?:\/|$)/.test(path)) return false;
  if (path === '/en/' || path.startsWith('/en/')) return false;
  if (/^\/(es|de|fr)\/go(\/|$)/.test(path)) return false;

  const base = stripLocalePrefix(path);
  if (base === '/privacy/' || base === '/terms/') return false;

  return true;
}
