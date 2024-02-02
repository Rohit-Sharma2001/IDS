import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData=new Subject<any>()
  constructor() { 
    let temp=localStorage.getItem('user')
    if(temp){
    this.userData.next(JSON.parse(temp))
    }
  }

  setUserData(data:any){
    console.log(data)
localStorage.setItem('user',JSON.stringify(data))
this.userData.next(data)
  }
}
