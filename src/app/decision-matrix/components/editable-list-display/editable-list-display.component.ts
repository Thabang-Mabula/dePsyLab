import { Component, Input, OnInit } from '@angular/core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { DescriptiveItem } from 'src/app/decision-matrix/entities/descriptive-item';

@Component({
  selector: 'editable-list-display',
  templateUrl: './editable-list-display.component.html',
  styleUrls: ['./editable-list-display.component.css'],
})
export class EditableListDisplayComponent implements OnInit {
  faTrash = faTrash;
  @Input('list') editableList: Array<DescriptiveItem> =
    new Array<DescriptiveItem>();

  constructor() {}

  ngOnInit() {}

  getAll() {
    return this.editableList
  }

  delete(index: number) {
    this.editableList.splice(index, 1);
  }
}
