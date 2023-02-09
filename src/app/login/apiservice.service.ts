import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private auth:AuthserviceService,private http:HttpClient,private route:Router) { }
  log_in(data:any){ 
    return this.http.post<any>('https://reqres.in/api/register',data
  ).subscribe(res =>{
    localStorage.setItem('accesstoken',res.token)
  } )
  }
  gettoken(){
    return localStorage.getItem('accesstoken')
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('accesstoken');
    return authToken !== null ? true : false;
  }
  loggedin(){
    this.route.navigateByUrl('/profile')
  }
  doLogout() {
    let removeToken = localStorage.removeItem('accesstoken');
    if (removeToken == null) {
      this.route.navigate(['login']);
    }
  }
}
