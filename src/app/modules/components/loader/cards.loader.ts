import { ComponentsLoader, SectionMetadata } from './types';

export const CARDS_LOADERS: ComponentsLoader = {
  'category-card':
    import('app/modules/components/cards/category-card/category-card').then(
      m => m.CategoryCardComp
    ),
  'theme-card':
    import('app/modules/components/cards/theme-card/theme-card').then(
      m => m.ThemeCardComp
    ),

  'product-card':
    import('app/modules/components/cards/product-card/product-card').then(
      m => m.ProductCardComp
    ),
  'profile-card':
    import('app/modules/components/cards/profile-card/profile-card').then(
      m => m.ProfileCardComp
    ),
} as const;

export const CARD_METADATA: SectionMetadata = {
  title: 'cards',
  icon: 'view_agenda',
  description:
    'Flexible content grouping blocks and bento cards with customizable layouts, imagery, and footers.',
  color: '#ec4899',
  isMasonryLayout: true,
  filePaths: {
    'category-card': {
      css: {
        ts: 'assets/registry/cards/category-card/css/category-card.ts',
        html: 'assets/registry/cards/category-card/css/category-card.html',
        css: 'assets/registry/cards/category-card/css/category-card.css',
      },
      tailwind: {
        ts: 'assets/registry/cards/category-card/tailwind/category-card.ts',
        html: 'assets/registry/cards/category-card/tailwind/category-card.html',
      },
    },
    'theme-card': {
      css: {
        ts: 'assets/registry/cards/theme-card/css/theme-card.ts',
        html: 'assets/registry/cards/theme-card/css/theme-card.html',
        css: 'assets/registry/cards/theme-card/css/theme-card.css',
      },
      tailwind: {
        ts: 'assets/registry/cards/theme-card/tailwind/theme-card.ts',
        html: 'assets/registry/cards/theme-card/tailwind/theme-card.html',
      },
    },

    'product-card': {
      css: {
        ts: 'assets/registry/cards/product-card/css/product-card.ts',
        html: 'assets/registry/cards/product-card/css/product-card.html',
        css: 'assets/registry/cards/product-card/css/product-card.css',
      },
      tailwind: {
        ts: 'assets/registry/cards/product-card/tailwind/product-card.ts',
        html: 'assets/registry/cards/product-card/tailwind/product-card.html',
      },
    },
    'profile-card': {
      css: {
        ts: 'assets/registry/cards/profile-card/css/profile-card.ts',
        html: 'assets/registry/cards/profile-card/css/profile-card.html',
        css: 'assets/registry/cards/profile-card/css/profile-card.css',
      },
      tailwind: {
        ts: 'assets/registry/cards/profile-card/tailwind/profile-card.ts',
        html: 'assets/registry/cards/profile-card/tailwind/profile-card.html',
      },
    },
  },
};
