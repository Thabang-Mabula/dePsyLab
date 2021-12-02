import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CenterDivComponent } from './common-components/center-div/center-div.component';
import { JourneyNavButtonComponent } from './common-components/journey-nav-button/journey-nav-button.component';
import { DecisionMatrixModule } from './decision-matrix/decision-matrix.module';

const routes: Routes = [
  { path: '', redirectTo: '/decision-matrix/start', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), DecisionMatrixModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
