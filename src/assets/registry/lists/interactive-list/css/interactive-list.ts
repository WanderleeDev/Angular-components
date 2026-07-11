import { ChangeDetectionStrategy, Component, input } from '@angular/core';

interface ListItem {
  label: string;
  icon: string;
  badge?: string;
  badgeType?: 'primary' | 'success' | 'warn';
}

@Component({
  selector: 'app-interactive-list',
  templateUrl: './interactive-list.html',
  styleUrl: './interactive-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class InteractiveList {
  title = input<string>('Feature Releases');
  items = input<ListItem[]>([
    {
      label: 'Standalone components routing structure',
      icon: 'route',
      badge: 'v2.0',
      badgeType: 'primary',
    },
    {
      label: 'Zero layout shift SSR hydration guards',
      icon: 'bolt',
      badge: 'Improved',
      badgeType: 'success',
    },
    {
      label: 'Premium responsive CSS variable theming engine',
      icon: 'palette',
    },
    {
      label: 'Deprecated legacy routing module parameters',
      icon: 'warning',
      badge: 'Removed',
      badgeType: 'warn',
    },
  ]);
}
