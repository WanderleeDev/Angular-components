import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//  Components
import { SidenavComponent } from '@components/sidenav/sidenav.component';
//  Services
import { ComponentsDataService } from 'app/services/componentsData/ComponentsData.service';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, SidenavComponent, RouterOutlet],
  templateUrl: './Components.component.html',
  styles: `
    :host {
      display: contents;
    }

    .components {
      min-height: 100dvh;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ComponentsComponent {
  private componentsDataSvc = inject(ComponentsDataService);
  componentsData = this.componentsDataSvc.getDataComponents$();
}
