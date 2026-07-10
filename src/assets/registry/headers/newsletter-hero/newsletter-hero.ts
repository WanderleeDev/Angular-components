import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-newsletter-hero',
  templateUrl: './newsletter-hero.html',
  styleUrl: './newsletter-hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class NewsletterHero {
  readonly email = signal<string>('');
  readonly status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  readonly errorMessage = signal<string>('');

  setEmail(val: string): void {
    this.email.set(val);
    if (this.status() === 'error') {
      this.status.set('idle');
    }
  }

  subscribe(): void {
    const emailVal = this.email().trim();
    if (!emailVal) {
      this.status.set('error');
      this.errorMessage.set('Email address is required');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailVal)) {
      this.status.set('error');
      this.errorMessage.set('Please enter a valid email address');
      return;
    }

    this.status.set('loading');
    setTimeout(() => {
      this.status.set('success');
      this.email.set('');
    }, 1500);
  }
}
