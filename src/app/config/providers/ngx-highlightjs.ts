import { Provider } from '@angular/core';
import { provideHighlightOptions } from 'ngx-highlightjs';
import { provideGistOptions } from 'ngx-highlightjs/plus';

export const highlightProviders: Provider[][] = [
  provideHighlightOptions({
    coreLibraryLoader: () => import('highlight.js/lib/core'),
    lineNumbersLoader: () => import('ngx-highlightjs/line-numbers'),
    languages: {
      typescript: () => import('highlight.js/lib/languages/typescript'),
      css: () => import('highlight.js/lib/languages/css'),
      xml: () => import('highlight.js/lib/languages/xml'),
    },
  }),
  provideGistOptions({
    clientId: '',
    clientSecret: '',
  }),
];
