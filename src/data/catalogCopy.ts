import { CHEATS_PRIMARY_SLUG, HWID_SPOOFER_SLUG, SKIN_CHANGER_SLUG, UGC_SLUG } from '../config/catalog';
import type { SiteLocale } from '../i18n/locales';
import { deepApplySiteTokens } from '../i18n/brandTokens';

/** UI copy for the /products/ catalog page and the header products menu. */
export interface CatalogCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  trust: string[];
  featuredEyebrow: string;
  from: string;
  priceLabel: string;
  lifetime: string;
  perMonth: string;
  utilitiesEyebrow: string;
  utilitiesTitle: string;
  utilitiesDesc: string;
  chooserEyebrow: string;
  chooserTitle: string;
  chooserDesc: string;
  scenarios: { slug: string; need: string; answer: string }[];
  compareEyebrow: string;
  compareTitle: string;
  compareDesc: string;
  compareRows: { label: string; values: Record<string, string> }[];
  ctaTitle: string;
  ctaDesc: string;
  ctaSupport: string;
  menuHeading: string;
  menuViewAll: string;
  menuTaglines: Record<string, string>;
}

const en: CatalogCopy = {
  eyebrow: 'Store',
  title: '{gameName} cheats and utilities',
  subtitle:
    'Everything we sell for {gameName}. Open any product for the full feature list, requirements and checkout.',
  trust: ['Instant delivery', '24/7 support', 'Monthly or lifetime plans', 'Partner checkout'],
  featuredEyebrow: 'Main product',
  from: 'From',
  priceLabel: 'Price',
  lifetime: 'Lifetime',
  perMonth: '/ month',
  utilitiesEyebrow: 'Utilities',
  utilitiesTitle: 'More tools we sell',
  utilitiesDesc: 'Each utility is sold separately with its own license, page and checkout.',
  chooserEyebrow: 'Not sure?',
  chooserTitle: 'Which product do I need?',
  chooserDesc: 'Start from your situation. Each answer links to the product built for it.',
  scenarios: [
    { slug: CHEATS_PRIMARY_SLUG, need: 'I want to review the listed {gameShort} product features.', answer: '{cheatProduct}' },
    { slug: HWID_SPOOFER_SLUG, need: 'New accounts get banned instantly on my PC but work on another one.', answer: 'HWID Spoofer' },
    { slug: UGC_SLUG, need: 'My account was suspended, locked or banned and I want to appeal.', answer: 'UGC Account Recovery' },
    { slug: SKIN_CHANGER_SLUG, need: 'I want premium skins and outfits without buying each one.', answer: 'Skin Changer' },
  ],
  compareEyebrow: 'Compare',
  compareTitle: 'Compare products side by side',
  compareDesc: 'Plans, delivery and requirements at a glance. Product pages have the full details.',
  compareRows: [
    {
      label: 'Best for',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'the listed product features',
        [HWID_SPOOFER_SLUG]: 'Hardware-flagged PCs',
        [UGC_SLUG]: 'Restricted accounts',
        [SKIN_CHANGER_SLUG]: 'Cosmetics on your client',
      },
    },
    {
      label: 'Delivery',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Instant, via portal',
        [HWID_SPOOFER_SLUG]: 'Instant, via portal',
        [UGC_SLUG]: 'Instant, via portal',
        [SKIN_CHANGER_SLUG]: 'Instant, via portal',
      },
    },
    {
      label: 'Windows',
      values: {
        [CHEATS_PRIMARY_SLUG]: '10 / 11, 64-bit',
        [HWID_SPOOFER_SLUG]: '10 / 11, 64-bit, admin',
        [UGC_SLUG]: '10 / 11, 64-bit',
        [SKIN_CHANGER_SLUG]: '10 / 11, 64-bit',
      },
    },
    {
      label: 'Security settings',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'HVCI, TPM, Secure Boot on',
        [HWID_SPOOFER_SLUG]: 'HVCI, TPM, Secure Boot on',
        [UGC_SLUG]: 'HVCI, TPM, Secure Boot on',
        [SKIN_CHANGER_SLUG]: 'HVCI, TPM, Secure Boot on',
      },
    },
  ],
  ctaTitle: 'Still deciding?',
  ctaDesc: 'Tell support what happened or what you want to do, and they will point you to the right product before you pay.',
  ctaSupport: 'Ask support',
  menuHeading: 'Products',
  menuViewAll: 'Compare all products',
  menuTaglines: {
    [CHEATS_PRIMARY_SLUG]: 'Listed product features',
    [HWID_SPOOFER_SLUG]: 'Reset hardware IDs after a ban',
    [UGC_SLUG]: 'Appeal restricted or banned accounts',
    [SKIN_CHANGER_SLUG]: 'Unlock skins, outfits and knives',
  },
};

