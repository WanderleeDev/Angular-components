import { ComponentsLoader, SectionMetadata } from './types';

export const OTHERS_LOADERS: ComponentsLoader = {
  'star-rating':
    import('app/modules/components/others/star-rating/star-rating').then(
      m => m.StarRating
    ),
  'date-picker':
    import('app/modules/components/others/native-picker/native-picker').then(
      m => m.NativePicker
    ),
} as const;

export const OTHER_METADATA: SectionMetadata = {
  title: 'others',
  icon: 'more_horiz',
  description:
    'Miscellaneous custom UI elements, interactive rating gauges, and sandbox testing components.',
  color: '#64748b',
  isMasonryLayout: true,
  filePaths: {
    'star-rating': {
      tailwind: {
        ts: 'assets/registry/others/star-rating/star-rating.ts',
        html: 'assets/registry/others/star-rating/star-rating.html',
      },
    },
    'native-picker': {
      tailwind: {
        ts: 'assets/registry/others/native-picker/native-picker.ts',
        html: 'assets/registry/others/native-picker/native-picker.html',
      },
    },
  },
};
