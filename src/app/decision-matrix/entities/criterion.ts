import { DescriptiveItem } from '../../common-items/data-types/descriptive-item';
import { DefaultDataTypeValueEnum } from '../../common-items/constants/default-data-type-value-enum.enum';

/**
 * Criterion
 */
export class Criterion implements DescriptiveItem {
  private _id: number = DefaultDataTypeValueEnum.NUMBER;
  private _description: string = DefaultDataTypeValueEnum.STRING;
  private _score: number = 0;

  public get score(): number {
    return this._score;
  }
  public set score(value: number) {
    this._score = value;
  }

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
