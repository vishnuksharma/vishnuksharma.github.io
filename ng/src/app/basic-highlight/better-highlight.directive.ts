import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColorEnter = 'yellow';
  @Input() defaultColorLeave = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.backgroundColor = this.defaultColorEnter;
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseenter(){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.defaultColorEnter;
    this.renderer.setStyle(this.eleRef.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.eleRef.nativeElement, 'padding', '10px');
    this.renderer.setStyle(this.eleRef.nativeElement, 'border', '1px solid gray');
  }
  @HostListener('mouseleave') mouseleave(){
    // this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColorLeave;
  }

}
