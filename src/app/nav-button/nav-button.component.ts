import { Component, Directive, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.css'],
})


export class NavButtonComponent implements OnInit {
  @Input('nav-url') navUrl: String = '/';

  constructor() {}

  ngOnInit(): void {}

  navigate() {
    console.log('Navigating to url: ' + this.navUrl);
  }
}
