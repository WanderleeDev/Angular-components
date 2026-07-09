import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bento-footer',
  templateUrl: './bento-footer.html',
  styleUrl: './bento-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class BentoFooter {
  readonly year = new Date().getFullYear();
  readonly status = 'All Systems Operational';
}
