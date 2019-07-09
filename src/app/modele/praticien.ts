import {Adresse} from './adresse';
import {User} from './user';
import {Rdv} from './rdv';
import {Specialite} from './specialite';
import {Motif} from './motif';

export class Praticien extends User {

  constructor(private _prenom?: string, private _nom?: string, private _drdv?: Rdv[], private _specialites?: Specialite[], private _adresses?: Adresse[], private _motifs?: Motif[]) {
  super();
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

  get drdv(): Rdv[] {
    return this._drdv;
  }

  set drdv(value: Rdv[]) {
    this._drdv = value;
  }

  get specialites(): Specialite[] {
    return this._specialites;
  }

  set specialites(value: Specialite[]) {
    this._specialites = value;
  }

  get adresses(): Adresse[] {
    return this._adresses;
  }

  set adresses(value: Adresse[]) {
    this._adresses = value;
  }

  get motifs(): Motif[] {
    return this._motifs;
  }

  set motifs(value: Motif[]) {
    this._motifs = value;
  }
}
