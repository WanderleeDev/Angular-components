import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-fonts-section',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './fontsSection.component.html',
  styleUrl: './fontsSection.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FontsSectionComponent { }