const es: CatalogCopy = {
  eyebrow: 'Tienda',
  title: 'Trucos y utilidades para {gameName}',
  subtitle:
    'Todo lo que vendemos para {gameName}. Abre cualquier producto para ver funciones, requisitos y pago.',
  trust: ['Entrega inmediata', 'Soporte 24/7', 'Planes mensuales o de por vida', 'Pago con socio'],
  featuredEyebrow: 'Producto principal',
  from: 'Desde',
  priceLabel: 'Precio',
  lifetime: 'De por vida',
  perMonth: '/ mes',
  utilitiesEyebrow: 'Utilidades',
  utilitiesTitle: 'Más herramientas que vendemos',
  utilitiesDesc: 'Cada utilidad se vende por separado con su propia licencia, página y pago.',
  chooserEyebrow: '¿Dudas?',
  chooserTitle: '¿Qué producto necesito?',
  chooserDesc: 'Parte de tu situación. Cada respuesta enlaza al producto pensado para ella.',
  scenarios: [
    { slug: CHEATS_PRIMARY_SLUG, need: 'Quiero consultar las funciones indicadas para {gameShort}.', answer: '{cheatProduct}' },
    { slug: HWID_SPOOFER_SLUG, need: 'Las cuentas nuevas se banean al instante en mi PC pero funcionan en otro.', answer: 'HWID Spoofer' },
    { slug: UGC_SLUG, need: 'Mi cuenta fue suspendida, bloqueada o baneada y quiero apelar.', answer: 'UGC Recuperación de cuentas' },
    { slug: SKIN_CHANGER_SLUG, need: 'Quiero skins y atuendos premium sin comprar cada uno.', answer: 'Skin Changer' },
  ],
  compareEyebrow: 'Comparar',
  compareTitle: 'Compara los productos lado a lado',
  compareDesc: 'Planes, entrega y requisitos de un vistazo. Las páginas de producto tienen todos los detalles.',
  compareRows: [
    {
      label: 'Ideal para',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Funciones del producto indicadas',
        [HWID_SPOOFER_SLUG]: 'PCs con baneo de hardware',
        [UGC_SLUG]: 'Cuentas restringidas',
        [SKIN_CHANGER_SLUG]: 'Cosméticos en tu cliente',
      },
    },
    {
      label: 'Entrega',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Inmediata, por portal',
        [HWID_SPOOFER_SLUG]: 'Inmediata, por portal',
        [UGC_SLUG]: 'Inmediata, por portal',
        [SKIN_CHANGER_SLUG]: 'Inmediata, por portal',
      },
    },
    {
      label: 'Windows',
      values: {
        [CHEATS_PRIMARY_SLUG]: '10 / 11, 64 bits',
        [HWID_SPOOFER_SLUG]: '10 / 11, 64 bits, admin',
        [UGC_SLUG]: '10 / 11, 64 bits',
        [SKIN_CHANGER_SLUG]: '10 / 11, 64 bits',
      },
    },
    {
      label: 'Seguridad',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'HVCI, TPM, Secure Boot activos',
        [HWID_SPOOFER_SLUG]: 'HVCI, TPM, Secure Boot activos',
        [UGC_SLUG]: 'HVCI, TPM, Secure Boot activos',
        [SKIN_CHANGER_SLUG]: 'HVCI, TPM, Secure Boot activos',
      },
    },
  ],
  ctaTitle: '¿Aún lo estás pensando?',
  ctaDesc: 'Cuenta al soporte qué pasó o qué quieres hacer y te indicarán el producto adecuado antes de pagar.',
  ctaSupport: 'Preguntar al soporte',
  menuHeading: 'Productos',
  menuViewAll: 'Comparar todos los productos',
  menuTaglines: {
    [CHEATS_PRIMARY_SLUG]: 'Funciones indicadas del producto',
    [HWID_SPOOFER_SLUG]: 'Restablece IDs de hardware tras un baneo',
    [UGC_SLUG]: 'Apela cuentas restringidas o baneadas',
    [SKIN_CHANGER_SLUG]: 'Desbloquea skins, atuendos y cuchillos',
  },
};

