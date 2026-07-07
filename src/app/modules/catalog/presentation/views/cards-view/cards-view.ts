import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryCardComp } from 'app/modules/components/cards/category-card/category-card';
import { ThemeCardComp } from 'app/modules/components/cards/theme-card/theme-card';
import { ActiveUsersCard } from 'app/modules/components/cards/active-users/active-users';
import { Window } from 'app/modules/catalog/presentation/components/window/window';

@Component({
  selector: 'app-cards-view',
  imports: [
    RouterLink,
    CategoryCardComp,
    ThemeCardComp,
    ActiveUsersCard,
    Window,
  ],
  template: `
    <div class="flex flex-col gap-8 max-w-7xl mx-auto w-full">
      <!-- Header -->
      <header class="flex flex-col gap-2">
        <h1
          class="text-3xl font-extrabold tracking-tight font-krona bg-linear-to-r from-app-accent to-purple-500 bg-clip-text text-transparent">
          Cards
        </h1>
        <p
          class="text-app-text/60 max-w-2xl text-sm md:text-base leading-relaxed">
          Flexible content grouping blocks and bento cards with customizable layouts, imagery, and footers.
        </p>
      </header>

      <!-- Showcase Grid -->
      <div class="grid gap-8 grid-cols-1 lg:grid-cols-2">
        <!-- Category Card Section -->
        <app-window
          nameComponent="Category Card"
          cssPath="category-card/css"
          [cssFiles]="[
            'category-card.ts',
            'category-card.html',
            'category-card.css',
          ]">
          <div class="w-full max-w-sm py-4">
            <app-category-card-comp />
          </div>
        </app-window>

        <!-- Theme Card Section -->
        <app-window
          nameComponent="Theme Card"
          cssPath="theme-card/css"
          [cssFiles]="['theme-card.ts', 'theme-card.html', 'theme-card.css']">
          <div class="w-full max-w-sm py-4">
            <app-theme-card-comp [isActive]="true" buttonText="Applied" />
          </div>
        </app-window>

        <!-- Active Users Card Section -->
        <app-window
          nameComponent="Active Users Card"
          cssPath="active-users/css"
          [cssFiles]="[
            'active-users.ts',
            'active-users.html',
            'active-users.css',
          ]">
          <div class="w-full max-w-sm py-4">
            <app-active-users-card />
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
export default class CardsView {}
