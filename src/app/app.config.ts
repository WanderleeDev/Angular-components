import { provideThemeStack } from 'ngx-theme-stack';
import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import {
  provideClientHydration,
  withEventReplay,
  withIncrementalHydration,
} from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { highlightProviders } from '@config/providers/ngx-highlightjs';
import { routerProviders } from '@config/providers/router';

export const appConfig: ApplicationConfig = {
  providers: [
    routerProviders,
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay(), withIncrementalHydration()),
    provideHttpClient(withFetch()),
    highlightProviders,
    provideThemeStack({
      themes: [
        'system',
        'light',
        'dark',
        'angular',
        'nordic-light',
        'peach-blossom',
        'neo-mint',
        'cyberpunk-dark',
        'emerald-abyss',
        'brutalist-light',
        'brutalist-dark',
        'aero-light',
        'aero-dark',
        'pixel-light',
        'pixel-dark',
      ],
      defaultTheme: 'angular',
      storageKey: 'ngx-theme-stack',
      mode: 'class',
      strategy: 'critters',
    }),
  ],
};
