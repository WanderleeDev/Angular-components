import { ComponentsLoader, SectionMetadata } from './types';

export const HEADERS_LOADERS: ComponentsLoader = {
  'split-hero':
    import('app/modules/components/headers/split-hero/split-hero').then(
      m => m.SplitHero
    ),
} as const;

export const HEADER_METADATA: SectionMetadata = {
  title: 'headers',
  icon: 'view_day',
  description:
    'Hero sections and page headers to make a strong first impression with responsive layouts and call-to-actions.',
  color: '#8b5cf6',
  filePaths: {
    'split-hero': {
      css: {
        ts: 'assets/registry/headers/split-hero/css/split-hero.ts',
        html: 'assets/registry/headers/split-hero/css/split-hero.html',
        css: 'assets/registry/headers/split-hero/css/split-hero.css',
      },
      tailwind: {
        ts: 'assets/registry/headers/split-hero/tailwind/split-hero.ts',
        html: 'assets/registry/headers/split-hero/tailwind/split-hero.html',
      },
    },
  },
};
