import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeSelectService } from 'ngx-theme-stack';

@Component({
  selector: 'app-theme-select',
  imports: [],
  templateUrl: './theme-select.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectComponent {
  protected readonly theme = inject(ThemeSelectService);

  onThemeSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    if (select && select.value) {
      this.theme.select(select.value);
    }
  }
}
