import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';

interface CompareFeature {
  name: string;
  category: string;
  starter: boolean | string;
  pro: boolean | string;
  enterprise: boolean | string;
}

@Component({
  selector: 'app-comparison-table',
  imports: [],
  templateUrl: './comparison-table.html',
  styleUrl: './comparison-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComparisonTable {
  protected readonly showDifferencesOnly = signal<boolean>(false);

  protected readonly features = signal<CompareFeature[]>([
    // Core Category
    { name: 'Active Projects Limit', category: 'Core Features', starter: 'Up to 5', pro: 'Unlimited', enterprise: 'Unlimited + Dedicated' },
    { name: 'Bandwidth Allocation', category: 'Core Features', starter: '10 GB/mo', pro: '100 GB/mo', enterprise: 'Unlimited' },
    { name: 'Global CDN Caching', category: 'Core Features', starter: true, pro: true, enterprise: true },
    { name: 'Custom Domain Linking', category: 'Core Features', starter: false, pro: true, enterprise: true },
    
    // Security Category
    { name: 'SSL Certificate Encryption', category: 'Security & Compliance', starter: true, pro: true, enterprise: true },
    { name: 'Two-Factor Auth (2FA)', category: 'Security & Compliance', starter: true, pro: true, enterprise: true },
    { name: 'SSO & SAML Integrations', category: 'Security & Compliance', starter: false, pro: false, enterprise: true },
    { name: 'Automated Daily Backups', category: 'Security & Compliance', starter: false, pro: true, enterprise: true },
    
    // Support & Service Category
    { name: 'Support Turnaround Time', category: 'Support & Services', starter: '48 Hours', pro: 'Priority (4 Hours)', enterprise: 'SLA (30 Minutes)' },
    { name: 'Personal Architect Specialist', category: 'Support & Services', starter: false, pro: false, enterprise: true },
    { name: 'Uptime SLA Guarantee', category: 'Support & Services', starter: false, pro: false, enterprise: '99.99%' },
  ]);

  // Reactive filtering of features
  protected readonly visibleFeatures = computed(() => {
    const showDiffs = this.showDifferencesOnly();
    if (!showDiffs) return this.features();

    return this.features().filter(feature => {
      const s = feature.starter;
      const p = feature.pro;
      const e = feature.enterprise;
      // If starter, pro and enterprise values are not identical, it's a difference
      return !(s === p && p === e);
    });
  });

  // Helper method to determine if category header should render
  protected isNewCategory(index: number, feature: CompareFeature): boolean {
    if (index === 0) return true;
    const previous = this.visibleFeatures()[index - 1];
    return previous.category !== feature.category;
  }

  protected toggleDifferences(): void {
    this.showDifferencesOnly.update(val => !val);
  }
}
