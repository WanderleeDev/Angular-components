import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
//  Components
import { BtnGradientComponent } from "../../shared/Ui/btnGradient/btnGradient.component";
//  Interfaces
import { ICustomStyles } from 'app/interfaces/ICustomStyles.interface';
import { StarDecorationComponent } from '@shared/Ui/starDecoration/starDecoration.component';

@Component({
    selector: 'app-banner',
    standalone: true,
    templateUrl: './banner.component.html',
    styleUrl: './banner.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        BtnGradientComponent,
        NgOptimizedImage,
        StarDecorationComponent,
        RouterLink
    ]
})
export class BannerComponent {
  customStyles: ICustomStyles = {
    color: '#fff',
    padding: '.8rem 1.8rem',
    background: 'linear-gradient(60deg, rgba(242, 7, 15, 0.6), rgba(120, 2, 255, 0.6))'
  }
}
