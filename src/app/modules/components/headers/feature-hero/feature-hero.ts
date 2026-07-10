import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

export interface HeroFeature {
  id: string;
  tabLabel: string;
  title: string;
  description: string;
  icon: string;
  metric: string;
  metricLabel: string;
}

@Component({
  selector: 'app-feature-hero',
  templateUrl: './feature-hero.html',
  styleUrl: './feature-hero.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class FeatureHero {
  readonly features: HeroFeature[] = [
    {
      id: 'performance',
      tabLabel: 'Performance',
      title: 'Built for extreme speed',
      description:
        'Our components compile directly to clean standalone modules, achieving 100/100 Lighthouse performance metrics out of the box.',
      icon: 'speed',
      metric: '0.2ms',
      metricLabel: 'Render Time',
    },
    {
      id: 'accessibility',
      tabLabel: 'Accessibility',
      title: 'Inclusive by design',
      description:
        'Fully WCAG 2.1 AA compliant. Every component undergoes rigorous AXE audits to ensure keyboard navigation and ARIA specs work flawlessly.',
      icon: 'accessibility',
      metric: '100%',
      metricLabel: 'A11y Score',
    },
    {
      id: 'reactivity',
      tabLabel: 'Reactivity',
      title: 'Fine-grained updates',
      description:
        'Powered exclusively by Angular Signals. No zone.js overhead, resulting in highly deterministic view updates and optimal memory usage.',
      icon: 'bolt',
      metric: '0 KB',
      metricLabel: 'Zone overhead',
    },
  ];

  readonly activeFeature = signal<HeroFeature>(this.features[0]);

  selectFeature(feature: HeroFeature): void {
    this.activeFeature.set(feature);
  }
}
