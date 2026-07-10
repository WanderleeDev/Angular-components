import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Window {
  nameComponent = input.required<string>();
}
