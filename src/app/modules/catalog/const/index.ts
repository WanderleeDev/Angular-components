import { INavList } from 'app/interfaces/IDataCard.interface';
import { Type } from '@angular/core';

export interface RegistryComponent {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  tailwindPath?: string;
  tailwindFiles?: string[];
  cssPath?: string;
  cssFiles?: string[];
}

export const COMPONENTS_REGISTRY: RegistryComponent[] = [
  {
    id: 'category-card',
    name: 'Category Card',
    description:
      'An interactive content showcase card featuring a hover translation effect, radial gradient glow, and configurable badge, title, description, and action button.',
    category: 'cards',
    icon: 'view_agenda',
    cssPath: 'category-card/css',
    cssFiles: ['category-card.ts', 'category-card.html', 'category-card.css'],
  },
  {
    id: 'theme-card',
    name: 'Theme Card',
    description:
      'A customizable theme preview card showcasing a micro-UI preview, color swatches palette, state status, and active selection states.',
    category: 'cards',
    icon: 'palette',
    cssPath: 'theme-card/css',
    cssFiles: ['theme-card.ts', 'theme-card.html', 'theme-card.css'],
  },
  {
    id: 'active-users',
    name: 'Active Users Card',
    description:
      'A dashboard metric stats card showcasing user telemetry numbers, icon customisation, timeframe selection status, and visual trend sparklines.',
    category: 'cards',
    icon: 'people',
    cssPath: 'active-users/css',
    cssFiles: ['active-users.ts', 'active-users.html', 'active-users.css'],
  },
  {
    id: 'product-card',
    name: 'Interactive Product Card',
    description:
      'A customizable e-commerce product card featuring dynamic signal-based size and color selection, rating display, and animated cart interaction.',
    category: 'cards',
    icon: 'shopping_bag',
    cssPath: 'product-card/css',
    cssFiles: ['product-card.ts', 'product-card.html', 'product-card.css'],
  },
  {
    id: 'profile-card',
    name: 'Interactive Profile Card',
    description:
      'A premium glassmorphic user profile card featuring a live digital clock, dynamic followers telemetry, expertise tag highlights, and micro-animations.',
    category: 'cards',
    icon: 'badge',
    cssPath: 'profile-card/css',
    cssFiles: ['profile-card.ts', 'profile-card.html', 'profile-card.css'],
  },
  {
    id: 'simple-navbar',
    name: 'Simple Navbar',
    description:
      'A responsive header navigation menu with customizable logo, navigation links, hover effects, and full mobile menu dropdown integration.',
    category: 'navbars',
    icon: 'menu',
    cssPath: 'simple-navbar/css',
    cssFiles: ['simple-navbar.ts', 'simple-navbar.html', 'simple-navbar.css'],
  },
  {
    id: 'tabs-navbar',
    name: 'Tabs Navbar',
    description:
      'A modern segment header navigation utilizing segment tabs styling with a pill-indicator hover background transition and status badge indicator.',
    category: 'navbars',
    icon: 'tab',
    cssPath: 'tabs-navbar/css',
    cssFiles: ['tabs-navbar.ts', 'tabs-navbar.html', 'tabs-navbar.css'],
  },
  {
    id: 'floating-navbar',
    name: 'Floating Navbar',
    description:
      'A centered glassmorphic floating header layout with rounded active pill navigations and backdrop blur.',
    category: 'navbars',
    icon: 'tab_unselected',
    cssPath: 'floating-navbar/css',
    cssFiles: [
      'floating-navbar.ts',
      'floating-navbar.html',
      'floating-navbar.css',
    ],
  },
  {
    id: 'search-navbar',
    name: 'Search Navbar',
    description:
      'An e-commerce and search-focused navbar with profile dropdown icons, search bar layout, and item count badges.',
    category: 'navbars',
    icon: 'search',
    cssPath: 'search-navbar/css',
    cssFiles: ['search-navbar.ts', 'search-navbar.html', 'search-navbar.css'],
  },
  {
    id: 'double-navbar',
    name: 'Double Navbar',
    description:
      'A professional dual-row layout headers displaying secondary metadata links at the top and main navigation at the bottom.',
    category: 'navbars',
    icon: 'table_rows',
    cssPath: 'double-navbar/css',
    cssFiles: ['double-navbar.ts', 'double-navbar.html', 'double-navbar.css'],
  },
  {
    id: 'overlay-navbar',
    name: 'Overlay Navbar',
    description:
      'A minimal header layout with a fullscreen glassmorphic overlay menu triggered by a custom animated hamburger button.',
    category: 'navbars',
    icon: 'fullscreen',
    cssPath: 'overlay-navbar/css',
    cssFiles: [
      'overlay-navbar.ts',
      'overlay-navbar.html',
      'overlay-navbar.css',
    ],
  },
  {
    id: 'banner-navbar',
    name: 'Banner Navbar',
    description:
      'A top promotional announcement banner layout combined with a clean secondary responsive header navigation.',
    category: 'navbars',
    icon: 'assistant_navigation',
    cssPath: 'banner-navbar/css',
    cssFiles: ['banner-navbar.ts', 'banner-navbar.html', 'banner-navbar.css'],
  },
  {
    id: 'centered-navbar',
    name: 'Centered Navbar',
    description:
      'A centered branding logo layout with split navigation menus on the left and right sides and utility actions.',
    category: 'navbars',
    icon: 'center_focus_strong',
    cssPath: 'centered-navbar/css',
    cssFiles: [
      'centered-navbar.ts',
      'centered-navbar.html',
      'centered-navbar.css',
    ],
  },
  {
    id: 'floating-sidebar',
    name: 'Floating Sidebar',
    description:
      'A modern floating dashboard sidebar navigation mockup with vertical link lists, collapsible drawer controls, and active states.',
    category: 'navbars',
    icon: 'menu_open',
    cssPath: 'floating-sidebar/css',
    cssFiles: [
      'floating-sidebar.ts',
      'floating-sidebar.html',
      'floating-sidebar.css',
    ],
  },
  {
    id: 'range-slider',
    name: 'Range Slider',
    description:
      'An interactive signal-based range slider showcasing a live progress value display, customized linear track gradient, and min/max boundaries.',
    category: 'sliders',
    icon: 'tune',
    cssPath: 'range-slider/css',
    cssFiles: ['range-slider.ts', 'range-slider.html', 'range-slider.css'],
  },
  {
    id: 'dual-slider',
    name: 'Dual Slider',
    description:
      'An interactive dual-handle range selector for numeric ranges showcasing a styled background track and non-overlapping drag safety boundary inputs.',
    category: 'sliders',
    icon: 'swap_horiz',
    cssPath: 'dual-slider/css',
    cssFiles: ['dual-slider.ts', 'dual-slider.html', 'dual-slider.css'],
  },
  {
    id: 'simple-footer',
    name: 'Simple Footer',
    description:
      'A clean, responsive footer component presenting copyright text, customizable quick links list, and social icon buttons with hover transitions.',
    category: 'footers',
    icon: 'call_to_action',
    cssPath: 'simple-footer/css',
    cssFiles: ['simple-footer.ts', 'simple-footer.html', 'simple-footer.css'],
  },
  {
    id: 'columns-footer',
    name: 'Columns Footer',
    description:
      'A detailed multi-column footer displaying quick links lists, newsletter email subscription status, and brand metadata details.',
    category: 'footers',
    icon: 'view_column',
    cssPath: 'columns-footer/css',
    cssFiles: [
      'columns-footer.ts',
      'columns-footer.html',
      'columns-footer.css',
    ],
  },
  {
    id: 'newsletter-footer',
    name: 'Newsletter Footer',
    description:
      'A minimal responsive footer featuring a clean interactive newsletter subscription input field and visual social links.',
    category: 'footers',
    icon: 'mail_outline',
    cssPath: 'newsletter-footer/css',
    cssFiles: [
      'newsletter-footer.ts',
      'newsletter-footer.html',
      'newsletter-footer.css',
    ],
  },
  {
    id: 'bento-footer',
    name: 'Bento Grid Footer',
    description:
      'A structured bento-style footer detailing multi-column resource link lists and a dynamic platform uptime status indicator.',
    category: 'footers',
    icon: 'grid_on',
    cssPath: 'bento-footer/css',
    cssFiles: [
      'bento-footer.ts',
      'bento-footer.html',
      'bento-footer.css',
    ],
  },
  {
    id: 'localized-footer',
    name: 'Localized Footer',
    description:
      'An interactive platform footer featuring custom signal-based dropdown menus for currency and language select localization options.',
    category: 'footers',
    icon: 'public',
    cssPath: 'localized-footer/css',
    cssFiles: [
      'localized-footer.ts',
      'localized-footer.html',
      'localized-footer.css',
    ],
  },
  {
    id: 'split-hero',
    name: 'Split Hero',
    description:
      'A split-screen marketing hero header layout detailing animated badge taglines, primary/secondary CTA actions, and a glowing backdrop simulation.',
    category: 'headers',
    icon: 'view_headline',
    cssPath: 'split-hero/css',
    cssFiles: ['split-hero.ts', 'split-hero.html', 'split-hero.css'],
  },
  {
    id: 'centered-hero',
    name: 'Centered Hero',
    description:
      'A centered marketing landing hero section showcasing custom floating glow spheres, animated badges, and social proof logo rows.',
    category: 'headers',
    icon: 'vertical_align_center',
    cssPath: 'centered-hero/css',
    cssFiles: ['centered-hero.ts', 'centered-hero.html', 'centered-hero.css'],
  },
  {
    id: 'glass-hero',
    name: 'Glassmorphic Mockup Hero',
    description:
      'A high-end glassmorphic hero header showcasing decorative blur radial glow graphics and an animated code terminal simulation widget.',
    category: 'headers',
    icon: 'terminal',
    cssPath: 'glass-hero/css',
    cssFiles: [
      'glass-hero.ts',
      'glass-hero.html',
      'glass-hero.css',
    ],
  },
  {
    id: 'newsletter-hero',
    name: 'Newsletter Signup Hero',
    description:
      'A subscription-centric marketing landing page hero featuring a validation form with animated progress loading and success confirmation signals.',
    category: 'headers',
    icon: 'mark_email_read',
    cssPath: 'newsletter-hero/css',
    cssFiles: [
      'newsletter-hero.ts',
      'newsletter-hero.html',
      'newsletter-hero.css',
    ],
  },
  {
    id: 'feature-hero',
    name: 'Interactive Feature Hero',
    description:
      'A split-screen features landing hero header with a signal-based side tab list switcher toggling interactive product metric cards.',
    category: 'headers',
    icon: 'view_list',
    cssPath: 'feature-hero/css',
    cssFiles: [
      'feature-hero.ts',
      'feature-hero.html',
      'feature-hero.css',
    ],
  },
  {
    id: 'interactive-list',
    name: 'Interactive List',
    description:
      'An interactive structured bulleted list detailing custom icons, label descriptions, and badge notifications (primary, success, warn) with scale transitions.',
    category: 'lists',
    icon: 'list',
    cssPath: 'interactive-list/css',
    cssFiles: [
      'interactive-list.ts',
      'interactive-list.html',
      'interactive-list.css',
    ],
  },
  {
    id: 'description-list',
    name: 'Description List',
    description:
      'A structured term description list layout detailing description metadata items with customized grid borders, backgrounds, and hover highlights.',
    category: 'lists',
    icon: 'view_list',
    cssPath: 'description-list/css',
    cssFiles: [
      'description-list.ts',
      'description-list.html',
      'description-list.css',
    ],
  },
  {
    id: 'task-list',
    name: 'Interactive Task List',
    description:
      'An interactive checkable task checklist featuring dynamic completion states, priority badges, and reactively calculated counts using Signals.',
    category: 'lists',
    icon: 'rule',
    cssPath: 'task-list/css',
    cssFiles: [
      'task-list.ts',
      'task-list.html',
      'task-list.css',
    ],
  },
  {
    id: 'collapsible-list',
    name: 'Expandable Accordion List',
    description:
      'A collapsible accordion content list featuring smooth height grid transitions and interactive state selectors using Signals.',
    category: 'lists',
    icon: 'expand',
    cssPath: 'collapsible-list/css',
    cssFiles: [
      'collapsible-list.ts',
      'collapsible-list.html',
      'collapsible-list.css',
    ],
  },
  {
    id: 'star-rating',
    name: 'Star Rating',
    description:
      'An interactive star rating component with full accessibility, focus management, and readonly settings.',
    category: 'others',
    icon: 'star',
    tailwindPath: 'star-rating/tailwind',
    tailwindFiles: ['star-rating.ts', 'star-rating.html'],
    cssPath: 'star-rating/css',
    cssFiles: ['star-rating.ts', 'star-rating.html', 'star-rating.css'],
  },
  {
    id: 'date-picker',
    name: 'Native Picker',
    description:
      'A customizable native browser date, time, month, and color picker styled with tailwind or vanilla CSS.',
    category: 'others',
    icon: 'calendar_today',
    tailwindPath: 'native-picker/tailwind',
    tailwindFiles: ['native-picker.ts', 'native-picker.html'],
    cssPath: 'native-picker/css',
    cssFiles: ['native-picker.ts', 'native-picker.html', 'native-picker.css'],
  },
  {
    id: 'accordion',
    name: 'Accordion',
    description:
      'An expandable accordion panel component with customizable multi-open or exclusive-open settings.',
    category: 'blocks',
    icon: 'list',
    tailwindPath: 'accordion/tailwind',
    tailwindFiles: ['accordion.ts', 'accordion.html'],
    cssPath: 'accordion/css',
    cssFiles: ['accordion.ts', 'accordion.html', 'accordion.css'],
  },
  {
    id: 'bento-grid',
    name: 'Bento Grid',
    description:
      'An interactive grid layout inspired by bento boxes with live telemetry status, performance settings controls, and keyframe animations.',
    category: 'blocks',
    icon: 'dashboard',
    cssPath: 'bento-grid/css',
    cssFiles: ['bento-grid.ts', 'bento-grid.html', 'bento-grid.css'],
  },
  {
    id: 'pricing-grid',
    name: 'Pricing Grid',
    description:
      'An interactive SaaS pricing grid featuring a sliding billing cycle toggle (Monthly/Yearly) with dynamic price calculation and highlighted popular plan cards.',
    category: 'blocks',
    icon: 'credit_card',
    cssPath: 'pricing-grid/css',
    cssFiles: ['pricing-grid.ts', 'pricing-grid.html', 'pricing-grid.css'],
  },
  {
    id: 'timeline-block',
    name: 'Timeline Block',
    description:
      'An interactive vertical and horizontal roadmap timeline with filter buttons for milestone statuses.',
    category: 'blocks',
    icon: 'route',
    cssPath: 'timeline-block/css',
    cssFiles: [
      'timeline-block.ts',
      'timeline-block.html',
      'timeline-block.css',
    ],
  },
  {
    id: 'stats-grid',
    name: 'Stats Grid',
    description:
      'An analytics metric dashboard grid showcasing user stats and real-time API telemetry logs with inline SVG sparkline graph trends.',
    category: 'blocks',
    icon: 'trending_up',
    cssPath: 'stats-grid/css',
    cssFiles: ['stats-grid.ts', 'stats-grid.html', 'stats-grid.css'],
  },
  {
    id: 'comparison-table',
    name: 'Comparison Table',
    description:
      'A side-by-side SaaS feature comparison table with a show differences only toggle, category groups, and checkmark SVGs.',
    category: 'blocks',
    icon: 'table_chart',
    cssPath: 'comparison-table/css',
    cssFiles: [
      'comparison-table.ts',
      'comparison-table.html',
      'comparison-table.css',
    ],
  },
  {
    id: 'tabs-showcase',
    name: 'Tabs Showcase',
    description:
      'An interactive horizontal tab navigator switching between detail panels with custom list checks and fade animation effects.',
    category: 'blocks',
    icon: 'tab',
    cssPath: 'tabs-showcase/css',
    cssFiles: ['tabs-showcase.ts', 'tabs-showcase.html', 'tabs-showcase.css'],
  },
  {
    id: 'testimonials-grid',
    name: 'Testimonials Grid',
    description:
      'A bento-style feedback grid of client testimonials with star ratings, avatar frames, and featured card highlights.',
    category: 'blocks',
    icon: 'format_quote',
    cssPath: 'testimonials-grid/css',
    cssFiles: [
      'testimonials-grid.ts',
      'testimonials-grid.html',
      'testimonials-grid.css',
    ],
  },
  {
    id: 'feature-spotlight',
    name: 'Feature Spotlight',
    description:
      'A developer feature cards grid displaying spotlight radial glow highlights that dynamically track the mouse cursor.',
    category: 'blocks',
    icon: 'highlight',
    cssPath: 'feature-spotlight/css',
    cssFiles: [
      'feature-spotlight.ts',
      'feature-spotlight.html',
      'feature-spotlight.css',
    ],
  },
  {
    id: 'team-grid',
    name: 'Team Grid',
    description:
      'Meet the team cards grid featuring avatar animations, social icons, and interactive biography detail popup modals.',
    category: 'blocks',
    icon: 'groups',
    cssPath: 'team-grid/css',
    cssFiles: ['team-grid.ts', 'team-grid.html', 'team-grid.css'],
  },
  {
    id: 'faq-grid',
    name: 'FAQ Grid',
    description:
      'A responsive grid layout of FAQs with smooth expanding accordion panels powered by height grid transitions.',
    category: 'blocks',
    icon: 'help_outline',
    cssPath: 'faq-grid/css',
    cssFiles: ['faq-grid.ts', 'faq-grid.html', 'faq-grid.css'],
  },
  {
    id: 'profile-bento',
    name: 'Profile Bento',
    description:
      'A personal profile grid incorporating widget-style blocks, technical badges, social icons, and a live ticking local clock.',
    category: 'blocks',
    icon: 'portrait',
    cssPath: 'profile-bento/css',
    cssFiles: ['profile-bento.ts', 'profile-bento.html', 'profile-bento.css'],
  },
  {
    id: 'onboarding-steps',
    name: 'Onboarding Steps',
    description:
      'An interactive wizard progress step indicator navigating through process panels with animated completion nodes.',
    category: 'blocks',
    icon: 'smart_toy',
    cssPath: 'onboarding-steps/css',
    cssFiles: [
      'onboarding-steps.ts',
      'onboarding-steps.html',
      'onboarding-steps.css',
    ],
  },
  {
    id: 'partner-marquee',
    name: 'Partner Marquee',
    description:
      'An interactive grid of partner logo clouds featuring dynamic category filtering and detailed hover information boxes.',
    category: 'blocks',
    icon: 'handshake',
    cssPath: 'partner-marquee/css',
    cssFiles: [
      'partner-marquee.ts',
      'partner-marquee.html',
      'partner-marquee.css',
    ],
  },
  {
    id: 'hero-banner',
    name: 'Hero Banner',
    description:
      'A modern split hero banner displaying title actions, ticking request counters, and a floating code compiler window.',
    category: 'blocks',
    icon: 'view_quilt',
    cssPath: 'hero-banner/css',
    cssFiles: ['hero-banner.ts', 'hero-banner.html', 'hero-banner.css'],
  },
];

