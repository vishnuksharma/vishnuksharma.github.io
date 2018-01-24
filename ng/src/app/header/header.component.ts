import { Component,Directive,ViewChild, EventEmitter, Output, ElementRef, Renderer2, HostListener, HostBinding } from "@angular/core";


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
@Directive({
    selector: '[appHeaderDirective]'
})
export class HeaderComponent {
    appLogo = '../assets/images/logo.png';
    @HostBinding('class.in') isOpen = false;
    toOpenDropdown: ElementRef;

    constructor(private renderer: Renderer2){}

    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string){
        this.featureSelected.emit(feature);
    }

    onClickNavBar(toOpenDropdown: ElementRef){
        this.toOpenDropdown = toOpenDropdown;
        // this.renderer.addClass(toOpenDropdown, 'in');
    }

    @HostListener('click') toggleHeaderNav(){
        this.isOpen = !this.isOpen;
        if(this.isOpen){
             this.renderer.addClass(this.toOpenDropdown, 'in');
        } else {
             this.renderer.removeClass(this.toOpenDropdown, 'in')
        }
    }

}