import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-pill-navbar',
  templateUrl: './pill-navbar.html',
  styleUrl: './pill-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class PillNavbar {
  logoText = input<string>('Orbit');
  links = input<string[]>(['Home', 'Features', 'Team', 'Blog', 'Contact']);

  protected readonly activeLink = signal<string>('Home');
  protected readonly isMobileMenuOpen = signal<boolean>(false);

  protected selectLink(link: string): void {
    this.activeLink.set(link);
  }

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(prev => !prev);
  }
}
