import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
} from '@angular/core';

@Component({
  selector: 'app-range-slider',
  templateUrl: './range-slider.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class RangeSlider {
  label = input<string>('Performance Limit');
  min = input<number>(0);
  max = input<number>(100);
  step = input<number>(1);
  value = model<number>(50);

  percentage = computed(() => {
    const minVal = this.min();
    const maxVal = this.max();
    const current = this.value();
    return ((current - minVal) / (maxVal - minVal)) * 100;
  });

  protected onSliderChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      this.value.set(Number(target.value));
    }
  }
}
