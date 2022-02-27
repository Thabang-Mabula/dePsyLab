import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'page-nav-button',
  templateUrl: './page-nav-button.component.html',
  styleUrls: ['./page-nav-button.component.css'],
})
export class PageNavButtonComponent implements OnInit {
  @Input('h-align') horizontalAlign: String = 'left';
  @Input('disabled') isDisabled: boolean = false;
  @ViewChild('button') button!: ElementRef<HTMLButtonElement>;
  constructor() {}

  ngOnInit() {}

  click() {
    this.button.nativeElement.click();
  }
}
