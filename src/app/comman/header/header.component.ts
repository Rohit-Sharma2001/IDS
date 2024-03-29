import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
sidebar:boolean=false
userData:any
constructor(public router:Router,private auth:AuthService){
  let temp=localStorage.getItem('user')
  this.userData=temp?JSON.parse(temp):null
  if(!this.userData){
this.auth.userData.subscribe((data)=>{
  this.userData=data
})
  }
  
}

sign(){
  if(this.userData){
this.auth.setUserData(null)
this.navigate('')
  }else{
this.navigate('/login')
  }

}
toggleSidebar(bool:boolean){
  this.sidebar=bool

}

navigate(path:any){
  this.router.navigate([path])

}
}
