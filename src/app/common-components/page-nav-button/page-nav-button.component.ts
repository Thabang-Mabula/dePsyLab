import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-nav-button',
  templateUrl: './page-nav-button.component.html',
  styleUrls: ['./page-nav-button.component.css'],
})
export class PageNavButtonComponent implements OnInit {
  @Input('h-align') horizontalAlign: String = 'left';

  constructor() {}

  ngOnInit() {}
}
