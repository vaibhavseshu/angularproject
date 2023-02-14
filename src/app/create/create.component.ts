import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  new_user=new FormGroup({
  id :new FormControl(null),
  email : new FormControl('', [Validators.required]),
  first_name : new FormControl(" ",[Validators.required]),
  last_name : new FormControl('',[Validators.required])}
  )
  return_data(){
    return this.new_user.value
  }

  

}


