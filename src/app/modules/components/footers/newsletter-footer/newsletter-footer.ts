import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-newsletter-footer',
  templateUrl: './newsletter-footer.html',
  styleUrl: './newsletter-footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class NewsletterFooter {
  readonly year = new Date().getFullYear();
  readonly email = signal<string>('');
  readonly isSubscribed = signal<boolean>(false);

  subscribe(): void {
    if (this.email().trim()) {
      this.isSubscribed.set(true);
      this.email.set('');
    }
  }
}
