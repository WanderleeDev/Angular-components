import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-simple-footer',
  templateUrl: './simple-footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class SimpleFooter {
  companyName = input<string>('WanderleeDev');
  year = input<number>(2026);
  links = input<string[]>(['Privacy Policy', 'Terms of Service', 'Contact']);
}
