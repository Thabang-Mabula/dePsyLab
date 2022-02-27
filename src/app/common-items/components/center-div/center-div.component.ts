import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'center-div',
  templateUrl: './center-div.component.html',
  styleUrls: ['./center-div.component.css'],
})
export class CenterDivComponent implements OnInit {
  @Input('center-content') isCenterContent: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
