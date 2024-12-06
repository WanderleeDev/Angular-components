import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-overview-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './overview-template.component.html',
  styleUrl: './overview-template.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverviewTemplateComponent {}
