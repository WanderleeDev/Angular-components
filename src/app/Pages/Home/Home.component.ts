import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnGradientComponent } from '@shared/btnGradient/btnGradient.component';
import { WindowComponentComponent } from '@shared/windowComponent/windowComponent.component';
//  Interfaces
import { ICustomStyles } from 'app/interfaces/ICustomStyles.interface';
import { StarRatingComponent } from 'app/templateComponents/StarRating/StarRating.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    BtnGradientComponent,
    StarRatingComponent,
    WindowComponentComponent
  ],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomeComponent {
  customStyles: ICustomStyles = {
    color: '#fff',
    padding: '.8rem 1.8rem',
    background: 'linear-gradient(60deg, rgba(242, 7, 15, 0.6), rgba(120, 2, 255, 0.6))'
  }
}
