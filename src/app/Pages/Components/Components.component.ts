import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Components.component.html',
  styleUrl: './Components.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComponentsComponent { }
