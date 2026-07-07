import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RangeSlider } from 'app/modules/components/sliders/range-slider/range-slider';
import { DualSlider } from 'app/modules/components/sliders/dual-slider/dual-slider';
import { Window } from 'app/modules/catalog/presentation/components/window/window';

@Component({
  selector: 'app-sliders-view',
  imports: [RouterLink, RangeSlider, DualSlider, Window],
  template: `
    <div class="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <!-- Header -->
      <header class="flex flex-col gap-2">
        <h1
          class="text-3xl font-extrabold tracking-tight font-krona bg-linear-to-r from-app-accent to-purple-500 bg-clip-text text-transparent">
          Sliders
        </h1>
        <p
          class="text-app-text/60 max-w-2xl text-sm md:text-base leading-relaxed">
          Swipers, carousels, and dual-point slider controls engineered for highly interactive layouts.
        </p>
      </header>

      <!-- Showcase Grid -->
      <div class="grid gap-8 grid-cols-1 lg:grid-cols-2">
        <!-- Range Slider Section -->
        <app-window
          nameComponent="Range Slider"
          cssPath="range-slider/css"
          [cssFiles]="['range-slider.ts', 'range-slider.html', 'range-slider.css']">
          <div class="w-full max-w-sm py-4">
            <app-range-slider />
          </div>
        </app-window>

        <!-- Dual Slider Section -->
        <app-window
          nameComponent="Dual Slider"
          cssPath="dual-slider/css"
          [cssFiles]="['dual-slider.ts', 'dual-slider.html', 'dual-slider.css']">
          <div class="w-full max-w-sm py-4">
            <app-dual-slider />
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
export default class SlidersView {}
