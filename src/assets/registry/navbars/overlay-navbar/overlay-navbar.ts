import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-overlay-navbar',
  imports: [],
  templateUrl: './overlay-navbar.html',
  styleUrl: './overlay-navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayNavbar {
  protected isOverlayOpen = signal(false);

  protected toggleOverlay(): void {
    this.isOverlayOpen.update(v => !v);
  }
}