const RAW_COMPONENTS_DATA: Omit<INavList, 'numberComponents'>[] = [
  {
    title: 'navbars',
    icon: 'menu',
    description:
      'Responsive header navigation menus, side navigations, and tab groups for application routing.',
    color: '#38bdf8',
  },
  {
    title: 'cards',
    icon: 'view_agenda',
    description:
      'Flexible content grouping blocks and bento cards with customizable layouts, imagery, and footers.',
    color: '#ec4899',
  },
  {
    title: 'sliders',
    icon: 'tune',
    description:
      'Swipers, carousels, and dual-point slider controls engineered for highly interactive layouts.',
    color: '#10b981',
  },
  {
    title: 'footers',
    icon: 'call_to_action',
    description:
      'Elegant and responsive footer sections configured with quick links, social lists, and badges.',
    color: '#8b5cf6',
  },
  {
    title: 'headers',
    icon: 'view_headline',
    description:
      'Dynamic hero banners, introductory pages, and title grids utilizing rich text formats.',
    color: '#f59e0b',
  },
  {
    title: 'lists',
    icon: 'list',
    description:
      'Highly optimized lists, hierarchical tree structures, and expandable panels for data listing.',
    color: '#06b6d4',
  },
  {
    title: 'services',
    icon: 'build',
    description:
      'Assorted layout utilities, functional background helpers, and service wrapper containers.',
    color: '#ef4444',
  },
  {
    title: 'blocks',
    icon: 'view_module',
    description: 'Custom UI blocks, grids, and layout elements.',
    color: '#14b8a6',
  },
  {
    title: 'others',
    icon: 'more_horiz',
    description:
      'Miscellaneous custom UI elements, interactive rating gauges, and sandbox testing components.',
    color: '#64748b',
  },
];

