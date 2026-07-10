import { ComponentsLoader, SectionMetadata } from './types';

export const NAVBARS_LOADERS: ComponentsLoader = {
  'simple-navbar':
    import('app/modules/components/navbars/simple-navbar/simple-navbar').then(
      m => m.SimpleNavbar
    ),
  'tabs-navbar':
    import('app/modules/components/navbars/tabs-navbar/tabs-navbar').then(
      m => m.TabsNavbar
    ),
  'floating-navbar':
    import('app/modules/components/navbars/floating-navbar/floating-navbar').then(
      m => m.FloatingNavbar
    ),
  'search-navbar':
    import('app/modules/components/navbars/search-navbar/search-navbar').then(
      m => m.SearchNavbar
    ),
  'double-navbar':
    import('app/modules/components/navbars/double-navbar/double-navbar').then(
      m => m.DoubleNavbar
    ),
  'overlay-navbar':
    import('app/modules/components/navbars/overlay-navbar/overlay-navbar').then(
      m => m.OverlayNavbar
    ),
  'banner-navbar':
    import('app/modules/components/navbars/banner-navbar/banner-navbar').then(
      m => m.BannerNavbar
    ),
  'glass-navbar':
    import('app/modules/components/navbars/glass-navbar/glass-navbar').then(
      m => m.GlassNavbar
    ),
  'pill-navbar':
    import('app/modules/components/navbars/pill-navbar/pill-navbar').then(
      m => m.PillNavbar
    ),
  'centered-navbar':
    import('app/modules/components/navbars/centered-navbar/centered-navbar').then(
      m => m.CenteredNavbar
    ),
  'floating-sidebar':
    import('app/modules/components/navbars/floating-sidebar/floating-sidebar').then(
      m => m.FloatingSidebar
    ),
} as const;

export const NAVBAR_METADATA: SectionMetadata = {
  title: 'navbars',
  icon: 'menu',
  description:
    'Responsive header navigation menus, side navigations, and tab groups for application routing.',
  color: '#38bdf8',
  filePaths: {
    'simple-navbar': {
      css: {
        ts: 'assets/registry/navbars/simple-navbar/simple-navbar.ts',
        html: 'assets/registry/navbars/simple-navbar/simple-navbar.html',
        css: 'assets/registry/navbars/simple-navbar/simple-navbar.css',
      },
    },
    'tabs-navbar': {
      css: {
        ts: 'assets/registry/navbars/tabs-navbar/tabs-navbar.ts',
        html: 'assets/registry/navbars/tabs-navbar/tabs-navbar.html',
        css: 'assets/registry/navbars/tabs-navbar/tabs-navbar.css',
      },
    },
    'floating-navbar': {
      css: {
        ts: 'assets/registry/navbars/floating-navbar/floating-navbar.ts',
        html: 'assets/registry/navbars/floating-navbar/floating-navbar.html',
        css: 'assets/registry/navbars/floating-navbar/floating-navbar.css',
      },
    },
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
    'overlay-navbar': {
      css: {
        ts: 'assets/registry/navbars/overlay-navbar/overlay-navbar.ts',
        html: 'assets/registry/navbars/overlay-navbar/overlay-navbar.html',
        css: 'assets/registry/navbars/overlay-navbar/overlay-navbar.css',
      },
    },
    'banner-navbar': {
      css: {
        ts: 'assets/registry/navbars/banner-navbar/banner-navbar.ts',
        html: 'assets/registry/navbars/banner-navbar/banner-navbar.html',
        css: 'assets/registry/navbars/banner-navbar/banner-navbar.css',
      },
    },
    'glass-navbar': {
      css: {
        ts: 'assets/registry/navbars/glass-navbar/glass-navbar.ts',
        html: 'assets/registry/navbars/glass-navbar/glass-navbar.html',
        css: 'assets/registry/navbars/glass-navbar/glass-navbar.css',
      },
    },
    'pill-navbar': {
      css: {
        ts: 'assets/registry/navbars/pill-navbar/pill-navbar.ts',
        html: 'assets/registry/navbars/pill-navbar/pill-navbar.html',
        css: 'assets/registry/navbars/pill-navbar/pill-navbar.css',
      },
    },
    'centered-navbar': {
      css: {
        ts: 'assets/registry/navbars/centered-navbar/centered-navbar.ts',
        html: 'assets/registry/navbars/centered-navbar/centered-navbar.html',
        css: 'assets/registry/navbars/centered-navbar/centered-navbar.css',
      },
    },
    'floating-sidebar': {
      css: {
        ts: 'assets/registry/navbars/floating-sidebar/floating-sidebar.ts',
        html: 'assets/registry/navbars/floating-sidebar/floating-sidebar.html',
        css: 'assets/registry/navbars/floating-sidebar/floating-sidebar.css',
      },
    },
  },
};
