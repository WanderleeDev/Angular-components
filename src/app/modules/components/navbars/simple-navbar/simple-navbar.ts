import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-simple-navbar',
  templateUrl: './simple-navbar.html',
  styleUrl: './simple-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class SimpleNavbar {
  logoText = input<string>('Acme Corp');
  links = input<string[]>(['Dashboard', 'Analytics', 'Settings', 'Profile']);

  protected readonly isMobileMenuOpen = signal<boolean>(false);

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(prev => !prev);
  }
}
