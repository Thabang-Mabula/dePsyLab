import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockDecisionMatrixServiceService {
  constructor() {}

  /**
   * Geenrates a new item ID
   *
   * @returns string New item ID
   */
  generateNewItemId(): string {
    return '123456';
  }
}
