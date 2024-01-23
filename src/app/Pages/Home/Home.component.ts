import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BannerComponent } from '@components/banner/banner.component';
import { FontsSectionComponent } from '@components/fontsSection/fontsSection.component';
import { PresentationComponent } from '@shared/presentation/presentation.component';
import { ScrollCarouselComponent } from '@shared/scrollCarousel/scrollCarousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    PresentationComponent,
    FontsSectionComponent,
    ScrollCarouselComponent
  ],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
}
