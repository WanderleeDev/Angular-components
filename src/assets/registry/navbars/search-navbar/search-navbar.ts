import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-search-navbar',
  imports: [],
  templateUrl: './search-navbar.html',
  styleUrl: './search-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchNavbar {
  protected isMobileMenuOpen = signal(false);

  protected toggleMobile(): void {
    this.isMobileMenuOpen.update(v => !v);
  }
}
