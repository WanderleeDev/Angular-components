import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-floating-sidebar',
  imports: [],
  templateUrl: './floating-sidebar.html',
  styleUrl: './floating-sidebar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloatingSidebar {
  protected isCollapsed = signal(false);
  protected activeIndex = signal(0);

  protected toggleCollapse(): void {
    this.isCollapsed.update(v => !v);
  }

  protected setActive(index: number): void {
    this.activeIndex.set(index);
  }
}
