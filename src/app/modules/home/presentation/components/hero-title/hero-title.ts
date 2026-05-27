import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero-title',
  imports: [],
  templateUrl: './hero-title.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroTitleComponent {}
