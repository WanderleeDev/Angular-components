import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICustomStyles } from 'app/interfaces/ICustomStyles.interface';

interface IRatingStarConfig {
  numberStars: number;
  isReadonly: boolean;
  activeColor: string;
  backgroundColor: string;
  orientation: 'horizontal' | 'vertical';
}

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './StarRating.component.html',
  styleUrl: './StarRating.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingComponent{
  @Input() customStyles?: Partial<ICustomStyles>;
  @Input() ratingStarConfig?: Partial<IRatingStarConfig> = {
    numberStars: 5,
    isReadonly: false,
    activeColor: 'rgb(255, 187, 0)',
    backgroundColor: '#dcdcdc',
    orientation: 'horizontal'
  };
  arrayStars = Array(this.ratingStarConfig?.numberStars).fill('');
  private rating = 0;

  public viewRating (rating: number): void {
    if (this.ratingStarConfig?.isReadonly) return
    if (rating === this.rating) return

    this.rating = rating;
    console.log(this.rating);

  }
}
