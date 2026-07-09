import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { getCategoryNavigationLinks } from 'app/modules/shared/utils';

@Component({
  selector: 'app-nav-mobile',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nav-mobile.html',
  styles: `
    :host {
      display: block;
    }

    #menuMobile:popover-open {
      transform: translateX(0);
      transition: all 300ms ease-in-out;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavMobile {
  readonly navLinks = signal(getCategoryNavigationLinks());
  menuMobile = viewChild<ElementRef<HTMLDialogElement>>('menuMobile');
  isOpen = signal(false);

  protected hideMenu() {
    this.menuMobile()?.nativeElement.close();
    this.isOpen.set(false);
  }
}
