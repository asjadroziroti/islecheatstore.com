import type { IconName } from '../components/icons/types';
import { normalizeInternalPath } from '../utils/path';
import type { SiteLocale } from '../i18n/locales';

export type FaqTopic = 'all' | 'plans' | 'esp' | 'aim' | 'safety' | 'products' | 'blog' | 'setup';
export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
  requires?: string[];
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const mainProduct = link('The Isle Cheats', '/cheats/');
const hwid = link('HWID Spoofer', '/hwid-spoofer/');
const ugc = link('UGC Account Recovery', '/ugc/');
const skin = link('Skin Changer', '/skin-changer/');
const products = link('products page', '/products/');

export const siteFaqs: SiteFaqItem[] = [
  { id: 'isle-feature-scope', topic: 'products', icon: 'faqProductsPage', q: 'Which features are named for The Isle?', a: `${mainProduct} summary names aimbot, wallhack or visual cues, resource visibility, and radar. Water, corpses, and fruit are examples for the resource category. See the current listing for details.`, scopes: ['elite'] },
  { id: 'isle-branch-availability', topic: 'setup', icon: 'faqStatus', q: 'Does the product summary confirm Evrima or Legacy support?', a: 'No. The Isle has Evrima and Legacy branches, but the supplied product summary does not say which features apply to either. Check the current product description.', scopes: ['elite'] },
  { id: 'isle-game-context', topic: 'products', icon: 'faqPlatforms', q: 'Is The Isle online-only?', a: 'The supplied game summary describes The Isle as fully online and notes custom servers. It does not provide product compatibility details.', scopes: ['elite'] },
  { id: 'isle-plan-terms', topic: 'plans', icon: 'faqProductsPage', q: 'Where can I confirm current plans and prices?', a: 'Review the current product page and checkout for available plan duration, price, and terms.' },
  { id: 'products-current', topic: 'products', icon: 'faqProductsPage', q: 'Where are the other products listed?', a: `The ${products} lists each product with its own description and checkout details.` },
  { id: 'hwid-facts-current', topic: 'products', icon: 'faqHwidWhen', q: 'What does the HWID Spoofer change?', a: `${hwid} changes disk serials, MAC addresses, GPU IDs, and related identifiers, and includes a cleaner. It does not lift a ban on an existing account. Confirm current supported titles before purchase.`, scopes: ['hwid-spoofer'], requires: ['hwid-spoofer'] },
  { id: 'ugc-facts-current', topic: 'products', icon: 'accountRecovery', q: 'What does UGC Account Recovery do?', a: `${ugc} provides custom appeal workflows and dispute-process automation. The reviewing platform makes the final decision, and some bans are permanent.`, scopes: ['ugc'], requires: ['ugc'] },
  { id: 'skin-facts-current', topic: 'products', icon: 'cosmetic', q: 'Where do Skin Changer cosmetics appear?', a: `${skin} cosmetics appear in the user’s game client; they are not added to the account, cannot be traded or sold, and disappear when the tool is off. Other players may not see them.`, scopes: ['skin-changer'], requires: ['skin-changer'] },
  { id: 'faq-full-current', topic: 'all', icon: 'faqMore', q: 'Where is the full FAQ?', a: 'See the FAQ page for product and checkout information, and the blog for game and feature guides.' },
];

export const SITE_FAQ_SECTION_COPY = { eyebrow: 'All topics', title: 'Browse by category', subtitle: 'Game context, feature categories, branch information, and product terms.' } as const;
export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = ['all', 'plans', 'products', 'setup', 'safety', 'blog'];
export const CONTEXTUAL_FAQ_SECTION_COPY = { eyebrow: 'FAQ', title: 'Questions about this page', subtitle: 'Answers tied to the game summary and current product information.' } as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  return ['all', ...SITE_FAQ_FILTER_TOPICS.filter((topic) => topic !== 'all' && present.has(topic))];
}

export { getProductFaqs, getSiteFaqs, getLandingFaqs, getAllFaqs } from './faq/locale';

const blogFaqs: SiteFaqItem[] = [
  { id: 'isle-blog-facts', topic: 'blog', icon: 'faqBlogDefault1', q: 'What are these guides based on?', a: 'The guides use the supplied The Isle summary and direct readers to current product information for feature and branch details.' },
  { id: 'isle-blog-availability', topic: 'blog', icon: 'faqBlogDefault2', q: 'Are product features the same in every branch?', a: 'The supplied product summary does not establish that. Review the current product description for the branch you play.' },
];

export function getBlogFaqs(_tag: string, _slug: string, _locale: SiteLocale = 'en'): SiteFaqItem[] {
  return blogFaqs.map((item) => ({ ...item }));
}
