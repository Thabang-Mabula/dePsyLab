import { NgModule } from '@angular/core';
import { DecisionMatrixStartComponent } from './pages/decision-matrix-start/decision-matrix-start.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { CommonModule } from '@angular/common';
import { DecisionMatrixComponent } from './components/decision-matrix/decision-matrix.component';
import { NewTitlePageComponent } from './pages/new-title-page/new-title-page.component';
import { OptionsPageComponent } from './pages/options-page/options-page.component';
import { DecisionMatrixRoutesEnum } from './constants/decision-matrix-routes-enum.enum';
import { OptionsDisplayComponent } from './components/options-display/options-display.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AssessOptionsPageComponent } from './pages/assess-options-page/assess-options-page.component';

const routes: Routes = [
  {
    path: 'decision-matrix',
    component: DecisionMatrixComponent,
    children: [
      {
        // TODO : use enum
        path: 'start',
        component: DecisionMatrixStartComponent,
      },
      {
        // TODO :  use enum
        path: 'title',
        component: NewTitlePageComponent,
      },
      {
        path: DecisionMatrixRoutesEnum.OPTIONS,
        component: OptionsPageComponent,
      },
      {
        path: DecisionMatrixRoutesEnum.ASSESS_OPTIONS,
        component: AssessOptionsPageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DecisionMatrixStartComponent,
    DecisionMatrixComponent,
    NewTitlePageComponent,
    OptionsPageComponent,
    OptionsDisplayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    CommonComponentsModule,
  ],
})
export class DecisionMatrixModule {}
