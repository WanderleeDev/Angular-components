import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-window-component',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './windowComponent.component.html',
  styleUrl: './windowComponent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowComponentComponent {
  @Input({required: true}) nameComponent = 'Empty name'
}
