import {Adresse} from './adresse';
import {User} from './user';

export class Praticien extends User {

  constructor(private prenom?: string, private nom?: string, private drdv?: Rdv[], private specialites: Specialite[], private adresses?: Adresse[], private motifs?: Motif[]) {
  super(this.login, this.password);
  }

}
