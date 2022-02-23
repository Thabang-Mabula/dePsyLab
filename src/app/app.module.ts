import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DecisionMatrixModule } from './decision-matrix/decision-matrix.module';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: '', redirectTo: '/decision-matrix/start', pathMatch: 'full' },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    DecisionMatrixModule,
  ],
  providers: [...environment.providers],
  bootstrap: [AppComponent],
})
export class AppModule {}
