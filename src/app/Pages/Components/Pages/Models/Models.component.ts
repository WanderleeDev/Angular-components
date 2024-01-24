import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Models.component.html',
  styleUrl: './Models.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModelsComponent {
  @Input() id?:string;
}
