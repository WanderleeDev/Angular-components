import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-grid-container',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="grid-container">
      <ng-content></ng-content>
    </div>`,
  styles: `:host {
    display: contents;
  }
  .grid-container {
    display: grid;
    max-width: var(--xl, 1280px);
    margin: 0 auto;
    gap: 1.5rem;
    @media (width >= 350px) {
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 330px), 1fr));
    }
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridContainerComponent { }
