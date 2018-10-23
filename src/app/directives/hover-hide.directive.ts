import { Directive, HostListener, ElementRef, Renderer  } from '@angular/core';

@Directive({
  selector: '[hoverHide]'
})
export class HoverHideDirective {

  constructor(public el: ElementRef, public renderer: Renderer) {
   }

  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true); //called when the mouse hovers above the element
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false); //called when the mouse hovers away from the element
  }
// Event method to be called on mouse enter and on mouse leave
  public hover(visible: boolean){
      if(visible){
      // Mouse enter   
        this.renderer.setElementStyle(this.el.nativeElement.cells[3], 'opacity', '1');
      } else {
      // Mouse leave           
        this.renderer.setElementStyle(this.el.nativeElement.cells[3], 'opacity', '0');
      }
  }

}