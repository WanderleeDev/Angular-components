import {
  Component,
  computed,
  inject,
  Injector,
  input,
  resource,
} from '@angular/core';
import { Catalog } from 'app/modules/components/loader';
import { getMetadataSection, pagination } from 'app/modules/shared/utils';
import { LoadingStateComponent } from 'app/modules/shared/presentation/components/loading-state/loading-state.component';
import { ErrorStateComponent } from 'app/modules/shared/presentation/components/error-state/error-state.component';
import { Window } from '../components/window/window';
import { NgComponentOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Paths, SectionMetadata } from 'app/modules/components/loader/types';
import { BtnBaseComponent } from 'app/modules/shared/presentation/components/btn-base/btn-base.component';
import { TailwindIcon } from 'app/modules/shared/presentation/components/icons/tailwind-icon.component';
import { CssIcon } from 'app/modules/shared/presentation/components/icons/css-icon.component';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  MODAL_CODE_DATA,
  ModalCodeComponent,
} from '../components/modal-code/modal-code.component';

@Component({
  imports: [
    LoadingStateComponent,
    ErrorStateComponent,
    Window,
    NgComponentOutlet,
    RouterLink,
    BtnBaseComponent,
    TailwindIcon,
    CssIcon,
    OverlayModule,
  ],
  templateUrl: './category-view.html',
})
export default class CategoryView {
  #overlay = inject(Overlay);

  #injector = inject(Injector);

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

  components = resource({
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

  showCodeModal(paths: Paths) {
    const overlayRef = this.#overlay.create({
      hasBackdrop: true,
      scrollStrategy: this.#overlay.scrollStrategies.block(),
      backdropClass: ['backdrop-blur-sm', 'bg-app-bg/50'],
      positionStrategy: this.#overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });

    const injector = Injector.create({
      providers: [
        { provide: MODAL_CODE_DATA, useValue: paths },
        { provide: OverlayRef, useValue: overlayRef },
      ],
      parent: this.#injector,
    });

    const dialogPortal = new ComponentPortal(
      ModalCodeComponent,
      null,
      injector
    );

    overlayRef.attach(dialogPortal);
    overlayRef.backdropClick().subscribe(() => overlayRef.dispose());
  }
}
