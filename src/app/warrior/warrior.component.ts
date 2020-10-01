import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { Router} from '@angular/router';
import { EmotionDialogComponent } from '../emotion-dialog/emotion-dialog.component';
@Component({
  selector: 'app-warrior',
  templateUrl: './warrior.component.html',
  styleUrls: ['./warrior.component.scss']
})
export class WarriorComponent implements OnInit {

  constructor(public dialog:MatDialog,private route : Router) { }

  ngOnInit() {
    window.scroll(0,0);
    this.openEmotionDialog();
  }

  openReportScanning(){
    const dialogRef = this.dialog.open(DialogOverviewComponent,{
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
    const dialogRef = this.dialog.open(EmotionDialogComponent,{
      width : '48%',
      height : '40%',
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
