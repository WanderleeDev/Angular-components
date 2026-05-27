import {
  ChangeDetectionStrategy,
  Component,
  afterNextRender,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnGradientComponent } from 'app/modules/shared/presentation/components/btn-gradient/btn-gradient.component';
import { NotFoundSchematic } from 'app/modules/shared/presentation/components/not-found-schematic/not-found-schematic';

@Component({
  selector: 'app-not-found-view',
  imports: [RouterLink, BtnGradientComponent, NotFoundSchematic],
  template: `
    <section
      class="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 font-sans">
      <div class="max-w-md w-full flex flex-col items-center text-center gap-6">
        <div class="w-full max-w-[320px] h-auto">
          <app-not-found-schematic />
        </div>

        <h1
          class="text-2xl md:text-3xl font-black tracking-widest uppercase bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent font-krona">
          PAGE NOT FOUND
        </h1>
        <p class="text-sm leading-relaxed text-slate-400 max-w-sm">
          The terminal system could not resolve the requested code node:
          <code
            class="block font-mono text-xs text-rose-500 bg-rose-500/10 border border-rose-500/20 px-3 py-1.5 rounded-lg mt-3 break-all select-all"
            >{{ url() || 'undefined_path' }}</code
          >
        </p>

        <div class="mt-2">
          <app-btn-gradient routerLink="/home"
            >Return to Base Terminal</app-btn-gradient
          >
        </div>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class NotFoundView {
  url = signal('');

  constructor() {
    afterNextRender(() => this.url.update(() => window.location.href));
  }
}
