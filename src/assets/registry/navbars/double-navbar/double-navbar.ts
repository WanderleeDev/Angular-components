import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-double-navbar',
  imports: [],
  templateUrl: './double-navbar.html',
  styleUrl: './double-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DoubleNavbar {
  protected isMobileOpen = signal(false);

  protected toggleMobile(): void {
    this.isMobileOpen.update(v => !v);
  }
}
