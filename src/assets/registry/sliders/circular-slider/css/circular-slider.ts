import { ChangeDetectionStrategy, Component, computed, ElementRef, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-circular-slider',
  templateUrl: './circular-slider.html',
  styleUrl: './circular-slider.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block w-full flex justify-center',
    '(document:mousemove)': 'onDrag($event)',
    '(document:touchmove)': 'onDrag($event)',
    '(document:mouseup)': 'stopDrag()',
    '(document:touchend)': 'stopDrag()',
  },
})
export class CircularSlider {
  value = signal<number>(50);
  
  // SVG circle properties
  radius = 60;
  circumference = 2 * Math.PI * this.radius;
  
  dashOffset = computed(() => {
    return this.circumference - (this.value() / 100) * this.circumference;
  });

  isDragging = false;
  svgElement = viewChild<ElementRef<SVGElement>>('svgWrapper');

  startDrag(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.updateValueFromEvent(event);
  }

  onDrag(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    this.updateValueFromEvent(event);
  }

  stopDrag() {
    this.isDragging = false;
  }

  private updateValueFromEvent(event: MouseEvent | TouchEvent) {
    // Attempt to prevent scroll if the event is cancelable
    if (event instanceof TouchEvent && event.cancelable) {
      event.preventDefault(); 
    }
    
    const svg = this.svgElement()?.nativeElement;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const clientX = 'touches' in event ? event.touches[0].clientX : event.clientX;
    const clientY = 'touches' in event ? event.touches[0].clientY : event.clientY;

    const x = clientX - centerX;
    const y = clientY - centerY;

    // Calculate angle in degrees, mapping top to 0 and clockwise to 360
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    angle += 90; // Shift top to 0
    if (angle < 0) angle += 360; // Normalize 0-360

    // Map 0-360 to 0-100 percentage
    let percentage = (angle / 360) * 100;
    this.value.set(Math.round(percentage));
  }
}
