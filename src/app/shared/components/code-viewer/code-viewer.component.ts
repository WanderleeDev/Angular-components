import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';
import { HighlightLineNumbers } from 'ngx-highlightjs/line-numbers';

@Component({
  standalone: true,
  selector: 'app-code',
  imports: [HighlightModule, HighlightLineNumbers],
  template: `
    <pre>
        <code [highlightAuto]="code ?? ''" ></code>
    </pre>
  `,
  styleUrls: ['code-viewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodeComponent {
  @Input() code!: string | null;
  // code = input.required<string>();
}
