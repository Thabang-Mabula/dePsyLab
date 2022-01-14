import { DescriptiveItem } from '../../common-items/data-types/descriptive-item';
import { DefaultDataTypeValueEnum } from '../../common-items/constants/default-data-type-value-enum.enum';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export class Option implements DescriptiveItem {
  private _id: number = DefaultDataTypeValueEnum.NUMBER;
  private _description: string = DefaultDataTypeValueEnum.STRING;

  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    // TODO implement null check
    // TODO create a custom error for illegal arguments
    if (value! < 0) {
      throw Error('Value must be a positive integer');
    }
    this._id = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
}
