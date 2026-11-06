/** Static path redirects (301). Keys are pathname without query/hash. */
const LOCALES = ['es', 'de', 'fr'];
const PRODUCT_HOME = '/cheats/';

function addLocaleRedirects(map, fromPath, toPath) {
  map.set(fromPath, toPath);
  for (const locale of LOCALES) {
    map.set(`/${locale}${fromPath}`, `/${locale}${toPath}`);
  }
}

export const PATH_REDIRECTS = new Map([
  ['/blog/isle-loot-esp-filters-price-category-containers/', '/blog/the-isle-resource-visibility-guide/'],
  ['/blog/isle-aimbot-settings-explained/', '/blog/the-isle-aimbot-summary-guide/'],
  ['/blog/the-isle-cheats-price-monthly-vs-lifetime/', '/blog/the-isle-branch-product-checklist/'],
  ['/blog/isle-cloud-dma-explained-do-you-need-it/', '/blog/the-isle-branch-product-checklist/'],
  ['/blog/anti-cheat-and-the-isle-cheats-what-to-know/', '/blog/the-isle-cheats-product-summary-overview/'],
  ['/blog/isle-hwid-ban-how-hwid-spoofer-works/', '/hwid-spoofer/'],
  ['/blog/how-to-set-up-the-isle-cheats-requirements/', '/cheats/'],
  ['/blog/streamproof-isle-cheats-for-streamers/', '/cheats/'],
  ['/blog', '/blog/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/product', PRODUCT_HOME],
  ['/product/', PRODUCT_HOME],
  ['/cheats/compare', '/blog/'],
  ['/cheats/compare/', '/blog/'],
  ['/product/compare', '/blog/'],
  ['/product/compare/', '/blog/'],
  ['/cheats/lite', PRODUCT_HOME],
  ['/cheats/lite/', PRODUCT_HOME],
  ['/cheats/pro', PRODUCT_HOME],
  ['/cheats/pro/', PRODUCT_HOME],
  ['/cheats/elite', PRODUCT_HOME],
  ['/cheats/elite/', PRODUCT_HOME],
  ['/product/lite', PRODUCT_HOME],
  ['/product/lite/', PRODUCT_HOME],
  ['/product/pro', PRODUCT_HOME],
  ['/product/pro/', PRODUCT_HOME],
  ['/product/elite', PRODUCT_HOME],
  ['/product/elite/', PRODUCT_HOME],
]);

for (const [from, to] of [...PATH_REDIRECTS.entries()]) {
  if (from.startsWith('/es/') || from.startsWith('/de/') || from.startsWith('/fr/') || from.startsWith('/en/')) continue;
  addLocaleRedirects(PATH_REDIRECTS, from, to);
  // /en/ is not a locale prefix. Send it to the final URL in one hop, including the slashed form.
  PATH_REDIRECTS.set(`/en${from}`, to);
  if (!from.endsWith('/')) PATH_REDIRECTS.set(`/en${from}/`, to);
}

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
