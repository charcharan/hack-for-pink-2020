import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { Router} from '@angular/router';
import { EmotionDialogComponent } from '../emotion-dialog/emotion-dialog.component';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-warrior',
  templateUrl: './warrior.component.html',
  styleUrls: ['./warrior.component.scss']
})
export class WarriorComponent implements OnInit {

  constructor(public dialog:MatDialog,private route : Router,private loginSrv : LoginService) { }

  ngOnInit() {
   document.querySelector('#scrollId').scrollIntoView();  
    if(this.loginSrv.surveyFlag){
      this.openEmotionDialog();
    }    
  }

  openReportScanning(){
    let width = window.screen.width < 599 ? '90%' : '48%'
    const dialogRef = this.dialog.open(DialogOverviewComponent,{
      maxWidth : width,
      height : '80%',
      disableClose : true,
      hasBackdrop : true,
      data:{
        action:'ReportScanning'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }
  openTimelineView() {
    this.route.navigate(['/timeLine'])
  }

  gotToMakeAWish(){
    this.route.navigate(['/makeAwish'])
  }

  gotToScreeningMethods(){
    this.route.navigate(['/screeningMethods'])
  }

  openEmotionDialog() {
    let width = window.screen.width < 599 ? '90%' : '48%'
    const dialogRef = this.dialog.open(EmotionDialogComponent,{
      maxWidth : width,
      height : '55%',
      disableClose : true,
      hasBackdrop : true,
      data:{
        action:'open'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

}
