import {Adresse} from './adresse';
import {User} from './user';
import {Rdv} from './rdv';
import {Specialite} from './specialite';
import {Motif} from './motif';
import {PraticienSpecialite} from './praticien-specialite';

export class Praticien extends User {

  constructor(private _prenom?: string, private _nom_praticien?: string, private _drdv?: Rdv[], private _praticienSpecialites?: PraticienSpecialite[],
              private _adresses?: Adresse[], private _motifs?: Motif[]) {
    super();
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }


  get nom_praticien(): string {
    return this._nom_praticien;
  }

  set nom_praticien(value: string) {
    this._nom_praticien = value;
  }

  get drdv(): Rdv[] {
    return this._drdv;
  }

  set drdv(value: Rdv[]) {
    this._drdv = value;
  }

  get praticienSpecialites(): PraticienSpecialite[] {
    return this._praticienSpecialites;
  }

  set praticienSpecialites(value: PraticienSpecialite[]) {
    this._praticienSpecialites = value;
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