export const COMPONENTS_DATA: INavList[] = RAW_COMPONENTS_DATA.map(item => ({
  ...item,
  numberComponents: COMPONENTS_REGISTRY.filter(c => c.category === item.title)
    .length,
}));

export const DEFAULT_PAGE_SIZE = 4;

export const COMPONENT_LOADERS: Record<string, () => Promise<Type<unknown>>> = {
  'simple-navbar': () =>
    import('app/modules/components/navbars/simple-navbar/simple-navbar').then(
      m => m.SimpleNavbar
    ),
  'tabs-navbar': () =>
    import('app/modules/components/navbars/tabs-navbar/tabs-navbar').then(
      m => m.TabsNavbar
    ),
  'floating-navbar': () =>
    import('app/modules/components/navbars/floating-navbar/floating-navbar').then(
      m => m.FloatingNavbar
    ),
  'search-navbar': () =>
    import('app/modules/components/navbars/search-navbar/search-navbar').then(
      m => m.SearchNavbar
    ),
  'double-navbar': () =>
    import('app/modules/components/navbars/double-navbar/double-navbar').then(
      m => m.DoubleNavbar
    ),
  'overlay-navbar': () =>
    import('app/modules/components/navbars/overlay-navbar/overlay-navbar').then(
      m => m.OverlayNavbar
    ),
  'banner-navbar': () =>
    import('app/modules/components/navbars/banner-navbar/banner-navbar').then(
      m => m.BannerNavbar
    ),
  'centered-navbar': () =>
    import('app/modules/components/navbars/centered-navbar/centered-navbar').then(
      m => m.CenteredNavbar
    ),
  'floating-sidebar': () =>
    import('app/modules/components/navbars/floating-sidebar/floating-sidebar').then(
      m => m.FloatingSidebar
    ),
};

export function getPagesForCategory(category: string, pageSize: number = DEFAULT_PAGE_SIZE): number {
  const count = COMPONENTS_REGISTRY.filter(c => c.category === category).length;
  return Math.ceil(count / pageSize);
}

export function getPrerenderPagesForCategory(category: string, pageSize: number = DEFAULT_PAGE_SIZE): Array<{ page: string }> {
  const pages = getPagesForCategory(category, pageSize);
  const params = [];
  for (let i = 1; i <= pages; i++) {
    params.push({ page: i.toString() });
  }
  return params;
}
