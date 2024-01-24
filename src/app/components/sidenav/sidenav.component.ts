import { CommonModule } from '@angular/common';
import {Component,ChangeDetectionStrategy, inject, Input} from '@angular/core';

import {MediaMatcher} from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { INavList } from 'app/interfaces/IDataCard.interface';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent {
  @Input({required: true}) navList: INavList[] = [];
  private readonly media = inject(MediaMatcher);
  mobileQuery: MediaQueryList = this.media.matchMedia('(max-width: 600px)');
}
