import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeSelectService } from 'ngx-theme-stack';
import { ThemeCardComp } from 'app/modules/components/cards/theme-card/theme-card';

import { ThemeInfo, THEMES_LIST } from './theme-data';

@Component({
  selector: 'app-themes-view',
  imports: [ThemeCardComp, RouterLink],
  templateUrl: './themes-view.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ThemesView {
  protected readonly theme = inject(ThemeSelectService);

  protected readonly themesList: ThemeInfo[] = THEMES_LIST;

  protected readonly skeletons = Array(12).fill(0);

  protected selectTheme(themeId: string): void {
    this.theme.select(themeId);
  }

  protected selectThemeFromBtn(event: Event, themeId: string): void {
    event.stopPropagation();
    this.theme.select(themeId);
  }
}
