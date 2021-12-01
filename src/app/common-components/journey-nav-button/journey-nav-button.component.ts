import { Component, Directive, Input, OnInit } from '@angular/core';

@Component({
  selector: 'journey-nav-button',
  templateUrl: './journey-nav-button.component.html',
  styleUrls: ['./journey-nav-button.component.css'],
})
export class JourneyNavButtonComponent implements OnInit {
  @Input('nav-url') navUrl: String = '/';
  @Input('h-align') horizontalAlign: String = 'left';

  constructor() {}

  ngOnInit(): void {}

  navigate() {
    console.log('Navigating to url: ' + this.navUrl);
  }
}
