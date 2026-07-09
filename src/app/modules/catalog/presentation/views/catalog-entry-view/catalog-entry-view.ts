import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogHeader } from 'app/modules/catalog/presentation/components/catalog-header/catalog-header';
import { CatalogCta } from 'app/modules/catalog/presentation/components/catalog-cta/catalog-cta';
import { getCatalogCategoriesData } from 'app/modules/shared/utils';
import { NavList } from 'app/modules/components/loader/types';
import { AnimatedCard } from '../../components/animated-card/animated-card';

@Component({
  selector: 'app-catalog-entry-view',
  imports: [AnimatedCard, CatalogHeader, CatalogCta, RouterLink],
  templateUrl: './catalog-entry-view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CatalogEntryView {
  componentsData = signal<NavList[]>(getCatalogCategoriesData());
  searchQuery = signal('');

  readonly themeCardData: NavList = {
    title: 'themes',
    icon: 'palette',
    description: "Explore and configure the application's themes and visual palettes. Choose between light, dark, and specialized retro/cyberpunk options.",
    color: '#3b82f6',
    numberComponents: 15,
  };

  filteredComponents = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return this.componentsData();
    return this.componentsData().filter(
      item =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  });

  showThemesCard = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    if (!query) return true;
    return (
      'themes'.includes(query) ||
      'temas'.includes(query) ||
      'appearance'.includes(query) ||
      'apariencia'.includes(query)
    );
  });

  onSearch(query: string): void {
    this.searchQuery.set(query);
  }
}
