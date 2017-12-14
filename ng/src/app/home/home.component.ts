import { Component, OnInit } from '@angular/core';
import { extend } from 'webdriver-js-extender';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    title = 'Welcome to home';
    constructor (){

    }
    ngOnInit() {

    }
}