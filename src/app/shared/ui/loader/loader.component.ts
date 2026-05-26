import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
    <div class="loader-wrapper">
      <div class="loader"></div>
      ,
      <p class="loader-text">Getting Section</p>
    </div>
  `,
  styleUrl: './loader.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {}
