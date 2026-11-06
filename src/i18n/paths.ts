import { DEFAULT_LOCALE, PREFIXED_LOCALES, isPrefixedLocale, type SiteLocale } from './locales';
import { normalizeInternalPath } from '../utils/path';

/** Strip `/es|de|fr/` prefix; leave English paths unchanged. */
export function stripLocalePrefix(pathname: string): string {
  for (const locale of PREFIXED_LOCALES) {
    if (pathname === `/${locale}` || pathname === `/${locale}/`) return '/';
    if (pathname.startsWith(`/${locale}/`)) {
      const rest = pathname.slice(`/${locale}`.length);
      return rest.startsWith('/') ? rest : `/${rest}`;
    }
  }
  const [base, query] = pathname.split('?');
  if (base !== '/' && !base.endsWith('/')) return query === undefined ? `${base}/` : `${base}/?${query}`;
  return pathname;
}

export function localizePath(pathname: string, locale: SiteLocale): string {
  const base = stripLocalePrefix(normalizeInternalPath(pathname));
  // Checkout stays on /go/ so locale pages do not link to /es/go/ (a 302 robots.txt does not cover).
  if (base === '/go/' || base.startsWith('/go/')) return base;
  if (locale === DEFAULT_LOCALE) return base;
  if (base === '/') return `/${locale}/`;
  return `/${locale}${base}`;
}

export function getLocalizedPath(currentPathname: string, targetLocale: SiteLocale): string {
  const path = stripLocalePrefix(normalizeInternalPath(currentPathname));
  // Astro's generated 404 page is emitted as /404.html, not /404/index.html.
  // Its language switcher should therefore point to the target language homepage.
  if (path === '/404/' || path === '/404') return localizePath('/', targetLocale);
  return localizePath(currentPathname, targetLocale);
}

export function localeFromPathname(pathname: string): SiteLocale {
  const segment = pathname.split('/').filter(Boolean)[0];
  if (segment && isPrefixedLocale(segment)) return segment;
  return DEFAULT_LOCALE;
}
