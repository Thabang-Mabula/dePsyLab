import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class DecisionItemServiceService {
  constructor() {}

  /**
   * Gets a new item ID
   *
   * @returns string New item ID
   */
  getNewItemId(): string {
    return '';
  }
}
