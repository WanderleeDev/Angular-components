import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  selector: 'app-code',
  imports: [HighlightModule, HighlightLineNumbers],
  template: `
    <pre>
        <code [highlightAuto]="code() ?? ''" lineNumbers></code>
    </pre>
  `,
  styleUrls: ['code-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
  code = input<string | null>(null);
}
