import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StarRatingComponent } from 'app/templateComponents/StarRating/StarRating.component';
import { Window } from 'app/modules/catalog/presentation/components/window/window';

@Component({
  selector: 'app-catalog-detail-view',
  imports: [RouterLink, Window, StarRatingComponent],
  templateUrl: './catalog-detail-view.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CatalogDetailView {
  id = input<string>();
}
