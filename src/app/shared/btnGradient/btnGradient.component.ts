import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-btn-gradient',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <button
      class="btn-gradient"
      type="button"
      title="to home"
      aria-label="to home"
    >
      Back to Home
    </button>
  `,
  styles: `
    :host {
      display: contents;
    }

    .btn-gradient {
      color: #303030;
      padding: 0.5rem 1rem;
      margin: 1rem 0;

      border-radius: 0.5rem;
      font-weight: bold;
      cursor: pointer;
      background: linear-gradient(to right, #F51DC1, #2DFAFA);
      transition: transform 0.3s ease-in-out;
      &:hover {
          transform: scale(1.05);
      }

      &:active {
          transform: scale(0.95);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnGradientComponent { }
