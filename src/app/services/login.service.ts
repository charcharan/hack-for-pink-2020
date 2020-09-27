import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from  '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
	search:any;
  constructor(public datePipe:DatePipe,public afAuth: AngularFireAuth, private http: HttpClient)  { }// Inject Firebase auth service
  userName: string="";
  userType:string="";
  userid : string ="";
  studentData: any;
doLogin(data):Observable<any>{
	return this.http.get<any>("http://localhost:3000/api/login/"+data.userName+"/"+data.password, {responseType: 'json'});
}
doRegister(data : any) : Observable<any>{
	let reg = {
		"firstName" : data.get('firstName').value,
		"lastName" : data.get('lastName').value,
		"emailId" : data.get('emailId').value,
		"password" : data.get('password').value,
		"loginInd" : 1
	}
	return  this.http.post<any>("http://localhost:3000/api/register",reg,{responseType: 'json'});
}
// // Sign in with Google
GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }  

//    // Auth logic to run auth providers
   AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }
setSearchData(data: any) {
	this.search = data;
}
getSearchData() {
	return this.search;
}
getloginType(){
	return this.userType;
}
setStudentInfo(studentData:any) {
this.studentData = studentData;
}
getStudentInfo() {
	return this.studentData;
}
submitPermRqst(data : any) : Observable<any>{
	
	return  this.http.post<any>("http://localhost:3000/api/raiseRqst",data,{responseType: 'json'});
}

fetchAnnounce() : Observable<any> {
	return this.http.get<any>("http://localhost:3000/api/announcements", {responseType: 'json'});
}

fetchEvents() : Observable<any> {
	return this.http.get<any>("http://localhost:3000/api/events/", {responseType: 'json'});
}
fetchTimeLine(studentId :string, date:string) : Observable<any> {
	return this.http.get<any>("http://localhost:3000/api/timeline/"+studentId+"/"+date, {responseType: 'json'});
}
deleteAnnouncement(annId:number) {
	return this.http.put<any>("http://localhost:3000/api/deleteAnnouncements/"+annId, {responseType: 'json'});
}
addAnnouncement(data : any) : Observable<any>{  
    return  this.http.post<any>("http://localhost:3000/api/addAnnounce",data,{responseType: 'json'});
}
getPermRqst(){
    return this.http.get<any>("http://localhost:3000/api/fetchPerRqst", {responseType: 'json'});
}
dltOrApprovRqst(id : any, status: any) : Observable<any>{ 
    return  this.http.get<any>("http://localhost:3000/api/dltOrApprovRqst/"+id+"/"+status,{responseType: 'json'});
}
getCalendarEvents(std: any) : Observable<any>{ 
    return  this.http.get<any>("http://localhost:3000/api/calendarEvents/"+std,{responseType: 'json'});
}
doStudentRegister(data : any) : Observable<any>{	
	let reg = {
		"studentName" : data.get('studentName').value,
		"dob" : this.datePipe.transform(data.get('dob').value, 'YYYY-MM-DD'),
		"gender" : data.get('gender').value,
		"standard" : data.get('standard').value,		
		"fatherName" : data.get('fatherName').value,
		"motherName" : data.get('motherName').value,
		"emergency" : data.get('emergencyContct').value
	}
	return  this.http.post<any>("http://localhost:3000/api/studentRegister",reg,{responseType: 'json'});
}
searchStudent(data:string){
	return this.http.get<any>("http://localhost:3000/api/student/"+data, {responseType: 'json'});
}
getParentKid(data:string){
	return this.http.get<any>("http://localhost:3000/api/getParentKid/"+data, {responseType: 'json'});
}

addHomeWork(data : any) {
    return  this.http.post<any>("http://localhost:3000/api/addHomeWork",data,{responseType: 'json'});
}

getHomeWorkList(std: any) : Observable<any>{ 
    return  this.http.get<any>("http://localhost:3000/api/homeWorkList/"+std,{responseType: 'json'});
}
}
