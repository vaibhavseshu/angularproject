import { Component, Input, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile.component';
import { TableService } from '../table.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  constructor(private serve:TableService) {
    
  }
  data1:any=this.serve.datashare

  ngOnInit(): void {
    console.log(this.data1)
  }
  

}
