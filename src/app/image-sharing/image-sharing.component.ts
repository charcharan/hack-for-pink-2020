import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../app/services/login.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-image-sharing',
  templateUrl: './image-sharing.component.html',
  styleUrls: ['./image-sharing.component.scss']
})
export class ImageSharingComponent implements OnInit {
  userType:string = "";
  fileList=[];
  warriors=[
  {
    name : "Dacy",
    id : 101,
    files:["ECG.jpg","Mammogram.jpg","PathologyReport.jpg","OralReport.jpg"]
  },
  {
    name : "Macy",
    id : 102,
    files:["ECG.jpg","Mammogram.jpg","PathologyReport.jpg","OralReport.jpg"]
  },
  {
    name : "Lucy",
    id : 103,
    files:["ECG.jpg","Mammogram.jpg","PathologyReport.jpg","OralReport.jpg"]
  }
  ];
  doctors=[
    {
      name : "Dr.Peter",
      id : 201
    },
    {
      name : "Dr.Paul",
      id : 202
    },
    {
      name : "Dr.Watson",
      id : 203
    }
    ];

  selectedValue:number=101;
  checkAtrr : boolean = false;
  constructor(private login : LoginService,private toastr:ToastrService,public dialog:MatDialog) { }

  ngOnInit() {
    this.userType =  this.login.userType;
    this.warriors.forEach((w) => {
      if(this.selectedValue==w.id){
        this.fileList = w.files;
      }
    });
  }

  userChange(){
    this.warriors.forEach((w) => {
      if(this.selectedValue==w.id){
        this.fileList = w.files;
      }
    });
  }

  openNotification(){
    if(this.userType === "warrior"){
      this.toastr.warning("The file(s) are shared to the respective doctor.","Dear Warrior,"); 
    }else{
      this.toastr.warning("The warrior has been notified for the approval to share the file(s).","Dear Doctor,"); 
    }
  }

  openSharedWith(){
    const dialogRef = this.dialog.open(DialogOverviewComponent,{
      data:{
        action:'SharedWith',
        fileName: this.warriors[0].files[0],
        doctors: this.doctors.map(x=>x.name)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
     
    });
  }

  shareWith(){
    const dialogRef = this.dialog.open(DialogOverviewComponent,{
      data:{
        action:'share',
        fileName: this.warriors[0].files[0],
        doctors: this.doctors.map(x=>x.name)
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.openNotification();
    });
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

  openPendingApproval(){
    const dialogRef = this.dialog.open(DialogOverviewComponent,{
      data:{
        action:'PendingApprovals',
        fileName: this.warriors[0].files[0],
        doctors: this.doctors.map(x=>x.name)
      }
    });
    const subApproveOrReject = dialogRef.componentInstance.onApproveOrReject.subscribe((result) => {

      const dialogRefApproveOrReject = this.dialog.open(DialogOverviewComponent,{
        data:{
          action:result,
          fileName: this.warriors[0].files[0],
          doctor: this.doctors[0].name[0]
        }
      });
  })

}
selectAllcheckBox () {
  this.checkAtrr = !this.checkAtrr;
}
openImage() {
  const dialogRef = this.dialog.open(DialogOverviewComponent,{
    data:{
      action:'showImage',
    }
  });
  dialogRef.afterClosed().subscribe(result => {
   
  });
}
}
