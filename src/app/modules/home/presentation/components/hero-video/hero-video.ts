import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-video',
  imports: [],
  template: `
    <div class="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <video
        class="w-full h-full object-cover block brightness-[0.5] transition-all duration-300"
        autoplay
        loop
        muted
        playsinline>
        <source src="assets/mp_.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroVideoComponent {}
