import {
  Component,
  OnDestroy,
  signal,
  ChangeDetectionStrategy,
  afterNextRender,
} from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  imports: [],
  templateUrl: './hero-banner.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
  styles: [
    `
      @keyframes floatWidget {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
      }
      @keyframes spinSlow {
        to { transform: rotate(360deg); }
      }
      .animate-float-widget {
        animation: floatWidget 4s ease-in-out infinite;
      }
      .animate-spin-slow {
        animation: spinSlow 4s linear infinite;
      }
      .animate-spin-medium {
        animation: spinSlow 2s linear infinite;
      }
    `,
  ],
})
export class HeroBanner implements OnDestroy {
  protected readonly requestCount = signal<number>(1043250);
  protected readonly currentUptime = signal<string>('99.98%');

  private countInterval?: ReturnType<typeof setInterval>;

  constructor() {
    afterNextRender(() => {
      this.countInterval = setInterval(() => {
        this.requestCount.update(c => c + Math.floor(Math.random() * 5) + 1);
      }, 1500);
    });
  }

  ngOnDestroy(): void {
    if (this.countInterval) {
      clearInterval(this.countInterval);
    }
  }

  protected triggerAction(): void {
    alert(
      'Quick installation script copied to clipboard: npm i @novgorod/standalone-ui'
    );
  }
}
