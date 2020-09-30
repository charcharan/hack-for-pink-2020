import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../app/services/login.service';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private login : LoginService,private toastr:ToastrService) { }

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
}
