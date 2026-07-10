import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-columns-footer',
  templateUrl: './columns-footer.html',
  styleUrl: './columns-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class ColumnsFooter {
  brandName = input<string>('Antigravity');
  brandDesc = input<string>(
    'Premium modular interface elements and UI utility layers built for next-generation developer tooling.'
  );
  year = input<number>(2026);

  protected readonly isSubscribed = signal<boolean>(false);

  protected subscribeNewsletter(event: Event): void {
    event.preventDefault();
    this.isSubscribed.set(true);
  }
}
