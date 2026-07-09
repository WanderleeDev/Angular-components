import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-error-state',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
  template: `
    <div class="flex flex-col items-center justify-center py-16 px-6 text-center bg-app-card border border-red-500/20 rounded-2xl shadow-lg max-w-md mx-auto my-8 animate-fade-in">
      <div class="relative flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 text-red-500 mb-4 shadow-sm shadow-red-500/20">
        <span class="material-icons text-3xl animate-bounce">warning</span>
        <div class="absolute inset-0 rounded-full border border-red-500/30 animate-ping opacity-75"></div>
      </div>
      <h3 class="text-lg font-bold text-app-text mb-2 font-krona">
        {{ title() }}
      </h3>
      <p class="text-sm text-app-text/60 mb-6 leading-relaxed">
        {{ message() }}
      </p>
      <button
        (click)="retry.emit()"
        type="button"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-200 font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50 cursor-pointer">
        <span class="material-icons text-lg">refresh</span>
        Intentar de nuevo
      </button>
    </div>
  `,
})
export class ErrorStateComponent {
  title = input<string>('¡Uh! Algo salió mal');
  message = input<string>('No se pudieron cargar los componentes de navegación. Por favor, verificá tu conexión e intentalo de nuevo.');
  retry = output<void>();
}
