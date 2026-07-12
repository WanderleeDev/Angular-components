import { ComponentsLoader, SectionMetadata } from './types';

export const BLOCKS_LOADERS: ComponentsLoader = {
  'hero-banner':
    import('app/modules/components/blocks/hero-banner/hero-banner').then(
      m => m.HeroBanner
    ),
  accordion: import('app/modules/components/blocks/accordion/accordion').then(
    m => m.Accordion
  ),
  'timeline-block':
    import('app/modules/components/blocks/timeline-block/timeline-block').then(
      m => m.TimelineBlock
    ),
  'team-grid': import('app/modules/components/blocks/team-grid/team-grid').then(
    m => m.TeamGrid
  ),
  'tabs-showcase':
    import('app/modules/components/blocks/tabs-showcase/tabs-showcase').then(
      m => m.TabsShowcase
    ),
  'masonry-grid':
    import('app/modules/components/blocks/masonry-grid/masonry-grid').then(
      m => m.MasonryGrid
    ),
} as const;

export const BLOCK_METADATA: SectionMetadata = {
  title: 'blocks',
  icon: 'grid_view',
  description:
    'Versatile building blocks including comparison tables, FAQs, pricing grids, and statistics to construct complete pages.',
  color: '#10b981',
  filePaths: {
    'hero-banner': {
      css: {
        ts: 'assets/registry/blocks/hero-banner/css/hero-banner.ts',
        html: 'assets/registry/blocks/hero-banner/css/hero-banner.html',
        css: 'assets/registry/blocks/hero-banner/css/hero-banner.css',
      },
      tailwind: {
        ts: 'assets/registry/blocks/hero-banner/tailwind/hero-banner.ts',
        html: 'assets/registry/blocks/hero-banner/tailwind/hero-banner.html',
      },
    },
    accordion: {
      css: {
        ts: 'assets/registry/blocks/accordion/css/accordion.ts',
        html: 'assets/registry/blocks/accordion/css/accordion.html',
        css: 'assets/registry/blocks/accordion/css/accordion.css',
      },
      tailwind: {
        ts: 'assets/registry/blocks/accordion/tailwind/accordion.ts',
        html: 'assets/registry/blocks/accordion/tailwind/accordion.html',
      },
    },
    'timeline-block': {
      css: {
        ts: 'assets/registry/blocks/timeline-block/css/timeline-block.ts',
        html: 'assets/registry/blocks/timeline-block/css/timeline-block.html',
        css: 'assets/registry/blocks/timeline-block/css/timeline-block.css',
      },
      tailwind: {
        ts: 'assets/registry/blocks/timeline-block/tailwind/timeline-block.ts',
        html: 'assets/registry/blocks/timeline-block/tailwind/timeline-block.html',
      },
    },
    'team-grid': {
      css: {
        ts: 'assets/registry/blocks/team-grid/css/team-grid.ts',
        html: 'assets/registry/blocks/team-grid/css/team-grid.html',
        css: 'assets/registry/blocks/team-grid/css/team-grid.css',
      },
      tailwind: {
        ts: 'assets/registry/blocks/team-grid/tailwind/team-grid.ts',
        html: 'assets/registry/blocks/team-grid/tailwind/team-grid.html',
      },
    },
    'tabs-showcase': {
      css: {
        ts: 'assets/registry/blocks/tabs-showcase/css/tabs-showcase.ts',
        html: 'assets/registry/blocks/tabs-showcase/css/tabs-showcase.html',
        css: 'assets/registry/blocks/tabs-showcase/css/tabs-showcase.css',
      },
      tailwind: {
        ts: 'assets/registry/blocks/tabs-showcase/tailwind/tabs-showcase.ts',
        html: 'assets/registry/blocks/tabs-showcase/tailwind/tabs-showcase.html',
      },
    },
    'masonry-grid': {
      tailwind: {
        ts: 'assets/registry/blocks/masonry-grid/masonry-grid.ts',
        html: 'assets/registry/blocks/masonry-grid/masonry-grid.html',
      },
    },
  },
};
