import {
  Component,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActiveUsersCard } from 'app/modules/components/cards/active-users/active-users';

interface StatItem {
  title: string;
  icon: string;
  timeframeData: {
    day: { value: string; trend: string; positive: boolean; points: number[] };
    week: { value: string; trend: string; positive: boolean; points: number[] };
    month: {
      value: string;
      trend: string;
      positive: boolean;
      points: number[];
    };
  };
}

@Component({
  selector: 'app-stats-grid',
  imports: [ActiveUsersCard],
  templateUrl: './stats-grid.html',
  styleUrl: './stats-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsGrid {
  protected readonly selectedTimeframe = signal<'day' | 'week' | 'month'>(
    'week'
  );

  protected readonly stats = signal<StatItem[]>([
    {
      title: 'Active Users',
      icon: 'people',
      timeframeData: {
        day: {
          value: '14,250',
          trend: '+12.4%',
          positive: true,
          points: [30, 45, 35, 60, 50, 75, 80],
        },
        week: {
          value: '94,820',
          trend: '+8.2%',
          positive: true,
          points: [40, 55, 45, 70, 65, 85, 90],
        },
        month: {
          value: '382,900',
          trend: '+15.1%',
          positive: true,
          points: [20, 35, 30, 50, 45, 60, 80],
        },
      },
    },
    {
      title: 'API Requests',
      icon: 'dns',
      timeframeData: {
        day: {
          value: '1.24M',
          trend: '+4.8%',
          positive: true,
          points: [60, 50, 70, 65, 80, 75, 95],
        },
        week: {
          value: '8.45M',
          trend: '+6.1%',
          positive: true,
          points: [50, 40, 65, 55, 75, 70, 85],
        },
        month: {
          value: '34.8M',
          trend: '+11.2%',
          positive: true,
          points: [30, 40, 50, 45, 60, 70, 90],
        },
      },
    },
    {
      title: 'Conversion Rate',
      icon: 'shopping_cart',
      timeframeData: {
        day: {
          value: '3.42%',
          trend: '+0.25%',
          positive: true,
          points: [20, 30, 25, 45, 35, 50, 48],
        },
        week: {
          value: '3.18%',
          trend: '-0.12%',
          positive: false,
          points: [50, 48, 45, 46, 42, 40, 38],
        },
        month: {
          value: '2.95%',
          trend: '+0.45%',
          positive: true,
          points: [20, 22, 25, 24, 28, 27, 30],
        },
      },
    },
    {
      title: 'Server Uptime',
      icon: 'speed',
      timeframeData: {
        day: {
          value: '99.99%',
          trend: 'Stable',
          positive: true,
          points: [100, 100, 99.9, 100, 100, 100, 100],
        },
        week: {
          value: '99.95%',
          trend: '-0.02%',
          positive: false,
          points: [100, 99.8, 99.9, 100, 99.7, 99.9, 99.9],
        },
        month: {
          value: '99.91%',
          trend: '+0.05%',
          positive: true,
          points: [99.5, 99.7, 99.8, 99.7, 99.9, 99.9, 99.9],
        },
      },
    },
  ]);

  protected readonly currentMetrics = computed(() => {
    const timeframe = this.selectedTimeframe();
    return this.stats().map(stat => {
      const data = stat.timeframeData[timeframe];
      return {
        title: stat.title,
        icon: stat.icon,
        value: data.value,
        trend: data.trend,
        positive: data.positive,
        points: data.points,
        polylinePoints: this.generatePolyline(data.points),
      };
    });
  });

  protected setTimeframe(timeframe: 'day' | 'week' | 'month'): void {
    this.selectedTimeframe.set(timeframe);
  }

  private generatePolyline(points: number[]): string {
    const width = 120;
    const height = 30;
    const maxVal = Math.max(...points, 1);
    const minVal = Math.min(...points, 0);
    const valRange = maxVal - minVal;

    return points
      .map((val, index) => {
        const x = (index / (points.length - 1)) * width;
        const y = height - ((val - minVal) / valRange) * (height - 4) - 2;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  }
}
