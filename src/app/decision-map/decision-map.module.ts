import { NgModule } from '@angular/core';
import { DecisionMapStartComponent } from './decision-map-start/decision-map-start.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { AppModule } from '../app.module';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { CommonModule } from '@angular/common';
import { DecisionMapComponent } from './decision-map/decision-map.component';


const routes: Routes = [
  {
    path: 'decision-map',
    component: DecisionMapComponent,
    children: [
      {
        path: 'start',
        component: DecisionMapStartComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [DecisionMapStartComponent, DecisionMapComponent],
  imports: [CommonModule, RouterModule.forRoot(routes), CommonComponentsModule],
})
export class DecisionMapModule {}
