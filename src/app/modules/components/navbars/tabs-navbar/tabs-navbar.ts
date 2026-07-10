import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-tabs-navbar',
  templateUrl: './tabs-navbar.html',
  styleUrl: './tabs-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class TabsNavbar {
  logoText = input<string>('Console');
  tabs = input<string[]>([
    'Overview',
    'Deployments',
    'Analytics',
    'Logs',
    'Settings',
  ]);

  protected readonly activeTab = signal<string>('Overview');

  protected selectTab(tab: string): void {
    this.activeTab.set(tab);
  }
}
