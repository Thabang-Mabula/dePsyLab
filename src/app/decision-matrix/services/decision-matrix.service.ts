import { Injectable } from '@angular/core';
import { DecisionMatrixAbstractService } from './decision-matrix-abstract-service';
import { DecisionMatrixServiceInterface } from './decision-matrix-service-interface';

@Injectable({
  providedIn: 'root',
})
export class DecisionMatrixService implements DecisionMatrixAbstractService {
  constructor() {}
  generateNewItemId(): string {
    return '';
  }
}
