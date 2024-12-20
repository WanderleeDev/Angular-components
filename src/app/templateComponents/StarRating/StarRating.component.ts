import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICustomStyles } from 'app/interfaces/ICustomStyles.interface';

interface IRatingStarConfig {
  numberStars: number;
  isReadonly: boolean;
  backgroundColor: string;
  orientation: 'horizontal' | 'vertical';
}

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './StarRating.component.html',
  styleUrl: './StarRating.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent {
  @Input({ required: true }) rating = 0;
  @Input() customStyles?: Partial<ICustomStyles>;
  @Input() ratingStarConfig?: Partial<IRatingStarConfig> = {
    numberStars: 5,
    isReadonly: false,
    backgroundColor: '#dcdcdc',
    orientation: 'horizontal',
  };
  arrayStars = Array(this.ratingStarConfig?.numberStars).fill('');

  public viewRating(rating: number): void {
    if (this.ratingStarConfig?.isReadonly) return;
    if (rating === this.rating) return;

    this.rating = rating;
  }
}
