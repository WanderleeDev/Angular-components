import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-carousel-skeleton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carouselSkeleton.component.html',
  styleUrl: './carouselSkeleton.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselSkeletonComponent {}
