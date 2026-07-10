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
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-block w-full',
  },
})
export class NativePicker {
  value = model<string>();

  type = input<'date' | 'time' | 'month' | 'color' | 'week' | 'datetime-local'>(
    'date'
  );
  label = input<string>('');
  placeholder = input<string>('');
  min = input<string>('');
  max = input<string>('');
  disabled = input<boolean>(false);
  icon = input<string>('');
  variant = input<'glass' | 'solid' | 'bordered'>('glass');
  colorScheme = input<'primary' | 'accent' | 'success' | 'warn'>('primary');

  private nativeInputRef =
    viewChild<ElementRef<HTMLInputElement>>('nativeInput');

  containerClasses = computed(() => {
    const classes: string[] = [];

    switch (this.variant()) {
      case 'solid':
        classes.push(
          'bg-slate-900 border border-slate-800 focus-within:border-slate-700'
        );
        break;
      case 'bordered':
        classes.push(
          'bg-transparent border-2 border-dashed border-white/20 focus-within:border-white/40'
        );
        break;
      case 'glass':
      default:
        classes.push(
          'bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 focus-within:border-white/25 backdrop-blur-md'
        );
        break;
    }

    switch (this.colorScheme()) {
      case 'accent':
        classes.push('focus-within:ring-2 focus-within:ring-[#EC4899]/30');
        break;
      case 'success':
        classes.push('focus-within:ring-2 focus-within:ring-emerald-500/30');
        break;
      case 'warn':
        classes.push('focus-within:ring-2 focus-within:ring-amber-500/30');
        break;
      case 'primary':
      default:
        classes.push('focus-within:ring-2 focus-within:ring-blue-500/30');
        break;
    }

    return classes.join(' ');
  });

  glowClasses = computed(() => {
    switch (this.colorScheme()) {
      case 'accent':
        return 'from-[#E21C34] via-[#EC4899] to-[#6366F1]';
      case 'success':
        return 'from-emerald-500 to-teal-500';
      case 'warn':
        return 'from-amber-500 to-orange-500';
      case 'primary':
      default:
        return 'from-blue-600 to-indigo-600';
    }
  });

  iconClasses = computed(() => {
    switch (this.colorScheme()) {
      case 'accent':
        return 'text-[#EC4899]';
      case 'success':
        return 'text-emerald-400';
      case 'warn':
        return 'text-amber-400';
      case 'primary':
      default:
        return 'text-blue-400';
    }
  });

  resolvedIcon = computed(() => {
    const customIcon = this.icon();
    if (customIcon) return customIcon;

    switch (this.type()) {
      case 'time':
        return 'schedule';
      case 'month':
        return 'date_range';
      case 'week':
        return 'calendar_view_week';
      case 'datetime-local':
        return 'event_note';
      case 'color':
        return 'palette';
      case 'date':
      default:
        return 'calendar_today';
    }
  });

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
      case 'week':
        return this.formatWeek(rawValue);
      case 'datetime-local':
        return this.formatDateTimeLocal(rawValue);
      case 'color':
      default:
        return rawValue.toUpperCase();
    }
  });

  triggerPicker(event: MouseEvent | TouchEvent): void {
    if (this.disabled()) return;

    event.preventDefault();

    const inputEl = this.nativeInputRef()?.nativeElement;
    if (inputEl && 'showPicker' in HTMLInputElement.prototype) {
      try {
        (inputEl as any).showPicker();
      } catch (error) {
        console.warn(
          'Native showPicker failed, fallback to programmatic focus/click:',
          error
        );
        inputEl.focus();
        inputEl.click();
      }
    } else if (inputEl) {
      inputEl.focus();
      inputEl.click();
    }
  }

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
      case 'week':
        return 'Select week';
      case 'datetime-local':
        return 'Select date & time';
      case 'color':
        return 'Select color';
      case 'date':
      default:
        return 'Select date';
    }
  }

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

  private formatWeek(weekStr: string): string {
    const parts = weekStr.split('-W');
    if (parts.length !== 2) return weekStr;
    return `Week ${parts[1]}, ${parts[0]}`;
  }

  private formatDateTimeLocal(dtStr: string): string {
    const parts = dtStr.split('T');
    if (parts.length !== 2) return dtStr;
    const dateFormatted = this.formatDate(parts[0]);
    const timeFormatted = this.formatTime(parts[1]);
    return `${dateFormatted} - ${timeFormatted}`;
  }
}
