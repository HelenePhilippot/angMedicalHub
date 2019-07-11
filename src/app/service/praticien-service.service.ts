import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PraticienServiceService {

  private url = 'http://localhost:8080/boot/rest/praticien/specialite';

  private httpHeaders: HttpHeaders;

  private httpOptions: any;

  constructor(private http: HttpClient) {
    this.httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    this.httpOptions = {headers: this.httpHeaders};
  }

  public list(): Observable<any> {
    return this.http.get(this.url, this.httpOptions);
  }

  public findAll(): Observable<any> {
    return this.http.get('http://localhost:8080/boot/rest/praticien', this.httpOptions);
  }
  public findByUsername(username: string): Observable<any> {
    return this.http.get('http://localhost:8080/boot/rest/praticien/' + username, this.httpOptions);
  }

  public filtreSpecialite(spe: string): Observable<any> {
    return this.http.get('http://localhost:8080/boot/rest/praticien/rspe/' + spe, this.httpOptions);
  }

  public filtreVille(spe: string): Observable<any> {
    return this.http.get('http://localhost:8080/boot/rest/praticien/rville/' + spe, this.httpOptions);
  }

  public filtreNom(spe: string): Observable<any> {
    return this.http.get( 'http://localhost:8080/boot/rest/praticien/rnom/' + spe, this.httpOptions);
  }
}
