import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyNavButtonComponent } from './journey-nav-button/journey-nav-button.component';
import { CenterDivComponent } from './center-div/center-div.component';



@NgModule({
  declarations: [JourneyNavButtonComponent, CenterDivComponent],
  imports: [CommonModule],
  exports: [JourneyNavButtonComponent, CenterDivComponent],
})
export class CommonComponentsModule {}
