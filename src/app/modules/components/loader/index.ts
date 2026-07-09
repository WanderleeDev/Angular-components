import { NAVBARS_LOADERS, NAVBAR_METADATA } from './navbars.loader';
import { CARDS_LOADERS, CARD_METADATA } from './cards.loader';
import { SLIDERS_LOADERS, SLIDER_METADATA } from './sliders.loader';
import { FOOTERS_LOADERS, FOOTER_METADATA } from './footers.loader';
import { HEADERS_LOADERS, HEADER_METADATA } from './headers.loader';
import { LISTS_LOADERS, LIST_METADATA } from './lists.loader';
import { BLOCKS_LOADERS, BLOCK_METADATA } from './blocks.loader';
import { OTHERS_LOADERS, OTHER_METADATA } from './others.loader';
import { ComponentsLoader, SectionMetadata } from './types';
import { SERVICES_METADATA } from './services.loader';

export const ALL_LOADERS: Readonly<Record<string, ComponentsLoader>> = {
  navbars: NAVBARS_LOADERS,
  cards: CARDS_LOADERS,
  sliders: SLIDERS_LOADERS,
  footers: FOOTERS_LOADERS,
  headers: HEADERS_LOADERS,
  lists: LISTS_LOADERS,
  blocks: BLOCKS_LOADERS,
  others: OTHERS_LOADERS,
} as const;

export const ALL_METADATA: Readonly<Record<string, SectionMetadata>> = {
  navbars: NAVBAR_METADATA,
  cards: CARD_METADATA,
  sliders: SLIDER_METADATA,
  footers: FOOTER_METADATA,
  headers: HEADER_METADATA,
  lists: LIST_METADATA,
  services: SERVICES_METADATA,
  blocks: BLOCK_METADATA,
  others: OTHER_METADATA,
} as const;

export type Catalog = keyof typeof ALL_LOADERS;

export const categories: Catalog[] = Object.keys(ALL_LOADERS);
