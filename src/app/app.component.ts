import { RandomUsers } from './random-users';
import { TableService } from './table.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { elementAt } from 'rxjs';

export interface PeriodicElement {
  id: number;
  email:string;
  first_name: string;
  last_name: ''
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 0,
    email: '',
    first_name: '',
    last_name: ''
  }
  // {
  //   orr: 1,
  //   frr: '2+',
  //   seniority: 'B-Note',
  //   changes: 'Old',
  //   osuc: 0,
  //   instructions: '22 December',
  //   actions: 'Edit',
  //   actions2: 'Edit'
  // },
  // {
  //   orr: 2,
  //   frr: '2+',
  //   seniority: 'B-Note',
  //   changes: 'Old',
  //   osuc: 0,
  //   instructions: '22 December',
  //   actions: 'Edit',
  //   actions2: 'Edit'
  // },
  // {
  //   orr: 3,
  //   frr: '2+',
  //   seniority: 'B-Note',
  //   changes: 'Old',
  //   osuc: 0,
  //   instructions: '22 December',
  //   actions: 'Edit',
  //   actions2: 'Edit'
  // },
  // {
  //   orr: 4,
  //   frr: '2+',
  //   seniority: 'B-Note',
  //   changes: 'Old',
  //   osuc: 0,
  //   instructions: '22 December',
  //   actions: 'Edit',
  //   actions2: 'Edit'
  // },
  // {
  //   orr: 5,
  //   frr: '2+',
  //   seniority: 'B-Note',
  //   changes: 'Old',
  //   osuc: 0,
  //   instructions: '22 December',
  //   actions: 'Edit',
  //   actions2: 'Edit'
  // },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Actual_Task_2';
  row:any;
  myForm!: FormGroup;
  name: any;
  data:any;
  count: any;

  // deleteRow(){
  //    this.dataSource.pop();
  //    this.table.renderRows();
  // }

  // removeData(i:any){  this.count.splice(i,1);
  //   this.dataSource = new MatTableDataSource(this.count);
  //  }

  //  deleteTicket(rowid: number) {

  //   const index = this.dataSource.data.indexOf(rowid);

  //   if (rowid > -1) {
  //     this.dataSource.splice(rowid, 1);

  //   }
  // }





  displayedColumns: string[] = ['id', 'email', 'first_name', 'last_name','avatar','actions','actions2'];
  dataSource = new MatTableDataSource<PeriodicElement>();


  @ViewChild(MatTable)
  table!: MatTable<PeriodicElement>;

  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;



  // public users: any[] = [];

  constructor(public dialog: MatDialog, private _TableService: TableService) {

    this.myForm = new FormGroup
     ({
        id: new FormControl(''),
        email: new FormControl(''),
        first_name: new FormControl(''),
        last_name: new FormControl(''),
        avatar: new FormControl(''),
        instructions: new FormControl('')

     })
}

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

  this._TableService.getUsers()
  .subscribe((resp:any) =>
    {
      console.log(resp);
      let responseData = resp.data;

      this.dataSource.data = responseData;
    }

    );
}

  openTempDialog(row_obj:any) {
    this.myForm.patchValue(row_obj);
    let myTempDialog = this.dialog.open(this.dialogRef, {
       data: row_obj
     });
    myTempDialog.afterClosed().subscribe(result => {

    });
    // console.log(this.dataSource);
  }



}
