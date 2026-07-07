import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SplitHero } from 'app/modules/components/headers/split-hero/split-hero';
import { CenteredHero } from 'app/modules/components/headers/centered-hero/centered-hero';
import { Window } from 'app/modules/catalog/presentation/components/window/window';

@Component({
  selector: 'app-headers-view',
  imports: [RouterLink, SplitHero, CenteredHero, Window],
  template: `
    <div class="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <!-- Header -->
      <header class="flex flex-col gap-2">
        <h1
          class="text-3xl font-extrabold tracking-tight font-krona bg-linear-to-r from-app-accent to-purple-500 bg-clip-text text-transparent">
          Headers
        </h1>
        <p
          class="text-app-text/60 max-w-2xl text-sm md:text-base leading-relaxed">
          Dynamic hero banners, introductory pages, and title grids utilizing rich text formats.
        </p>
      </header>

      <!-- Showcase Grid -->
      <div class="flex flex-col gap-8">
        <!-- Split Hero Section -->
        <app-window
          nameComponent="Split Hero"
          cssPath="split-hero/css"
          [cssFiles]="['split-hero.ts', 'split-hero.html', 'split-hero.css']">
          <div class="w-full py-4">
            <app-split-hero />
          </div>
        </app-window>

        <!-- Centered Hero Section -->
        <app-window
          nameComponent="Centered Hero"
          cssPath="centered-hero/css"
          [cssFiles]="['centered-hero.ts', 'centered-hero.html', 'centered-hero.css']">
          <div class="w-full py-4">
            <app-centered-hero />
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
export default class HeadersView {}
