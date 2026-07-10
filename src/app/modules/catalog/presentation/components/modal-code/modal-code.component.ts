import {
  ChangeDetectionStrategy,
  Component,
  inject,
  InjectionToken,
  signal,
} from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CodeComponent } from '../code-viewer/code-viewer.component';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { HighlightJS } from 'ngx-highlightjs';
import { BtnBaseComponent } from 'app/modules/shared/presentation/components/btn-base/btn-base.component';
import { Paths } from 'app/modules/components/loader/types';
import { OverlayRef } from '@angular/cdk/overlay';

export const MODAL_CODE_DATA = new InjectionToken<Paths>('MODAL_CODE_DATA');

@Component({
  selector: 'app-modal-code',
  imports: [CodeComponent, HighlightPlusModule, AsyncPipe, BtnBaseComponent],
  templateUrl: './modal-code.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCodeComponent {
  path = inject<Paths>(MODAL_CODE_DATA);

  #overlayRef = inject(OverlayRef);

  highlightJS = inject(HighlightJS);

  activeTab = signal<'ts' | 'html' | 'css'>('ts');

  protected close() {
    this.#overlayRef.dispose();
  }
}
