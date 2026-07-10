import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-glass-navbar',
  templateUrl: './glass-navbar.html',
  styleUrl: './glass-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class GlassNavbar {
  logoText = input<string>('Prism');
  links = input<string[]>(['Products', 'Solutions', 'Pricing', 'Docs']);

  protected readonly isMobileMenuOpen = signal<boolean>(false);

  protected toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(prev => !prev);
  }
}
