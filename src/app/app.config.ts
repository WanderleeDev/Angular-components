import { ApplicationConfig } from '@angular/core';
import { ViewTransitionsFeature, provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

const viewTransition: ViewTransitionsFeature = withViewTransitions({
  skipInitialTransition: true,
  onViewTransitionCreated(transition) {
    console.log(transition);
  }
})

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      viewTransition
    ),
    provideClientHydration()
  ]
};
