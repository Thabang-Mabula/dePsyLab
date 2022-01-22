import { Option } from './option';
import { DefaultDataTypeValueEnum } from 'src/app/common-items/constants/default-data-type-value-enum.enum';

export class RankedOption {
  private _option: Option = new Option();

  private _rank: number = DefaultDataTypeValueEnum.NUMBER;

  private _score: number = DefaultDataTypeValueEnum.NUMBER;

  public get option(): Option {
    return this._option;
  }
  public set option(value: Option) {
    this._option = value;
  }

  public get rank(): number {
    return this._rank;
  }
  public set rank(value: number) {
    this._rank = value;
  }

  public get score(): number {
    return this._score;
  }
  public set score(value: number) {
    this._score = value;
  }
}
