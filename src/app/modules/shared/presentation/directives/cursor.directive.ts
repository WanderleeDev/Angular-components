import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appCursor]',
  host: {
    '(document:mousemove)': 'onMouseMove($event)',
    '(document:mouseleave)': 'onMouseLeave()',
    '(document:mouseenter)': 'onMouseEnter()',
  },
})
export class CursorDirective {
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  onMouseMove(event: MouseEvent) {
    this.setPositionToCursor(event.clientX, event.clientY);
  }

  onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0');
  }

  onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
  }

  private setPositionToCursor(x: number, y: number) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', `${y}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', `${x}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
  }
}
