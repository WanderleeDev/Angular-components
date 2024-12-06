import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
//  components
import { FooterComponent } from '@components/footer/footer.component';
//  Services
import { SeoService } from './services/seo/seo.service';
import { CursorCustomComponent } from '@shared/components/cursorCustom/cursorCustom.component';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FooterComponent,
    CursorCustomComponent,
    HighlightModule,
  ],
  template: `
    <main>
      <app-cursor-custom />
      <router-outlet />
    </main>
    <!-- <app-footer /> -->
  `,
  styles: `
    :host {
      display: contents;
    }
    main {
      min-height: 100dvh;
    }
  `,
})
export class AppComponent implements OnInit {
  private readonly seoSvc: SeoService = inject(SeoService);

  ngOnInit(): void {
    this.seoSvc.setIndexFollow();
    this.seoSvc.setMetaDescription(
      'Catalogo de componentes personales, recopilatorios y adaptados para angular'
    );
  }
}
