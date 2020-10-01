import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';
import { Router} from '@angular/router';
@Component({
  selector: 'app-warrior',
  templateUrl: './warrior.component.html',
  styleUrls: ['./warrior.component.scss']
})
export class WarriorComponent implements OnInit {

  constructor(public dialog:MatDialog,private route : Router) { }

  ngOnInit() {
    window.scroll(0,0);
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

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
