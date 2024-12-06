import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appCursor]',
  standalone: true,
})
export class CursorDirective {
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.setPositionToCursor(event.pageX, event.pageY);
  }

  private setPositionToCursor(x: number, y: number) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'top', `${y}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'left', `${x}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '1');
  }
}
