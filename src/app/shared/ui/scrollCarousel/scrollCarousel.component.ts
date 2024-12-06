import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-scroll-carousel',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './scrollCarousel.component.html',
  styleUrl: './scrollCarousel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollCarouselComponent {
  images = [
    'https://www.dropbox.com/scl/fi/0ihz56b51rx9dod1e2kjs/ng-1.webp?rlkey=ahpyxargm6bs11yvu5j17o8q9&raw=1',
    'https://www.dropbox.com/scl/fi/gczkvqzq919kub7pi9n8i/ng-2.webp?rlkey=wizcpnm4i6yexrod6d8ev6r9i&raw=1',
    'https://www.dropbox.com/scl/fi/nghvkazpbvi86h1v5tsgj/ng-3.webp?rlkey=a9g3ivet459wrviw3xnxww0im&raw=1',
  ];
}
