import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-btn-gradient',
  imports: [],
  template: `
    <button
      class="px-5 py-2.5 my-4 rounded-xl font-bold cursor-pointer bg-gradient-to-r from-[#E21C34] via-[#EC4899] to-[#6366F1] text-white transition-all duration-200 ease-in-out hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#38bdf8] hover:ring-1 hover:ring-white/20 animate-pulse-glow"
      type="button">
      <ng-content>Click me</ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnGradientComponent {}
