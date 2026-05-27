import {
  bootstrapApplication,
  BootstrapContext,
} from '@angular/platform-browser';
import { config } from './app/app.config.server';
import { App } from './app/app';

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(
    App,
    {
      ...config,
      providers: [...config.providers],
    },
    context
  );

export default bootstrap;
