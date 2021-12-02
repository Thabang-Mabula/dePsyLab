import { NgModule } from '@angular/core';
import { DecisionMatrixStartComponent } from './decision-matrix-start/decision-matrix-start.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { CommonModule } from '@angular/common';
import { DecisionMatrixComponent } from './decision-matrix/decision-matrix.component';
import { NewTitlePageComponent } from './new-title-page/new-title-page.component';

const routes: Routes = [
  {
    path: 'decision-matrix',
    component: DecisionMatrixComponent,
    children: [
      {
        path: 'start',
        component: DecisionMatrixStartComponent,
      },
      {
        path: 'title',
        component: NewTitlePageComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    DecisionMatrixStartComponent,
    DecisionMatrixComponent,
    NewTitlePageComponent,
  ],
  imports: [CommonModule, RouterModule.forRoot(routes), CommonComponentsModule],
})
export class DecisionMatrixModule {}
