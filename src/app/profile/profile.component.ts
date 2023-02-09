import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../login/apiservice.service';
import { TableService } from './table.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','avatar'];
  dataSource :any;
  
  constructor(private apiservice:ApiserviceService,private service:TableService) { 
    
  }
  
  ngOnInit(): void {
    this.service.table().subscribe(res => { this.dataSource = res.data;
    console.log(this.dataSource)});
  }
  insert(){
    this.service.table()

  }
  delet(){

  }

  logout()
  {
    this.apiservice.doLogout()
  }

  

}

