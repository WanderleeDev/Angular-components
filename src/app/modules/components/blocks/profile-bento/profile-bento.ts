import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-profile-bento',
  imports: [],
  templateUrl: './profile-bento.html',
  styleUrl: './profile-bento.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileBento implements OnInit, OnDestroy {
  protected readonly currentTime = signal<string>('');
  protected readonly stack = signal<string[]>([
    'TypeScript',
    'Angular 20',
    'RxJS',
    'CSS Grid',
    'Signals',
    'A11y',
  ]);

  private timerInterval?: any;

  ngOnInit(): void {
    this.updateTime();
    this.timerInterval = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }

  private updateTime(): void {
    const now = new Date();
    this.currentTime.set(
      now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    );
  }
}
