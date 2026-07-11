import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  model,
} from '@angular/core';

@Component({
  selector: 'app-dual-slider',
  templateUrl: './dual-slider.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class DualSlider {
  label = input<string>('Pricing Filter');
  min = input<number>(0);
  max = input<number>(500);
  lowerValue = model<number>(100);
  upperValue = model<number>(400);

  lowerPercent = computed(() => {
    const minVal = this.min();
    const maxVal = this.max();
    return ((this.lowerValue() - minVal) / (maxVal - minVal)) * 100;
  });

  upperPercent = computed(() => {
    const minVal = this.min();
    const maxVal = this.max();
    return ((this.upperValue() - minVal) / (maxVal - minVal)) * 100;
  });

  protected onLowerChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const val = Number(target.value);
      if (val <= this.upperValue()) {
        this.lowerValue.set(val);
      } else {
        target.value = String(this.upperValue());
      }
    }
  }

  protected onUpperChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    if (target) {
      const val = Number(target.value);
      if (val >= this.lowerValue()) {
        this.upperValue.set(val);
      } else {
        target.value = String(this.lowerValue());
      }
    }
  }
}
