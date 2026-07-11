import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-volume-slider',
  templateUrl: './volume-slider.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full',
  },
})
export class VolumeSlider {
  volume = signal<number>(50);

  volumeIcon = computed(() => {
    const val = this.volume();
    if (val === 0) return 'volume_mute';
    if (val < 50) return 'volume_down';
    return 'volume_up';
  });

  updateVolume(event: Event) {
    const target = event.target as HTMLInputElement;
    this.volume.set(Number(target.value));
  }
}
