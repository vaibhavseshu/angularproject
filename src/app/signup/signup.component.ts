import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loginForm = new FormGroup(

    {
      firstName : new FormControl(" ",Validators.required),
      lastName :new FormControl(" ",Validators.required),
      gender:new FormControl(null),
      age:new FormControl(null),
      resume:new FormControl(null),
      password :new FormControl(null)
    }
  )
  loginform(){
    console.log(this.loginForm)
  }
  hide = true;
 

  

}
