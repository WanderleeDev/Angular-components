import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
//  Interface
import { ICustomStyles } from 'app/interfaces/ICustomStyles.interface';

@Component({
  selector: 'app-btn-gradient',
  standalone: true,
  imports: [NgStyle],
  template: `
    <button
      class="btn-gradient"
      [ngStyle]="customStyles"
      type="button"
      title="to home"
      [attr.aria-label]="text">
      {{ text ?? 'Back to Home' }}
    </button>
  `,
  styleUrls: ['./btnGradient.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnGradientComponent {
  @Input() customStyles?: ICustomStyles;
  @Input() text?: string = 'Back to home';
}
