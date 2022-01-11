import { Option } from './option';
import { DefaultDataTypeValueEnum } from '../../common-items/constants/default-data-type-value-enum.enum';
import { Criterion } from './criterion';
import { DebugElement } from '@angular/core';
import { DescriptiveItem } from 'src/app/common-items/data-types/descriptive-item';

const OPTION_STARTING_INDEX: number = 1;
const COLLECTION_STARTING_INDEX: number = 1;

export class DecisionMatrix {
  private _title: string | undefined;
  private _options: Array<Option> = new Array<Option>();
  private _id: string | undefined;
  private _criteria: Array<Criterion> = new Array<Criterion>();

  public get criteria(): Array<Criterion> {
    return this._criteria;
  }
  public set criteria(value: Array<Criterion>) {
    this._criteria = value;
  }

  public get id(): string | undefined {
    return this._id;
  }

  public set id(value: string | undefined) {
    this._id = value;
  }

  public get title(): string | undefined {
    return this._title;
  }
  public set title(value: string | undefined) {
    this._title = value;
  }

  public set options(options: Array<Option>) {
    this._options = options;
  }

  public get options(): Array<Option> {
    return this._options;
  }

  addCriterion(description: string): void {
    let newCriterion = new Criterion();
    newCriterion.description = description;

    newCriterion.id = this.determinNewId(this.criteria);

    this.criteria?.push(newCriterion);
  }

  addOption(description: string) {
    let newOption = new Option();
    newOption.description = description;

    newOption.id = this.determineNewOptionId();

    this._options?.push(newOption);
  }

  private determineNewOptionId(): number {
    if (this._options.length == 0) {
      return OPTION_STARTING_INDEX;
    }

    let maxOptionId: number = DefaultDataTypeValueEnum.NUMBER;
    this._options.forEach((option: Option) => {
      if (option.id! > maxOptionId!) maxOptionId = option.id!;
    });

    return ++maxOptionId;
  }

  private determinNewId(colletion: Array<DescriptiveItem>) {
    if (this._options.length == 0) {
      return COLLECTION_STARTING_INDEX;
    }

    let maxOptionId: number = Number.MIN_VALUE;
    this._options.forEach((option: Option) => {
      if (option.id! > maxOptionId!) maxOptionId = option.id!;
    });

    return ++maxOptionId;
  }
}
