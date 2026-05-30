import {
  ChangeDetectionStrategy,
  Component,
  input,
  signal,
  computed,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarRating } from 'app/templateComponents/star-rating/star-rating';
import { NativePicker } from 'app/templateComponents/native-picker/native-picker';
import { Window } from 'app/modules/catalog/presentation/components/window/window';
import { COMPONENTS_REGISTRY } from 'app/modules/catalog/const';

@Component({
  selector: 'app-catalog-detail-view',
  imports: [RouterLink, Window, StarRating, NativePicker],
  templateUrl: './catalog-detail-view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CatalogDetailView {
  id = input<string>();

  categoryComponents = computed(() => {
    const categoryId = this.id();
    return COMPONENTS_REGISTRY.filter(c => c.category === categoryId);
  });

  // Demo state for showcases
  selectedDate = signal<string>('2026-05-28');
}
