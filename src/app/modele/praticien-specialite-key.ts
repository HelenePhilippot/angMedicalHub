import {Praticien} from './praticien';
import {Specialite} from './specialite';

export class PraticienSpecialiteKey {
  constructor(private _praticien: Praticien, private _specialite: Specialite) {
  }

  get praticien(): Praticien {
    return this._praticien;
  }

  set praticien(value: Praticien) {
    this._praticien = value;
  }

  get specialite(): Specialite {
    return this._specialite;
  }

  set specialite(value: Specialite) {
    this._specialite = value;
  }
}
