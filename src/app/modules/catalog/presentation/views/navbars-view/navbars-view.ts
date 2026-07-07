import { ChangeDetectionStrategy, Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Window } from 'app/modules/catalog/presentation/components/window/window';
import { DynamicShowcase } from 'app/modules/catalog/presentation/components/dynamic-showcase/dynamic-showcase';
import { COMPONENTS_REGISTRY } from 'app/modules/catalog/const/index';

@Component({
  selector: 'app-navbars-view',
  imports: [RouterLink, Window, DynamicShowcase],
  template: `
    <div class="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <!-- Header -->
      <header class="flex flex-col gap-2">
        <h1
          class="text-3xl font-extrabold tracking-tight font-krona bg-linear-to-r from-app-accent to-purple-500 bg-clip-text text-transparent">
          Navbars
        </h1>
        <p
          class="text-app-text/60 max-w-2xl text-sm md:text-base leading-relaxed">
          Responsive header navigation menus, side navigations, and tab groups
          for application routing.
        </p>
      </header>

      <!-- Showcase Grid -->
      <div class="flex flex-col gap-8">
        @for (comp of activeComponents(); track comp.id) {
        <app-window
          [nameComponent]="comp.name"
          [cssPath]="comp.cssPath"
          [cssFiles]="comp.cssFiles"
          [tailwindPath]="comp.tailwindPath"
          [tailwindFiles]="comp.tailwindFiles">
          <app-dynamic-showcase [id]="comp.id" />
        </app-window>
        }
      </div>

      <!-- Pagination Controls -->
      @if (totalPages() > 1) {
      <div class="flex items-center justify-between px-6 py-4 bg-app-card border border-app-border rounded-xl">
        <button
          (click)="prevPage()"
          [disabled]="page() === 1"
          class="flex items-center gap-1 px-4 py-2 rounded-lg bg-app-accent/10 border border-app-accent/20 text-app-accent hover:bg-app-accent hover:text-white disabled:opacity-40 disabled:hover:bg-app-accent/10 disabled:hover:text-app-accent transition-all duration-200 text-sm font-semibold cursor-pointer">
          <span class="material-icons text-sm">chevron_left</span>
          Prev
        </button>
        <span class="text-sm font-bold text-app-text/70">
          Page {{ page() }} of {{ totalPages() }}
        </span>
        <button
          (click)="nextPage()"
          [disabled]="page() === totalPages()"
          class="flex items-center gap-1 px-4 py-2 rounded-lg bg-app-accent/10 border border-app-accent/20 text-app-accent hover:bg-app-accent hover:text-white disabled:opacity-40 disabled:hover:bg-app-accent/10 disabled:hover:text-app-accent transition-all duration-200 text-sm font-semibold cursor-pointer">
          Next
          <span class="material-icons text-sm">chevron_right</span>
        </button>
      </div>
      }

      <!-- Back to Catalog Link -->
      <div class="flex justify-start">
        <a
          routerLink="/catalog"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-app-accent/10 border border-app-accent/20 text-app-accent hover:bg-app-accent hover:text-white transition-all duration-200 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-app-accent/50 cursor-pointer">
          <span class="material-icons text-lg">arrow_back</span>
          Back to Catalog
        </a>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NavbarsView {
  protected page = signal(1);
  protected pageSize = 1;

  protected categoryComponents = computed(() =>
    COMPONENTS_REGISTRY.filter(c => c.category === 'navbars')
  );

  protected activeComponents = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.categoryComponents().slice(start, start + this.pageSize);
  });

  protected totalPages = computed(() =>
    Math.ceil(this.categoryComponents().length / this.pageSize)
  );

  protected nextPage(): void {
    if (this.page() < this.totalPages()) {
      this.page.update(p => p + 1);
    }
  }

  protected prevPage(): void {
    if (this.page() > 1) {
      this.page.update(p => p - 1);
    }
  }
}
