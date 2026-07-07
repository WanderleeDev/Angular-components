import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services-view',
  imports: [RouterLink],
  template: `
    <div class="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center max-w-2xl mx-auto">
      <div class="w-16 h-16 rounded-2xl bg-app-accent/10 border border-app-accent/20 flex items-center justify-center text-[var(--category-accent)] mb-6 animate-pulse"
           style="--category-accent: #ef4444">
        <span class="material-icons text-3xl">build</span>
      </div>
      <h1 class="text-3xl font-extrabold tracking-tight font-krona bg-gradient-to-r from-app-accent to-purple-500 bg-clip-text text-transparent mb-4">
        Services
      </h1>
      <p class="text-app-text/60 text-sm md:text-base leading-relaxed mb-8">
        Assorted layout utilities, functional background helpers, and service wrapper containers.
      </p>
      <a
        routerLink="/catalog"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-app-accent/10 border border-app-accent/20 text-app-accent hover:bg-app-accent hover:text-white transition-all duration-200 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-app-accent/50 cursor-pointer">
        <span class="material-icons text-lg">arrow_back</span>
        Back to Catalog
      </a>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ServicesView {}
