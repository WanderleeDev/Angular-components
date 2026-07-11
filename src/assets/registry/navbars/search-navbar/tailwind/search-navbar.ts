import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-search-navbar',
  imports: [],
  templateUrl: './search-navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchNavbar {
  protected isMobileMenuOpen = signal(false);
  navLinks = ['New Arrivals', 'Trending', 'Clothing', 'Accessories', 'Sales'];

  protected toggleMobile(): void {
    this.isMobileMenuOpen.update(v => !v);
  }
}
