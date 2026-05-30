import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contents',
  },
})
export class StarRating {
  rating = model<number>(0);
  numberStars = input<number>(5);
  isReadonly = input<boolean>(false);
  backgroundColor = input<string>('var(--border)');
  orientation = input<'horizontal' | 'vertical'>('horizontal');

  arrayStars = computed(() => Array(this.numberStars()).fill(''));

  public viewRating(rating: number): void {
    if (this.isReadonly()) return;
    if (rating === this.rating()) return;

    this.rating.set(rating);
  }

  public handleKeyDown(event: KeyboardEvent, rating: number): void {
    if (this.isReadonly()) return;

    const handledKeys = ['Enter', ' '];
    if (!handledKeys.includes(event.key)) return;

    event.preventDefault();
    this.viewRating(rating);
  }
}
