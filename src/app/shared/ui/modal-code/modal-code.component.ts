import { CommonModule, KeyValuePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { CodeComponent } from '@shared/components/code-viewer/code-viewer.component';
import { Gist, HighlightPlusModule } from 'ngx-highlightjs/plus';
import { HighlightJS } from 'ngx-highlightjs';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { LoaderComponent } from '../loader/loader.component';
import { BtnBaseComponent } from '@shared/components/btn-base/btn-base.component';
import { CloseSvgComponent } from '@shared/icons/close-svg.component';

@Component({
  selector: 'app-modal-code',
  standalone: true,
  imports: [
    CommonModule,
    CodeComponent,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatProgressBarModule,
    KeyValuePipe,
    HighlightPlusModule,
    KeyValuePipe,
    LoaderComponent,
    BtnBaseComponent,
    CloseSvgComponent,
  ],
  templateUrl: './modal-code.component.html',
  styleUrl: './modal-code.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalCodeComponent {
  isViewModal = model(false);
  gist!: Gist;
  gistId: string = '6fd1b8fe940ded9f792335addb60c809';

  constructor(private readonly highlightJS: HighlightJS) {}

  toggleModal() {
    this.isViewModal.update(prev => !prev);
  }
}
