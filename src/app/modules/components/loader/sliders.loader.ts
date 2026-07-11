import { ComponentsLoader, SectionMetadata } from './types';

export const SLIDERS_LOADERS: ComponentsLoader = {
  'range-slider':
    import('app/modules/components/sliders/range-slider/range-slider').then(
      m => m.RangeSlider
    ),
  'dual-slider':
    import('app/modules/components/sliders/dual-slider/dual-slider').then(
      m => m.DualSlider
    ),
  'volume-slider':
    import('app/modules/components/sliders/volume-slider/volume-slider').then(
      m => m.VolumeSlider
    ),
  'circular-slider':
    import('app/modules/components/sliders/circular-slider/circular-slider').then(
      m => m.CircularSlider
    ),
} as const;

export const SLIDER_METADATA: SectionMetadata = {
  title: 'sliders',
  icon: 'tune',
  description:
    'Swipers, carousels, and dual-point slider controls engineered for highly interactive layouts.',
  color: '#10b981',
  isMasonryLayout: true,
  filePaths: {
    'range-slider': {
      css: {
        ts: 'assets/registry/sliders/range-slider/css/range-slider.ts',
        html: 'assets/registry/sliders/range-slider/css/range-slider.html',
        css: 'assets/registry/sliders/range-slider/css/range-slider.css',
      },
      tailwind: {
        ts: 'assets/registry/sliders/range-slider/tailwind/range-slider.ts',
        html: 'assets/registry/sliders/range-slider/tailwind/range-slider.html',
      },
    },
    'dual-slider': {
      css: {
        ts: 'assets/registry/sliders/dual-slider/css/dual-slider.ts',
        html: 'assets/registry/sliders/dual-slider/css/dual-slider.html',
        css: 'assets/registry/sliders/dual-slider/css/dual-slider.css',
      },
      tailwind: {
        ts: 'assets/registry/sliders/dual-slider/tailwind/dual-slider.ts',
        html: 'assets/registry/sliders/dual-slider/tailwind/dual-slider.html',
      },
    },
    'volume-slider': {
      css: {
        ts: 'assets/registry/sliders/volume-slider/css/volume-slider.ts',
        html: 'assets/registry/sliders/volume-slider/css/volume-slider.html',
        css: 'assets/registry/sliders/volume-slider/css/volume-slider.css',
      },
      tailwind: {
        ts: 'assets/registry/sliders/volume-slider/tailwind/volume-slider.ts',
        html: 'assets/registry/sliders/volume-slider/tailwind/volume-slider.html',
      },
    },
    'circular-slider': {
      css: {
        ts: 'assets/registry/sliders/circular-slider/css/circular-slider.ts',
        html: 'assets/registry/sliders/circular-slider/css/circular-slider.html',
        css: 'assets/registry/sliders/circular-slider/css/circular-slider.css',
      },
      tailwind: {
        ts: 'assets/registry/sliders/circular-slider/tailwind/circular-slider.ts',
        html: 'assets/registry/sliders/circular-slider/tailwind/circular-slider.html',
      },
    },
  },
};
