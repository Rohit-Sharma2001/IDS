import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   defaultUrl:any='https://ids-ten.vercel.app/'

  constructor(private http:HttpClient) { }

  post(url:string,body:any){
   return  this.http.post(this.defaultUrl+url,body)
  }
}
