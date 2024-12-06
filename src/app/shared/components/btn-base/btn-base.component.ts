import { MatTooltipModule } from '@angular/material/tooltip';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-btn-base',
  standalone: true,
  imports: [MatTooltipModule],
  template: ` <button
    class="btn"
    [matTooltip]="label()"
    [attr.aria-label]="label()"
    type="button"
    routerLink="/components/models/cards/details">
    <ng-content />
    {{ icon() }}
  </button>`,
  styleUrl: './btn-base.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnBaseComponent {
  icon = input<string>();
  label = input.required<string>();
}
