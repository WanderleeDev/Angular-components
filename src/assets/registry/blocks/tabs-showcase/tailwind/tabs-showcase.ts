import {
  Component,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';

interface TabDetail {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
}

@Component({
  selector: 'app-tabs-showcase',
  imports: [],
  templateUrl: './tabs-showcase.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class TabsShowcase {
  protected readonly activeTabId = signal<string>('analytics');

  protected readonly tabs = signal<TabDetail[]>([
    {
      id: 'analytics',
      title: 'Advanced Analytics',
      tagline: 'Measure what matters',
      description:
        'Track granular user behaviors, API response latency, and database query throughput from a single unified panel.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
      features: [
        'Real-time telemetry stream',
        'Granular dashboard filters',
        'Automated anomaly alerts',
      ],
    },
    {
      id: 'security',
      title: 'Enterprise Security',
      tagline: 'Fortified defenses',
      description:
        'Secure your microservices with single sign-on (SSO), role-based access control, and automated daily database backups.',
      image:
        'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60',
      features: [
        'SSO & SAML integration',
        'AES-256 data encryption',
        'Automated vulnerability scans',
      ],
    },
    {
      id: 'scaling',
      title: 'Global Scale CDN',
      tagline: 'Deliver at lightning speed',
      description:
        'Distribute assets globally across edge servers with automatic caching, request routing, and 99.99% uptime guarantees.',
      image:
        'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
      features: [
        'Edge network caching',
        'Dynamic request optimization',
        'SLA guaranteed delivery',
      ],
    },
  ]);

  protected readonly activeTab = computed(() => {
    return this.tabs().find(t => t.id === this.activeTabId()) || this.tabs()[0];
  });

  protected setActiveTab(tabId: string): void {
    this.activeTabId.set(tabId);
  }
}
