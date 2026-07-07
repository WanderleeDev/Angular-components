import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SimpleNavbar } from 'app/modules/components/navbars/simple-navbar/simple-navbar';
import { TabsNavbar } from 'app/modules/components/navbars/tabs-navbar/tabs-navbar';
import { Window } from 'app/modules/catalog/presentation/components/window/window';

@Component({
  selector: 'app-navbars-view',
  imports: [RouterLink, SimpleNavbar, TabsNavbar, Window],
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
        <!-- Simple Navbar Section -->
        <app-window
          nameComponent="Simple Navbar"
          cssPath="simple-navbar/css"
          [cssFiles]="[
            'simple-navbar.ts',
            'simple-navbar.html',
            'simple-navbar.css',
          ]">
          <app-simple-navbar />
        </app-window>

        <!-- Tabs Navbar Section -->
        <app-window
          nameComponent="Tabs Navbar"
          cssPath="tabs-navbar/css"
          [cssFiles]="[
            'tabs-navbar.ts',
            'tabs-navbar.html',
            'tabs-navbar.css',
          ]">
          <app-tabs-navbar />
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
export default class NavbarsView {}
