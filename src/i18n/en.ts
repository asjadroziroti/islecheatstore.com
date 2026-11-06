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
    titleLine1: 'Isle Cheats',
    titleLine2: 'for Survival in The Isle',
    subtitle:
      'The supplied summary names aimbot, wallhack or visual cues, resource visibility, and radar. Verify current branch details in the product listing.',
    ctaPrimary: 'View products',
    metrics: [
      { label: 'Categories', strong: '4' },
      { label: 'Branches', strong: '2' },
      { label: 'Branches', strong: 'Evrima + Legacy' },
      { label: 'Mode', strong: 'Online' },
    ],
    statusPills: [
      'Aimbot',
      'Visual cues',
      'Water',
      'Corpses',
      'Fruit',
      'Radar',
    ],
  },
  features: {
    eyebrow: 'Features',
    title: 'Four broad feature categories',
    subtitle: 'The supplied summary names these categories. It does not document every control or confirm branch compatibility.',
    items: [
      { title: 'Aimbot', subtitle: 'Feature category in the summary', desc: 'Aimbot is one of the broad capabilities named for The Isle. Check the current feature description for details.', bullets: ['Review current product information'], tags: ['The Isle aimbot'] },
      { title: 'Wallhack and visual cues', subtitle: 'Awareness category', desc: 'The summary describes visual cues related to an approaching predator. It does not establish a detection range or every object shown.', bullets: ['Visual cue category', 'Verify current scope'], tags: ['The Isle visual cues', 'The Isle wallhack'] },
      { title: 'Resource visibility', subtitle: 'Examples named in the summary', desc: 'Water, corpses, and fruit are named as resource examples. The summary does not provide a complete object list or control set.', bullets: ['Water', 'Corpses', 'Fruit'], tags: ['The Isle resource visibility'] },
      { title: 'Radar', subtitle: 'Feature category in the summary', desc: 'Radar is named as a broad category. The summary does not detail its layout, range, indicators, or controls.', bullets: ['Check current product details'], tags: ['The Isle radar'] },
    ],
  },
  whyUs: {
    eyebrow: 'Product details',
    title: 'Check the details that matter to you',
    subtitle: 'The summary gives high-level feature names, not a complete specification or compatibility matrix.',
    usLabel: '{siteName}',
    otherLabel: 'Before choosing',
    rows: [
      { title: 'Confirm the feature', desc: 'Check whether the current listing describes the aimbot, visual cue, resource visibility, or radar category you are considering.' },
      { title: 'Verify the branch', desc: 'The Isle has Evrima and Legacy branches. The summary does not establish which product features apply to each.' },
      { title: 'Review the terms', desc: 'Read current product and checkout information before deciding.' },
    ],
    metrics: [
      { value: '4', title: 'Broad categories', desc: 'Aimbot, visual cues, resource visibility, and radar are named in the summary.' },
      { value: '2', title: 'Game branches', desc: 'Evrima and Legacy are described as distinct branches.' },
      { value: 'Current listing', title: 'Feature scope', desc: 'Use the latest product description for supported details.' },
    ],
  },
  setup: {
    eyebrow: 'Before you choose',
    titleLead: 'Review the product details in',
    titleHighlight: 'three simple steps',
    intro: 'Check the feature category, branch information, and current product terms before choosing.',
    ctaPrimary: 'View products',
    ctaSecondary: 'Read the FAQ',
    ctaPrimaryHref: productBase,
    ctaSecondaryHref: '/faq/',
    steps: [
      { step: 'Step 1', title: 'Choose a feature category', desc: 'Identify whether you are looking for aimbot, visual cues, resource visibility, or radar.' },
      { step: 'Step 2', title: 'Check branch information', desc: 'Confirm current product information for the Evrima or Legacy branch you play.' },
      { step: 'Step 3', title: 'Review purchase terms', desc: 'Check the current plan, price, and terms before purchase.' },
    ],
  },
  compatibility: {
    eyebrow: 'Game information',
    title: 'Check branch-specific details',
    subtitle: 'The Isle has online play and distinct Evrima and Legacy branches. The supplied product summary does not confirm compatibility for either branch.',
    items: ['The Isle', 'Evrima branch', 'Legacy branch — verify product compatibility'],
  },
  cheats: {
    eyebrow: 'Main product',
    title: 'The Isle Cheats',
    subtitle: 'Aimbot, visual cues, resource visibility, and radar are named in the supplied summary. Confirm current product scope before purchase.',
    viewAll: 'View product details',
    explore: 'Explore',
    items: [
      { badge: 'Main product', tier: 'The Isle', name: 'The Isle Cheats', title: 'The Isle Cheats: survival feature overview', desc: 'Review the four broad categories named in the summary and check the current listing for supported details and branch compatibility.', heroDesc: 'Feature scope and compatibility are not fully specified in the summary. Confirm them in the current product description.', features: ['Aimbot category', 'Wallhack and visual cues', 'Water, corpse, and fruit visibility', 'Radar category'], more: 0, href: productBase, variant: 'popular' },
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
      title: 'Product previews · Details',
      subtitle:
        'Review the product images above and compare the listed features and purchase information below.',
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
          'Review the current supported-title information, hardware identifiers changed, cleaner details, and requirements before purchase.',
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
    subtitle: 'Guides to The Isle survival, branches, visual cues, resource visibility, and the feature categories in the product summary.',
    latestTitle: 'The Isle Guides and Product Notes',
    latestSubtitle: 'Read game-context guides and product feature overviews based on the supplied summary.',
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
    eyebrow: 'How to review the product',
    badge: '3 checks',
    titleBefore: 'Make a choice from',
    titleHighlight: 'the current listing.',
    subtitle: 'Compare the feature category, branch information, and purchase terms shown for the current product.',
    ctaLabel: 'View product details',
    ctaHref: productBase,
    ctaSecondary: 'Read the FAQ',
    ctaSecondaryHref: '/faq/',
    items: [
      { num: '01', phase: 'Feature', title: 'Choose a category', desc: 'Identify whether you are looking for aimbot, visual cues, resource visibility, or radar.' },
      { num: '02', phase: 'Branch', title: 'Check current support', desc: 'Review the product description for the Evrima or Legacy branch you play.' },
      { num: '03', phase: 'Terms', title: 'Review the checkout', desc: 'Check the current plan, price, and terms before purchase.' },
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
        desc: 'Feature scope, branch information, and purchase terms.',
        linkLabel: 'View all FAQ',
        href: '/faq/',
      },
    ],
    ticketTitle: 'Include in your ticket',
    ticketItems: [
      { title: 'Order email', desc: 'The address used at checkout on {siteDomain} or via our partner checkout.' },
      { title: 'Platform', desc: 'The Isle branch and version information relevant to your question.' },
      { title: 'Error detail', desc: 'Screenshot or exact message from the loader or game client.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Product questions, answered clearly.',
    subtitle: 'Feature scope, branch information, and current purchase details.',
    items: [
      { num: '01', q: 'Which features are named for The Isle?', a: 'The supplied summary names aimbot, wallhack or visual cues, resource visibility, and radar. Water, corpses, and fruit are examples for the resource category.' },
      { num: '02', q: 'Does the summary confirm Evrima or Legacy support?', a: 'No. The summary does not say which product features apply to either branch. Check the current product description for the branch you play.' },
      { num: '03', q: 'Is The Isle online-only?', a: 'The supplied game summary describes The Isle as fully online and notes custom servers. It does not establish product compatibility details.' },
      { num: '04', q: 'Where can I confirm current plans and prices?', a: 'Review the current product page and checkout for available plan duration, price, and terms.' },
      { num: '05', q: 'What does the HWID Spoofer change?', a: 'It changes disk serials, MAC addresses, GPU IDs, and related identifiers, and includes a cleaner. It does not lift a ban on an existing account.' },
      { num: '06', q: 'What does UGC Account Recovery do?', a: 'It provides custom appeal workflows and dispute-process automation. The reviewing platform makes the final decision.' },
    ],
  },
  footer: {
    tagline: 'The Isle Cheats: survival feature guides and product information at {siteDomain}.',
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
            '{siteName} publishes product descriptions and guides about The Isle feature categories described in the current product information.',
            'All product names are used for identification only.',
          ],
        },
        {
          heading: 'What we publish',
          paragraphs: [
            'Our site covers {cheatProduct}, the listed utility products, and guides related to the information in their product descriptions.',
            'Product availability and compatibility may change. Review the current descriptions for supported details.',
          ],
        },
        {
          heading: 'Support',
          paragraphs: [
            'For product or checkout questions, use the contact details on the Support page and share only the information needed to explain your question.',
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
            'All sales are final once checkout completes. Review the product details and checkout terms before placing an order.',
            'If the product does not work as described on a supported setup: The Isle on Windows 10/11, current loader from the portal, and the live status banner showing online when you started, contact us through the Support page. Include your order email, Windows version, game build, and screenshots or exact error text from the loader.',
            'We may, at our discretion, offer a fix, replacement access, or partial/full refund when we confirm a fault on our side. We are not obligated to approve every request.',
          ],
        },
        {
          heading: 'Availability and risk',
          paragraphs: [
            'Third-party tools can conflict with game updates and may carry account risks. Review the game publisher’s rules before use.',
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
      title: 'The Isle Cheats FAQ: Features, Plans & Product Details',
      description:
        'Answers about The Isle cheats, the listed product features, monthly and lifetime plans, and checkout information at {siteDomain}.',
      schemaName: 'The Isle Cheats FAQ',
      schemaDescription:
        'Answers on session cheats, ESP, aimbot, loot filters, loader setup, pricing, and checkout at {siteDomain}.',
    },
    forum: {
      eyebrow: 'The Isle community forum',
      title: 'The Isle Community Forum',
      description:
        'Browse archived, read-only community discussions about The Isle. Replies are closed.',
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
      title: 'Isle Cheats for The Isle | Features & Product Guide',
      description:
        'Isle cheats for The Isle: aimbot, radar, visual cues, and resource visibility. Review product and branch details before buying.',
    },
    '/cheats/': {
      title: 'The Isle Cheats | Product Details and Plans',
      description:
        'Explore the broad feature categories named for The Isle and check the current listing for supported details, branch compatibility, and plans.',
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
      title: 'The Isle Guides | Survival, Branches and Features',
      description:
        'Read guides about The Isle survival, Evrima and Legacy, and the feature categories described in the product summary.',
    },
    '/forum/': {
      title: 'The Isle Cheats Forum | Setup, Status & HWID',
      description:
        'Read-only The Isle discussions on loadouts, patches, and guides. New threads and replies are closed.',
    },
    '/faq/': {
      title: 'The Isle Cheats FAQ | Features and Plans',
      description:
        'Answers about The Isle feature categories, branch information, current product details, and checkout terms at {siteDomain}.',
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
