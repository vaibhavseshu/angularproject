import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private url = 'https://reqres.in/api/users?page=2'

  constructor(private http:HttpClient) { }
  table():Observable<any>{
    return this.http.get<any>(this.url)

  }
}
