import { ComponentsLoader, SectionMetadata } from './types';

export const BLOCKS_LOADERS: ComponentsLoader = {
  accordion: import('app/modules/components/blocks/accordion/accordion').then(
    m => m.Accordion
  ),
  'bento-grid':
    import('app/modules/components/blocks/bento-grid/bento-grid').then(
      m => m.BentoGrid
    ),
  'pricing-grid':
    import('app/modules/components/blocks/pricing-grid/pricing-grid').then(
      m => m.PricingGrid
    ),
  'timeline-block':
    import('app/modules/components/blocks/timeline-block/timeline-block').then(
      m => m.TimelineBlock
    ),
  'stats-grid':
    import('app/modules/components/blocks/stats-grid/stats-grid').then(
      m => m.StatsGrid
    ),
  'comparison-table':
    import('app/modules/components/blocks/comparison-table/comparison-table').then(
      m => m.ComparisonTable
    ),
  'tabs-showcase':
    import('app/modules/components/blocks/tabs-showcase/tabs-showcase').then(
      m => m.TabsShowcase
    ),
  'testimonials-grid':
    import('app/modules/components/blocks/testimonials-grid/testimonials-grid').then(
      m => m.TestimonialsGrid
    ),
  'feature-spotlight':
    import('app/modules/components/blocks/feature-spotlight/feature-spotlight').then(
      m => m.FeatureSpotlight
    ),
  'team-grid': import('app/modules/components/blocks/team-grid/team-grid').then(
    m => m.TeamGrid
  ),
  'faq-grid': import('app/modules/components/blocks/faq-grid/faq-grid').then(
    m => m.FAQGrid
  ),
  'profile-bento':
    import('app/modules/components/blocks/profile-bento/profile-bento').then(
      m => m.ProfileBento
    ),
  'onboarding-steps':
    import('app/modules/components/blocks/onboarding-steps/onboarding-steps').then(
      m => m.OnboardingSteps
    ),
  'partner-marquee':
    import('app/modules/components/blocks/partner-marquee/partner-marquee').then(
      m => m.PartnerMarquee
    ),
  'hero-banner':
    import('app/modules/components/blocks/hero-banner/hero-banner').then(
      m => m.HeroBanner
    ),
} as const;

export const BLOCK_METADATA: SectionMetadata = {
  title: 'blocks',
  icon: 'view_module',
  description: 'Custom UI blocks, grids, and layout elements.',
  color: '#14b8a6',
  filePaths: {
    accordion: {
      css: {
        ts: 'assets/registry/blocks/accordion/accordion.ts',
        html: 'assets/registry/blocks/accordion/accordion.html',
        css: 'assets/registry/blocks/accordion/accordion.css',
      },
    },
    'bento-grid': {
      css: {
        ts: 'assets/registry/blocks/bento-grid/bento-grid.ts',
        html: 'assets/registry/blocks/bento-grid/bento-grid.html',
        css: 'assets/registry/blocks/bento-grid/bento-grid.css',
      },
    },
    'pricing-grid': {
      css: {
        ts: 'assets/registry/blocks/pricing-grid/pricing-grid.ts',
        html: 'assets/registry/blocks/pricing-grid/pricing-grid.html',
        css: 'assets/registry/blocks/pricing-grid/pricing-grid.css',
      },
    },
    'timeline-block': {
      css: {
        ts: 'assets/registry/blocks/timeline-block/timeline-block.ts',
        html: 'assets/registry/blocks/timeline-block/timeline-block.html',
        css: 'assets/registry/blocks/timeline-block/timeline-block.css',
      },
    },
    'stats-grid': {
      css: {
        ts: 'assets/registry/blocks/stats-grid/stats-grid.ts',
        html: 'assets/registry/blocks/stats-grid/stats-grid.html',
        css: 'assets/registry/blocks/stats-grid/stats-grid.css',
      },
    },
    'comparison-table': {
      css: {
        ts: 'assets/registry/blocks/comparison-table/comparison-table.ts',
        html: 'assets/registry/blocks/comparison-table/comparison-table.html',
        css: 'assets/registry/blocks/comparison-table/comparison-table.css',
      },
    },
    'tabs-showcase': {
      css: {
        ts: 'assets/registry/blocks/tabs-showcase/tabs-showcase.ts',
        html: 'assets/registry/blocks/tabs-showcase/tabs-showcase.html',
        css: 'assets/registry/blocks/tabs-showcase/tabs-showcase.css',
      },
    },
    'testimonials-grid': {
      css: {
        ts: 'assets/registry/blocks/testimonials-grid/testimonials-grid.ts',
        html: 'assets/registry/blocks/testimonials-grid/testimonials-grid.html',
        css: 'assets/registry/blocks/testimonials-grid/testimonials-grid.css',
      },
    },
    'feature-spotlight': {
      css: {
        ts: 'assets/registry/blocks/feature-spotlight/feature-spotlight.ts',
        html: 'assets/registry/blocks/feature-spotlight/feature-spotlight.html',
        css: 'assets/registry/blocks/feature-spotlight/feature-spotlight.css',
      },
    },
    'team-grid': {
      css: {
        ts: 'assets/registry/blocks/team-grid/team-grid.ts',
        html: 'assets/registry/blocks/team-grid/team-grid.html',
        css: 'assets/registry/blocks/team-grid/team-grid.css',
      },
    },
    'faq-grid': {
      css: {
        ts: 'assets/registry/blocks/faq-grid/faq-grid.ts',
        html: 'assets/registry/blocks/faq-grid/faq-grid.html',
        css: 'assets/registry/blocks/faq-grid/faq-grid.css',
      },
    },
    'profile-bento': {
      css: {
        ts: 'assets/registry/blocks/profile-bento/profile-bento.ts',
        html: 'assets/registry/blocks/profile-bento/profile-bento.html',
        css: 'assets/registry/blocks/profile-bento/profile-bento.css',
      },
    },
    'onboarding-steps': {
      css: {
        ts: 'assets/registry/blocks/onboarding-steps/onboarding-steps.ts',
        html: 'assets/registry/blocks/onboarding-steps/onboarding-steps.html',
        css: 'assets/registry/blocks/onboarding-steps/onboarding-steps.css',
      },
    },
    'partner-marquee': {
      css: {
        ts: 'assets/registry/blocks/partner-marquee/partner-marquee.ts',
        html: 'assets/registry/blocks/partner-marquee/partner-marquee.html',
        css: 'assets/registry/blocks/partner-marquee/partner-marquee.css',
      },
    },
    'hero-banner': {
      css: {
        ts: 'assets/registry/blocks/hero-banner/hero-banner.ts',
        html: 'assets/registry/blocks/hero-banner/hero-banner.html',
        css: 'assets/registry/blocks/hero-banner/hero-banner.css',
      },
    },
  },
};
