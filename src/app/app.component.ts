import { Component, Inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { popin } from './core/animations/animations';
import { LoginService } from '../app/services/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [popin]
})
export class AppComponent {
 
  showMenu = false;
  userType:string = "";
  userName: string="";
  avatar:string;
  emailId:string;
  constructor(
    @Inject('loading') public loader,
    private route: Router, private login : LoginService) {  
   
  }
  ngOnInit() {
   this.userType =  this.login.userType;
  }
  onActivate(event) {
    window.scroll(0,0);   
}
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
  reload(){
    this.userType =  this.login.userType;
    this.userName = this.login.userName;
    this.avatar = this.login.avatar;
    this.emailId = this.login.emailId;
  }
  logout(){
    this.showMenu = false;
    localStorage.clear();
    this.userType = null;
    this.route.navigate(['/']);
  }
  goToHome() {
    if(this.userType === 'doctor') {
      this.route.navigate(['/doctor']);
    }else if(this.userType === 'warrior'){
      this.route.navigate(['/warrior']);
    }else if(this.userType === 'driver'){
      this.route.navigate(['/drivHome']);
    }else if(this.userType === 'staff'){
      this.route.navigate(['/staffHome']);
    }else if(this.userType === 'student'){
      this.route.navigate(['/studentHome']);
    }
  }
}
