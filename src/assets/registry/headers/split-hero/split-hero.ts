import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-split-hero',
  templateUrl: './split-hero.html',
  styleUrl: './split-hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class SplitHero {
  badgeText = input<string>('Introducing v2.0');
  title = input<string>('Build beautiful reactive web apps');
  description = input<string>('A modular standalone Angular component toolkit engineered for high performance, accessibility, and modern aesthetic styling.');
  ctaText1 = input<string>('Get Started');
  ctaText2 = input<string>('Read Docs');
}
