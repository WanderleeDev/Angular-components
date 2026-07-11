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
  isResponsiveColumn: true,
  filePaths: {
    'category-card': {
      css: {
        ts: 'assets/registry/cards/category-card/category-card.ts',
        html: 'assets/registry/cards/category-card/category-card.html',
        css: 'assets/registry/cards/category-card/category-card.css',
      },
    },
    'theme-card': {
      css: {
        ts: 'assets/registry/cards/theme-card/theme-card.ts',
        html: 'assets/registry/cards/theme-card/theme-card.html',
        css: 'assets/registry/cards/theme-card/theme-card.css',
      },
    },

    'product-card': {
      css: {
        ts: 'assets/registry/cards/product-card/product-card.ts',
        html: 'assets/registry/cards/product-card/product-card.html',
        css: 'assets/registry/cards/product-card/product-card.css',
      },
    },
    'profile-card': {
      css: {
        ts: 'assets/registry/cards/profile-card/profile-card.ts',
        html: 'assets/registry/cards/profile-card/profile-card.html',
        css: 'assets/registry/cards/profile-card/profile-card.css',
      },
    },
  },
};
