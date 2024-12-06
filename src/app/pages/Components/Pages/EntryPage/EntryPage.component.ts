import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
//  Components
import { GridContainerComponent } from '../../../../shared/ui/gridContainer/gridContainer.component';
import { AnimatedCardComponent } from '../../../../shared/ui/animatedCard/animatedCard.component';
//  Services
import { ComponentsDataService } from 'app/services/componentsData/ComponentsData.service';

@Component({
  selector: 'app-entry-page',
  standalone: true,
  templateUrl: './EntryPage.component.html',
  styleUrl: './EntryPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, GridContainerComponent, AnimatedCardComponent],
})
export default class EntryPageComponent {
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
