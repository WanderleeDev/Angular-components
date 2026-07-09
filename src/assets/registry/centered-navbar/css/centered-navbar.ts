import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-centered-navbar',
  imports: [],
  templateUrl: './centered-navbar.html',
  styleUrl: './centered-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CenteredNavbar {
  protected isMobileOpen = signal(false);

  protected toggleMobile(): void {
    this.isMobileOpen.update(v => !v);
  }
}
