import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
//  Components
import { SidenavComponent } from '@components/sidenav/sidenav.component';
import { AnimatedCardComponent } from '@shared/Ui/animatedCard/animatedCard.component';
import { GridContainerComponent } from '@shared/Ui/gridContainer/gridContainer.component';
//  Services
import { ComponentsDataService } from 'app/services/componentsData/ComponentsData.service';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [
    CommonModule,
    SidenavComponent,
    AnimatedCardComponent,
    GridContainerComponent
  ],
  templateUrl: './Components.component.html',
  styleUrl: './Components.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComponentsComponent {
  private componentsDataSvc = inject(ComponentsDataService);
  componentsData = this.componentsDataSvc.getDataComponents$();

  generarColorClaroHex() {
    // Generar componente de color en el rango de 180 a 255
    const componente = () => Math.floor(Math.random() * 76) + 180;

    // Convertir a formato hexadecimal
    const colorHex = `#${componente().toString(16)}${componente().toString(16)}${componente().toString(16)}`;

    return colorHex;
  }
}
