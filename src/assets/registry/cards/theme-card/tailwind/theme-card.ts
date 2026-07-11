import { ChangeDetectionStrategy, Component, input, signal, inject } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-theme-card-comp',
  templateUrl: './theme-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class ThemeCardComp {
  themeId = input<string>('cyberpunk-neon');
  themeName = input<string>('Cyberpunk Neon');
  background = input<string>('#0f051d');
  cardBg = input<string>('#1a0b2e');
  text = input<string>('#f8fafc');
  border = input<string>('rgba(255, 0, 127, 0.25)');
  accent = input<string>('#ff007f');
  isActive = input<boolean>(false);
  buttonText = input<string>('Apply');

  copied = signal(false);
  private clipboard = inject(Clipboard);

  copyTheme(event: Event) {
    event.stopPropagation();
    const css = `.${this.themeId()} {
  --background: ${this.background()};
  --text: ${this.text()};
  --card-bg: ${this.cardBg()};
  --border: ${this.border()};
  --accent: ${this.accent()};
}`;
    
    if (this.clipboard.copy(css)) {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }
  }
}
