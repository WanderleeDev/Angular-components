import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  imports: [],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroBanner implements OnInit, OnDestroy {
  protected readonly requestCount = signal<number>(1043250);
  protected readonly currentUptime = signal<string>('99.98%');

  private countInterval?: NodeJS.Timeout;

  ngOnInit(): void {
    // Dynamic simulated metrics counter
    this.countInterval = setInterval(() => {
      this.requestCount.update(c => c + Math.floor(Math.random() * 5) + 1);
    }, 1500);
  }

  ngOnDestroy(): void {
    if (this.countInterval) {
      clearInterval(this.countInterval);
    }
  }

  protected triggerAction(): void {
    // Interactive highlight feedback helper
    alert(
      'Quick installation script copied to clipboard: npm i @novgorod/standalone-ui'
    );
  }
}
