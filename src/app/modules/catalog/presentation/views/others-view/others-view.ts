import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarRating } from 'app/modules/components/others/star-rating/star-rating';
import { NativePicker } from 'app/modules/components/others/native-picker/native-picker';
import { Window } from 'app/modules/catalog/presentation/components/window/window';

@Component({
  selector: 'app-others-view',
  imports: [RouterLink, StarRating, NativePicker, Window],
  template: `
    <div class="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <!-- Header -->
      <header class="flex flex-col gap-2">
        <h1
          class="text-3xl font-extrabold tracking-tight font-krona bg-linear-to-r from-app-accent to-purple-500 bg-clip-text text-transparent">
          Others
        </h1>
        <p
          class="text-app-text/60 max-w-2xl text-sm md:text-base leading-relaxed">
          Miscellaneous custom UI elements, interactive rating gauges, and sandbox testing components.
        </p>
      </header>

      <!-- Showcase Grid -->
      <div class="grid gap-8 grid-cols-1 lg:grid-cols-2">
        <!-- Star Rating Section -->
        <app-window
          nameComponent="Star Rating"
          cssPath="star-rating/css"
          [cssFiles]="['star-rating.ts', 'star-rating.html', 'star-rating.css']">
          <div class="w-full max-w-sm py-4">
            <app-star-rating />
          </div>
        </app-window>

        <!-- Native Picker Section -->
        <app-window
          nameComponent="Native Picker"
          cssPath="native-picker/css"
          [cssFiles]="[
            'native-picker.ts',
            'native-picker.html',
            'native-picker.css',
          ]">
          <div class="w-full max-w-sm py-4">
            <app-native-picker />
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
export default class OthersView {}
