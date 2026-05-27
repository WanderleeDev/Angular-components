import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';
import { BtnBaseComponent } from 'app/modules/shared/presentation/components/btn-base/btn-base.component';
import { ModalCodeComponent } from '../modal-code/modal-code.component';

@Component({
  selector: 'app-window',
  imports: [BtnBaseComponent, ModalCodeComponent],
  templateUrl: './window.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Window {
  nameComponent = input.required<string>();
  tailwindGistId = input<string>('6fd1b8fe940ded9f792335addb60c809');
  cssGistId = input<string>('6fd1b8fe940ded9f792335addb60c809');
  isTailwindModalOpen = signal(false);
  isCssModalOpen = signal(false);

  public toggleTailwindModal() {
    this.isTailwindModalOpen.update(prev => !prev);
  }

  public toggleCssModal() {
    this.isCssModalOpen.update(prev => !prev);
  }
}
