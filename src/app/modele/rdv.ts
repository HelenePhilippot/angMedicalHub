import {Patient} from './patient';
import {Praticien} from './praticien';
import {Motif} from './motif';

export class Rdv {
  constructor(private _id?: number, private _patient?: Patient, private _praticien?: Praticien, private _dateD?: Date, private _dateF?: Date, private _motif?: Motif){

  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get patient(): Patient {
    return this._patient;
  }

  set patient(value: Patient) {
    this._patient = value;
  }

  get praticien(): Praticien {
    return this._praticien;
  }

  set praticien(value: Praticien) {
    this._praticien = value;
  }

  get dateD(): Date {
    return this._dateD;
  }

  set dateD(value: Date) {
    this._dateD = value;
  }

  get dateF(): Date {
    return this._dateF;
  }

  set dateF(value: Date) {
    this._dateF = value;
  }

  get motif(): Motif {
    return this._motif;
  }

  set motif(value: Motif) {
    this._motif = value;
  }
}
