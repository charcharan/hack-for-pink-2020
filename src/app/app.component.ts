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
  }
  logout(){
    this.showMenu = false;
    localStorage.clear();
    this.userType = null;
    this.route.navigate(['/']);
  }
  goToHome() {
    if(this.userType === 'parent') {
      this.route.navigate(['/parentHome']);
    }else if(this.userType === 'admin'){
      this.route.navigate(['/admHome']);
    }else if(this.userType === 'driver'){
      this.route.navigate(['/drivHome']);
    }else if(this.userType === 'staff'){
      this.route.navigate(['/staffHome']);
    }else if(this.userType === 'student'){
      this.route.navigate(['/studentHome']);
    }
  }
}
