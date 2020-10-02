import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-emotion-dialog',
  templateUrl: './emotion-dialog.component.html',
  styleUrls: ['./emotion-dialog.component.scss']
})
export class EmotionDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmotionDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
              private toastr : ToastrService,private loginSrv : LoginService) { }

  ngOnInit() {
  }
  closePop(){
    this.loginSrv.surveyFlag = false;
    this.dialogRef.close();
    this.toastr.success("Thanks for your interest.")
  }
}
