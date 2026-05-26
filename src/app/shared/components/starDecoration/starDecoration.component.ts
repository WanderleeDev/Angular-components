import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-star-decoration',

  imports: [],
  template: `
    <div class="starDecoration">
      <div aria-hidden="true" class="starDecoration-extra"></div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './starDecoration.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarDecorationComponent {}
