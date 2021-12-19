export class Option {
  private _id: number | undefined;
  private _description: string | undefined;

  public get id(): number | undefined {
    return this._id;
  }
  
  public set id(value: number | undefined) {
    // TODO implement null check
    // TODO create a custom error for illegal arguments
    if (value! < 0) {
      throw Error('Value must be a positive integer');
    }
    this._id = value;
  }

  public get description(): string | undefined {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
}
