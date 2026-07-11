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
        ts: 'assets/registry/blocks/hero-banner/hero-banner.ts',
        html: 'assets/registry/blocks/hero-banner/hero-banner.html',
        css: 'assets/registry/blocks/hero-banner/hero-banner.css',
      },
    },
    accordion: {
      css: {
        ts: 'assets/registry/blocks/accordion/accordion.ts',
        html: 'assets/registry/blocks/accordion/accordion.html',
        css: 'assets/registry/blocks/accordion/accordion.css',
      },
    },
    'timeline-block': {
      css: {
        ts: 'assets/registry/blocks/timeline-block/timeline-block.ts',
        html: 'assets/registry/blocks/timeline-block/timeline-block.html',
        css: 'assets/registry/blocks/timeline-block/timeline-block.css',
      },
    },
    'team-grid': {
      css: {
        ts: 'assets/registry/blocks/team-grid/team-grid.ts',
        html: 'assets/registry/blocks/team-grid/team-grid.html',
        css: 'assets/registry/blocks/team-grid/team-grid.css',
      },
    },
    'tabs-showcase': {
      css: {
        ts: 'assets/registry/blocks/tabs-showcase/tabs-showcase.ts',
        html: 'assets/registry/blocks/tabs-showcase/tabs-showcase.html',
        css: 'assets/registry/blocks/tabs-showcase/tabs-showcase.css',
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
