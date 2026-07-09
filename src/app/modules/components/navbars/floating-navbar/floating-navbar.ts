import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-floating-navbar',
  imports: [],
  templateUrl: './floating-navbar.html',
  styleUrl: './floating-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingNavbar {
  protected isMobileOpen = signal(false);

  protected toggleMobile(): void {
    this.isMobileOpen.update(v => !v);
  }
}
