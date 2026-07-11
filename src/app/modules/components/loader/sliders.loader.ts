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
  isResponsiveColumn: true,
  filePaths: {
    'range-slider': {
      css: {
        ts: 'assets/registry/sliders/range-slider/range-slider.ts',
        html: 'assets/registry/sliders/range-slider/range-slider.html',
        css: 'assets/registry/sliders/range-slider/range-slider.css',
      },
    },
    'dual-slider': {
      css: {
        ts: 'assets/registry/sliders/dual-slider/dual-slider.ts',
        html: 'assets/registry/sliders/dual-slider/dual-slider.html',
        css: 'assets/registry/sliders/dual-slider/dual-slider.css',
      },
    },
    'volume-slider': {
      css: {
        ts: 'assets/registry/sliders/volume-slider/volume-slider.ts',
        html: 'assets/registry/sliders/volume-slider/volume-slider.html',
        css: 'assets/registry/sliders/volume-slider/volume-slider.css',
      },
    },
    'circular-slider': {
      css: {
        ts: 'assets/registry/sliders/circular-slider/circular-slider.ts',
        html: 'assets/registry/sliders/circular-slider/circular-slider.html',
        css: 'assets/registry/sliders/circular-slider/circular-slider.css',
      },
    },
  },
};
