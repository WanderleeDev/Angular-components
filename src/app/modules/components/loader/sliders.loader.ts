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
} as const;

export const SLIDER_METADATA: SectionMetadata = {
  title: 'sliders',
  icon: 'tune',
  description:
    'Swipers, carousels, and dual-point slider controls engineered for highly interactive layouts.',
  color: '#10b981',
  isDoubleColumn: true,
};
