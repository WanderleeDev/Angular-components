import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-code-svg',
  standalone: true,
  imports: [],
  template: ` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="m12.89 3l1.96.4L11.11 21l-1.96-.4zm6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83zM1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83z" />
  </svg>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeSvgComponent {}
