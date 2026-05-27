import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-catalog-header',
  imports: [],
  templateUrl: './catalog-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)',
  },
})
export class CatalogHeader {
  searchQuery = input<string>('');
  searchChange = output<string>();

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchChange.emit(value);
  }

  handleKeyboardEvent(event: KeyboardEvent): void {
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();
      const inputEl = document.querySelector(
        '.search-input'
      ) as HTMLInputElement;
      if (inputEl) {
        inputEl.focus();
      }
    }
  }
}
