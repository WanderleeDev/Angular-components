import { Type } from '@angular/core';

export type ComponentsLoader = Readonly<Record<string, Promise<Type<unknown>>>>;

export type SectionMetadata = {
  title: string;
  icon: string;
  description: string;
  color: string;
  isDoubleColumn?: boolean;
};
