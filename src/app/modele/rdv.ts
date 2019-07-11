import {Patient} from './patient';
import {Praticien} from './praticien';
import {Motif} from './motif';
import {CalendarEvent} from './calender-event';


export class Rdv implements CalendarEvent {

  constructor(private _id?: number, private _patient?: Patient, private _praticien?: Praticien, private _start?: Date, private _dend?: Date, private _motif?: Motif,_title?: string) {

  }

  get start(): Date {
    return this._start;
  }

  set start(value: Date) {
    this._start = value;
  }


  get dend(): Date {
    return this._dend;
  }

  set dend(value: Date) {
    this._dend = value;
  }

  get title(): string {
    return this.title;
  }

  set title(value: string) {
    this.title = value;
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


  get motif(): Motif {
    return this._motif;
  }

  set motif(value: Motif) {
    this._motif = value;
  }
}
