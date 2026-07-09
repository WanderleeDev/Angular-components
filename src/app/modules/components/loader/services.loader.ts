import { ComponentsLoader, SectionMetadata } from './types';

export const SERVICES_LOADERS: ComponentsLoader = {} as const;

export const SERVICES_METADATA: SectionMetadata = {
  title: 'services',
  icon: 'build',
  description: 'A collection of services for use in applications.',
  color: '#64748b',
};
