import { ComponentsLoader, SectionMetadata } from './types';

export const HEADERS_LOADERS: ComponentsLoader = {
  'split-hero':
    import('app/modules/components/headers/split-hero/split-hero').then(
      m => m.SplitHero
    ),
  'centered-hero':
    import('app/modules/components/headers/centered-hero/centered-hero').then(
      m => m.CenteredHero
    ),
  'glass-hero':
    import('app/modules/components/headers/glass-hero/glass-hero').then(
      m => m.GlassHero
    ),
  'newsletter-hero':
    import('app/modules/components/headers/newsletter-hero/newsletter-hero').then(
      m => m.NewsletterHero
    ),
  'feature-hero':
    import('app/modules/components/headers/feature-hero/feature-hero').then(
      m => m.FeatureHero
    ),
} as const;

export const HEADER_METADATA: SectionMetadata = {
  title: 'headers',
  icon: 'view_headline',
  description:
    'Dynamic hero banners, introductory pages, and title grids utilizing rich text formats.',
  color: '#f59e0b',
};
