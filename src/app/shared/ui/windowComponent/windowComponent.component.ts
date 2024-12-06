import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnBaseComponent } from '@shared/components/btn-base/btn-base.component';
import { CodeSvgComponent } from '@shared/icons/code-svg.component';
import { ArrowRightSvgComponent } from '@shared/icons/arrow-right-svg.component';
import { ModalCodeComponent } from '../modal-code/modal-code.component';

@Component({
  selector: 'app-window-component',
  standalone: true,
  imports: [
    RouterLink,
    BtnBaseComponent,
    CodeSvgComponent,
    ArrowRightSvgComponent,
    ModalCodeComponent,
  ],
  templateUrl: './windowComponent.component.html',
  styleUrl: './windowComponent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowComponentComponent {
  nameComponent = input.required<string>();
  isViewModel = signal(false);

  public toggleModal() {
    this.isViewModel.update(prev => !prev);
  }
}
