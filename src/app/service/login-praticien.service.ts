import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../modele/user';

@Injectable({
  providedIn: 'root'
})
export class LoginPraticienService {

  private url = 'http://localhost:8080/boot/rest/praticien';

  private httpHeaders: HttpHeaders;

  private httpOptions: any;

  constructor(private http: HttpClient) {

  }

  public login(user: User): Observable<any> {
    this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json;charset=UTF-8', 'Authorization': 'Basic ' + btoa(user.login + ':' + user.password)});
    this.httpOptions = {headers: this.httpHeaders};
    return this.http.get(this.url, this.httpOptions);
  }
}
