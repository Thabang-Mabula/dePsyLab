import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyNavButtonComponent } from './journey-nav-button/journey-nav-button.component';
import { CenterDivComponent } from './center-div/center-div.component';
import { PageNavButtonComponent } from './page-nav-button/page-nav-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditableListDisplayComponent } from './editable-list-display/editable-list-display.component';

@NgModule({
  declarations: [
    JourneyNavButtonComponent,
    CenterDivComponent,
    PageNavButtonComponent,
    EditableListDisplayComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    JourneyNavButtonComponent,
    CenterDivComponent,
    PageNavButtonComponent,
    EditableListDisplayComponent
  ],
})
export class CommonComponentsModule {}
