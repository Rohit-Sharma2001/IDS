import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/comman/services/api.service';
import { AuthService } from 'src/app/comman/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 signupPage:boolean=false;
 constructor(private fb:FormBuilder,private api:ApiService,private router:Router, private auth:AuthService){}
 loginForm:FormGroup;
ngOnInit(){
this.loginForm=this.fb.group({
  email:['',Validators.required],
  name:[""],
  password:["",Validators.required],
  mobile:[""]
})
}

switch(bool:boolean){
this.signupPage=bool
if(bool){
  this.loginForm.controls['name'].setValidators(Validators.required)
this.loginForm.controls['mobile'].setValidators(Validators.required)
}
else{
  this.loginForm.controls['name'].removeValidators(Validators.required)
  this.loginForm.controls['mobile'].removeValidators(Validators.required)
  }



}

submit(){
if(this.loginForm.valid){
  let url=this.signupPage?'user/register':'user/login'
this.api.post(url,this.loginForm.value).subscribe((data:any)=>{
  console.log(data)
if(data.code){
  if(!this.signupPage){
  this.auth.setUserData(data.data)
  this.router.navigate([''])
}else{
this.signupPage=false
}
}
})
}else{

}
}

}
