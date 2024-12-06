import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
//  Components
import { BannerComponent } from '@components/banner/banner.component';
import { PresentationComponent } from '@shared/ui/presentation/presentation.component';
import { ScrollCarouselComponent } from '@shared/ui/scrollCarousel/scrollCarousel.component';
import { FontsSectionComponent } from '@components/fontsSection/fontsSection.component';
import { CarouselSkeletonComponent } from '@shared/skeleton/carouselSkeleton/carouselSkeleton.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    PresentationComponent,
    FontsSectionComponent,
    ScrollCarouselComponent,
    CarouselSkeletonComponent,
  ],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {}
