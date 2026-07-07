import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.html',
  styleUrl: './category-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-full',
  },
})
export class CategoryCard {
  title = input<string>('Cards');
  description = input<string>('Flexible content grouping blocks and bento cards with customizable layouts.');
  icon = input<string>('view_agenda');
  accentColor = input<string>('#ec4899');
  count = input<number>(12);
  countLabel = input<string>('Available');
  actionText = input<string>('Explore Components');
}
