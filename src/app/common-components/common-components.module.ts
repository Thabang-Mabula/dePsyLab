import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyNavButtonComponent } from './journey-nav-button/journey-nav-button.component';
import { CenterDivComponent } from './center-div/center-div.component';
import { PageNavButtonComponent } from './page-nav-button/page-nav-button.component';

@NgModule({
  declarations: [
    JourneyNavButtonComponent,
    CenterDivComponent,
    PageNavButtonComponent,
  ],
  imports: [CommonModule],
  exports: [
    JourneyNavButtonComponent,
    CenterDivComponent,
    PageNavButtonComponent,
  ],
})
export class CommonComponentsModule {}
