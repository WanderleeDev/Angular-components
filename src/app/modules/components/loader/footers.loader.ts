import { ComponentsLoader, SectionMetadata } from './types';

export const FOOTERS_LOADERS: ComponentsLoader = {
  'simple-footer':
    import('app/modules/components/footers/simple-footer/simple-footer').then(
      m => m.SimpleFooter
    ),
  'localized-footer':
    import('app/modules/components/footers/localized-footer/localized-footer').then(
      m => m.LocalizedFooter
    ),
} as const;

export const FOOTER_METADATA: SectionMetadata = {
  title: 'footers',
  icon: 'horizontal_rule',
  description:
    'Application footers ranging from simple copyright bars to complex bento-style layouts with localized links.',
  color: '#a855f7',
  filePaths: {
    'simple-footer': {
      css: {
        ts: 'assets/registry/footers/simple-footer/css/simple-footer.ts',
        html: 'assets/registry/footers/simple-footer/css/simple-footer.html',
        css: 'assets/registry/footers/simple-footer/css/simple-footer.css',
      },
      tailwind: {
        ts: 'assets/registry/footers/simple-footer/tailwind/simple-footer.ts',
        html: 'assets/registry/footers/simple-footer/tailwind/simple-footer.html',
      },
    },
    'localized-footer': {
      css: {
        ts: 'assets/registry/footers/localized-footer/css/localized-footer.ts',
        html: 'assets/registry/footers/localized-footer/css/localized-footer.html',
        css: 'assets/registry/footers/localized-footer/css/localized-footer.css',
      },
      tailwind: {
        ts: 'assets/registry/footers/localized-footer/tailwind/localized-footer.ts',
        html: 'assets/registry/footers/localized-footer/tailwind/localized-footer.html',
      },
    },
  },
};
