import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private http:HttpClient ) { }
//  url:string =  environment.nodeNotifUrl+"/notify/notification/:id";

 getNotification(id){
  // let url = this.url.replace(':id',id);
  // return this.http.get<any>(url, {responseType: 'json'});
}


}
