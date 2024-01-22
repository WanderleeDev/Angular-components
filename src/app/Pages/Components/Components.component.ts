import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SidenavComponent } from '@components/sidenav/sidenav.component';
import { WindowComponentComponent } from '@shared/windowComponent/windowComponent.component';
import { StarRatingComponent } from 'app/templateComponents/StarRating/StarRating.component';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    WindowComponentComponent,
    StarRatingComponent
  ],
  templateUrl: './Components.component.html',
  styleUrl: './Components.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComponentsComponent { }
