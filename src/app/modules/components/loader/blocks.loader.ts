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
};
