import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { INavList } from 'app/interfaces/IDataCard.interface';

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
  cardData = input.required<INavList>();
}
