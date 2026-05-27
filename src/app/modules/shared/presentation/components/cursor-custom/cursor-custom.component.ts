import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCursorDirective } from 'app/modules/shared/presentation/directives/activeCursor.directive';
import { CursorDirective } from 'app/modules/shared/presentation/directives/cursor.directive';

@Component({
  selector: 'app-cursor-custom',

  imports: [CursorDirective, ActiveCursorDirective],
  template: `
    <div class="cursor" appCursor appActiveCursor aria-hidden="true">
      <span class="cursor-inner"></span>
    </div>
  `,
  styleUrls: ['./cursor-custom.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursorCustomComponent {}
