import { Component, input, computed, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-active-users-card',
  templateUrl: './active-users.html',
  styleUrl: './active-users.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class ActiveUsersCard {
  title = input<string>('Active Users');
  value = input<string>('94,820');
  trend = input<string>('+8.2%');
  positive = input<boolean>(true);
  icon = input<string>('people');
  points = input<number[]>([40, 55, 45, 70, 65, 85, 90]);

  // Derived polyline points for the sparkline
  polylinePoints = computed(() => {
    const pts = this.points();
    if (!pts || pts.length === 0) return '';
    const width = 120;
    const height = 30;
    const maxVal = Math.max(...pts, 1);
    const minVal = Math.min(...pts, 0);
    const valRange = maxVal - minVal;

    return pts
      .map((val, index) => {
        const x = (index / (pts.length - 1)) * width;
        const y = height - ((val - minVal) / valRange) * (height - 4) - 2;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  });
}
