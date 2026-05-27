import { CommonModule, KeyValuePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  model,
  input,
  inject,
} from '@angular/core';
import { CodeComponent } from '../code-viewer/code-viewer.component';
import { Gist, HighlightPlusModule } from 'ngx-highlightjs/plus';
import { HighlightJS } from 'ngx-highlightjs';
import { BtnBaseComponent } from 'app/modules/shared/presentation/components/btn-base/btn-base.component';

@Component({
  selector: 'app-modal-code',
  imports: [
    CommonModule,
    CodeComponent,
    KeyValuePipe,
    HighlightPlusModule,
    BtnBaseComponent,
  ],
  templateUrl: './modal-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:keydown.escape)': 'onEscapeKeyDown()',
  },
})
export class ModalCodeComponent {
  isViewModal = model(false);
  gistId = input<string>('6fd1b8fe940ded9f792335addb60c809');
  gist!: Gist;
  private readonly highlightJS = inject(HighlightJS);

  toggleModal() {
    this.isViewModal.update(prev => !prev);
  }

  onEscapeKeyDown() {
    if (this.isViewModal()) {
      this.toggleModal();
    }
  }
}
