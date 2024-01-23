import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scroll-carousel',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './scrollCarousel.component.html',
  styleUrl: './scrollCarousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollCarouselComponent { }
