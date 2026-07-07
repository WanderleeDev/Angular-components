import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SimpleFooter } from 'app/modules/components/footers/simple-footer/simple-footer';
import { ColumnsFooter } from 'app/modules/components/footers/columns-footer/columns-footer';
import { Window } from 'app/modules/catalog/presentation/components/window/window';

@Component({
  selector: 'app-footers-view',
  imports: [RouterLink, SimpleFooter, ColumnsFooter, Window],
  template: `
    <div class="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <!-- Header -->
      <header class="flex flex-col gap-2">
        <h1
          class="text-3xl font-extrabold tracking-tight font-krona bg-linear-to-r from-app-accent to-purple-500 bg-clip-text text-transparent">
          Footers
        </h1>
        <p
          class="text-app-text/60 max-w-2xl text-sm md:text-base leading-relaxed">
          Elegant and responsive footer sections configured with quick links, social lists, and badges.
        </p>
      </header>

      <!-- Showcase Grid -->
      <div class="flex flex-col gap-8">
        <!-- Simple Footer Section -->
        <app-window
          nameComponent="Simple Footer"
          cssPath="simple-footer/css"
          [cssFiles]="['simple-footer.ts', 'simple-footer.html', 'simple-footer.css']">
          <div class="w-full py-4">
            <app-simple-footer />
          </div>
        </app-window>

        <!-- Columns Footer Section -->
        <app-window
          nameComponent="Columns Footer"
          cssPath="columns-footer/css"
          [cssFiles]="['columns-footer.ts', 'columns-footer.html', 'columns-footer.css']">
          <div class="w-full py-4">
            <app-columns-footer />
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
export default class FootersView {}
