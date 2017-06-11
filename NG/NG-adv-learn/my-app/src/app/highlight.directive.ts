
import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})
class HighlightDirective {

    constructor(private ele: ElementRef) {
    }

    @Input()
    defaultColor: string;

    @Input('myHighlight')
    highlightColor: string;

    @HostListener("mouseenter")
    onMouseEnter() {
        this.ele.nativeElement.style.backgroundColor = this.highlightColor || this.defaultColor;
    }
    @HostListener("mouseleave")
    onMouseLeave() {
        this.ele.nativeElement.style.backgroundColor = '';
    }


}

export { HighlightDirective };