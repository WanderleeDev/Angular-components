import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-loading-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
  template: `
    <div class="flex flex-col items-center justify-center py-24 gap-4">
      <div class="relative flex items-center justify-center w-12 h-12">
        <!-- Circular spinner -->
        <div class="absolute inset-0 rounded-full border-2 border-app-accent/20 border-t-app-accent animate-spin"></div>
        <!-- Inner pulse -->
        <div class="w-3.5 h-3.5 rounded-full bg-app-accent animate-pulse shadow-xs shadow-app-accent/80"></div>
      </div>
      <div class="text-app-text/40 text-sm font-semibold tracking-wide animate-pulse">
        {{ message() }}
      </div>
    </div>
  `,
})
export class LoadingStateComponent {
  message = input<string>('Loading components...');
}
