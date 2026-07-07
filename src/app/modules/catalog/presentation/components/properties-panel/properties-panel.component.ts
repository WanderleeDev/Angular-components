import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-properties-panel',
  templateUrl: './properties-panel.component.html',
  styleUrl: './properties-panel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertiesPanel {
  title = input<string>('Properties');
}
