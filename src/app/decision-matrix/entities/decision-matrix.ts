import { Option } from './option';

export class DecisionMatrix {
  private _title: string | undefined;
  private _options: Array<Option> | undefined;
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

  public set options(options: Array<Option> | undefined) {}

  public get options(): Array<Option> | undefined {
    return this._options;
  }
}
