import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {
  darkMode :boolean= false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  openStudentDir(){
    this.router.navigate(['/search']);
  }
  openPendingPermission() {
    this.router.navigate(['/pendingRequest']);
  }
  openAnnouncement() {
    this.router.navigate(['/addAnnouncement']);
  }
}
