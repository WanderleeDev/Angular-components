import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CursorCustomComponent } from 'app/modules/shared/presentation/components/cursor-custom/cursor-custom.component';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CursorCustomComponent, HighlightModule],
  template: `
    <main>
      <app-cursor-custom />
      <router-outlet />
    </main>
  `,
  styles: `
    :host {
      display: contents;
    }
    main {
      min-height: 100dvh;
    }
  `,
})
export class App {}
