import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-presentation',

  imports: [],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PresentationComponent {}
