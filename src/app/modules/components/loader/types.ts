import { Type } from '@angular/core';

export type ComponentsLoader = Readonly<Record<string, Promise<Type<unknown>>>>;

export type Paths = {
  ts: string;
  html: string;
  css?: string;
};

export type TailwindPaths = Paths & { css?: never };
export type CssPaths = Paths & { css: string };

export type PathToFile = {
  css?: CssPaths;
  tailwind?: TailwindPaths;
};

export type SectionMetadata = {
  title: string;
  icon: string;
  description: string;
  color: string;
  isMasonryLayout?: boolean;
  filePaths?: Partial<Record<string, PathToFile>>;
};

export type NavList = {
  title: string;
  numberComponents: number;
  icon: string;
  description: string;
  color: string;
};
