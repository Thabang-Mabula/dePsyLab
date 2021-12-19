import { Option } from './option';
import { DefaultDataTypeValueEnum } from '../../common-items/constants/default-data-type-value-enum.enum';

const OPTION_STARTING_INDEX: number = 1;

export class DecisionMatrix {
  private _title: string | undefined;
  private _options: Array<Option> = new Array<Option>();
  private _id: string | undefined;

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

  public set options(options: Array<Option>) {}

  public get options(): Array<Option> {
    return this._options;
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

    return maxOptionId++;
  }
}
