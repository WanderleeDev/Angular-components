import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarDecoration } from 'app/modules/shared/presentation/components/star-decoration/star-decoration';
import { BtnGradientComponent } from 'app/modules/shared/presentation/components/btn-gradient/btn-gradient.component';

@Component({
  selector: 'app-hero-description',
  imports: [RouterLink, StarDecoration, BtnGradientComponent],
  templateUrl: './hero-description.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroDescriptionComponent {}
