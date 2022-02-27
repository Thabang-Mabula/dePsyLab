import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyNavButtonComponent } from '../common-items/components/journey-nav-button/journey-nav-button.component';
import { CenterDivComponent } from '../common-items/components/center-div/center-div.component';
import { PageNavButtonComponent } from '../common-items/components/page-nav-button/page-nav-button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    JourneyNavButtonComponent,
    CenterDivComponent,
    PageNavButtonComponent,
  ],
  imports: [CommonModule, FontAwesomeModule],
  exports: [
    JourneyNavButtonComponent,
    CenterDivComponent,
    PageNavButtonComponent
  ],
})
export class CommonComponentsModule {}
