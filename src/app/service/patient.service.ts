import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private url = 'http://localhost:8080/boot/rest/patient';

  private httpHeaders: HttpHeaders;

  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    this.httpOptions = {headers: this.httpHeaders};
  }

  public list(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }

  public findByUsername(username: string): Observable<any> {
    return this.http.get('http://localhost:8080/boot/rest/patient/' + username, this.httpOptions);
  }
}
