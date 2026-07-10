import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-theme-card-comp',
  templateUrl: './theme-card.html',
  styleUrl: './theme-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class ThemeCardComp {
  themeName = input<string>('Cyberpunk Neon');
  background = input<string>('#0f051d');
  cardBg = input<string>('#1a0b2e');
  text = input<string>('#f8fafc');
  border = input<string>('rgba(255, 0, 127, 0.25)');
  accent = input<string>('#ff007f');
  isActive = input<boolean>(false);
  buttonText = input<string>('Apply');
}
