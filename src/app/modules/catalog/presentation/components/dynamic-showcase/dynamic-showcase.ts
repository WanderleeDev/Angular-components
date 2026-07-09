import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  effect,
  Type,
} from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { COMPONENT_LOADERS } from 'app/modules/catalog/const/index';

@Component({
  selector: 'app-dynamic-showcase',
  imports: [NgComponentOutlet],
  template: `
    @if (loadedComponent(); as comp) {
      <ng-container *ngComponentOutlet="comp" />
    } @else if (error(); as err) {
      <div
        class="text-red-500 text-xs py-4 text-center border border-red-500/20 bg-red-500/5 rounded-xl">
        Error loading component: {{ err }}
      </div>
    } @else {
      <div
        class="w-full py-12 flex items-center justify-center text-app-text/40 gap-3">
        <div
          class="w-5 h-5 rounded-full border-2 border-app-accent/20 border-t-app-accent animate-spin"></div>
        <span class="text-sm font-semibold tracking-wide animate-pulse"
          >Loading component...</span
        >
      </div>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicShowcase {
  id = input.required<string>();
  loadedComponent = signal<Type<any> | null>(null);
  error = signal<string | null>(null);

  constructor() {
    effect(() => {
      const idVal = this.id();
      this.loadedComponent.set(null);
      this.error.set(null);

      const loader = COMPONENT_LOADERS[idVal];
      if (!loader) {
        this.error.set(`No loader registered for component ID: ${idVal}`);
        return;
      }

      loader()
        .then(comp => {
          this.loadedComponent.set(comp);
        })
        .catch(err => {
          console.error(err);
          this.error.set(err.message || 'Unknown error');
        });
    });
  }
}
