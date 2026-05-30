import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  input,
  model,
  viewChild,
} from '@angular/core';

const MONTH_NAMES = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

@Component({
  selector: 'app-native-picker',
  templateUrl: './native-picker.html',
  styleUrl: './native-picker.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-block w-full',
  },
})
export class NativePicker {
  // Model for two-way binding
  value = model<string>('');

  // Configurable inputs
  type = input<'date' | 'time' | 'month' | 'color'>('date');
  label = input<string>('');
  placeholder = input<string>('');
  min = input<string>('');
  max = input<string>('');
  disabled = input<boolean>(false);
  icon = input<string>('');
  variant = input<'glass' | 'solid' | 'bordered'>('glass');
  colorScheme = input<'primary' | 'accent' | 'success' | 'warn'>('primary');

  // Hidden native input reference
  private nativeInputRef =
    viewChild<ElementRef<HTMLInputElement>>('nativeInput');

  // Compute CSS class list for the container
  containerClasses = computed(() => {
    return [
      'picker-container',
      `variant-${this.variant()}`,
      `scheme-${this.colorScheme()}`,
      this.disabled() ? 'disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');
  });

  // Computed resolved icon
  resolvedIcon = computed(() => {
    const customIcon = this.icon();
    if (customIcon) return customIcon;

    switch (this.type()) {
      case 'time':
        return 'schedule';
      case 'month':
        return 'date_range';
      case 'color':
        return 'palette';
      case 'date':
      default:
        return 'calendar_today';
    }
  });

  // Computed formatted display text
  formattedValue = computed(() => {
    const rawValue = this.value();
    if (!rawValue) {
      return this.placeholder() || this.getDefaultPlaceholder();
    }

    switch (this.type()) {
      case 'date':
        return this.formatDate(rawValue);
      case 'month':
        return this.formatMonth(rawValue);
      case 'time':
        return this.formatTime(rawValue);
      case 'color':
      default:
        return rawValue.toUpperCase();
    }
  });

  // Action to programmatically open the browser's native picker dialog
  triggerPicker(event: MouseEvent | TouchEvent): void {
    if (this.disabled()) return;
    event.preventDefault();

    const inputEl = this.nativeInputRef()?.nativeElement;
    if (inputEl && 'showPicker' in HTMLInputElement.prototype) {
      try {
        (inputEl as any).showPicker();
      } catch (error) {
        inputEl.focus();
        inputEl.click();
      }
    } else if (inputEl) {
      inputEl.focus();
      inputEl.click();
    }
  }

  // Handle value change from the native input
  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.value.set(target.value);
    }
  }

  private getDefaultPlaceholder(): string {
    switch (this.type()) {
      case 'time':
        return 'Select time';
      case 'month':
        return 'Select month';
      case 'color':
        return 'Select color';
      case 'date':
      default:
        return 'Select date';
    }
  }

  // Parses YYYY-MM-DD -> e.g. "May 28, 2026"
  private formatDate(dateStr: string): string {
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;

    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);

    if (monthIndex >= 0 && monthIndex < 12) {
      return `${MONTH_NAMES[monthIndex]} ${day}, ${year}`;
    }
    return dateStr;
  }

  // Parses YYYY-MM -> e.g. "May 2026"
  private formatMonth(monthStr: string): string {
    const parts = monthStr.split('-');
    if (parts.length !== 2) return monthStr;

    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;

    if (monthIndex >= 0 && monthIndex < 12) {
      return `${MONTH_NAMES[monthIndex]} ${year}`;
    }
    return monthStr;
  }

  // Parses HH:MM -> e.g. "02:30 PM"
  private formatTime(timeStr: string): string {
    const parts = timeStr.split(':');
    if (parts.length < 2) return timeStr;

    let hours = parseInt(parts[0], 10);
    const minutes = parts[1];

    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    return `${formattedHours}:${minutes} ${ampm}`;
  }
}
