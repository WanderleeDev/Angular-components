import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { highlightProviders } from '@config/providers/ngx-highlightjs';
import { routerProviders } from '@config/providers/router';

export const appConfig: ApplicationConfig = {
  providers: [
    routerProviders,
    provideClientHydration(),
    provideHttpClient(withFetch()),
    highlightProviders,
  ],
};
