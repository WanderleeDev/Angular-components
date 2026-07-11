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
        ts: 'assets/registry/navbars/search-navbar/css/search-navbar.ts',
        html: 'assets/registry/navbars/search-navbar/css/search-navbar.html',
        css: 'assets/registry/navbars/search-navbar/css/search-navbar.css',
      },
      tailwind: {
        ts: 'assets/registry/navbars/search-navbar/tailwind/search-navbar.ts',
        html: 'assets/registry/navbars/search-navbar/tailwind/search-navbar.html',
      },
    },
    'double-navbar': {
      css: {
        ts: 'assets/registry/navbars/double-navbar/css/double-navbar.ts',
        html: 'assets/registry/navbars/double-navbar/css/double-navbar.html',
        css: 'assets/registry/navbars/double-navbar/css/double-navbar.css',
      },
      tailwind: {
        ts: 'assets/registry/navbars/double-navbar/tailwind/double-navbar.ts',
        html: 'assets/registry/navbars/double-navbar/tailwind/double-navbar.html',
      },
    },
    'banner-navbar': {
      css: {
        ts: 'assets/registry/navbars/banner-navbar/css/banner-navbar.ts',
        html: 'assets/registry/navbars/banner-navbar/css/banner-navbar.html',
        css: 'assets/registry/navbars/banner-navbar/css/banner-navbar.css',
      },
      tailwind: {
        ts: 'assets/registry/navbars/banner-navbar/tailwind/banner-navbar.ts',
        html: 'assets/registry/navbars/banner-navbar/tailwind/banner-navbar.html',
      },
    },
  },
};
