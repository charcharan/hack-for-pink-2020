import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent implements OnInit {
  parents = false;
  constructor(public dialogRef: MatDialogRef<DialogOverviewComponent>,private http:HttpClient, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendToAdmin(){
    this.parents = true;
    this.http.get(environment.nodeNotifUrl+"/setNotification/12", {responseType: 'json'}).subscribe(s => {
       
    })
  }
}
