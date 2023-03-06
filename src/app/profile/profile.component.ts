import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from '../create/create.component';
import { ApiserviceService } from '../login/apiservice.service';
import { TableService } from './table.service';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol',"create","update",'delete'];
  dataSource :any;
 
  constructor(private apiservice:ApiserviceService,private service:TableService,public dialog: MatDialog) { 
    
  }
  
  ngOnInit(): void {
    this.service.table().subscribe({next:res => { this.dataSource = res.data;
    console.log(this.dataSource)
    }});
    
  }
  
  insert(){
    const dialogRef = this.dialog.open(CreateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      // dialog data
      this.dataSource.push(result);
      this.dataSource = [...this.dataSource]
    });
  }
  
    
  delete(n:any){
    this.dataSource.splice(n,1)
    this.dataSource=[...this.dataSource]
  }
  update(element:any,index:any){
    this.service.datashare(element)
    const dialogRef = this.dialog.open(UpdateComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.dataSource[index] = result;
      this.dataSource = [...this.dataSource]
    })
    
  }

  logout()
  {
    this.apiservice.doLogout()
  }

}

