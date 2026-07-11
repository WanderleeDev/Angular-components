import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-banner-navbar',
  imports: [],
  templateUrl: './banner-navbar.html',
  styleUrl: './banner-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerNavbar {
  protected isBannerVisible = signal(true);
  protected isMobileOpen = signal(false);
  navLinks = ['Home', 'Marketplace', 'Features', 'Contact'];
  activeLink = signal('Home');

  protected closeBanner(): void {
    this.isBannerVisible.set(false);
  }

  protected toggleMobile(): void {
    this.isMobileOpen.update(v => !v);
  }
}
