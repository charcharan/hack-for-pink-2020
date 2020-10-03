import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import { from } from 'rxjs';
import { LoginService } from '../services/login.service';
import {MatDialog} from '@angular/material/dialog';
import { EmotionDialogComponent } from '../emotion-dialog/emotion-dialog.component';
@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(public dialog:MatDialog,private router : Router,private loginSrv : LoginService) { }

  ngOnInit() {
    if(this.loginSrv.surveyFlag){
      this.openEmotionDialog();
    }   
  }
  openPendingAppoin(){
    this.router.navigate(['/appointment']);
  }
  openEmotionDialog() {
    let width = window.screen.width < 599 ? '90%' : '48%'
    const dialogRef = this.dialog.open(EmotionDialogComponent,{
      maxWidth : width,
      height : '55%',
      disableClose : true,
      hasBackdrop : true,
      data:{
        action:'doctor'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
}
