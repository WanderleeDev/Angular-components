import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-star-decoration',

  imports: [],
  template: `
    <div class="relative inline-block">
      <!-- Star 1 (Top Left) -->
      <div
        aria-hidden="true"
        class="absolute -top-[4%] -left-[5%] w-5 h-5 bg-[url('https://static.artguru.ai/_next/static/media/star-1.c2eda227.png')] bg-center bg-no-repeat bg-[length:100%] animate-star1"></div>

      <!-- Star 2 (Bottom Right) -->
      <div
        aria-hidden="true"
        class="absolute bottom-0 -right-[8%] w-5 h-5 bg-[url('https://static.artguru.ai/_next/static/media/star-2.44d8486e.png')] bg-center bg-no-repeat bg-[length:100%] animate-star2"></div>

      <!-- Extra Star -->
      <div
        aria-hidden="true"
        class="absolute w-full h-full pointer-events-none">
        <div
          class="absolute top-[1.2rem] right-[0.6rem] w-[0.9rem] h-[0.9rem] bg-[url('https://static.artguru.ai/_next/static/media/star-1.c2eda227.png')] bg-center bg-no-repeat bg-[length:100%] animate-star1-reverse filter drop-shadow-[1px_1px_0.2rem_rgba(221,168,68,0.63)] z-10"></div>
      </div>

      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarDecoration {}
