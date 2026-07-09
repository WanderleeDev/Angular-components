import { ComponentsLoader, SectionMetadata } from './types';

export const FOOTERS_LOADERS: ComponentsLoader = {
  'simple-footer':
    import('app/modules/components/footers/simple-footer/simple-footer').then(
      m => m.SimpleFooter
    ),
  'columns-footer':
    import('app/modules/components/footers/columns-footer/columns-footer').then(
      m => m.ColumnsFooter
    ),
  'newsletter-footer':
    import('app/modules/components/footers/newsletter-footer/newsletter-footer').then(
      m => m.NewsletterFooter
    ),
  'bento-footer':
    import('app/modules/components/footers/bento-footer/bento-footer').then(
      m => m.BentoFooter
    ),
  'localized-footer':
    import('app/modules/components/footers/localized-footer/localized-footer').then(
      m => m.LocalizedFooter
    ),
} as const;

export const FOOTER_METADATA: SectionMetadata = {
  title: 'footers',
  icon: 'call_to_action',
  description:
    'Elegant and responsive footer sections configured with quick links, social lists, and badges.',
  color: '#8b5cf6',
};
