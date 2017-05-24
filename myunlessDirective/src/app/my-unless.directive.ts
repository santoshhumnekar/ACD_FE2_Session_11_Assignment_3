import { Directive, ElementRef, Renderer, Input } from '@angular/core';

@Directive({
  selector: '[MyUnless]'
})
export class MyUnlessDirective {

  constructor(public el: ElementRef, public renderer: Renderer) {}

    @Input() MyUnless: boolean;

    ngOnInit(){
        // Use renderer to render the emelemt with styles
        console.log(this.MyUnless)
        if(this.MyUnless) {
            console.log('hide');
            this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
        }
    }

}
