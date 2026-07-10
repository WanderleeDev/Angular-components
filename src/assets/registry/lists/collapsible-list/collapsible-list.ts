import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export interface CollapsibleItem {
  id: number;
  title: string;
  content: string;
  icon: string;
}

@Component({
  selector: 'app-collapsible-list-comp',
  templateUrl: './collapsible-list.html',
  styleUrl: './collapsible-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block h-full',
  },
})
export class CollapsibleListComp {
  readonly items: CollapsibleItem[] = [
    {
      id: 1,
      title: 'How do standalone components work?',
      content: 'Standalone components eliminate the need for NgModules. They declare their dependencies directly in their imports list, simplifying code architecture and enabling direct route lazy loading.',
      icon: 'extension'
    },
    {
      id: 2,
      title: 'Why use Signals instead of Observables?',
      content: 'Signals provide synchronous, fine-grained reactivity. They track where they are used and trigger view updates only for the affected components, bypassing zone.js dirty check passes completely.',
      icon: 'bolt'
    },
    {
      id: 3,
      title: 'Is server-side rendering supported?',
      content: 'Yes. All components are fully optimized for strict Angular SSR hydration, using browser guards to ensure no layout shifts or initialization failures occur.',
      icon: 'dns'
    }
  ];

  readonly openItemId = signal<number | null>(1);

  toggleItem(id: number): void {
    if (this.openItemId() === id) {
      this.openItemId.set(null);
    } else {
      this.openItemId.set(id);
    }
  }
}
