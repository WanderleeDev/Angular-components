import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroVideoComponent } from '../components/hero-video/hero-video';
import { HeroTitleComponent } from '../components/hero-title/hero-title';
import { HeroDescriptionComponent } from '../components/hero-description/hero-description';

@Component({
  selector: 'app-home-view',
  imports: [HeroVideoComponent, HeroTitleComponent, HeroDescriptionComponent],
  template: `
    <section
      class="relative overflow-hidden min-h-screen w-full flex flex-col justify-between bg-app-bg text-app-text transition-colors duration-300 p-8">
      <app-hero-video />
      <app-hero-title />
      <app-hero-description />
    </section>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeView {}
