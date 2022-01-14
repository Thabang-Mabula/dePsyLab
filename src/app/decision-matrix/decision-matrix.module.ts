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
import { AssessOptionsComponent } from './components/assess-options/assess-options.component';
import { CriteriaPageComponent } from './pages/criteria-page/criteria-page.component';
import { EditableListDisplayComponent } from './components/editable-list-display/editable-list-display.component';
import { ResultsPageComponent } from './pages/results-page/results-page.component';

const routes: Routes = [
  {
    path: 'decision-matrix',
    component: DecisionMatrixComponent,
    children: [
      {
        path: '',
        redirectTo: DecisionMatrixRoutesEnum.START,
        pathMatch: 'full',
      },
      {
        path: DecisionMatrixRoutesEnum.START,
        component: DecisionMatrixStartComponent,
      },
      {
        path: DecisionMatrixRoutesEnum.TITLE,
        component: NewTitlePageComponent,
      },
      {
        path: DecisionMatrixRoutesEnum.CRITERIA,
        component: CriteriaPageComponent,
      },
      {
        path: DecisionMatrixRoutesEnum.OPTIONS,
        component: OptionsPageComponent,
      },
      {
        path: DecisionMatrixRoutesEnum.ASSESS_OPTIONS,
        component: AssessOptionsPageComponent,
      },
      {
        path: DecisionMatrixRoutesEnum.RESULTS,
        component: ResultsPageComponent,
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
    AssessOptionsPageComponent,
    AssessOptionsComponent,
    CriteriaPageComponent,
    EditableListDisplayComponent,
    ResultsPageComponent,
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
