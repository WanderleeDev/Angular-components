import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-glass-hero',
  templateUrl: './glass-hero.html',
  styleUrl: './glass-hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class GlassHero {
  readonly title = 'Next-Gen UI Components';
  readonly subtitle = 'Build stunning, fast, and accessible interfaces with our modern design library built from the ground up.';
  readonly terminalLogs = signal<string[]>([
    'Initializing setup...',
    'Installing angular-components...',
    'Resolving dependencies...',
    'Ready: Server listening on port 4200'
  ]);
}
