import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-localized-footer',
  templateUrl: './localized-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class LocalizedFooter {
  readonly year = new Date().getFullYear();

  readonly languages = ['English', 'Español', 'Français', 'Deutsch'];
  readonly currencies = ['USD ($)', 'EUR (€)', 'GBP (£)', 'ARS ($)'];

  readonly selectedLanguage = signal<string>(this.languages[0]);
  readonly selectedCurrency = signal<string>(this.currencies[0]);

  setLanguage(lang: string): void {
    this.selectedLanguage.set(lang);
  }

  setCurrency(curr: string): void {
    this.selectedCurrency.set(curr);
  }
}
