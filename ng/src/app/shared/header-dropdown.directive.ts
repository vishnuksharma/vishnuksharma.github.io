import {Directive, HostListener, HostBinding, ViewChild, ElementRef} from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Directive({
    selector: '[appHeaderDropdown]'
})

export class HeaderDropdownDirective implements AfterViewInit{
    @HostBinding('class.in') isOpen = false;

    @HostListener('click') toggleHeaderNav(){
        this.isOpen = !this.isOpen;
    }
    
    constructor(private eleRef: ElementRef){}

    ngAfterViewInit(){

       // console.log( this.eleRef.nativeElement.querySelector('.myNavbar'));
    }
}