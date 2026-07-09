import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavList } from 'app/modules/components/loader/types';

@Component({
  selector: 'app-animated-card',
  imports: [RouterLink],
  templateUrl: './animated-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-full',
  },
})
export class AnimatedCard {
  cardData = input.required<NavList>();
}
