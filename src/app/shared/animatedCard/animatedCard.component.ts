import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
// Interfaces
import { IDataCard } from 'app/interfaces/IDataCard.interface';


@Component({
  selector: 'app-animated-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './animatedCard.component.html',
  styleUrl: './animatedCard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AnimatedCardComponent {
  @Input({required: true}) cardData: Required<IDataCard> = {
    title: '',
    numberComponents: 0
  }
  @Input() cardColor = '#f9b234';
}
