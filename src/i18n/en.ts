import type { Translations } from './types';
import { PRIMARY_CHECKOUT_PATH } from '../config/checkout';
import {
  HWID_SPOOFER_PATH,
  PRODUCT_BASE,
  PRODUCTS_HUB_PATH,
  SITE_DOMAIN,
  SITE_NAME,
  SKIN_CHANGER_PATH,
  UGC_PATH,
} from '../config/site';

const productBase = PRODUCT_BASE;

export const en: Translations = {
  site: {
    name: SITE_NAME,
    domain: SITE_DOMAIN,
    title: 'Isle Cheats | The Isle Evrima Tools',
    description:
      'Explore The Isle cheats for Evrima and Legacy, with feature details, compatibility notes, setup guidance and current checkout information.',
  },
  nav: [
    { id: 'products', href: PRODUCTS_HUB_PATH, label: 'Products', shortLabel: 'Products' },
    { id: 'blog', href: '/blog/', label: 'Blog' },
    { id: 'forum', href: '/forum/', label: 'Forum' },
    { id: 'faq', href: '/faq/', label: 'FAQ' },
    { id: 'support', href: '/support/', label: 'Support' },
  ],
  hero: {
    status: 'The Isle feature guide',
    eyebrow: 'THE ISLE CHEATS',
    titleLine1: 'The Isle',
    titleLine2: 'Cheats — ESP, Aimbot & Loot',
    subtitle:
      'Review visual assistance, radar, resource visibility and combat options for The Isle, with branch and update considerations in one place.',
    ctaPrimary: 'View products',
    metrics: [
      { label: 'Stream-proof', strong: 'Yes' },
      { label: 'Branches', strong: '2' },
      { label: 'Focus', strong: 'Evrima' },
      { label: 'Mode', strong: 'Online' },
    ],
    statusPills: [
      'ESP Active',
      'Radar Online',
      'Season Build',
      'Aimbot Ready',
      'Soft Aim Ready',
      'No Recoil',
      'Stream Proof',
      'Loot ESP',
      'Skeleton ESP',
      'UAV Radar',
      'Extract ESP',
      'Support guide',
      'Instant Delivery',
      'Raid Ready',
      'Trigger Bot',
      'Bone Select',
      'Live Status',
      'Auto Updates',
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Everything you need in one package',
    subtitle: 'Player ESP, loot ESP, aimbot and session tools for The Isle, maintained after patches.',
    items: [
      {
        title: 'Player ESP',
        subtitle: 'Track players and creatures.',
        desc: 'Player boxes, skeletons, names and distance readouts stay readable in dense sessions.',
        bullets: [
          'player, creature and boss filters',
          'Skeleton and bone markers',
          'Name tags and distance readouts',
          'Health and gear hints where enabled',
          'Color rules per faction',
        ],
        tags: ['The Isle esp', 'player esp', 'skeleton esp'],
        bento: 'sm:col-span-2 lg:col-span-12 lg:col-start-1 lg:row-start-1',
      },
      {
        title: 'Loot ESP',
        subtitle: 'Find value fast.',
        desc: 'Highlight containers, keys, meds and high-tier loot without tabbing through every drawer.',
        bullets: [
          'Item category filters and price tiers',
          'Container and corpse loot highlights',
          'Quest and key item markers',
          'Distance and name labels',
        ],
        tags: ['loot esp', 'container esp', 'isle loot'],
        bento: 'sm:col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-2',
      },
      {
        title: 'Aimbot',
        subtitle: 'Controlled aim assist.',
        desc: 'Soft aim and bone selection with FOV and smoothing sliders tuned for sessions, not rage defaults.',
        bullets: ['FOV and smoothing controls', 'Bone select and target priority', 'Visibility checks', 'Hotkey toggle per weapon class'],
        tags: ['aimbot', 'soft aim', 'bone select'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-3',
      },
      {
        title: 'No Recoil',
        subtitle: 'Steadier full-auto.',
        desc: 'Recoil compensation profiles per weapon family with portal presets for common builds.',
        bullets: ['Per-weapon recoil profiles', 'Strength sliders with caps', 'Pairs with aimbot FOV limits', 'Save profiles to cloud'],
        tags: ['no recoil', 'recoil control', 'weapon profiles'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-3',
      },
      {
        title: 'Radar & Extracts',
        subtitle: 'Map awareness in session.',
        desc: '2D radar, extract markers and optional UAV-style hints for orientation between fights.',
        bullets: [
          'Extract and transition markers',
          '2D radar with player blips',
          'Optional UAV-style overview',
          'Custom zoom and opacity',
        ],
        tags: ['radar hack', 'extract esp', 'map awareness'],
        bento:
          'sm:col-span-2 lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-4',
      },
      {
        title: 'Trigger Bot',
        subtitle: 'Fire when aligned.',
        desc: 'Optional trigger assist when crosshair meets valid targets, with delay and key gates.',
        bullets: [
          'Delay and hold-time tuning',
          'Team and bot ignore rules',
          'Toggle separate from aimbot',
          'Conservative defaults in portal',
        ],
        tags: ['trigger bot', 'fire assist', 'The Isle cheats'],
        bento:
          'sm:col-span-2 lg:col-span-4 lg:row-span-2 lg:col-start-9 lg:row-start-4',
      },
      {
        title: 'Stream Proof',
        subtitle: 'Built for creators.',
        desc: 'Keep overlays on your monitor while capture software records a clean game feed.',
        bullets: ['OBS and Game Bar capture modes', 'Toggle stream proof per module', 'Test checklist in portal docs'],
        tags: ['obs capture', 'stream proof', 'capture hide'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-1 lg:row-start-6',
      },
      {
        title: 'Misc utilities',
        subtitle: 'Raid QoL tools.',
        desc: 'Night vision, thermal-style highlights, no sway and other toggles grouped in one utilities tab.',
        bullets: ['No sway and stamina helpers where enabled', 'Night vision and thermal-style modes', 'Crosshair and FOV helpers', 'Hotkey manager'],
        tags: ['no sway', 'night vision', 'isle utilities'],
        bento: 'sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:row-start-6',
      },
      {
        title: 'Cloud Config & Updates',
        subtitle: 'Patch day ready.',
        desc: 'Same presets on every PC; portal updates track The Isle and the current game protection system patch days.',
        bullets: ['Cloud backup for slider profiles', 'Loader push within hours of patches', 'Status banner for build notes'],
        tags: ['cloud sync', 'auto update', 'presets'],
        bento: 'sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:row-start-2',
      },
    ],
  },
  whyUs: {
    eyebrow: 'Why us',
    title: 'Raid tooling backed by patches, not promises',
    subtitle:
      'Many cheat shops ship stale loaders, obvious rage presets, and ticket bots. {siteDomain} focuses on patch-day loader builds, conservative ESP and aim defaults, and live operators.',
    usLabel: '{siteName}',
    otherLabel: 'Typical provider',
    rows: [
      {
        title: 'Patch-day loader updates',
        desc: 'the current game protection system-aware builds pushed within hours of The Isle updates; check the live status banner before you load into a session.',
      },
      {
        title: 'Humanized aim & ESP defaults',
        desc: 'FOV caps, smoothing and distance filters ship conservative in the portal so overlays stay readable, not wall-of-box rage modes.',
      },
      {
        title: 'Live operators',
        desc: 'Real engineers for loader setup, session configs and HWID resets: 24/7 shift coverage, not copy-paste FAQ tickets.',
      },
      {
        title: 'External loader + stream proof',
        desc: 'Overlay suite with OBS capture modes, no risky DLL injection into the The Isle process like legacy providers still sell.',
      },
      {
        title: 'Cloud preset sync',
        desc: 'player, creature and per-map profiles backup to the portal, same sliders on any PC without rebuilding from scratch.',
      },
      {
        title: 'HWID reset & license moves',
        desc: 'HWID clears and machine transfers handled through support, most providers lock one rig or charge for every swap.',
      },
    ],
    metrics: [
      {
        value: '2',
        title: 'Branches covered in the guide',
        desc: 'Evrima and Legacy are treated as separate compatibility contexts.',
      },
      {
        value: 'Online',
        title: 'Game format',
        desc: 'The supplied summary describes The Isle as fully online.',
      },
      {
        value: 'Current',
        title: 'Status check',
        desc: 'Review the current product listing after game updates.',
      },
    ],
  },
  setup: {
    eyebrow: 'Setup guide',
    titleLead: 'From checkout to your first session in just',
    titleHighlight: 'three simple steps',
    intro:
      'Getting started is easy. Follow the operator portal flow to download the loader, load presets, and launch The Isle on Windows.',
    ctaPrimary: 'Compare plans',
    ctaSecondary: 'Read the setup FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      {
        step: 'Step 1',
        title: 'Unlock portal & download loader',
        desc: 'Complete checkout, open your operator dashboard, and pull the latest patch loader build for Windows.',
      },
      {
        step: 'Step 2',
        title: 'Launch & configure modules',
        desc: 'Run the external loader, import session presets, and tune ESP, aimbot and no recoil sliders.',
      },
      {
        step: 'Step 3',
        title: 'Verify status & launch The Isle',
        desc: 'Check the live status banner, launch the game client, and play with cloud-backed profiles saved in the portal.',
      },
    ],
  },
  compatibility: {
    eyebrow: 'Platform support',
    title: 'Runs on your rig.',
    subtitle: 'Check the live status banner before launching The Isle after updates.',
    items: ['Windows 10 & 11', 'The Isle', 'the current game protection system client', 'Auto updater', 'Config cloud sync', 'HWID reset', 'External loader'],
  },
  cheats: {
    eyebrow: 'Main product',
    title: 'The Isle Cheats',
    subtitle: 'Player ESP, loot ESP, aimbot, no recoil and session utilities with priority patch delivery.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      {
        badge: 'Limited slots',
        tier: 'Private',
        name: 'Elite',
        title: 'The Isle Cheats with ESP, Aimbot & Loot ESP',
        desc: 'Player ESP, loot ESP, aimbot and no recoil for main The Isle sessions. Separate license from Legacy. Instant delivery; check status after patches.',
        heroDesc:
          'Raids-only license with stream-proof overlays and instant portal delivery. Start from conservative presets, then tune ESP and aim after you check live status.',
        features: ['Player ESP', 'Loot ESP', 'Aimbot', 'No recoil', 'Extract markers', 'Stream-proof'],
        more: 9,
        href: productBase,
        variant: 'limited',
      },
    ],
  },
  products: {
    eyebrow: 'Store',
    title: 'Our products',
    subtitle:
      'Every product has its own page with features, requirements and checkout.',
    viewAll: 'View all cheats',
    backToCheats: 'Back to product',
    showcaseHeading: 'Product Overview',
    experience: {
      eyebrow: 'Experience',
      title: 'Loader layers · After checkout',
      subtitle:
        'Use the screenshots above for module layout; below is what each layer does and how portal access works after purchase.',
      previewLabel: 'In-game layers',
      accessDividerTop: 'Preview',
      accessDividerBottom: 'Access',
    },
    hwidPage: {
      showcaseHeading: 'Spoofer screenshots',
      overviewSubtitle:
        'What the spoofer changes, which anti-cheats it covers and when it is the right fix.',
      highlights: {
        eyebrow: 'Quick read',
        title: 'What the spoofer does',
        desc: 'Changes your hardware identifiers so you can play again after a hardware ID ban. See the full list below.',
      },
      featuresSection: {
        eyebrow: 'Coverage',
        title: 'What is included',
        desc: 'Identifiers it spoofs and the anti-cheats it supports.',
      },
      experience: {
        eyebrow: 'Post-purchase',
        title: 'Screenshots · Access steps',
        subtitle:
          'Left column explains each visual; right column lists how access and setup work after payment.',
        previewLabel: 'Panel views',
        accessDividerTop: 'UI',
        accessDividerBottom: 'Steps',
      },
      highlightsMore: 'Plus {count} more in the full list below.',
    },
    utilityPages: {
      ugc: {
        showcaseHeading: 'UGC preview',
        overviewSubtitle:
          'What UGC does for restricted accounts and what to expect. Results depend on the platform reviewing your case.',
        highlights: {
          eyebrow: 'Quick read',
          title: 'What UGC is built for',
          desc: 'Custom appeal workflows and dispute automation for restricted gaming, social and marketplace accounts. See the full list below.',
        },
        featuresSection: {
          eyebrow: 'Features',
          title: 'What is included',
          desc: 'What UGC covers after checkout.',
        },
        experience: {
          eyebrow: 'Post-purchase',
          title: 'Preview · Access steps',
          subtitle: 'Left column explains each visual; right column lists how access and setup work after payment.',
          previewLabel: 'Screenshots',
          accessDividerTop: 'UI',
          accessDividerBottom: 'Steps',
        },
        highlightsMore: 'Plus {count} more in the full list below.',
      },
      'skin-changer': {
        showcaseHeading: 'Skin Changer preview',
        overviewSubtitle: 'What the skin changer unlocks, where the cosmetics show up and what to check before you buy.',
        highlights: {
          eyebrow: 'Quick read',
          title: 'What the skin changer unlocks',
          desc: 'Premium weapon skins, character outfits and rare knife variants across major titles. See the full list below.',
        },
        featuresSection: {
          eyebrow: 'Features',
          title: 'What is included',
          desc: 'What the skin changer covers after checkout.',
        },
        experience: {
          eyebrow: 'Post-purchase',
          title: 'Preview · Access steps',
          subtitle: 'Left column explains each visual; right column lists how access and setup work after payment.',
          previewLabel: 'Screenshots',
          accessDividerTop: 'UI',
          accessDividerBottom: 'Steps',
        },
        highlightsMore: 'Plus {count} more in the full list below.',
      },
    },
    swipeHint: 'Swipe for more screenshots',
    checkoutEyebrow: 'Checkout',
    checkoutSelect: 'Select subscription',
    checkoutSingle: 'Purchase option',
    checkoutTotal: 'Total',
    bestValue: 'Best value',
    planWeekly: '1 Week',
    planWeeklyNote: '7 days',
    planMonthly: 'Monthly',
    planLifetime: 'Lifetime',
    planOneTime: 'One-time access',
    planPerMonth: 'USD / month',
    planOneTimeNote: 'USD, one time',
    get: 'Get',
    explore: 'Explore',
    buyNow: 'Buy now',
    viewDetails: 'View details',
    items: [
      {
        badge: 'Available',
        category: 'System utility',
        title: 'HWID Spoofer',
        subtitle:
          'Come back after a hardware ID ban. Works across Riot Vanguard, Easy Anti-Cheat, the current game protection system, Ricochet and other anti-cheats, with a cleaner included.',
        desc: 'Changes disk serials, MAC addresses, GPU IDs and related identifiers after a hardware ban. Cleaner included.',
        features: ['Disk serial spoofing', 'MAC address spoofing', 'GPU ID spoofing', 'Cleaner included'],
        more: 0,
        href: HWID_SPOOFER_PATH,
      },
      {
        badge: 'Available',
        category: 'Account recovery',
        title: 'UGC Account Recovery',
        subtitle:
          'Build custom appeal workflows and automate disputes when a gaming profile, social media handle or marketplace storefront gets restricted.',
        desc: 'Unban & Governance Control: custom appeal workflows and dispute automation for restricted accounts on any platform.',
        features: ['Custom appeal workflows', 'Dispute process automation', 'Works on any platform', 'Gaming, social and marketplace accounts'],
        more: 0,
        href: UGC_PATH,
      },
      {
        badge: 'Available',
        category: 'Cosmetic',
        title: 'Skin Changer',
        subtitle:
          'Unlock premium weapon skins, character outfits and rare knife variants across major titles, without paying for each cosmetic.',
        desc: 'Lightweight tool that unlocks premium weapon skins, character outfits and rare knife variants across major titles.',
        features: ['Premium weapon skins', 'Character outfits', 'Rare knife variants', 'Works across major titles'],
        more: 0,
        href: SKIN_CHANGER_PATH,
      },
    ],
  },
  blog: {
    eyebrow: 'Blog',
    title: 'Guides and updates',
    subtitle: 'ESP and aimbot setup, loot filters and patch-day checks for The Isle.',
    latestTitle: 'The Isle Cheat Guides & Patch-Day Notes',
    latestSubtitle: 'Filter by topic to find setup guides, feature deep-dives, and patch-day notes.',
    filterAll: 'All articles',
    emptyFilter: 'No articles match this filter.',
    emptyArchive: 'No articles yet. New guides will show up here.',
    viewAll: 'View all articles',
    read: 'Read',
    articleActionsAria: 'Continue reading',
    buyCta: 'Buy The Isle Cheats',
    buyHwidCta: 'Buy HWID Spoofer',
    moreArticles: 'More articles',
    sidebarAria: 'Article sidebar',
    tocTitle: 'In this article',
    relatedTitle: 'Related guides',
    filterToolbarAria: 'Filter articles by topic',
    items: [],
  },
  workflow: {
    eyebrow: 'How it works',
    badge: '4 easy steps',
    titleBefore: 'From status check to',
    titleHighlight: 'saved profile.',
    subtitle: 'A straight path from status check to a session profile you can reuse every session.',
    ctaLabel: 'Pick your plan',
    ctaHref: productBase,
    ctaSecondary: 'Setup FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      {
        num: '01',
        phase: 'Before purchase',
        title: 'Check live status',
        desc: 'Read the live banner on {siteDomain} before you buy or launch.',
      },
      {
        num: '02',
        phase: 'Checkout',
        title: 'Choose your product',
        desc: 'Pick session cheats or the hardware utility, whichever matches bans, rigs, or account resets you face.',
      },
      {
        num: '03',
        phase: 'Loader',
        title: 'Launch & configure',
        desc: 'Download from the portal, enable modules, and tune ESP and aim sliders offline first.',
      },
      {
        num: '04',
        phase: 'In-game',
        title: 'Save your profile',
        desc: 'When settings feel right, save player and map presets to the cloud.',
      },
    ],
  },
  support: {
    eyebrow: 'Support',
    title: 'The Isle Cheats Support',
    subtitle: 'Let us know how we can help.',
    channels: [
      {
        icon: 'users',
        title: 'Chat before checkout',
        desc: 'Speak to our team about tiers and access.',
        linkLabel: 'Start checkout',
        href: PRIMARY_CHECKOUT_PATH,
      },
      {
        icon: 'headphones',
        title: 'Chat to support',
        desc: "We're here for loader, HWID and account issues.",
        linkLabel: '{supportEmail}',
        href: 'mailto:{supportEmail}',
      },
      {
        icon: 'navFaq',
        title: 'Read the FAQ',
        desc: 'Compatibility, bans and setup, before you buy.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on {siteDomain} or via our partner checkout.' },
      { title: 'Platform', desc: 'Windows 10 or 11, and your The Isle client version.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Straight answers before checkout.',
    subtitle: 'Compatibility, bans and access, no vague promises.',
    items: [
      {
        num: '01',
        q: 'Where do I check if The Isle cheats are online?',
        a: 'The live status banner is on {siteDomain}. Always check after an The Isle or the current game protection system update.',
      },
      {
        num: '02',
        q: 'What happens after I buy?',
        a: 'Your portal unlocks the loader, setup guide and config library via our partner checkout. Follow the guide before launching The Isle.',
      },
      {
        num: '03',
        q: 'Can I get banned using third-party The Isle cheats?',
        a: 'Yes, any modification carries risk. the current game protection system and report systems evolve. Read current status and accept the risk before use.',
      },
      {
        num: '04',
        q: 'Which platforms are supported?',
        a: 'The Isle on Windows 10/11 64-bit only. macOS and Linux are not supported.',
      },
      {
        num: '05',
        q: 'Can I move my license to a new PC?',
        a: 'Yes, use the HWID reset in your portal or open a support ticket. Limits depend on your tier.',
      },
      {
        num: '06',
        q: 'Where are products and utilities listed?',
        a: 'Every product is listed at {siteDomain}/products/, and each one has its own page with a feature list and checkout via our partner.',
      },
    ],
  },
  footer: {
    tagline: 'The Isle cheats with ESP, aimbot and loot ESP for PC. {siteDomain}',
    trademark: '{game} is a trademark of {gamePublisher}. {siteDomain} is not affiliated with or endorsed by {gamePublisher}.',
    explore: 'Explore',
    exploreLinks: [
      { id: 'products', href: '/', label: 'Feature overview', ariaLabel: 'Features', scrollTarget: 'features' },
      { id: 'products', href: PRODUCTS_HUB_PATH, label: 'All products', ariaLabel: 'All products' },
      { id: 'products', href: productBase, label: '{cheatProduct}', ariaLabel: '{cheatProduct}' },
      { id: 'hwidSpoofer', href: HWID_SPOOFER_PATH, label: 'HWID Spoofer', ariaLabel: 'HWID Spoofer' },
      { id: 'products', href: UGC_PATH, label: 'UGC', ariaLabel: 'UGC Account Recovery' },
      { id: 'products', href: SKIN_CHANGER_PATH, label: 'Skin Changer', ariaLabel: 'Skin Changer' },
      { id: 'blog', href: '/blog/', label: 'Blog', ariaLabel: 'Blog' },
      { id: 'forum', href: '/forum/', label: 'Forum', ariaLabel: 'Forum' },
    ],
    supportLinks: [
      { href: '/faq/', label: 'Pre-purchase FAQ', ariaLabel: 'FAQ' },
      { href: '/support/', label: 'Contact support', ariaLabel: 'Support' },
    ],
    support: 'Support',
    legal: 'Legal',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    about: 'About',
  },
  legalPages: {
    about: {
      title: 'About {siteName}',
      description:
        '{siteName} provides {cheatProduct}, related utilities and PC support resources at {siteDomain}.',
      sections: [
        {
          heading: 'Who we are',
          paragraphs: [
            '{siteName} is a PC-focused resource for The Isle players exploring player ESP, loot ESP, aimbot and no recoil workflows. We publish setup guides and live status notes so you can evaluate The Isle cheats before checkout.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers {cheatProduct} and the utilities listed on our products page. Blog articles explain session configs, patch-day checks, and the current game protection system update behavior.',
            'Content is updated when patches land or when loader modules shift. Check the homepage status banner before every session.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'Questions about compatibility, loader errors, or checkout are handled through email support. Include your order email, game account, and Windows version when opening a ticket.',
            'The site also maintains product requirements, update notes, and practical setup references so visitors can compare available tools before making a decision.',
          ],
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      description:
        'How {siteName} handles analytics, cookies, and contact data when you use {siteDomain}.',
      sections: [
        {
          heading: 'Information we collect',
          paragraphs: [
            'We may collect standard web analytics such as page views, device type, browser, and approximate region through Google Analytics when enabled. Checkout and license delivery happen on external checkout pages, we do not store payment card data on {siteDomain}.',
          ],
        },
        {
          heading: 'How we use data',
          paragraphs: [
            'Analytics help us understand which guides and product pages are useful so we can improve content and fix broken links. Support tickets may retain the email address and message content you provide until the issue is resolved.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'We use minimal cookies required for analytics. You can block cookies in your browser settings; core site content remains accessible without them.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For privacy questions, use the options on the Support page. Purchase and refund rules are in our Terms & Conditions.',
          ],
        },
      ],
    },
    terms: {
      title: 'Terms & Conditions',
      description:
        'Purchase, license, refund, and use terms for {siteName} products and {siteDomain}.',
      sections: [
        {
          heading: 'Agreement',
          paragraphs: [
            'Last updated: September 2026. By using {siteDomain} or completing checkout for any product listed here, you agree to these Terms & Conditions and our Privacy Policy.',
          ],
        },
        {
          heading: 'What you purchase',
          paragraphs: [
            'We sell {cheatProduct} and the utilities listed on our products page, delivered through an operator portal and loader on Windows.',
            'Feature lists on each product page describe what is included at the time of purchase. Modules can change when The Isle or anti-cheat systems update.',
          ],
        },
        {
          heading: 'Checkout and delivery',
          paragraphs: [
            'Payment and license delivery run on external checkout pages. {siteDomain} does not process or store payment card numbers.',
            'After purchase, use the operator portal linked from your order flow to download the current loader and setup guide before launching The Isle.',
          ],
        },
        {
          heading: 'License use',
          paragraphs: [
            'Licenses are for your personal use only. Do not share loader files, portal logins, or license keys. HWID and device limits depend on your tier and are enforced in the portal.',
          ],
        },
        {
          heading: 'Refunds and purchases',
          paragraphs: [
            'All sales are final once checkout completes. We do not refund change-of-mind purchases, account bans, the current game protection system penalties, or issues caused by ignoring setup guides or running modules while the status banner shows offline.',
            'If the product does not work as described on a supported setup: The Isle on Windows 10/11, current loader from the portal, and the live status banner showing online when you started, contact us through the Support page. Include your order email, Windows version, game build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools for The Isle can conflict with game updates and the current game protection system. You use this software at your own risk, including possible account action.',
            'Check the homepage status banner before every session. Do not load in while modules are offline or misaligned after a patch.',
          ],
        },
        {
          heading: 'Changes',
          paragraphs: [
            'We may update these terms. The “Last updated” date at the top will change when we do. Continued use of the site after changes means you accept the revised terms.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For terms, billing, or loader questions, use the buttons on the Support page. See also our Privacy Policy for how we handle site data.',
          ],
        },
      ],
    },
    support: {
      title: '{siteName} Support',
      description:
        'Get support for loader, HWID, and checkout questions at {siteDomain}.',
    },
  },
  common: {
    breadcrumbHome: 'Home',
    breadcrumbProducts: 'Product',
    breadcrumbBlog: 'Blog',
    breadcrumbForum: 'Forum',
    breadcrumbFaq: 'FAQ',
    breadcrumbAbout: 'About',
    breadcrumbPrivacy: 'Privacy',
    breadcrumbTerms: 'Terms',
    breadcrumbSupport: 'Support',
    contactSupport: 'Contact support',
  },
  notFound: {
    metaDescription: 'The page you requested could not be found on {siteDomain}.',
    title: 'Page not found',
    body: 'That URL does not exist or may have moved. Head back to the homepage or browse our products.',
    backHome: 'Back to home',
    viewProducts: 'View products',
    viewElite: 'View product page',
  },
  pages: {
    faq: {
      eyebrow: 'Help center',
      title: 'The Isle Cheats FAQ: Setup, Plans & the current game protection system',
      description:
        'Answers on The Isle cheats: setup steps, monthly and lifetime plans, ESP and aim modules, the current game protection system status, and checkout help at {siteDomain}.',
      schemaName: 'The Isle Cheats FAQ',
      schemaDescription:
        'Answers on session cheats, ESP, aimbot, loot filters, loader setup, pricing, and checkout at {siteDomain}.',
    },
    forum: {
      eyebrow: 'The Isle community forum',
      title: 'The Isle Community Forum',
      description:
        'Archived, read-only threads on loader setup, loot ESP, patch status, and HWID bans. Replies are closed.',
      exploreGuides: 'Explore the guides',
      postsAria: 'Community posts',
      sortAria: 'Post sorting',
      sortPopular: 'Popular',
      sortLatest: 'Latest',
      sortTop: 'Most discussed',
      filterAria: 'Filter discussions by topic',
      filterAll: 'All topics',
      resultsCount: 'guide discussions',
      voteAria: 'Discussion voting',
      upvoteAria: 'Upvote this discussion',
      downvoteUnavailableAria: 'Downvoting is unavailable',
      guideTeam: '{siteName} guide team',
      guideBasedQa: 'Guide-based Q&A',
      fromGuide: 'From the guide:',
      comments: 'comments',
      closedThread: 'Closed thread',
      closedBy: 'Closed by archive',
      repliesClosed: 'Replies are closed',
      readDiscussion: 'Read discussion',
      empty: 'No discussions match. Try another search or topic.',
      emptyArchive: 'No discussions yet. New threads will show up here.',
      categoryGeneral: 'General',
      categoryGuides: 'Guides & Builds',
      categoryPatch: 'Patch Talk',
      categoryCommunity: 'Community',
      paginationAria: 'Discussion pages',
      pagePrevious: 'Previous',
      pageNext: 'Next',
      sidebarTitle: '{siteName} Community',
      sidebarIntro: 'Read-only archive. Threads stay up for reference, you cannot start a thread or reply.',
      statsDiscussions: 'guide discussions',
      statsTopics: 'topics',
      exploreAllGuides: 'Explore all guides',
      communitiesHeading: 'Communities',
      browseRelated: 'Browse related Q&A',
      browseAllCommunities: 'Browse all communities',
      guidelinesHeading: 'Community guidelines',
      guideline1: 'Keep it friendly and constructive',
      guideline2: 'Stay on topic and add context',
      guideline3: 'Mark spoilers and sensitive content',
      readFullGuidelines: 'Read the full guidelines',
      sidebarFoot: 'About · Guidelines · Privacy · Terms',
    },
    utilities: {
      title: 'HWID Spoofer',
      description: 'Machine recovery when new accounts work elsewhere but fail instantly on this PC.',
      viewDetails: 'View',
      includes: 'Includes:',
      schemaName: 'HWID Spoofer',
    },
  },
  pageSeo: {
    '/': {
      title: 'Isle Cheats – ESP, Aimbot & Loot for Windows',
      description:
        'Isle Cheats: The Isle player ESP, loot ESP and aimbot for Windows sessions. Review features, requirements and available plans at {siteDomain}.',
    },
    '/cheats/': {
      title: 'The Isle Cheats | ESP, Loot & Aimbot Plans',
      description:
        'The Isle player ESP, loot filters, aimbot and no recoil for main maps. Review requirements and plans on {siteDomain}.',
    },
    '/hwid-spoofer/': {
      title: 'HWID Spoofer | Hardware ID Ban Recovery',
      description:
        'Change disk, MAC and GPU identifiers after a hardware ID ban. Review supported protections, cleaner details and plans on {siteDomain}.',
    },
    '/products/': {
      title: '{cheatProduct} & Tools | All Products',
      description:
        'Compare every product on {siteDomain}: features, requirements, plans and checkout through our partner.',
    },
    '/ugc/': {
      title: 'UGC Account Recovery | Appeal & Unban Workflows',
      description:
        'Custom appeal workflows and dispute automation for restricted gaming and marketplace accounts. Plans on {siteDomain}.',
    },
    '/skin-changer/': {
      title: 'Skin Changer | Unlock Weapon Skins & Outfits',
      description:
        'Unlocks premium weapon skins, character outfits and rare knives across major titles. Monthly and lifetime plans on {siteDomain}.',
    },
    '/blog/': {
      title: 'Guides for The Isle | ESP, Aimbot & Updates',
      description:
        'Read The Isle guides on ESP, aim settings, loot filters, setup requirements and post-patch status checks on {siteDomain}.',
    },
    '/forum/': {
      title: 'The Isle Cheats Forum | Setup, Status & HWID',
      description:
        'Read-only The Isle discussions on loadouts, patches, and guides. New threads and replies are closed.',
    },
    '/faq/': {
      title: 'The Isle Cheats FAQ | Setup, Plans & Safety',
      description:
        'Answers about The Isle cheat setup, plans, ESP and aim modules, compatibility, support and checkout help at {siteDomain}.',
    },
    '/terms/': {
      title: 'Terms of Sale & License Use',
      description:
        'Refund rules, license limits, checkout delivery, and risk disclosure for products sold via {siteDomain}.',
    },
    '/privacy/': {
      title: 'Privacy Policy | Analytics & Support Data',
      description:
        'How {siteDomain} uses cookies, analytics, and the information you send when opening a support ticket.',
    },
    '/about/': {
      title: 'Islecheatstore Com – About The Isle Cheats',
      description:
        'Islecheatstore Com publishes The Isle Cheats resources, status notes, setup guidance, and support channels for Windows players at {siteDomain}.',
    },
    '/support/': {
      title: 'The Isle Cheats Support | Loader, HWID & Checkout',
      description:
        'Contact support for portal access, module errors, and billing questions before or after checkout on {siteDomain}.',
    },
  },
  ui: {
    skipLink: 'Skip to main content',
    browseCheatsNav: 'Try Now',
    homeAria: 'IsleCHEATS home',
    menuOpen: 'Open menu',
    themeLight: 'Switch to light mode',
    languageSwitcherLabel: 'Language',
    languageNames: {
      en: 'English',
      es: 'Español',
      de: 'Deutsch',
      fr: 'Français',
    },
  },
};
