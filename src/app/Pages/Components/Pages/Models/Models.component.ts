import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GridContainerComponent } from '@shared/Ui/gridContainer/gridContainer.component';
import { WindowComponentComponent } from '@shared/Ui/windowComponent/windowComponent.component';
import { StarRatingComponent } from 'app/templateComponents/StarRating/StarRating.component';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [
    CommonModule,
    GridContainerComponent,
    WindowComponentComponent,
    StarRatingComponent
  ],
  templateUrl: './Models.component.html',
  styleUrl: './Models.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ModelsComponent {
  @Input() id?:string;
}