const de: CatalogCopy = {
  eyebrow: 'Shop',
  title: '{gameName} Cheats und Tools',
  subtitle:
    'Alles, was wir für {gameName} anbieten. Öffne ein Produkt für Funktionsliste, Anforderungen und Kaufabwicklung.',
  trust: ['Sofortige Lieferung', '24/7 Support', 'Monats- oder Lifetime-Plan', 'Partner-Checkout'],
  featuredEyebrow: 'Hauptprodukt',
  from: 'Ab',
  priceLabel: 'Preis',
  lifetime: 'Lifetime',
  perMonth: '/ Monat',
  utilitiesEyebrow: 'Tools',
  utilitiesTitle: 'Weitere Tools im Angebot',
  utilitiesDesc: 'Jedes Tool wird separat mit eigener Lizenz, Seite und Kaufabwicklung verkauft.',
  chooserEyebrow: 'Unsicher?',
  chooserTitle: 'Welches Produkt brauche ich?',
  chooserDesc: 'Geh von deiner Situation aus. Jede Antwort führt zum passenden Produkt.',
  scenarios: [
    { slug: CHEATS_PRIMARY_SLUG, need: 'Ich möchte die aufgeführten Funktionen für {gameShort} ansehen.', answer: '{cheatProduct}' },
    { slug: HWID_SPOOFER_SLUG, need: 'Neue Konten werden auf meinem PC sofort gebannt, auf einem anderen nicht.', answer: 'HWID-Spoofer' },
    { slug: UGC_SLUG, need: 'Mein Konto wurde gesperrt oder gebannt und ich will Einspruch einlegen.', answer: 'UGC Kontowiederherstellung' },
    { slug: SKIN_CHANGER_SLUG, need: 'Ich will Premium-Skins und Outfits, ohne jedes einzeln zu kaufen.', answer: 'Skin Changer' },
  ],
  compareEyebrow: 'Vergleich',
  compareTitle: 'Alle Produkte im Vergleich',
  compareDesc: 'Pläne, Lieferung und Anforderungen auf einen Blick. Details stehen auf den Produktseiten.',
  compareRows: [
    {
      label: 'Ideal für',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'aufgeführte Produktfunktionen',
        [HWID_SPOOFER_SLUG]: 'PCs mit Hardware-Bann',
        [UGC_SLUG]: 'Gesperrte Konten',
        [SKIN_CHANGER_SLUG]: 'Kosmetik auf deinem Client',
      },
    },
    {
      label: 'Lieferung',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Sofort, über Portal',
        [HWID_SPOOFER_SLUG]: 'Sofort, über Portal',
        [UGC_SLUG]: 'Sofort, über Portal',
        [SKIN_CHANGER_SLUG]: 'Sofort, über Portal',
      },
    },
    {
      label: 'Windows',
      values: {
        [CHEATS_PRIMARY_SLUG]: '10 / 11, 64-Bit',
        [HWID_SPOOFER_SLUG]: '10 / 11, 64-Bit, Admin',
        [UGC_SLUG]: '10 / 11, 64-Bit',
        [SKIN_CHANGER_SLUG]: '10 / 11, 64-Bit',
      },
    },
    {
      label: 'Sicherheit',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'HVCI, TPM, Secure Boot an',
        [HWID_SPOOFER_SLUG]: 'HVCI, TPM, Secure Boot an',
        [UGC_SLUG]: 'HVCI, TPM, Secure Boot an',
        [SKIN_CHANGER_SLUG]: 'HVCI, TPM, Secure Boot an',
      },
    },
  ],
  ctaTitle: 'Noch unentschlossen?',
  ctaDesc: 'Erzähl dem Support, was passiert ist oder was du vorhast. Er nennt dir das passende Produkt, bevor du zahlst.',
  ctaSupport: 'Support fragen',
  menuHeading: 'Produkte',
  menuViewAll: 'Alle Produkte vergleichen',
  menuTaglines: {
    [CHEATS_PRIMARY_SLUG]: 'Aufgeführte Produktfunktionen',
    [HWID_SPOOFER_SLUG]: 'Hardware-IDs nach einem Bann zurücksetzen',
    [UGC_SLUG]: 'Einspruch für gesperrte Konten',
    [SKIN_CHANGER_SLUG]: 'Skins, Outfits und Messer freischalten',
  },
};

