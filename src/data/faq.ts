import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, ROUTES } from '../utils/path';
import type { SiteLocale } from '../i18n/locales';
import { getSiteFaqs as getSiteFaqsForLocale } from './faq/locale';
import { isUtilityEnabled } from '../config/catalog';
import { applySiteTokens } from '../i18n/brandTokens';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'aim'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
  /** Utility slugs the answer talks about; the item is hidden when any of them is not sold. */
  requires?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const cheats = link('{cheatProduct}', ROUTES.cheats);
const hwid = link('HWID Spoofer', ROUTES.hwidSpoofer);
const ugc = link('UGC', ROUTES.ugc);
const skinChanger = link('Skin Changer', ROUTES.skinChanger);
const allProducts = link('products page', ROUTES.productsHub);
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blog guides', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check if The Isle cheats are online?',
    a: a('The live status banner is on {siteDomain}. Always check after an The Isle or the current game protection system update.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Your portal unlocks the loader, setup guide and config library via our partner checkout. Follow the guide before launching The Isle.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using third-party The Isle cheats?',
    a: a('Yes, any modification carries risk. the current game protection system and report systems evolve. Read current status and accept the risk before use.'),
    aHtml: `Yes, any modification carries risk. the current game protection system and report systems evolve. Read current status and accept the risk before use. See our ${link('the current game protection system and The Isle cheats', '/blog/anti-cheat-and-the-isle-cheats-what-to-know/')} guide for context.`,
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('The Isle on Windows 10/11 64-bit only. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Can I move my license to a new PC?',
    a: a('Yes, use the HWID reset in your portal or open a support ticket. Limits depend on your tier.'),
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are products and utilities listed?',
    a: `Every product is listed on the ${allProducts}: {productList}. Each one has its own page with a feature list and checkout via our partner.`,
  },
  {
    id: 'ugc-what',
    topic: 'products',
    icon: 'accountRecovery',
    q: 'What does UGC actually do?',
    a: `${ugc} (Unban & Governance Control) is an account recovery tool. You build custom appeal workflows and automate dispute processes for restricted accounts on any platform: gaming profiles, social media handles or marketplace storefronts.`,
    scopes: ['ugc'],
    requires: ['ugc'],
  },
  {
    id: 'ugc-guarantee',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Does UGC guarantee my account gets unbanned?',
    a: a('No. UGC helps you prepare and manage appeals, but the platform reviewing them makes the final decision, and some bans are permanent. No tool can promise a result.'),
    scopes: ['ugc'],
    requires: ['ugc'],
  },
  {
    id: 'ugc-vs-hwid',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'Should I buy UGC or the HWID Spoofer?',
    a: `It depends on what was banned. If the platform restricted your account, ${ugc} is for appealing it. If new accounts get banned straight away on one PC but work on another, the ban is tied to your hardware and ${hwid} is the right fit.`,
    scopes: ['ugc', 'hwid-spoofer'],
    requires: ['ugc', 'hwid-spoofer'],
  },
  {
    id: 'skin-visible',
    topic: 'products',
    icon: 'cosmetic',
    q: 'Do skins from the Skin Changer go into my account?',
    a: `No. ${skinChanger} unlocks cosmetics in your own game client, so nothing is added to your account and the items cannot be traded or sold. Assume other players do not see them.`,
    scopes: ['skin-changer'],
    requires: ['skin-changer'],
  },
  {
    id: 'skin-games',
    topic: 'products',
    icon: 'faqPlatforms',
    q: 'Which games does the Skin Changer support?',
    a: a('It works across several major titles, and coverage can change after game updates. Ask support to confirm your game is supported before you buy.'),
    scopes: ['skin-changer'],
    requires: ['skin-changer'],
  },
  {
    id: 'utility-requirements',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'What Windows settings do the utilities need?',
    a: a('Windows 10 or 11 with HVCI, Core Isolation, TPM and Secure Boot turned on. Enable them in Windows Security and your BIOS/UEFI before the first launch. Each product page lists its exact requirements.'),
    scopes: ['hwid-spoofer', 'ugc', 'skin-changer'],
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What is The Isle ESP?',
    a: `Player ESP shows players, creatures and bosses with boxes, skeletons and distance readouts. Loot ESP highlights containers and valuable items. ${cheats} includes awareness overlays plus optional aimbot and no recoil modules.`,
    scopes: ['elite'],
  },
  {
    id: 'esp-vs-aim',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What is the difference between ESP and aimbot?',
    a: `ESP and loot highlights are information overlays; they do not move your crosshair. Aimbot, no recoil and trigger bot are combat assists on ${cheats}, tuned separately in the loader.`,
  },
  {
    id: 'elite-slots',
    topic: 'plans',
    icon: 'faqEliteSlots',
    q: 'Why are The Isle Cheats slots limited?',
    a: `The Isle Cheats is a private build with direct dev support and priority patch delivery. Slot caps keep patch cycles fast. Check the status banner before checkout.`,
    scopes: ['elite'],
  },
  {
    id: 'stream-proof',
    topic: 'esp',
    icon: 'faqStreamProof',
    q: 'Can OBS capture my overlay?',
    a: `Stream-proof mode on ${cheats} hides overlays from OBS. Test a local recording before going live.`,
  },
  {
    id: 'build-status',
    topic: 'safety',
    icon: 'faqUndetected',
    q: 'Will the build stay online after every patch?',
    a: a('No. Online status is shown on the product page and status banner at purchase time only. Stop if the build shows updating, testing, or offline after a the current game protection system update.'),
  },
  {
    id: 'esp-safer',
    topic: 'safety',
    icon: 'faqEspSafer',
    q: 'Is ESP lower-profile than aimbot?',
    a: a('ESP is often less obvious than maxed aimbot, but it is still a cheat. the current game protection system does not ignore overlays because you left aim assist off.'),
  },
  {
    id: 'hwid-when',
    topic: 'products',
    icon: 'faqHwidWhen',
    q: 'When should I add the HWID Spoofer to my setup?',
    a: `${hwid} is for hardware ID bans: new accounts get banned straight away on one PC but work on another. It changes disk serials, MAC addresses, GPU IDs and related identifiers, and includes a cleaner. It does not lift a ban on an existing account.`,
    scopes: ['hwid-spoofer'],
    requires: ['hwid-spoofer'],
  },
  {
    id: 'external-loader',
    topic: 'products',
    icon: 'faqExternalLoader',
    q: 'Is the loader injected into the game folder?',
    a: `{siteName} runs external with cloud config sync, no files injected into the The Isle directory. the current game protection system risk still applies. See ${cheats}.`,
  },
  {
    id: 'blog-vs-cheats',
    topic: 'blog',
    icon: 'faqBlogVsCheats',
    q: 'Are blog cheat codes the same as live session cheats?',
    a: `No. Blog articles about offline or local testing do not replace the live loader. player sessions use ${cheats} when status is online.`,
  },
  {
    id: 'blog-setup',
    topic: 'blog',
    icon: 'faqBlogSetup',
    q: 'Where do blog setup guides point for purchase?',
    a: `Guides link to the product pages, such as ${cheats}. Checkout runs through our partner, never paste loader files from random messages.`,
  },
  {
    id: 'who-cheats',
    topic: 'plans',
    icon: 'faqWhoElite',
    q: 'Who should buy The Isle Cheats?',
    a: `player sessioners who want player ESP, loot ESP, aimbot, no recoil and priority patch delivery when slots are open.`,
    scopes: ['elite'],
  },
  {
    id: 'vac-update',
    topic: 'safety',
    icon: 'faqVacUpdate',
    q: 'What should I do after a the current game protection system update?',
    a: a('Check {siteDomain} status. Do not launch until the banner shows online. Load conservative presets after any patch.'),
  },
  {
    id: 'discord-help',
    topic: 'setup',
    icon: 'headphones',
    q: 'How do I get install help?',
    a: a('Open a support ticket after purchase with your order email, Windows version and The Isle client build. Staff walk through loader setup from there.'),
  },
  {
    id: 'pmc-scav-sessions',
    topic: 'plans',
    icon: 'faqTurboRanked',
    q: 'Do modules work in player and creature sessions?',
    a: `Yes. ${cheats} includes player and creature presets in the portal. Tune ESP distance caps and aim smoothing before your first session.`,
  },
  {
    id: 'zoom-hack',
    topic: 'esp',
    icon: 'faqZoomHack',
    q: 'Which tier includes radar and extract ESP?',
    a: `2D radar and extract markers ship with ${cheats}. Use them to orient between fights and plan extracts.`,
    scopes: ['elite'],
  },
  {
    id: 'trigger-bot',
    topic: 'aim',
    icon: 'faqAutoFarm',
    q: 'Does the product include trigger bot?',
    a: `Optional trigger bot ships with ${cheats} alongside aimbot and no recoil. Start with conservative delay presets in the portal.`,
    scopes: ['elite'],
  },
  {
    id: 'private-cheats',
    topic: 'safety',
    icon: 'faqPrivateCheats',
    q: 'What are private The Isle cheats?',
    a: a('Private means per-user keys and maintained builds, not public zip packs. {siteName} ships portal delivery for the full session suite on one cheats license.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `This site includes landing FAQs and per-page sections. See the ${faqPage} for all product, cheat and blog answers, or read ${blog} for deep guides.`,
  },
];

/** Shared FAQ block copy + filters (home, /faq/, products, blog). */
export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter plans, ESP, aim and recoil, products, setup, and blog answers.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'aim',
  'safety',
  'products',
  'blog',
  'setup',
];

