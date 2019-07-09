export class Specialite {
  constructor(private _id?: number, private _specialite?: string){

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get specialite(): string {
    return this._specialite;
  }

  set specialite(value: string) {
    this._specialite = value;
  }
}
