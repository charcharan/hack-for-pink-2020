import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppComponent  } from '../app.component';
import {MatDialog} from '@angular/material/dialog';
import { SignUpSuccessDialogComponent } from '../sign-up-success-dialog/sign-up-success-dialog.component';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { NotifyService } from '../services/notify.service';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private loginService:LoginService,private http:HttpClient,private toastr:ToastrService,
    private router:Router,private app : AppComponent,public dialog: MatDialog,private notify:NotifyService, private ngZone: NgZone) { }
  othersLogin:boolean = true;
  login:boolean = true;
  signUp:boolean = false;
  signUpSuccess:boolean = false;
  selectedValue:number;
  selectedTab:number;
  somePlaceholder:string;
  studentLogin:boolean=false;
  notification:string;
  subscribe:Subscription;
  invalidLogin:boolean = false;
  errorMsg:string;
  emailGrav = '';
  fallbacks = ['identicon', 'monsterid', 'retro', 'robohash', 'wavatar'];
  avatar:string;
  styleObject = {
    borderWidth: '2px',
    borderColor: 'green',
    borderStyle: 'dashed',
    width: '150px',
    borderRadius: '20%'
  };
   types:any=[{"value":1,"viewValue":"Doctor"},
  {"value":2,"viewValue":"Warrior"}];
  ngOnInit() {
    this.selectedValue = 1;
    this.somePlaceholder = "Username";
    this.othersLogin = true;
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],      
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required], 
      lastName: ['', Validators.required],      
      emailId: ['', Validators.required], 
      username: ['', Validators.required], 
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
    }, {validator: this.passwordConfirming});   
    this.loginService.setSearchData('');
  }
  onTabChanged(event:any){
    this.loginForm.reset();
    this.signUpForm.reset();
    this.invalidLogin = false;
    if(event.index === 0){
      this.login = true;
      this.signUp = false;
      // this.studentLogin = false;
    }else if(event.index === 1){
      this.login = false;
      this.signUp = true;
      // this.studentLogin = false;
    }
  }

  runTimer(){
    const myNumber = interval(20000);
    let msg:string;
     this.subscribe = myNumber.subscribe((number:number) => { 
      this.toastr.warning("A Gentle Reminder to Self Assess","Dear warrior,"); 
      // this.http.get(environment.nodeNotifUrl+"/getNotification", {responseType: 'json'}).subscribe(s => {
    //     if(s && s["notification"] && s["notification"][0] !== "0"){
    //     this.notify.getNotification(s["notification"]).subscribe(res => {
    //       if(res["notification"].length > 0){
    //         if(this.loginService.getloginType() === 'parent'){
    //           if(s["notification"] == "9" || s["notification"] == "3"){
    //             msg="Get Ready to Board";
    //             this.toastr.success(msg,res["notification"]);     
    //              this.setDefaultNotif(); 
    //           } else if(s["notification"] == "10"){
    //             msg="Your Kid has Reached Safely!";
    //             this.toastr.success(msg,res["notification"]);     
    //             this.setDefaultNotif(); 
    //           } else if(s["notification"] == "12"){
    //             msg="Click here to get the details";
    //             // this.toastr.success(msg,res["notification"]); 
    //             const toast  = this.toastr.warning(msg,res["notification"]);
    //             toast.onHidden.subscribe(a=> {
    //               this.goToAdmin();
    //             })
    //             // this.toastr.toasts.re
    //             this.setDefaultNotif(); 
    //           } 
    //           else {
    //             msg = "Success";
    //           }
                
    //         } else if(this.loginService.getloginType() === 'admin'){
    //           if(s["notification"] == "5"){
    //             msg="Click here to get the details";
    //             // this.toastr.success(msg,res["notification"]); 
    //             const toast  = this.toastr.warning(msg,res["notification"]);
    //             toast.onHidden.subscribe(a=> {
    //               this.goToAdmin();
    //             })
    //             // this.toastr.toasts.re
    //             this.setDefaultNotif(); 
    //           }
    //         } 
    //       }
    //     })        
    // }})	
     });
      
  }

  setDefaultNotif(){
      this.http.get(environment.nodeNotifUrl+"/setNotification/0", {responseType: 'json'}).subscribe(s => {

      })
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
}

  typeChange(){
    if(this.selectedValue === 1){
      this.othersLogin = true;
      this.studentLogin = false;
      this.somePlaceholder = "Username"
    }else if(this.selectedValue === 2){
      this.othersLogin = false;
      this.studentLogin = true;
      this.somePlaceholder = "Warrior Name"
    }
    //   this.studentLogin = false;
    // }else if(this.selectedValue === 3){
    //   this.login = false;
    //   this.signUp = false;
    //   this.studentLogin = true;
    // }
  }

  doLogin(){
    let res = {};
    res =  {
      code : 200,
      message : "Login Successful",
      data : '',
      userType: this.loginForm.get('password').value === 'doctor123' ? 'doctor' : 'warrior'
    };
    this.runTimer();
    this.success(res);
    // if(this.studentLogin){
    //   this.loginService.searchStudent(this.loginForm.get('userName').value).subscribe(s=>{
    //     if(s["message"] !== "No data"){
    //       if(this.loginForm.get('password').value === 'student123'){
    //         this.loginService.userType = "student";
    //         this.loginService.userName = s["student"][0].student_name
    //         res =  {
    //           code : 200,
    //           message : "Login Successful",
    //           data : s["student"],
    //           userType: this.loginService.userType,
    //         };
    //         this.success(res);
    //       }
    //     } else {
    //       this.invalidLogin = true;
    //       this.errorMsg = "Roll Number or Password are Incorrect";
    //     }
    //   })
    // } else {
    //     this.loginService.doLogin(this.loginForm.value).subscribe(data => {
    //       /* 
    //       login_ ind --> 1 -admin, 
    //                       2 - parent , 
    //                       3 - staff, 
    //                       4 - kid,
    //                       5 - driver
    //       */
    //       if(data["message"] != "No data"){
    //         if (data && data.login_info.length > 0 && data.login_info[0].login_ind === 2) {
    //           this.loginService.userType = 'parent';
    //           this.loginService.userName = data.login_info[0].first_name+ " "+ data.login_info[0].last_name;
    //           this.loginService.userid = data.login_info[0].login_id;
    //           res = {
    //             code : 200,
    //             message : "Login Successful",
    //             userType: this.loginService.userType,
    //             data : data[0]
    //           };
    //         }        
    //         else if (data && data.login_info.length > 0 && data.login_info[0].login_ind === 1) {
    //           this.loginService.userType = "admin";
    //           this.loginService.userName = data.login_info[0].first_name+ " "+ data.login_info[0].last_name
    //           res =  {
    //             code : 200,
    //             message : "Login Successful",
    //             data : data[0],
    //             userType: this.loginService.userType,
    //           };
    //         }else if (data && data.login_info.length > 0 && data.login_info[0].login_ind === 5) {
    //           this.loginService.userType = "driver";
    //           this.loginService.userName = data.login_info[0].first_name+ " "+ data.login_info[0].last_name
    //           res = {
    //               code : 200,
    //               message : "Login Successful",
    //               data : data[0],
    //               userType: this.loginService.userType,
    //             };
    //         }
    //         else if (data && data.login_info.length > 0 && data.login_info[0].login_ind === 3) {
    //           this.loginService.userType = "staff";
    //           this.loginService.userName = data.login_info[0].first_name+ " "+ data.login_info[0].last_name
    //           res = {
    //               code : 200,
    //               message : "Login Successful",
    //               data : data[0],
    //               userType: this.loginService.userType,
    //             };
    //         }
    //         else if (data.userName == localStorage.getItem('userEmail') && data.password == localStorage.getItem('userPwd')) {
    //           this.loginService.userType = "parent";
    //           res = {
    //             code : 200,
    //             message : "Login Successful",
    //             data : data,
    //             userType: this.loginService.userType,
    //           };
    //         }else{
    //           this.loginService.userType = "";
    //           res = {
    //             code : 503,
    //             message : "Invalid Credentials",
    //             data : null
    //           };
    //         }

    //         this.success(res);
    //       } else {
    //         this.invalidLogin = true;
    //         this.errorMsg = "Username or Password or incorrect"
    //       }
    //     });		
      

    // }
   
	 
  }
  
  doSignUp(){
    let res = {};
    res =  {
      code : 200,
      message : "Login Successful",
      data : '',
      userType: 'warrior'
    };
    this.loginService.avatar = this.avatar;
    this.loginService.emailId = this.emailGrav;
    this.loginService.userName = this.signUpForm.get('username').value;
    this.success(res);
    // if(this.signUpForm.valid){
    //   localStorage.setItem('userEmail', this.signUpForm.get('emailId').value);
    //   localStorage.setItem('userPwd', this.signUpForm.get('password').value);
    //   this.loginService.doRegister(this.signUpForm).subscribe(res => {
    //    if(res.message === "Inserted"){
    //         const dialogRef = this.dialog.open(SignUpSuccessDialogComponent);
    //         this.signUpSuccess = true;
    //         dialogRef.afterClosed().subscribe(result => {
    //           this.login = true;
    //           this.signUp = false;
    //           this.signUpForm.reset();
    //           this.selectedTab  = -1;
    //           const tabCount = 2;
    //           this.selectedTab = (this.selectedTab + 1) % tabCount;
    //         });
    //      }
    //   });      
    // }		
	}

	// Login success function
	success(data){
    console.log("success -> data", data)
   
		if (data.code == 200 && data.userType === "doctor") {
      this.loginService.userType = 'doctor';
			this.router.navigate(['/doctor']);
		}else if(data.code == 200 && data.userType === "warrior"){
      this.loginService.userType = 'warrior';
			this.router.navigate(['/warrior']);
		}	else if(data.code == 200 && data.userType === "driver"){     
      this.router.navigate(['/drivHome']);
    } else if(data.code == 200 && data.userType === "staff"){     
      this.router.navigate(['/staffHome']);
    }else if(data.code == 200 && data.userType === "student"){     
      this.loginService.setStudentInfo(data['data']);
      this.router.navigate(['/studentHome']);
    } else {
      this.invalidLogin = true;
      this.errorMsg = this.studentLogin ? "Roll Number" : "Username"+  "or Password are Incorrect";
    }
    this.app.reload();
  }
  openSuccessDialog() {
    this.dialog.open(SignUpSuccessDialogComponent);
  }
  checkPassword(event:any){
    if(this.signUpForm.get('password').value != this.signUpForm.get('confirmPassword').value && this.signUpForm.get('confirmPassword').value != null){
      this.signUpForm.get('confirmPassword').setErrors({ pwdMatch : true});
    }
  }
  resetForm(value: number) {
    console.log("resetForm -> value", value)
    if(value === 1)
      this.loginForm.reset();
    else if(value === 2)
      this.signUpForm.reset();
    return false;
  }

  goToAdmin(){
    this.router.navigate(['/studentInfo']);
  }

  doGoogleLogin() {
    this.loginService.GoogleAuth().then(data => {
    console.log("doGoogleLogin -> data", data)
    this.loginService.userType = 'parent';
    this.loginService.userName = data.user.displayName.split(" ")[0]+ " "+ data.user.displayName.split(" ")[1];
      let res = {
        code : 200,
        message : "Login Successful",
        userType: "parent",
        data : {
          email_id: data.user.email,
          first_name: data.user.displayName.split(" ")[0],
          last_name: data.user.displayName.split(" ")[1],
          login_id: data.user.uid,
          login_ind: 2,
          password: ""
        }
      };
      console.log("doGoogleLogin -> res", res)
      this.success(res);
    });
  }
}
