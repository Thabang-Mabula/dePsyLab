import { Component, Directive, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'journey-nav-button',
  templateUrl: './journey-nav-button.component.html',
  styleUrls: ['./journey-nav-button.component.css'],
})
export class JourneyNavButtonComponent implements OnInit {
  @Input('nav-url') navUrl: String = '/';
  @Input('h-align') horizontalAlign: String = 'left';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigateByUrl(this.navUrl.toString());
  }
}
