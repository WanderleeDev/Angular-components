import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';

interface Partner {
  name: string;
  category: 'ai' | 'infra' | 'security';
  tagline: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-partner-marquee',
  imports: [],
  templateUrl: './partner-marquee.html',
  styleUrl: './partner-marquee.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerMarquee {
  protected readonly selectedFilter = signal<'all' | 'ai' | 'infra' | 'security'>('all');

  protected readonly partners = signal<Partner[]>([
    {
      name: 'Cyberdyne Systems',
      category: 'ai',
      tagline: 'Cognitive Automation',
      description: 'Deploying secure, low-latency deep learning neural models at edge networks.',
      color: '#38bdf8',
    },
    {
      name: 'Novgorod Tech',
      category: 'infra',
      tagline: 'High Speed CDN',
      description: 'Distributed cloud computing layers featuring instant replication databases.',
      color: '#10b981',
    },
    {
      name: 'Turing Crypto',
      category: 'security',
      tagline: 'Zero-Knowledge Proofs',
      description: 'Validating encrypted transactions securely without revealing private key tokens.',
      color: '#f43f5e',
    },
    {
      name: 'Skynet Solutions',
      category: 'ai',
      tagline: 'Adaptive AI Nodes',
      description: 'Self-assembling processor threads that automatically scaling node bandwidth.',
      color: '#a855f7',
    },
    {
      name: 'Novum Edge',
      category: 'infra',
      tagline: 'Edge Orchestration',
      description: 'Serverless execution instances running microservice bundles worldwide.',
      color: '#fb923c',
    },
    {
      name: 'Apex Shield',
      category: 'security',
      tagline: 'SSO Federated Auth',
      description: 'Enterprise credentials validation using multi-factor biometric systems.',
      color: '#facc15',
    },
  ]);

  // Hovered partner to show details inside the spotlight panel
  protected readonly hoveredPartner = signal<Partner | null>(null);

  protected readonly filteredPartners = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'all') return this.partners();
    return this.partners().filter(p => p.category === filter);
  });

  protected setFilter(filter: 'all' | 'ai' | 'infra' | 'security'): void {
    this.selectedFilter.set(filter);
    // Reset hover selection when filter changes
    this.hoveredPartner.set(null);
  }

  protected setHovered(partner: Partner | null): void {
    this.hoveredPartner.set(partner);
  }
}
