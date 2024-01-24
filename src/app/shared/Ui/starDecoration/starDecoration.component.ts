import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-star-decoration',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="starDecoration">
      <ng-content></ng-content>
    </div>
  `,
  styleUrl: './starDecoration.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarDecorationComponent {}
