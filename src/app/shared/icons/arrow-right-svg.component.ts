import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-arrow-right-svg',
  standalone: true,
  imports: [CommonModule],
  template: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="2rem"
    height="2rem"
    viewBox="0 0 24 24">
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2.5"
      d="m10 17l5-5m0 0l-5-5" />
  </svg>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArrowRightSvgComponent {}
