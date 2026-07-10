import {
  Component,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';

interface Milestone {
  phase: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'planned';
  date: string;
}

@Component({
  selector: 'app-timeline-block',
  imports: [],
  templateUrl: './timeline-block.html',
  styleUrl: './timeline-block.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimelineBlock {
  protected readonly selectedFilter = signal<
    'all' | 'completed' | 'active' | 'planned'
  >('all');

  protected readonly milestones = signal<Milestone[]>([
    {
      phase: 'Phase 01',
      title: 'Engine Core Architecture',
      description:
        'Setup routing, standalone configurations, global themes, and module loading bindings.',
      status: 'completed',
      date: 'Q1 2026',
    },
    {
      phase: 'Phase 02',
      title: 'Bento Telemetry Dashboard',
      description:
        'Design dynamic computed metric states, active processor switches, and custom sparklines.',
      status: 'completed',
      date: 'Q2 2026',
    },
    {
      phase: 'Phase 03',
      title: 'UI Block Catalog Expansion',
      description:
        'Deploy Pricing plan grids, comparison grids, timelines, and statistics blocks.',
      status: 'in-progress',
      date: 'Ongoing',
    },
    {
      phase: 'Phase 04',
      title: 'Docs Sync & Search CLI',
      description:
        'Generate automated code snippets viewer, and a quick CLI search utility tool.',
      status: 'planned',
      date: 'Q4 2026',
    },
    {
      phase: 'Phase 05',
      title: 'Visual Regression Sandbox',
      description:
        'Establish automated Axe accessibility audits and pixel-perfect screenshot tests.',
      status: 'planned',
      date: 'Q1 2027',
    },
  ]);

  protected readonly filteredMilestones = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'all') return this.milestones();
    if (filter === 'active')
      return this.milestones().filter(m => m.status === 'in-progress');
    return this.milestones().filter(m => m.status === filter);
  });

  protected setFilter(
    filter: 'all' | 'completed' | 'active' | 'planned'
  ): void {
    this.selectedFilter.set(filter);
  }
}
