import {Rdv} from './rdv';
import {Adresse} from './adresse';
import {Motif} from './motif';
import {PraticienSpecialiteKey} from './praticien-specialite-key';

export class PraticienSpecialite {

  get psk(): PraticienSpecialiteKey {
    return this._psk;
  }

  set psk(value: PraticienSpecialiteKey) {
    this._psk = value;
  }

  constructor(private _psk: PraticienSpecialiteKey) {


  }
}

