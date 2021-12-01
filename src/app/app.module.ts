import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CenterDivComponent } from './common-components/center-div/center-div.component';
import { JourneyNavButtonComponent } from './common-components/journey-nav-button/journey-nav-button.component';
import { DecisionMapModule } from './decision-map/decision-map.module';

const routes: Routes = [
  { path: '', redirectTo: '/decision-map/start', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), DecisionMapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
