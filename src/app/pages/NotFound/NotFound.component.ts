import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
  signal,
  afterRender,
  inject,
  ChangeDetectorRef,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnGradientComponent } from '@shared/ui/btnGradient/btnGradient.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink, BtnGradientComponent],
  templateUrl: './NotFound.component.html',
  styleUrls: ['./NotFound.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundComponent {
  private cdRef = inject(ChangeDetectorRef);
  url = signal('');
  constructor() {
    afterNextRender(() => {
      console.log(window.location.href);
      this.url.update(() => window.location.href);
      console.log(this.url());
    });
    afterRender(() => {
      this.url.update(() => window.location.href);
    });
  }
}
