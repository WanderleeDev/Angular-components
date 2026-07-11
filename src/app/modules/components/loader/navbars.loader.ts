import { ComponentsLoader, SectionMetadata } from './types';

export const NAVBARS_LOADERS: ComponentsLoader = {
  'search-navbar':
    import('app/modules/components/navbars/search-navbar/search-navbar').then(
      m => m.SearchNavbar
    ),
  'double-navbar':
    import('app/modules/components/navbars/double-navbar/double-navbar').then(
      m => m.DoubleNavbar
    ),
  'banner-navbar':
    import('app/modules/components/navbars/banner-navbar/banner-navbar').then(
      m => m.BannerNavbar
    ),
} as const;

export const NAVBAR_METADATA: SectionMetadata = {
  title: 'navbars',
  icon: 'menu',
  description:
    'Responsive header navigation menus, side navigations, and tab groups for application routing.',
  color: '#38bdf8',
  filePaths: {
    'search-navbar': {
      css: {
        ts: 'assets/registry/navbars/search-navbar/search-navbar.ts',
        html: 'assets/registry/navbars/search-navbar/search-navbar.html',
        css: 'assets/registry/navbars/search-navbar/search-navbar.css',
      },
    },
    'double-navbar': {
      css: {
        ts: 'assets/registry/navbars/double-navbar/double-navbar.ts',
        html: 'assets/registry/navbars/double-navbar/double-navbar.html',
        css: 'assets/registry/navbars/double-navbar/double-navbar.css',
      },
    },
    'banner-navbar': {
      css: {
        ts: 'assets/registry/navbars/banner-navbar/banner-navbar.ts',
        html: 'assets/registry/navbars/banner-navbar/banner-navbar.html',
        css: 'assets/registry/navbars/banner-navbar/banner-navbar.css',
      },
    },
  },
};
