import { INavList } from 'app/interfaces/IDataCard.interface';

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
    cssFiles: ['columns-footer.ts', 'columns-footer.html', 'columns-footer.css'],
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
    id: 'interactive-list',
    name: 'Interactive List',
    description:
      'An interactive structured bulleted list detailing custom icons, label descriptions, and badge notifications (primary, success, warn) with scale transitions.',
    category: 'lists',
    icon: 'list',
    cssPath: 'interactive-list/css',
    cssFiles: ['interactive-list.ts', 'interactive-list.html', 'interactive-list.css'],
  },
  {
    id: 'description-list',
    name: 'Description List',
    description:
      'A structured term description list layout detailing description metadata items with customized grid borders, backgrounds, and hover highlights.',
    category: 'lists',
    icon: 'view_list',
    cssPath: 'description-list/css',
    cssFiles: ['description-list.ts', 'description-list.html', 'description-list.css'],
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
    cssFiles: ['timeline-block.ts', 'timeline-block.html', 'timeline-block.css'],
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
    cssFiles: ['comparison-table.ts', 'comparison-table.html', 'comparison-table.css'],
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
    cssFiles: ['testimonials-grid.ts', 'testimonials-grid.html', 'testimonials-grid.css'],
  },
  {
    id: 'feature-spotlight',
    name: 'Feature Spotlight',
    description:
      'A developer feature cards grid displaying spotlight radial glow highlights that dynamically track the mouse cursor.',
    category: 'blocks',
    icon: 'highlight',
    cssPath: 'feature-spotlight/css',
    cssFiles: ['feature-spotlight.ts', 'feature-spotlight.html', 'feature-spotlight.css'],
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
    cssFiles: ['onboarding-steps.ts', 'onboarding-steps.html', 'onboarding-steps.css'],
  },
  {
    id: 'partner-marquee',
    name: 'Partner Marquee',
    description:
      'An interactive grid of partner logo clouds featuring dynamic category filtering and detailed hover information boxes.',
    category: 'blocks',
    icon: 'handshake',
    cssPath: 'partner-marquee/css',
    cssFiles: ['partner-marquee.ts', 'partner-marquee.html', 'partner-marquee.css'],
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
