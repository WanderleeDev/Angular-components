import { ApplicationConfig } from '@angular/core';
import { InMemoryScrollingFeature, provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

const viewTransition = withViewTransitions({
  skipInitialTransition: true
});

const memoryScrolling: InMemoryScrollingFeature = withInMemoryScrolling({
  scrollPositionRestoration: 'enabled'
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      memoryScrolling,
      viewTransition
    ),
    provideClientHydration(),
    provideAnimations(),
]
};
