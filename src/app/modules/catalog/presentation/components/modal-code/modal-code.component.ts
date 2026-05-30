import { CommonModule, KeyValuePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  model,
  input,
  inject,
  signal,
  effect,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CodeComponent } from '../code-viewer/code-viewer.component';
import { Gist, HighlightPlusModule } from 'ngx-highlightjs/plus';
import { HighlightJS } from 'ngx-highlightjs';
import { BtnBaseComponent } from 'app/modules/shared/presentation/components/btn-base/btn-base.component';

@Component({
  selector: 'app-modal-code',
  imports: [
    CommonModule,
    CodeComponent,
    HighlightPlusModule,
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
  localPath = input<string | null>(null);
  localFiles = input<string[] | null>(null);
  
  gist!: Gist;
  fileKeys = signal<string[]>([]);
  activeFileKey = signal<string>('');
  localCode = signal<string>('');

  private readonly highlightJS = inject(HighlightJS);

  constructor() {
    const http = inject(HttpClient);

    effect(() => {
      const files = this.localFiles();
      if (files) {
        const keys = [...files].sort((a, b) => {
          const getOrder = (file: string) => {
            if (file.endsWith('.ts')) return 1;
            if (file.endsWith('.html')) return 2;
            if (file.endsWith('.css') || file.endsWith('.scss')) return 3;
            return 4;
          };
          return getOrder(a) - getOrder(b);
        });
        this.fileKeys.set(keys);
        if (keys.length > 0) {
          this.activeFileKey.set(keys[0]);
        }
      }
    });

    effect(() => {
      const path = this.localPath();
      const file = this.activeFileKey();
      const isLocal = !!this.localFiles();
      if (isLocal && path && file) {
        http.get(`assets/registry/${path}/${file}`, { responseType: 'text' }).subscribe({
          next: (code) => this.localCode.set(code),
          error: (err) => console.error('Failed to load local registry file:', err)
        });
      }
    });
  }

  toggleModal() {
    this.isViewModal.update(prev => !prev);
  }

  onEscapeKeyDown() {
    if (this.isViewModal()) {
      this.toggleModal();
    }
  }

  onGistLoad(gist: Gist) {
    this.gist = gist;
    if (gist && gist.files) {
      // Sort files: .ts (1), .html (2), .css/.scss (3), others (4)
      const keys = Object.keys(gist.files).sort((a, b) => {
        const getOrder = (file: string) => {
          if (file.endsWith('.ts')) return 1;
          if (file.endsWith('.html')) return 2;
          if (file.endsWith('.css') || file.endsWith('.scss')) return 3;
          return 4;
        };
        return getOrder(a) - getOrder(b);
      });
      this.fileKeys.set(keys);
      if (keys.length > 0) {
        this.activeFileKey.set(keys[0]);
      }
    }
  }

  selectTab(key: string) {
    this.activeFileKey.set(key);
  }

  getCleanFileName(key: string): string {
    const lower = key.toLowerCase();
    if (lower.endsWith('.component.ts')) return 'TypeScript';
    if (lower.endsWith('.component.html')) return 'HTML';
    if (lower.endsWith('.component.css') || lower.endsWith('.component.scss')) return 'CSS';
    if (lower.endsWith('.ts')) return 'TS';
    if (lower.endsWith('.html')) return 'HTML';
    if (lower.endsWith('.css') || lower.endsWith('.scss')) return 'CSS';
    return key;
  }
}
