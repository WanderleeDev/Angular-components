import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  OnDestroy,
  signal,
  computed,
  afterNextRender,
} from '@angular/core';

@Component({
  selector: 'app-profile-card-comp',
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-full',
  },
})
export class ProfileCardComp implements OnDestroy {
  readonly name = 'Alex Rivera';
  readonly role = 'Lead Frontend Architect';
  readonly location = 'San Francisco, CA';
  readonly bio =
    'Building high-performance UI systems, design frameworks, and interactive web animations with Angular & WebGL.';

  readonly skills = [
    { name: 'Angular v20', color: '#dd0031' },
    { name: 'TypeScript', color: '#3178c6' },
    { name: 'Tailwind CSS', color: '#38bdf8' },
    { name: 'WebGL & Three.js', color: '#00ffcc' },
  ];

  readonly isFollowing = signal<boolean>(false);
  readonly baseFollowers = 1420;
  readonly extraFollowers = signal<number>(0);
  readonly totalFollowers = computed(
    () => this.baseFollowers + this.extraFollowers()
  );

  readonly localTime = signal<string>('00:00:00 AM');

  private timerId?: ReturnType<typeof setInterval>;

  constructor() {
    afterNextRender(() => {
      this.updateClock();
      this.timerId = setInterval(() => this.updateClock(), 1000);
    });
  }

  ngOnDestroy(): void {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  toggleFollow(): void {
    if (this.isFollowing()) {
      this.isFollowing.set(false);
      this.extraFollowers.update(n => n - 1);
    } else {
      this.isFollowing.set(true);
      this.extraFollowers.update(n => n + 1);
    }
  }

  private updateClock(): void {
    const now = new Date();
    let hours = now.getHours();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    this.localTime.set(`${hours}:${minutes}:${seconds} ${ampm}`);
  }
}
