import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnGradientComponent } from '@shared/btnGradient/btnGradient.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    BtnGradientComponent
  ],
  templateUrl: './NotFound.component.html',
  styleUrls: ['./NotFound.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent {
  readonly url = window.location.href;
}
