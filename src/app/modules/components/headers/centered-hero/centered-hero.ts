import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-centered-hero',
  templateUrl: './centered-hero.html',
  styleUrl: './centered-hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class CenteredHero {
  badgeText = input<string>('Deploy instantly');
  title = input<string>('Scale your applications without limits');
  description = input<string>('Deploy static sites, serverless APIs, or container workloads directly from Git to a globally distributed platform.');
}
