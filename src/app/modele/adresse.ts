import {Praticien} from './praticien';

export class Adresse {
  constructor(private _numero?: number, private _rue?: string, private _cp?: string, private _ville?: string, private _praticien?: Praticien) {
  }


  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

  get rue(): string {
    return this._rue;
  }

  set rue(value: string) {
    this._rue = value;
  }

  get cp(): string {
    return this._cp;
  }

  set cp(value: string) {
    this._cp = value;
  }

  get ville(): string {
    return this._ville;
  }

  set ville(value: string) {
    this._ville = value;
  }

  get praticien(): Praticien {
    return this._praticien;
  }

  set praticien(value: Praticien) {
    this._praticien = value;
  }
}
