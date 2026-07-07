import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CatalogHeader } from 'app/modules/catalog/presentation/components/catalog-header/catalog-header';
import { CatalogCta } from 'app/modules/catalog/presentation/components/catalog-cta/catalog-cta';
import { COMPONENTS_DATA } from 'app/modules/catalog/const';
import { INavList } from 'app/interfaces/IDataCard.interface';
import { AnimatedCard } from '../../components/animated-card/animated-card';

@Component({
  selector: 'app-catalog-entry-view',
  imports: [AnimatedCard, CatalogHeader, CatalogCta, RouterLink],
  templateUrl: './catalog-entry-view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CatalogEntryView {
  componentsData = signal<INavList[]>(COMPONENTS_DATA);
  searchQuery = signal('');

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
