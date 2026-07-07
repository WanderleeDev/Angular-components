import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-feature-spotlight',
  imports: [],
  templateUrl: './feature-spotlight.html',
  styleUrl: './feature-spotlight.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureSpotlight {
  protected readonly features = signal<Feature[]>([
    {
      title: 'Global Database scaling',
      description: 'Distribute write and read workloads globally with zero setup, built-in replicas, and automatic regional scaling.',
      icon: 'public',
    },
    {
      title: 'Serverless Functions',
      description: 'Deploy code instantly, scale from zero to millions of requests automatically, and only pay for computing time.',
      icon: 'bolt',
    },
    {
      title: 'Edge Caching Network',
      description: 'Store database queries and static files at the network edge with custom headers and latency-free retrieval.',
      icon: 'cloud',
    },
  ]);

  // Track mouse coordinates on hover to drive the spotlight overlay
  protected onMouseMove(event: MouseEvent): void {
    const card = event.currentTarget as HTMLElement;
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }
}
