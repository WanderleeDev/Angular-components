import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withViewTransitions,
} from '@angular/router';
import { routes } from 'app/app.routes';

export const routerProviders = provideRouter(
  routes,
  withViewTransitions({
    skipInitialTransition: true,
  }),
  withInMemoryScrolling({ scrollPositionRestoration: 'enabled' }),
  withComponentInputBinding()
);
