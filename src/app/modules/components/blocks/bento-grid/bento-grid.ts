import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';

interface BentoFeature {
  title: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-bento-grid',
  imports: [],
  templateUrl: './bento-grid.html',
  styleUrl: './bento-grid.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BentoGrid {
  // Interactive state
  protected readonly selectedMode = signal<'performance' | 'eco' | 'balance'>('balance');

  // Derived state using computed signals
  protected readonly metrics = computed(() => {
    switch (this.selectedMode()) {
      case 'performance':
        return { speed: '98%', power: '100%', temp: '78°C', status: 'Optimal Turbo' };
      case 'eco':
        return { speed: '62%', power: '35%', temp: '42°C', status: 'Max Efficiency' };
      case 'balance':
      default:
        return { speed: '85%', power: '70%', temp: '55°C', status: 'Balanced Load' };
    }
  });

  protected readonly recentEvents = signal<string[]>([
    'System initialized',
    'Catalog module loaded',
    'Theme preference synched',
  ]);

  protected selectMode(mode: 'performance' | 'eco' | 'balance'): void {
    this.selectedMode.set(mode);
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    this.recentEvents.update(logs => [
      `Mode switched to ${mode.toUpperCase()} [${timestamp}]`,
      ...logs.slice(0, 2),
    ]);
  }
}
