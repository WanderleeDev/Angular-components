import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeSelectComponent } from 'app/modules/shared/presentation/components/theme-select/theme-select.component';
import { getCategoryNavigationLinks } from 'app/modules/shared/utils';

@Component({
  selector: 'app-catalog-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, ThemeSelectComponent],
  templateUrl: './catalog-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contents',
  },
})
export default class CatalogLayout {
  readonly navLinks = signal(getCategoryNavigationLinks());

  readonly isMobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(state => !state);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }
}
