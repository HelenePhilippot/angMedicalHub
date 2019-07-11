import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, OnInit
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours, addMinutes
} from 'date-fns';
import {Subject} from 'rxjs';

import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RdvService} from '../service/rdv.service';
import {Rdv} from '../modele/rdv';
import {PraticienServiceService} from '../service/praticien-service.service';
import {Patient} from '../modele/patient';
import {PatientService} from '../service/patient.service';
import {formatNumber} from '@angular/common';
import {Praticien} from '../modele/praticien';
import {MotifService} from '../service/motif.service';
import {Motif} from '../modele/motif';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};


@Component({
  selector: 'app-planning-consult',
  templateUrl: './planning-consult.component.html',
  styleUrls: ['./planning-consult.component.css']
})
export class PlanningConsultComponent implements OnInit {
  @ViewChild('modalContent', {static: true}) modalContent: TemplateRef<any>;
  drdv: Rdv[] = [];
  view: CalendarView = CalendarView.Week;
  rdv: Rdv;
  CalendarView = CalendarView;
  nomM: string;
  nomP: string;
  praticien: Praticien;
  patient: Patient;
  motif: Motif;
  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({event}: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];

  activeDayIsOpen = true;

  // tslint:disable-next-line:max-line-length
  constructor(private modal: NgbModal, private rdvService: RdvService, private patientService: PatientService, private praticienService: PraticienServiceService, private motifService: MotifService) {
  }

  dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
                      event,
                      newStart,
                      newEnd
                    }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = {event, action};
    this.modal.open(this.modalContent, {size: 'lg'});
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: colors.red,
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true
        }
      }
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  ngOnInit() {
    this.getPraticien();
    this.list();

  }

  public list() {
    this.rdvService.list().subscribe(res => {
      this.drdv = res;
      for (let i of this.drdv) {
        if (i.praticien.nom_praticien === sessionStorage.getItem('username')) {
          if (i.patient !== null) {
            let rdv = {
              id: i.id,
              praticien: i.praticien.nom_praticien,
              patient: i.patient.nom,
              title: i.title,
              start: new Date(i.start),
              end: new Date(i.dend),
              color: colors.red,
              draggable: false,
              resizable: {
                beforeStart: false,
                afterEnd: false
              }
            };
            this.events = [
              ...this.events,
              rdv

            ];
          } else {
            let rdv = {
              id: i.id,
              praticien: i.praticien.nom_praticien,
              patient: null,
              title: i.title,
              start: new Date(i.start),
              end: new Date(i.dend),
              color: colors.blue,
              draggable: false,
              resizable: {
                beforeStart: false,
                afterEnd: false
              }
            };
            this.events = [
              ...this.events,
              rdv

            ];
          }
        }
      }
      console.log(this.drdv);
    });


  }
  public getPraticien() {
    this.praticienService.findByUsername(sessionStorage.getItem('username')).subscribe(res => {
      this.praticien = res;
    });
  }

  public save(event: CalendarEvent) {
    let ident = Number(event.id);
    this.rdvService.findRdvById(ident).subscribe(res => {
      this.rdv = res;
      this.rdv.patient = this.patient;
      this.rdv.motif = this.motif;
      console.log(this.rdv);
    });
    this.rdvService.update(ident, this.rdv).subscribe(res => {
      console.log('save');
    });
  }
}
