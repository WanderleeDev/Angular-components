import {
  Component,
  ChangeDetectionStrategy,
  input,
  signal,
} from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-code',
  imports: [HighlightModule, HighlightLineNumbers, ClipboardModule],
  template: `
    <div class="relative group min-w-full">
      <div class="sticky top-3 right-0 float-right z-10 w-0 h-0">
        <button
          type="button"
          class="absolute right-3 top-2 flex items-center justify-center gap-2 w-max h-8 px-3 rounded-md bg-app-accent/90 backdrop-blur text-white hover:bg-app-accent border border-app-accent/50 shadow-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 cursor-pointer disabled:opacity-100 disabled:cursor-default"
          [class.cursor-not-allowed]="isCopied()"
          [disabled]="isCopied()"
          [cdkCopyToClipboard]="code() || ''"
          (cdkCopyToClipboardCopied)="handleCopy()"
          [title]="isCopied() ? 'Copied!' : 'Copy code'"
          [attr.aria-label]="isCopied() ? 'Copied!' : 'Copy code'">
          <span class="material-icons scale-75">{{
            isCopied() ? 'check' : 'content_copy'
          }}</span>
          {{ isCopied() ? 'Copied!' : 'Copy' }}
        </button>
      </div>
      <pre
        class="m-0"><code [highlightAuto]="code() ?? ''" lineNumbers></code></pre>
    </div>
  `,
  styleUrls: ['code-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
  code = input<string | null>(null);

  protected isCopied = signal(false);

  handleCopy() {
    this.isCopied.set(true);
    setTimeout(() => {
      this.isCopied.set(false);
    }, 2000);
  }
}
