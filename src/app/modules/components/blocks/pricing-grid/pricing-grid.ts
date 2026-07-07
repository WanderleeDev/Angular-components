import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';

interface PricingPlan {
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  ctaText: string;
  popular?: boolean;
}

@Component({
  selector: 'app-pricing-grid',
  imports: [],
  templateUrl: './pricing-grid.html',
  styleUrl: './pricing-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingGrid {
  // Billing cycle state
  protected readonly billingCycle = signal<'monthly' | 'yearly'>('monthly');

  protected readonly plans = signal<PricingPlan[]>([
    {
      name: 'Starter',
      description: 'Ideal for individuals and small side projects.',
      monthlyPrice: 19,
      yearlyPrice: 15,
      features: ['Up to 5 Projects', 'Basic Analytics', 'Community Support', '24h Sync Interval'],
      ctaText: 'Get Started',
    },
    {
      name: 'Pro',
      description: 'Perfect for professionals and growing businesses.',
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        'Unlimited Projects',
        'Advanced Metrics & Logs',
        'Priority 24/7 Support',
        'Real-time Telemetry Sync',
        'Custom Domain Integration',
      ],
      ctaText: 'Upgrade to Pro',
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom security and scaling features for large teams.',
      monthlyPrice: 149,
      yearlyPrice: 119,
      features: [
        'Dedicated Cluster Host',
        'SSO & SAML Security',
        'SLA 99.9% Uptime Guarantee',
        'Personal Account GDE Architect',
        'Custom Contract Billing',
      ],
      ctaText: 'Contact Sales',
    },
  ]);

  // Reactive price calculator
  protected toggleBilling(): void {
    this.billingCycle.update(cycle => (cycle === 'monthly' ? 'yearly' : 'monthly'));
  }
}
