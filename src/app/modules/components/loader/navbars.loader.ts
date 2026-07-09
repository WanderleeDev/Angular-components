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
};
