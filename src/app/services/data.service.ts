import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { Signup } from '../signup';
import{HttpClient,HttpHeaders} from '@angular/common/http';
const apiKey='AIzaSyBjMH2MA9wGavyfX4DDW-kzMeKy9BqwOz4';
const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'X-My-custom-Header':`${apiKey}`,
    'Access-Control-Allow-Origin':'*'

  })}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private baseUrl='https://firestore.googleapis.com/v1/projects/health-max-hmo/databases/(default)/documents/inquiry';
 
  enroll(contactMessage:Contact){
   return this._http.post<any>(this.baseUrl, contactMessage);
  } 
  signupEnroll(contactMessage:Signup){
   return this._http.post<any>(this.baseUrl, contactMessage);
  } 
  constructor(private _http:HttpClient) { }
}
