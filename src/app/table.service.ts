import { RandomUsers } from './random-users';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeriodicElement } from './app.component';
// import { PeriodicElement } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private _url:string = "https://reqres.in/api/users?page=2"
  getData: any;

  constructor(private http: HttpClient) { }

  getUsers():Observable<PeriodicElement[]>{
    return this.http.get<PeriodicElement[]>(this._url);
  }



}