/** Section copy when FAQ list is scoped to the current page (not /faq/). */
export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading. Visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export { getProductFaqs, getSiteFaqs, getLandingFaqs, getAllFaqs } from './faq/locale';

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  Guides: [
    {
      id: 'blog-guide-start',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Do offline cheat codes replace the live loader?',
      a: a('No. Local or offline testing does not replace the operator loader for player sessions. Live sessions use the product on {siteDomain} when status shows online.'),
    },
    {
      id: 'blog-guide-tier',
      topic: 'blog',
      icon: 'faqBlogGuideTier',
      q: 'Which tier matches this guide?',
      a: `Setup and feature guides map to modules on ${cheats}. Ban recovery articles point to the matching utility on the ${allProducts}.`,
    },
    {
      id: 'blog-guide-status',
      topic: 'blog',
      icon: 'faqBlogGuideStatus',
      q: 'Is this guide still valid after a patch?',
      a: a('Check the article date and the live status banner. Patch-day articles note when modules change. The status banner has the latest build notes.'),
    },
  ],
  Setup: [
    {
      id: 'blog-setup-loader',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do I download the loader?',
      a: a('Only from your operator portal after checkout, not from third-party links in comments or DMs.'),
    },
    {
      id: 'blog-setup-lobby',
      topic: 'blog',
      icon: 'faqBlogSetupLobby',
      q: 'Should I test settings before a live session?',
      a: a('Yes. Load conservative ESP and aim presets offline or in an empty session first. Raise FOV, smoothing, and loot distance caps over several sessions.'),
    },
  ],
  Security: [
    {
      id: 'blog-sec-vac',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article mean the build stays online?',
      a: a('No article replaces the live status banner. Check {siteDomain} after every patch before you launch.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides official product documentation?',
    a: `Articles explain workflows and link to product pages such as ${cheats}. Feature lists on those pages are authoritative for checkout.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Open a support ticket with your order email and the article slug. Staff reference the same portal presets mentioned in guides.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will settings in this article work next patch?',
    a: a('Re-check status after every The Isle update. Portal presets update with patch notes, reload configs instead of copying old sliders.'),
  },
];

export function getBlogFaqs(tag: string, slug: string, locale: SiteLocale = 'en'): SiteFaqItem[] {
  if (locale !== 'en') {
    const localized = getSiteFaqsForLocale(locale);
    const topicFaqs = localized.filter((f) => f.topic === 'blog').slice(0, 4);
    const extras: SiteFaqItem[] = [];
    if (slug.includes('esp') || slug.includes('loot') || slug.includes('radar')) {
      extras.push(...localized.filter((f) => f.topic === 'esp').slice(0, 2));
    }
    if (slug.includes('aim') || slug.includes('recoil') || slug.includes('trigger')) {
      extras.push(...localized.filter((f) => f.topic === 'aim').slice(0, 2));
    }
    if (slug.includes('hwid') || slug.includes('ban') || slug.includes('vac')) {
      extras.push(...localized.filter((f) => f.id === 'hwid-when' || f.topic === 'products').slice(0, 2));
    }
    extras.push(...localized.filter((f) => ['setup', 'safety'].includes(f.topic)).slice(0, 2));
    const seen = new Set<string>();
    return [...extras, ...topicFaqs, ...localized.filter((f) => f.topic === 'blog')].filter((item) => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    }).slice(0, 8);
  }
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('loot') || slug.includes('radar')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which product covers ESP from this article?',
      a: `${cheats} includes player ESP, loot ESP, radar and extract markers described in our session guides.`,
    });
  }
  if (slug.includes('aim') || slug.includes('recoil') || slug.includes('trigger')) {
    slugHints.push({
      id: 'blog-slug-aim',
      topic: 'aim',
      icon: 'faqBlogSlugScripts',
      q: 'Which product includes aim modules from this article?',
      a: `${cheats} ships aimbot, no recoil and optional trigger bot with separate loader tabs.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ban') || slug.includes('vac')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this guide replace the HWID Spoofer or cheat product pages?',
      a: `Recovery guides complement ${hwid} and ${cheats}, read product pages for workflow scope and realistic outcomes.`,
      requires: ['hwid-spoofer'],
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs]
    .filter((item) => (item.requires ?? []).every(isUtilityEnabled))
    .slice(0, 8)
    .map((item) => ({ ...item, a: applySiteTokens(item.a) }));
}

