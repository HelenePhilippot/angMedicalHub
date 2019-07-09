import {User} from './user';
import {Rdv} from './rdv';

export class Patient extends User{
  constructor(private _prenom?: string, private _nom?: string, private _prdv?: Rdv[]) {
    super(this.login, this.password);

  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prdv(): Rdv[] {
    return this._prdv;
  }

  set prdv(value: Rdv[]) {
    this._prdv = value;
  }
}
