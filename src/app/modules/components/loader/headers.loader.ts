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
  filePaths: {
    'split-hero': {
      css: {
        ts: 'assets/registry/headers/split-hero/split-hero.ts',
        html: 'assets/registry/headers/split-hero/split-hero.html',
        css: 'assets/registry/headers/split-hero/split-hero.css',
      },
    },
    'centered-hero': {
      css: {
        ts: 'assets/registry/headers/centered-hero/centered-hero.ts',
        html: 'assets/registry/headers/centered-hero/centered-hero.html',
        css: 'assets/registry/headers/centered-hero/centered-hero.css',
      },
    },
    'glass-hero': {
      css: {
        ts: 'assets/registry/headers/glass-hero/glass-hero.ts',
        html: 'assets/registry/headers/glass-hero/glass-hero.html',
        css: 'assets/registry/headers/glass-hero/glass-hero.css',
      },
    },
    'newsletter-hero': {
      css: {
        ts: 'assets/registry/headers/newsletter-hero/newsletter-hero.ts',
        html: 'assets/registry/headers/newsletter-hero/newsletter-hero.html',
        css: 'assets/registry/headers/newsletter-hero/newsletter-hero.css',
      },
    },
    'feature-hero': {
      css: {
        ts: 'assets/registry/headers/feature-hero/feature-hero.ts',
        html: 'assets/registry/headers/feature-hero/feature-hero.html',
        css: 'assets/registry/headers/feature-hero/feature-hero.css',
      },
    },
  },
};
