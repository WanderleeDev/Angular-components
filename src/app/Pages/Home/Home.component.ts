import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BtnGradientComponent } from '@shared/btnGradient/btnGradient.component';
//  Interfaces
import { ICustomStyles } from 'app/interfaces/ICustomStyles.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    BtnGradientComponent
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
