import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InteractiveList } from 'app/modules/components/lists/interactive-list/interactive-list';
import { DescriptionList } from 'app/modules/components/lists/description-list/description-list';
import { Window } from 'app/modules/catalog/presentation/components/window/window';

@Component({
  selector: 'app-lists-view',
  imports: [RouterLink, InteractiveList, DescriptionList, Window],
  template: `
    <div class="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <!-- Header -->
      <header class="flex flex-col gap-2">
        <h1
          class="text-3xl font-extrabold tracking-tight font-krona bg-linear-to-r from-app-accent to-purple-500 bg-clip-text text-transparent">
          Lists
        </h1>
        <p
          class="text-app-text/60 max-w-2xl text-sm md:text-base leading-relaxed">
          Highly optimized lists, hierarchical tree structures, and expandable panels for data listing.
        </p>
      </header>

      <!-- Showcase Grid -->
      <div class="grid gap-8 grid-cols-1 lg:grid-cols-2">
        <!-- Interactive List Section -->
        <app-window
          nameComponent="Interactive List"
          cssPath="interactive-list/css"
          [cssFiles]="[
            'interactive-list.ts',
            'interactive-list.html',
            'interactive-list.css',
          ]">
          <div class="w-full max-w-sm py-4">
            <app-interactive-list />
          </div>
        </app-window>

        <!-- Description List Section -->
        <app-window
          nameComponent="Description List"
          cssPath="description-list/css"
          [cssFiles]="[
            'description-list.ts',
            'description-list.html',
            'description-list.css',
          ]">
          <div class="w-full py-4">
            <app-description-list />
          </div>
        </app-window>
      </div>

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
export default class ListsView {}
