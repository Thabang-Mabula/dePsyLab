import { DescriptiveItem } from '../../common-items/data-types/descriptive-item';
import { DefaultDataTypeValueEnum } from '../../common-items/constants/default-data-type-value-enum.enum';

export class Criterion implements DescriptiveItem {
  private _id: number = DefaultDataTypeValueEnum.NUMBER;
  private _description: string = DefaultDataTypeValueEnum.STRING;

  set id(id: number) {
    this._id = id;
  }
  get id(): number {
    return this._id;
  }
  set description(description: string) {
    this._description = description;
  }
  get description(): string {
    return this._description;
  }
}
