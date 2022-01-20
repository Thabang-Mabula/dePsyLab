import { Pipe, PipeTransform } from '@angular/core';
import { DefaultDataTypeValueEnum } from 'src/app/common-items/constants/default-data-type-value-enum.enum';

@Pipe({
  name: 'score',
})
export class ScorePipe implements PipeTransform {
  transform(value: number): any {
    return value == DefaultDataTypeValueEnum.NUMBER
      ? DefaultDataTypeValueEnum.STRING
      : value;
  }
}
