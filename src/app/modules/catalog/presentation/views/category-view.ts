import { Component, computed, input, resource } from '@angular/core';
import { Catalog } from 'app/modules/components/loader';
import { getMetadataSection, pagination } from 'app/modules/shared/utils';
import { LoadingStateComponent } from 'app/modules/shared/presentation/components/loading-state/loading-state.component';
import { ErrorStateComponent } from 'app/modules/shared/presentation/components/error-state/error-state.component';
import { Window } from '../components/window/window';
import { NgComponentOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SectionMetadata } from 'app/modules/components/loader/types';

@Component({
  imports: [
    LoadingStateComponent,
    ErrorStateComponent,
    Window,
    NgComponentOutlet,
    RouterLink,
  ],
  templateUrl: './category-view.html',
})
export default class CategoryView {
  readonly categoryParam = input<string>('', {
    alias: 'category',
    transform: (value: unknown): string => {
      return typeof value !== 'string' ? '' : value.toLowerCase();
    },
  });

  readonly pageParam = input(1, {
    alias: 'page',
    transform: (v: unknown): number => {
      const n = Number(v);
      return Number.isFinite(n) && n >= 1 ? n : 1;
    },
  });

  readonly metadata = computed<SectionMetadata>(() =>
    getMetadataSection(this.categoryParam())
  );

  componets = resource({
    params: () => ({
      page: this.pageParam(),
      category: this.categoryParam(),
    }),
    loader: async ({ params: { category, page } }) => {
      const { components, ...rest } = pagination(category as Catalog, page);

      const resolved = await Promise.all(
        components.map(async ([name, componentPromise]) => {
          const compClass = await componentPromise;
          return { name, compClass };
        })
      );

      return {
        components: resolved,
        ...rest,
      };
    },
  });
}
