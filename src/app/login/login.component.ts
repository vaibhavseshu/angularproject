import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { throwIfEmpty } from 'rxjs';
import { AuthserviceService } from '../authservice.service';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  constructor(private route:Router,private apiservice:ApiserviceService) { }
 
  ngOnInit(): void {
   
  }
  loginForm = new FormGroup(

    {
      email: new FormControl(" ",Validators.required),
      password :new FormControl(null)
    }
  )
 
  login(){
    this.route.navigateByUrl('/login')
  }
  signup(){
    this.route.navigateByUrl('/signup')
  }
  profile(){
   this.apiservice.log_in(this.loginForm.value)
   this.route.navigateByUrl('/profile')
  }
 loginform(){
    console.log(this.loginForm)
  }

  hide = true;
}

