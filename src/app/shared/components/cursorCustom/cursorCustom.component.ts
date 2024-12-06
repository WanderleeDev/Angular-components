import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveCursorDirective } from 'app/directives/activeCursor.directive';
import { CursorDirective } from 'app/directives/cursor.directive';

@Component({
  selector: 'app-cursor-custom',
  standalone: true,
  imports: [CursorDirective, ActiveCursorDirective],
  template: `
    <div class="cursor" appCursor appActiveCursor aria-hidden="true">
      <span class="cursor-inner"></span>
    </div>
  `,
  styleUrls: ['./cursorCustom.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CursorCustomComponent {}
