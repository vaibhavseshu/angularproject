import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { TableService } from '../table.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  new_user1 = new FormGroup({
    id: new FormControl(null),
    email: new FormControl('', [Validators.required]),
    first_name: new FormControl(" ", [Validators.required]),
    last_name: new FormControl('', [Validators.required])
  }
  )

  constructor(private serve: TableService,public dialogRef: MatDialogRef<UpdateComponent>) {
  }
  data1: any = this.serve.getdata()
  ngOnInit(): void {
    this.new_user1.controls['id'].setValue(this.data1.id)
    this.new_user1.controls['email'].setValue(this.data1.email)
    this.new_user1.controls['first_name'].setValue(this.data1.first_name)
    this.new_user1.controls['last_name'].setValue(this.data1.last_name)
  }
  
  updatedata(){
    this.dialogRef.close(this.new_user1.value);
  }


}