const fr: CatalogCopy = {
  eyebrow: 'Boutique',
  title: 'Cheats et utilitaires {gameName}',
  subtitle:
    'Tout ce que nous vendons pour {gameName}. Ouvrez un produit pour voir fonctionnalités, prérequis et paiement.',
  trust: ['Livraison immédiate', 'Support 24/7', 'Formule mensuelle ou à vie', 'Paiement partenaire'],
  featuredEyebrow: 'Produit principal',
  from: 'Dès',
  priceLabel: 'Prix',
  lifetime: 'À vie',
  perMonth: '/ mois',
  utilitiesEyebrow: 'Utilitaires',
  utilitiesTitle: 'Nos autres outils',
  utilitiesDesc: 'Chaque utilitaire est vendu séparément, avec sa licence, sa page et son paiement.',
  chooserEyebrow: 'Vous hésitez ?',
  chooserTitle: 'De quel produit ai-je besoin ?',
  chooserDesc: 'Partez de votre situation. Chaque réponse mène au produit conçu pour elle.',
  scenarios: [
    { slug: CHEATS_PRIMARY_SLUG, need: 'Je souhaite consulter les fonctionnalités indiquées pour {gameShort}.', answer: '{cheatProduct}' },
    { slug: HWID_SPOOFER_SLUG, need: 'Les nouveaux comptes sont bannis instantanément sur mon PC mais pas sur un autre.', answer: 'HWID Spoofer' },
    { slug: UGC_SLUG, need: 'Mon compte a été suspendu, verrouillé ou banni et je veux faire appel.', answer: 'UGC Récupération de compte' },
    { slug: SKIN_CHANGER_SLUG, need: 'Je veux des skins et tenues premium sans acheter chacun.', answer: 'Skin Changer' },
  ],
  compareEyebrow: 'Comparer',
  compareTitle: 'Les produits côte à côte',
  compareDesc: 'Formules, livraison et prérequis en un coup d’œil. Les pages produit donnent tous les détails.',
  compareRows: [
    {
      label: 'Idéal pour',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'fonctionnalités indiquées',
        [HWID_SPOOFER_SLUG]: 'PC bannis matériellement',
        [UGC_SLUG]: 'Comptes restreints',
        [SKIN_CHANGER_SLUG]: 'Cosmétiques sur votre client',
      },
    },
    {
      label: 'Livraison',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'Immédiate, via le portail',
        [HWID_SPOOFER_SLUG]: 'Immédiate, via le portail',
        [UGC_SLUG]: 'Immédiate, via le portail',
        [SKIN_CHANGER_SLUG]: 'Immédiate, via le portail',
      },
    },
    {
      label: 'Windows',
      values: {
        [CHEATS_PRIMARY_SLUG]: '10 / 11, 64 bits',
        [HWID_SPOOFER_SLUG]: '10 / 11, 64 bits, admin',
        [UGC_SLUG]: '10 / 11, 64 bits',
        [SKIN_CHANGER_SLUG]: '10 / 11, 64 bits',
      },
    },
    {
      label: 'Sécurité',
      values: {
        [CHEATS_PRIMARY_SLUG]: 'HVCI, TPM, Secure Boot activés',
        [HWID_SPOOFER_SLUG]: 'HVCI, TPM, Secure Boot activés',
        [UGC_SLUG]: 'HVCI, TPM, Secure Boot activés',
        [SKIN_CHANGER_SLUG]: 'HVCI, TPM, Secure Boot activés',
      },
    },
  ],
  ctaTitle: 'Encore indécis ?',
  ctaDesc: 'Expliquez au support ce qui s’est passé ou ce que vous voulez faire : il vous orientera vers le bon produit avant le paiement.',
  ctaSupport: 'Demander au support',
  menuHeading: 'Produits',
  menuViewAll: 'Comparer tous les produits',
  menuTaglines: {
    [CHEATS_PRIMARY_SLUG]: 'Fonctionnalités indiquées du produit',
    [HWID_SPOOFER_SLUG]: 'Réinitialiser les ID matériels après un ban',
    [UGC_SLUG]: 'Faire appel pour un compte restreint',
    [SKIN_CHANGER_SLUG]: 'Débloquer skins, tenues et couteaux',
  },
};

const byLocale: Record<SiteLocale, CatalogCopy> = { en, es, de, fr };

const finalized = Object.fromEntries(
  Object.entries(byLocale).map(([locale, copy]) => [locale, deepApplySiteTokens(copy)]),
) as Record<SiteLocale, CatalogCopy>;

export function getCatalogCopy(locale: SiteLocale): CatalogCopy {
  return finalized[locale];
}
