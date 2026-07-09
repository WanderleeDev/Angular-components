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
  'active-users':
    import('app/modules/components/cards/active-users/active-users').then(
      m => m.ActiveUsersCard
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
  isDoubleColumn: true,
};
