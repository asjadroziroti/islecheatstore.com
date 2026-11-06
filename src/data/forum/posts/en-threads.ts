import type { ForumComment, ForumPost } from '../types';

const brand = 'The Isle Cheats';

function reply(body: string): ForumComment {
  return { author: brand, age: '0d', score: 0, body };
}

function thread(input: {
  slug: string;
  category: string;
  tone: ForumPost['categoryTone'];
  title: string;
  excerpt: string;
  date: string;
  question: string;
  replies: string[];
  sourceTitle: string;
  sourcePath: string;
}): ForumPost {
  return {
    slug: input.slug,
    category: input.category,
    categoryTone: input.tone,
    title: input.title,
    excerpt: input.excerpt,
    author: brand,
    age: '0d',
    published: input.date,
    commentsCount: input.replies.length,
    upvotes: 0,
    flair: 'Guide-based Q&A',
    body: [input.question],
    comments: input.replies.map(reply),
    sourceTitle: input.sourceTitle,
    sourcePath: input.sourcePath,
  };
}

export const forumPostsEn: ForumPost[] = [
  thread({
    slug: 'what-features-does-the-isle-summary-confirm', category: 'Features', tone: 'purple',
    title: 'What features does The Isle Cheats summary actually confirm?',
    excerpt: 'A guide to the four broad categories in the supplied summary and what still needs checking.', date: '2026-11-07',
    question: 'The feature labels can sound more specific than the summary really is. Which details can I take from it, and which should I verify on the product page?',
    replies: [
      'The supplied summary names aimbot, wallhack or visual cues, item and resource visibility, and radar. It gives water, corpses, and fruit as resource examples.',
      'It does not list every control, object, range, or branch-specific behavior. The [feature overview](/blog/the-isle-cheats-product-summary-overview/) separates named categories from details the source does not confirm.',
    ],
    sourceTitle: 'The Isle Cheats feature overview', sourcePath: '/blog/the-isle-cheats-product-summary-overview/',
  }),
  thread({
    slug: 'which-resources-are-named-for-the-isle', category: 'Features', tone: 'purple',
    title: 'Which resources are specifically named in the Isle visibility summary?',
    excerpt: 'The supplied examples are water, corpses, and fruit; the summary does not promise a complete object list.', date: '2026-10-29',
    question: 'I am comparing the feature summary with the longer product listing. Which resource examples are actually in the source text?',
    replies: [
      'The examples it names are water, corpses, and fruit. It does not enumerate every object, category, or filter.',
      'Use the [resource visibility guide](/blog/the-isle-resource-visibility-guide/) for that scope, then compare it with the current listing if you need a specific item confirmed.',
    ],
    sourceTitle: 'The Isle resource visibility guide', sourcePath: '/blog/the-isle-resource-visibility-guide/',
  }),
  thread({
    slug: 'what-does-the-isle-visual-cues-description-mean', category: 'Features', tone: 'purple',
    title: 'What does the visual-cues description say about The Isle?',
    excerpt: 'The summary mentions cues for an approaching predator without specifying range or every display behavior.', date: '2026-10-21',
    question: 'The wording mentions visual cues and an approaching predator. Does that tell me how far away it works or exactly what appears on screen?',
    replies: [
      'It gives the general purpose, not a measured range or a complete display specification. The product detail page is the place to confirm exact behavior.',
      'The [visual cues and wallhack guide](/blog/the-isle-visual-cues-wallhack-overview/) separates confirmed points from open questions.',
    ],
    sourceTitle: 'The Isle visual cues guide', sourcePath: '/blog/the-isle-visual-cues-wallhack-overview/',
  }),
  thread({
    slug: 'does-the-isle-summary-list-radar-range', category: 'Features', tone: 'purple',
    title: 'Does the Isle Cheats summary specify radar range or controls?',
    excerpt: 'Radar is named as a category, but the supplied summary does not provide its settings or range.', date: '2026-10-13',
    question: 'I see radar mentioned in the feature list. Is there a documented range, layout, or set of indicators in the summary?',
    replies: [
      'No. The supplied text names radar but does not describe its layout, range, indicators, or controls.',
      'Check the current product listing for those specifics. The [summary overview](/blog/the-isle-cheats-product-summary-overview/) explains why the category name alone is not a full specification.',
    ],
    sourceTitle: 'The Isle Cheats feature overview', sourcePath: '/blog/the-isle-cheats-product-summary-overview/',
  }),
  thread({
    slug: 'are-evrima-and-legacy-both-confirmed', category: 'Buying Questions', tone: 'blue',
    title: 'Does the product summary confirm support for Evrima and Legacy?',
    excerpt: 'The game has both branches, but the supplied summary does not confirm product compatibility for either one.', date: '2026-10-06',
    question: 'The Isle has Evrima and Legacy. Can I assume the same listed features apply to both branches?',
    replies: [
      'The summary describes both branches as part of the game context. It does not establish which product features are compatible with either branch.',
      'Check the current listing before choosing a plan. The [branch checklist](/blog/the-isle-branch-product-checklist/) shows what to confirm.',
    ],
    sourceTitle: 'The Isle branch checklist', sourcePath: '/blog/the-isle-branch-product-checklist/',
  }),
  thread({
    slug: 'why-online-only-context-matters-for-the-isle', category: 'Features', tone: 'purple',
    title: 'Why does the product summary call The Isle online-only?',
    excerpt: 'The source describes The Isle as fully online with no single-player campaign; compatibility still needs separate confirmation.', date: '2026-09-29',
    question: 'I noticed the source says The Isle is fully online. Does that describe where the game is played, or does it confirm product compatibility?',
    replies: [
      'It describes the game context: online play, without a single-player campaign. It does not by itself prove that a product feature works on a particular branch or server.',
      'The [online-only context guide](/blog/the-isle-online-only-multiplayer-context/) covers that distinction and links back to the feature scope.',
    ],
    sourceTitle: 'The Isle online-only context', sourcePath: '/blog/the-isle-online-only-multiplayer-context/',
  }),
  thread({
    slug: 'is-aimbot-a-complete-feature-specification', category: 'Features', tone: 'purple',
    title: 'Is “aimbot” a complete The Isle feature specification?',
    excerpt: 'The summary names an aimbot category but does not document keybinds, filters, or behavior.', date: '2026-09-22',
    question: 'The product summary includes the word aimbot. I do not see settings or controls listed there. Should I read the category label as a complete specification?',
    replies: [
      'No. It confirms that the category is named in the summary, but it does not list controls or describe behavior in detail.',
      'The [aimbot feature guide](/blog/the-isle-aimbot-feature-overview/) sticks to the supplied facts and points to the current listing for specifics.',
    ],
    sourceTitle: 'The Isle aimbot feature overview', sourcePath: '/blog/the-isle-aimbot-feature-overview/',
  }),
  thread({
    slug: 'what-to-check-before-choosing-an-isle-plan', category: 'Buying Questions', tone: 'blue',
    title: 'What should I check before choosing a plan for The Isle Cheats?',
    excerpt: 'Match the feature you want to the current listing, confirm branch details, and read checkout terms.', date: '2026-09-15',
    question: 'I know which broad feature category I am looking for, but what should I confirm before checking out?',
    replies: [
      'Start with the exact feature details and whether the listing confirms your game branch. Then review the plan duration, current price, and checkout terms shown at purchase.',
      'The [branch checklist](/blog/the-isle-branch-product-checklist/) is a useful companion to the current [The Isle Cheats product page](/cheats/).',
    ],
    sourceTitle: 'The Isle branch checklist', sourcePath: '/blog/the-isle-branch-product-checklist/',
  }),
  thread({
    slug: 'how-growth-context-shapes-isle-feature-questions', category: 'General', tone: 'green',
    title: 'How do growth and survival shape feature questions in The Isle?',
    excerpt: 'A guide discussion about checking features against the long growth and survival loop described in the source.', date: '2026-09-08',
    question: 'The source describes growth and survival as central to The Isle. How should that context shape the questions I ask about a product?',
    replies: [
      'Use the game context to decide what you need clarified, but do not infer a product outcome from it. Ask about the exact listed category, branch, and conditions that matter to you.',
      'The [growth and survival overview](/blog/the-isle-growth-and-survival-guide/) explains the game context without adding unverified product promises.',
    ],
    sourceTitle: 'The Isle growth and survival guide', sourcePath: '/blog/the-isle-growth-and-survival-guide/',
  }),
  thread({
    slug: 'how-to-read-a-short-isle-cheats-summary', category: 'Setup Help', tone: 'orange',
    title: 'How should I read a short Isle Cheats feature summary?',
    excerpt: 'Treat summary labels as broad categories and use the current listing for specific controls and compatibility.', date: '2026-08-31',
    question: 'A short summary is helpful, but it leaves some of my questions open. What is a sensible way to compare it with the full product page?',
    replies: [
      'Make a small list of the category, item, branch, or plan detail you need. Match each one against an explicit line on the current product page rather than filling gaps by assumption.',
      'The [product summary overview](/blog/the-isle-cheats-product-summary-overview/) and [branch checklist](/blog/the-isle-branch-product-checklist/) cover that review process.',
    ],
    sourceTitle: 'The Isle Cheats feature overview', sourcePath: '/blog/the-isle-cheats-product-summary-overview/',
  }),
];
