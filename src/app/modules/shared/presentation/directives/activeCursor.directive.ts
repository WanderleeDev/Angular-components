import { Directive, ElementRef, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appActiveCursor]',
  host: {
    '(document:mousedown)': 'onMouseDown($event)',
    '(document:mouseup)': 'onMouseUp()',
    '(document:mouseover)': 'onMouseOver($event)',
    '(document:mouseout)': 'onMouseOut($event)',
  },
})
export class ActiveCursorDirective {
  private readonly elementRef = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  onMouseDown(event: MouseEvent) {
    if (event.button === 0) {
      this.renderer.addClass(this.elementRef.nativeElement, 'cursor-scale');
    }
  }

  onMouseUp() {
    this.renderer.removeClass(this.elementRef.nativeElement, 'cursor-scale');
  }

  onMouseOver(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target && (target.closest('a') || target.closest('button') || target.closest('[role="button"]') || target.closest('input') || target.closest('select') || target.closest('textarea') || target.closest('.interactive'))) {
      this.renderer.addClass(this.elementRef.nativeElement, 'cursor-hover');
    }
  }

  onMouseOut(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target && (target.closest('a') || target.closest('button') || target.closest('[role="button"]') || target.closest('input') || target.closest('select') || target.closest('textarea') || target.closest('.interactive'))) {
      this.renderer.removeClass(this.elementRef.nativeElement, 'cursor-hover');
    }
  }
}
