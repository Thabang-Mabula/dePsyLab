import { Option } from './option';
import { Criterion } from './criterion';
import { DescriptiveItem } from 'src/app/decision-matrix/entities/descriptive-item';

const OPTION_STARTING_INDEX: number = 1;
const COLLECTION_STARTING_INDEX: number = 1;

/**
 * Decision Matrix
 */
export class DecisionMatrix {
  private _title: string | undefined;
  private _options: Array<Option> = new Array<Option>();
  // TODO change this to a number
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

  /**
   * Add a new criterion to the existing criteria
   *
   * @param  {string} description Description of the criterion
   */
  addCriterion(description: string): void {
    let newCriterion = new Criterion();
    newCriterion.description = description;

    newCriterion.id = this.determineNewId(this.criteria);

    this.criteria?.push(newCriterion);
  }

  /**
   * Add a new option to the existing options
   *
   * @param  {string} description Description of the option
   */
  addOption(description: string) {
    let newOption = new Option();
    newOption.description = description;

    newOption.id = this.determineNewId(this.options);

    this._options?.push(newOption);
  }

  /**
   * Determines a new id for a collection of descriptive items
   *
   * @param  {Array<DescriptiveItem>} colletion Collection of descriptive items
   * @return new id
   */
  private determineNewId(colletion: Array<DescriptiveItem>) {
    if (colletion.length == 0) {
      return COLLECTION_STARTING_INDEX;
    }

    let maxOptionId: number = Number.MIN_VALUE;
    colletion.forEach((option: DescriptiveItem) => {
      if (option.id! > maxOptionId!) maxOptionId = option.id!;
    });

    return ++maxOptionId;
  }
}
