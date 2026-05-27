import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-btn-base',
  imports: [],
  template: ` <button
    class="grid place-content-center w-8 h-8 p-[0.2rem] rounded-[0.4rem] border border-app-border hover:border-app-accent/50 hover:bg-app-text/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 transition-all duration-150 cursor-pointer"
    [title]="label()"
    [attr.aria-label]="label()"
    type="button">
    <ng-content />
    {{ icon() }}
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class BtnBaseComponent {
  icon = input<string>();
  label = input.required<string>();
}
