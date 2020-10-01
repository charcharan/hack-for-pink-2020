import { Component, OnInit, Inject,ViewChild,ElementRef,EventEmitter } from '@angular/core';
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

  
onApproveOrReject = new EventEmitter(); 

@ViewChild("video")
public video: ElementRef;

@ViewChild("canvas")
public canvas: ElementRef;

public captures: Array<any> =[];

 videoWidth = 0;
  videoHeight = 0;
  constraints = {
    video: {
        facingMode: "environment",
        width: { ideal: 4096 },
        height: { ideal: 2160 }
    }
};

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendToAdmin(){
    this.parents = true;
    // this.http.get(environment.nodeNotifUrl+"/setNotification/12", {responseType: 'json'}).subscribe(s => {
       
    // })
  }
  public ngAfterViewInit() {
    // if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    //     navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
    //         const mediaStream = new MediaStream();
    //         const video = document.getElementById('video');
    //         this.video.nativeElement.srcObject= mediaStream;
    //         this.video.nativeElement.play;
    //     });


    // }
}

public capture() {
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 640, 480);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
}

openApproveOrReject(event) {
  this.onApproveOrReject.emit(event);
}

}
