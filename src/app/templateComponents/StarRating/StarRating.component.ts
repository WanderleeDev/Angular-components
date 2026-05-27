import {
  ChangeDetectionStrategy,
  Component,
  input,
  model,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './StarRating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'contents',
  },
})
export class StarRatingComponent {
  rating = model<number>(0);
  numberStars = input<number>(5);
  isReadonly = input<boolean>(false);
  backgroundColor = input<string>('var(--border)');
  orientation = input<'horizontal' | 'vertical'>('horizontal');

  config = computed(() => ({
    numberStars: this.numberStars(),
    isReadonly: this.isReadonly(),
    backgroundColor: this.backgroundColor(),
    orientation: this.orientation(),
  }));

  arrayStars = computed(() => Array(this.config().numberStars).fill(''));

  public viewRating(rating: number): void {
    if (this.config().isReadonly) return;
    if (rating === this.rating()) return;

    this.rating.set(rating);
  }

  public handleKeyDown(event: KeyboardEvent, rating: number): void {
    if (this.config().isReadonly) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.viewRating(rating);
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      const nextRating = Math.min(rating + 1, this.config().numberStars);
      this.viewRating(nextRating);
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      const prevRating = Math.max(rating - 1, 0);
      this.viewRating(prevRating);
    }
  }
}
