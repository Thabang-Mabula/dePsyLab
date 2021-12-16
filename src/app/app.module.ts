import { DecisionMatrixService } from './decision-matrix/services/decision-matrix.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CenterDivComponent } from './common-components/center-div/center-div.component';
import { JourneyNavButtonComponent } from './common-components/journey-nav-button/journey-nav-button.component';
import { DecisionMatrixModule } from './decision-matrix/decision-matrix.module';
import { DecisionMatrixServiceInterface } from './decision-matrix/services/decision-matrix-service-interface';
import { MockDecisionMatrixService } from './decision-matrix/services/mock-decision-matrix.service';
import { DecisionMatrixAbstractService } from './decision-matrix/services/decision-matrix-abstract-service';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  { path: '', redirectTo: '/decision-matrix/start', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes), DecisionMatrixModule],
  providers: [...environment.providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
