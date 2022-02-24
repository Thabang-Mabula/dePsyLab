import { Pipe, PipeTransform } from '@angular/core';
import { DefaultDataTypeValueEnum } from 'src/app/common-items/constants/default-data-type-value-enum.enum';

@Pipe({
  name: 'score',
})

/**
 * Pipe for formatting scores
 */
export class ScorePipe implements PipeTransform {
  /**
   * Transforms any number that is not greater than 0
   * into a null value
   *
   * @param  {number} value Input value
   * @returns Value if value is greater than 0, null otherwise
   */
  transform(value: number): number | null {
    return value <= 0 ? null : value;
  }
}
