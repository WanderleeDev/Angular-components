import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appActiveCursor]',
  standalone: true,
})
export class ActiveCursorDirective {
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    if (event.button === 0) {
      this.renderer.addClass(this.elementRef.nativeElement, 'cursor-scale');
    }
  }
  @HostListener('document:mouseup')
  onMouseUp() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'cursor-scale');
  }
}
