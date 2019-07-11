import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rdv} from '../modele/rdv';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private url = 'http://localhost:8080/boot/rest/rdv';

  private httpHeaders: HttpHeaders;

  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.httpOptions = {headers: this.httpHeaders};
  }

  public list(): Observable<any> {
    return this.http.get('http://localhost:8080/boot/rest/rdv/infos', {headers: this.httpHeaders});
  }
  public findRdvById(id: number): Observable<any> {
    return this.http.get('http://localhost:8080/boot/rest/rdv/' + id,{headers: this.httpHeaders});
  }

  public delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions);
  }

  public update(id: number, rdv: Rdv): Observable<any> {
    // tslint:disable-next-line:max-line-length
    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=UTF-8' })
    this.httpHeaders.append('Accept', 'application/json, text/csv');
    this.httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    this.httpHeaders.append('Access-Control-Allow-Origin', '*');
    // tslint:disable-next-line:max-line-length
    this.httpHeaders.append('Authorization', 'Basic ' + btoa(sessionStorage.getItem('username') + ':' + sessionStorage.getItem('password')));
    return this.http.put('http://localhost:8080/boot/rest/rdv/' + id, rdv, this.httpOptions);
  }
}
